// RN specific import
import { StyleSheet, View, Text, Button } from "react-native";
//
const Landing = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={styles.buttons}>
        <Button
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
      <View style={styles.buttons}>
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
      </View>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  buttons: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
