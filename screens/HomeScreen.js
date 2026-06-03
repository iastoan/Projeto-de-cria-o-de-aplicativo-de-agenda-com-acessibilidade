import React, { useState } from 'react';

import { useTheme } from '../useTheme';

import { Ionicons } from '@expo/vector-icons';

import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function HomeScreen({ navigation }) {

  const [menuAberto, setMenuAberto] = useState(false);

  return (

    <SafeAreaView style={styles.safeContainer}>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >


        <View style={styles.header}>

          <TouchableOpacity
            onPress={() => setMenuAberto(!menuAberto)}>

            <Ionicons
              name="menu"
              size={32}
              color="#ff6600"
            />
          </TouchableOpacity>
            
            <Text style={styles.title}>
              RECEITAS JÁ
            </Text>
        
        </View>

            {menuAberto && (

            <View style={styles.menu}>

              <TouchableOpacity
                 onPress={() =>
                  navigation.navigate('Accessibility')}>
   
                <Text style={styles.menuItem}>
                  ♿ Acessibilidade
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Profile', {
                  userName: global.userName,
                })}>
                
                <Text style={styles.menuItem}>
                  👤 Perfil
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => alert('Aplicativo desenvolvido para a faculdade')}>

                  <Text style={styles.menuItem}>
                    ℹ️ Sobre
                  </Text>
              </TouchableOpacity>

          </View>

)}

        {/* CARD 1 */}

        <View style={styles.card}>

          <Image
            source={require('../assets/photos/hamburguer.jpg')}
            style={styles.image}
            resizeMode="cover"
          />

          <View style={styles.cardContent}>

            <Text style={styles.recipeTitle}>
              Hambúrguer Artesanal
            </Text>

            <Text style={styles.recipeDescription}>
              melhor que o BIG MAC
            </Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Recipe')}
            >
              <Text style={styles.buttonText}>
                Ver Receita
              </Text>
            </TouchableOpacity>

          </View>

        </View>

        {/* CARD 2 */}

        <View style={styles.card}>

          <Image
            source={require('../assets/photos/Pizza-de-calabresa.jpg')}
            style={styles.image}
            resizeMode="cover"
          />

          <View style={styles.cardContent}>

            <Text style={styles.recipeTitle}>
              Pizza Caseira
            </Text>

            <Text style={styles.recipeDescription}>
              massa italiana que nao pode colocar ketchup perto deles
            </Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Recipe')}
            >
              <Text style={styles.buttonText}>
                Ver Receita
              </Text>
            </TouchableOpacity>

          </View>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safeContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 25,
  },

  scrollContent: {
    paddingTop: 25,
    paddingBottom: 120,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 25,
    elevation: 5,
  },

  image: {
    width: '100%',
    height: 200,
  },

  cardContent: {
    padding: 15,
  },

  recipeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  recipeDescription: {
    color: '#777',
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#ff6600',
    padding: 12,
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ff6600',
    marginLeft: 15,
    flex: 1,
  },

  menu: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 5,
  },

  menuItem: {
    fontSize: 18,
    paddingVertical: 10,
  },

});