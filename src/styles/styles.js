import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  inputOuter: {
    borderWidth: 1,
    borderColor: "gray",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    /* width: 300, */
    padding: 0
  },
  input: {
    color: "gray",
    justifyContent: "center",
    alignItems: "stretch",
    fontSize: 30
  },
  header: {
    fontSize: 30,
    color: "gray",
    marginTop: 30,
    textAlign: "center"
  },
  textCenter: {
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 20
  },
  errorText: {
    fontSize: 16,
    color: "#cc0000"
  },
  button: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default styles;
