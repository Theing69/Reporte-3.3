import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Infoscreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ESTE ES EL EJERCICIO 7 ES EL RETO DE AGREGAR 2 OPCIONES MAS AL EJERCICIO PARA EL PROFE MINERO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});