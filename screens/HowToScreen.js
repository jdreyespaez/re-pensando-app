import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Constants } from 'expo';

export default class HowToScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    onPressSiguiente = () => {
        this.props.navigation.push('HowToScreen');
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>¿Cómo funciona esta App?</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                        1. Selecciona de las categorías que tenemos, el tipo de producto o material que deseas registrar.{"\n"}
                        {"\n"}
                        2. La aplicación te dará las pautas para clasificar y disponer correctamente tus residuos para que <Text style={{textDecorationLine: 'underline'}}>no sean conviertan en basura</Text>. {"\n"}
                        {"\n"}
                        3. Si registras tus residuos, la aplicación realizará semanalmente un gráfico estadístico de estos, donde podrás identificar cuales produces en mayor y menor medida. {"\n"}
                        </Text>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../assets/graficaResiduos.png')}
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../assets/felicitaciones.png')}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.dotsContainer}>
                        <Image
                            source={require('../assets/masmas.png')}
                            onPress={this.onPressSiguiente}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.dotsContainer}>
                        <Image
                            source={require('../assets/dosDeDos.png')}
                            onPress={this.onPressSiguiente}
                            resizeMode="contain"
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

import { useScreens } from 'react-native-screens';
import { ScrollView } from 'react-native-gesture-handler';
useScreens();

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        padding: 8,
    },
    titleContainer: {
        margin: 40,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#e02c2c',
        textAlign: 'center',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        margin: 20,
    },
    text: {
        fontSize: 15,
        color: 'black',
    },
    dotsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});