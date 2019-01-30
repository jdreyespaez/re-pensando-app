import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import Logo from '../common/Logo';
import Boton from '../common/Boton';

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
      header: null,
    };
  
    onPressBack = () => {
      this.props.navigation.pop();
      // this.props.navigation.goBack();
    };
  
    onPressSchool = () => {
        this.props.navigation.push('ProfileScreen', { name: "COLEGIO" });
    };

    onPressCompany = () => {
        this.props.navigation.push('CompanyScreen', { name: "EMPRESA" });
      };

    render() {
      return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.viewContainer}>
                <Text style={styles.subtitle}>
                ¿El proyecto <Text style={{fontWeight: "bold"}}>RE-PENSANDO LA BASURA</Text>{"\n"}se está desarrollando en: 
                </Text>
                {/* Paso 8: Definimos el conjunto de Botones que se renderizarán en un componente stateless */}
                <View style={styles.btnContainer}>    
                    <Boton 
                        style={styles.btn} 
                        onPress={this.onPressSchool}
                        > Colegio 
                    </Boton>
                    <Boton 
                        style={styles.btn}
                        onPress={this.onPressCompany}
                        > Empresa </Boton>
                </View>
            </View>
        </View>
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
    viewContainer: {
        flex: 1,
        backgroundColor:'white',
        margin: 10
    },
    subtitle: {
        fontSize: 15,
        color: 'black',
        textAlign: 'center'
    },
    btnContainer: {
        marginTop: 50,
        marginRight: 40,
        marginLeft: 40,
    },
    // Paso 9: Agregar el estilo btn para que se use como la base de cada uno
    btn: {
        margin: 10,
    },
});
  
  