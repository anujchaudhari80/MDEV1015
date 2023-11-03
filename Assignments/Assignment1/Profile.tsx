import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Navigation from './Navigation';

const ProfileScreen = ({routes, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://example.com/avatar.jpg' }} // Replace with your own avatar image URL
        />
        {/* Replace with the username */}
        <Text style={styles.username}>User Name</Text> 
      </View>
      <View style={styles.profileContent}>
        <View style={styles.bar}>
          <Text style={styles.barText}>Personal Information</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.infoText}>Email: user.name@example.com</Text>
          <Text style={styles.infoText}>Phone: +1 123-456-7890</Text>
        </View>
        <View style={styles.bar}>
          <Text style={styles.barText}>Address</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.infoText}>123 Main Street</Text> 
          <Text style={styles.infoText}>City: Anytown</Text>
          <Text style={styles.infoText}>Country: United States</Text>
        </View>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={() => navigation.reset({ index : 0, routes : [{name : 'Login'}]})}>
          <Text style={styles.saveButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66BB6A', // Updated background color
  },
  profileHeader: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileContent: {
    paddingHorizontal: 20,
  },
  bar: {
    backgroundColor: '#333',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  barText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  section: {
    backgroundColor: '#fff', // Set white background for sections
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  saveButton: {
    backgroundColor: '#616161',
    borderColor: '#616161',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    borderWidth : 2
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProfileScreen;