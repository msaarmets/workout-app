import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/styles";

const Counter = props => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 120 }}>{props.time}</Text>
    </View>
  );
};

export default Counter;
