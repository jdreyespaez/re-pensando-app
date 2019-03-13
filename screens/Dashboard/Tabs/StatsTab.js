import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Constants } from "expo";

export default class CongratsScreen extends React.Component {
  static navigationOptions = {
    header: null,
    headerMode: "none",
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../../../assets/tabNavigator/statsTabIcon.png")}
        style={{ width: 25, height: 25, tintColor: "#ffffff" }}
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Estadísticas</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8
  },
  titleContainer: {
    margin: 40
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#e02c2c",
    textAlign: "center"
  }
});
