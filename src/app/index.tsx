import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import '../../global.css';
import { SafeAreaView } from 'react-native-safe-area-context';
import Watch from '@/components/watch';

LogBox.ignoreAllLogs()

export default function App() {
  return (
    <View className="flex-1 bg-darklightBlue">
      <SafeAreaView className="flex-1 justify-center items-center">
        <Watch />
        <Text>Open up App.tsx to start working on your app!</Text>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

