// @vendors
import { useNavigation, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, Switch } from "react-native";
import React, {useEffect, useState} from "react";
import auth from '@react-native-firebase/auth';

// @context
import themeContext from "../Context/themeContext";

// @styles
import styles from '../styles.js';

const Login = () => {
    const toggleSwitch = () => {
        setTheme(theme === DefaultTheme ? DarkTheme : DefaultTheme)
        setIsEnabled(previousState => !previousState)
    };
    const { setTheme, theme } = React.useContext(themeContext);
    const [initializing, setInitializing] = useState(true);
    const [isEnabled, setIsEnabled] = useState(false);
    const [user, setUser] = useState();
    const navigation = useNavigation();
    const {colors} = useTheme();
    const [form, setForm] = useState({
        user: {
            email: "",
            password: ""
        },
        error: {
            show: false,
            message: ""
        }
    })
    const handleLogin = () =>{
        setForm((oldState) => ({
            ...oldState,
            error: { message: "", show:false}
        }))
        auth()
            .signInWithEmailAndPassword(form.user.email, form.user.password)
            .then((data) => {
                navigation.navigate("Store")
                console.log(data);
            })
            .catch(error => {
                setForm((oldState) => ({
                    ...oldState,
                    error: { message: error.message, show:true}
            }))
        });
    }

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; 
    }, []);

    if (initializing) return null;

    if (user) {
        navigation.navigate("Store")
    }
    
    return(
        <View
        style={{
            backgroundColor: colors.background, 
            flex:1
        }}>
            <Text style={{
                color: colors.text, 
                fontSize:35, 
                textAlign: "center", 
                marginTop: 30, 
                fontWeight:"bold"
            }}>
                Inicia sesion para continuar
            </Text>
            <Text style={{
                color: colors.text, 
                textAlign:"center"
            }}>
                Ingresa tus credenciales para acceder
            </Text>
            <View style={styles.formStyle}>
                <TextInput
                accessibilityLabel={'email'}
                placeholder={"Correo"}
                placeholderTextColor={"#7C8494"}
                keyboardType='email-address'
                onChangeText={(text) =>
                    setForm((oldState) => ({
                        ...oldState,
                        user: {...oldState.user, email:text}
                    }))
                    }
                style={styles.styleForm}
                />
            </View>
            <View style={styles.formStyle}>
            <TextInput
            accessibilityLabel={'contraseña'}
            placeholder={"contraseña"}
            secureTextEntry={true}
            placeholderTextColor={"#7C8494"}
            onChangeText={(text) =>
                setForm((oldState) => ({
                    ...oldState,
                    user: {...oldState.user, password:text}
                }))
                }
            style={styles.styleForm}
            />
            </View>
            {form.error.show && (
                <View>
                    <Text style={styles.textError}
                    >
                        {form.error.message}</Text>
                </View>
                )}
            <TouchableOpacity 
            onPress={()=>handleLogin()}
            style={styles.buttonLogin}>
                <Text>Iniciar sesion</Text>
            </TouchableOpacity>
            <View style={styles.switchView}>
                <Text style={{
                    color: colors.text, 
                    fontSize:20
                }}>
                Cambiar tema
                </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#678983" : "#f4f3f4"}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </View>
    )
}

export default Login;