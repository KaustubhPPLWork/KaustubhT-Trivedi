import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [text, setText] = useState("Is this where i Type??");
  const clickHandler = () => {
    setText("Button was clicked");
  };
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title="Change Text" onPress={clickHandler} /> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
