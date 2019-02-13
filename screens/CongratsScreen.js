import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import Boton from '../common/Boton';

export default class CongratsScreen extends React.Component {
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
                <Text style={styles.title}>
                    ¡Felicitaciones estás registrado!
                </Text>
                <Boton 
                    style={styles.btn}
                    onPress={this.onPress}
                > Salir </Boton> 
            </View>
        )
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
    title: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});