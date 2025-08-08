// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

// import { createUserWithEmailAndPassword } from "firebase/auth";
// import {auth} from "../firebaseConfig";

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
    
//     createUserWithEmailAndPassword(auth, email, password)
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
// import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebaseConfig";
// import { LogBox } from 'react-native';

// export default function SignUpScreen({ navigation }) {
//   LogBox.ignoreAllLogs();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [countryCode, setCountryCode] = useState('US'); // Default country code
//   const [callingCode, setCallingCode] = useState('1'); // Default calling code

//   const handleSignUp = () => {
//     // Validate fields
//     if (!name || !email || !password || !confirmPassword || !phone) {
//       alert('All fields are required');
//       return;
//     }

//     if (password !== confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }

//     // Firebase email/password authentication
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log('User created:', userCredential.user);
//         alert('Sign-up successful!');
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
//       <TextInput
//         style={styles.input}
//         placeholder="Confirm Password"
//         value={confirmPassword}
//         onChangeText={setConfirmPassword}
//         secureTextEntry
//       />
     
//       <Button title="Sign Up" onPress={handleSignUp} />
//       <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
//         Already have an account? Login
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
//     paddingVertical: 5,
//     fontSize: 16,
//   },
//   phoneContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//     borderBottomWidth: 1,
//   },
//   callingCode: {
//     fontSize: 16,
//     marginLeft: 10,
//   },
//   phoneInput: {
//     flex: 1,
//     fontSize: 16,
//     marginLeft: 5,
//   },
//   link: {
//     color: 'blue',
//     marginTop: 10,
//     textAlign: 'center',
//   },
// });




// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebaseConfig";
// import { LogBox } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// export default function SignUpScreen({ navigation }) {
//   LogBox.ignoreAllLogs();

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [countryCode, setCountryCode] = useState('US'); // Default country code
//   const [callingCode, setCallingCode] = useState('1'); // Default calling code

//   const handleSignUp = () => {
//     // Validate fields
//     if ( !email || !password || !confirmPassword) {
//       alert('All fields are required');
//       return;
//     }

//     if (password !== confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }

//     // Firebase email/password authentication
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log('User created:', userCredential.user);
//         alert('Sign-up successful!');
//       })
//       .catch((error) => alert(error.message));
//   };

//   return (
//     <LinearGradient colors={['#1D2671', '#C33764']} style={styles.container}>
//           <View>
//           <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>Sign UP</Text>
//         </View>
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
//         <TextInput
//           style={styles.input}
//           placeholder="Confirm Password"
//           value={confirmPassword}
//           onChangeText={setConfirmPassword}
//           secureTextEntry
//         />
        
//         <Button title="Sign Up" onPress={handleSignUp} color="blue" />
        
