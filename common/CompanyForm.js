import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TextInput,
    TouchableOpacity,
    Picker,
} from 'react-native';

export default class Regform extends React.Component {
    constructor(){
        super();
        this.state={
            PickerValue:''
        }
    };
    render() {
        return (
            <View style={styles.regform}>
                <Text style={styles.header}>Empresa</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>
                        NOMBRE EMPRESA
                    </Text>
                    <TextInput 
                        style={styles.textInput}
                        keyboardType='default'
                        placeholder='¿Cuál es tu colegio?'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>
                        NOMBRES
                    </Text>
                    <TextInput 
                        style={styles.textInput}
                        keyboardType='default'
                        placeholder='¿Cuáles son tus nombres?'    
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>
                        APELLIDOS
                    </Text>
                    <TextInput 
                        style={styles.textInput}
                        keyboardType='default'
                        placeholder='¿Cuáles son tus apellidos?'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>
                        ROL
                    </Text>
                    <Picker 
                        style={styles.picker}
                        selectedValue={this.state.PickerValue}
                        onValueChange={
                            (itemValue,itemIndex) => 
                                this.setState({PickerValue:itemValue})
                        }
                    >
                        <Picker.Item label="Empleado profesional" value="empleado-profesional" />
                        <Picker.Item label="Gerente" value="gerente" />
                    </Picker>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>
                        CORREO
                    </Text>
                    <TextInput 
                        style={styles.textInput}
                        keyboardType='email-address'
                        placeholder='¿Cuál es tu correo electrónico?'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>
                        GÉNERO
                    </Text>
                    <Picker 
                        style={styles.picker}
                        selectedValue={this.state.PickerValue}
                        onValueChange={
                            (itemValue,itemIndex) => 
                                this.setState({PickerValue:itemValue})
                        }
                    >
                        <Picker.Item label="Masculino" value="masculino" />
                        <Picker.Item label="Femenino" value="femenino" />
                    </Picker>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>
                        BARRIO
                    </Text>
                    <TextInput 
                        style={styles.textInput}
                        keyboardType='default'
                        placeholder='¿En qué barrio vives?'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>
                        CONTRASEÑA
                    </Text>
                    <TextInput 
                        style={styles.textInput}
                        secureTextEntry={true}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    regform: {
        alignSelf: 'stretch',
        marginLeft: 10,
        marginRight: 10,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#e02c2c',
        paddingBottom: 20,
        textAlign: 'center',
    },
    inputContainer: {
        alignSelf: 'stretch',
        borderColor: '#979797',
        borderWidth: 2,
        height: 60,
        marginBottom: 15,
    },
    inputTitle: {
        color: '#979797',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 5,
    },
    textInput: {
        color: '#000000',
        height: 40,
        marginLeft: 10,
        marginTop: -5,
    },
    picker: {
        // alignSelf: 'stretch',
        marginLeft: 10,
        marginTop: -10,
    }
});