import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Constants } from "expo";
import Boton from "../common/Boton";


export default class CongratsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  onPressSiguiente = () => {
    this.props.navigation.push("HowToScreen");
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>¡Felicitaciones estás registrado!</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/felicitaciones.png")}
              resizeMode="contain"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Esta APP es una herramienta interactiva que te va indicar como
              disponer correctamente tus residuos. {"\n"}
              {"\n"}
              Además, a través de ella puedes registrarlos, esto habilitará
              semanalmente una sección de la atrevida historia gráfica{" "}
              <Text style={{ fontWeight: "bold" }}>"INSINUACIÓN"</Text>. {"\n"}
              {"\n"}
              <Text style={{ textAlign: "center" }}>¡No te lo pierdas!</Text>
            </Text>
          </View>
          {/* <TouchableOpacity
            style={styles.dotsContainer}
            onPress={this.onPressSiguiente}
          >
            <Image
              source={require("../assets/unoDeDos.png")}
              resizeMode="contain"
            />
          </TouchableOpacity> */}
          <Boton style={styles.btn} onPress={this.onPressSiguiente}>
            {" "}
            ¿Cómo funciona esta app?{" "}
          </Boton>
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
    fontSize: 35,
    fontWeight: "bold",
    color: "#e02c2c",
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
  },
  dotsContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  btn: {
    margin: 10
  }
});
