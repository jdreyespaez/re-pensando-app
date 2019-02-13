import React from 'react';
import {  View, 
          Text, 
          StyleSheet,
          ScrollView,
        } from 'react-native';
import { Constants } from 'expo';
import CompanyForm from '../common/CompanyForm';
import Boton from '../common/Boton';

export default class CompanyScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  onPressGuardar = () => {
    this.props.navigation.push('CongratsScreen');
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <CompanyForm />
          <Boton 
            style={styles.btn}
            onPress={this.onPressGuardar}
            > Guardar </Boton>  
        </View>
      </ScrollView>
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
  },
  btn: {
    margin: 10,
  },
});