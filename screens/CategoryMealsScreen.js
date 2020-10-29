import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoryMealsScreen = (props) => {
  return (
    <View style={style.screen}>
      <Text>Category Meals Screen</Text>
      <Button
        title="Go to Meal Details!"
        onPress={() => {
          props.navigation.navigate("MealDetails");
          // props.navigation.push("MealDetails");
        }}
      />
      <Button
        title="Go back"
        onPress={() => {
          props.navigation.goBack();
          // props.navigation.pop();
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

export default CategoryMealsScreen;
