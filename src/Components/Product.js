// @vendors
import React, {useEffect, useState} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// @styles
import styles from '../styles.js';

const Product = ({route}) =>{
    const [cartItem, setCartItem] = useState({})
    const [loading, setLoading] = useState(true)
    const AddToCart = async(product) =>{
        try{
            const productCart = JSON.stringify(product);
            await AsyncStorage.setItem('@cart', productCart)
        } catch(e){
            console.log(e)
        }
    }
    const getCart = async() =>{
        let cartData = await AsyncStorage.getItem('@cart')
        setCartItem(cartData)
        setLoading(false)
    }

    useEffect(()=>{
        getCart()
    }, [loading])
    
    return(
        <View style={styles.container}>
            <Image 
                style={styles.bigIcon} 
                source={{uri:route.params.data.image}}
                resizeMode={"contain"}
            />
            <Text style={styles.detailsTitle}>{route.params.data.name}</Text>
            <Text style={styles.productDetails}>{`$${route.params.data.unit_price}`}</Text>
            <Text style={styles.productDetails}>Unidades restantes: {route.params.data.stock}</Text>
            <TouchableOpacity 
            onPress={()=>AddToCart(route.params.data)} 
            style={styles.productAddCart}>
                {!!Object.keys(cartItem).length ?(
                    <Text style={styles.detailsText}>Agregar al carrito</Text>
                    ):
                    <Image 
                        style={styles.cartIcon}
                        source={require("../assets/cart.png")}/>
                }
            </TouchableOpacity>
        </View>
    )
}

export default Product;