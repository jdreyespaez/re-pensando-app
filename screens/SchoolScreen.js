import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import Form from '../common/Form';

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
        <View style={styles.container}>
            <Form style={styles.form} />
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
  form: {
    // flex: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});