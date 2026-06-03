import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../useTheme';

const temas = {
  claro: {
    background: '#ffffff',
    text: '#000000',
    button: '#0057B8',
  },

  protanopia: {
    background: '#f5f5f5',
    text: '#111111',
    button: '#FFB000',
  },

  deuteranopia: {
    background: '#eef2f3',
    text: '#111111',
    button: '#0088FF',
  },

  tritanopia: {
    background: '#f0f0ff',
    text: '#222222',
    button: '#7a5cff',
  },
};

export default function AccessibilityScreen() {


  const { tema, setTemaAtual } = useTheme();

  return (

    <View style={[styles.container, { backgroundColor: tema.background }]}>

      <Text style={[styles.title, { color: tema.text }]}>
        Acessibilidade
      </Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: tema.button }]}
        onPress={() => setTemaAtual('claro')}
      >
        <Text style={styles.buttonText}>Tema Normal</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: tema.button }]}
        onPress={() => setTemaAtual('protanopia')}
      >
        <Text style={styles.buttonText}>Protanopia</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: tema.button }]}
        onPress={() => setTemaAtual('deuteranopia')}
      >
        <Text style={styles.buttonText}>Deuteranopia</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: tema.button }]}
        onPress={() => setTemaAtual('tritanopia')}
      >
        <Text style={styles.buttonText}>Tritanopia</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  button: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },

});