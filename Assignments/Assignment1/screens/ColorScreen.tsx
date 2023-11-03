import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Styles from '../common/Styles';
import Colors from '../constants/Colors';
import MyHeader from '../components/MyHeader';
import { RouteProp, NavigationProp } from '@react-navigation/native';

type ColorScreenProps = {
  route: RouteProp<RootStackParamList, 'ColorScreen'>;
  navigation: NavigationProp<RootStackParamList, 'ColorScreen'>;
};

type RootStackParamList = {
  ColorScreen: { name: string };
};

export default function ColorScreen({ route, navigation }: ColorScreenProps) {
  const viewRef = useRef<Animatable.View>(null);
  const [bgColor, setBgColor] = useState<string | undefined>();

  useEffect(() => {
    switch (route.params?.name) {
      case 'Home': {
        setBgColor(Colors.primary);
        break;
      }
      case 'Search': {
        setBgColor(Colors.green);
        break;
      }
      case 'Add': {
        setBgColor(Colors.red);
        break;
      }
      case 'Account': {
        setBgColor(Colors.purple);
        break;
      }
      case 'Like': {
        setBgColor(Colors.yellow);
        break;
      }
      default:
        setBgColor(Colors.white);
    }
  }, [route.params?.name]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      viewRef.current?.animate({ 0: { opacity: 0.5 }, 1: { opacity: 1 } });
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={Styles.container}>
      <MyHeader
        menu
        onPressMenu={() => navigation.goBack()}
        title={route.params?.name}
        right="more-vertical"
        onRightPress={() => console.log('right')}
      />
      <Animatable.View
        ref={viewRef}
        easing={'ease-in-out'}
        style={Styles.container}>
        <View style={{ backgroundColor: bgColor, flex: 1 }} />
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({});
