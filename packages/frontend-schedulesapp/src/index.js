import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom';
import ControllerTheme from './controller/ControllerTheme';

ReactDOM.render(
 <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles>
      <ControllerTheme />
  </MantineProvider>,
  document.getElementById('root')
);


