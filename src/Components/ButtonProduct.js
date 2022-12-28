// @vendors
import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

// @styles
import styles from '../styles.js';

const ButtonProduct = (props) =>{
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
        <View style={styles.contain}>
            <Image 
                style={styles.icon} 
                source={{uri: props.data.image}} 
                resizeMode={"contain"}
            />
            <View>
                <Text style={styles.textName}>{props.data.name}</Text>
                <Text style={styles.textPrice}>{`$${props.data.unit_price}`}</Text>
                <TouchableOpacity 
                onPress={()=>{
                    if(props.data.stock>=1){
                        AddToCart(props.data)
                    }else{
                        Alert.alert("No hay stock para este producto")
                    }
                }}
                style={styles.buttonAddCart}
                >
                    <Text style={styles.textAddCart}>Agregar al carrito</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ButtonProduct;