import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import MENUBar from './MENUBar';



const HomeScreen = ({navigation}) => {
 
  return (
    <View style={styles.maincontainer}>
        <View style={styles.imagecontainer}>
            <Image style={{resizeMode:"contain",height:280,width:280}}
            
            source={require("../assets/boy studying.jpg")}
            
            />

        </View>
        <View style={styles.welcome}>
          <Text style={{fontSize:25,color:"black"}}>Welcome To</Text>
          <Text style={{fontSize:30,color:"#4f2ae6"}}>Aizaz Technical</Text>
        </View>
        <View style={styles.intro}>
          <Text  style={{color:"#8a9192"}}>This Study App is a powerful and user-friendly mobile application designed to help students enhance their learning experience.</Text>
        </View>
        <View>
          <MENUBar/>

        </View>
      
    </View>
  );
};



const styles = StyleSheet.create({

  maincontainer:{
    backgroundColor:"#eee078",
    flex:1,

  },


  imagecontainer:{
    alignItems:"center",
    marginTop:50,
    

    // backgroundColor:"blue",
  },

  welcome:{
    // marginVertical:30,
    alignItems:"center",

  },
  intro:{
    paddingHorizontal:30,
    marginTop:20,
    
  },
  // menu:{
  //   flexDirection:"row",
  //   justifyContent:"space-between",
  //   paddingHorizontal:20,
  //   marginTop:90,
  // }
});


export default HomeScreen;


