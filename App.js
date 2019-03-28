import * as React from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";
import { Constants, Font } from "expo";
import { createStackNavigator, createAppContainer } from "react-navigation";
import RegisterScreen from "./screens/RegisterScreen";
import CompanyScreen from "./screens/CompanyScreen";
import SchoolScreen from "./screens/SchoolScreen";
import CongratsScreen from "./screens/CongratsScreen";
import HowToScreen from "./screens/HowToScreen";
import Home from "./screens/Home";
import Logo from "./common/Logo";
import EmpaquesComida from "./screens/Categories/EmpaquesComida";
import DesechablesScreen from "./screens/Categories/DesechablesScreen";


class LoginScreen extends React.Component {
  // state = { loggedIn: false };

  // componentWillMount() {
  //   firebase.initializeApp({
  //     apiKey: "AIzaSyCO54nG_Q0JTbHxhK4fvh1Z0JrFvZWAoZk",
  //     authDomain: "auth-reapp.firebaseapp.com",
  //     databaseURL: "https://auth-reapp.firebaseio.com",
  //     projectId: "auth-reapp",
  //     storageBucket: "auth-reapp.appspot.com",
  //     messagingSenderId: "791621201484"
  //   });

  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       this.setState({ loggedIn: true });
  //     } else {
  //       this.setState({ loggedIn: false });
  //     }
  //   });

  // }
  static navigationOptions = {
    header: null
  };

  onPress = () => {
    this.props.navigation.push("RegisterScreen");
  };

  // // Con esta helper function se crea una regla para mostrar una parte del 
  // // contenido o no mostrarlo.
  // renderContent() {
  //   if (this.state.loggedIn) {
  //     return (
  //       <Button>
  //         Salir!!!
  //       </Button>
  //     );
  //   }
  //   return (
  //     <Text>
  //       No está autenticado
  //     </Text>
  //   );
  // }

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <View style={styles.viewContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Bogotá sólo recicla el 15% de su basura.
            </Text>
          </View>
          <Text style={styles.subtitle}>
            ¿Quieres ser parte de este proyecto colaborativo para REDUCIR LA
            BASURA EN BOGOTÁ?
          </Text>
          <View style={styles.buttonContainer}>
            <Button title="Regístrate" color="#D70026" onPress={this.onPress} />
            {/* {this.renderContent()} */}
          </View>
        </View>
      </View>
    );
  }
}

const MainStackNavigator = createStackNavigator({
  LoginScreen,
  RegisterScreen,
  SchoolScreen: {
    screen: SchoolScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Perfil para " + navigation.getParam("name")
    })
  },
  CompanyScreen: {
    screen: CompanyScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Perfil para " + navigation.getParam("name")
    })
  },
  CongratsScreen,
  HowToScreen,
  Home,
  EmpaquesComida,
  DesechablesScreen,
});

// Link the back button on Android and manage the environment.

const NavigationApp = createAppContainer(MainStackNavigator);

// Export the App

export default NavigationApp;

/* CRAZY V3 PRO TIP: Native Navigation Containers */
import { useScreens } from "react-native-screens";
useScreens();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    // fontFamily: 'lato-black',
    textAlign: "center"
  },
  titleContainer: {
    marginBottom: 25
  },
  subtitle: {
    fontSize: 20,
    color: "black",
    // fontFamily: 'lato-regular',
    textAlign: "center"
  },
  viewContainer: {
    flex: 1,
    backgroundColor: "white",
    margin: 40
  },
  buttonContainer: {
    margin: 40,
    fontSize: 80
    // fontFamily: 'lato-regular'
  }
});
