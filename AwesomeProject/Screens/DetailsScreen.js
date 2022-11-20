import { Button, Text, View } from "react-native";
import NavBar from "../Components/NavBar";

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <NavBar navigation={navigation} />
      <Button
        title="Go to Home Screen... again"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
export default DetailsScreen;
