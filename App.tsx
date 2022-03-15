import React from 'react';
import { ThemeProvider } from 'styled-components';

import { StatusBar } from 'expo-status-bar';
import { Dashboard } from './src/screens/dashboard';

import theme from './src/global/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      <Dashboard />
    </ThemeProvider>
  );
}
