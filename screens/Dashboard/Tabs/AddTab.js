import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Constants } from "expo";

export default class CongratsScreen extends React.Component {
  static navigationOptions = {
    header: null,
    headerMode: "none",
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../../../assets/tabNavigator/addTabIcon.png")}
        style={{ width: 25, height: 25, tintColor: "#ffffff" }}
      />
    )
  };

  onPressEmpaquesComida = () => {
    this.props.navigation.push("EmpaquesComida");
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
              <TouchableOpacity onPress={this.onPressEmpaquesComida}>
                <Image
                  style={styles.categoryImage}
                  source={require("../../../assets/categories/empaques_de_comida.png")}
                />
              </TouchableOpacity>
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
            <View style={styles.category}>
              <Image
                style={styles.categoryImage}
                source={require("../../../assets/categories/envases_liquidos.png")}
              />
            </View>
          </View>
          <View style={styles.categoryContainer}>
            <View style={styles.category}>
              <Image
                style={styles.categoryImage}
                source={require("../../../assets/categories/ropa_zapatos_telas.png")}
              />
            </View>
          </View>
          <View style={styles.categoryContainer}>
            <View style={styles.category}>
              <Image
                style={styles.categoryImage}
                source={require("../../../assets/categories/carton_papel.png")}
              />
            </View>
          </View>
          <View style={styles.categoryContainer}>
            <View style={styles.category}>
              <Image
                style={styles.categoryImage}
                source={require("../../../assets/categories/plastico_icopor.png")}
              />
            </View>
          </View>
          <View style={styles.categoryContainer}>
            <View style={styles.category}>
              <Image
                style={styles.categoryImage}
                source={require("../../../assets/categories/pilas_areosoles.png")}
              />
            </View>
          </View>
          <View style={styles.categoryContainer}>
            <Image
              style={styles.categoryImage}
              source={require("../../../assets/categories/agregar_otro.png")}
            />
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
    backgroundColor: "#fff",
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
    backgroundColor: "#fff"
  },
  categoryImage: {
    width: "100%",
    height: "100%"
  }
});
