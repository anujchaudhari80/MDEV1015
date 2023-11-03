import React, { ReactNode } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Badge, Surface, Text, Title } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../constants/Colors';

interface AppHeaderProps {
  style?: any;
  menu?: boolean;
  onPressMenu?: () => void;
  back?: boolean;
  onPressBack?: () => void;
  title?: string;
  right?: string;
  rightComponent?: ReactNode;
  onRightPress?: () => void;
  optionalBtn?: string;
  optionalBtnPress?: () => void;
  headerBg?: string;
  iconColor?: string;
  titleAlight?: 'left' | 'center' | 'right';
  optionalBadge?: string;
}

const IconSize = 24;

const AppHeader: React.FC<AppHeaderProps> = ({
  style,
  menu,
  onPressMenu,
  back,
  onPressBack,
  title,
  right,
  rightComponent,
  onRightPress,
  optionalBtn,
  optionalBtnPress,
  headerBg = 'white',
  iconColor = 'black',
  titleAlight,
  optionalBadge,
}) => {
  const LeftView: React.FC = () => (
    <View style={styles.view}>
      {menu && (
        <TouchableOpacity onPress={onPressMenu}>
          <Feather name="menu" size={IconSize} color={iconColor} />
        </TouchableOpacity>
      )}
      {back && (
        <TouchableOpacity onPress={onPressBack}>
          <Feather name="arrow-left" size={IconSize} color={iconColor} />
        </TouchableOpacity>
      )}
    </View>
  );

  const RightView: React.FC = () => (
    rightComponent ? (
      rightComponent
    ) : (
      <View style={[styles.view, styles.rightView]}>
        {optionalBtn && (
          <TouchableOpacity style={styles.rowView} onPress={optionalBtnPress}>
            <Feather name={optionalBtn} size={IconSize} color={iconColor} />
            {optionalBadge && (
              <Badge style={{ position: 'absolute', top: -5, right: -10 }}>
                {optionalBadge}
              </Badge>
            )}
          </TouchableOpacity>
        )}
        {/* {right !== '' && (
          <TouchableOpacity onPress={onRightPress}>
            <Feather name={right} size={IconSize} color={iconColor} />
          </TouchableOpacity>
        )} */}
      </View>
    )
  );

  const TitleView: React.FC = () => (
    <View style={styles.titleView}>
      <Title style={{ color: iconColor, textAlign: titleAlight }}>{title}</Title>
    </View>
  );

  return (
    <Surface style={[styles.header, style, { backgroundColor: headerBg }]}>
      <LeftView />
      <TitleView />
      <RightView />
    </Surface>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    elevation: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  view: {
    marginHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleView: {
    flex: 1,
  },
  rightView: {
    justifyContent: 'flex-end',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
});

export default AppHeader;
