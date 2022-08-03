// RN specific Functions
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
// Components
import Timer from "./Components/Timer";
import Buttons from "./Components/Buttons";
export default function App() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  // Updating time using setInterval
  useEffect(() => {
    let interval:any;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  // Handling Start
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  const handlePauseResume = () => {
    setIsPaused(true);
  };
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <View style={styles.container}>
      <Timer time={time} />
      <Buttons
        time={time}
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
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