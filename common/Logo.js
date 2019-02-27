import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class Logo extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{flex: 1,
                        width: '100%',
                        }}
                    source={require('../assets/icon.png')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        width: 250, 
        height: 250, 
        //backgroundColor: 'powderblue',
        alignSelf: 'center',
        justifyContent: 'center',
        //alignItems: 'center',
    }
});