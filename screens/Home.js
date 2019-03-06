import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
        <TouchableOpacity
          raised
          onPress={() => this.props.navigation.navigate("Dashboard")}
        >
          <Text>Get Started</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen;