//         <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
//           Already have an account? Login
//         </Text>
//       </View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   formContainer: {
//     width: '90%',
//     maxWidth: 400,
//     padding: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent card
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   input: {
//     width: '100%',
//     borderBottomWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     backgroundColor: 'rgba(255, 255, 255, 0)', // Slightly more opaque background
//     borderRadius: 5,
//     color: '#fff', // White text color
//   },
//   link: {
//     color: 'blue',
//     marginTop: 10,
//     textAlign: 'center',
//   },
// });



// import React, { useState, useEffect } from 'react';
// import { View, TextInput, TouchableOpacity, StyleSheet, Text, Alert, Image, Animated, ScrollView } from 'react-native';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebaseConfig';
// import { LinearGradient } from 'expo-linear-gradient';
// import Icon from 'react-native-vector-icons/MaterialIcons'; // Use MaterialIcons or another icon set (e.g., FontAwesome)

// export default function SignUpScreen({ navigation }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [countryCode, setCountryCode] = useState('PK'); // Updated to Pakistan (PK) as default
//   const [callingCode, setCallingCode] = useState('92'); // Pakistani calling code
//   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility
//   const translateY = new Animated.Value(0); // For up-and-down animation

//   // Start the up-and-down animation on component mount
//   useEffect(() => {
//     Animated.loop(
//       Animated.sequence([
//         Animated.timing(translateY, {
//           toValue: -20, // Move up 20 pixels
//           duration: 1000, // Duration of upward movement (1 second)
//           useNativeDriver: true, // Improves performance
//         }),
//         Animated.timing(translateY, {
//           toValue: 20, // Move down 20 pixels
//           duration: 1000, // Duration of downward movement (1 second)
//           useNativeDriver: true,
//         }),
//       ])
//     ).start();
//   }, [translateY]);

//   const handleSignUp = () => {
//     // Validate fields
//     if (!name || !email || !password || !confirmPassword || !phone) {
//       Alert.alert('Error', 'All fields are required');
//       return;
//     }

//     if (password !== confirmPassword) {
//       Alert.alert('Error', 'Passwords do not match');
//       return;
//     }

//     // Firebase email/password authentication
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log('User created:', userCredential.user);
//         Alert.alert('Success', 'Sign-up successful!');
//         navigation.navigate('Login'); // Navigate to Login screen after successful sign-up
//       })
//       .catch((error) => Alert.alert('Error', error.message));
//   };

//   return (
//     <LinearGradient 
//       colors={['#1A1A2E', '#16213E']} // Matching the LoginScreen gradient (dark blue/purple)
//       style={styles.container}
//     >
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         {/* Dumbbell Animation at the top, moving up and down, no absolute positioning */}
//         <View style={styles.dumbbellContainer}>
//           <Animated.Image 
//             source={require('../assets/dumbell.png')} // Replace with your dumbbell image path
//             style={[styles.dumbbell, { transform: [{ translateY }] }]}
//           />
//         </View>

//         {/* Main content below dumbbell, no overlap */}
//         <View style={styles.contentContainer}>
//           <View style={styles.header}>
//             <Text style={styles.title}>Sign Up</Text>
//             <Text style={styles.subtitle}>Join our fitness community today!</Text>
//           </View>

//           <View style={styles.formContainer}>
//             {/* Name Input with Icon */}
//             <View style={styles.inputContainer}>
//               <Icon name="person" size={24} color="#A0A0A0" style={styles.inputIcon} />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Name"
//                 placeholderTextColor="#A0A0A0"
//                 value={name}
//                 onChangeText={setName}
//                 autoCapitalize="words"
//               />
//             </View>

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
//               />
//             </View>

//             {/* Phone Input with Icon */}
//             <View style={styles.inputContainer}>
//               <Icon name="phone" size={24} color="#A0A0A0" style={styles.inputIcon} />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Phone Number"
//                 placeholderTextColor="#A0A0A0"
//                 value={phone}
//                 onChangeText={setPhone}
//                 keyboardType="phone-pad"
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

//             {/* Confirm Password Input with Icon and Eye Toggle */}
//             <View style={styles.inputContainer}>
//               <Icon name="lock" size={24} color="#A0A0A0" style={styles.inputIcon} />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Confirm Password"
//                 placeholderTextColor="#A0A0A0"
//                 value={confirmPassword}
//                 onChangeText={setConfirmPassword}
//                 secureTextEntry={!showConfirmPassword} // Toggle secureTextEntry for confirm password
//                 autoCapitalize="none"
//               />
//               <TouchableOpacity 
//                 style={styles.eyeIcon} 
//                 onPress={() => setShowConfirmPassword(!showConfirmPassword)}
//               >
//                 <Icon 
//                   name={showConfirmPassword ? 'visibility-off' : 'visibility'} 
//                   size={24} 
//                   color="#A0A0A0" 
//                 />
//               </TouchableOpacity>
//             </View>
            
//             <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
//               <Text style={styles.loginButtonText}>Sign Up <Text style={styles.arrow}>→</Text></Text>
//             </TouchableOpacity>

//             <TouchableOpacity 
//               style={styles.forgotPassword}
//               onPress={() => navigation.navigate('Login')}
//             >
//               <Text style={styles.linkText}>Already have an account? Login</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1A1A2E', // Dark background from the LoginScreen
//   },
//   scrollContent: {
//     flexGrow: 1, // Allows the ScrollView content to grow and center
//     alignItems: 'center',
//     paddingTop: 40, // Space for dumbbell at the top
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
//     backgroundColor: 'rgba(255, 255, 255, 0.05)', // Slightly transparent background, matching LoginScreen
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
//     backgroundColor: '#FF5E9B', // Pink button from the LoginScreen
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
//     color: '#FF5E9B', // Pink color for the link, matching LoginScreen
//     fontSize: 14,
//     fontWeight: '500',
//   },
// });

// import React, { useState, useEffect } from 'react';
// import { View, TextInput, TouchableOpacity, StyleSheet, Text, Alert, Image, Animated, ScrollView } from 'react-native';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebaseConfig';
// import { LinearGradient } from 'expo-linear-gradient';
// import Icon from 'react-native-vector-icons/MaterialIcons'; // Use MaterialIcons or another icon set (e.g., FontAwesome)

// export default function SignUpScreen({ navigation }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [countryCode, setCountryCode] = useState('PK'); // Updated to Pakistan (PK) as default
//   const [callingCode, setCallingCode] = useState('92'); // Pakistani calling code
//   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility
//   const [errors, setErrors] = useState({}); // State to store validation errors for each field
//   const translateY = new Animated.Value(0); // For up-and-down animation

//   // Start the up-and-down animation on component mount
//   useEffect(() => {
//     Animated.loop(
//       Animated.sequence([
//         Animated.timing(translateY, {
//           toValue: -20, // Move up 20 pixels
//           duration: 1000, // Duration of upward movement (1 second)
//           useNativeDriver: true, // Improves performance
//         }),
//         Animated.timing(translateY, {
//           toValue: 20, // Move down 20 pixels
//           duration: 1000, // Duration of downward movement (1 second)
//           useNativeDriver: true,
//         }),
//       ])
//     ).start();
//   }, [translateY]);

//   // Validation functions for each field
//   const validateName = (text) => {
//     if (!text.trim()) return 'Name is required';
//     if (text.length < 2) return 'Name must be at least 2 characters long';
//     return '';
//   };

//   const validateEmail = (text) => {
//     if (!text.trim()) return 'Email is required';
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(text)) return 'Invalid email format';
//     return '';
//   };

//   const validatePhone = (text) => {
//     if (!text.trim()) return 'Phone number is required';
//     const phoneRegex = /^\d{10,12}$/; // Adjust for Pakistani phone numbers (e.g., 10-12 digits)
//     if (!phoneRegex.test(text)) return 'Invalid phone number (10-12 digits)';
//     return '';
//   };

//   const validatePassword = (text) => {
//     if (!text.trim()) return 'Password is required';
//     if (text.length < 6) return 'Password must be at least 6 characters long';
//     return '';
//   };

//   const validateConfirmPassword = (text) => {
//     if (!text.trim()) return 'Confirm Password is required';
//     if (text !== password) return 'Passwords do not match';
//     return '';
//   };

//   // Handle text changes and validate in real-time
//   const handleNameChange = (text) => {
//     setName(text);
//     setErrors((prev) => ({ ...prev, name: validateName(text) }));
//   };

//   const handleEmailChange = (text) => {
//     setEmail(text);
//     setErrors((prev) => ({ ...prev, email: validateEmail(text) }));
//   };

//   const handlePhoneChange = (text) => {
//     setPhone(text);
//     setErrors((prev) => ({ ...prev, phone: validatePhone(text) }));
//   };

//   const handlePasswordChange = (text) => {
//     setPassword(text);
//     setErrors((prev) => ({
//       ...prev,
//       password: validatePassword(text),
//       confirmPassword: validateConfirmPassword(confirmPassword), // Re-validate confirm password
//     }));
//   };

