import React, { Component } from "react";
import { Text, View, TextInput, Button } from "react-native";
import i18n from "../i18n/i18n";
import styles from "../styles/styles";
import globals from "../globals";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 100
    };

    this.changeLevel = this.changeLevel.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.header, { marginBottom: 30 }]}>
          {i18n.t("Please choose difficulty level")}
        </Text>
        <View
          style={[
            styles.inputOuter,
            {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 10,
              paddingBottom: 10,
              marginBottom: 30
            }
          ]}
        >
          <TextInput
            style={[styles.input]}
            keyboardType="number-pad"
            value={this.state.level.toString()}
            onChangeText={e => this.changeLevel(e)}
          />
          <Text style={[styles.input, { marginRight: 20 }]}>%</Text>
        </View>
        <Button title={i18n.t("Next")} />
      </View>
    );
  }

  changeLevel(e) {
    console.log(e);
    this.setState({
      level: e
    });
    globals.level = e;
  }
}

export default HomeScreen;
