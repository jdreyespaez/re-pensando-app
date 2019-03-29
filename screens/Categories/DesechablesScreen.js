import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import { Constants } from "expo";
import Slider from '../../common/Slider';

export default class DesechablesScreen extends React.Component {
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

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Desechables</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Para ayudarte a identificar el material señalado te damos estas imágenes de referencia:
          </Text>
          <ScrollView scrollEventThrottle={16}>
            <Slider imageUri={require('../../assets/categories/subCat1_vaso.png')} />
          </ScrollView>
        </View>
      </ScrollView>
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
    margin: 20
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
  textContainer: {
    margin: 20
  },
  text: {
    fontSize: 15,
    color: "black"
  }
});
