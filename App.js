require("react-devtools-core").connectToDevTools({ host: "-ip-" });
import React from "react";
import { StyleSheet } from "react-native";
import i18n from "./src/i18n/i18n";
import HomeScreen from "./src/screens/HomeScreen";

export default class App extends React.Component {
  render() {
    return <HomeScreen style={styles.container} />;
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
