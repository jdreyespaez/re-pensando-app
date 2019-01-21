import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class Logo extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../assets/icon.png')}
                    resizeMode="contain"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});