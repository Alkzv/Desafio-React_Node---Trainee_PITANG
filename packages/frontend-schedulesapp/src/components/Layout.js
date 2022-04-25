import React, { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  Group,
  useMantineTheme,
  Center,
  Image,
} from "@mantine/core";
import { OptionsMenuLinks } from "./OptionsMenuLink";
import { Outlet } from "react-router-dom";
import ThemeDark from "./ThemeDark";

const Layout = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <OptionsMenuLinks />
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Aside
            p="md"
            hiddenBreakpoint="sm"
            width={{ sm: 200, lg: 300 }}
          ></Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p="md">
          <Center>
            <Text weight={400}>
              <i>
                Copyright 2022 by Lucas Alkimim Chaves. All Rights Reserved.
              </i>
            </Text>
          </Center>
        </Footer>
      }
      header={
        <Header height={110} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Group
              sx={{ display: "flex", alignItems: "center", height: "100%" }}
              px={12}
              position="apart"
            >
              <ThemeDark />
            </Group>
            <Group
              sx={{ display: "flex", alignItems: "center", height: "100%" }}
              style={{ margin: 500 }}
              position="apart"
            >
              <div
                style={{
                  width: 210,
                  marginBottom: "auto",
                  marginRight: "auto",
                }}
              >
                <Image
                  radius="md"
                  src="../../logoScheduleApp.png"
                  alt="Logo ScheduleApp"
                />
              </div>
            </Group>
          </div>
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  );
};

export default Layout;
