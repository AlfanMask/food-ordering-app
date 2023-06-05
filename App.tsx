import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Home from "./src/screens/Home";
import RestaurantDetail from './src/screens/RestaurantDetail';

export default function App() {
  return (
    <SafeAreaView style={{
      flex: 1,
      alignItems: "center",
      // paddingTop: 48,
    }}>
    {/* <Home /> */}
      <RestaurantDetail />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}