// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   ActivityIndicator,
//   Animated,
//   ScrollView,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
// import { db } from '../firebaseConfig';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import paymentDetails from './paymentDetails';

// export default function PlaceOrder() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { cart, totalPrice, userData, setCart, setParentCart } = route.params || {};
//   const [address, setAddress] = useState({
//     street: '',
//     city: '',
//     state: '',
//     zipCode: '',
//   });
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [processingPayment, setProcessingPayment] = useState(false);
//   const fadeAnim = useState(new Animated.Value(0))[0];
//   const [payScale] = useState(new Animated.Value(1));

//   React.useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 600,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   const handlePressIn = (scale) => {
//     Animated.spring(scale, {
//       toValue: 0.95,
//       useNativeDriver: true,
//     }).start();
//   };

//   const handlePressOut = (scale) => {
//     Animated.spring(scale, {
//       toValue: 1,
//       friction: 5,
//       useNativeDriver: true,
//     }).start();
//   };

//   const validateAddress = () => {
//     return address.street && address.city && address.state && address.zipCode;
//   };

//   const handlePayment = async () => {
//     if (!validateAddress()) {
//       Alert.alert('Error', 'Please fill in all address fields.');
//       return;
//     }

//     if (!selectedCard) {
//       Alert.alert('Error', 'Please select a payment card.');
//       return;
//     }

//     if (!userData || !userData.id || !userData.email) {
//       Alert.alert('Error', 'User data is missing.');
//       return;
//     }

//     setProcessingPayment(true);
//     try {
//       const card = paymentDetails.find((card) => card.id === selectedCard);
//       if (!card) {
//         throw new Error('Invalid card selected.');
//       }

