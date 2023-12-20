import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from './components/Icon'; // Make sure to import your Icon component correctly
import OrderHistoryScreen from './OrderHistory';
import CartScreen from './Cart';
import ProfileScreen from './Profile';
import Flex from './Home';
// import Icon from './components/Icon';
import Icon  from 'antd';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Tab = createBottomTabNavigator();

type TabItem = {
  route: string;
  label: string;
  // type: keyof typeof Icons;
  activeIcon: string;
  inActiveIcon: string;
  component: React.ComponentType<any>;
  iconLibrary: string;
};

const TabArr: TabItem[] = [
  {
    route: 'Home',
    label: 'Home',
    // type: 'Ionicons',
    activeIcon: 'home',
    inActiveIcon: 'home-outline',
    component: Flex,
    iconLibrary: 'home'
  },
  {
    route: 'History',
    label: 'History',
    // type: 'Ionicons',
    activeIcon: 'book',
    inActiveIcon: 'book',
    component: OrderHistoryScreen,
    iconLibrary: 'book'
  },
  {
    route: 'Cart',
    label: 'Cart',
    // type: 'MaterialCommunityIcons',
    activeIcon: 'home',
    inActiveIcon: 'home',
    component: CartScreen,
    iconLibrary: 'home'
  },
  {
    route: 'Profile',
    label: 'Profile',
    // type: 'FontAwesome5',
    activeIcon: 'user',
    inActiveIcon: 'user',
    component: ProfileScreen,
    iconLibrary: 'user'
  },
];

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#66BB6A',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: 'black' },
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarLabel: item.label,
              tabBarIcon: ({ color, focused }) => (
                // <Icon
                //   type='home'
                //   theme={focused ? 'filled' : 'outlined'}
                // />
                <AntDesign name="home" size={24} color={color} />
                // <AntIcon name='minuscircleo' size={24} color='#66BB6A' />
                // const IconComponent = focused ? item.iconLibrary : item.iconLibrary;
                // return <IconComponent name={focused ? item.activeIcon : item.inActiveIcon} size={24} color={color} />;
                ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default Navigation;
