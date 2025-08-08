// // App.js
// const React = require('react');
// const { Text, View, StyleSheet } = require('react-native');
// import Component from './src/screen/Component';

// const App = () => {
//   const name= "Aizaz";
//   const element=<Text>Ye mera element he</Text>
//   const getName=(fname, lname)=>{
//     return `My name is ${fname} ${lname}`;

//   };
//   return (
//     <View style={styles.container}>
//       <Component/>
//       <Text>aur suna {name}</Text>
//       {element}
//       <Text>{getName("Aizazullah","Ansari")}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "green",
//   },
// });

// module.exports = App;







// const App = () => {
//   return (
//     <View style={Aizaz.container}>
//       <Text>Hello, World!</Text>
//     </View>
//   );
// };

// const Aizaz = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'green',
//   },
// });

// export default App;



// import React from "react";
// import {View,Text,StyleSheet} from "react-native" ;

// const printer=()=>{
//   return(
//     <View style={Aizaz.styler}>
//       <Text style={Aizaz.container}> welcome to my chanel jani</Text>
//       <View style={Aizaz.styler1}> 
//         <Text>welcome to my another channel</Text>
//       </View>
//     </View>
    



//   );
// };

// const Aizaz = StyleSheet.create({
//   styler: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // backgroundColor: 'green',
//   },

//   styler1: {
//     // flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // backgroundColor: 'blue',
//   },

//   container: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },


// });



// export default printer;


// import React from "react";
// import { FlatList } from "react-native";


// const list=[{
//     name:"aizaz"
// },
// {
//     name: "mahesh"
// },
// {
//     name:"munesh"
// }];

// const FlatDemo=()=>{
//     return(
//         <FlatList
//         data={list} 
//         renderItem={(element)=>{
//             return console.log(element.item.name);
//            }
//         }
        
//         />


//     );

// };

// export default FlatDemo;


// import React from 'react';
// import { FlatList, Text } from 'react-native';

// const data = [
//   { id: '1', title: 'Item 1' },
//   { id: '2', title: 'Item 2' },
//   { id: '3', title: 'Item 3' },
//   // more items...
// ];

// const App = () => {
//   const renderItem = ({ item }) => {
//     return (
//       <Text>{item.title}</Text>
//     );
//   };

//   return (
//     <FlatList
//       data={data}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.id}
//     />
//   );
// };

// export default App;



// import React from 'react';
// import { FlatList, Text, View } from 'react-native';

// const data = [
//   { id: '1', title: 'Item 1' },
//   { id: '2', title: 'Item 2' },
//   { id: '3', title: 'Item 3' },
//   { id: '4', title: 'Item 4' },
//   { id: '5', title: 'Item 5' },
//   { id: '6', title: 'Item 6' },
//   // Add more items as needed
// ];

// const App = () => {
//   const renderItem = ({ item }) => (
//     <View style={{
//       paddingVertical: 20,
//       paddingHorizontal: 30,
//       marginVertical: 10,
//       backgroundColor: 'blue',
//       borderBottomWidth: 2,
//       borderBottomColor: 'darkblue',
//       borderRadius: 8,
//     }}>
//       <Text style={{
//         fontSize: 28,
//         fontWeight: 'bold',
//         color: 'red',
//         textAlign: 'center',
//       }}>{item.title}</Text>
//     </View>
//   );

//   return (
//     <FlatList
//       // horizontal
//       // showsHorizontalScrollIndicator={false}
//       data={data}
//       renderItem={renderItem} 
//       keyExtractor={item => item.id}
//     />
//   );
// };

// export default App;



// import React from "react";
// import {View,Text,Image,StyleSheet, ScrollView, Button, Alert} from "react-native";

// const Images=()=>{
//     return(
//       <ScrollView>
//         <View style={styles.view}>
//             <Text style={styles.text}> This is the image</Text>
//             <Image 
//             style={styles.image}
//             source={require("./assets/goku.jpg")}/>

//             <Image 
//             style={styles.image}
//             source={require("./assets/icon.png")}/>

//             <Image 
//             style={styles.image}
//             source={require("./assets/splash.png")}/>

//             <Image 
//             style={styles.image}
//             source={require("./assets/goku.jpg")}/>

//             <Button
//             title="lets fight janu"
//             onPress={()=>{Alert.alert("panga mat le bhrve")}}
            
//             />

             
            
    

//         </View>
//         </ScrollView>
//     );
// };

// const styles=StyleSheet.create({
//   view: {
//     // height:500,
//     justifyContent:"center",
//     display:"flex",
//     alignItems:"center",
//    },

//    text:{
    
    
//     fontSize:30,
    
//    },

//    image:{
//     width:300,
//     height:300,

//    },
// });

// export default Images;

// import React from "react";
// import { View, Text, Image, StyleSheet, ScrollView, Button, Alert, TouchableOpacity } from "react-native";

// const Images = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.scrollViewContainer}>
//       <View style={styles.container}>
//         <Text style={styles.text}>This is the image gallery</Text>
//         <Image style={styles.image} source={require("./assets/goku.jpg")} />
//         <Image style={styles.image} source={require("./assets/icon.png")} />
//         <Image style={styles.image} source={require("./assets/splash.png")} />
//         <Image style={styles.image} source={require("./assets/goku.jpg")} />

//         <Button
//           title="Let's fight "
//           onPress={() => {
//             Alert.alert("jeene nhi dunga");
//           }}
//         />

//         <TouchableOpacity
//           onPress={()=>{
//             Alert.alert("tu to gya");
//             console.log("terminal me print hota he is se");
//           }
//             }
//         >    
//           <Text>click here</Text>
//           <Image style={styles.image} source={require("./assets/goku.jpg")} />

//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollViewContainer: {
//     flexGrow: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     minHeight: "100%",
//   },
//   container: {
//     justifyContent: "center",
//     alignItems: "center",
//     paddingVertical: 20,
//   },
//   text: {
//     fontSize: 30,
//     marginBottom: 20,
//   },
//   image: {
//     width: 300,
//     height: 300,
//     marginBottom: 20,
    
//   },
// });

// export default Images;



// import React from "react";
// import {ScrollView, View} from "react-native";
// import Images from "./src/screen/props";

// const dispay=()=>{
//   return(

//   <ScrollView>

//   <View>
//     <Images
//     textData="This is my image"
//     imgSrc={require("./assets/goku.jpg")}/>

// <Images
//     textData="This is my image"
//     imgSrc={require("./assets/goku.jpg")}/>

// <Images
//     textData="This is my image"
//     imgSrc={require("./assets/goku.jpg")}/>

//     <Images
//     textData="This is my image"
//     imgSrc={require("./assets/goku.jpg")}/>

//   </View>

//   </ScrollView>

//   );


// };

// export default dispay;


// import React from "react";
// import { View,Text,Image,Linking, StyleSheet, Button } from "react-native";

// const netflixCard=()=>{
//   return (
    
//     <View style={styles.container}> 
//       <Text style={styles.text}> This is a netflix Card </Text>
//       <View style={styles.poster}> 
//         <Image
//         style={styles.images}
//         source={{uri:"https://th.bing.com/th/id/R.e1c5ed5ed41a6771eaba76c5cba4b93c?rik=HuBmud1Lss7w5g&pid=ImgRaw&r=0"}}
//         />
      
//       <View style={styles.posterInfo}>
//         <Text style={styles.posterTitle}> All of us are dead</Text>
//         <Text style={styles.posterText}> All of Us Are Dead is a gripping South Korean horror series set in a high school overrun by a zombie apocalypse. The story follows a group of students who must band together to survive as their once safe and familiar school becomes a battleground. As the infection spreads rapidly, they face not only the relentless undead but also their own fears, secrets, and moral dilemmas. With limited resources and no immediate rescue in sight, the students' bonds are tested in the ultimate fight for survival. Will they find a way to escape, or will they succumb to the horrors that lurk in every corner?
//         </Text>

      
//     </View>
//     </View>
//     <Button
//     title="Watch Now"
//     onPress={()=>Linking.openURL("https://www.netflix.com/pk/")}  
    
//     />
//     </View>
  
//   );
// };



// const styles=StyleSheet.create({
//   container:{
//     padding:50,
//     // justifyContent:"center",
//     alignItems:"center",
   


//   },

//   text:{
//     fontWeight:"bold",
//     color:"red",

//   },

//   posterTitle:{
//     fontWeight:"bold",

//   },



//   images:{
//     height:150,
//     width:300,
//     resizeMode: "contain",
//     // display:'flex',
//   },

//   posterText:{
//     color:"grey",
//   },

//   poster:{
//     borderWidth:1,
//     // backgroundColor:"red",

//   },


// })

// export default netflixCard;



// import React from "react";
// import {Text,StyleSheet,View} from "react-native";

// const box=()=>{
//   return(
//     <View>
//       <View style={styles.box}>
//         <Text style={styles.row1}>This is the first row </Text>
//         <Text style={styles.row2}>This is the second row </Text>
//         <Text style={styles.row3}>This is the third row </Text>
//         <Text style={styles.row4}>This is the fourth row </Text>
//       </View>
//     </View>


//   );

// };

// const styles=StyleSheet.create({
//   box:{
//     // width:"100%",
//     marginTop:80,
//     // marginRight:50,
//     // marginLeft:50,
//     borderWidth:2,
//     marginHorizontal:50,
     
//   },
//   row2:{
//     backgroundColor:"blue",
//     padding:20,
//     borderWidth:2,
    
    
//   },
//   row1:{
//     backgroundColor:"red",
//     padding:20,
//     borderWidth:2,
    
//   },
//   row3:{
//     backgroundColor:"green",
//     padding:20,
//     borderWidth:2,
//   },
//   row4:{
//     backgroundColor:"orange",
//     padding:20,
//     borderWidth:2,
//   },

// });

// export default box;

// import React from "react";
// import { FlatList,Text,View,StyleSheet } from "react-native";

// const scroll=()=>{
//   const list=[
//     {name:"Hunter1",director:"Aizaz",year:"2024",genre:"horror"},
//     {name:"Hunter2",director:"Aizaz",year:"2024",genre:"horror"},
//     {name:"Hunter3",director:"Aizaz",year:"2024",genre:"horror"},
//     {name:"Hunter4",director:"Aizaz",year:"2024",genre:"horror"},
//     {name:"Hunter5",director:"Aizaz",year:"2024",genre:"horror"},
//     {name:"Hunter6",director:"Aizaz",year:"2024",genre:"horror"},
//     {name:"Hunter7",director:"Aizaz",year:"2024",genre:"horror"},
//     {name:"Hunter8",director:"Aizaz",year:"2024",genre:"horror"},
//   ];

