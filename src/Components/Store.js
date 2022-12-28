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
    const [data, setData] = useState({
        "products": [
          {
            "id": 1,
            "name": "Base Gris",
            "unit_price": 400,
            "stock": 5,
            "image": "https://www.lego.com/cdn/cs/set/assets/blt3baed37200b0845a/11024.png"
          },
          {
            "id": 2,
            "name": "Llavero de Nueva York",
            "unit_price": 250,
            "stock": 8,
            "image": "https://www.lego.com/cdn/cs/set/assets/blt841ff4b13275f885/854032.jpg"
          },
          {
            "id": 3,
            "name": "Llavero de Black Panther",
            "unit_price": 120,
            "stock": 0,
            "image": "https://www.lego.com/cdn/cs/set/assets/blte57c48b15e5c3dd7/854189.png"
          },
          {
            "id": 4,
            "name": "Postal de Nueva York",
            "unit_price": 500,
            "stock": 1,
            "image": "https://www.lego.com/cdn/cs/set/assets/bltae0305908b9ef97a/40519.png"
          },
          {
            "id": 5,
            "name": "Portalápices",
            "unit_price": 90,
            "stock": 2,
            "image": "https://www.lego.com/cdn/cs/set/assets/blt79e9504b3cc67f96/41936.jpg"
          }
        ]
    });
    const [getdata, setGetData] = useState({});
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
            setData(res.data) 
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
            {getData === null || getData.products === undefined? <Text style={{textAlign:"center", marginTop :20}}>No se ha podido cargar la informacion</Text>:getdata.products.map((val) =>(
                <TouchableOpacity onPress={()=>navigation.navigate("Product", { data: val })}>
                    <ButtonProduct data={val}/>
                </TouchableOpacity>
            ))
            }
        </View>
    )
}

export default Store