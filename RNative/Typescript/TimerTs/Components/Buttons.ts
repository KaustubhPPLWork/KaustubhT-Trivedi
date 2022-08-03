import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import Laps from "./Laps";

const Buttons = (props) => {
  return (
    <View>
      <View style={styles.buttons}>
        <Button title="Start" onPress={props.handleStart} />
      </View>
      <View style={styles.buttons}>
        <Button title="Stop" onPress={props.handlePauseResume} />
      </View>
      <View style={styles.buttons}>
        <Button title="Reset" onPress={props.handleReset} />
      </View>

      <View>
        <Laps time={props.time}/>
      </View>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  buttons: {
    margin: 10,
    paddingHorizontal: 25,
  },
});