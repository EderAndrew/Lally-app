import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import '../../global.css';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Watch from '@/components/watch';
import { Redirect } from 'expo-router';

LogBox.ignoreAllLogs()

export default function App() {
  return (
    <SafeAreaProvider>
      <Redirect href="/(tabs)/home" />
    </SafeAreaProvider>
  );
}

