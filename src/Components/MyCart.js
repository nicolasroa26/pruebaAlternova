// @vendors
import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// @constants
import { API_BASE_URL, API_URL_PATH } from "../../store/config/constants";

// @styles
import styles from '../styles.js';

const Store = () =>{
    const [modalVisible, setModalVisible] = useState(false);
    const [cartItem, setCartItem] = useState({});
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    
    const buy = async() =>{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        };
        let cartData = await AsyncStorage.getItem('@cart')
        setModalVisible(true)
        setTimeout(()=>{}, 2000)
        try {
            const res = await axios.post(
                `${API_BASE_URL}${API_URL_PATH.buy}`,
                cartData,
                config,
                );
                console.log(res);
            navigation.navigate("Store")

        } catch (e) {
            console.log(e);
            navigation.navigate("Store")
        }
    }
    const getCart = async() =>{
        let cartData = await AsyncStorage.getItem('@cart')
        setCartItem(JSON.parse(cartData))
        setLoading(false)
    }

    useEffect(()=>{
        getCart()
    }, [loading])
    return(
        <View>
            {!!Object.keys(cartItem).length && (
                <View style={styles.buttonProduct}>
                <Image 
                    style={styles.icon} 
                    source={{uri: cartItem.image}} 
                    resizeMode={"contain"}
                />
                <View style={styles.viewDirection}>
                    <Text style={styles.textName}>{cartItem.name}</Text>
                    <Text style={styles.margin}>{`$${cartItem.unit_price}`}</Text>
                </View>
            </View>
            )}
            <TouchableOpacity
            onPress={()=>buy()}
            style={styles.productAddCart}>
                <Text>Finalizar compra</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.viewModal}>
                    <View style={styles.modalStyles}>
                    <Text style={styles.textModal}>Se completo tu compra</Text>
                  </View>
                </View>
              </Modal>
        </View>
    )
}

export default Store