//   return(
//     <View>
//       <Text style={styles.textone}>List of top 5 netflix movies in 2024</Text>
//      <FlatList
//     horizontal
//       style={styles.container}
//       data={list}
//       keyExtractor={(item) =>{
//       return item.name;}}

//       renderItem={({ item }) => (
        
//         <View style={styles.itemContainer}>
//           <Text style={styles.text}>Name: {item.name}</Text>
//           <Text style={styles.text}>Director: {item.director}</Text>
//           <Text style={styles.text}>Year: {item.year}</Text>
//           <Text style={styles.text}>Genre: {item.genre}</Text>
//         </View>
        
//       )}
//     />

//     </View>

    
  

//   );
// };

// const styles=StyleSheet.create({
//   container:{
//     marginTop:10,
//     marginBottom:500,
//     marginHorizontal:50,
    
    
//   },

//   itemContainer:{
//     borderWidth:1,
//     backgroundColor:"#808080",
//     padding:20,
//     marginHorizontal:5,
    
    

//   },
//   text:{
//     textAlign:"center",
//     fontSize:20,
//     color:"#a52a2a",
    
//   },
//   textone:{
//     fontSize:30,
//     marginTop:50,
//     fontWeight:"bold",
//     color:"#db2626"

//   }

// });

// export default scroll;


// import React from "react";
// import { Text,View,StyleSheet } from "react-native";

// const flexdemo=()=>{
//   return(
//   <View>
//       <View style={styles.container}>
//         <Text style={[styles.box1,styles.common]}>box1</Text>
//         <Text style={[styles.box2,styles.common]}>box2</Text>
//         <Text style={[styles.box3,styles.common]}>box3</Text>
//         <Text style={[styles.box4,styles.common]}>box4</Text>
//         <Text style={[styles.box5,styles.common]}>box5</Text>
    
//     </View>

//   </View>

//   );
// };

//   const styles=StyleSheet.create({
//     container:{
//       marginHorizontal:10,
//       borderWidth:3,
//       marginTop:100,
//       height:500,
//       backgroundColor:"lightblue",
//       width:"95%",
//       position:"relative",



      
      

//     },
//     box1:{
//       backgroundColor:"lightgreen",
  

//       alignSelf:"center",
//       bottom:"45%",
      


    
      
      
//     },
//     box2:{
//       backgroundColor:"#ff6347",
//       bottom:0,
//       right:0,
//     },
//     box3:{
//       backgroundColor:"lightyellow",
//     },
//     box4:{
//       backgroundColor:"lightpink",
//       bottom:0,
//     },
//     box5:{
//       backgroundColor:"#ffa500",
//       right:0,
//     },
//     common:{
//       width:60,
//       height:60,
//       borderWidth:1,
//       fontSize:20,
//       position:"absolute",
      

//     },


//   });



// export default flexdemo;



// import React, { useState } from "react";
// import { Text,View,StyleSheet,TouchableOpacity,Alert } from "react-native";

// const Interface=()=>{

//   const[counter,setCounter]=useState(0);
//   return(
//     <View style={styles.screen}>
//       <Text style={styles.screentext}>{counter}</Text>
//       <View style={styles.container} >
//         <TouchableOpacity
//          style={styles.plus} 
//          onPress={()=>{
//           setCounter(counter+10);
//          }}
//         > 
//         <Text style={styles.text}>+10</Text> 
//         </TouchableOpacity>

//         <TouchableOpacity
//          style={styles.minus} 
//          onPress={()=>{
//           if(counter<=0){
//             Alert.alert("cannot go bellow 0");
//           }
//           else{
//           setCounter(counter-10);
//           }
//          }}
//         > 
//         <Text style={styles.text}>-10</Text> 
//         </TouchableOpacity>

//         <TouchableOpacity
//          style={styles.reset} 
//          onPress={()=>{
//           setCounter(0);
//          }}
//         > 
//         <Text style={styles.text}>Reset</Text> 
//         </TouchableOpacity>


//       </View>
//     </View>


//   );

// };



// const styles=StyleSheet.create({
//   screen:{
//     marginTop:80,
//     alignItems:"center",
    
//   },

//   container:{
//     marginTop:80,
    

//   },

//   text:{
//     borderWidth:2,
//     fontSize:50,
//     color:"grey",
//     backgroundColor:"#84c4bd"
   

//   },

//   screentext:{
//     fontSize:70,
//   },
//   minus:{
//     paddingBottom:20,

//   },
//   plus:{
//     paddingBottom:20,

//   },
//   reset:{
//     paddingBottom:20,

//   }

// });

// export default Interface;


// import React, { useState } from "react";
// import { Text,View,StyleSheet,TouchableOpacity,Alert,FlatList } from "react-native";

// const colourgenerator=()=>{
//   const[newcolor,setnewcolor]=useState([]);
//   const randomcolor=()=>{
//     const red=Math.floor(Math.random()*256);
//     const blue=Math.floor(Math.random()*256);
//     const green=Math.floor(Math.random()*256);

//     return `rgb(${red},${blue},${green})`

//   };
//   return(
//     <View style={az.container}> 
//     <TouchableOpacity 
//     style={az.button}
//     onPress={()=>{
//       setnewcolor([...newcolor,randomcolor()])
//     }}
    
//     >
//       <Text style={{fontSize:20,backgroundColor:"#00bfff",textAlign:"center"}}>Generate random colour</Text>

//     </TouchableOpacity>
    
//     <FlatList
//     horizontal
//     data={newcolor}
//     keyExtractor={(item)=>item}
//     renderItem={({item})=>{
//       return(
        
//         <View style={az.colors}>
//           <Text 
//           style={{ backgroundColor:item,
//                    height:100,
//                    width:"80%",
//                    textAlign:"center", 
//           }}
          
//           >{item}

//           </Text>
//          </View>


//       );
//     }}

      
//     />

    
//     </View>

//   );
// };

// const az=StyleSheet.create({
//   container:{
//     marginTop:40,
    
    
    
    

    
    
//   },

//   colors:{
//     alignItems:"center",

//   }


// });

// export default colourgenerator;



// import React, { useState,useEffect } from "react";
// import { Text,View,StyleSheet,TouchableOpacity,Alert,FlatList, ActivityIndicator,Image } from "react-native";


// const effect=()=>{
//   const [data,setData]=useState();
//   const[loading,setLoading]=useState(true);



//   const getData=async()=>{
//     try {
//     const response=  await fetch("https://raw.githubusercontent.com/thapatechnical/userapi/main/users.json");
//     const data= await response.json();
//     console.log(data); 
//     setData(data);  
//     setLoading(false);
//     } catch (error) {
//       console.log(error);
      
//     }


//   };
//   useEffect(()=>{
//     getData();

//   }, [ ]);

//   return(
//     <View style={{backgroundColor:"#f9f180",flex:1}}>
//       {loading? (
//       <View style={styles.loaderContainer}>
//        <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//       ):
//       ( 
//         <View style={styles.main}> 
          
//           <View style={styles.headerContainer} > 
//             <Text style={{fontWeight:"bold",color:"#bbbaac",fontSize:20}}>List of students</Text>
//           </View>
//           <FlatList
//           data={data}
//           renderItem={({item})=>{
//             return(
//               <View style={styles.flat}>
//               <View style={styles.imageContainer} >
//                <Image
//                 style={styles.images}
//                 source={{uri:"https://th.bing.com/th/id/R.e1c5ed5ed41a6771eaba76c5cba4b93c?rik=HuBmud1Lss7w5g&pid=ImgRaw&r=0"}}
//                 /> 
            
//               </View>
    
//               <View style={styles.bioContainer} > 
//                 <Text>Bio  {item.id}</Text>
                
//               </View>
    
//               <View style={styles.infoContainer} > 
//                 <Text>{item.title}</Text>
//                 <Text>{item.body}</Text>
                
//               </View>
//               </View>
              
//             )

//           }}
          
//           />

        
//         </View>
        


//       )}
      

//     </View>

//   );

// };

// const styles=StyleSheet.create({

//   loaderContainer:{

//     flex:1,
//     justifyContent:"center",
//     alignItems:"center",

//   },
//   headerContainer:{
//     margintop:80,
//     alignItems:"center",
//   },



//   images:{
//     height:150,
//     width:150,
//     resizeMode:"cover",
    
//   },

//   imageContainer:{
//     alignItems:"center",
//     margintop:""

//   }



// });




// export default effect;



// import React, { useState, useEffect } from "react";
// import { Text, View, StyleSheet, FlatList, ActivityIndicator, Image } from "react-native";

// const Effect = () => {
//   const [data, setData] = useState();
//   const [loading, setLoading] = useState(true);

//   const getData = async () => {
//     try {
//       const response = await fetch("https://raw.githubusercontent.com/thapatechnical/userapi/main/users.json");
//       const data = await response.json();
//       console.log(data);
//       setData(data);
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <View style={styles.loaderContainer}>
//           <ActivityIndicator size="large" color="#0000ff" />
//         </View>
//       ) : (
//         <View>
//           <View style={styles.headerContainer}>
//             <Text style={{ fontWeight: "bold", color: "#bbbaac", fontSize: 20 }}>List of students</Text>
//           </View>
//           <FlatList
//             data={data}
//             renderItem={({ item }) => {
//               return (
//                 <View style={styles.flat}>
//                   <View style={styles.imageContainer}>
//                     <Image
//                       style={styles.images}
//                       source={{ uri: "https://th.bing.com/th/id/R.e1c5ed5ed41a6771eaba76c5cba4b93c?rik=HuBmud1Lss7w5g&pid=ImgRaw&r=0" }}
//                     />
//                   </View>

//                   <View style={styles.bioContainer}>
//                     <Text>Bio {item.id}</Text>
//                   </View>

//                   <View style={styles.infoContainer}>
//                     <Text>{item.title}</Text>
//                     <Text>{item.body}</Text>
//                   </View>
//                 </View>
//               );
//             }}
//           />
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f9f180",
//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   headerContainer: {
//     alignItems: "center",
//     marginTop: 30,
//   },
//   images: {
//     height: 150,
//     width: 150,
//     resizeMode: "stretch",
//   },
//   imageContainer: {
//     alignItems: "center",
//     marginTop: 10,
//   },
// });

// export default Effect;


// import React, { useState } from "react";
// import {Text,View,StyleSheet, TextInput, TouchableOpacity,Alert} from "react-native";
// import Checkbox from 'expo-checkbox';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// const loginForm=()=>{
//     const stack=createNativeStackNavigator
//     const[agree,setAgree]=useState(false);
//     const[name,setname]=useState("");
//     const[pass,setpass]=useState("");
//     // console.log(name);
//     const submit=()=>{
//         if(name==="aizaz" && pass==="12345"){
//             Alert.alert("welcome to my platform");
//         } 
//         else{
//             Alert.alert("User name or password is wrong");