//   const handleConfirmPasswordChange = (text) => {
//     setConfirmPassword(text);
//     setErrors((prev) => ({ ...prev, confirmPassword: validateConfirmPassword(text) }));
//   };

//   const handleSignUp = () => {
//     // Final validation before Firebase call
//     const nameError = validateName(name);
//     const emailError = validateEmail(email);
//     const phoneError = validatePhone(phone);
//     const passwordError = validatePassword(password);
//     const confirmPasswordError = validateConfirmPassword(confirmPassword);

//     if (nameError || emailError || phoneError || passwordError || confirmPasswordError) {
//       setErrors({
//         name: nameError,
//         email: emailError,
//         phone: phoneError,
//         password: passwordError,
//         confirmPassword: confirmPasswordError,
//       });
//       return;
//     }

//     // Firebase email/password authentication
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log('User created:', userCredential.user);
//         Alert.alert('Success', 'Sign-up successful!');
//         navigation.navigate('Login'); // Navigate to Login screen after successful sign-up
//       })
//       .catch((error) => {
//         let errorMessage = 'An error occurred during sign-up. Please try again.';
//         switch (error.code) {
//           case 'auth/email-already-in-use':
//             errorMessage = 'This email is already in use. Please use a different email.';
//             break;
//           case 'auth/invalid-email':
//             errorMessage = 'Invalid email format. Please enter a valid email.';
//             break;
//           case 'auth/weak-password':
//             errorMessage = 'Password is too weak. It must be at least 6 characters long.';
//             break;
//           default:
//             errorMessage = error.message;
//         }
//         Alert.alert('Error', errorMessage);
//       });
//   };

//   return (
//     <LinearGradient 
//       colors={['#1A1A2E', '#16213E']} // Matching the LoginScreen gradient (dark blue/purple)
//       style={styles.container}
//     >
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         {/* Dumbbell Animation at the top, moving up and down, no absolute positioning */}
//         <View style={styles.dumbbellContainer}>
//           <Animated.Image 
//             source={require('../assets/dumbell.png')} // Replace with your dumbbell image path
//             style={[styles.dumbbell, { transform: [{ translateY }] }]}
//           />
//         </View>

//         {/* Main content below dumbbell, no overlap */}
//         <View style={styles.contentContainer}>
//           <View style={styles.header}>
//             <Text style={styles.title}>Sign Up</Text>
//             <Text style={styles.subtitle}>Join our fitness community today!</Text>
//           </View>

//           <View style={styles.formContainer}>
//             {/* Name Input with Icon and Error */}
//             <View style={styles.inputWrapper}>
//               <View style={styles.inputContainer}>
//                 <Icon name="person" size={24} color="#A0A0A0" style={styles.inputIcon} />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Name"
//                   placeholderTextColor="#A0A0A0"
//                   value={name}
//                   onChangeText={handleNameChange}
//                   autoCapitalize="words"
//                 />
//               </View>
//               {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}
//             </View>

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
//                 />
//               </View>
//               {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
//             </View>

//             {/* Phone Input with Icon and Error */}
//             <View style={styles.inputWrapper}>
//               <View style={styles.inputContainer}>
//                 <Icon name="phone" size={24} color="#A0A0A0" style={styles.inputIcon} />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Phone Number"
//                   placeholderTextColor="#A0A0A0"
//                   value={phone}
//                   onChangeText={handlePhoneChange}
//                   keyboardType="phone-pad"
//                 />
//               </View>
//               {errors.phone ? <Text style={styles.errorText}>{errors.phone}</Text> : null}
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

//             {/* Confirm Password Input with Icon, Eye Toggle, and Error */}
//             <View style={styles.inputWrapper}>
//               <View style={styles.inputContainer}>
//                 <Icon name="lock" size={24} color="#A0A0A0" style={styles.inputIcon} />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Confirm Password"
//                   placeholderTextColor="#A0A0A0"
//                   value={confirmPassword}
//                   onChangeText={handleConfirmPasswordChange}
//                   secureTextEntry={!showConfirmPassword} // Toggle secureTextEntry for confirm password
//                   autoCapitalize="none"
//                 />
//                 <TouchableOpacity 
//                   style={styles.eyeIcon} 
//                   onPress={() => setShowConfirmPassword(!showConfirmPassword)}
//                 >
//                   <Icon 
//                     name={showConfirmPassword ? 'visibility-off' : 'visibility'} 
//                     size={24} 
//                     color="#A0A0A0" 
//                   />
//                 </TouchableOpacity>
//               </View>
//               {errors.confirmPassword ? <Text style={styles.errorText}>{errors.confirmPassword}</Text> : null}
//             </View>
            
//             <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
//               <Text style={styles.loginButtonText}>Sign Up <Text style={styles.arrow}>→</Text></Text>
//             </TouchableOpacity>

