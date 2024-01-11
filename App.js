import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Anucios } from './src/components/Anuncios/Anuncios';
import theme from './src/styles/theme';
import { Home } from './src/screens/Home/Home';

export default function App() {
  return (
    <ThemeProvider theme={theme}>

        <Home />
    </ThemeProvider>
  );
}