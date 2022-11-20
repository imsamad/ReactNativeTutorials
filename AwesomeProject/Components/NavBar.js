import React from "react";
import { Button, StyleSheet, View } from "react-native";

const NavBar = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <Button
        style={styles.btn}
        title="Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <Button
        style={styles.btn}
        title="Details"
        onPress={() => {
          navigation.navigate("Details");
        }}
      />
      <Button
        style={styles.btn}
        title="Details Push"
        onPress={() => {
          navigation.push("Details");
        }}
      />
      <Button
        style={styles.btn}
        title="Home Push"
        onPress={() => {
          navigation.push("Home");
        }}
      />
      <Button
        style={styles.btn}
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    borderWidth: 5,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    // marginBottom: 8,
    marginEnd: 5,
  },
});

export default NavBar;