//         }
//     }
//     return(
//         <View style={az.maincontainer}>
//             <View style={az.headercontainer}>
//                 <Text style={az.heading}>Login Form</Text>
//             </View>
//             <View style={az.description}>
//                 <Text style={az.dscptext}>You can reach us any time via any@aizaz.com</Text>
//             </View>

//             <View style={az.inputnamecontainer}>
//                 <Text style={az.inputnametext}>Enter your name</Text>
//                 <TextInput style={az.nameinput}
//                 placeholder="Enter your name here"
//                 autoCapitalize="none"
//                 autoCorrect={false}
//                 value={name}
//                 onChangeText={(data)=>{
//                     setname(data)
//                 }}
//                 />
//             </View>

//             <View style={az.inputpasswordcontainer}>
//                 <Text style={az.inputpasswordtext}>Enter your password</Text>
//                 <TextInput style={az.passwordinput}
//                 placeholder="Enter your password here"
//                 autoCapitalize="none"
//                 autoCorrect={false}
//                 secureTextEntry={true}
//                 value={pass}
//                 onChangeText={(data)=>{
//                     setpass(data)
//                 }}
//                 />
//             </View>

//             <View style={az.wrapper}>
//                 <Checkbox
//                 value={agree}
//                 onValueChange={()=>{
//                     setAgree(!agree)
//                 }}
//                 color={agree?"#3913e8":undefined}
                
//                 />
//                 <Text style={az.wrappertext}> I have agreed with the terms and conditions</Text>
//             </View>

//             <View style={az.buttoncontainer}>
//                 <TouchableOpacity
//                 disabled={!agree}
//                 style={[az.button,{backgroundColor:agree?"#4e60c6":"grey"}]}
//                 onPress={submit}
//                 >
//                     <Text style={az.buttontext}>Login</Text>
//                 </TouchableOpacity>
//             </View>

//         </View>

//     );
    

// };

// const az=StyleSheet.create({
//     maincontainer:{
//         flex:1,
//         backgroundColor:"#fbf79d",
//     },




//     headercontainer:{
//         paddingTop:50,
//         paddingLeft:20,
//         // backgroundColor:"green",
//     },
//     heading:{
//         fontWeight:"bold",
//         fontSize:20,
        
//     },



//     description:{
//         paddingTop:2,
//         paddingLeft:20,
//         // backgroundColor:"blue",

//     },
//     dscptext:{
//         color:"#776f73",
//     },

//     inputnamecontainer:{
//         paddingTop:50,
//         paddingLeft:20,
//         paddingRight:20,
//     },
//     inputnametext:{
//         color:"#4e60c6",
//     },
//     nameinput:{
//         borderWidth:1,
//         borderColor:"black",
//         height:35,
//     },
//     inputpasswordcontainer:{
//         paddingTop:50,
//         paddingLeft:20,
//         paddingRight:20,
//     },
//     inputpasswordtext:{
//         color:"#4e60c6",
//     },
//     passwordinput:{
//         borderWidth:1,
//         borderColor:"black",
//         height:35
//     },
//     wrapper:{
//         paddingTop:20,
//         flexDirection:"row",
//         paddingLeft:20,
//     },

//     wrappertext:{
//         fontSize:10,
//     },

//     buttoncontainer:{
//         marginTop:20,
//         marginHorizontal:20,
        
//     },
//     buttontext:{
//         paddingTop:3,
//         textAlign:"center",

        
//     },
//     button:{
//         height:35,

//     }





// });

// export default loginForm;





// import React, { useState } from "react";
// import {Text,View,StyleSheet, TextInput, TouchableOpacity,Alert} from "react-native";
// import Checkbox from 'expo-checkbox';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import LoginForm from "./src/screen/LoginForm";
// import Home from "./src/screen/Home";


// const App=()=>{
//     const stack=createNativeStackNavigator();
//     return(
//         <NavigationContainer>
//             <stack.Navigator initialRouteName="login">
//                 <stack.Screen name='login' component={LoginForm}/>
//                 <stack.Screen name="home"  component={Home}/>

//             </stack.Navigator>
//         </NavigationContainer>


//     );

// };

// export default App;



// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import HomeScreen from "./useEffect/HomeScreen";
// import DetailsScreen from "./useEffect/DetailsScreen";

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;



// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from './StudyApp/HomeScreen'
// import Course from './StudyApp/Course';
// import Students from './StudyApp/Students';
// import About from './StudyApp/About';
// import Contact from './StudyApp/Contact';


// const  App= () => {
//   const stack=createNativeStackNavigator();
//   return (
//     <NavigationContainer>
//       <stack.Navigator initialRouteName="Home">
//         <stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
//         <stack.Screen name="Courses" component={Course} options={{headerTitleAlign:"center"}} />
//         <stack.Screen name="Students" component={Students } options={{headerTitleAlign:"center"}}  />
//         <stack.Screen name="About" component={About} options={{headerTitleAlign:"center"}} />
//         <stack.Screen name="Contact" component={Contact} options={{headerTitleAlign:"center"}}/>
//       </stack.Navigator>
//     </NavigationContainer>
    

//   );
// };



// const styles = StyleSheet.create({});

// export  default App;






// import React from 'react';
// import { SafeAreaView, StyleSheet } from 'react-native';
// import { Button,Card,Text } from '@rneui/themed';



// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Card>
//         <Card.Title>HELLO WORLD</Card.Title>
//         <Card.Divider/>
//         <Text style={{marginBottom: 10}}>
//           The idea with React Native Elements is more about component structure than actual design.
//         </Text>
//         <Button
//           title="BUTTON"
//         />
//       </Card>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
// });


// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// // import Header from './Source/components/Header'
// import { StatusBar } from 'react-native'
// import { colors } from './Source/global/Styles'
// import SigninScreen from './Source/Screens/AuthScreens/SigninScreen'



// const App = () => {
//   return (
//     <View style={styles.container}>
//       <StatusBar 
//       barStyle="light-content"
//       backgroundColor={colors.statusbar}
      
//       />
//       {/* <Header title="MY ACCOUNT" type="arrow-left"/> */}

