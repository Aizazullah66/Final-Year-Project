import React, { useState } from "react";
import {Text,View,StyleSheet, TextInput, TouchableOpacity,Alert} from "react-native";
import Checkbox from 'expo-checkbox';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';


const LoginForm=({navigation})=>{
    // const stack=createNativeStackNavigator
    const[agree,setAgree]=useState(false);
    const[name,setname]=useState("");
    const[pass,setpass]=useState("");
    // console.log(name);

    useFocusEffect(
        React.useCallback(() => {
            setname("");
            setpass("");
            setAgree(false);
        }, [])
    )
    const submit=()=>{
        if(name==="aizaz" && pass==="12345"){
            Alert.alert("welcome to my platform");
            navigation.navigate("home",{name});
        } 
        else{
            Alert.alert("User name or password is wrong");

        }
    }
    return(
        <View style={az.maincontainer}>
            <View style={az.headercontainer}>
                <Text style={az.heading}>Login Form</Text>
            </View>
            <View style={az.description}>
                <Text style={az.dscptext}>You can reach us any time via any@aizaz.com</Text>
            </View>

            <View style={az.inputnamecontainer}>
                <Text style={az.inputnametext}>Enter your name</Text>
                <TextInput style={az.nameinput}
                placeholder="Enter your name here"
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(data)=>{
                    setname(data)
                }}
                />
            </View>

            <View style={az.inputpasswordcontainer}>
                <Text style={az.inputpasswordtext}>Enter your password</Text>
                <TextInput style={az.passwordinput}
                placeholder="Enter your password here"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                value={pass}
                onChangeText={(data)=>{
                    setpass(data)
                }}
                />
            </View>

            <View style={az.wrapper}>
                <Checkbox
                value={agree}
                onValueChange={()=>{
                    setAgree(!agree)
                }}
                color={agree?"#3913e8":undefined}
                
                />
                <Text style={az.wrappertext}> I have agreed with the terms and conditions</Text>
            </View>

            <View style={az.buttoncontainer}>
                <TouchableOpacity
                disabled={!agree}
                style={[az.button,{backgroundColor:agree?"#4e60c6":"grey"}]}
                onPress={submit}
                >
                    <Text style={az.buttontext}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
    

};

const az=StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:"#fbf79d",
    },




    headercontainer:{
        paddingTop:50,
        paddingLeft:20,
        // backgroundColor:"green",
    },
    heading:{
        fontWeight:"bold",
        fontSize:20,
        
    },



    description:{
        paddingTop:2,
        paddingLeft:20,
        // backgroundColor:"blue",

    },
    dscptext:{
        color:"#776f73",
    },

    inputnamecontainer:{
        paddingTop:50,
        paddingLeft:20,
        paddingRight:20,
    },
    inputnametext:{
        color:"#4e60c6",
    },
    nameinput:{
        borderWidth:1,
        borderColor:"black",
        height:35,
    },
    inputpasswordcontainer:{
        paddingTop:50,
        paddingLeft:20,
        paddingRight:20,
    },
    inputpasswordtext:{
        color:"#4e60c6",
    },
    passwordinput:{
        borderWidth:1,
        borderColor:"black",
        height:35
    },
    wrapper:{
        paddingTop:20,
        flexDirection:"row",
        paddingLeft:20,
    },

    wrappertext:{
        fontSize:10,
    },

    buttoncontainer:{
        marginTop:20,
        marginHorizontal:20,
        
    },
    buttontext:{
        paddingTop:3,
        textAlign:"center",

        
    },
    button:{
        height:35,

    }





});

export default LoginForm;