//             <TouchableOpacity 
//               style={styles.forgotPassword}
//               onPress={() => navigation.navigate('Login')}
//             >
//               <Text style={styles.linkText}>Already have an account? Login</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1A1A2E', // Dark background from the LoginScreen
//   },
//   scrollContent: {
//     flexGrow: 1, // Allows the ScrollView content to grow and center
//     alignItems: 'center',
//     paddingTop: 40, // Space for dumbbell at the top
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
//     backgroundColor: 'rgba(255, 255, 255, 0.05)', // Slightly transparent background, matching LoginScreen
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
//     backgroundColor: '#FF5E9B', // Pink button from the LoginScreen
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
//     color: '#FF5E9B', // Pink color for the link, matching LoginScreen
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   errorText: {
//     color: '#FF5E9B', // Pink color for errors, matching the theme
//     fontSize: 12,
//     marginTop: 5,
//     marginLeft: 10,
//     alignSelf: 'flex-start',
//   },
// });

// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, StyleSheet, Text, Alert, Image, ScrollView } from 'react-native';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebaseConfig';
// import { LinearGradient } from 'expo-linear-gradient';
// import Icon from 'react-native-vector-icons/MaterialIcons'; // Use MaterialIcons or another icon set (e.g., FontAwesome)

// export default function SignUpScreen({ navigation }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [countryCode, setCountryCode] = useState('PK'); // Updated to Pakistan (PK) as default
//   const [callingCode, setCallingCode] = useState('92'); // Pakistani calling code
//   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility
//   const [errors, setErrors] = useState({}); // State to store validation errors for each field

//   // Validation functions for each field
//   const validateName = (text) => {
//     if (!text.trim()) return 'Name is required';
//     if (text.length < 2) return 'Name must be at least 2 characters long';
//     return '';
//   };

//   const validateEmail = (text) => {
//     if (!text.trim()) return 'Email is required';
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(text)) return 'Invalid email format';
//     return '';
//   };

//   const validatePhone = (text) => {
//     if (!text.trim()) return 'Phone number is required';
//     const phoneRegex = /^\d{10,12}$/; // Adjust for Pakistani phone numbers (e.g., 10-12 digits)
//     if (!phoneRegex.test(text)) return 'Invalid phone number (10-12 digits)';
//     return '';
//   };

//   const validatePassword = (text) => {
//     if (!text.trim()) return 'Password is required';
//     if (text.length < 6) return 'Password must be at least 6 characters long';
//     return '';
//   };

//   const validateConfirmPassword = (text) => {
//     if (!text.trim()) return 'Confirm Password is required';
//     if (text !== password) return 'Passwords do not match';
//     return '';
//   };

//   // Handle text changes and validate in real-time
//   const handleNameChange = (text) => {
//     setName(text);
//     setErrors((prev) => ({ ...prev, name: validateName(text) }));
//   };

//   const handleEmailChange = (text) => {
//     setEmail(text);
//     setErrors((prev) => ({ ...prev, email: validateEmail(text) }));
//   };

//   const handlePhoneChange = (text) => {
//     setPhone(text);
//     setErrors((prev) => ({ ...prev, phone: validatePhone(text) }));
//   };

//   const handlePasswordChange = (text) => {
//     setPassword(text);
//     setErrors((prev) => ({
//       ...prev,
//       password: validatePassword(text),
//       confirmPassword: validateConfirmPassword(confirmPassword), // Re-validate confirm password
//     }));
//   };

//   const handleConfirmPasswordChange = (text) => {
//     setConfirmPassword(text);
//     setErrors((prev) => ({ ...prev, confirmPassword: validateConfirmPassword(text) }));
//   };

//   const handleSignUp = () => {
//     // Final validation before Firebase call
//     const nameError = validateName(name);
//     const emailError = validateEmail(email);
//     const phoneError = validatePhone(phone);
//     const passwordError = validatePassword(password);
//     const confirmPasswordError = validateConfirmPassword(confirmPassword);

//     if (nameError || emailError || phoneError || passwordError || confirmPasswordError) {
//       setErrors({
//         name: nameError,
//         email: emailError,
//         phone: phoneError,
//         password: passwordError,
//         confirmPassword: confirmPasswordError,
//       });
//       return;
//     }

//     // Firebase email/password authentication
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log('User created:', userCredential.user);
//         Alert.alert('Success', 'Sign-up successful!');
//         navigation.navigate('Login'); // Navigate to Login screen after successful sign-up
//       })
//       .catch((error) => {
//         let errorMessage = 'An error occurred during sign-up. Please try again.';
//         switch (error.code) {
//           case 'auth/email-already-in-use':
//             errorMessage = 'This email is already in use. Please use a different email.';
//             break;
//           case 'auth/invalid-email':
//             errorMessage = 'Invalid email format. Please enter a valid email.';
//             break;
//           case 'auth/weak-password':
//             errorMessage = 'Password is too weak. It must be at least 6 characters long.';
//             break;
//           default:
//             errorMessage = error.message;
//         }
//         Alert.alert('Error', errorMessage);
//       });
//   };

//   return (
//     <LinearGradient 
//       colors={['#1A1A2E', '#16213E']} // Matching the LoginScreen gradient (dark blue/purple)
//       style={styles.container}
//     >
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         {/* Static Image Placeholder at the top */}
//         <View style={styles.imageContainer}>
//           <Image 
//             source={require('../assets/skipping.png')} // Replace with your image path (e.g., dumbbell, fitness person, logo)
//             style={styles.headerImage}
//           />
//         </View>

//         {/* Main content below image, no overlap */}
//         <View style={styles.contentContainer}>
//           <View style={styles.header}>
//             <Text style={styles.title}>Sign Up</Text>
//             <Text style={styles.subtitle}>Join our fitness community today!</Text>
//           </View>

//           <View style={styles.formContainer}>
//             {/* Name Input with Icon and Error */}
//             <View style={styles.inputWrapper}>
//               <View style={styles.inputContainer}>
//                 <Icon name="person" size={24} color="#A0A0A0" style={styles.inputIcon} />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Name"
//                   placeholderTextColor="#A0A0A0"
//                   value={name}
//                   onChangeText={handleNameChange}
//                   autoCapitalize="words"
//                 />
//               </View>
//               {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}
//             </View>

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
//                 />
//               </View>
//               {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
//             </View>

//             {/* Phone Input with Icon and Error */}
//             <View style={styles.inputWrapper}>
//               <View style={styles.inputContainer}>
//                 <Icon name="phone" size={24} color="#A0A0A0" style={styles.inputIcon} />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Phone Number"
//                   placeholderTextColor="#A0A0A0"
//                   value={phone}
//                   onChangeText={handlePhoneChange}
//                   keyboardType="phone-pad"
//                 />
//               </View>
//               {errors.phone ? <Text style={styles.errorText}>{errors.phone}</Text> : null}
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

