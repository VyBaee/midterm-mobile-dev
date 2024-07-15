import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';

const GroceryDeliveryScreen = () => {
  return (
    <ImageBackground source={require('./assets/image.png')} style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image source={require('./assets/Group.png')} style={styles.logo} />
          <Text style={styles.welcomeText}>Welcome to our store</Text>
        </View>
        <Text style={styles.deliveryText}>Get your groceries in as fast as one hour</Text>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Get Started</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  contentContainer: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  welcomeContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  welcomeText: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  deliveryText: {
    fontSize: 13,
    marginBottom: 30,
    color: '#fff',
  },
  buttonContainer: {
    backgroundColor: '#42B72A',
    paddingVertical: 15,
    paddingHorizontal: 90,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GroceryDeliveryScreen;