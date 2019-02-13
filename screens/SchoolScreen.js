import React from 'react';
import {  View, 
          Text, 
          StyleSheet,
          ScrollView,
        } from 'react-native';
import { Constants } from 'expo';
import Form from '../common/Form';
import Boton from '../common/Boton';

export default class SchoolScreen extends React.Component {
    static navigationOptions = {
        header: null,
      };

    onPress = () => {
        // Go back to login
        this.props.navigation.popToTop();
    };

    render() {
        return (
        <ScrollView>
          <View style={styles.container}>
          <Form style={styles.form} />
          <Boton 
            style={styles.btn}
            onPress={this.onPress}
            > Guardar </Boton>  
        </View>
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  form: {
    // flex: 1,
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