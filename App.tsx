import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dashboard } from './src/screens/dashboard';

export default function App() {
  return (
    <>
      <StatusBar />
      <Dashboard />
    </>
  );
}
