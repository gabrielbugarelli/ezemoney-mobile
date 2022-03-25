import React from 'react';
import AppLoading from 'expo-app-loading';

import { ThemeProvider } from 'styled-components';

import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import { StatusBar } from 'expo-status-bar';
import { Dashboard } from './src/screens/dashboard';

import theme from './src/global/styles/theme';
import { Register } from './src/screens/register';
import { CategorySelect } from './src/screens/CategorySelect';

export default function App() {

  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if(!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      {/* <Dashboard /> */}
      {/* <Register /> */}
      <CategorySelect />
    </ThemeProvider>
  );
}
