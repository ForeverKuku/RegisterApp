import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/picture2.jpg')}
        style={styles.image}
      />
      <Text style={styles.signInText}>Register</Text>
      <View style={styles.card}>
        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="gray" />
          <TextInput
            placeholder="Username"
            style={styles.input}
          />
          </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="gray" />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Sign In')}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.socialIcons}>
        <TouchableOpacity>
          <Icon name="facebook" size={30} color="#3b5998" style={styles.iconSpacing} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="google" size={30} color="#DB4437" style={styles.iconSpacing} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="apple" size={30} color="#000" style={styles.iconSpacing} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  card: {
    width: '95%',
    maxWidth: 600,
    borderRadius: 10,
    padding: 20,
    backgroundColor: 'white',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  input: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 8
  },
  rowOutsideCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%' 
  },
  text: {
    color: 'gray'
  },
  button: {
    backgroundColor: '#191C32',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%', 
    marginTop: 20
  },
  iconSpacing: {
    marginHorizontal: 10 
  },
  signInText: {
    fontWeight: 'bold',
    fontSize: 30
  }
});
export default App;