//             {/* Confirm Password Input with Icon, Eye Toggle, and Error */}
//             <View style={styles.inputWrapper}>
//               <View style={styles.inputContainer}>
//                 <Icon name="lock" size={24} color="#A0A0A0" style={styles.inputIcon} />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Confirm Password"
//                   placeholderTextColor="#A0A0A0"
//                   value={confirmPassword}
//                   onChangeText={handleConfirmPasswordChange}
//                   secureTextEntry={!showConfirmPassword} // Toggle secureTextEntry for confirm password
//                   autoCapitalize="none"
//                 />
//                 <TouchableOpacity 
//                   style={styles.eyeIcon} 
//                   onPress={() => setShowConfirmPassword(!showConfirmPassword)}
//                 >
//                   <Icon 
//                     name={showConfirmPassword ? 'visibility-off' : 'visibility'} 
//                     size={24} 
//                     color="#A0A0A0" 
//                   />
//                 </TouchableOpacity>
//               </View>
//               {errors.confirmPassword ? <Text style={styles.errorText}>{errors.confirmPassword}</Text> : null}
//             </View>
            
//             <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
//               <Text style={styles.loginButtonText}>Sign Up <Text style={styles.arrow}>→</Text></Text>
//             </TouchableOpacity>

//             <TouchableOpacity 
//               style={styles.forgotPassword}
//               onPress={() => navigation.navigate('Login')}
//             >
//               <Text style={styles.linkText}>Already have an account? Login</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1A1A2E', // Dark background from the LoginScreen
//   },
//   scrollContent: {
//     flexGrow: 1, // Allows the ScrollView content to grow and center
//     alignItems: 'center',
//     paddingTop: 40, // Space for image at the top
//   },
//   imageContainer: {
//     alignItems: 'center',
//     marginBottom: 20, // Space between image and header
//   },
//   headerImage: {
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
//     backgroundColor: 'rgba(255, 255, 255, 0.05)', // Slightly transparent background, matching LoginScreen
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
//     backgroundColor: '#FF5E9B', // Pink button from the LoginScreen
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
//     color: '#FF5E9B', // Pink color for the link, matching LoginScreen
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   errorText: {
//     color: '#FF5E9B', // Pink color for errors, matching the theme
//     fontSize: 12,
//     marginTop: 5,
//     marginLeft: 10,
//     alignSelf: 'flex-start',
//   },
// });




// import React, { useState } from 'react';
// import {
//   View,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Text,
//   Alert,
//   Image,
//   ScrollView,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useNavigation } from '@react-navigation/native';

// export default function SignUpScreen() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [countryCode] = useState('PK'); // Default Pakistan
//   const [callingCode] = useState('92'); // Pakistani calling code
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const navigation = useNavigation();

//   // Validation functions (unchanged)
//   const validateName = (text) => {
//     if (!text.trim()) return 'Name is required';
//     if (text.length < 2) return 'Name must be at least 2 characters long';
//     return '';
//   };

//   const validateEmail = (text) => {
//     if (!text.trim()) return 'Email is required';
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(text)) return 'Invalid email format';
//     return '';
//   };

//   const validatePhone = (text) => {
//     if (!text.trim()) return 'Phone number is required';
//     const phoneRegex = /^\d{10,12}$/;
//     if (!phoneRegex.test(text)) return 'Invalid phone number (10-12 digits)';
//     return '';
//   };

//   const validatePassword = (text) => {
//     if (!text.trim()) return 'Password is required';
//     if (text.length < 6) return 'Password must be at least 6 characters long';
//     return '';
//   };

//   const validateConfirmPassword = (text) => {
//     if (!text.trim()) return 'Confirm Password is required';
//     if (text !== password) return 'Passwords do not match';
//     return '';
//   };

//   // Handle text changes and validate in real-time (unchanged)
//   const handleNameChange = (text) => {
//     setName(text);
//     setErrors((prev) => ({ ...prev, name: validateName(text) }));
//   };

//   const handleEmailChange = (text) => {
//     setEmail(text);
//     setErrors((prev) => ({ ...prev, email: validateEmail(text) }));
//   };

//   const handlePhoneChange = (text) => {
//     setPhone(text);
//     setErrors((prev) => ({ ...prev, phone: validatePhone(text) }));
//   };

//   const handlePasswordChange = (text) => {
//     setPassword(text);
//     setErrors((prev) => ({
//       ...prev,
//       password: validatePassword(text),
//       confirmPassword: validateConfirmPassword(confirmPassword),
//     }));
//   };

//   const handleConfirmPasswordChange = (text) => {
//     setConfirmPassword(text);
//     setErrors((prev) => ({ ...prev, confirmPassword: validateConfirmPassword(text) }));
//   };

//   // Generate a 6-digit OTP
//   const generateOTP = () => {
//     return Math.floor(100000 + Math.random() * 900000).toString();
//   };

//   const handleSignUp = () => {
//     // Final validation
//     const nameError = validateName(name);
//     const emailError = validateEmail(email);
//     const phoneError = validatePhone(phone);
//     const passwordError = validatePassword(password);
//     const confirmPasswordError = validateConfirmPassword(confirmPassword);

//     if (nameError || emailError || phoneError || passwordError || confirmPasswordError) {
//       setErrors({
//         name: nameError,
//         email: emailError,
//         phone: phoneError,
//         password: passwordError,
//         confirmPassword: confirmPasswordError,
//       });
//       return;
//     }

//     // Generate OTP
//     const otp = generateOTP();
//     console.log(`OTP sent to ${email}: ${otp}`); // Simulate email sending (replace with actual email service)

//     // Navigate to OTP screen with user data and OTP
//     navigation.navigate('OTPScreen', {
//       userData: { name, email, password, phone, countryCode, callingCode },
//       generatedOTP: otp,
//     });
//   };

