// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
// import {signInWithEmailAndPassword } from "firebase/auth";
// import {auth} from "../firebaseConfig"

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
  
//     signInWithEmailAndPassword(auth, email, password)
//       .then(() => {
//         console.log('User signed in');
//       })
//       .catch((error) => alert(error.message));
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <Button title="Login" onPress={handleLogin} />
//       <Text style={styles.link} onPress={() => navigation.navigate('ForgotPassword')}>
//         Forgot Password?
//       </Text>
//       <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
//         Don't have an account? Sign Up
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   input: {
//     borderBottomWidth: 1,
//     marginBottom: 20,
//   },
//   link: {
//     color: 'blue',
//     marginTop: 10,
//     textAlign: 'center',
//   },
// });


// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// // import { auth } from '../firebaseConfig';
// import { auth, db } from '../firebaseConfig';
// import { collection, getDocs, query, where } from 'firebase/firestore';

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     signInWithEmailAndPassword(auth, email, password)
//       .then(async () => {
//         console.log('User signed in');
        
//         // Check if the signed-in user is an admin by querying Firestore
//         const adminRef = collection(db, 'foreverfitness');
//         const q = query(adminRef, where('admin_credentials', '==', email));
//         const querySnapshot = await getDocs(q);

//         if (!querySnapshot.empty) {
//           // If admin credentials match, navigate to Admin Dashboard
//           navigation.navigate('AdminDashboard');
//         } else {
//           // If not an admin, navigate to User Dashboard
//           navigation.navigate('UserDashboard');
//         }
//       })
//       .catch((error) => {
//         console.log(error.message);
//         Alert.alert('Error', error.message);
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <Button title="Login" onPress={handleLogin} />
//       <Text style={styles.link} onPress={() => navigation.navigate('ForgotPassword')}>
//         Forgot Password?
//       </Text>
//       <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
//         Don't have an account? Sign Up
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   input: {
//     borderBottomWidth: 1,
//     marginBottom: 20,
//   },
//   link: {
//     color: 'blue',
//     marginTop: 10,
//     textAlign: 'center',
//   },
// });



// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth, db } from '../firebaseConfig';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { LinearGradient } from 'expo-linear-gradient';

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     signInWithEmailAndPassword(auth, email, password)
//       .then(async () => {
//         console.log('User signed in');
        
//         // Check if the signed-in user is an admin by querying Firestore
//         const adminRef = collection(db, 'foreverfitness');
//         const q = query(adminRef, where('admin_credentials', '==', email));
//         const querySnapshot = await getDocs(q);

//         if (!querySnapshot.empty) {
//           // If admin credentials match, navigate to Admin Dashboard
//           navigation.navigate('AdminDashboard');
//         } else {
//           // If not an admin, navigate to User Dashboard
//           navigation.navigate('UserDashboard');
//         }
//       })
//       .catch((error) => {
//         console.log(error.message);
//         Alert.alert('Error', error.message);
//       });
//   };

//   return (
//     <LinearGradient colors={['#1D2671', '#C33764']} style={styles.container}>
//       <View>
//         <Text style={{color:"white",fontWeight:"bold",fontSize:40,marginTop:80}}>Log In</Text>
//       </View>
//       <View style={styles.formContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />
//         {/* <Button title="Login" onPress={handleLogin} color="blue" /> */}
//         <TouchableOpacity style={styles.button} onPress={handleLogin}>
//           <Text style={{color:"white"}}>Log in</Text>
//         </TouchableOpacity>
        
//         <Text style={styles.link} onPress={() => navigation.navigate('ForgotPassword')}>
//           Forgot Password?
//         </Text>
//         <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
//           Don't have an account? Sign Up
//         </Text>
//       </View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     alignItems: 'center',
//   },
//   formContainer: {
//     width: '90%',
//     maxWidth: 400,
//     padding: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.3)',
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop:70,
//     height:400
//   },
//   input: {
//     width: '100%',
//     borderBottomWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     backgroundColor: 'rgba(255, 255, 255, 0.02)',
//     borderRadius: 5,
//     color: '#fff',
//   },
//   link: {
//     color: 'blue',
//     marginTop: 10,
//     textAlign: 'center',
//   },
//   button:{
//     backgroundColor:"blue",
//     width:200,
//     height:30,
//     alignItems:"center",
//     justifyContent:"center",
//     borderRadius:10
//   }
// });




// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, StyleSheet, Text, Alert,Image } from 'react-native';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth, db } from '../firebaseConfig';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { LinearGradient } from 'expo-linear-gradient';

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState('myyogapso@gmail.com'); // Pre-filled email from the image
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     signInWithEmailAndPassword(auth, email, password)
//       .then(async () => {
//         console.log('User signed in');
//         const adminRef = collection(db, 'foreverfitness');
//         const q = query(adminRef, where('admin_credentials', '==', email));
//         const querySnapshot = await getDocs(q);

//         if (!querySnapshot.empty) {
//           navigation.navigate('AdminDashboard');
//         } else {
//           navigation.navigate('UserDashboard');
//         }
//       })
//       .catch((error) => {
//         console.log(error.message);
//         Alert.alert('Error', error.message);
//       });
//   };

//   return (
//     <LinearGradient 
//       colors={['#1A1A2E', '#16213E']} // Dark blue/purple gradient inspired by the image
//       style={styles.container}
//     >
//       <View style={styles.header}>
//         <Text style={styles.title}>Login to stay fit</Text>
//         <Text style={styles.subtitle}>Save money with our membership cards</Text>
//       </View>

//       <View style={styles.formContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           placeholderTextColor="#A0A0A0"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           autoCapitalize="none"
//           autoFocus
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           placeholderTextColor="#A0A0A0"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           autoCapitalize="none"
//         />
        
//         <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//           <Text style={styles.loginButtonText}>sign in <Text style={styles.arrow}>→</Text></Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//           style={styles.forgotPassword}
//           onPress={() => navigation.navigate('ForgotPassword')}
//         >
//           <Text style={styles.linkText}>Forgot password?</Text>
//         </TouchableOpacity>

//         <View style={styles.signupContainer}>
//           <Text style={styles.signupText}>Don't have an account? </Text>
//           <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
//             <Text style={styles.signupLink}>Sign up now</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#1A1A2E', // Dark background from the image
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   logoText: {
//     fontSize: 60, // Placeholder for shoe logo size
//     color: '#FF5E9B', // Pink/purple color for the shoe logo
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     marginTop: 10,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#D1D1D1',
//     marginTop: 5,
//   },
//   formContainer: {
//     width: '85%',
//     maxWidth: 400,
//     padding: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.05)', // Slightly transparent background
//     borderRadius: 12,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 8,
//     paddingHorizontal: 16,
//     marginBottom: 12,
//     color: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#4A4A6A', // Darker border for contrast
//     fontSize: 16,
//   },
//   loginButton: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#FF5E9B', // Pink button from the image
//     borderRadius: 25, // Rounded button
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 16,
//   },
//   loginButtonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   arrow: {
//     fontSize: 18,
//     color: '#FFFFFF',
//   },
//   forgotPassword: {
//     marginTop: 12,
//   },
//   linkText: {
//     color: '#FF5E9B', // Pink color for the link
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   socialIcons: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 16,
//     marginBottom: 16,
//   },
//   socialIcon: {
//     fontSize: 24,
//     color: '#FFFFFF',
//     marginHorizontal: 8,
//   },
//   signupContainer: {
//     flexDirection: 'row',
//     marginTop: 20,
//   },
//   signupText: {
//     color: '#D1D1D1',
//     fontSize: 14,
//   },
//   signupLink: {
//     color: '#FF5E9B', // Pink color for the link
//     fontSize: 14,
//     fontWeight: '600',
//   },

// });



// import React, { useState, useEffect } from 'react';
// import { View, TextInput, TouchableOpacity, StyleSheet, Text, Alert, Image, Animated, ScrollView } from 'react-native';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth, db } from '../firebaseConfig';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { LinearGradient } from 'expo-linear-gradient';

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState('myyogapso@gmail.com'); // Pre-filled email from the image
//   const [password, setPassword] = useState('');
//   const rotateValue = new Animated.Value(0); // For rotation animation

//   // Start the rotation animation on component mount
//   useEffect(() => {
//     Animated.loop(
//       Animated.timing(rotateValue, {
//         toValue: 1,
//         duration: 2000, // Duration of one full rotation in milliseconds (2 seconds)
//         useNativeDriver: true, // Improves performance
//       })
//     ).start();
//   }, [rotateValue]);

//   // Interpolate the rotation value (0 to 1) to degrees (0 to 360)
//   const rotateInterpolate = rotateValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });

//   const handleLogin = () => {
//     signInWithEmailAndPassword(auth, email, password)
//       .then(async () => {
//         console.log('User signed in');
//         const adminRef = collection(db, 'foreverfitness');
//         const q = query(adminRef, where('admin_credentials', '==', email));
//         const querySnapshot = await getDocs(q);

//         if (!querySnapshot.empty) {
//           navigation.navigate('AdminDashboard');
//         } else {
//           navigation.navigate('UserDashboard');
//         }
//       })
//       .catch((error) => {
//         console.log(error.message);
//         Alert.alert('Error', error.message);
//       });
//   };

//   return (
//     <LinearGradient 
//       colors={['#1A1A2E', '#16213E']} // Dark blue/purple gradient inspired by the image
//       style={styles.container}
//     >
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         {/* Dumbbell Animation at the top, no absolute positioning */}
//         <View style={styles.dumbbellContainer}>
//           <Animated.Image 
//             source={require('../assets/dumbell.png')} // Replace with your dumbbell image path
//             style={[styles.dumbbell, { transform: [{ rotate: rotateInterpolate }] }]}
//           />
//         </View>

//         {/* Main content below dumbbell, no overlap */}
//         <View style={styles.contentContainer}>
//           <View style={styles.header}>
//             <Text style={styles.title}>Login to stay fit</Text>
//             <Text style={styles.subtitle}>Save money with our membership cards</Text>
//           </View>

//           <View style={styles.formContainer}>
//             <TextInput
//               style={styles.input}
//               placeholder="Email"
//               placeholderTextColor="#A0A0A0"
//               value={email}
//               onChangeText={setEmail}
//               keyboardType="email-address"
//               autoCapitalize="none"
//               autoFocus
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Password"
//               placeholderTextColor="#A0A0A0"
//               value={password}
//               onChangeText={setPassword}
//               secureTextEntry
//               autoCapitalize="none"
//             />
            
//             <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//               <Text style={styles.loginButtonText}>sign in <Text style={styles.arrow}>→</Text></Text>
//             </TouchableOpacity>

//             <TouchableOpacity 
//               style={styles.forgotPassword}
//               onPress={() => navigation.navigate('ForgotPassword')}
//             >
//               <Text style={styles.linkText}>Forgot password?</Text>
//             </TouchableOpacity>

//             <View style={styles.signupContainer}>
//               <Text style={styles.signupText}>Don't have an account? </Text>
//               <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
//                 <Text style={styles.signupLink}>Sign up now</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1A1A2E', // Dark background from the image
//   },
//   scrollContent: {
//     flexGrow: 1, // Allows the ScrollView content to grow and center
//     alignItems: 'center',
//     paddingTop: 120, // Space for dumbbell at the top
//   },
//   dumbbellContainer: {
//     alignItems: 'center',
//     marginBottom: 20, // Space between dumbbell and header
//   },
//   dumbbell: {
//     width: 150, // Adjust size as needed
//     height: 150, // Adjust size as needed
//     resizeMode: 'contain',
//   },
//   contentContainer: {
//     width: '85%',
//     maxWidth: 400,
//     alignItems: 'center',
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     marginTop: 10,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#D1D1D1',
//     marginTop: 5,
//   },
//   formContainer: {
//     width: '100%',
//     padding: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.05)', // Slightly transparent background
//     borderRadius: 12,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 8,
//     paddingHorizontal: 16,
//     marginBottom: 12,
//     color: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#4A4A6A', // Darker border for contrast
//     fontSize: 16,
//   },
//   loginButton: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#FF5E9B', // Pink button from the image
//     borderRadius: 25, // Rounded button
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 16,
//   },
//   loginButtonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   arrow: {
//     fontSize: 18,
//     color: '#FFFFFF',
//   },
//   forgotPassword: {
//     marginTop: 12,
//   },
//   linkText: {
//     color: '#FF5E9B', // Pink color for the link
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   signupContainer: {
//     flexDirection: 'row',
//     marginTop: 20,
//   },
//   signupText: {
//     color: '#D1D1D1',
//     fontSize: 14,
//   },
//   signupLink: {
//     color: '#FF5E9B', // Pink color for the link
//     fontSize: 14,
//     fontWeight: '600',
//   },
// });


// import React, { useState, useEffect } from 'react';
// import { View, TextInput, TouchableOpacity, StyleSheet, Text, Alert, Image, Animated, ScrollView } from 'react-native';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth, db } from '../firebaseConfig';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { LinearGradient } from 'expo-linear-gradient';
// import Icon from 'react-native-vector-icons/MaterialIcons'; // Use MaterialIcons or another icon set (e.g., FontAwesome)

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState('myyogapso@gmail.com'); // Pre-filled email from the image
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
//   const rotateValue = new Animated.Value(0); // For rotation animation

//   // Start the rotation animation on component mount
//   useEffect(() => {
//     Animated.loop(
//       Animated.timing(rotateValue, {
//         toValue: 1,
//         duration: 2000, // Duration of one full rotation in milliseconds (2 seconds)
//         useNativeDriver: true, // Improves performance
//       })
//     ).start();
//   }, [rotateValue]);

//   // Interpolate the rotation value (0 to 1) to degrees (0 to 360)
//   const rotateInterpolate = rotateValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });

//   const handleLogin = () => {
//     signInWithEmailAndPassword(auth, email, password)
//       .then(async () => {
//         console.log('User signed in');
//         const adminRef = collection(db, 'foreverfitness');
//         const q = query(adminRef, where('admin_credentials', '==', email));
//         const querySnapshot = await getDocs(q);

//         if (!querySnapshot.empty) {
//           navigation.navigate('AdminDashboard');
//         } else {
//           navigation.navigate('UserDashboard');
//         }
//       })
//       .catch((error) => {
//         console.log(error.message);
//         Alert.alert('Error', error.message);
//       });
//   };

//   return (
//     <LinearGradient 
//       colors={['#1A1A2E', '#16213E']} // Dark blue/purple gradient inspired by the image
//       style={styles.container}
//     >
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         {/* Dumbbell Animation at the top, no absolute positioning */}
//         <View style={styles.dumbbellContainer}>
//           <Animated.Image 
//             source={require('../assets/dumbell.png')} // Replace with your dumbbell image path
//             style={[styles.dumbbell, { transform: [{ rotate: rotateInterpolate }] }]}
//           />
//         </View>

//         {/* Main content below dumbbell, no overlap */}
//         <View style={styles.contentContainer}>
//           <View style={styles.header}>
//             <Text style={styles.title}>Login to stay fit</Text>
//             <Text style={styles.subtitle}>Save money with our membership cards</Text>
//           </View>

//           <View style={styles.formContainer}>
//             {/* Email Input with Icon */}
//             <View style={styles.inputContainer}>
//               <Icon name="email" size={24} color="#A0A0A0" style={styles.inputIcon} />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Email"
//                 placeholderTextColor="#A0A0A0"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//                 autoFocus
//               />
//             </View>

//             {/* Password Input with Icon and Eye Toggle */}
//             <View style={styles.inputContainer}>
//               <Icon name="lock" size={24} color="#A0A0A0" style={styles.inputIcon} />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Password"
//                 placeholderTextColor="#A0A0A0"
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword
//                 autoCapitalize="none"
//               />
//               <TouchableOpacity 
//                 style={styles.eyeIcon} 
//                 onPress={() => setShowPassword(!showPassword)}
//               >
//                 <Icon 
//                   name={showPassword ? 'visibility-off' : 'visibility'} 
//                   size={24} 
//                   color="#A0A0A0" 
//                 />
//               </TouchableOpacity>
//             </View>
            
//             <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//               <Text style={styles.loginButtonText}>sign in <Text style={styles.arrow}>→</Text></Text>
//             </TouchableOpacity>

//             <TouchableOpacity 
//               style={styles.forgotPassword}
//               onPress={() => navigation.navigate('ForgotPassword')}
//             >
//               <Text style={styles.linkText}>Forgot password?</Text>
//             </TouchableOpacity>

//             <View style={styles.signupContainer}>
//               <Text style={styles.signupText}>Don't have an account? </Text>
//               <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
//                 <Text style={styles.signupLink}>Sign up now</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1A1A2E', // Dark background from the image
//   },
//   scrollContent: {
//     flexGrow: 1, // Allows the ScrollView content to grow and center
//     alignItems: 'center',
//     paddingTop: 120, // Space for dumbbell at the top
//   },
//   dumbbellContainer: {
//     alignItems: 'center',
//     marginBottom: 20, // Space between dumbbell and header
//   },
//   dumbbell: {
//     width: 150, // Adjust size as needed
//     height: 150, // Adjust size as needed
//     resizeMode: 'contain',
//   },
//   contentContainer: {
//     width: '95%',
//     maxWidth: 400,
//     alignItems: 'center',
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     marginTop: 10,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#D1D1D1',
//     marginTop: 5,
//   },
//   formContainer: {
//     width: '100%',
//     padding: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.05)', // Slightly transparent background
//     borderRadius: 12,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   inputContainer: {
//     width: '100%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#4A4A6A', // Darker border for contrast
//   },
//   inputIcon: {
//     paddingHorizontal: 12,
//   },
//   input: {
//     flex: 1,
//     height: 50,
//     color: '#FFFFFF',
//     fontSize: 16,
//   },
//   eyeIcon: {
//     paddingHorizontal: 12,
//   },
//   loginButton: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#FF5E9B', // Pink button from the image
//     borderRadius: 25, // Rounded button
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 16,
//   },
//   loginButtonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   arrow: {
//     fontSize: 18,
//     color: '#FFFFFF',
//   },
//   forgotPassword: {
//     marginTop: 12,
//   },
//   linkText: {
//     color: '#FF5E9B', // Pink color for the link
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   signupContainer: {
//     flexDirection: 'row',
//     marginTop: 20,
//   },
//   signupText: {
//     color: '#D1D1D1',
//     fontSize: 14,
//   },
//   signupLink: {
//     color: '#FF5E9B', // Pink color for the link
//     fontSize: 14,
//     fontWeight: '600',
//   },
// });


// import React, { useState, useEffect } from 'react';
// import { View, TextInput, TouchableOpacity, StyleSheet, Text, Alert, Image, Animated, ScrollView } from 'react-native';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth, db } from '../firebaseConfig';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { LinearGradient } from 'expo-linear-gradient';
// import Icon from 'react-native-vector-icons/MaterialIcons'; // Use MaterialIcons or another icon set (e.g., FontAwesome)

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState('muneshkumar2k19@gmail.com'); // Pre-filled email from the image
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
//   const [errors, setErrors] = useState({}); // State to store validation errors for each field
//   const rotateValue = new Animated.Value(0); // For rotation animation

//   // Start the rotation animation on component mount
//   useEffect(() => {
//     Animated.loop(
//       Animated.timing(rotateValue, {
//         toValue: 1,
//         duration: 2000, // Duration of one full rotation in milliseconds (2 seconds)
//         useNativeDriver: true, // Improves performance
//       })
//     ).start();
//   }, [rotateValue]);

//   // Interpolate the rotation value (0 to 1) to degrees (0 to 360)
//   const rotateInterpolate = rotateValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });

//   // Validation functions for each field
//   const validateEmail = (text) => {
//     if (!text.trim()) return 'Email is required';
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(text)) return 'Invalid email format';
//     return '';
//   };

//   const validatePassword = (text) => {
//     if (!text.trim()) return 'Password is required';
//     if (text.length < 6) return 'Password must be at least 6 characters long';
//     return '';
//   };

//   // Handle text changes and validate in real-time
//   const handleEmailChange = (text) => {
//     setEmail(text);
//     setErrors((prev) => ({ ...prev, email: validateEmail(text) }));
//   };

//   const handlePasswordChange = (text) => {
//     setPassword(text);
//     setErrors((prev) => ({ ...prev, password: validatePassword(text) }));
//   };

//   const handleLogin = () => {
//     // Final validation before Firebase call
//     const emailError = validateEmail(email);
//     const passwordError = validatePassword(password);

//     if (emailError || passwordError) {
//       setErrors({
//         email: emailError,
//         password: passwordError,
//       });
//       return;
//     }

//     signInWithEmailAndPassword(auth, email, password)
//       .then(async () => {
//         console.log('User signed in');
//         const adminRef = collection(db, 'foreverfitness');
//         const q = query(adminRef, where('admin_credentials', '==', email));
//         const querySnapshot = await getDocs(q);

//         if (!querySnapshot.empty) {
//           navigation.navigate('AdminDashboard');
//         } else {
//           navigation.navigate('UserDashboard');
//         }
//       })
//       .catch((error) => {
//         let errorMessage = 'An error occurred during login. Please try again.';
//         switch (error.code) {
//           case 'auth/invalid-email':
//             errorMessage = 'Invalid email format. Please enter a valid email.';
//             break;
//           case 'auth/user-not-found':
//             errorMessage = 'No user found with this email. Please sign up or check your email.';
//             break;
//           case 'auth/wrong-password':
//             errorMessage = 'Incorrect password. Please try again.';
//             break;
//           case 'auth/too-many-requests':
//             errorMessage = 'Too many attempts. Please try again later or reset your password.';
//             break;
//           default:
//             errorMessage = error.message;
//         }
//         Alert.alert('Error', errorMessage);
//       });
//   };

//   return (
//     <LinearGradient 
//       colors={['#1A1A2E', '#16213E']} // Dark blue/purple gradient inspired by the image
//       style={styles.container}
//     >
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         {/* Dumbbell Animation at the top, no absolute positioning */}
//         <View style={styles.dumbbellContainer}>
//           <Animated.Image 
//             source={require('../assets/dumbell.png')} // Replace with your dumbbell image path
//             style={[styles.dumbbell, { transform: [{ rotate: rotateInterpolate }] }]}
//           />
//         </View>

//         {/* Main content below dumbbell, no overlap */}
//         <View style={styles.contentContainer}>
//           <View style={styles.header}>
//             <Text style={styles.title}>Login to stay fit</Text>
//             <Text style={styles.subtitle}>Save money with our membership cards</Text>
//           </View>

//           <View style={styles.formContainer}>
//             {/* Email Input with Icon and Error */}
//             <View style={styles.inputWrapper}>
//               <View style={styles.inputContainer}>
//                 <Icon name="email" size={24} color="#A0A0A0" style={styles.inputIcon} />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Email"
//                   placeholderTextColor="#A0A0A0"
//                   value={email}
//                   onChangeText={handleEmailChange}
//                   keyboardType="email-address"
//                   autoCapitalize="none"
//                   autoFocus
//                 />
//               </View>
//               {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
//             </View>

//             {/* Password Input with Icon, Eye Toggle, and Error */}
//             <View style={styles.inputWrapper}>
//               <View style={styles.inputContainer}>
//                 <Icon name="lock" size={24} color="#A0A0A0" style={styles.inputIcon} />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Password"
//                   placeholderTextColor="#A0A0A0"
//                   value={password}
//                   onChangeText={handlePasswordChange}
//                   secureTextEntry={!showPassword} // Toggle secureTextEntry based on showPassword
//                   autoCapitalize="none"
//                 />
//                 <TouchableOpacity 
//                   style={styles.eyeIcon} 
//                   onPress={() => setShowPassword(!showPassword)}
//                 >
//                   <Icon 
//                     name={showPassword ? 'visibility-off' : 'visibility'} 
//                     size={24} 
//                     color="#A0A0A0" 
//                   />
//                 </TouchableOpacity>
//               </View>
//               {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
//             </View>
            
//             <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//               <Text style={styles.loginButtonText}>sign in <Text style={styles.arrow}>→</Text></Text>
//             </TouchableOpacity>

//             <TouchableOpacity 
//               style={styles.forgotPassword}
//               onPress={() => navigation.navigate('ForgotPassword')}
//             >
//               <Text style={styles.linkText}>Forgot password?</Text>
//             </TouchableOpacity>

//             <View style={styles.signupContainer}>
//               <Text style={styles.signupText}>Don't have an account? </Text>
//               <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
//                 <Text style={styles.signupLink}>Sign up now</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1A1A2E', // Dark background from the image
//   },
//   scrollContent: {
//     flexGrow: 1, // Allows the ScrollView content to grow and center
//     alignItems: 'center',
//     paddingTop: 120, // Space for dumbbell at the top
//   },
//   dumbbellContainer: {
//     alignItems: 'center',
//     marginBottom: 20, // Space between dumbbell and header
//   },
//   dumbbell: {
//     width: 150, // Adjust size as needed
//     height: 150, // Adjust size as needed
//     resizeMode: 'contain',
//   },
//   contentContainer: {
//     width: '95%',
//     maxWidth: 400,
//     alignItems: 'center',
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     marginTop: 10,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#D1D1D1',
//     marginTop: 5,
//   },
//   formContainer: {
//     width: '100%',
//     padding: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.05)', // Slightly transparent background
//     borderRadius: 12,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   inputWrapper: {
//     width: '100%',
//     marginBottom: 10,
//   },
//   inputContainer: {
//     width: '100%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 5,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#4A4A6A', // Darker border for contrast
//   },
//   inputIcon: {
//     paddingHorizontal: 12,
//   },
//   input: {
//     flex: 1,
//     height: 50,
//     color: '#FFFFFF',
//     fontSize: 16,
//   },
//   eyeIcon: {
//     paddingHorizontal: 12,
//   },
//   loginButton: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#FF5E9B', // Pink button from the image
//     borderRadius: 25, // Rounded button
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 16,
//   },
//   loginButtonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   arrow: {
//     fontSize: 18,
//     color: '#FFFFFF',
//   },
//   forgotPassword: {
//     marginTop: 12,
//   },
//   linkText: {
//     color: '#FF5E9B', // Pink color for the link
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   signupContainer: {
//     flexDirection: 'row',
//     marginTop: 20,
//   },
//   signupText: {
//     color: '#D1D1D1',
//     fontSize: 14,
//   },
//   signupLink: {
//     color: '#FF5E9B', // Pink color for the link
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   errorText: {
//     color: '#FF5E9B', // Pink color for errors, matching the theme
//     fontSize: 12,
//     marginTop: 5,
//     marginLeft: 10,
//     alignSelf: 'flex-start',
//   },
// });


// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Text,
//   Alert,
//   Image,
//   Animated,
//   ScrollView,
// } from 'react-native';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth, db } from '../firebaseConfig';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import { LinearGradient } from 'expo-linear-gradient';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useNavigation } from '@react-navigation/native'; // Ensure navigation works correctly

// export default function LoginScreen() {
//   const [email, setEmail] = useState('muneshkumar2k19@gmail.com'); // Pre-filled email
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const rotateValue = new Animated.Value(0);
//   const navigation = useNavigation(); // Hook for navigation

//   // Start the rotation animation on component mount
//   useEffect(() => {
//     Animated.loop(
//       Animated.timing(rotateValue, {
//         toValue: 1,
//         duration: 2000,
//         useNativeDriver: true,
//       })
//     ).start();
//   }, [rotateValue]);

//   const rotateInterpolate = rotateValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });

//   // Validation functions
//   const validateEmail = (text) => {
//     if (!text.trim()) return 'Email is required';
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(text)) return 'Invalid email format';
//     return '';
//   };

//   const validatePassword = (text) => {
//     if (!text.trim()) return 'Password is required';
//     if (text.length < 6) return 'Password must be at least 6 characters long';
//     return '';
//   };

//   // Handle text changes and validate in real-time
//   const handleEmailChange = (text) => {
//     setEmail(text);
//     setErrors((prev) => ({ ...prev, email: validateEmail(text) }));
//   };

//   const handlePasswordChange = (text) => {
//     setPassword(text);
//     setErrors((prev) => ({ ...prev, password: validatePassword(text) }));
//   };

//   const handleLogin = async () => {
//     const emailError = validateEmail(email);
//     const passwordError = validatePassword(password);

//     if (emailError || passwordError) {
//       setErrors({
//         email: emailError,
//         password: passwordError,
//       });
//       return;
//     }

//     try {
//       // Attempt to sign in
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // Check if email is verified
//       if (!user.emailVerified) {
//         await auth.signOut(); // Sign out the unverified user immediately
//         Alert.alert(
//           'Email Not Verified',
//           'Please verify your email before logging in. Check your inbox (and spam folder) for the verification link.'
//         );
//         return;
//       }

//       // If verified, proceed with role check
//       console.log('User signed in:', user.uid);
//       const adminRef = collection(db, 'foreverfitness');
//       const q = query(adminRef, where('admin_credentials', '==', email));
//       const querySnapshot = await getDocs(q);

//       if (!querySnapshot.empty) {
//         navigation.navigate('AdminDashboard');
//       } else {
//         navigation.navigate('UserDashboard');
//       }
//     } catch (error) {
//       let errorMessage = 'An error occurred during login. Please try again.';
//       switch (error.code) {
//         case 'auth/invalid-email':
//           errorMessage = 'Invalid email format. Please enter a valid email.';
//           break;
//         case 'auth/user-not-found':
//           errorMessage = 'No user found with this email. Please sign up or check your email.';
//           break;
//         case 'auth/wrong-password':
//           errorMessage = 'Incorrect password. Please try again.';
//           break;
//         case 'auth/too-many-requests':
//           errorMessage = 'Too many attempts. Please try again later or reset your password.';
//           break;
//         default:
//           errorMessage = error.message;
//       }
//       Alert.alert('Error', errorMessage);
//     }
//   };

//   return (
//     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         <View style={styles.dumbbellContainer}>
//           <Animated.Image
//             source={require('../assets/dumbell.png')}
//             style={[styles.dumbbell, { transform: [{ rotate: rotateInterpolate }] }]}
//           />
//         </View>

//         <View style={styles.contentContainer}>
//           <View style={styles.header}>
//             <Text style={styles.title}>Login to stay fit</Text>
//             <Text style={styles.subtitle}>Save money with our membership cards</Text>
//           </View>

//           <View style={styles.formContainer}>
//             {/* Email Input */}
//             <View style={styles.inputWrapper}>
//               <View style={styles.inputContainer}>
//                 <Icon name="email" size={24} color="#A0A0A0" style={styles.inputIcon} />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Email"
//                   placeholderTextColor="#A0A0A0"
//                   value={email}
//                   onChangeText={handleEmailChange}
//                   keyboardType="email-address"
//                   autoCapitalize="none"
//                   autoFocus
//                 />
//               </View>
//               {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
//             </View>

//             {/* Password Input */}
//             <View style={styles.inputWrapper}>
//               <View style={styles.inputContainer}>
//                 <Icon name="lock" size={24} color="#A0A0A0" style={styles.inputIcon} />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Password"
//                   placeholderTextColor="#A0A0A0"
//                   value={password}
//                   onChangeText={handlePasswordChange}
//                   secureTextEntry={!showPassword}
//                   autoCapitalize="none"
//                 />
//                 <TouchableOpacity
//                   style={styles.eyeIcon}
//                   onPress={() => setShowPassword(!showPassword)}
//                 >
//                   <Icon
//                     name={showPassword ? 'visibility-off' : 'visibility'}
//                     size={24}
//                     color="#A0A0A0"
//                   />
//                 </TouchableOpacity>
//               </View>
//               {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
//             </View>

//             <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//               <Text style={styles.loginButtonText}>
//                 sign in <Text style={styles.arrow}>→</Text>
//               </Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.forgotPassword}
//               onPress={() => navigation.navigate('ForgotPassword')}
//             >
//               <Text style={styles.linkText}>Forgot password?</Text>
//             </TouchableOpacity>

//             <View style={styles.signupContainer}>
//               <Text style={styles.signupText}>Don't have an account? </Text>
//               <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
//                 <Text style={styles.signupLink}>Sign up now</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1A1A2E',
//   },
//   scrollContent: {
//     flexGrow: 1,
//     alignItems: 'center',
//     paddingTop: 120,
//   },
//   dumbbellContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   dumbbell: {
//     width: 150,
//     height: 150,
//     resizeMode: 'contain',
//   },
//   contentContainer: {
//     width: '95%',
//     maxWidth: 400,
//     alignItems: 'center',
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     marginTop: 10,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#D1D1D1',
//     marginTop: 5,
//   },
//   formContainer: {
//     width: '100%',
//     padding: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.05)',
//     borderRadius: 12,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   inputWrapper: {
//     width: '100%',
//     marginBottom: 10,
//   },
//   inputContainer: {
//     width: '100%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 5,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#4A4A6A',
//   },
//   inputIcon: {
//     paddingHorizontal: 12,
//   },
//   input: {
//     flex: 1,
//     height: 50,
//     color: '#FFFFFF',
//     fontSize: 16,
//   },
//   eyeIcon: {
//     paddingHorizontal: 12,
//   },
//   loginButton: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#FF5E9B',
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 16,
//   },
//   loginButtonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   arrow: {
//     fontSize: 18,
//     color: '#FFFFFF',
//   },
//   forgotPassword: {
//     marginTop: 12,
//   },
//   linkText: {
//     color: '#FF5E9B',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   signupContainer: {
//     flexDirection: 'row',
//     marginTop: 20,
//   },
//   signupText: {
//     color: '#D1D1D1',
//     fontSize: 14,
//   },
//   signupLink: {
//     color: '#FF5E9B',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   errorText: {
//     color: '#FF5E9B',
//     fontSize: 12,
//     marginTop: 5,
//     marginLeft: 10,
//     alignSelf: 'flex-start',
//   },
// });


import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Alert,
  Image,
  Animated,
  ScrollView,
} from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState('muneshkumar2k19@gmail.com'); // Pre-filled email
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Track login loading state
  const rotateValue = useState(new Animated.Value(0))[0]; // Animation value
  const navigation = useNavigation();

  // Start the rotation animation only once using useCallback
  const startRotation = useCallback(() => {
    rotateValue.setValue(0); // Reset to initial value
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();
  }, [rotateValue]);

  useEffect(() => {
    startRotation();
  }, [startRotation]);

  const rotateInterpolate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    setLoading(true);
    try {
      // Attempt to sign in
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check if email is verified
      if (!user.emailVerified) {
        await auth.signOut();
        Alert.alert(
          'Email Not Verified',
          'Please verify your email before logging in. Check your inbox (and spam folder) for the verification link.'
        );
        setLoading(false);
        return;
      }

      // Check user role
      const adminRef = collection(db, 'foreverfitness');
      const q = query(adminRef, where('admin_credentials', '==', email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        navigation.navigate('AdminDashboard');
      } else {
        navigation.navigate('UserDashboard');
      }
    } catch (error) {
      let errorMessage = 'An error occurred during login. Please try again.';
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Invalid email format. Please enter a valid email.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'No user found with this email.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password.';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many attempts. Please try again later.';
          break;
        default:
          errorMessage = error.message;
      }
      Alert.alert('Error', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.dumbbellContainer}>
          <Animated.Image
            source={require('../assets/dumbell.png')}
            style={[styles.dumbbell, { transform: [{ rotate: rotateInterpolate }] }]}
          />
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>Login to Stay Fit</Text>
            <Text style={styles.subtitle}>Unlock exclusive fitness benefits</Text>
          </View>

          <LinearGradient
            colors={['#FFFFFF', '#F5F7FA']} // Match UserDashboard card gradient
            style={styles.formContainer}
          >
            {/* Email Input */}
            <View style={styles.inputWrapper}>
              <View style={styles.inputContainer}>
                <Icon name="email" size={24} color="#718096" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#718096"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoFocus
                />
              </View>
            </View>

            {/* Password Input */}
            <View style={styles.inputWrapper}>
              <View style={styles.inputContainer}>
                <Icon name="lock" size={24} color="#718096" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#718096"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Icon
                    name={showPassword ? 'visibility-off' : 'visibility'}
                    size={24}
                    color="#718096"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={[styles.loginButton, loading && styles.disabledButton]}
              onPress={handleLogin}
              disabled={loading}
            >
              <LinearGradient
                colors={loading ? ['#A0AEC0', '#A0AEC0'] : ['#FF6F61', '#FF9F1C']}
                style={styles.loginGradient}
              >
                {loading ? (
                  <Animated.View style={styles.loadingWrapper}>
                    <Image
                      source={require('../assets/dumbell.png')}
                      style={styles.loadingDumbbell}
                    />
                  </Animated.View>
                ) : (
                  <Text style={styles.loginButtonText}>
                    Sign In <Text style={styles.arrow}>→</Text>
                  </Text>
                )}
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.forgotPassword}
              onPress={() => navigation.navigate('ForgotPassword')}
            >
              <Text style={styles.linkText}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signupLink}>Sign Up Now</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 120,
  },
  dumbbellContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  dumbbell: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  contentContainer: {
    width: '95%',
    maxWidth: 400,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontSize: 14,
    color: '#D1D1D1',
    marginTop: 5,
  },
  formContainer: {
    width: '100%',
    padding: 20,
    borderRadius: 15,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  inputWrapper: {
    width: '100%',
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  inputIcon: {
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: 50,
    color: '#1F2937',
    fontSize: 16,
  },
  eyeIcon: {
    paddingHorizontal: 12,
  },
  loginButton: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginTop: 16,
  },
  loginGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.8,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  arrow: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  loadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingDumbbell: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    transform: [{ rotate: '360deg' }],
  },
  forgotPassword: {
    marginTop: 12,
  },
  linkText: {
    color: '#FF6F61',
    fontSize: 14,
    fontWeight: '600',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    color: '#4A5568',
    fontSize: 14,
  },
  signupLink: {
    color: '#FF6F61',
    fontSize: 14,
    fontWeight: '700',
  },
});