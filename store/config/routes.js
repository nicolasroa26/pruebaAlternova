// @vendors
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';

// @components
import Login from '../../src/Components/Login';
import Store from '../../src/Components/Store';
import Product from '../../src/Components/Product';
import MyCart from '../../src/Components/MyCart';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Login" 
                component={Login}
                options={{
                    header:()=>null,
                }} 
            />
            <Stack.Screen 
                name="Store" 
                component={Store} 
                options={{
                    header:()=>null,
                }} 
            />
            <Stack.Screen 
                name="Product" 
                component={Product} 
                options={{
                    headerTitle: "Detalles de producto",
                }} 
            />
            <Stack.Screen 
                name="MyCart" 
                component={MyCart} 
                options={{
                    headerTitle: "Mi carrito",
                }} 
            />
        </Stack.Navigator>
    )
}

export default Routes;