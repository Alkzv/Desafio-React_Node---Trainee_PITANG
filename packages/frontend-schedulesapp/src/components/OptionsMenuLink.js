import React from 'react';
import {Home, Notebook, List, InfoCircle } from 'tabler-icons-react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';


function OptionsMenuLink({ icon, label, path }) {
  const navigate = useNavigate();
  return (
    <UnstyledButton
      onClick={() => navigate(path)}
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Group>
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
          {icon}
        </ThemeIcon>

        <Text size="sm" weight={500}>{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const datas = [
  { icon: <Home size={20} />, label: 'Inicio', path: '/'},
  { icon: <Notebook size={20} />, label: 'Registrar Agendamentos',  path: 'schedule/register'},
  { icon: <List size={20} />, label: 'Listar agendamentos', path: 'schedule/listing' },
  { icon: <InfoCircle size={20} />, label: 'Sobre',  path: '/about'},
];

export function OptionsMenuLinks() {
  return <div>{datas.map((data) => <OptionsMenuLink {...data} key={data.label} />)}</div>;
}

