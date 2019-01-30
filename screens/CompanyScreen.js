import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Constants } from 'expo';


export default class CompanyScreen extends React.Component {
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
});