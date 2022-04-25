import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom';
import ControllerTheme from './components/ThemeController';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import "./index.css"


ReactDOM.render(
 <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles>
    <NotificationsProvider>
      <ModalsProvider>
        <ControllerTheme />
      </ModalsProvider>
    </NotificationsProvider>
  </MantineProvider>,
  document.getElementById('root')
);


