import React from "react";
import { Text, View,Button } from "react-native";

const Home=({navigation,route})=>{
    const {name}=route.params;
    return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text>
            This is home page {name}
        </Text>
        <Button
        title="Go back"
        onPress={()=>{
            navigation.navigate("login");
        }}

        
        />
    </View>
    );



};


export default Home;