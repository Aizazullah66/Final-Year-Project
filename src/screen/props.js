import React from "react";
import {Text,Image,View,StyleSheet} from "react-native";

const Images=(props)=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}> {props.textData}</Text>
            <Image 
            style={styles.image}
            source={props.imgSrc}  />


        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },

 

  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    
  },
});

export default Images;






