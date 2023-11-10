import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


//Type for the Icons object
type IconLibraries = {
  MaterialCommunityIcons: typeof MaterialCommunityIcons;
  MaterialIcons: typeof MaterialIcons;
  Ionicons: typeof Ionicons;
  Feather: typeof Feather;
  FontAwesome: typeof FontAwesome;
  FontAwesome5: typeof FontAwesome5;
  AntDesign: typeof AntDesign;
  Entypo: typeof Entypo;
  SimpleLineIcons: typeof SimpleLineIcons;
  Octicons: typeof Octicons;
  Foundation: typeof Foundation;
  EvilIcons: typeof EvilIcons;
};


export const Icons : IconLibraries = {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Feather,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Entypo,
  SimpleLineIcons,
  Octicons,
  Foundation,
  EvilIcons,
};

interface IconProps {
  type: keyof typeof Icons;
  name: string;
  color: string;
  size?: number;
  style?: object;
}

const Icon: React.FC<IconProps> = ({ type, name, color, size = 24, style }) => {
  const fontSize = 24;
  const Tag = Icons[type];
  return (
    <>
      {type && name && (
        <Tag name={name} size={size || fontSize} color={color} style={style} />
      )}
    </>
  );
};

export default Icon;
