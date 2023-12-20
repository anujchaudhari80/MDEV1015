import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { signUpUser } from '../services/api.service';

const Signup = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleSignup () {
    //validate all fields
    if(firstName.length == 0 || lastName.length == 0 || email.length == 0 || password.length == 0 || confirmPassword.length == 0){
      Alert.alert("Please enter all the fields");
    }
    else if(password != confirmPassword){
      Alert.alert("Passwords do not match");
    }
    else {
    //call firebase auth method to create user
    signUpUser(email, password)
    .then(() => {
      console.log("User Created");
      Alert.alert("User account created successfully!");
      navigation.goBack();
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('Email address is already in use!');
        Alert.alert("Email address already in use");
      }
      else if (error.code === 'auth/invalid-email') {
        console.log('Email address is invalid!');
        Alert.alert('Email address is invalid');
      }
      else if (error.code === 'auth/weak-password'){
        console.log('Weak Password');
        Alert.alert('Please enter a strong password');
      }
      else {
        console.log(error.message);
        Alert.alert(`${error}`);
      }
    })
    }

    

  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.logo}>OneStopShop</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="First Name"
            placeholderTextColor="#000000"
            onChangeText={setFirstName}
            value={firstName}
            autoCorrect={false}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Last Name"
            placeholderTextColor="#000000"
            onChangeText={setLastName}
            value={lastName}
            autoCorrect={false}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email Id"
            placeholderTextColor="#000000"
            onChangeText={setEmail}
            value={email}
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#000000"
            onChangeText={setPassword}
            value={password}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Confirm Password..."
            placeholderTextColor="#000000"
            onChangeText={setConfirmPassword}
            value={confirmPassword}
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