//   return (
//     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         <View style={styles.imageContainer}>
//           <Image
//             source={require('../assets/skipping.png')} // Ensure this path is correct
//             style={styles.headerImage}
//           />
//         </View>
//         <View style={styles.contentContainer}>
//           <View style={styles.header}>
//             <Text style={styles.title}>Sign Up</Text>
//             <Text style={styles.subtitle}>Join our fitness community today!</Text>
//           </View>
//           <View style={styles.formContainer}>
//             {/* Name */}
//             <View style={styles.inputWrapper}>
//               <View style={styles.inputContainer}>
//                 <Icon name="person" size={24} color="#A0A0A0" style={styles.inputIcon} />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Name"
//                   placeholderTextColor="#A0A0A0"
//                   value={name}
//                   onChangeText={handleNameChange}
//                   autoCapitalize="words"
//                 />
//               </View>
//               {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
//             </View>

//             {/* Email */}
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
//                 />
//               </View>
//               {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
//             </View>

//             {/* Phone */}
//             <View style={styles.inputWrapper}>
//               <View style={styles.inputContainer}>
//                 <Icon name="phone" size={24} color="#A0A0A0" style={styles.inputIcon} />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Phone Number"
//                   placeholderTextColor="#A0A0A0"
//                   value={phone}
//                   onChangeText={handlePhoneChange}
//                   keyboardType="phone-pad"
//                 />
//               </View>
//               {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}
//             </View>

//             {/* Password */}
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

//             {/* Confirm Password */}
//             <View style={styles.inputWrapper}>
//               <View style={styles.inputContainer}>
//                 <Icon name="lock" size={24} color="#A0A0A0" style={styles.inputIcon} />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Confirm Password"
//                   placeholderTextColor="#A0A0A0"
//                   value={confirmPassword}
//                   onChangeText={handleConfirmPasswordChange}
//                   secureTextEntry={!showConfirmPassword}
//                   autoCapitalize="none"
//                 />
//                 <TouchableOpacity
//                   style={styles.eyeIcon}
//                   onPress={() => setShowConfirmPassword(!showConfirmPassword)}
//                 >
//                   <Icon
//                     name={showConfirmPassword ? 'visibility-off' : 'visibility'}
//                     size={24}
//                     color="#A0A0A0"
//                   />
//                 </TouchableOpacity>
//               </View>
//               {errors.confirmPassword && (
//                 <Text style={styles.errorText}>{errors.confirmPassword}</Text>
//               )}
//             </View>

//             <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
//               <Text style={styles.loginButtonText}>
//                 Sign Up <Text style={styles.arrow}>→</Text>
//               </Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.forgotPassword}
//               onPress={() => navigation.navigate('Login')}
//             >
//               <Text style={styles.linkText}>Already have an account? Login</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </LinearGradient>
//   );
// }

// // Styles remain unchanged
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1A1A2E',
//   },
//   scrollContent: {
//     flexGrow: 1,
//     alignItems: 'center',
//     paddingTop: 40,
//   },
//   imageContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   headerImage: {
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
//   errorText: {
//     color: '#FF5E9B',
//     fontSize: 12,
//     marginTop: 5,
//     marginLeft: 10,
//     alignSelf: 'flex-start',
//   },
// });


// import React, { useState } from 'react';
// import {
//   View,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Text,
//   Alert,
//   Image,
//   ScrollView,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useNavigation } from '@react-navigation/native';
// import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
// import { auth } from '../firebaseConfig';

// export default function SignUpScreen() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [countryCode] = useState('PK'); // Default Pakistan
//   const [callingCode] = useState('92'); // Pakistani calling code
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const navigation = useNavigation();

//   // Validation functions
//   const validateName = (text) => {
//     if (!text.trim()) return 'Name is required';
//     if (text.length < 2) return 'Name must be at least 2 characters long';
//     return '';
//   };

//   const validateEmail = (text) => {
//     if (!text.trim()) return 'Email is required';
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(text)) return 'Invalid email format';
//     return '';
//   };

//   const validatePhone = (text) => {
//     if (!text.trim()) return 'Phone number is required';
//     const phoneRegex = /^\d{10,12}$/;
//     if (!phoneRegex.test(text)) return 'Invalid phone number (10-12 digits)';
//     return '';
//   };

//   const validatePassword = (text) => {
//     if (!text.trim()) return 'Password is required';
//     if (text.length < 6) return 'Password must be at least 6 characters long';
//     return '';
//   };

//   const validateConfirmPassword = (text) => {
//     if (!text.trim()) return 'Confirm Password is required';
//     if (text !== password) return 'Passwords do not match';
//     return '';
//   };

//   // Handle text changes and validate in real-time
//   const handleNameChange = (text) => {
//     setName(text);
//     setErrors((prev) => ({ ...prev, name: validateName(text) }));
//   };

//   const handleEmailChange = (text) => {
//     setEmail(text);
//     setErrors((prev) => ({ ...prev, email: validateEmail(text) }));
//   };

//   const handlePhoneChange = (text) => {
//     setPhone(text);
//     setErrors((prev) => ({ ...prev, phone: validatePhone(text) }));
//   };

//   const handlePasswordChange = (text) => {
//     setPassword(text);
//     setErrors((prev) => ({
//       ...prev,
//       password: validatePassword(text),
//       confirmPassword: validateConfirmPassword(confirmPassword),
//     }));
//   };

//   const handleConfirmPasswordChange = (text) => {
//     setConfirmPassword(text);
//     setErrors((prev) => ({ ...prev, confirmPassword: validateConfirmPassword(text) }));
//   };

//   const handleSignUp = async () => {
//     const nameError = validateName(name);
//     const emailError = validateEmail(email);
//     const phoneError = validatePhone(phone);
//     const passwordError = validatePassword(password);
//     const confirmPasswordError = validateConfirmPassword(confirmPassword);

