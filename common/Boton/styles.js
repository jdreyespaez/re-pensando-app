// Paso 10: Declarando los estilos del botón, primero los que serán la Base.
// Estos serán heredados en cada instancia y afectan a todos.
import { StyleSheet } from 'react-native';

const EstilosBasicos = StyleSheet.create({
  principal: {
    padding: 20,
    borderRadius: 5,
  },
  label: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20
  },
});

// Paso 11: Definir los estilos que llamará la función para cada botón.
 // Se definirán objetos para cada plantilla, sólo cambiará el color.
 const Rojo = StyleSheet.create({
    principal: {
      backgroundColor: '#e74c3c',
    },
  });
  
  const Gris = StyleSheet.create({
    principal: {
      backgroundColor: '#a9a9a9',
    },
  });
  
  const Default = StyleSheet.create({
    main: {
      backgroundColor: 'rgba(0 ,0 ,0, 0)',
    },
    label: {
      color: '#333',
    },
  });

// Paso 12: Exportando los estilos y plantillas creadas
export default EstilosBasicos;
export {
    Rojo,
    Gris,
    Default,
};