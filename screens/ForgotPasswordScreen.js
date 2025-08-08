// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
// // import { auth } from '../firebase';
// // import { sendPasswordResetEmail } from 'firebase/auth';
// import {sendPasswordResetEmail } from "firebase/auth";
// import {auth} from "../firebaseConfig"

// export default function ForgotPasswordScreen() {
//   const [email, setEmail] = useState('');

//   const handleResetPassword = () => {
//     // const auth = getAuth();
//     sendPasswordResetEmail(auth, email)
//       .then(() => alert('Password reset email sent'))
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
//       <Button title="Send Reset Email" onPress={handleResetPassword} />
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
// });



// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
// import { sendPasswordResetEmail } from "firebase/auth";
// import { auth } from "../firebaseConfig";
// import { LinearGradient } from 'expo-linear-gradient';

// export default function ForgotPasswordScreen() {
//   const [email, setEmail] = useState('');

//   const handleResetPassword = () => {
//     sendPasswordResetEmail(auth, email)
//       .then(() => alert('Password reset email sent'))
//       .catch((error) => alert(error.message));
//   };

//   return (
//     <LinearGradient colors={['#1D2671', '#C33764']} style={styles.container}>
//       <View style={styles.formContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//         />
//         <Button title="Send Reset Email" onPress={handleResetPassword} color="blue" />
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
// });



// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, StyleSheet, Text, Alert, Image, ScrollView } from 'react-native';
// import { sendPasswordResetEmail } from 'firebase/auth';
// import { auth } from '../firebaseConfig';
// import { LinearGradient } from 'expo-linear-gradient';
// import Icon from 'react-native-vector-icons/MaterialIcons'; // Use MaterialIcons or another icon set (e.g., FontAwesome)

// export default function ForgotPasswordScreen({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [errors, setErrors] = useState({}); // State to store validation errors for email

//   // Validation function for email
//   const validateEmail = (text) => {
//     if (!text.trim()) return 'Email is required';
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(text)) return 'Invalid email format';
//     return '';
//   };

//   // Handle email change and validate in real-time
//   const handleEmailChange = (text) => {
//     setEmail(text);
//     setErrors((prev) => ({ ...prev, email: validateEmail(text) }));
//   };

//   const handleResetPassword = () => {
//     // Final validation before Firebase call
//     const emailError = validateEmail(email);

//     if (emailError) {
//       setErrors({ email: emailError });
//       return;
//     }

//     sendPasswordResetEmail(auth, email)
//       .then(() => {
//         Alert.alert('Success', 'Password reset email sent! Check your inbox.');
//         navigation.navigate('Login'); // Navigate back to Login screen after success
//       })
//       .catch((error) => {
//         let errorMessage = 'An error occurred. Please try again.';
//         switch (error.code) {
//           case 'auth/invalid-email':
//             errorMessage = 'Invalid email format. Please enter a valid email.';
//             break;
//           case 'auth/user-not-found':
//             errorMessage = 'No user found with this email. Please sign up or check your email.';
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
//             source={require('../assets/thinking.png')} // Replace with your image path (e.g., dumbbell, fitness person, logo)
//             style={styles.headerImage}
//           />
//         </View>

//         {/* Main content below image, no overlap */}
//         <View style={styles.contentContainer}>
//           <View style={styles.header}>
//             <Text style={styles.title}>Forgot Password</Text>
//             <Text style={styles.subtitle}>Reset your password to continue</Text>
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
//                 />
//               </View>
//               {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
//             </View>
            
//             <TouchableOpacity style={styles.loginButton} onPress={handleResetPassword}>
//               <Text style={styles.loginButtonText}>Send Reset Email <Text style={styles.arrow}>→</Text></Text>
//             </TouchableOpacity>

//             <TouchableOpacity 
//               style={styles.forgotPassword}
//               onPress={() => navigation.navigate('Login')}
//             >
//               <Text style={styles.linkText}>Back to Login</Text>
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
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Validation function for email
  const validateEmail = (text) =>
    !text.trim() ? 'Required' : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text) ? '' : 'Invalid';

  // Handle email change with real-time validation
  const handleEmailChange = (text) => {
    setEmail(text);
    setErrors((prev) => ({ ...prev, email: validateEmail(text) }));
  };

  const handleResetPassword = async () => {
    const emailError = validateEmail(email);

    if (emailError) {
      setErrors({ email: emailError });
      return;
    }

    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert(
        'Success',
        'Password reset email sent! Check your inbox.',
        [{ text: 'OK', onPress: () => navigation.navigate('Login') }]
      );
    } catch (error) {
      let errorMessage = 'An error occurred.';
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Invalid email format.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'No user found with this email.';
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
        <View style={styles.imageContainer}>
          <Image source={require('../assets/thinking.png')} style={styles.headerImage} />
          <Text style={styles.title}>Reset Your Password</Text>
        </View>

        <View style={styles.formContainerWrapper}>
          <LinearGradient colors={['#FFFFFF', '#F5F7FA']} style={styles.formContainer}>
            {/* Email Input */}
            <View style={styles.inputWrapper}>
              <View style={styles.inputContainer}>
                <Icon name="email" size={24} color="#718096" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#718096"
                  value={email}
                  onChangeText={handleEmailChange}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
              {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
            </View>

            {/* Reset Button */}
            <TouchableOpacity
              style={[styles.resetButton, loading && styles.disabledButton]}
              onPress={handleResetPassword}
              disabled={loading}
            >
              <LinearGradient
                colors={loading ? ['#A0AEC0', '#A0AEC0'] : ['#FF6F61', '#FF9F1C']}
                style={styles.resetGradient}
              >
                {loading ? (
                  <View style={styles.loadingWrapper}>
                    <Image
                      source={require('../assets/thinking.png')}
                      style={styles.loadingImage}
                    />
                  </View>
                ) : (
                  <Text style={styles.resetButtonText}>Send Reset Email</Text>
                )}
              </LinearGradient>
            </TouchableOpacity>

            {/* Back to Login Link */}
            <View style={styles.loginLinkContainer}>
              <Text style={styles.loginText}>Remembered your password? </Text>
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
  errorText: {
    color: '#E53E3E',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 5,
    marginLeft: 10,
  },
  resetButton: {
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginTop: 20,
  },
  resetGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.7,
  },
  resetButtonText: {
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

