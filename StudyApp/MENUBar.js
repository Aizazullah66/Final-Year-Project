import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const MENUBar = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.menu}>
          <TouchableOpacity
           onPress={()=>{
            navigation.navigate("Courses");
           }}>
           <Image style={styles.image}
             source={require("../assets/course.png")}
           />
          </TouchableOpacity>
          <TouchableOpacity
           onPress={()=>{
            navigation.navigate("Students");
           }}>
           <Image style={styles.image}
             source={require("../assets/students.png")}
           />
          </TouchableOpacity>
          <TouchableOpacity
           onPress={()=>{
            navigation.navigate("About");
           }}>
           <Image style={[styles.image]}
             source={require("../assets/about.png")}
           />
          </TouchableOpacity>
          <TouchableOpacity
           onPress={()=>{
            navigation.navigate("Contact");
           }}>
           <Image style={[styles.image,]}
             source={require("../assets/contact.png")}
           />
          </TouchableOpacity>
          
          

        </View>

  )
}

export default MENUBar

const styles = StyleSheet.create({
    menu:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:20,
        marginTop:140,
        // borderWidth:5,
      },


      
      image:{
        backgroundColor:"#17c6ad",
        height:70,
        width:70,
        
        
      }
})