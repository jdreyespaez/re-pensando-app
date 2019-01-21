import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
      title: 'Registro',
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
    }
});
  
  