//       <SigninScreen/>
      
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container:{
//     flex:1
//   }
// })




// import * as SecureStore from 'expo-secure-store';
// import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo"
// import React from 'react';
// import Page from './auth/signin';
// import SignUpScreen from './auth/signup';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";



// const tokenCache = {
//   async getToken(key: string) {
//     try {
//       const item = await SecureStore.getItemAsync(key);
//       if (item) {
//         console.log(`${key} was used 🔐 \n`);
//       } else {
//         console.log("No values stored under key: " + key);
//       }
//       return item;
//     } catch (error) {
//       console.error("SecureStore get item error: ", error);
//       await SecureStore.deleteItemAsync(key);
//       return null;
//     }
//   },
//   async saveToken(key: string, value: string) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (err) {
//       return;
//     }
//   },
// };

// const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;



// if (!publishableKey) {
//   throw new Error('Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env')
// }

// const Stack = createNativeStackNavigator();

// function RootLayoutNav() {
//   return (
//     <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
//       <ClerkLoaded>
      
//       <NavigationContainer>
//       <Stack.Navigator initialRouteName="SignIn" >
//         <Stack.Screen name="SignUp" component={SignUpScreen} />
//         <Stack.Screen name="SignIn" component={Page} />
//       </Stack.Navigator>
//     </NavigationContainer>
        
//       </ClerkLoaded>
//     </ClerkProvider>
//   );
// }

// export default RootLayoutNav



// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import LoginScreen from './OnlineShopping/GetStartedScreen';
// import Authentication from './OnlineShopping/GetStartedScreen';

// const App = () => {
//   // const stack=createNativeStackNavigator();
//   return (
    

//     // <NavigationContainer>
//     //   <stack.Navigator initialRouteName='auth'>
//     //     <stack.Screen name='auth' component={Authentication}/>
//     //     {/* <stack.Screen name='getstarted' component={LoginScreen}/> */}

//     //   </stack.Navigator>

//     // </NavigationContainer>
//      <Authentication navigation={undefined}/>

   

//   )
// }

// export default App

// const styles = StyleSheet.create({})



// import { useState } from 'react';
// import { View, TextInput, Button, Alert,StyleSheet } from 'react-native';
// import {auth} from './firebase'; // Adjust path as needed
// import { createUserWithEmailAndPassword } from 'firebase/auth';


// function SignUpScreen({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignUp = () => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then(userCredential => {
//         const user = userCredential.user;
//         Alert.alert('Sign Up Successful', `Welcome ${user.email}`);
//         navigation.replace('Home'); // Navigate to Home screen after successful sign up
//       })
//       .catch(error => {
//         Alert.alert('Sign Up Error', error.message);
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         style={styles.input}
//       />
//       <Button title="Sign Up" onPress={handleSignUp} />
//       <Button title="Back to Sign In" onPress={() => navigation.navigate('SignIn')} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     padding: 10,
//     marginBottom: 10,
//     width: '80%',
//   },
// });

// export default SignUpScreen;



// screens/SignInScreen.js
// import React, { useState } from 'react';
// import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from './firebase';

// function SignInScreen() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignIn = () => {
//     signInWithEmailAndPassword(auth, email, password)
//       .then(userCredential => {
//         const user = userCredential.user;
//         Alert.alert('Sign In Successful', `Welcome back ${user.email}`);
//         // navigation.replace('Home'); // Navigate to Home screen after successful sign in
//       })
//       .catch(error => {
//         Alert.alert('Sign In Error', error.message);
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//         style={styles.input}
//       />
//       <Button title="Sign In" onPress={handleSignIn} />
//       <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     padding: 10,
//     marginBottom: 10,
//     width: '80%',
//   },
// });

// export default SignInScreen;


// SignInScreen.js
// SignInScreen.js (updated)
// import React from 'react';
// import { View, Button, StyleSheet } from 'react-native';
// import { auth, provider } from './firebase'; // Make sure this path is correct
// import { signInWithPopup } from 'firebase/auth'; // Make sure this import is correct

// export default function SignInScreen() {
//   const signInWithGoogle = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       console.log('User signed in: ', result.user);
//     } catch (error) {
//       console.error('Error signing in: ', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Button
//         title="Sign In with Google"
//         onPress={signInWithGoogle}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });



// import { ActivityIndicator, StyleSheet, Text, View,Platform, FlatList, ImageBackground } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import * as Location from 'expo-location';
// import dayjs from 'dayjs';
// import LottieView from 'lottie-react-native';

// // const url="https://api.openweathermap.org/data/2.5/weather?lat=30.765940&lon=72.437653&appid=25599ed3971af7bcc386fe882ad4367f&units=metric"

// const App = () => {
//   // const animation = useRef<LottieView>(null);
//   const [weather,setweather]=useState();
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const[forcast,setforcast]=useState(null);


//   const FetchWether=async()=>{
//     const lat=location.coords.latitude
//     const lon=location.coords.longitude

//     const result=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=25599ed3971af7bcc386fe882ad4367f&units=metric`);
//     const data=await result.json()
//     setweather(data);
//     // console.log(JSON.stringify(data.main.temp,null,2))


//   }

//   const FetchForcast=async()=>{
//     const lat=location.coords.latitude
//     const lon=location.coords.longitude
//     if(!location){ 
//       return;
//     }
//     const result=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=25599ed3971af7bcc386fe882ad4367f&units=metric`);
//     const data=await result.json()
//     const extractedData = data.list.map(item => ({
//       dt: item.dt,
//       temp: item.main.temp,
//       date: dayjs(item.dt * 1000).format('YYYY-MM-DD'), // Format date
//       time: dayjs(item.dt * 1000).format('h:mm A') ,  // Format time
//       weekday: dayjs(item.dt * 1000).format('ddd')
//     }));
//     setforcast(extractedData);
//     // console.log(JSON.stringify(data,null,2))


//   }



//   useEffect(() => {
//     (async () => {
      
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//       // console.log(JSON.stringify(location))
//     })();
//   }, []);

//   useEffect(()=>{
//   if(location){
//     FetchWether();
//     FetchForcast();
//   } 

//   },[location])

//   if(!weather) {
//     return(
//       <ActivityIndicator size={70} style={{flex:1,justifyContent:"center",alignItems:"center"}} />
//     )
//   }
//   return(
//     <ImageBackground
//     source={{ uri: 'https://wallpaperaccess.com/full/5769173.jpg' }} // Replace with your image URL or local image
//     style={styles.backgroundImage}
//   >
//       <View style={styles.container}>
//        <Text style={styles.cityname}> {weather.name} </Text>
//        <Text style={styles.temp}> {Math.floor(weather.main.temp)}° </Text>
//        <FlatList 
//         data={forcast}
//         horizontal
//         keyExtractor={(item) => item.dt.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.flatdata}>
//             <Text>{Math.floor(item.temp)}°</Text>
//             {/* <Text>{item.date} </Text> */}
//             <Text>{item.time} </Text>
//             <Text>{item.weekday} </Text>
//           </View>
//         )}
//       />
//       </View>
//       </ImageBackground>
//     )
  
    

// }

// export default App

// const styles = StyleSheet.create({
//   backgroundImage:{
//     flex:1,
//     resizeMode:"stretch"

//   },
//   container:{
//     // marginTop:30
//     paddingTop:150,
//     // backgroundColor:"#a67b5b",
//     // flex:1
//   },

//   cityname:{
//     fontSize:35,
//     textAlign:"center",
//     color:"grey",
//     fontStyle:"italic"
    
//   },
//   temp:{
//     fontSize:70,
//     textAlign:"center",
//     fontWeight:"bold",
//     color:"grey"
//   },
//   flatdata:{
//     marginTop:200,
//     backgroundColor:"grey",
//     marginRight:10,
//     justifyContent:"center",
//     alignItems:"center",
//     height:150,
//     borderRadius:15,
//     aspectRatio:9/16
//     // elevation:1,
    

//   }

  
  
  

// })




// import { ActivityIndicator, StyleSheet, Text, View, Platform, FlatList, ImageBackground } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import * as Location from 'expo-location';
// import dayjs from 'dayjs';
// import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library
// import { BlurView } from 'expo-blur';

// const App = () => {
//   const [weather, setWeather] = useState();
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [forecast, setForecast] = useState(null);

//   const fetchWeather = async () => {
//     const lat = location.coords.latitude;
//     const lon = location.coords.longitude;

//     const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=25599ed3971af7bcc386fe882ad4367f&units=metric`);
//     const data = await result.json();
//     setWeather(data);
//   };

//   const fetchForecast = async () => {
//     const lat = location.coords.latitude;
//     const lon = location.coords.longitude;
//     if (!location) {
//       return;
//     }
//     const result = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=25599ed3971af7bcc386fe882ad4367f&units=metric`);
//     const data = await result.json();
//     const extractedData = data.list.map(item => ({
//       dt: item.dt,
//       temp: item.main.temp,
//       hum: item.main.humidity,
//       date: dayjs(item.dt * 1000).format('YYYY-MM-DD'), // Format date
//       time: dayjs(item.dt * 1000).format('h:mm A'),  // Format time
//       weekday: dayjs(item.dt * 1000).format('ddd'),
//       hour:dayjs(item.dt * 1000).format('H'),
//       id:item.weather[0].id
//     }));
//     setForecast(extractedData);
//   };

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//     })();
//   }, []);

//   useEffect(() => {
//     if (location) {
//       fetchWeather();
//       fetchForecast();
//     }
//   }, [location]);

//   const getforecastIcon = (obj) => {
//     const id = obj.id;
//     // console.log(id)
//     const hour = obj.hour;
//     console.log(hour)
//     const isDayTime = hour >= 6 && hour < 18;

//     if (id >= 200 && id < 300) {
//       return 'thunderstorm-outline';
//     } else if (id >= 300 && id < 500) {
//       return 'rainy-outline';
//     } else if (id >= 500 && id < 600) {
//       return 'rainy-outline';
//     } else if (id >= 600 && id < 700) {
//       return 'snow-outline';
//     } else if (id >= 700 && id < 800) {
//       return 'cloudy-outline';
//     } else if (id === 800) {
//       return isDayTime ? 'sunny-outline' : 'moon-outline';
//     } else if (id > 800) {
//       return 'cloudy-outline';
//     }
//   };

//   const getWeatherIcon = (obj) => {
//     const id = obj.weather[0].id; // Get the weather condition ID
//     const hour = dayjs().hour(); // Get the current hour
//     const isDayTime = hour >= 6 && hour < 18; // Determine if it's day or night

//     if (id >= 200 && id < 300) {
//       return 'thunderstorm-outline';
//     } else if (id >= 300 && id < 500) {
//       return 'rainy-outline';
//     } else if (id >= 500 && id < 600) {
//       return 'rainy-outline';
//     } else if (id >= 600 && id < 700) {
//       return 'snow-outline';
//     } else if (id >= 700 && id < 800) {
//       return 'cloudy-outline';
//     } else if (id === 800) {
//       return isDayTime ? 'sunny-outline' : 'moon-outline';
//     } else if (id > 800) {
//       return 'cloudy-outline';
//     }
//   };

//   if (!weather) {
//     return (
//       <ActivityIndicator size={70} style={{ flex: 1, justifyContent: "center", alignItems: "center" }} />
//     );
//   }

//   return (
//     <ImageBackground
//       source={{ uri: 'https://wallpaperaccess.com/full/5769173.jpg' }} // Replace with your image URL or local image
//       style={styles.backgroundImage}
//     >
//       <View style={styles.container}>
//       <Text style={{fontSize:15,color:"grey"}}>Humidity:{weather.main.humidity}% </Text>
//       <Text style={{fontSize:15,color:"grey"}}>Feels like:{weather.main.feels_like}° </Text>
//         <Text style={styles.cityname}> {weather.name} </Text>
//         <Text style={styles.temp}> {Math.floor(weather.main.temp)}° </Text>
//         <Icon name={getWeatherIcon(weather)} size={100} color="grey" style={{ textAlign: 'center' }} />
//         <FlatList
//           data={forecast}
//           horizontal
//           keyExtractor={(item) => item.dt.toString()}
//           renderItem={({ item }) => (
            
//             <View style={styles.flatdata}>
//               <BlurView intensity={50}  style={styles.blurView}>
//               <Icon name={getforecastIcon(item)} size={35} color="black" style={{ textAlign: 'center' }} />
//               <Text>{Math.floor(item.temp)}°</Text>
//               <Text>Hum:{item.hum} </Text>
//               <Text>{item.time} </Text>
//               <Text>{item.weekday} </Text>
//               </BlurView>
//             </View>
          
//           )}
//         />
//       </View>
//     </ImageBackground>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: "stretch"
//   },
//   container: {
//     paddingTop: 130,
//   },
//   cityname: {
//     fontSize: 35,
//     textAlign: "center",
//     color: "grey",
//     fontStyle: "italic"
//   },
//   temp: {
//     fontSize: 70,
//     textAlign: "center",
//     fontWeight: "bold",
//     color: "grey"
//   },
//   flatdata: {
//     marginTop: 120,
//     // backgroundColor: "grey",
//     marginRight: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     height: 150,
//     borderRadius: 15,
//     // aspectRatio: 9 / 16,
//     overflow:"hidden"
    
    
//   },
//   blurView:{
//     // marginTop: 120,
//     // marginRight: 10,
//     // justifyContent: "center",
//     // alignItems: "center",
//     // height: 150,
//     // borderRadius: 15,
//     aspectRatio: 9 / 16,
//     flex:1,
    


//   }
// });






// import React from 'react';   //online marketplace
// import { NavigationContainer } from '@react-navigation/native';
// import Tabnavigation from './Apps/navigation/stacknavigation';


// import { Text } from 'react-native';

// export default function App() {
//   return (
//     <NavigationContainer>
//     <Tabnavigation/>
//     </NavigationContainer>

//   );
// }


// screens/SignInScreen.js





// import React,{useState,useEffect} from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import {AuthNavigator,TabNavigator} from './Apps/navigation/stacknavigation'; // Adjust the path as needed
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { ActivityIndicator } from 'react-native';
// // import { auth } from './firebase'; // Ensure you're importing the configured auth instance

// export default function App() {
//   // Initialize state variables
//   const [user, setUser] = useState(null);
//   const [initializing, setInitializing] = useState(true);

//   const auth = getAuth();

//   // Use the useEffect hook to set up the auth state observer
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setUser(user); // Update the user state
//       if (initializing) setInitializing(false); // Set initializing to false once the initial check is done
//     });

//     // Clean up the subscription on unmount
//     return unsubscribe;
//   }, []);

//   // If the app is initializing, return null (you can show a loading indicator here)
//   // if (initializing) return null;

//   // Return the NavigationContainer with the appropriate navigator based on the auth state
//   return (
//     <>
//       {initializing ? (
//         <ActivityIndicator
//           size={50}
//           color={"grey"}
//           style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//         />
//       ) : (
//         <NavigationContainer>
//           {user ? <TabNavigator /> : <AuthNavigator />}
//         </NavigationContainer>
//       )}
//      </>
//   );
// }




// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // For icons like eye/eye-off

// const RegistrationScreen = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <Text style={styles.header}>Join the Fitness Journey</Text>

//       {/* Name Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         placeholderTextColor="#aaa"
//       />

//       {/* Email Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         placeholderTextColor="#aaa"
//         keyboardType="email-address"
//       />

//       {/* Password Input */}
//       <View style={styles.passwordContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           placeholderTextColor="#aaa"
//           secureTextEntry={!passwordVisible}
//         />
//         <TouchableOpacity
//           onPress={() => setPasswordVisible(!passwordVisible)}
//           style={styles.eyeIcon}
//         >
//           <Ionicons
//             name={passwordVisible ? 'eye' : 'eye-off'}
//             size={24}
//             color="#aaa"
//           />
//         </TouchableOpacity>
//       </View>

//       {/* Confirm Password Input */}
//       <View style={styles.passwordContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Confirm Password"
//           placeholderTextColor="#aaa"
//           secureTextEntry={!confirmPasswordVisible}
//         />
//         <TouchableOpacity
//           onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
//           style={styles.eyeIcon}
//         >
//           <Ionicons
//             name={confirmPasswordVisible ? 'eye' : 'eye-off'}
//             size={24}
//             color="#aaa"
//           />
//         </TouchableOpacity>
//       </View>

//       {/* Signup Button */}
//       <TouchableOpacity style={styles.signupButton}>
//         <Text style={styles.signupButtonText}>Sign Up</Text>
//       </TouchableOpacity>

//       {/* Google Button */}
//       <TouchableOpacity style={styles.googleButton}>
//         <Image
//           source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' }}
//           style={styles.googleIcon}
//         />
//         <Text style={styles.googleButtonText}>Sign Up with Google</Text>
//       </TouchableOpacity>

//       {/* Already have an account? */}
//       <TouchableOpacity>
//         <Text style={styles.signInText}>
//           Already have an account? <Text style={styles.signInLink}>Sign In</Text>
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f7f7f7',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#2d6a4f', // Fitness green theme
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 15,
//     marginBottom: 15,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   passwordContainer: {
//     width: '100%',
//     position: 'relative',
//   },
//   eyeIcon: {
//     position: 'absolute',
//     right: 15,
//     top: 15,
//   },
//   signupButton: {
//     width: '100%',
//     backgroundColor: '#2d6a4f',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   signupButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   googleButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 15,
//     borderRadius: 8,
//     width: '100%',
//     marginBottom: 15,
//   },
//   googleIcon: {
//     width: 20,
//     height: 20,
//     marginRight: 10,
//   },
//   googleButtonText: {
//     fontSize: 16,
//     color: '#444',
//   },
//   signInText: {
//     fontSize: 16,
//     color: '#444',
//   },
//   signInLink: {
//     color: '#2d6a4f',
//     fontWeight: 'bold',
//   },
// });



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // For icons like eye/eye-off
// import { MaterialCommunityIcons } from '@expo/vector-icons'; // For the dumbbell icon

// const RegistrationScreen = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

//   return (
//     <View style={styles.container}>
//       {/* Dumbbell Icon */}
//       <MaterialCommunityIcons name="dumbbell" size={64} color="#2d6a4f" style={styles.dumbbellIcon} />

//       {/* Header */}
//       <Text style={styles.header}>Join the Fitness Journey</Text>

//       {/* Name Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         placeholderTextColor="#aaa"
//       />

//       {/* Email Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         placeholderTextColor="#aaa"
//         keyboardType="email-address"
//       />

//       {/* Password Input */}
//       <View style={styles.passwordContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           placeholderTextColor="#aaa"
//           secureTextEntry={!passwordVisible}
//         />
//         <TouchableOpacity
//           onPress={() => setPasswordVisible(!passwordVisible)}
//           style={styles.eyeIcon}
//         >
//           <Ionicons
//             name={passwordVisible ? 'eye' : 'eye-off'}
//             size={24}
//             color="#aaa"
//           />
//         </TouchableOpacity>
//       </View>

//       {/* Confirm Password Input */}
//       <View style={styles.passwordContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Confirm Password"
//           placeholderTextColor="#aaa"
//           secureTextEntry={!confirmPasswordVisible}
//         />
//         <TouchableOpacity
//           onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
//           style={styles.eyeIcon}
//         >
//           <Ionicons
//             name={confirmPasswordVisible ? 'eye' : 'eye-off'}
//             size={24}
//             color="#aaa"
//           />
//         </TouchableOpacity>
//       </View>

//       {/* Signup Button */}
//       <TouchableOpacity style={styles.signupButton}>
//         <Text style={styles.signupButtonText}>Sign Up</Text>
//       </TouchableOpacity>

//       {/* Google Button */}
//       <TouchableOpacity style={styles.googleButton}>
//         <Image
//           source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' }}
//           style={styles.googleIcon}
//         />
//         <Text style={styles.googleButtonText}>Sign Up with Google</Text>
//       </TouchableOpacity>

//       {/* Already have an account? */}
//       <TouchableOpacity>
//         <Text style={styles.signInText}>
//           Already have an account? <Text style={styles.signInLink}>Sign In</Text>
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f7f7f7',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   dumbbellIcon: {
//     marginBottom: 20,
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#2d6a4f', // Fitness green theme
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 15,
//     marginBottom: 15,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   passwordContainer: {
//     width: '100%',
//     position: 'relative',
//   },
//   eyeIcon: {
//     position: 'absolute',
//     right: 15,
//     top: 15,
//   },
//   signupButton: {
//     width: '100%',
//     backgroundColor: '#2d6a4f',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   signupButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   googleButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 15,
//     borderRadius: 8,
//     width: '100%',
//     marginBottom: 15,
//   },
//   googleIcon: {
//     width: 20,
//     height: 20,
//     marginRight: 10,
//   },
//   googleButtonText: {
//     fontSize: 16,
//     color: '#444',
//   },
//   signInText: {
//     fontSize: 16,
//     color: '#444',
//   },
//   signInLink: {
//     color: '#2d6a4f',
//     fontWeight: 'bold',
//   },
// });

// export default RegistrationScreen;























// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Animated,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // For icons like eye/eye-off
// import { MaterialCommunityIcons } from '@expo/vector-icons'; // For the dumbbell icon

// const RegistrationScreen = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

//   // Animation setup for the dumbbell icon
//   const rotation = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.loop(
//       Animated.timing(rotation, {
//         toValue: 1,
//         duration: 2000,
//         useNativeDriver: true,
//       })
//     ).start();
//   }, [rotation]);

//   const rotateInterpolate = rotation.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });

//   return (
//     <View style={styles.container}>
//       {/* Animated Dumbbell Icon */}
//       <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
//         <MaterialCommunityIcons name="dumbbell" size={64} color="#2d6a4f" style={styles.dumbbellIcon} />
//       </Animated.View>

//       {/* Header */}
//       <Text style={styles.header}>Join the Fitness Journey</Text> 

//       {/* Name Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         placeholderTextColor="#aaa"
//       />

//       {/* Email Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         placeholderTextColor="#aaa"
//         keyboardType="email-address"
//       />

//       {/* Password Input */}
//       <View style={styles.passwordContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           placeholderTextColor="#aaa"
//           secureTextEntry={!passwordVisible}
//         />
//         <TouchableOpacity
//           onPress={() => setPasswordVisible(!passwordVisible)}
//           style={styles.eyeIcon}
//         >
//           <Ionicons
//             name={passwordVisible ? 'eye' : 'eye-off'}
//             size={24}
//             color="#aaa"
//           />
//         </TouchableOpacity>
//       </View>

//       {/* Confirm Password Input */}
//       <View style={styles.passwordContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Confirm Password"
//           placeholderTextColor="#aaa"
//           secureTextEntry={!confirmPasswordVisible}
//         />
//         <TouchableOpacity
//           onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
//           style={styles.eyeIcon}
//         >
//           <Ionicons
//             name={confirmPasswordVisible ? 'eye' : 'eye-off'}
//             size={24}
//             color="#aaa"
//           />
//         </TouchableOpacity>
//       </View>

//       {/* Signup Button */}
//       <TouchableOpacity style={styles.signupButton}>
//         <Text style={styles.signupButtonText}>Sign Up</Text>
//       </TouchableOpacity>

//       {/* Google Button */}
//       <TouchableOpacity style={styles.googleButton}>
//         <Ionicons name="logo-google" size={20} color="#DB4437" style={styles.googleIcon} />
//         <Text style={styles.googleButtonText}>Sign Up with Google</Text>
//       </TouchableOpacity>

//       {/* Already have an account? */}
//       <TouchableOpacity>
//         <Text style={styles.signInText}>
//           Already have an account? <Text style={styles.signInLink}>Sign In</Text>
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f7f7f7',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   dumbbellIcon: {
//     marginBottom: 20,
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#2d6a4f', // Fitness green theme
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 15,
//     marginBottom: 15,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   passwordContainer: {
//     width: '100%',
//     position: 'relative',
//   },
//   eyeIcon: {
//     position: 'absolute',
//     right: 15,
//     top: 15,
//   },
//   signupButton: {
//     width: '100%',
//     backgroundColor: '#2d6a4f',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   signupButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   googleButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 15,
//     borderRadius: 8,
//     width: '100%',
//     marginBottom: 15,
//   },
//   googleIcon: {
//     marginRight: 10,
//   },
//   googleButtonText: {
//     fontSize: 16,
//     color: '#444',
//   },
//   signInText: {
//     fontSize: 16,
//     color: '#444',
//   },
//   signInLink: {
//     color: '#2d6a4f',
//     fontWeight: 'bold',
//   },
// });

// export default RegistrationScreen;







// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Platform } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // For icons like eye/eye-off
// import { MaterialCommunityIcons } from '@expo/vector-icons'; // For the dumbbell icon
// import { LinearGradient } from 'expo-linear-gradient'; // For gradient background

// const RegistrationScreen = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

//   // Animation setup for the dumbbell icon
//   const rotation = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.loop(
//       Animated.timing(rotation, {
//         toValue: 1,
//         duration: 2000,
//         useNativeDriver: true,
//       })
//     ).start();
//   }, [rotation]);

//   const rotateInterpolate = rotation.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });

//   return (
//     <LinearGradient colors={['#2d6a4f', '#4CAF50']} style={styles.container}> {/* Gradient background */}
//       {/* Animated Dumbbell Icon */}
//       <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
//         <MaterialCommunityIcons name="dumbbell" size={64} color="#fff" style={styles.dumbbellIcon} />
//       </Animated.View>

//       {/* Header */}
//       <Text style={styles.header}>Join the Fitness Journey</Text>

//       {/* Form */}
//       <View style={styles.formContainer}>
//         {/* Name Input */}
//         <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#aaa" />

//         {/* Email Input */}
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           placeholderTextColor="#aaa"
//           keyboardType="email-address"
//         />

//         {/* Password Input */}
//         <View style={styles.passwordContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             placeholderTextColor="#aaa"
//             secureTextEntry={!passwordVisible}
//           />
//           <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.eyeIcon}>
//             <Ionicons name={passwordVisible ? 'eye' : 'eye-off'} size={24} color="#aaa" />
//           </TouchableOpacity>
//         </View>

//         {/* Confirm Password Input */}
//         <View style={styles.passwordContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Confirm Password"
//             placeholderTextColor="#aaa"
//             secureTextEntry={!confirmPasswordVisible}
//           />
//           <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)} style={styles.eyeIcon}>
//             <Ionicons name={confirmPasswordVisible ? 'eye' : 'eye-off'} size={24} color="#aaa" />
//           </TouchableOpacity>
//         </View>

//         {/* Signup Button */}
//         <TouchableOpacity style={styles.signupButton}>
//           <Text style={styles.signupButtonText}>Sign Up</Text>
//         </TouchableOpacity>

//         {/* Google Button */}
//         <TouchableOpacity style={styles.googleButton}>
//           <Ionicons name="logo-google" size={20} color="#DB4437" style={styles.googleIcon} />
//           <Text style={styles.googleButtonText}>Sign Up with Google</Text>
//         </TouchableOpacity>

//         {/* Already have an account? */}
//         <TouchableOpacity>
//           <Text style={styles.signInText}>
//             Already have an account? <Text style={styles.signInLink}>Sign In</Text>
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     width: '100%',
//   },
//   dumbbellIcon: {
//     marginBottom: 20,
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#fff', // White text for contrast on gradient
//     marginBottom: 20,
//   },
//   formContainer: {
//     width: '100%',
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 5,
//   },
//   input: {
//     width: '100%',
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 15,
//     marginBottom: 15,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   passwordContainer: {
//     width: '100%',
//     position: 'relative',
//   },
//   eyeIcon: {
//     position: 'absolute',
//     right: 15,
//     top: 15,
//   },
//   signupButton: {
//     width: '100%',
//     backgroundColor: '#2d6a4f',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   signupButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   googleButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 15,
//     borderRadius: 8,
//     width: '100%',
//     marginBottom: 15,
//   },
//   googleIcon: {
//     marginRight: 10,
//   },
//   googleButtonText: {
//     fontSize: 16,
//     color: '#444',
//   },
//   signInText: {
//     fontSize: 16,
//     color: '#444',
//   },
//   signInLink: {
//     color: '#2d6a4f',
//     fontWeight: 'bold',
//   },
// });

// export default RegistrationScreen;








// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // For icons like eye/eye-off
// import { MaterialCommunityIcons } from '@expo/vector-icons'; // For the dumbbell icon
// import { LinearGradient } from 'expo-linear-gradient'; // For gradient background

// const RegistrationScreen = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

//   // Animation setup for the dumbbell icon
//   const rotation = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.loop(
//       Animated.timing(rotation, {
//         toValue: 1,
//         duration: 2000,
//         useNativeDriver: true,
//       })
//     ).start();
//   }, [rotation]);

//   const rotateInterpolate = rotation.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });

//   return (
//     <LinearGradient colors={['#2d6a4f', '#4CAF50']} style={styles.container}> {/* Gradient background */}
//       {/* Animated Dumbbell Icon */}
//       <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
//         <MaterialCommunityIcons name="dumbbell" size={64} color="#fff" style={styles.dumbbellIcon} />
//       </Animated.View>

//       {/* Header */}
//       <Text style={styles.header}>Join the Fitness Journey</Text> {/* Make sure this is wrapped in Text */}

//       {/* Form */}
//       <View style={styles.formContainer}>
//         {/* Name Input */}
//         <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#aaa" />

//         {/* Email Input */}
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           placeholderTextColor="#aaa"
//           keyboardType="email-address"
//         />

//         {/* Password Input */}
//         <View style={styles.passwordContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             placeholderTextColor="#aaa"
//             secureTextEntry={!passwordVisible}
//           />
//           <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.eyeIcon}>
//             <Ionicons name={passwordVisible ? 'eye' : 'eye-off'} size={24} color="#aaa" />
//           </TouchableOpacity>
//         </View>

//         {/* Confirm Password Input */}
//         <View style={styles.passwordContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Confirm Password"
//             placeholderTextColor="#aaa"
//             secureTextEntry={!confirmPasswordVisible}
//           />
//           <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)} style={styles.eyeIcon}>
//             <Ionicons name={confirmPasswordVisible ? 'eye' : 'eye-off'} size={24} color="#aaa" />
//           </TouchableOpacity>
//         </View>

//         {/* Signup Button */}
//         <TouchableOpacity style={styles.signupButton}>
//           <Text style={styles.signupButtonText}>Sign Up</Text>
//         </TouchableOpacity>

//         {/* Google Button */}
//         <TouchableOpacity style={styles.googleButton}>
//           <Ionicons name="logo-google" size={20} color="#DB4437" style={styles.googleIcon} />
//           <Text style={styles.googleButtonText}>Sign Up with Google</Text>
//         </TouchableOpacity>

//         {/* Already have an account? */}
//         <TouchableOpacity>
//           <Text style={styles.signInText}>
//             Already have an account? <Text style={styles.signInLink}>Sign In</Text> {/* Wrapped this text in Text */}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     width: '100%',
//   },
//   dumbbellIcon: {
//     marginBottom: 20,
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#fff', // White text for contrast on gradient
//     marginBottom: 20,
//   },
//   formContainer: {
//     width: '100%',
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 5,
//   },
//   input: {
//     width: '100%',
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 15,
//     marginBottom: 15,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   passwordContainer: {
//     width: '100%',
//     position: 'relative',
//   },
//   eyeIcon: {
//     position: 'absolute',
//     right: 15,
//     top: 15,
//   },
//   signupButton: {
//     width: '100%',
//     backgroundColor: '#2d6a4f',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   signupButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   googleButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 15,
//     borderRadius: 8,
//     width: '100%',
//     marginBottom: 15,
//   },
//   googleIcon: {
//     marginRight: 10,
//   },
//   googleButtonText: {
//     fontSize: 16,
//     color: '#444',
//   },
//   signInText: {
//     fontSize: 16,
//     color: '#444',
//   },
//   signInLink: {
//     color: '#2d6a4f',
//     fontWeight: 'bold',
//   },
// });

// export default RegistrationScreen;







// registration screen



// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Animated,
//   ImageBackground,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // For icons like eye/eye-off
// import { MaterialCommunityIcons } from '@expo/vector-icons'; // For the dumbbell icon

// const RegistrationScreen = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

//   // Animation setup for the dumbbell icon
//   const rotation = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.loop(
//       Animated.timing(rotation, {
//         toValue: 1,
//         duration: 2000,
//         useNativeDriver: true,
//       })
//     ).start();
//   }, [rotation]);

//   const rotateInterpolate = rotation.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });

//   return (
//     <ImageBackground
//       source={{
//         uri: 'https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       }}
//       style={styles.backgroundImage}
//     >
//       {/* Animated Dumbbell Icon */}
//       <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
//         <MaterialCommunityIcons name="dumbbell" size={64} color="#fff" style={styles.dumbbellIcon} />
//       </Animated.View>

//       {/* Header Section */}
//       <Text style={styles.header}>Join the Fitness Journey</Text>

//       {/* Form Section */}
//       <View style={styles.formContainer}>
//         {/* Name Input */}
//         <TextInput
//           style={styles.input}
//           placeholder="Name"
//           placeholderTextColor="#aaa"
//         />

//         {/* Email Input */}
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           placeholderTextColor="#aaa"
//           keyboardType="email-address"
//         />

//         {/* Password Input */}
//         <View style={styles.passwordContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             placeholderTextColor="#aaa"
//             secureTextEntry={!passwordVisible}
//           />
//           <TouchableOpacity
//             onPress={() => setPasswordVisible(!passwordVisible)}
//             style={styles.eyeIcon}
//           >
//             <Ionicons
//               name={passwordVisible ? 'eye' : 'eye-off'}
//               size={24}
//               color="#aaa"
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Confirm Password Input */}
//         <View style={styles.passwordContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Confirm Password"
//             placeholderTextColor="#aaa"
//             secureTextEntry={!confirmPasswordVisible}
//           />
//           <TouchableOpacity
//             onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
//             style={styles.eyeIcon}
//           >
//             <Ionicons
//               name={confirmPasswordVisible ? 'eye' : 'eye-off'}
//               size={24}
//               color="#aaa"
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Sign Up Button */}
//         <TouchableOpacity style={styles.signupButton}>
//           <Text style={styles.signupButtonText}>Sign Up</Text>
//         </TouchableOpacity>

