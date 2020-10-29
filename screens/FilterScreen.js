import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FilterScreen = (props) => {
  return (
    <View style={style.screen}>
      <Text>Example</Text>
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

export default FilterScreen;
