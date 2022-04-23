import { Center, Table, ScrollArea  } from "@mantine/core";
import { useState, useEffect } from "react";
import { Switch } from '@mantine/core';
import Moment from 'moment';
import axios  from "../../services/api";

const ListingSchedule = () => {
  const [schedules, setSchedules] = useState([]);
  const setValueSwitch = (value) => {
    if(value){
      return true
    }else{
      return false
    }
  }

useEffect(() => {
    axios.get("/schedule").then((response) => setSchedules(response.data));
}, []);

  return (
    <ScrollArea><Center><Table highlightOnHover horizontalSpacing="md" verticalSpacing="md"   style={{ marginTop: -15 }} >
      <thead>
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
        {schedules.map((schedule) => (
          <tr key={schedule.id}>
            <td>{schedule.name}</td>
            <td>{Moment(schedule.birthDate).format("DD/MM/YYYY")}</td>
            <td>{Moment(schedule.schedule).format("DD/MM/YYYY")}</td>
            <td>{Moment(schedule.schedule).format( 'HH:mm')}</td>
            <td>
              <Switch color = 'red' size="md" radius={"xl"} checked={setValueSwitch()} onLabel="ON" offLabel="NO" />
              </td>
            <td>{schedule.descriptionSchedule}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </Center>
    </ScrollArea>
  );
};

export default ListingSchedule;
