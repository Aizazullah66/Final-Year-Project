import React, { useEffect } from "react";
import { Text, View, Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    console.log("HomeScreen mounted");

    return () => {
      console.log("HomeScreen unmounted");
    };
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      console.log("HomeScreen focused");

      return () => {
        console.log("HomeScreen unfocused");
      };
    }, [])
  );

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default HomeScreen;