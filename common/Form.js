import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity 
} from 'react-native';

export default class Regform extends React.Component {
    render() {
        return (
            <View style={styles.regform}>
                <Text style={styles.header}>Colegio</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    regform: {
        alignSelf: 'stretch',
    },
    header: {
        fontSize: 30,
        color: '#e02c2c',
        paddingBottom: 10,
        textAlign: 'center',
    }
});