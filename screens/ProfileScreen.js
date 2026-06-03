import React, { useState } from 'react';

import { useTheme } from '../useTheme';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen({ route }) {

  const userName =
  route?.params?.userName ||
  global.userName ||
  'Usuário';

  const [bio, setBio] = useState(
    'Clique no lápis para editar sua bio'
  );

  const [editingBio, setEditingBio] = useState(false);

  const [daltonismo, setDaltonismo] = useState(false);

            const primaryColor = daltonismo
              ? '#0057B8'
              : '#ff6600';

  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity
          onPress={() => navigation.openDrawer()}>
          <Ionicons
            name="menu"
            size={30}
            color="#ff6600"
          />
        </TouchableOpacity>

        <Image
          source={{
            uri: 'foto_de_perfil_vazia.jpg',
          }}
          style={styles.profileImage}
        />

        <Text style={styles.name}>
          {userName}
        </Text>

        {/* BIO */}

        <View style={styles.bioContainer}>

          {editingBio ? (

            <TextInput
              value={bio}
              onChangeText={setBio}
              style={styles.bioInput}
              multiline={true}
            />

          ) : (

            <Text style={styles.bio}>
              {bio}
            </Text>

          )}

          {/* BOTÃO LÁPIS */}

          <TouchableOpacity
            onPress={() =>
              setEditingBio(!editingBio)
            }
          >

            <Ionicons
              name="pencil"
              size={24}
              color= {primaryColor}
            />

          </TouchableOpacity>

        </View>

        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            style={styles.accessibilityButton}
            onPress={() => setDaltonismo(!daltonismo)}>

            <Text style={styles.accessibilityText}>
              ♿ Modo Daltonismo: {daltonismo ? 'Ativado' : 'Desativado'}
            </Text>
          </TouchableOpacity>
        </View>

      </View>

      {/* BOTÃO + */}

      <TouchableOpacity
        style={[
          styles.addButton,
        { backgroundColor: primaryColor }
        ]}
>

        <Ionicons
          name="add"
          size={35}
          color="#fff"
        />

      </TouchableOpacity>

      <Text style={styles.sectionTitle}>
        Minhas Receitas
      </Text>

      {/* RECEITA 1 */}

      <View style={styles.recipeCard}>

        <Image
          source={require('../assets/photos/hamburguer.jpg')}
          style={styles.recipeImage}
        />

        <Text style={styles.recipeTitle}>
          Hambúrguer Artesanal
        </Text>

      </View>

      {/* RECEITA 2 */}

      <View style={styles.recipeCard}>

        <Image
          source={require('../assets/photos/Pizza-de-calabresa.jpg')}
          style={styles.recipeImage}
        />

        <Text style={styles.recipeTitle}>
          Pizza Caseira
        </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15,
  },

  bioContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  bio: {
    fontSize: 18,
    color: 'gray',
    marginRight: 10,
    textAlign: 'center',
  },

  bioInput: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    width: 250,
    marginRight: 10,
  },

  addButton: {
    backgroundColor: '#ff6600',
    width: 75,
    height: 75,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 30,
    elevation: 5,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 20,
  },

  recipeCard: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 4,
  },

  recipeImage: {
    width: '100%',
    height: 180,
  },

  recipeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 15,
  },

  accessibilityButton: {
    backgroundColor: '#e0e0e0',
    padding: 12,
    borderRadius: 10,
    marginTop: 15,
    alignSelf: 'center',
  },

  accessibilityText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});