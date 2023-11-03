import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const OrderHistoryScreen = () => {
const orders = [
{
id: '1',

items: [
{
id: '1',
name: 'Product 1',
quantity: 2,
price: 9.99,
image: require('./assets/table2.jpeg'),
},
{
id: '2',
name: 'Product 2',
quantity: 1,
price: 12.99,
image: require('./assets/table1.jpeg'),
},
{
  id: '3',
  name: 'Product 3',
  quantity: 1,
  price: 10.99,
  image: require('./assets/Watches.png'),
},
{
  id: '4',
  name: 'Product 4',
  quantity: 1,
  price: 55.99,
  image: require('./assets/Bicycle.png'),
},
{
  id: '5',
  name: 'Product 5',
  quantity: 1,
  price: 21.99,
  image: require('./assets/Shoes.png'),
  
},
{
  id: '6',
  name: 'Product 6',
  quantity: 1,
  price: 18.99,
  image: require('./assets/table5.jpeg'),
  
},
{
  id: '7',
  name: 'Product 7',
  quantity: 1,
  price: 5.99,
  image: require('./assets/Shirts.png'),
  
},
{
  id: '8',
  name: 'Product 8',
  quantity: 1,
  price: 6.99,
  image: require('./assets/GymWear.png'),
  
},
],
},
// Add more orders as needed
];

const renderItem = ({ item }) => {
  return (
    <View style={styles.orderContainer}>
      <Text style={styles.orderDate}>{item.date}</Text>
      <Text style={styles.orderTotal}>Total: ${item.total}</Text>
      <FlatList
        data={item.items}
        keyExtractor={(product) => product.id}
        renderItem={({ item: product }) => (
          <View style={styles.itemContainer}>
            <Image source={product.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{product.name}</Text>
              <Text style={styles.itemPrice}>
                Quantity: {product.quantity} | Price: ${product.price}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

return (
<View style={styles.container}>
<Text style={styles.title}>Order History</Text>
<FlatList
data={orders}
keyExtractor={(item) => item.id}
renderItem={renderItem}
contentContainerStyle={styles.listContainer}
/>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'stretch',
padding:20,
paddingTop: 20,
},
title: {
fontSize: 25,
fontWeight: 'bold',
marginBottom: 10,
backgroundColor:"#66BB6A"
},
listContainer: {
width: '100%',

},
orderContainer: {
marginBottom: 20,
},
orderDate: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 5,
},
orderTotal: {
fontSize: 16,
marginBottom: 5,
},
itemContainer: {
flexDirection: 'row',
alignItems: 'stretch',
marginBottom: 10,
},
itemImage: {
width: 50,
height: 50,
//borderRadius: 25,
marginRight: 10,
marginLeft:10,
paddingBottom:10
},
itemDetails: {
flex: 1,
},
itemName: {
fontSize: 16,
fontWeight: 'bold',
},
itemPrice: {
fontSize: 14,
color: '#777',
},
});

export default OrderHistoryScreen