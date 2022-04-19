import { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import styles from "./Styles";
export default function App() {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState([]);
  const handleOnChangeText = (enteredText) => {
    setGoal(enteredText);
  };
  const buttonClickHandler = () => {
    console.log(goals);
    setGoals((goals) => [...goals, goal]);
    // goals.push(goal);
  };
  const clearButtonHandler = () => {
    setGoals([]);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputBox}>
        {/* user input  */}
        <TextInput
          placeholder="Course Goal"
          value={goal}
          onChangeText={handleOnChangeText}
          style={styles.textInput}
        />
        <Button
          title="Submit"
          style={styles.button}
          onPress={buttonClickHandler}
        />
      </View>
      <View>
        <Button title="Clear" onPress={clearButtonHandler} />
        {goals.map((goal) => (
          <Text key={goal}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}
