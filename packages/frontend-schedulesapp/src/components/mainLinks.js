import React from 'react';
import { GitPullRequest, AlertCircle, Messages, Database } from 'tabler-icons-react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';


function MainLink({ icon, label, path }) {
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
      <ThemeIcon size="lg" variant="gradient" gradient={{ from: '#ed6ea0', to: 'red', deg: 35 }}>
          {icon}
        </ThemeIcon>

        <Text size="sm" weight={500}>{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const datas = [
  { icon: <GitPullRequest size={20} />, label: 'Home', path: '/'},
  { icon: <AlertCircle size={20} />, label: 'Register Schedules',  path: 'schedule/register'},
  { icon: <Messages size={20} />, label: 'Listing Schedules', path: 'schedule/listing' },
  { icon: <Database size={20} />, label: 'About',  path: '/about'},
];

export function MainLinks() {
  return <div>{datas.map((data) => <MainLink {...data} key={data.label} />)}</div>;
}

