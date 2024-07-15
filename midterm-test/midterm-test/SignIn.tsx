import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';

const GroceryDeliveryScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/groceries.jpg')} style={styles.backgroundImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Get your groceries with nectar</Text>
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>+880</Text>
          </TouchableOpacity>
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('./assets/google-logo.png')} style={styles.socialIcon} />
              <Text style={styles.socialButtonText}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
            <Image source={require('./assets/facebook-logo.png')} style={styles.socialIcon} />
              <Text style={styles.socialButtonText}>Continue with Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end', // thay đổi ở đây
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    marginBottom: 20, // thêm margin ở đây
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  actionContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#42B72A',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialContainer: {
    width: '100%',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialButtonText: {
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default GroceryDeliveryScreen;