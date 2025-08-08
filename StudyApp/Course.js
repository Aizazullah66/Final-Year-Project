import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image,Alert } from 'react-native'
import React from 'react'
import CourseApi from './CourseApi'

const Course = () => {
  console.log('CourseApi:', CourseApi);
  const FlatData=({item})=>{
    console.log("rendering")
    return(
    <View style={styles.flatdata}>
      <View style={styles.imagecontainer}>
        
      <Image style={styles.image}
      source={item.imagesrc}
      
      />
      
      </View>
      <View style={styles.title}>
        <Text style={{color:'#00bfff',fontSize:20,fontWeight:"bold"}}>{item.name}</Text>
      </View>
      <View style={styles.desc}>
        <Text style={{textAlign:"center"}}>{item.descp}</Text>
      </View>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity 
        onPress={()=>{
          Alert.alert("App is still not fully developed")
        }}
        >
          <Text style={{fontSize:20,backgroundColor:"#17c6ad",color:"white",borderRadius:5}}>Course Details</Text>

        </TouchableOpacity>
      </View>

    </View>
    );

  };


  return (
    <View style={styles.maincontainer}>
      <FlatList
      data={CourseApi}
      keyExtractor={(item)=>item.id}
      renderItem={FlatData}
      
      />

      
      
    </View>
  )
}



const styles = StyleSheet.create({
  maincontainer:{
    marginTop:25,
    // backgroundColor:"yellow"
  },
  flatdata:{
    marginBottom:50,
    marginHorizontal:10,
    borderWidth:5,
    paddingTop:60,
    paddingBottom:13,
    backgroundColor:"#eee078",
    // shadowColor:"black",
    // shadowOpacity:1,
    elevation:10,

    
  },
  imagecontainer:{
    alignItems:"center"
  },
  title:{
    alignItems:'center',
    marginTop:30,
  },
  buttoncontainer:{
    alignItems:'center',
    marginTop:5,
    

  },
  desc:{
    marginTop:5,
  }
})

export default Course;