//     if (nameError || emailError || phoneError || passwordError || confirmPasswordError) {
//       setErrors({
//         name: nameError,
//         email: emailError,
//         phone: phoneError,
//         password: passwordError,
//         confirmPassword: confirmPasswordError,
//       });
//       return;
//     }

//     try {
//       // Create user in Firebase Auth
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // Send verification email
//       await sendEmailVerification(user, {
//         handleCodeInApp: false,
//         url: "https://foreverfitness-35d69.firebaseapp.com/__/auth/action?mode=action&oobCode=code", // Replace with your app's URL
//       });

//       Alert.alert(
//         'Verification Email Sent',
//         `A verification email has been sent to ${email}. Please verify your email to continue.`,
//       );

//       // Navigate to verification screen with all user data
//       navigation.navigate('VerifyEmailScreen', {
//         userData: { name, email, password, phone, countryCode, callingCode },
//         uid: user.uid,
//       });
//     } catch (error) {
//       let errorMessage = 'An error occurred.';
//       switch (error.code) {
//         case 'auth/email-already-in-use':
//           errorMessage = 'This email is already in use.';
//           break;
//         case 'auth/invalid-email':
//           errorMessage = 'Invalid email format.';
//           break;
//         case 'auth/weak-password':
//           errorMessage = 'Password is too weak.';
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
//         <View style={styles.imageContainer}>
//           <Image source={require('../assets/skipping.png')} style={styles.headerImage} />
//         </View>
//         <View style={styles.contentContainer}>
//           <View style={styles.header}>
//             <Text style={styles.title}>Sign Up</Text>
//             <Text style={styles.subtitle}>Join our fitness community today!</Text>
//           </View>
//           <View style={styles.formContainer}>
//             {/* Name */}
//             <View style={styles.inputWrapper}>
//               <View style={styles.inputContainer}>
//                 <Icon name="person" size={24} color="#A0A0A0" style={styles.inputIcon} />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Name"
//                   placeholderTextColor="#A0A0A0"
//                   value={name}
//                   onChangeText={handleNameChange}
//                   autoCapitalize="words"
//                 />
//               </View>
//               {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
//             </View>

//             {/* Email */}
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
//                 />
//               </View>
//               {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
//             </View>

//             {/* Phone */}
//             <View style={styles.inputWrapper}>
//               <View style={styles.inputContainer}>
//                 <Icon name="phone" size={24} color="#A0A0A0" style={styles.inputIcon} />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Phone Number"
//                   placeholderTextColor="#A0A0A0"
//                   value={phone}
//                   onChangeText={handlePhoneChange}
//                   keyboardType="phone-pad"
//                 />
//               </View>
//               {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}
//             </View>

//             {/* Password */}
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

//             {/* Confirm Password */}
//             <View style={styles.inputWrapper}>
//               <View style={styles.inputContainer}>
//                 <Icon name="lock" size={24} color="#A0A0A0" style={styles.inputIcon} />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Confirm Password"
//                   placeholderTextColor="#A0A0A0"
//                   value={confirmPassword}
//                   onChangeText={handleConfirmPasswordChange}
//                   secureTextEntry={!showConfirmPassword}
//                   autoCapitalize="none"
//                 />
//                 <TouchableOpacity
//                   style={styles.eyeIcon}
//                   onPress={() => setShowConfirmPassword(!showConfirmPassword)}
//                 >
//                   <Icon
//                     name={showConfirmPassword ? 'visibility-off' : 'visibility'}
//                     size={24}
//                     color="#A0A0A0"
//                   />
//                 </TouchableOpacity>
//               </View>
//               {errors.confirmPassword && (
//                 <Text style={styles.errorText}>{errors.confirmPassword}</Text>
//               )}
//             </View>

//             <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
//               <Text style={styles.loginButtonText}>
//                 Verify Email <Text style={styles.arrow}>→</Text>
//               </Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.forgotPassword}
//               onPress={() => navigation.navigate('Login')}
//             >
//               <Text style={styles.linkText}>Already have an account? Login</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#1A1A2E' },
//   scrollContent: { flexGrow: 1, alignItems: 'center', paddingTop: 40 },
//   imageContainer: { alignItems: 'center', marginBottom: 20 },
//   headerImage: { width: 150, height: 150, resizeMode: 'contain' },
//   contentContainer: { width: '95%', maxWidth: 400, alignItems: 'center' },
//   header: { alignItems: 'center', marginBottom: 20 },
//   title: { fontSize: 24, fontWeight: 'bold', color: '#FFFFFF', marginTop: 10 },
//   subtitle: { fontSize: 14, color: '#D1D1D1', marginTop: 5 },
//   formContainer: {
//     width: '100%',
//     padding: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.05)',
//     borderRadius: 12,
//     alignItems: 'center',
//   },
//   inputWrapper: { width: '100%', marginBottom: 10 },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#4A4A6A',
//   },
//   inputIcon: { paddingHorizontal: 12 },
//   input: { flex: 1, height: 50, color: '#FFFFFF', fontSize: 16 },
//   eyeIcon: { paddingHorizontal: 12 },
//   loginButton: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#FF5E9B',
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 16,
//   },
//   loginButtonText: { color: '#FFFFFF', fontSize: 18, fontWeight: '600' },
//   arrow: { fontSize: 18, color: '#FFFFFF' },
//   forgotPassword: { marginTop: 12 },
//   linkText: { color: '#FF5E9B', fontSize: 14, fontWeight: '500' },
//   errorText: { color: '#FF5E9B', fontSize: 12, marginTop: 5, marginLeft: 10 },
// });