//         {/* Google Sign Up Button */}
//         <TouchableOpacity style={styles.googleButton}>
//           <Ionicons name="logo-google" size={20} color="#DB4437" style={styles.googleIcon} />
//           <Text style={styles.googleButtonText}>Sign Up with Google</Text>
//         </TouchableOpacity>

//         {/* Sign In Link */}
//         <TouchableOpacity>
//           <Text style={styles.signInText}>
//             Already have an account? <Text style={styles.signInLink}>Sign In</Text>
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode:"cover",
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   dumbbellIcon: {
//     marginBottom: 20,
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 20,
//     textShadowColor: 'rgba(0, 0, 0, 0.8)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 3,
//   },
//   formContainer: {
//     width: '90%',
//     backgroundColor: 'rgba(255, 255, 255, 0.6)',
//     borderRadius: 10,
//     padding: 20,
//     alignItems: 'center',
//   },
//   input: {
//     width: '100%',
//     backgroundColor: '#f9f9f9',
//     borderRadius: 8,
//     padding: 15,
//     marginBottom: 15,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   passwordContainer: {
//     width: '100%',
//     position: 'relative',
//   },
//   eyeIcon: {
//     position: 'absolute',
//     right: 15,
//     top: 15,
//   },
//   signupButton: {
//     width: '100%',
//     backgroundColor: '#2e4053',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   signupButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   googleButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 15,
//     borderRadius: 8,
//     width: '100%',
//     marginBottom: 15,
//   },
//   googleIcon: {
//     marginRight: 10,
//   },
//   googleButtonText: {
//     fontSize: 16,
//     color: '#444',
//   },
//   signInText: {
//     fontSize: 16,
//     color: '#444',
//   },
//   signInLink: {
//     color: '#2e4053',
//     fontWeight: 'bold',
//   },
// });

// export default RegistrationScreen;







// sign in screen



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ImageBackground,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // For icons like eye/eye-off
// import { LinearGradient } from 'expo-linear-gradient'; 

// const SignInScreen = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   return (

//    <View
//       // colors={['#4A90E2', '#50C7F4']} // Gradient colors (start and end)
//       style={styles.container}
//     >
//       {/* Header Section */}
//       <Text style={styles.header}>Welcome Back</Text>

//       {/* Form Section */}
//       <View style={styles.formContainer}>
//         {/* Email Input */}
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           placeholderTextColor="#aaa"
//           keyboardType="email-address"
//         />

//         {/* Password Input */}
//         <View style={styles.passwordContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             placeholderTextColor="#aaa"
//             secureTextEntry={!passwordVisible}
//           />
//           <TouchableOpacity
//             onPress={() => setPasswordVisible(!passwordVisible)}
//             style={styles.eyeIcon}
//           >
//             <Ionicons
//               name={passwordVisible ? 'eye' : 'eye-off'}
//               size={24}
//               color="#aaa"
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Sign In Button */}
//         <TouchableOpacity style={styles.signInButton}>
//           <Text style={styles.signInButtonText}>Sign In</Text>
//         </TouchableOpacity>

