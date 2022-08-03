import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

const Laps = (props) => {
  const mins = ("0" + Math.floor((props.time / 60000) % 60)).slice(-2);
  const secs = ("0" + Math.floor((props.time / 1000) % 60)).slice(-2);
  const milisecs = ("0" + ((props.time / 10) % 100)).slice(-2);

  const [laps, setLaps] = useState([{}]);

  const lapHandler = () => {
    setLaps([...laps, { mins, secs, milisecs }]);
    console.log(laps);
  };
  return (
    <View>
      <View style={styles.buttons}>
        <Button title="Lap" onPress={lapHandler} />
      </View>

      <View>
        {laps.map((lap) => {
          <Text>
            {lap.mins}:{lap.secs}:{lap.milisecs}
          </Text>;
        })}
      </View>
    </View>
  );
};

export default Laps;
const styles = {
  buttons: {
    margin: 10,
    paddingHorizontal: 25,
  },
};