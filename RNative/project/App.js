import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {/* user input  */}
        <TextInput
          placeholder="Course Goal"
          style={{
            width: "80%",
            height: 40,
            borderBottomColor: "black",
            borderWidth: 1,
          }}
        />
        <Button title="Submit" />
      </View>
      <View>{/* Paragraph  */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