//         {/* Google Sign In Button */}
//         <TouchableOpacity style={styles.googleButton}>
//           <Ionicons name="logo-google" size={20} color="#DB4437" style={styles.googleIcon} />
//           <Text style={styles.googleButtonText}>Sign In with Google</Text>
//         </TouchableOpacity>

//         {/* Forgot Password */}
//         <TouchableOpacity>
//           <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//         </TouchableOpacity>

//         {/* Sign Up Link */}
//         <TouchableOpacity>
//           <Text style={styles.signUpText}>
//             Don’t have an account? <Text style={styles.signUpLink}>Sign Up</Text>
//           </Text>
//         </TouchableOpacity>
//       </View>
//     {/* </LinearGradient> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // resizeMode: 'cover',
//     justifyContent: 'center',
//     alignItems: 'center',
//     // backgroundColor:"#0099ff"
//     // backgroundColor:"#abb2b9"
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     // color: '#fff',
//     color:"#0099ff",
//     marginBottom: 20,
//     textShadowColor: 'rgba(0, 0, 0, 0.8)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 3,
//   },
//   formContainer: {
//     width: '90%',
//     height:450,
//     backgroundColor: '#5499c7',
//     borderTopRightRadius: 20,
//     borderTopLeftRadius:20,
//     padding: 20,
//     alignItems: 'center',
//     borderBottomLeftRadius:80,
//     borderBottomRightRadius:80
    
