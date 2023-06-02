import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Home from "./src/screens/Home";

export default function App() {
  return (
    <SafeAreaView style={{
      flex: 1,
      alignItems: "center",
      paddingTop: 48,
    }}>
    <Home />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}