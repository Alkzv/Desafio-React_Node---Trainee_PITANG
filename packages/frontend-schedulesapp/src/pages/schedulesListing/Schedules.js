import {
  Button,
  Center,
  Grid,
  Input,
  InputWrapper,
  Modal,
  SegmentedControl,
  Table,
  Text,
} from "@mantine/core";
import { useState, useEffect } from "react";
import { useModals } from "@mantine/modals";
import Moment from "moment";
import axios from "../../services/Api";
import { TextInput, Badge } from "@mantine/core";
import { Edit, Search, Trash } from "tabler-icons-react";
import { Checkbox } from "@mantine/core";
import { showNotification } from "@mantine/notifications";

const ListingSchedule = () => {
  const [opened, setOpened] = useState([]);
  const modals = useModals();
  const [schedules, setSchedules] = useState([]);
  const [busca, setBusca] = useState("");
  const [value, setValue] = useState("asc");
  const lowerBusca = busca.toLowerCase();
  const schedulesFilter = schedules.filter((schedule) =>
    schedule.name.toLowerCase().includes(lowerBusca)
  );

  const onEditSchedule = async (id) => {
    try {
      const response = await axios.put(`/schedule/${id}`, form);
      axios
        .get(`/schedule/${value}`)
        .then((response) => setSchedules(response.data));
      showNotification({
        message: "Editado/adicionado com sucesso!",
        title: "Successo",
      });

      console.log(response);
    } catch (error) {
      showNotification({
        message: ` Erro ao Editar/adicionar! ERRO: ${error.response.data.message}`,
        title: "Falhou",
      });
    }
    console.log(form);
  };
  const onRemoveSchedule = async (id) => {
    modals.openConfirmModal({
      title: "Deletar seu agendamento",
      centered: true,
      children: (
        <Text size="sm">
          Você tem certeza que deseja deletar seu agendamento? Essa ação é
          destrutiva e você precisará entrar em contato com o suporte caso
          queira restaurá-la.
        </Text>
      ),
      labels: {
        confirm: "Deletar agendamento",
        cancel: "Não deletar agendamento",
      },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancelar"),
      onConfirm: async () => {
        try {
          const response = await axios.delete(`/schedule/${id}`);
          axios
            .get(`/schedule/${value}`)
            .then((response) => setSchedules(response.data));
          showNotification({
            message: "Deletado com sucesso!!",
            title: "Successo",
          });
          console.log(response);
        } catch (error) {
          showNotification({
            message: `Erro ao deletar! ERRO: ${error.response.data.message}`,
            title: "Falhou",
          });
        }
      },
    });
  };

  useEffect(() => {
    axios
      .get(`/schedule/${value}`)
      .then((response) => setSchedules(response.data));
  }, [value]);

  const [form, setForm] = useState({
    descriptionSchedule: "",
    realizedSchedule: false,
  });

  const onChange = (event) => {
    setForm({
      ...form,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  return (
    <>
      <Modal
        opened={opened[0]}
        onClose={() => setOpened(false)}
        title="Agendamento realizado ou não? (Status)"
      >
        <InputWrapper
          mb={8}
          id="descriptionSchedule"
          required
          label="Descrição do agendamento"
        >
          <Input
            id="descriptionSchedule"
            name="descriptionSchedule"
            onChange={onChange}
            value={form.descriptionSchedule}
          />
        </InputWrapper>

        <Checkbox
          label="Foi realizado o agendamento (Preencha, caso sim!)"
          mt={8}
          name="realizedSchedule"
          onChange={onChange}
          value={form.realizedSchedule}
        />
        <Button mt={16} onClick={() => onEditSchedule(opened[1])}>
          Editar/adicionar dados
        </Button>
      </Modal>

      <Grid columns={24}>
        <Grid.Col span={17}>
          <TextInput
            mb={30}
            icon={<Search size={18} />}
            size="md"
            className="shadow-type3"
            value={busca}
            onChange={(event) => setBusca(event.target.value)}
            placeholder=" Procurar nome do paciente agendado ou algumas letras"
          />
        </Grid.Col>
        <Grid.Col span={5}>
          <SegmentedControl
            value={value}
            defaultValue={"asc"}
            onChange={setValue}
            data={[
              { label: "Crescente", value: "asc" },
              { label: "Decrescente", value: "desc" },
            ]}
          />
        </Grid.Col>
      </Grid>
      <Center>
        <Table
          highlightOnHover
          horizontalSpacing="md"
          verticalSpacing="md"
          style={{ marginTop: -15 }}
        >
          <thead className="shadow-type1">
            <tr>
              <th>Nome</th>
              <th>Data Nascimento</th>
              <th>Data Agendamento</th>
              <th>Horário</th>
              <th>Status (Realizado)</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {schedulesFilter.map((schedule) => (
              <tr key={schedule.id} className="shadow-type2">
                <td>{schedule.name}</td>
                <td>{Moment(schedule.birthDate).utc().format("DD/MM/YYYY")}</td>
                <td>{Moment(schedule.schedule).utc().format("DD/MM/YYYY")}</td>
                <td>{Moment(schedule.schedule).utc().format("HH:mm")}</td>
                <td>
                  <Badge
                    variant="gradient"
                    gradient={{ from: "indigo", to: "cyan" }}
                  >
                    {schedule.realizedSchedule ? "Yes" : "No"}
                  </Badge>
                </td>
                <td>
                  {schedule.descriptionSchedule
                    ? schedule.descriptionSchedule
                    : "--"}
                </td>
                <td>
                  <Button
                    leftIcon={<Edit />}
                    onClick={() => setOpened([true, schedule.id])}
                    size="sm"
                    variant="gradient"
                    gradient={{ from: "indigo", to: "cyan" }}
                  />
                </td>
                <td>
                  <Button
                    leftIcon={<Trash />}
                    onClick={() => onRemoveSchedule(schedule.id)}
                    size="sm"
                    variant="gradient"
                    gradient={{ from: "indigo", to: "cyan" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Center>
    </>
  );
};

export default ListingSchedule;