//   },
//   input: {
//     width: '100%',
//     backgroundColor: '#f9f9f9',
//     borderRadius: 8,
//     padding: 15,
//     marginBottom: 15,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   passwordContainer: {
//     width: '100%',
//     position: 'relative',
//   },
//   eyeIcon: {
//     position: 'absolute',
//     right: 15,
//     top: 15,
//   },
//   signInButton: {
//     width: '100%',
//     backgroundColor: '#0099ff',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   signInButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   googleButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 15,
//     borderRadius: 8,
//     width: '100%',
//     marginBottom: 15,
//   },
//   googleIcon: {
//     marginRight: 10,
//   },
//   googleButtonText: {
//     fontSize: 16,
//     color: '#444',
//   },
//   forgotPasswordText: {
//     fontSize: 16,
//     color: '#2e4053',
//     marginBottom: 15,
//   },
//   signUpText: {
//     fontSize: 16,
//     color: '#444',
//   },
//   signUpLink: {
//     color: '#2e4053',
//     fontWeight: 'bold',
//   },
// });

// export default SignInScreen;



// user profiling

// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
// import { Picker } from '@react-native-picker/picker';

// const UserProfileScreen = () => {
//   const [gender, setGender] = useState('');
//   const [age, setAge] = useState('');
//   const [weight, setWeight] = useState('');
//   const [height, setHeight] = useState('');
//   const [healthGoal, setHealthGoal] = useState('');
//   const [disease, setDisease] = useState('');
//   const [disability, setDisability] = useState('');
//   const [weightUnit, setWeightUnit] = useState('kg');
//   const [heightUnit, setHeightUnit] = useState('cm');

//   const handleNext = () => {
//     console.log({ gender, age, weight, height, weightUnit, heightUnit, healthGoal, disease, disability });
//     // Add navigation or API integration logic here
//   };

//   return (
//     <ImageBackground 
//       source={{uri:"https://img.freepik.com/premium-photo/silhouette-fitness-focused-man-running-early-morning-light-vertical-mobile-wallpaper_896558-14504.jpg?w=360"}} 
//       style={styles.backgroundImage}
//     >
//       <ScrollView contentContainerStyle={styles.container}>
//         <View style={styles.formContainer}>
//           <Text style={styles.title}>HEALTH Profiling</Text>
//           <Text style={styles.subtitle}>
//             Customize your health journey by selecting your details for personalized fitness guidance.
//           </Text>

//           {/* Gender Selection */}
//           <Text style={styles.label}>Gender</Text>
//           <Picker
//             selectedValue={gender}
//             onValueChange={(itemValue) => setGender(itemValue)}
//             style={styles.picker}
//           >
//             <Picker.Item label="Select Gender" value="" />
//             <Picker.Item label="Male" value="Male" />
//             <Picker.Item label="Female" value="Female" />
//             <Picker.Item label="Other" value="Other" />
//           </Picker>

//           {/* Age Input */}
//           <Text style={styles.label}>Age</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter your age"
//             keyboardType="number-pad"
//             value={age}
//             onChangeText={(text) => setAge(text)}
//           />

//           {/* Weight Input */}
//           <Text style={styles.label}>Weight</Text>
//           <View style={styles.rowContainer}>
//             <TextInput
//               style={[styles.input, styles.flexInput]}
//               placeholder={`Enter your weight (${weightUnit})`}
//               keyboardType="number-pad"
//               value={weight}
//               onChangeText={(text) => setWeight(text)}
//             />
//             <Picker
//               selectedValue={weightUnit}
//               onValueChange={(itemValue) => setWeightUnit(itemValue)}
//               style={[styles.picker, styles.flexPicker]}
//             >
//               <Picker.Item label="kg" value="kg" />
//               <Picker.Item label="lb" value="lb" />
//             </Picker>
//           </View>

//           {/* Height Input */}
//           <Text style={styles.label}>Height</Text>
//           <View style={styles.rowContainer}>
//             <TextInput
//               style={[styles.input, styles.flexInput]}
//               placeholder={`Enter your height (${heightUnit})`}
//               keyboardType="number-pad"
//               value={height}
//               onChangeText={(text) => setHeight(text)}
//             />
//             <Picker
//               selectedValue={heightUnit}
//               onValueChange={(itemValue) => setHeightUnit(itemValue)}
//               style={[styles.picker, styles.flexPicker]}
//             >
//               <Picker.Item label="cm" value="cm" />
//               <Picker.Item label="ft/in" value="ft/in" />
//             </Picker>
//           </View>

//           {/* Health Goal Selection */}
//           <Text style={styles.label}>Health Goal</Text>
//           <Picker
//             selectedValue={healthGoal}
//             onValueChange={(itemValue) => setHealthGoal(itemValue)}
//             style={styles.picker}
//           >
//             <Picker.Item label="Select Goal" value="" />
//             <Picker.Item label="Lose Weight" value="Lose Weight" />
//             <Picker.Item label="Gain Muscle" value="Gain Muscle" />
//             <Picker.Item label="Improve Fitness" value="Improve Fitness" />
//             <Picker.Item label="Stay Healthy" value="Stay Healthy" />
//           </Picker>

//           {/* Disease Input */}
//           <Text style={styles.label}>Diseases</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter any diseases"
//             value={disease}
//             onChangeText={(text) => setDisease(text)}
//           />

//           {/* Disability Input */}
//           <Text style={styles.label}>Disabilities</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter any disabilities"
//             value={disability}
//             onChangeText={(text) => setDisability(text)}
//           />

//           {/* Next Button */}
//           <TouchableOpacity style={styles.button} onPress={handleNext}>
//             <Text style={styles.buttonText}>Next</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   formContainer: {
//     backgroundColor: 'rgba(255, 255, 255, 0.6)',
//     padding: 20,
//     borderRadius: 10,
//     marginTop: 100,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 10,
//     color: '#2e4053',
//   },
//   subtitle: {
//     fontSize: 14,
//     // textAlign: 'center',
//     marginBottom: 20,
//     color: '#333',
//   },
//   label: {
//     fontSize: 14,
//     marginVertical: 5,
//     color: '#555',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     padding: 10,
//     marginBottom: 10,
//     backgroundColor: '#fff',
//     fontSize:12,
//     height:70,
//   },
//   picker: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     marginBottom: 10,
//     backgroundColor: '#fff',
    
    
//   },
//   rowContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   flexInput: {
//     flex: 2,
    
//   },
//   flexPicker: {
//     flex: 1,
//     marginLeft: 10
    

    
//   },
//   button: {
//     backgroundColor: '#2e4053',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default UserProfileScreen;



// signup modified
// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Animated,
//   ImageBackground,
//   ScrollView,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import Svg, { Path } from 'react-native-svg'; // Import react-native-svg

// const RegistrationScreen = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

//   // Animation setup for the dumbbell icon
//   const rotation = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.loop(
//       Animated.timing(rotation, {
//         toValue: 1,
//         duration: 2000,
//         useNativeDriver: true,
//       })
//     ).start();
//   }, [rotation]);

//   const rotateInterpolate = rotation.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });

//   return (
//     <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//       <View style={styles.container}>
//         {/* SVG Wave */}
//         {/* <View style={styles.waveContainer}>
//           <Svg height="100" width="100%" viewBox="0 0 1440 320">
//             <Path
//               fill="#0099ff"
//               d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,165.3C672,149,768,107,864,112C960,117,1056,171,1152,202.7C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//             />
//           </Svg>
//         </View> */}

//         {/* Animated Dumbbell Icon */}
//         <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
//           <MaterialCommunityIcons name="dumbbell" size={64} color="#aed6f1" style={styles.dumbbellIcon} />
//         </Animated.View>

//         {/* Header Section */}
//         <Text style={styles.header}>Join the Fitness Journey</Text>

