import { StyleSheet, View, Text } from "react-native";
import React, { FC } from "react";

interface PropsType{
  time:number
}


const Timer:FC<PropsType> = (props) => {
  const mins = ("0" + Math.floor((props.time / 60000) % 60)).slice(-2);
  const secs = ("0" + Math.floor((props.time / 1000) % 60)).slice(-2);
  const milisecs = ("0" + ((props.time / 10) % 100)).slice(-2);
  return (
   <View></View>
  );
};

export default Timer;
const styles = StyleSheet.create({
  timer: {
    fontSize: 70,
  },
});