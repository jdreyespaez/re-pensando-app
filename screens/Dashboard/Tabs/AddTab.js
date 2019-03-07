import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Constants } from "expo";

export default class CongratsScreen extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../../../assets/tabNavigator/addTabIcon.png")}
        style={{ width: 22, height: 22, tintColor: "#ffffff" }}
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>¿Qué quieres registrar?</Text>
        </View>
        <View style={styles.categories}>
          <View style={styles.categoryContainer}>
            <View style={styles.category}>
              <Image
                style={styles.categoryImage}
                source={require("../../../assets/categories/empaques_de_comida.png")}
              />
            </View>
          </View>
          <View style={styles.categoryContainer}>
            <View style={styles.category}>
              <Image
                style={styles.categoryImage}
                source={require("../../../assets/categories/comida.png")}
              />
            </View>
          </View>
          <View style={styles.categoryContainer}>
            <View style={styles.category} />
          </View>
          <View style={styles.categoryContainer}>
            <View style={styles.category} />
          </View>
          <View style={styles.categoryContainer}>
            <View style={styles.category} />
          </View>
          <View style={styles.categoryContainer}>
            <View style={styles.category} />
          </View>
          <View style={styles.categoryContainer}>
            <View style={styles.category} />
          </View>
          <View style={styles.categoryContainer}>
            <View style={styles.category} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: "center",
    // paddingTop: Constants.statusBarHeight,
    // padding: 8
  },
  titleContainer: {
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#e02c2c",
    textAlign: "center"
  },
  categories: {
    height: "85%",
    backgroundColor: "#000",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5
  },
  categoryContainer: {
    width: "50%",
    height: "20%",
    padding: 5
  },
  category: {
    flex: 1,
    backgroundColor: "orange"
  },
  categoryImage: {
    width: "100%",
    height: "100%"
  }
});
