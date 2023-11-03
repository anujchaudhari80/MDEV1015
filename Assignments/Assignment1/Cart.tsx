import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CartScreen = () => {
  const items = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 15 },
    { id: 3, name: "Product 3", price: 20 },
  ];

  const renderItems = () => {
    return items.map((item) => (
      <View key={item.id} style={styles.itemContainer}>
        <Text>{item.name}</Text>
        <Text>${item.price}</Text>
      </View>
    ));
  };

  const calculateTotal = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price;
    });
    return total;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cart Screen</Text>
      <View style={styles.content}>{renderItems()}</View>
      <Text style={styles.total}>Total: ${calculateTotal()}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginVertical: 20,
  },
  content: {
    flex: 1, 
    width: '100%', 
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#398A46',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartScreen;