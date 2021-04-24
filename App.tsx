import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
// screens
import { Welcome } from './src/screens';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular, Jost_600SemiBold
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <>
      <Welcome />
      <StatusBar style="auto" />
    </>
  );
}
