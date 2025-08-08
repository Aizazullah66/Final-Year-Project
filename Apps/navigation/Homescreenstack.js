import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from  "@react-navigation/native-stack";
import Home from '../screens/home';
import Homeitems from '../screens/Homeitems';


const Homescreenstack = () => {
  const stack=createNativeStackNavigator();
  return(
    <stack.Navigator >
      <stack.Screen name="homenav" component={Home} options={{headerShown:false}} />
      <stack.Screen name="homeitems" component={Homeitems} 
      options=
      {({ route }) => ({ title: route.params.category,
      headerStyle:{backgroundColor:"#5dade2"},
      headerTitleAlign:"center" 
      })}/>
    </stack.Navigator>
  )
  

}

export default Homescreenstack

const styles = StyleSheet.create({})