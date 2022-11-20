import { StyleSheet } from "react-native";
import React from "react";
import Todos from "./Todos";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "./Screens/DetailsScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  // return (
  //   <View>
  //     <Text>Hello</Text>
  //   </View>
  // );
  // return (
  //   <View style={styles.parent}>
  //     <Text>Hello</Text>
  //   </View>
  // );
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "Details" }}
        />
        <Stack.Screen
          name="Home"
          component={Todos}
          options={{ title: "Overview" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  parent: {
    height: "80%",
    width: "100%",
    // transform: [{ scaleX: 0.5 }],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: "hidden",
    borderColor: "red",
    borderWidth: 10,
  },
  child: {
    flex: 1,
    transform: [{ scaleX: 0.5 }],

    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    // border: "2px solid red",
    // borderColor: "red",
    // borderWidth: 10,
  },
});
