require("react-devtools-core").connectToDevTools({ host: "-ip-" });
import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import i18n from "./src/i18n/i18n";
import HomeScreen from "./src/screens/HomeScreen";
import WorkoutScreen from "./src/screens/WorkoutScreen";

export default class App extends React.Component {
  render() {
    return <AppContainer key="appcontainer" />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const StackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  WorkoutScreen: WorkoutScreen
});

const AppContainer = createAppContainer(StackNavigator);
