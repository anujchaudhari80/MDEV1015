import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.logo}>OneStopShop</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="First Name..."
            placeholderTextColor="#000000"
            onChangeText={(text) => setFirstName(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Middle Name..."
            placeholderTextColor="#000000"
            onChangeText={(text) => setMiddleName(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Last Name..."
            placeholderTextColor="#000000"
            onChangeText={(text) => setLastName(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#000000"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#000000"
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Confirm Password..."
            placeholderTextColor="#000000"
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.signupBtn} onPress={handleSignup}>
          <Text style={styles.signupText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66BB6A',
  },
  subContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 50,
    color: '#fff',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#000000',
  },
  signupBtn: {
    width: '80%',
    backgroundColor: '#0c610c',
    borderRadius: 15,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default Signup;