import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export default function SignUpScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  // Validation functions
  const validateName = (text) => (!text.trim() ? 'Required' : text.length < 2 ? 'Min 2 chars' : '');
  const validateEmail = (text) =>
    !text.trim() ? 'Required' : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text) ? '' : 'Invalid';
  const validatePhone = (text) =>
    !text.trim() ? 'Required' : /^\d{10,12}$/.test(text) ? '' : '10-12 digits';
  const validatePassword = (text) => (!text.trim() ? 'Required' : text.length < 6 ? 'Min 6 chars' : '');
  const validateConfirmPassword = (text) => (!text.trim() ? 'Required' : text !== password ? 'Mismatch' : '');

  // Handle text changes with real-time validation
  const handleChange = (setter, validator, key) => (text) => {
    setter(text);
    setErrors((prev) => ({ ...prev, [key]: validator(text) }));
  };

  const handleSignUp = async () => {
    const validations = {
      name: validateName(name),
      email: validateEmail(email),
      phone: validatePhone(phone),
      password: validatePassword(password),
      confirmPassword: validateConfirmPassword(confirmPassword),
    };

    if (Object.values(validations).some((error) => error)) {
      setErrors(validations);
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await sendEmailVerification(user, {
        handleCodeInApp: false,
        url: 'https://foreverfitness-35d69.firebaseapp.com/__/auth/action?mode=action&oobCode=code',
      });

      Alert.alert(
        'Success',
        `A verification email has been sent to ${email}. Please check your inbox and verify your email.`,
        [{ text: 'OK', onPress: () => navigation.navigate('Login') }]
      );
    } catch (error) {
      let errorMessage = 'An error occurred.';
      switch (error.code) {
        case 'auth/email-already-in-use': errorMessage = 'Email already in use.'; break;
        case 'auth/invalid-email': errorMessage = 'Invalid email format.'; break;
        case 'auth/weak-password': errorMessage = 'Password too weak.'; break;
        default: errorMessage = error.message;
      }
      Alert.alert('Error', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/skipping.png')} style={styles.headerImage} />
          <Text style={styles.title}>Join the Fitness Revolution</Text>
        </View>

        <View style={styles.formContainerWrapper}>
          <LinearGradient colors={['#FFFFFF', '#F5F7FA']} style={styles.formContainer}>
            {/* Name */}
            <View style={styles.inputWrapper}>
              <View style={styles.inputContainer}>
                <Icon name="person" size={24} color="#718096" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Full Name"
                  placeholderTextColor="#718096"
                  value={name}
                  onChangeText={handleChange(setName, validateName, 'name')}
                  autoCapitalize="words"
                />
              </View>
              {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
            </View>

            {/* Email */}
            <View style={styles.inputWrapper}>
              <View style={styles.inputContainer}>
                <Icon name="email" size={24} color="#718096" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#718096"
                  value={email}
                  onChangeText={handleChange(setEmail, validateEmail, 'email')}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
              {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
            </View>

            {/* Phone */}
            <View style={styles.inputWrapper}>
              <View style={styles.inputContainer}>
                <Icon name="phone" size={24} color="#718096" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Phone (10-12 digits)"
                  placeholderTextColor="#718096"
                  value={phone}
                  onChangeText={handleChange(setPhone, validatePhone, 'phone')}
                  keyboardType="phone-pad"
                />
              </View>
              {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}
            </View>

            {/* Password */}
            <View style={styles.inputWrapper}>
              <View style={styles.inputContainer}>
                <Icon name="lock" size={24} color="#718096" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#718096"
                  value={password}
                  onChangeText={handleChange(setPassword, validatePassword, 'password')}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Icon name={showPassword ? 'visibility-off' : 'visibility'} size={24} color="#718096" />
                </TouchableOpacity>
              </View>
              {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
            </View>

            {/* Confirm Password */}
            <View style={styles.inputWrapper}>
              <View style={styles.inputContainer}>
                <Icon name="lock" size={24} color="#718096" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  placeholderTextColor="#718096"
                  value={confirmPassword}
                  onChangeText={handleChange(setConfirmPassword, validateConfirmPassword, 'confirmPassword')}
                  secureTextEntry={!showConfirmPassword}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <Icon name={showConfirmPassword ? 'visibility-off' : 'visibility'} size={24} color="#718096" />
                </TouchableOpacity>
              </View>
              {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}
            </View>

            {/* Sign Up Button */}
            <TouchableOpacity
              style={[styles.signupButton, loading && styles.disabledButton]}
              onPress={handleSignUp}
              disabled={loading}
            >
              <LinearGradient
                colors={loading ? ['#A0AEC0', '#A0AEC0'] : ['#FF6F61', '#FF9F1C']}
                style={styles.signupGradient}
              >
                {loading ? (
                  <View style={styles.loadingWrapper}>
                    <Image
                      source={require('../assets/skipping.png')}
                      style={styles.loadingImage}
                    />
                  </View>
                ) : (
                  <Text style={styles.signupButtonText}>Sign Up Now</Text>
                )}
              </LinearGradient>
            </TouchableOpacity>

            {/* Login Link */}
            <View style={styles.loginLinkContainer}>
              <Text style={styles.loginText}>Already a member? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginLink}>Login</Text>
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
    paddingVertical: 40,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    marginTop: 10,
  },
  formContainerWrapper: {
    width: '90%',
    maxWidth: 400,
  },
  formContainer: {
    padding: 25,
    borderRadius: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 8 },
  },
  inputWrapper: {
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 10,
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
    fontWeight: '500',
  },
  eyeIcon: {
    paddingHorizontal: 12,
  },
  errorText: {
    color: '#E53E3E',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 5,
    marginLeft: 10,
  },
  signupButton: {
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginTop: 20,
  },
  signupGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.7,
  },
  signupButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  loadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  loginLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    color: '#4A5568',
    fontSize: 14,
    fontWeight: '500',
  },
  loginLink: {
    color: '#FF6F61',
    fontSize: 14,
    fontWeight: '700',
  },
});












