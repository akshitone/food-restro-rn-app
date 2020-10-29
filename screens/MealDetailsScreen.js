import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MealDetailsScreen = (props) => {
  return (
    <View style={style.screen}>
      <Text>Meal Details Screen</Text>
      <Button
        title="Go to home page"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailsScreen;
