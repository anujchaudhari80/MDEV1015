import React from 'react';
import { StatusBar } from 'react-native';
import Icon from '../Assignment1/components/Icon'; // Make sure to adjust the import accordingly
import SearchResult from './SearchResult';
import Login from './Login';
import Navigation from './Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from 'react-native-vector-icons'; // Adjust the import
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Flex from './Home';
import CartScreen from './Cart';
import ProfileScreen from './Profile';
import OrderHistoryScreen from './OrderHistory';
import Signup from './Signup';

const Stack = createNativeStackNavigator();
import { StyleSheet, Text, View, TextInput } from 'react-native';
import GymWearResult from './GymWearResult';
import ShoesResult from './ShoesResult';
import TrousersResult from './TrousersResult';
import ShirtsResult from './ShirtsResult';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// TabItem and TabArr definitions here...

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'green',
          headerTitleStyle: {
            fontSize: 24,
          },
        }} initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Flex} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="SearchResult" component={SearchResult} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
          <Stack.Screen name="OneStopShop" component={Navigation} />
          <Stack.Screen name="GymWearResult" component={GymWearResult} />
          <Stack.Screen name="ShirtsResult" component={ShirtsResult} />
          <Stack.Screen name="ShoesResult" component={ShoesResult} />
          <Stack.Screen name="TrousersResult" component={TrousersResult} />
          {/* Other screen components */}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#66BB6A',
    flex: 1,
  },
});

export { App };
