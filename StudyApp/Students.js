import { StyleSheet, Text, View,FlatList,ActivityIndicator,Image } from 'react-native'
import React,{useState,useEffect} from 'react'

const Students = () => {
  const[data,setdata]=useState();
  const[loading,setloading]=useState(true);

  const GetData=async()=>{
    try{
      const response=await fetch("https://thapatechnical.github.io/userapi/users.json")
      const data=await response.json();
      setdata(data);
      setloading(false);
      console.log(data);
    }
    catch(error){
      console.log(error);
    }




  };
  useEffect(()=>{
    GetData();

  }
  ,[])

  const FlatData=({item})=>{
    console.log("rendering");
    return(
      
    <View style={styles.flatdata}>
      <View style={styles.imagecontainer}>
         <Image
           style={styles.image}
          source={{uri:item.image}}
        /> 
      </View>
      <View style={{backgroundColor:"#17c6ad"}}> 
      <View style={styles.bio}>
        <Text style={{color:"white"}}>Bio Data</Text>
        <Text style={{color:"white"}}>{item.userId}</Text>

      </View>

      <View style={styles.infocontainer}>
        <Text style={{fontSize:10,color:"white"}}>Name: {item.name}</Text>
        <Text style={{fontSize:10,color:"white"}}>Email: {item.email}</Text>
        <Text style={{fontSize:10,color:"white"}}>Mobile: {item.mobile}</Text>
        
      </View>

      </View>
 
    </View>

    )




  }

 
  return (
    <View style={styles.maincontainer}>
     {loading?
     ( <View style={styles.loader}>
        <ActivityIndicator size="large" color="blue"/>
      
       </View>

     ):
     ( <View> 
       <View style={styles.header}><Text style={{color:'#00bfff',fontSize:20}}>List of Students</Text></View>
      <FlatList
      data={data}
      keyExtractor={(item)=>item.id}
      renderItem={FlatData}
      horizontal
      />
       
     </View>

     )
     
     }
      
    </View>
  )
}



const styles = StyleSheet.create({

  maincontainer:{
    flex:1,
    backgroundColor:"#eee078"
  },
  loader:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  header:{
    alignItems:"center",
  },
  image:{
    height:200,
    width:200,
  },

  flatdata:{
    marginRight:30,
    marginLeft:20,
    marginTop:20,

  },
  bio:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:20,
    
  },
  infocontainer:{
    marginTop:15
  }
})


export default Students;