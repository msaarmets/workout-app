import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Audio } from "expo";
import styles from "../styles/styles";

const Counter = props => {
  // TODO: if time is 3 digits long make font smaller
  // Play sound in the last 3 seconds
  if (props.time >= 0 && props.time <= 3) {
    props.playSound();
  }
  return (
    <View style={[styles.container]}>
      <View style={[counterStyles.outerCircle]}>
        <Text style={counterStyles.text}>{props.time}</Text>
      </View>
    </View>
  );
};

const counterStyles = StyleSheet.create({
  text: {
    fontSize: 120
  },
  outerCircle: {
    borderRadius: 300,
    borderColor: "black",
    borderWidth: 6,
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default Counter;
