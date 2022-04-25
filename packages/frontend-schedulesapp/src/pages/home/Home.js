import { Text } from "@mantine/core";

const Home = () => (
  <div>
    <Text
      component="span"
      align="center"
      variant="gradient"
      gradient={{ from: "indigo", to: "cyan", deg: 45 }}
      size="xl"
      weight={700}
      style={{ fontFamily: "Greycliff CF, sans-serif" }}
    >
      Bem Vindo ao Sistema de agendamentos - SchedulesApp
    </Text>
  </div>
);

export default Home;
