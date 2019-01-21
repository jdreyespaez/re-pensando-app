import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { Constants, Font } from 'expo';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import RegisterScreen from './screens/RegisterScreen';
import Logo from './common/Logo';

class LoginScreen extends React.Component {

  static navigationOptions = {
    header: null,
  }

  onPress = () => {
    this.props.navigation.push('RegisterScreen');
    /* this.props.navigation.navigate('HomeScreen'); */
  };

  render() {
      return (
          <View style={styles.container}>
              <Logo />
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

const MainStackNavigator = createStackNavigator(
  {
    LoginScreen,
    RegisterScreen,
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
    fontSize: 25,
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
viewContainer: {
    flex: 1,
    backgroundColor:'white',
    margin: 40
},
buttonContainer: {
    margin: 40,
    fontSize: 80,
    // fontFamily: 'lato-regular'
}
});