//         {/* Form Section */}
//         <View style={styles.formContainer}>
//           <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#aaa" />
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             placeholderTextColor="#aaa"
//             keyboardType="email-address"
//           />
//           <View style={styles.passwordContainer}>
//             <TextInput
//               style={styles.input}
//               placeholder="Password"
//               placeholderTextColor="#aaa"
//               secureTextEntry={!passwordVisible}
//             />
//             <TouchableOpacity
//               onPress={() => setPasswordVisible(!passwordVisible)}
//               style={styles.eyeIcon}
//             >
//               <Ionicons name={passwordVisible ? 'eye' : 'eye-off'} size={24} color="#aaa" />
//             </TouchableOpacity>
//           </View>
//           <View style={styles.passwordContainer}>
//             <TextInput
//               style={styles.input}
//               placeholder="Confirm Password"
//               placeholderTextColor="#aaa"
//               secureTextEntry={!confirmPasswordVisible}
//             />
//             <TouchableOpacity
//               onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
//               style={styles.eyeIcon}
//             >
//               <Ionicons name={confirmPasswordVisible ? 'eye' : 'eye-off'} size={24} color="#aaa" />
//             </TouchableOpacity>
//           </View>
//           <TouchableOpacity style={styles.signupButton}>
//             <Text style={styles.signupButtonText}>Sign Up</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.googleButton}>
//             <Ionicons name="logo-google" size={20} color="#DB4437" style={styles.googleIcon} />
//             <Text style={styles.googleButtonText}>Sign Up with Google</Text>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Text style={styles.signInText}>
//               Already have an account? <Text style={styles.signInLink}>Sign In</Text>
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },

//   dumbbellIcon: {
//     marginVertical: 20,
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#0099ff',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   formContainer: {
//     width: '90%',
//     backgroundColor: '#aed6f1',
//     borderRadius: 10,
//     padding: 20,
//     alignItems: 'center',
//     alignSelf: 'center',
//     marginTop: 10,
//   },
//   input: {
//     width: '100%',
//     backgroundColor: '#f9f9f9',
//     borderRadius: 8,
//     padding: 15,
//     marginBottom: 15,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   passwordContainer: {
//     width: '100%',
//     position: 'relative',
//   },
//   eyeIcon: {
//     position: 'absolute',
//     right: 15,
//     top: 15,
//   },
//   signupButton: {
//     width: '100%',
//     backgroundColor: '#0099ff',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   signupButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   googleButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 15,
//     borderRadius: 8,
//     width: '100%',
//     marginBottom: 15,
//   },
//   googleIcon: {
//     marginRight: 10,
//   },
//   googleButtonText: {
//     fontSize: 16,
//     color: '#444',
//   },
//   signInText: {
//     fontSize: 16,
//     color: '#444',
//   },
//   signInLink: {
//     color: '#2e4053',
//     fontWeight: 'bold',
//   },
// });

// export default RegistrationScreen;






// import React from 'react';
// import { LogBox } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SplashScreen from './screens/SplashScreen';
// import LoginScreen from './screens/LoginScreen';
// import SignUpScreen from './screens/SignUpScreen';
// import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
// import AdminDashboardScreen from './screens/AdminDashboardScreen';
// import UserDashboard from './screens/UserDashboard';
// import DetailsScreen from './screens/DetailsScreen';
// // import ManageOrderListScreen from './screens/ManageOrderListScreen';
// import ManageOrdersListScreen from './screens/ManageOrderListScreen';
// import ManageProductsScreen from './screens/ManageProductsScreen';
// import ManageVideosScreen from './screens/ManageVideosScreen';
// import AddProductScreen from './screens/AddProductScreen';
// import LiveChat from './screens/LiveChat';
// import WorkoutVideos from './screens/WorkoutVideos';
// import ShopProducts from './screens/ShopProducts';
// import ProductDetail from './screens/ProductDetail';
// import WorkoutAnimations from "./screens/WorkoutAnimations";
// import UpdateProductScreen from "./screens/UpdateProductScreen";
// import Cart from './screens/Cart';
// import Profile from './screens/Profile';
// import VerifyEmailScreen from './screens/VerifyEmailScreen';
// import WorkoutPlanResponse from './screens/WorkoutPlanResponse';
// import WorkoutPlanScreen from './screens/WorkoutPlanScreen';
// import WorkoutDetail from './screens/WorkoutDetail';
// import OrderDetailScreen from './screens/OrderDetailScreen';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import ManageUsers from './screens/ManageUsers';
// import DietPlanScreen from './screens/DietPlanScreen';
// import DietPlanResponse from './screens/DietPlanResponse';
// // import OTPScreen from './screens/OTPScreen';


// const Stack = createNativeStackNavigator();
// LogBox.ignoreAllLogs();

// export default function App() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Splash">
//         <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }} />
//         <Stack.Screen name="SignUp" component={SignUpScreen}  options={{ headerShown: false }} />
//         <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{headerShown:false}}/>
//         <Stack.Screen name="AdminDashboard" component={AdminDashboardScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="UserDashboard" component={UserDashboard} options={{ headerShown: false }} />
//         <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{ headerShown: true }} />
//         <Stack.Screen name="ManageProducts" component={ManageProductsScreen} />
//         <Stack.Screen name="ManageVideos" component={ManageVideosScreen} />
//         <Stack.Screen name="ManageUsers" component={ManageUsers} />
//         <Stack.Screen name="ManageOrderList" component={ManageOrdersListScreen} options={{headerShown:false}} />
//         <Stack.Screen name="OrderDetailScreen" component={OrderDetailScreen} options={{headerShown:false}} />
//         <Stack.Screen name="AddProductScreen" component={AddProductScreen}/>
//         <Stack.Screen name="LiveChat" component={LiveChat} options={{headerShown:false}}/>
//         <Stack.Screen name="WorkoutVideos" component={WorkoutVideos}/>
//         <Stack.Screen name="ShopProducts" component={ShopProducts}/>
//         <Stack.Screen name="ProductDetail" component={ProductDetail} options={{headerShown:false}}/>
//         <Stack.Screen name="WorkoutAnimations" component={WorkoutAnimations}/>
//         <Stack.Screen name="UpdateProductScreen" component={UpdateProductScreen}/>
//         <Stack.Screen name="Cart" component={Cart} options={{headerShown:false}}/>
//         <Stack.Screen name="Profile" component={Profile}/>
//         <Stack.Screen name="VerifyEmailScreen" component={VerifyEmailScreen}/>
//         <Stack.Screen name="WorkoutPlanScreen" component={WorkoutPlanScreen} options={{headerShown:false}}/>
//         <Stack.Screen name="WorkoutPlanResponse" component={WorkoutPlanResponse}/>
//         <Stack.Screen name="WorkoutDetail" component={WorkoutDetail}/>
//         <Stack.Screen name="DietPlanScreen" component={DietPlanScreen} options={{headerShown:false}}/>
//         <Stack.Screen name="DietPlanResponse" component={DietPlanResponse} options={{headerShown:false}}/>


//       </Stack.Navigator>
//     </NavigationContainer>
//     </GestureHandlerRootView>
//   );
// }







import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import AdminDashboardScreen from './screens/AdminDashboardScreen';
import UserDashboard from './screens/UserDashboard';
import DetailsScreen from './screens/DetailsScreen';
import ManageOrdersListScreen from './screens/ManageOrderListScreen';
import ManageProductsScreen from './screens/ManageProductsScreen';
import ManageVideosScreen from './screens/ManageVideosScreen';
import AddProductScreen from './screens/AddProductScreen';
import LiveChat from './screens/LiveChat';
import WorkoutVideos from './screens/WorkoutVideos';
import ShopProducts from './screens/ShopProducts';
import ProductDetail from './screens/ProductDetail';
import WorkoutAnimations from './screens/WorkoutAnimations';
import UpdateProductScreen from './screens/UpdateProductScreen';
import Cart from './screens/Cart';
import Profile from './screens/Profile';
import VerifyEmailScreen from './screens/VerifyEmailScreen';
import WorkoutPlanResponse from './screens/WorkoutPlanResponse';
import WorkoutPlanScreen from './screens/WorkoutPlanScreen';
import WorkoutDetail from './screens/WorkoutDetail';
import OrderDetailScreen from './screens/OrderDetailScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ManageUsers from './screens/ManageUsers';
import DietPlanScreen from './screens/DietPlanScreen';
import DietPlanResponse from './screens/DietPlanResponse';
import ExerciseRecords from './screens/ExerciseRecords';
// import NotificationSettings from './screens/NotificationSettings';
import PlaceOrder from './screens/PlaceOrder';
import MyOrders from './screens/MyOrders';
import WorkoutDetection from './screens/WorkoutDetection';

import NotificationSettings from './screens/NotificationSettings';

const Stack = createNativeStackNavigator();

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="WorkoutDetection" component={WorkoutDetection} options={{ headerShown: false }}  />
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AdminDashboard" component={AdminDashboardScreen} options={{ headerShown: false }} />
          <Stack.Screen name="UserDashboard" component={UserDashboard} options={{ headerShown: false }} />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ManageProducts" component={ManageProductsScreen} />
          <Stack.Screen name="ManageVideos" component={ManageVideosScreen} />
          <Stack.Screen name="ManageUsers" component={ManageUsers} />
          <Stack.Screen name="ManageOrderList" component={ManageOrdersListScreen} options={{ headerShown: false }} />
          <Stack.Screen name="OrderDetailScreen" component={OrderDetailScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AddProductScreen" component={AddProductScreen} />
          <Stack.Screen name="LiveChat" component={LiveChat} options={{ headerShown: false }} />
          <Stack.Screen name="WorkoutVideos" component={WorkoutVideos} options={{headerShown:false}} />
          <Stack.Screen name="ShopProducts" component={ShopProducts} options={{headerShown:false}} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false }} />
          <Stack.Screen name="WorkoutAnimations" component={WorkoutAnimations} />
          <Stack.Screen name="UpdateProductScreen" component={UpdateProductScreen} />
          <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={Profile}  options={{headerShown:false}}/>
          <Stack.Screen name="VerifyEmailScreen" component={VerifyEmailScreen} />
          <Stack.Screen name="WorkoutPlanScreen" component={WorkoutPlanScreen} options={{ headerShown: false }} />
          <Stack.Screen name="WorkoutPlanResponse" component={WorkoutPlanResponse} options={{headerShown:false}} />
          <Stack.Screen name="WorkoutDetail" component={WorkoutDetail}  />
          <Stack.Screen name="DietPlanScreen" component={DietPlanScreen} options={{ headerShown: false }} />
          <Stack.Screen name="DietPlanResponse" component={DietPlanResponse} options={{ headerShown: false }} />
          <Stack.Screen name="ExerciseRecords" component={ExerciseRecords} options={{ headerShown: false }} />
           {/* <Stack.Screen name="NotificationSettings" component={NotificationSettings} options={{ headerShown: false }} /> */}
           <Stack.Screen name="PlaceOrder" component={PlaceOrder} options={{ headerShown: false }} />
           {/* <Stack.Screen name="MyOrders" component={MyOrders} options={{ headerShown: false }} /> */}
           <Stack.Screen name="MyOrders" component={MyOrders} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}





