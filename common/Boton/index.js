import React, { Component } from 'react'; 
import { Text, TouchableOpacity, View, ViewPropTypes } from 'react-native'; 
import Base, { Rojo, Gris} from './styles';
import PropTypes from 'prop-types';

const { array, string, object, bool, func, any } = PropTypes;

class Boton extends Component {
    static propTypes = {
        // Paso 4: Definir las propiedades que recibirá el botón
        children: any,
        danger: bool,
        info: bool,
        // Ojo: ViewPropTypes es la nueva forma de nombrarlas antes era View.propTypes
        style: ViewPropTypes.style,
        success: bool,
        onPress: func,
    }
    usarPlantilla() {
        // Se definirá en el Paso 5.
    }

    render() {
        // Se definirá en el Paso 6.
    }
};

export default Boton;