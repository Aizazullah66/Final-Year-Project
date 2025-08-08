// import { StyleSheet,Text } from 'react-native';
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../screens/home';
// import Explore from '../screens/explore';
// import Profile from '../screens/profile';
// import Addpost from '../screens/addpost';
// import Ionicons from '@expo/vector-icons/Ionicons';


// const Tab = createBottomTabNavigator();

// const Tabnavigation = () => {
//   return (
//     <Tab.Navigator screenOptions={{headerShown:false,tabBarActiveTintColor:"black"}}>
//       <Tab.Screen name="Home" component={Home} 
//       options={{
//         tabBarLabel:({color})=>(
//         <Text style={{fontSize:10, color:color}}>Home</Text>
//       ),
//       tabBarIcon:({color,size})=>(
//         <Ionicons name="home" size={size} color={color} />
//       )
//     }
      
//       } />
//       <Tab.Screen name="Explore" component={Explore}
//             options={{
//                 tabBarLabel:({color})=>(
//                 <Text style={{fontSize:10, color:color}}>Explore</Text>
//               ),
//               tabBarIcon:({color,size})=>(
//                 <Ionicons name="search" size={size} color={color} />
//               )
//             }
              
//               }
//       />
//       <Tab.Screen name="Add Post" component={Addpost}
//                   options={{
//                     tabBarLabel:({color})=>(
//                     <Text style={{fontSize:10, color:color}}>Add Post</Text>
//                   ),
//                   tabBarIcon:({color,size})=>(
//                     <Ionicons name="camera" size={size} color={color} />
//                   )
//                 }
                  
//                   }
//       />
//       <Tab.Screen name="Profile" component={Profile}
//                   options={{
//                     tabBarLabel:({color})=>(
//                     <Text style={{fontSize:10, color:color}}>Profile</Text>
//                   ),
//                   tabBarIcon:({color,size})=>(
//                     <Ionicons name="person-circle" size={size} color={color} />
//                   )
//                 }
                  
//                   }
//       />
//     </Tab.Navigator>
//   );
// };

// export default Tabnavigation;

// const styles = StyleSheet.create({});




import React from 'react';
import { createNativeStackNavigator } from  "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import Home from '../screens/home';
import Explore from '../screens/explore';
import Profile from '../screens/profile';
import AddPost from '../screens/addpost'; 
import Ionicons from '@expo/vector-icons/Ionicons';
import Homescreenstack from './Homescreenstack';
// import { auth } from "../../firebase"; // Import firebase auth

 
const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const AuthNavigator = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="SignIn" component={SignInScreen} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
  </AuthStack.Navigator>
);

export const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: 'black' }}>
    <Tab.Screen
      name="Home"
      component={Homescreenstack}
      options={{
        // tabBarLabel: ({ color }) => <Text style={{ fontSize: 10, color: color }}>Home</Text>,
        tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="Explore"
      component={Explore}
      options={{
        // tabBarLabel: ({ color }) => <Text style={{ fontSize: 10, color: color }}>Explore</Text>,
        tabBarIcon: ({ color, size }) => <Ionicons name="search" size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="Add Post"
      component={AddPost}
      options={{
        // tabBarLabel: ({ color }) => <Text style={{ fontSize: 10, color: color }}>Add Post</Text>,
        tabBarIcon: ({ color, size }) => <Ionicons name="camera" size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        // tabBarLabel: ({ color }) => <Text style={{ fontSize: 10, color: color }}>Profile</Text>,
        tabBarIcon: ({ color, size }) => <Ionicons name="person-circle" size={size} color={color} />,
      }}
    />
  </Tab.Navigator>
);

// const MainNavigator = () => (
//   <AuthStack.Navigator screenOptions={{ headerShown: false }}>
//     <AuthStack.Screen name="Auth" component={AuthNavigator} />
//     <AuthStack.Screen name="Main" component={TabNavigator} />
//   </AuthStack.Navigator>
// );



