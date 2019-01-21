import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { Constants, Font } from 'expo';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

class LoginScreen extends React.Component {

  static navigationOptions = {
    header: null,
  }

  onPress = () => {
    this.props.navigation.push('HomeScreen');
    /* this.props.navigation.navigate('HomeScreen'); */
  };

  render() {
      return (
          <View style={styles.container}>
              <View style={styles.logoContainer}>
                  <Image
                      style={styles.logo}
                      source={require('./assets/icon.png')}
                      resizeMode="contain"
                  />
              </View>
              <View style={styles.viewContainer}>
                  <View style={styles.titleContainer}>
                      <Text style={styles.title}>Bogotá sólo recicla el 15% de su basura.</Text>
                  </View>
                  <Text style={styles.subtitle}>¿Quieres ser parte de este proyecto colaborativo para REDUCIR LA BASURA EN BOGOTÁ?</Text>
                  <View style={styles.buttonContainer}>
                      <Button
                          title="Regístrate"
                          color="#D70026"
                          onPress={this.onPress}
                      />
                  </View>
              </View>
          </View>
      )
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  onPressBack = () => {
    this.props.navigation.pop();
    // this.props.navigation.goBack();
  };

  onPressProfile = () => {
    // Send Data
    this.props.navigation.push('ProfileScreen', { height: "6'2", name: "COLEGIO" });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph} onPress={this.onPressBack}>
        Aquí el usuario elige si es de COLEGIO o EMPRESA
        </Text>

        <Text style={styles.paragraph} onPress={this.onPressProfile}>
          Registrarme
        </Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  onPress = () => {
    // Go back to login
    this.props.navigation.popToTop();
  };

  render() {
    const height = this.props.navigation.getParam('height');
    /* Old: this.props.navigation.state.params.height */
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Formulario de registro 
        </Text>

        <Text style={styles.paragraph} onPress={this.onPress}>
          SALIR
        </Text>
      </View>
    );
  }
}

/*

let stack = [];

stack.push(screenA);

// [screenA]

stack.push(screenB);

// [screenA, screenB]

stack.pop();

// [screenA]

*/

/*
 * Provides a way for your app to transition between screens 
 * where each new screen is placed on top of a stack.
 */
/* Old: = StackNavigator() */
const MainStackNavigator = createStackNavigator(
  {
    LoginScreen,
    HomeScreen: HomeScreen,
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Perfile para ' + navigation.getParam('name'),
      }),
    },
  },
  {
    // initialRouteName: 'HomeScreen',
    // mode: 'modal',
    // headerMode: 'float', // screen on android
    // headerBackTitleVisible: false,
    // headerTransitionPreset: 'fade-in-place',
    // headerLayoutPreset: 'left',
    // cardStyle: {
    //   backgroundColor: 'orange',
    // },
  }
);

// Link the back button on Android and manage the environment.

const NavigationApp = createAppContainer(MainStackNavigator);

// Export the App

export default NavigationApp;


/* CRAZY V3 PRO TIP: Native Navigation Containers */
import { useScreens } from 'react-native-screens';
useScreens();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    // fontFamily: 'lato-black',
    textAlign: 'center'
},
titleContainer: {
    marginBottom: 25
},
subtitle: {
    fontSize: 20,
    color: 'black',
    // fontFamily: 'lato-regular',
    textAlign: 'center'
},
logoContainer: {
    flex: 1,
    marginTop: 30
},
viewContainer: {
    flex: 1,
    backgroundColor:'white',
    margin: 40
},
logo: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: undefined, 
    width: undefined
},
buttonContainer: {
    margin: 40,
    fontSize: 80,
    // fontFamily: 'lato-regular'
}
});

