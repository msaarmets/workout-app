import React, { Component } from "react";
import { Text, View, TextInput, Button } from "react-native";
import i18n from "../i18n/i18n";
import styles from "../styles/styles";
import globals from "../globals";
import { createStackNavigator } from "react-navigation";

class WorkoutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>WorkoutScreen</Text>
      </View>
    );
  }
}

export default WorkoutScreen;
