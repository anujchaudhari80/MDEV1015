import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, Image, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Flex = () => {
  return (
    <View style={styles.container}>
        <ScrollView>
          <SearchBox />
          <ContentList />
          <HomeScreen />
          <DescriptionItems/>
        </ScrollView>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.titleContainer}>
      <Image source={require('./assets/HomeShopping.jpeg')} style={styles.titleBG} />
      <Text style={styles.title}>Shop it!</Text>
    </View>
  );
};

const SearchBox = () => {
  const [value, setValue] = useState('');

  return (
    <View style={SBStyles.container}>
      <TextInput
        style={SBStyles.input}
        placeholder="Search"
        onChangeText={(text) => setValue(text)}
        value={value}
      />
    </View>
  );
};

const ContentList = () => {
  const navigation = useNavigation();
  const handleImageClick = (tabName: string) => {
    navigation.navigate('GymWearResult');
  };
  const ShoesWearClick = (tabName: string) => {
    navigation.navigate('ShoesResult');
  }
  const TrousersWearClick = (tabName: string) => {
    navigation.navigate('TrousersResult');
  }
  const ShirtsWearClick = (tabName: string) => {
    navigation.navigate('ShirtsResult');
  }
  return (
    <View style={styles.imagecontainer}>
      <TouchableOpacity style={styles.itemContainer} onPress={() => handleImageClick('GymWearResult')}>
        <Image source={require('./assets/GymWear.png')} style={styles.itemImage} />
        <Text style={styles.itemText}>Gym Wear</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer} onPress={() => ShoesWearClick('ShoesResult')}>
        <Image source={require('./assets/Shoes.png')} style={styles.itemImage} />
        <Text style={styles.itemText}>Shoes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer} onPress={() => TrousersWearClick('TrousersResult')}>
        <Image source={require('./assets/Trousers.png')} style={styles.itemImage} />
        <Text style={styles.itemText}>Trousers</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer} onPress={() => ShirtsWearClick('ShirtsResult')}>
        <Image source={require('./assets/Shirts.png')} style={styles.itemImage} />
        <Text style={styles.itemText}>Shirts</Text>
      </TouchableOpacity>
    </View>
  );
};

const DescriptionItems =() =>{

  return(
      <View style = {styles.categoryContainer}>
          <Text style={styles.categoryText}>Women Dresses</Text>
          <View style = {styles.categoryImageContainer}>
            <View style={styles.descriptionItem}>
            <Image source={require('./assets/Fashion1.png')} style={styles.ImageWrapper} />
            <Text style={styles.DescriptionStyle}>Short Balck Dress</Text>
            <Text>30 CAD</Text>
          </View>
          <View style={styles.descriptionItem}>
            <Image source={require('./assets/Fashion2.png')} style={styles.ImageWrapper}/>
            <Text style={styles.DescriptionStyle}>NIKA Full Length Frock</Text>
            <Text>99 CAD</Text>
          </View>
          <View style={styles.descriptionItem}>
            <Image source={require('./assets/Fashion4.png')} style={styles.ImageWrapper}/>
            <Text style={styles.DescriptionStyle}>Women Short Green Dress</Text>
            <Text>Starts from 69 CAD</Text>
          </View>
          <View style={styles.descriptionItem}>
            <Image source={require('./assets/Fashion5.png')} style={styles.ImageWrapper}/>
            <Text style={styles.DescriptionStyle}>Long Net Maxi</Text>
            <Text>Starts from 40 CAD</Text>
          </View>
          <View style={styles.descriptionItem}>
            <Image source={require('./assets/Fashion6.png')} style={styles.ImageWrapper}/>
            <Text style={styles.DescriptionStyle}>Red Short Dress</Text>
            <Text>Starts from 80 CAD</Text>
          </View>
          <View style={styles.descriptionItem}>
            <Image source={require('./assets/Fashion7.jpeg')} style={styles.ImageWrapper}/>
            <Text style={styles.DescriptionStyle}>Lace Dress</Text>
            <Text>Starts from 120 CAD</Text>
          </View> 
          </View>
      </View >
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: Platform.OS === 'android' ? 0 : 0, // Adjust top padding for Android
    backgroundColor: '#66BB6A',
  },
  titleContainer: {
    width: '100%',
  },
  title: {
    fontSize: Platform.OS == "web" ? 70 : 25,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    transform: [{ translateY: -12.5 }],
  },
  titleBG: {
    width: '100%',
    height: Platform.OS == "web" ? 600 : 200,
    resizeMode : "cover"
  },
  imagecontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 7,
  },
  itemContainer: {
    alignItems: 'center',
    margin: 10,
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  itemText: {
    textAlign: 'center',
    marginTop: 5,
  },
  categoryText: {
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 16,
  },
  descriptionItem:{
    alignItems: 'center',
    marginVertical: 10,
    marginLeft : 10
  },
  ImageWrapper: {
    alignContent:'center',
    justifyContent:'space-evenly',
    marginVertical: 10,
    width: 150,
    height:200,
  },
  DescriptionStyle :{
  },
  categoryContainer: {
    flexDirection: "column",
    alignContent: "center",
    backgroundColor: "#A7D3A9",
    borderRadius: 30,
    margin: Platform.OS == "web" ? 20 : 10
  },
  categoryImageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  searchIcon : {
        width : 20,
        height : 20,
        marginLeft : 10
    },
    cancelIcon : {
        width : 20,
        height : 20,
        marginRight : 10
    },
});

const SBStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 7
  },
  input: {
    width: '90%',
    height: 40,
    borderRadius: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor:'white',
  },
});

export default Flex;
