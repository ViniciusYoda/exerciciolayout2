import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Parte superior com input de busca */}
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <Icon name="search" size={24} color="gray" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Where to?"
          />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Caixa amarela com texto */}
      <View style={styles.yellowBox}>
        <Text style={styles.yellowBoxText}>Finalize payment</Text>
      </View>

      {/* Textos abaixo da caixa amarela */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>Text 1</Text>
        <Text style={styles.text}>Text 2</Text>
        <Text style={styles.text}>Text 3</Text>
        <Text style={styles.text}>Text 4</Text>
        <Text style={styles.text}>Text 5</Text>
      </View>

      {/* Caixas com texto, botão, e imagem do carro */}
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <View style={styles.boxContent}>
            <Text style={styles.boxTitle}>Car 1</Text>
            <Text style={styles.boxSubText}>sub</Text>
            <TouchableOpacity style={styles.boxButton}>
              <Text style={styles.boxButtonText}>Button</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require('./car1.jfif')} // Substitua pelo caminho da imagem do carro
            style={styles.carImage}
          />
        </View>
        <View style={styles.box}>
          <View style={styles.boxContent}>
            <Text style={styles.boxTitle}>Car 2</Text>
            <Text style={styles.boxSubText}>sub</Text>
            <TouchableOpacity style={styles.boxButton}>
              <Text style={styles.boxButtonText}>Button</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require('./car2.jfif')} // Substitua pelo caminho da imagem do carro
            style={styles.carImage}
          />
        </View>
        <View style={styles.box}>
          <View style={styles.boxContent}>
            <Text style={styles.boxTitle}>Car 3</Text>
            <Text style={styles.boxSubText}>sub</Text>
            <TouchableOpacity style={styles.boxButton}>
              <Text style={styles.boxButtonText}>Button</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={require('./car3.jpg')} // Substitua pelo caminho da imagem do carro
            style={styles.carImage}
          />
        </View>
      </View>

      {/* Footer com 4 ícones */}
      <View style={styles.footer}>
        <Icon name="home" size={30} color="gray" />
        <Icon name="search" size={30} color="gray" />
        <Icon name="heart" size={30} color="gray" />
        <Icon name="person" size={30} color="gray" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  searchContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 50,
    padding: 8,
    backgroundColor: '#a0a0a0',
  },
  searchIcon: {
    marginLeft: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  searchButtonText: {
    color: 'black',
  },
  yellowBox: {
    backgroundColor: 'yellow',
    padding: 40,
    borderRadius: 10,
    marginBottom: 20,
  },
  yellowBoxText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
  },
  boxContainer: {
    flexDirection: 'column',
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  boxContent: {
    flex: 1,
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  boxSubText: {
    fontSize: 14,
    marginBottom: 20,
    
  },
  boxButton: {
    backgroundColor: 'black',
    width: 60,
    padding: 4,
    borderRadius: 10,
    textAlign: 'center'
  },
  boxButtonText: {
    color: 'white',
  },
  carImage: {
    width: 100,
    height: 100,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: 'gray',
    paddingTop: 10,
  },
});

export default App;
