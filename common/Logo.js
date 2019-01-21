import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class Logo extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/icon.png')}
                        resizeMode="contain"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        flex: 1,
        marginTop: 30
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: undefined, 
        width: undefined
    }
});