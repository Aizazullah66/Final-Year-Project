import { Linking, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const About = () => {
  const desc="Welcome to IT Study App, your go-to resource for mastering IT skills. Our mission is to provide interactive and engaging learning experiences tailored for students and professionals. Dive into our comprehensive courses, track your progress, and achieve your goals with ease. Let's learn and grow together!"
  return (
    <View style={styles.maincontainer}>
      <View style={styles.content}></View>
      <Text style={styles.name}>Aizazullah Ansari</Text>
      <Text style={styles.profession}>I am a mobile developer</Text>
      <Image style={styles.myimage} source={{uri:"https://th.bing.com/th/id/OIP.mDcXp8G37wRXWL20iQy6EgHaHa?w=191&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7"}}/>
      <View style={styles.aboutme}>
      <Text style={styles.aboutheading}>About me</Text>
      <Text style={styles.about}>{desc}</Text>
      </View>
      <View style={styles.buttons}>
     <TouchableOpacity onPress={()=>{
      Linking.openURL("https://www.facebook.com/")

     }}>
      <Image style={styles.iconimage} source={{uri:"https://cdn-icons-png.flaticon.com/128/733/733547.png"}}/>

     </TouchableOpacity>

     <TouchableOpacity onPress={()=>{
      Linking.openURL("https://www.instagram.com/")

     }}>
      <Image style={styles.iconimage} source={{uri:"https://cdn-icons-png.flaticon.com/128/1384/1384015.png"}}/>

     </TouchableOpacity>

     <TouchableOpacity onPress={()=>{
      Linking.openURL("https://www.youtube.com/#!")

     }}>
      <Image style={styles.iconimage} source={{uri:"https://cdn-icons-png.flaticon.com/128/1384/1384060.png"}}/>

     </TouchableOpacity>
      </View>
    </View>
  )
}

export default About

const styles = StyleSheet.create({

  myimage:{
    height:150,
    width:150,
    borderRadius:150,
    marginTop:20,
    alignSelf:"center",
  },
  maincontainer:{
    
    backgroundColor:"#eee078",
    flex:1
  },
  about:{
    marginHorizontal:30,
    textAlign:"center"
  },
  name:{
    marginTop:50,
    fontWeight:"bold",
    color:"#00bfff",
    textAlign:"center",
    fontSize:20
    
  },
  profession:{
    marginTop:10,
    color:"#17c6ad",
    textAlign:"center",
  },
  aboutheading:{
    marginTop:20,
    textAlign:"center",
    color:"white"
    
    
  },
  about:{
    marginTop:15,
    marginHorizontal:20
  },
  aboutme:{
    backgroundColor:"#00bfff",
    marginTop:15,
    
  },
  buttons:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    marginTop:80

  },
  iconimage:{
    height:50,
    width:50
  }
  
  
})