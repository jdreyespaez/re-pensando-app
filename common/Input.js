import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

const Input = ({ label, value, onChangeText, placeholder }) => {
  return (
    <View>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={styles.labelStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: "#6100ff",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    height: 20,
    width: 100
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20
  },
  containerStyle: {}
});

export default Input;
