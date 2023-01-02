// @vendors
import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// @constants
import { API_BASE_URL, API_URL_PATH } from "../../store/config/constants";

// @components
import ButtonProduct from "./ButtonProduct";

// @styles
import styles from '../styles.js';

const Store = () =>{
    const [cartItem, setCartItem] = useState({});
    const [loading, setLoading] = useState(true);
    const [getProductsData, setProductsGetData] = useState({});
    const navigation = useNavigation()

    const getData = async() =>{
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const res = await axios.get(
                `${API_BASE_URL}${API_URL_PATH.products}`,
                config,
            );
            setProductsGetData(res.data) 
        } catch (e) {
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

    useEffect(()=>{
        getData()
    }, [])

    return(
        <View>
            <View 
            style={styles.cont}>
                <Text 
                style={styles.textAlignTitle}
                >
                    Tienda Lego
                </Text>
            <TouchableOpacity
            onPress={()=>{navigation.navigate("MyCart")}}>
            <Image
            style={styles.cartImage}
            source={require("../assets/cart.png")}
            />
            </TouchableOpacity>
            </View>
            {getProductsData === null || getProductsData.products === undefined? <Text style={{textAlign:"center", marginTop :20}}>No se ha podido cargar la informacion</Text>:getProductsData.products.map((val) =>(
                <TouchableOpacity onPress={()=>navigation.navigate("Product", { data: val })}>
                    <ButtonProduct data={val}/>
                </TouchableOpacity>
            ))
            }
        </View>
    )
}

export default Store