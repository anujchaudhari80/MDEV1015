import React from "react";
import { Button, Platform, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View, Image } from "react-native";

const SearchResult = ({navigation}) => {

    const products = [
        {
            id: 1,
            name: "Round Teak Wood Dining Table",
            price: 100,
            stock: 10,
            imageUrl: require('../assets/table1.jpeg'),
        },
        {
            id: 2,
            name: "Brown Wood Round Coffee Table",
            price: 180,
            stock: 4,
            imageUrl: require('../assets/table2.jpeg'),
        },
        {
            id: 3,
            name: "Modern Round Coffee Table",
            price: 230,
            stock: 20,
            imageUrl: require('../assets/table3.webp'),
        },
        {
            id: 4,
            name: "Modern Round Coffee Table",
            price: 199,
            stock: 6,
            imageUrl: require('../assets/table4.webp'),
        },
        {
            id: 5,
            name: "Modern Round Coffee Table",
            price: 160,
            stock: 15,
            imageUrl: require('../assets/table5.jpeg'),
        },
        {
            id: 6,
            name: "Modern Round Coffee Table",
            price: 240,
            stock: 4,
            imageUrl: require('../assets/table6.jpeg'),
        },
    ];



    // return(
    //     <SafeAreaView style = {styles.wrapper}>
    //         <View style = {[styles.boxStyle, styles.topBar]}>
    //             <View style = {styles.textArea}>
    //                 {/* <Text style = {styles.screenText}>Search Results</Text> */}
    //                 <View style = {styles.box1content}>
    //                     <Image source = {require('./assets/searchIcon.png')} style = {styles.searchIcon} />
    //                     <Text style = {styles.searchText}>Table</Text>
    //                     <Image source = {require('./assets/cancelIcon.png')} style = {styles.cancelIcon} />
    //                 </View>
    //             </View>
    //             <TouchableOpacity onPress={() => {
    //                 navigation.push('Cart');
    //                 }}>
    //                     <Image source={require('./assets/cartIcon.png')} style = {styles.cartIcon} />            
    //             </TouchableOpacity>
    //         </View>


    //         {/* <View style = {[styles.boxStyle, styles.box1]}>
                
    //             <View style = {styles.box1content}>
    //                 <Image source = {require('./assets/searchIcon.png')} style = {styles.searchIcon} />
    //                 <Text style = {styles.searchText}>Table</Text>
    //                 <Image source = {require('./assets/cancelIcon.png')} style = {styles.cancelIcon} />
    //             </View>
    //         </View> */}


    //         <View style = {[styles.boxStyle, styles.box2]}>
    //             <View style = {styles.productContainer}>
    //                 <View style = {styles.imageContainer}>
    //                     <Image source={require('./assets/table1.jpeg')} style = {styles.resultImage} />
    //                 </View>
    //                 <View style = {styles.descriptionContainer}>
    //                     <Text style = {styles.productName}>Round Teak Wood Dining Table</Text>
    //                     <View style = {styles.starContainer}>
    //                         {!(Platform.OS == "web") && (
    //                             <Text style = {styles.price}>$100</Text>
    //                         )}
                            // <Image source = {require('./assets/starFilled.jpeg')} style = {styles.ratingImage} />
                            // <Image source = {require('./assets/starFilled.jpeg')} style = {styles.ratingImage} />
                            // <Image source = {require('./assets/starFilled.jpeg')} style = {styles.ratingImage} />
                            // <Image source = {require('./assets/starFilled.jpeg')} style = {styles.ratingImage} />
                            // <Image source = {require('./assets/starEmpty.jpeg')} style = {styles.ratingImage} />
    //                     </View>

    //                     {Platform.OS == "web" && (
    //                         <><Text style={styles.price}>$100</Text><Text>10 in stock</Text></>
    //                     )}
    //                     <View style = {styles.buttonContainer}>
    //                         <TouchableOpacity style = {styles.buttonStyle} onPress={() => {
    //                                 navigation.push('Cart');
    //                             }}>
    //                             <Text>Buy</Text>
    //                         </TouchableOpacity>
    //                         <TouchableOpacity style = {styles.buttonStyle} onPress={() => {
    //                                 navigation.push('Cart');
    //                             }}>
    //                             <Text>Add to cart</Text>
    //                         </TouchableOpacity>
    //                     </View>
                        
    //                 </View>
    //             </View>

    //             <View style = {styles.productContainer}>
    //                 <View style = {styles.imageContainer}>
    //                     <Image source={require('./assets/table2.jpeg')} style = {styles.resultImage} />
    //                 </View>
    //                 <View style = {styles.descriptionContainer}>
    //                     <Text style = {styles.productName}>Brown Wood Round Coffee Table</Text>
    //                     <View style = {styles.starContainer}>
    //                         {!(Platform.OS == "web") && (
    //                             <Text style = {styles.price}>$180</Text>
    //                         )}
    //                         <Image source = {require('./assets/starFilled.jpeg')} style = {styles.ratingImage} />
    //                         <Image source = {require('./assets/starFilled.jpeg')} style = {styles.ratingImage} />
    //                         <Image source = {require('./assets/starFilled.jpeg')} style = {styles.ratingImage} />
    //                         <Image source = {require('./assets/starEmpty.jpeg')} style = {styles.ratingImage} />
    //                         <Image source = {require('./assets/starEmpty.jpeg')} style = {styles.ratingImage} />
    //                     </View>

    //                     {Platform.OS == "web" && (
    //                         <><Text style={styles.price}>$180</Text><Text>4 in stock</Text></>
    //                     )}
    //                     <View style = {styles.buttonContainer}>
    //                         <TouchableOpacity style = {styles.buttonStyle} onPress={() => {
    //                                 navigation.push('Cart');
    //                             }}>
    //                             <Text>Buy</Text>
    //                         </TouchableOpacity>
    //                         <TouchableOpacity style = {styles.buttonStyle} onPress={() => {
    //                                 navigation.push('Cart');
    //                             }}>
    //                             <Text>Add to cart</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                 </View>
    //             </View>

    //             <View style = {styles.productContainer}>
    //                 <View style = {styles.imageContainer}>
    //                     <Image source={require('./assets/table3.webp')} style = {styles.resultImage} />
    //                 </View>
    //                 <View style = {styles.descriptionContainer}>
    //                     <Text style = {styles.productName}>Modern Round Coffee Table</Text>
    //                     <View style = {styles.starContainer}>
    //                         {!(Platform.OS == "web") && (
    //                             <Text style = {styles.price}>$230</Text>
    //                         )}
    //                         <Image source = {require('./assets/starFilled.jpeg')} style = {styles.ratingImage} />
    //                         <Image source = {require('./assets/starFilled.jpeg')} style = {styles.ratingImage} />
    //                         <Image source = {require('./assets/starEmpty.jpeg')} style = {styles.ratingImage} />
    //                         <Image source = {require('./assets/starEmpty.jpeg')} style = {styles.ratingImage} />
    //                         <Image source = {require('./assets/starEmpty.jpeg')} style = {styles.ratingImage} />
    //                     </View>

    //                     {Platform.OS == "web" && (
    //                         <><Text style={styles.price}>$230</Text><Text>20 in stock</Text></>
    //                     )}
    //                     <View style = {styles.buttonContainer}>
    //                         <TouchableOpacity style = {styles.buttonStyle} onPress={() => {
    //                                 navigation.push('Cart');
    //                             }}>
    //                             <Text>Buy</Text>
    //                         </TouchableOpacity>
    //                         <TouchableOpacity style = {styles.buttonStyle} onPress={() => {
    //                                 navigation.push('Cart');
    //                             }}>
    //                             <Text>Add to cart</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                 </View>
    //             </View>

    //             <View style = {styles.productContainer}>
    //                 <View style = {styles.imageContainer}>
    //                     <Image source={require('./assets/table4.webp')} style = {styles.resultImage} />
    //                 </View>
    //                 <View style = {styles.descriptionContainer}>
    //                     <Text style = {styles.productName}>Modern Round Coffee Table</Text>
    //                     <View style = {styles.starContainer}>
    //                         {!(Platform.OS == "web") && (
    //                             <Text style = {styles.price}>$199</Text>
    //                         )}
    //                         <Image source = {require('./assets/starFilled.jpeg')} style = {styles.ratingImage} />
    //                         <Image source = {require('./assets/starFilled.jpeg')} style = {styles.ratingImage} />
    //                         <Image source = {require('./assets/starFilled.jpeg')} style = {styles.ratingImage} />
    //                         <Image source = {require('./assets/starFilled.jpeg')} style = {styles.ratingImage} />
    //                         <Image source = {require('./assets/starEmpty.jpeg')} style = {styles.ratingImage} />
    //                     </View>

    //                     {Platform.OS == "web" && (
    //                         <><Text style={styles.price}>$199</Text><Text>6 in stock</Text></>
    //                     )}
    //                     <View style = {styles.buttonContainer}>
    //                         <TouchableOpacity style = {styles.buttonStyle} onPress={() => {
    //                                 navigation.push('Cart');
    //                             }}>
    //                             <Text>Buy</Text>
    //                         </TouchableOpacity>
    //                         <TouchableOpacity style = {styles.buttonStyle} onPress={() => {
    //                                 navigation.push('Cart');
    //                             }}>
    //                             <Text>Add to cart</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                 </View>
    //             </View>

    //             <View style = {styles.productContainer}>
    //                 <View style = {styles.imageContainer}>
    //                     <Image source={require('./assets/table5.jpeg')} style = {styles.resultImage} />
    //                 </View>
    //                 <View style = {styles.descriptionContainer}>
    //                     <Text style = {styles.productName}>Modern Round Coffee Table</Text>
    //                     <View style = {styles.starContainer}>
    //                         {!(Platform.OS == "web") && (
    //                             <Text style = {styles.price}>$160</Text>
    //                         )}
                            // <Image source = {require('./assets/starFilled.jpeg')} style = {styles.ratingImage} />
                            // <Image source = {require('./assets/starFilled.jpeg')} style = {styles.ratingImage} />
                            // <Image source = {require('./assets/starFilled.jpeg')} style = {styles.ratingImage} />
                            // <Image source = {require('./assets/starEmpty.jpeg')} style = {styles.ratingImage} />
                            // <Image source = {require('./assets/starEmpty.jpeg')} style = {styles.ratingImage} />
    //                     </View>

    //                     {Platform.OS == "web" && (
    //                         <><Text style={styles.price}>$160</Text><Text>15 in stock</Text></>
    //                     )}
    //                     <View style = {styles.buttonContainer}>
    //                         <TouchableOpacity style = {styles.buttonStyle} onPress={() => {
    //                                 navigation.push('Cart');
    //                             }}>
    //                             <Text>Buy</Text>
    //                         </TouchableOpacity>
    //                         <TouchableOpacity style = {styles.buttonStyle} onPress={() => {
    //                                 navigation.push('Cart');
    //                             }}>
    //                             <Text>Add to cart</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                 </View>
    //             </View>

    //             <View style = {styles.productContainer}>
    //                 <View style = {styles.imageContainer}>
    //                     <Image source={require('./assets/table6.jpeg')} style = {styles.resultImage} />
    //                 </View>
    //                 <View style = {styles.descriptionContainer}>
    //                     <Text style = {styles.productName}>Modern Round Coffee Table</Text>
    //                     <View style = {styles.starContainer}>
    //                         {!(Platform.OS == "web") && (
    //                             <Text style = {styles.price}>$240</Text>
    //                         )}
    //                         <Image source = {require('./assets/starFilled.jpeg')} style = {styles.ratingImage} />
    //                         <Image source = {require('./assets/starFilled.jpeg')} style = {styles.ratingImage} />
    //                         <Image source = {require('./assets/starFilled.jpeg')} style = {styles.ratingImage} />
    //                         <Image source = {require('./assets/starEmpty.jpeg')} style = {styles.ratingImage} />
    //                         <Image source = {require('./assets/starEmpty.jpeg')} style = {styles.ratingImage} />
    //                     </View>

    //                     {Platform.OS == "web" && (
    //                         <><Text style={styles.price}>$240</Text><Text>4 in stock</Text></>
    //                     )}
    //                     <View style = {styles.buttonContainer}>
    //                         <TouchableOpacity style = {styles.buttonStyle} onPress={() => {
    //                                 navigation.push('Cart');
    //                             }}>
    //                             <Text>Buy</Text>
    //                         </TouchableOpacity>
    //                         <TouchableOpacity style = {styles.buttonStyle} onPress={() => {
    //                                 navigation.push('Cart');
    //                             }}>
    //                             <Text>Add to cart</Text>
    //                         </TouchableOpacity>
    //                     </View>
    //                 </View>
    //             </View>
    //         </View>

    //     </SafeAreaView>
    // )

    return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[styles.boxStyle, styles.topBar]}>
        <View style={styles.textArea}>
          <View style={styles.box1content}>
            <Image source={require('../assets/searchIcon.png')} style={styles.searchIcon} />
            <Text style={styles.searchText}>Table</Text>
            <Image source={require('../assets/cancelIcon.png')} style={styles.cancelIcon} />
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.push('Cart')}>
          <Image source={require('../assets/cartIcon.png')} style={styles.cartIcon} />
        </TouchableOpacity>
      </View>

      <View style={[styles.boxStyle, styles.box2]}>
        {products.map((product) => (
          <View style={styles.productContainer} key={product.id}>
            <View style={styles.imageContainer}>
              <Image source={product.imageUrl} style={styles.resultImage} />
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.productName}>{product.name}</Text>
              <View style={styles.starContainer}>
                {!(Platform.OS == "web") && <Text style={styles.price}>${product.price}</Text>}
                            <Image source = {require('../assets/starFilled.jpeg')} style = {styles.ratingImage} />
                            <Image source = {require('../assets/starFilled.jpeg')} style = {styles.ratingImage} />
                            <Image source = {require('../assets/starFilled.jpeg')} style = {styles.ratingImage} />
                            <Image source = {require('../assets/starEmpty.jpeg')} style = {styles.ratingImage} />
                            <Image source = {require('../assets/starEmpty.jpeg')} style = {styles.ratingImage} />
                {Platform.OS == "web" && (
                  <>
                    <Text style={styles.price}>${product.price}</Text>
                    <Text>{product.stock} in stock</Text>
                  </>
                )}
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => {
                      navigation.push('Cart');
                    }}>
                    <Text>Buy</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => {
                      navigation.push('Cart');
                    }}>
                    <Text>Add to cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
     wrapper : {
        flex : 1,
        flexDirection : "column",
        backgroundColor: '#66BB6A',
    },
    boxStyle : {
        width : "100%",
        padding : 10,
        //marginTop : 10,
        backgroundColor : "white"
    },
    topBar : {
        backgroundColor: '#66BB6A',
        justifyContent : "flex-start",
        flexDirection : "row",
        marginTop : Platform.OS == "android" ? 20 : undefined
    },
    textArea : {
        flex : 1,
        alignContent : "center"
    },
    screenText : {
        alignSelf : "center",
        justifyContent : "center",
        fontSize : 30
    },
    menuIcon : {
        width : 40,
        height : 40,
        marginLeft : 1,
        marginRight : 5,
        backgroundColor : "#66BB6A",
        borderRadius : 5
    },
    cartIcon : {
        width : 40,
        height : 40,
        alignSelf : "flex-end",
        marginLeft : 5,
        marginRight : 1,
        borderRadius : 5
    },
    box1 : {
        backgroundColor: '#66BB6A',
        justifyContent : "flex-start",
        flexDirection : "row",
    },
    box1content : {
        width : "100%",
        borderWidth : 2,
        borderRadius : 10,
        borderColor : '#BDBDBD',
        backgroundColor : 'white',
        //alignSelf : "flex-start",
        flexDirection : "row",
        alignItems : "center",
        height : 40,
        flex : 1,
        //marginLeft : 10
    },
    searchText : {
        marginLeft : 10,
        fontSize : 20,
        flex : 1
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
    box2 : {
        flex : 1,
        justifyContent : Platform.OS == "web" ? "center" : "flex-start",
        flexDirection : Platform.OS == "web" ? "row" : "column",
        flexWrap : Platform.OS == "web" ? "wrap" : "nowrap"
    },
    productContainer : {
        backgroundColor : "#E0E0E0",
        flex : 0.3,
        margin : Platform.OS == "web" ? 5 : 3,
        //flex : Platform.OS == "web" ? 1 : 0.3,
        flexDirection : "row",
        minWidth : Platform.OS == "web" ? "49%" : undefined,
    },
    imageContainer : {
        flexDirection : "row",
        position : "relative",
        alignItems : "center",
        margin : 8
    },
    resultImage : {
        width : Platform.OS == "web" ? 220 : 120,
        height : Platform.OS == "web" ? 190 : 90,
        resizeMode : "cover",
    },
    descriptionContainer : {
        marginTop : 8,
        marginBottom : 8,
    },
    productName : {
        fontSize : Platform.OS == "web" ? 20 : 15,
        fontWeight : "bold"
    },
    starContainer : {
        flexDirection : "row"
    },
    ratingImage : {
        marginTop : 8,
        marginBottom : 2,
        width : 20,
        height : 20,
        resizeMode : "cover"
    },
    price : {
        fontWeight : "900",
        fontSize : Platform.OS == "web" ? 30 : 20,
        marginTop : 8,
        marginRight : 4
    },
    buttonContainer : {
        flexDirection : "row",
        flexWrap : Platform.OS == "web" ? "wrap" : "nowrap",
        marginTop : Platform.OS == "web" ? 3 : 1.5
    },
    buttonStyle : {
        backgroundColor : "#FDD835",
        borderRadius : 5,
        borderColor : "grey",
        borderWidth : 1,
        height : Platform.OS == "web" ? 40 : 25,
        marginTop : 8,
        marginLeft : 5,
        width : Platform.OS == "web" ? "40%" : "35%",
        alignItems : "center",
        justifyContent : "center"
    }
})

export default SearchResult