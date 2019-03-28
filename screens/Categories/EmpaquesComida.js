import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Constants } from "expo";

export default class EmpaquesComida extends React.Component {
  static navigationOptions = {
    header: null,
    headerMode: "none",
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../../assets/tabNavigator/addTabIcon.png")}
        style={{ width: 25, height: 25, tintColor: "#ffffff" }}
      />
    )
  };

  onPressSiguiente = () => {
    this.props.navigation.push("HowToScreen");
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Empaques de comida</Text>
          </View>
          <View style={styles.subCatContainer}>
            <Image
              source={require("../../assets/categories/subCat_desechables.png")}
              resizeMode="contain"
              style={styles.subCatImg}
            />
            <Image
              source={require("../../assets/categories/subCat_paquetesComida.png")}
              resizeMode="contain"
              style={styles.subCatImg}
            />
          </View>
          <TouchableOpacity
            style={styles.dotsContainer}
            onPress={this.onPressSiguiente}
          />
        </View>
      </ScrollView>
    );
  }
}

import { useScreens } from "react-native-screens";
import { ScrollView } from "react-native-gesture-handler";
useScreens();

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
    fontSize: 25,
    fontWeight: "bold",
    color: "#625D28",
    textAlign: "center"
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  subCatContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  subCatImg: {
    marginTop: 20,
    marginBottom: 30
  }
});