//       // Simulate payment processing delay
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       if (card.outcome === 'invalid') {
//         Alert.alert('Payment Failed', card.message);
//         return;
//       }

//       if (card.outcome === 'insufficient') {
//         Alert.alert('Payment Failed', card.message);
//         return;
//       }

//       // Place order for successful payment
//       const orderRef = collection(db, 'orders');
//       await addDoc(orderRef, {
//         userId: userData.id,
//         userEmail: userData.email,
//         userName: userData.name || 'Unknown',
//         cartItems: cart,
//         totalPrice: totalPrice,
//         address: {
//           street: address.street,
//           city: address.city,
//           state: address.state,
//           zipCode: address.zipCode,
//         },
//         createdAt: new Date().toISOString(),
//       });

//       // Clear cart
//       const cartRef = doc(db, 'carts', userData.id);
//       await setDoc(cartRef, {
//         userId: userData.id,
//         items: [],
//         updatedAt: new Date().toISOString(),
//       });

//       Alert.alert('Success', 'Order placed successfully!');
//       setCart([]);
//       setParentCart([]);
//       navigation.navigate('ShopProducts', { userData });
//     } catch (error) {
//       console.error('Error processing payment:', error);
//       Alert.alert('Error', 'Failed to process payment. Please try again.');
//     } finally {
//       setProcessingPayment(false);
//     }
//   };

//   if (!cart || !userData) {
//     return (
//       <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
//         <Text style={styles.errorText}>Cart or user data not available.</Text>
//       </LinearGradient>
//     );
//   }

//   return (
//     <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
//       <Animated.View style={{ opacity: fadeAnim }}>
//         <ScrollView contentContainerStyle={styles.scrollContent}>
//           <LinearGradient
//             colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)']}
//             style={styles.header}
//           >
//             <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//               <Ionicons name="arrow-back" size={30} color="#FFFFFF" />
//             </TouchableOpacity>
//             <Text style={styles.title}>Place Order</Text>
//           </LinearGradient>

//           <View style={styles.formContainer}>
//             <Text style={styles.sectionTitle}>Shipping Address</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Street Address"
//               placeholderTextColor="#718096"
//               value={address.street}
//               onChangeText={(text) => setAddress({ ...address, street: text })}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="City"
//               placeholderTextColor="#718096"
//               value={address.city}
//               onChangeText={(text) => setAddress({ ...address, city: text })}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="State"
//               placeholderTextColor="#718096"
//               value={address.state}
//               onChangeText={(text) => setAddress({ ...address, state: text })}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Zip Code"
//               placeholderTextColor="#718096"
//               value={address.zipCode}
//               onChangeText={(text) => setAddress({ ...address, zipCode: text })}
//               keyboardType="numeric"
//             />

//             <Text style={styles.sectionTitle}>Payment Details</Text>
//             {paymentDetails.map((card) => (
//               <TouchableOpacity
//                 key={card.id}
//                 style={[
//                   styles.cardOption,
//                   selectedCard === card.id && styles.selectedCard,
//                 ]}
//                 onPress={() => setSelectedCard(card.id)}
//               >
//                 <Text style={styles.cardText}>
//                   Card ending in {card.cardNumber.slice(-4)} (Expires: {card.expiry})
//                 </Text>
//               </TouchableOpacity>
//             ))}

//             <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>
//             <TouchableOpacity
//               style={[styles.payButton, !selectedCard && styles.disabledButton]}
//               onPressIn={() => handlePressIn(payScale)}
//               onPressOut={() => handlePressOut(payScale)}
//               onPress={handlePayment}
//               disabled={processingPayment || !selectedCard}
//             >
//               <Animated.View style={{ transform: [{ scale: payScale }] }}>
//                 <LinearGradient
//                   colors={selectedCard ? ['#FF6F61', '#FF9F1C'] : ['#A0AEC0', '#A0AEC0']}
//                   style={styles.payGradient}
//                 >
//                   {processingPayment ? (
//                     <ActivityIndicator size="small" color="#FFFFFF" />
//                   ) : (
//                     <Text style={styles.payText}>Pay Now</Text>
//                   )}
//                 </LinearGradient>
//               </Animated.View>
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </Animated.View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollContent: {
//     paddingBottom: 30,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: 'rgba(255, 255, 255, 0.2)',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 10,
//     shadowOffset: { width: 0, height: 5 },
//   },
//   backButton: {
//     marginRight: 15,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '800',
//     color: '#FFFFFF',
//     textShadowColor: 'rgba(0, 0, 0, 0.2)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 3,
//   },
//   formContainer: {
//     padding: 20,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 15,
//     margin: 20,
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#1F2937',
//     marginBottom: 15,
//   },
//   input: {
//     padding: 12,
//     marginBottom: 15,
//     borderRadius: 8,
//     backgroundColor: '#F5F6F5',
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//     color: '#1F2937',
//     fontSize: 16,
//   },
//   cardOption: {
//     padding: 15,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//     marginBottom: 10,
//     backgroundColor: '#F5F6F5',
//   },
//   selectedCard: {
//     borderColor: '#FF6F61',
//     backgroundColor: '#FFE5E0',
//   },
//   cardText: {
//     fontSize: 16,
//     color: '#1F2937',
//   },
//   totalPrice: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#1F2937',
//     marginVertical: 20,
//     textAlign: 'center',
//   },
//   payButton: {
//     borderRadius: 20,
//     overflow: 'hidden',
//   },
//   payGradient: {
//     paddingVertical: 12,
//     paddingHorizontal: 25,
//     alignItems: 'center',
//   },
//   disabledButton: {
//     opacity: 0.8,
//   },
//   payText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '700',
//   },
//   errorText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     textAlign: 'center',
//     marginTop: 50,
//   },
// });





import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Animated,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Ionicons from 'react-native-vector-icons/Ionicons';
import paymentDetails from './paymentDetails';

export default function PlaceOrder() {
  const route = useRoute();
  const navigation = useNavigation();
  const { cart, totalPrice, userData, setCart, setParentCart } = route.params || {};
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
  });
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const [processingPayment, setProcessingPayment] = useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0];
  const [payScale] = useState(new Animated.Value(1));

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  const handlePressIn = (scale) => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = (scale) => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  const validateAddress = () => {
    return address.street && address.city && address.state && address.zipCode;
  };

  const formatCardNumber = (text) => {
    // Remove non-digits and limit to 16 digits
    const digits = text.replace(/\D/g, '').slice(0, 16);
    // Add spaces every 4 digits
    const formatted = digits.match(/.{1,4}/g)?.join(' ') || digits;
    return formatted;
  };

  const formatExpiry = (text) => {
    // Remove non-digits and limit to 4 digits (MMYY)
    const digits = text.replace(/\D/g, '').slice(0, 4);
    // Add slash after MM
    if (digits.length > 2) {
      return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    }
    return digits;
  };

  const validateCardDetails = () => {
    const { cardNumber, expiry, cvv } = cardDetails;
    // Basic validation
    if (cardNumber.replace(/\s/g, '').length !== 16) {
      return false;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      return false;
    }
    if (cvv.length < 3 || cvv.length > 4) {
      return false;
    }
    return true;
  };

  const handlePayment = async () => {
    if (!validateAddress()) {
      Alert.alert('Error', 'Please fill in all address fields.');
      return;
    }

    if (!validateCardDetails()) {
      Alert.alert('Error', 'Please enter valid card details.');
      return;
    }

    if (!userData || !userData.id || !userData.email) {
      Alert.alert('Error', 'User data is missing.');
      return;
    }

    setProcessingPayment(true);
    try {
      // Normalize card number (remove spaces) for comparison
      const enteredCardNumber = cardDetails.cardNumber.replace(/\s/g, '');
      const enteredExpiry = cardDetails.expiry;
      const enteredCvv = cardDetails.cvv;

      // Find matching card in paymentDetails
      const card = paymentDetails.find(
        (c) =>
          c.cardNumber.replace(/\s/g, '') === enteredCardNumber &&
          c.expiry === enteredExpiry &&
          c.cvv === enteredCvv
      );

      // Simulate payment processing delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (!card) {
        Alert.alert('Payment Failed', 'Invalid card details.');
        return;
      }

      if (card.outcome === 'invalid') {
        Alert.alert('Payment Failed', card.message);
        return;
      }

      if (card.outcome === 'insufficient') {
        Alert.alert('Payment Failed', card.message);
        return;
      }

      // Place order for successful payment
      const orderRef = collection(db, 'orders');
      await addDoc(orderRef, {
        userId: userData.id,
        userEmail: userData.email,
        userName: userData.name || 'Unknown',
        cartItems: cart,
        totalPrice: totalPrice,
        address: {
          street: address.street,
          city: address.city,
          state: address.state,
          zipCode: address.zipCode,
        },
        createdAt: new Date().toISOString(),
      });

      // Clear cart
      const cartRef = doc(db, 'carts', userData.id);
      await setDoc(cartRef, {
        userId: userData.id,
        items: [],
        updatedAt: new Date().toISOString(),
      });

      Alert.alert('Success', 'Order placed successfully!');
      setCart([]);
      setParentCart([]);
      navigation.navigate('ShopProducts', { userData });
    } catch (error) {
      console.error('Error processing payment:', error);
      Alert.alert('Error', 'Failed to process payment. Please try again.');
    } finally {
      setProcessingPayment(false);
    }
  };

  if (!cart || !userData) {
    return (
      <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
        <Text style={styles.errorText}>Cart or user data not available.</Text>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <LinearGradient
            colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)']}
            style={styles.header}
          >
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={30} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.title}>Place Order</Text>
          </LinearGradient>

          <View style={styles.formContainer}>
            <Text style={styles.sectionTitle}>Shipping Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Street Address"
              placeholderTextColor="#718096"
              value={address.street}
              onChangeText={(text) => setAddress({ ...address, street: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="City"
              placeholderTextColor="#718096"
              value={address.city}
              onChangeText={(text) => setAddress({ ...address, city: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="State"
              placeholderTextColor="#718096"
              value={address.state}
              onChangeText={(text) => setAddress({ ...address, state: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Zip Code"
              placeholderTextColor="#718096"
              value={address.zipCode}
              onChangeText={(text) => setAddress({ ...address, zipCode: text })}
              keyboardType="numeric"
            />

            <Text style={styles.sectionTitle}>Payment Details</Text>
            <View style={styles.cardInputContainer}>
              <Ionicons name="card" size={24} color="#718096" style={styles.cardIcon} />
              <TextInput
                style={[styles.input, styles.cardInput]}
                placeholder="Card Number"
                placeholderTextColor="#718096"
                value={cardDetails.cardNumber}
                onChangeText={(text) =>
                  setCardDetails({ ...cardDetails, cardNumber: formatCardNumber(text) })
                }
                keyboardType="numeric"
                maxLength={19} // 16 digits + 3 spaces
              />
            </View>
            <View style={styles.cardDetailsRow}>
              <TextInput
                style={[styles.input, styles.cardDetailInput]}
                placeholder="MM/YY"
                placeholderTextColor="#718096"
                value={cardDetails.expiry}
                onChangeText={(text) =>
                  setCardDetails({ ...cardDetails, expiry: formatExpiry(text) })
                }
                keyboardType="numeric"
                maxLength={5} // MM/YY
              />
              <TextInput
                style={[styles.input, styles.cardDetailInput]}
                placeholder="CVV"
                placeholderTextColor="#718096"
                value={cardDetails.cvv}
                onChangeText={(text) =>
                  setCardDetails({ ...cardDetails, cvv: text.replace(/\D/g, '').slice(0, 4) })
                }
                keyboardType="numeric"
                maxLength={4}
              />
            </View>

            <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>
            <TouchableOpacity
              style={[styles.payButton, !validateCardDetails() && styles.disabledButton]}
              onPressIn={() => handlePressIn(payScale)}
              onPressOut={() => handlePressOut(payScale)}
              onPress={handlePayment}
              disabled={processingPayment || !validateCardDetails()}
            >
              <Animated.View style={{ transform: [{ scale: payScale }] }}>
                <LinearGradient
                  colors={validateCardDetails() ? ['#FF6F61', '#FF9F1C'] : ['#A0AEC0', '#A0AEC0']}
                  style={styles.payGradient}
                >
                  {processingPayment ? (
                    <ActivityIndicator size="small" color="#FFFFFF" />
                  ) : (
                    <Text style={styles.payText}>Pay Now</Text>
                  )}
                </LinearGradient>
              </Animated.View>
            </TouchableOpacity>

            <View style={styles.stripeFooter}>
              <Ionicons name="lock-closed" size={16} color="#6772E5" />
              <Text style={styles.stripeText}>Payments powered by Stripe</Text>
            </View>
          </View>
        </ScrollView>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    marginTop:15,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  formContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    margin: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 15,
  },
  input: {
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#F5F6F5',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    color: '#1F2937',
    fontSize: 16,
  },
  cardInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardIcon: {
    marginRight: 10,
  },
  cardInput: {
    flex: 1,
  },
  cardDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardDetailInput: {
    flex: 1,
    marginRight: 10,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginVertical: 20,
    textAlign: 'center',
  },
  payButton: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  payGradient: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.8,
  },
  payText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  stripeFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  stripeText: {
    fontSize: 14,
    color: '#6772E5', // Stripe brand color
    fontWeight: '600',
    marginLeft: 5,
  },
  errorText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
});