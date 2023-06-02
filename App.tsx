import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./src/screens/Home";

export default function App() {
  return (
    <View style={{
      flex: 1,
      alignItems: "center"
    }}>
    <Home />
      <StatusBar style="auto" />
    </View>
  );
}