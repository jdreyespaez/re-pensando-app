// Paso 10: Declarando los estilos del botón, primero los que serán la Base.
// Estos serán heredados en cada instancia y afectan a todos.
import { StyleSheet } from 'react-native';

const EstilosBasicos = StyleSheet.create({
  principal: {
    padding: 10,
    borderRadius: 3,
  },
  label: {
    color: '#fff',
  },
});