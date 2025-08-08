// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Alert,
// } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { getAuth } from 'firebase/auth';
// import { db } from '../firebaseConfig';
// import { collection, addDoc } from 'firebase/firestore';

// export default function Cart() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const [cart, setCart] = useState(route.params.cart || []);
//   const auth = getAuth();

//   // Calculate total price
//   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   // Increase quantity of a product
//   const increaseQuantity = (productId) => {
//     setCart(cart.map((item) =>
//       item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
//     ));
//   };

//   // Decrease quantity of a product
//   const decreaseQuantity = (productId) => {
//     setCart(
//       cart
//         .map((item) =>
//           item.id === productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   // Remove product from cart
//   const removeItem = (productId) => {
//     setCart(cart.filter((item) => item.id !== productId));
//   };

//   // Place order
//   const handlePlaceOrder = async () => {
//     const user = auth.currentUser;
//     if (!user) {
//       Alert.alert('Error', 'Please log in to place an order.');
//       return;
//     }

//     try {
//       const orderRef = collection(db, 'orders');
//       await addDoc(orderRef, {
//         userEmail: user.email,
//         cartItems: cart,
//         totalPrice: totalPrice,
//       });

//       Alert.alert('Success', 'Order placed successfully!');
//       setCart([]);
//       navigation.goBack();
//     } catch (error) {
//       console.error('Error placing order:', error);
//       Alert.alert('Error', 'Failed to place the order. Please try again.');
//     }
//   };

//   // Render individual cart item
//   const renderItem = ({ item }) => (
//     <View style={styles.cartItem}>
//       <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//       <View style={styles.itemDetails}>
//         <Text style={styles.productName}>{item.name}</Text>
//         <Text style={styles.productPrice}>${item.price}</Text>
//         <View style={styles.quantityContainer}>
//           <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
//             <Text style={styles.quantityButton}>-</Text>
//           </TouchableOpacity>
//           <Text style={styles.quantityText}>{item.quantity}</Text>
//           <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
//             <Text style={styles.quantityButton}>+</Text>
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity onPress={() => removeItem(item.id)}>
//           <Text style={styles.removeButton}>Remove</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Cart</Text>
//       <FlatList
//         data={cart}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//       />
//       <Text style={styles.totalPrice}>Total Price: ${totalPrice.toFixed(2)}</Text>
//       <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
//         <Text style={styles.placeOrderText}>Place Order</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   cartItem: {
//     flexDirection: 'row',
//     marginBottom: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     paddingBottom: 10,
//   },
//   productImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 8,
//     marginRight: 15,
//   },
//   itemDetails: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   productName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   productPrice: {
//     fontSize: 16,
//     color: '#4CAF50',
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   quantityButton: {
//     fontSize: 18,
//     color: '#4CAF50',
//     paddingHorizontal: 10,
//   },
//   quantityText: {
//     fontSize: 16,
//     marginHorizontal: 10,
//   },
//   removeButton: {
//     color: '#FF0000',
//     fontSize: 16,
//   },
//   totalPrice: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 10,
//     textAlign: 'center',
//   },
//   placeOrderButton: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   placeOrderText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });




// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Alert,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { getAuth } from 'firebase/auth';
// import { db } from '../firebaseConfig';
// import { collection, addDoc } from 'firebase/firestore';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function Cart() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const [cart, setCart] = useState(route.params.cart || []);
//   const auth = getAuth();

//   // Calculate total price
//   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   // Increase quantity of a product
//   const increaseQuantity = (productId) => {
//     setCart(
//       cart.map((item) =>
//         item.id === productId && (item.stock === undefined || item.quantity < item.stock)
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       )
//     );
//   };

//   // Decrease quantity of a product
//   const decreaseQuantity = (productId) => {
//     setCart(
//       cart.map((item) =>
//         item.id === productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
//       )
//     );
//   };

//   // Remove product from cart
//   const removeItem = (productId) => {
//     const updatedCart = cart.filter((item) => item.id !== productId);
//     setCart(updatedCart);
//     navigation.setParams({ cart: updatedCart }); // Update params for previous screen
//   };

//   // Place order
//   const handlePlaceOrder = async () => {
//     const user = auth.currentUser;
//     if (!user) {
//       Alert.alert('Error', 'Please log in to place an order.');
//       return;
//     }

//     if (cart.some((item) => item.stock !== undefined && item.stock < 1)) {
//       Alert.alert('Error', 'Cannot place order: Some items are out of stock.');
//       return;
//     }

//     try {
//       const orderRef = collection(db, 'orders');
//       await addDoc(orderRef, {
//         userEmail: user.email,
//         cartItems: cart,
//         totalPrice: totalPrice,
//       });

//       Alert.alert('Success', 'Order placed successfully!');
//       setCart([]);
//       navigation.setParams({ cart: [] }); // Clear cart in previous screen
//       navigation.goBack();
//     } catch (error) {
//       console.error('Error placing order:', error);
//       Alert.alert('Error', 'Failed to place the order. Please try again.');
//     }
//   };

//   // Render individual cart item
//   const renderItem = ({ item }) => {
//     const isOutOfStock = item.stock !== undefined && item.stock < 1;

//     return (
//       <View style={styles.cartItem}>
//         <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//         <View style={styles.itemDetails}>
//           <Text style={styles.productName}>{item.name}</Text>
//           <Text style={styles.productPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
//           {isOutOfStock ? (
//             <Text style={styles.outOfStockText}>Out of Stock</Text>
//           ) : (
//             <View style={styles.quantityContainer}>
//               <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
//                 <Ionicons name="remove-circle" size={24} color="#FF5E9B" />
//               </TouchableOpacity>
//               <Text style={styles.quantityText}>{item.quantity}</Text>
//               <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
//                 <Ionicons
//                   name="add-circle"
//                   size={24}
//                   color={item.stock && item.quantity >= item.stock ? '#A0A0A0' : '#FF5E9B'}
//                 />
//               </TouchableOpacity>
//             </View>
//           )}
//           <TouchableOpacity onPress={() => removeItem(item.id)}>
//             <Text style={styles.removeButton}>Remove</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={30} color="#FF5E9B" />
//         </TouchableOpacity>
//         <Text style={styles.title}>Cart</Text>
//       </View>
//       <FlatList
//         data={cart}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         contentContainerStyle={styles.list}
//         ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty.</Text>}
//         showsVerticalScrollIndicator={false}
//       />
//       <View style={styles.footer}>
//         <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>
//         <TouchableOpacity
//           style={[styles.placeOrderButton, cart.length === 0 && styles.disabledButton]}
//           onPress={handlePlaceOrder}
//           disabled={cart.length === 0}
//         >
//           <Text style={styles.placeOrderText}>Place Order</Text>
//         </TouchableOpacity>
//       </View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   gradientContainer: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingTop: 50,
//     paddingHorizontal: 20,
//     paddingBottom: 15,
//     backgroundColor: 'rgba(0, 0, 0, 0.3)',
//   },
//   backButton: {
//     marginRight: 15,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     textShadowColor: 'rgba(0, 0, 0, 0.5)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 4,
//   },
//   list: {
//     paddingHorizontal: 20,
//     paddingTop: 10,
//     paddingBottom: 100, // Space for footer
//   },
//   cartItem: {
//     flexDirection: 'row',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     marginVertical: 10,
//     padding: 10,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   productImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 8,
//     marginRight: 15,
//   },
//   itemDetails: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   productName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
//   productPrice: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#FF5E9B',
//     marginVertical: 5,
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 5,
//   },
//   quantityText: {
//     fontSize: 16,
//     color: '#FFFFFF',
//     marginHorizontal: 15,
//   },
//   outOfStockText: {
//     fontSize: 14,
//     color: '#FF4444',
//     fontWeight: '600',
//     marginVertical: 5,
//   },
//   removeButton: {
//     color: '#FF5E9B',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   emptyText: {
//     fontSize: 18,
//     color: '#D1D1D1',
//     textAlign: 'center',
//     marginTop: 50,
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     padding: 20,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   totalPrice: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
//   placeOrderButton: {
//     backgroundColor: '#FF5E9B',
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     elevation: 3,
//   },
//   disabledButton: {
//     backgroundColor: '#A0A0A0',
//   },
//   placeOrderText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Alert,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { getAuth } from 'firebase/auth';
// import { db } from '../firebaseConfig';
// import { collection, addDoc } from 'firebase/firestore';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function Cart() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { cart: initialCart, setCart: setParentCart } = route.params; // Receive setCart from ShopProducts
//   const [cart, setCart] = useState(initialCart || []);
//   const auth = getAuth();

//   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   const increaseQuantity = (productId) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId && (item.stock === undefined || item.quantity < item.stock)
//         ? { ...item, quantity: item.quantity + 1 }
//         : item
//     );
//     setCart(updatedCart);
//     setParentCart(updatedCart); // Update parent state
//   };

//   const decreaseQuantity = (productId) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
//     );
//     setCart(updatedCart);
//     setParentCart(updatedCart); // Update parent state
//   };

//   const removeItem = (productId) => {
//     const updatedCart = cart.filter((item) => item.id !== productId);
//     setCart(updatedCart);
//     setParentCart(updatedCart); // Update parent state
//   };

//   const handlePlaceOrder = async () => {
//     const user = auth.currentUser;
//     if (!user) {
//       Alert.alert('Error', 'Please log in to place an order.');
//       return;
//     }

//     if (cart.some((item) => item.stock !== undefined && item.stock < 1)) {
//       Alert.alert('Error', 'Cannot place order: Some items are out of stock.');
//       return;
//     }

//     try {
//       const orderRef = collection(db, 'orders');
//       await addDoc(orderRef, {
//         userEmail: user.email,
//         cartItems: cart,
//         totalPrice: totalPrice,
//       });

//       Alert.alert('Success', 'Order placed successfully!');
//       setCart([]);
//       setParentCart([]); // Clear parent cart
//       navigation.goBack();
//     } catch (error) {
//       console.error('Error placing order:', error);
//       Alert.alert('Error', 'Failed to place the order. Please try again.');
//     }
//   };

//   const renderItem = ({ item }) => {
//     const isOutOfStock = item.stock !== undefined && item.stock < 1;

//     return (
//       <View style={styles.cartItem}>
//         <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//         <View style={styles.itemDetails}>
//           <Text style={styles.productName}>{item.name}</Text>
//           <Text style={styles.productPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
//           {isOutOfStock ? (
//             <Text style={styles.outOfStockText}>Out of Stock</Text>
//           ) : (
//             <View style={styles.quantityContainer}>
//               <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
//                 <Ionicons name="remove-circle" size={24} color="#FF5E9B" />
//               </TouchableOpacity>
//               <Text style={styles.quantityText}>{item.quantity}</Text>
//               <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
//                 <Ionicons
//                   name="add-circle"
//                   size={24}
//                   color={item.stock && item.quantity >= item.stock ? '#A0A0A0' : '#FF5E9B'}
//                 />
//               </TouchableOpacity>
//             </View>
//           )}
//           <TouchableOpacity onPress={() => removeItem(item.id)}>
//             <Text style={styles.removeButton}>Remove</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={30} color="#FF5E9B" />
//         </TouchableOpacity>
//         <Text style={styles.title}>Cart</Text>
//       </View>
//       <FlatList
//         data={cart}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         contentContainerStyle={styles.list}
//         ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty.</Text>}
//         showsVerticalScrollIndicator={false}
//       />
//       <View style={styles.footer}>
//         <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>
//         <TouchableOpacity
//           style={[styles.placeOrderButton, cart.length === 0 && styles.disabledButton]}
//           onPress={handlePlaceOrder}
//           disabled={cart.length === 0}
//         >
//           <Text style={styles.placeOrderText}>Place Order</Text>
//         </TouchableOpacity>
//       </View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   gradientContainer: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingTop: 50,
//     paddingHorizontal: 20,
//     paddingBottom: 15,
//     backgroundColor: 'rgba(0, 0, 0, 0.3)',
//   },
//   backButton: {
//     marginRight: 15,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     textShadowColor: 'rgba(0, 0, 0, 0.5)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 4,
//   },
//   list: {
//     paddingHorizontal: 20,
//     paddingTop: 10,
//     paddingBottom: 100,
//   },
//   cartItem: {
//     flexDirection: 'row',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     marginVertical: 10,
//     padding: 10,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   productImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 8,
//     marginRight: 15,
//   },
//   itemDetails: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   productName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
//   productPrice: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#FF5E9B',
//     marginVertical: 5,
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 5,
//   },
//   quantityText: {
//     fontSize: 16,
//     color: '#FFFFFF',
//     marginHorizontal: 15,
//   },
//   outOfStockText: {
//     fontSize: 14,
//     color: '#FF4444',
//     fontWeight: '600',
//     marginVertical: 5,
//   },
//   removeButton: {
//     color: '#FF5E9B',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   emptyText: {
//     fontSize: 18,
//     color: '#D1D1D1',
//     textAlign: 'center',
//     marginTop: 50,
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     padding: 20,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   totalPrice: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
//   placeOrderButton: {
//     backgroundColor: '#FF5E9B',
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     elevation: 3,
//   },
//   disabledButton: {
//     backgroundColor: '#A0A0A0',
//   },
//   placeOrderText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });













// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Alert,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { getAuth } from 'firebase/auth';
// import { db } from '../firebaseConfig';
// import { collection, addDoc, doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function Cart() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { cart: initialCart, setCart: setParentCart } = route.params;
//   const [cart, setCart] = useState(initialCart || []);
//   const auth = getAuth();
//   const user = auth.currentUser;

//   useEffect(() => {
//     if (!user) return;

//     // Sync local cart with Firestore on mount
//     const fetchCart = async () => {
//       const cartRef = doc(db, 'carts', user.uid);
//       const cartSnap = await getDoc(cartRef);
//       if (cartSnap.exists()) {
//         const cartData = cartSnap.data().items || [];
//         setCart(cartData);
//         setParentCart(cartData); // Sync parent state
//       }
//     };

//     fetchCart();
//   }, [user, setParentCart]);

//   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   const increaseQuantity = async (productId) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId && (item.stock === undefined || item.quantity < item.stock)
//         ? { ...item, quantity: item.quantity + 1 }
//         : item
//     );
//     setCart(updatedCart);
//     setParentCart(updatedCart);

//     // Update Firestore
//     const cartRef = doc(db, 'carts', user.uid);
//     await updateDoc(cartRef, {
//       items: updatedCart,
//       updatedAt: new Date().toISOString(),
//     });
//   };

//   const decreaseQuantity = async (productId) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
//     );
//     setCart(updatedCart);
//     setParentCart(updatedCart);

//     // Update Firestore
//     const cartRef = doc(db, 'carts', user.uid);
//     await updateDoc(cartRef, {
//       items: updatedCart,
//       updatedAt: new Date().toISOString(),
//     });
//   };

//   const removeItem = async (productId) => {
//     const updatedCart = cart.filter((item) => item.id !== productId);
//     setCart(updatedCart);
//     setParentCart(updatedCart);

//     // Update Firestore
//     const cartRef = doc(db, 'carts', user.uid);
//     await updateDoc(cartRef, {
//       items: updatedCart,
//       updatedAt: new Date().toISOString(),
//     });
//   };

//   const handlePlaceOrder = async () => {
//     if (!user) {
//       Alert.alert('Error', 'Please log in to place an order.');
//       return;
//     }

//     if (cart.length === 0) {
//       Alert.alert('Error', 'Your cart is empty.');
//       return;
//     }

//     if (cart.some((item) => item.stock !== undefined && item.stock < item.quantity)) {
//       Alert.alert('Error', 'Cannot place order: Some items exceed available stock.');
//       return;
//     }

//     try {
//       const orderRef = collection(db, 'orders');
//       await addDoc(orderRef, {
//         userId: user.uid,
//         userEmail: user.email,
//         cartItems: cart,
//         totalPrice: totalPrice,
//         createdAt: new Date().toISOString(),
//       });

//       // Clear cart in Firestore
//       const cartRef = doc(db, 'carts', user.uid);
//       await setDoc(cartRef, {
//         userId: user.uid,
//         items: [],
//         updatedAt: new Date().toISOString(),
//       });

//       Alert.alert('Success', 'Order placed successfully!');
//       setCart([]);
//       setParentCart([]);
//       navigation.goBack();
//     } catch (error) {
//       console.error('Error placing order:', error);
//       Alert.alert('Error', 'Failed to place the order. Please try again.');
//     }
//   };

//   const renderItem = ({ item }) => {
//     const isOutOfStock = item.stock !== undefined && item.stock < item.quantity;

//     return (
//       <View style={styles.cartItem}>
//         <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//         <View style={styles.itemDetails}>
//           <Text style={styles.productName}>{item.name}</Text>
//           <Text style={styles.productPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
//           {isOutOfStock ? (
//             <Text style={styles.outOfStockText}>Out of Stock</Text>
//           ) : (
//             <View style={styles.quantityContainer}>
//               <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
//                 <Ionicons name="remove-circle" size={24} color="#FF5E9B" />
//               </TouchableOpacity>
//               <Text style={styles.quantityText}>{item.quantity}</Text>
//               <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
//                 <Ionicons
//                   name="add-circle"
//                   size={24}
//                   color={item.stock && item.quantity >= item.stock ? '#A0A0A0' : '#FF5E9B'}
//                 />
//               </TouchableOpacity>
//             </View>
//           )}
//           <TouchableOpacity onPress={() => removeItem(item.id)}>
//             <Text style={styles.removeButton}>Remove</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={30} color="#FF5E9B" />
//         </TouchableOpacity>
//         <Text style={styles.title}>Cart</Text>
//       </View>
//       <FlatList
//         data={cart}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         contentContainerStyle={styles.list}
//         ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty.</Text>}
//         showsVerticalScrollIndicator={false}
//       />
//       <View style={styles.footer}>
//         <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>
//         <TouchableOpacity
//           style={[styles.placeOrderButton, cart.length === 0 && styles.disabledButton]}
//           onPress={handlePlaceOrder}
//           disabled={cart.length === 0}
//         >
//           <Text style={styles.placeOrderText}>Place Order</Text>
//         </TouchableOpacity>
//       </View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   gradientContainer: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingTop: 50,
//     paddingHorizontal: 20,
//     paddingBottom: 15,
//     backgroundColor: 'rgba(0, 0, 0, 0.3)',
//   },
//   backButton: {
//     marginRight: 15,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     textShadowColor: 'rgba(0, 0, 0, 0.5)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 4,
//   },
//   list: {
//     paddingHorizontal: 20,
//     paddingTop: 10,
//     paddingBottom: 100,
//   },
//   cartItem: {
//     flexDirection: 'row',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     marginVertical: 10,
//     padding: 10,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   productImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 8,
//     marginRight: 15,
//   },
//   itemDetails: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   productName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
//   productPrice: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#FF5E9B',
//     marginVertical: 5,
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 5,
//   },
//   quantityText: {
//     fontSize: 16,
//     color: '#FFFFFF',
//     marginHorizontal: 15,
//   },
//   outOfStockText: {
//     fontSize: 14,
//     color: '#FF4444',
//     fontWeight: '600',
//     marginVertical: 5,
//   },
//   removeButton: {
//     color: '#FF5E9B',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   emptyText: {
//     fontSize: 18,
//     color: '#D1D1D1',
//     textAlign: 'center',
//     marginTop: 50,
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     padding: 20,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   totalPrice: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
//   placeOrderButton: {
//     backgroundColor: '#FF5E9B',
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     elevation: 3,
//   },
//   disabledButton: {
//     backgroundColor: '#A0A0A0',
//   },
//   placeOrderText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });





// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Alert,
// } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { getAuth } from 'firebase/auth';
// import { db } from '../firebaseConfig';
// import { collection, addDoc, doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function Cart() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { cart: initialCart, setCart: setParentCart } = route.params;
//   const [cart, setCart] = useState(initialCart || []);
//   const auth = getAuth();
//   const user = auth.currentUser;

//   useEffect(() => {
//     if (!user) return;

//     // Sync local cart with Firestore on mount
//     const fetchCart = async () => {
//       const cartRef = doc(db, 'carts', user.uid);
//       const cartSnap = await getDoc(cartRef);
//       if (cartSnap.exists()) {
//         const cartData = cartSnap.data().items || [];
//         setCart(cartData);
//         setParentCart(cartData); // Sync parent state
//       }
//     };

//     fetchCart();
//   }, [user, setParentCart]);

//   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   const increaseQuantity = async (productId) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId && (item.stock === undefined || item.quantity < item.stock)
//         ? { ...item, quantity: item.quantity + 1 }
//         : item
//     );
//     setCart(updatedCart);
//     setParentCart(updatedCart);

//     // Update Firestore
//     const cartRef = doc(db, 'carts', user.uid);
//     await updateDoc(cartRef, {
//       items: updatedCart,
//       updatedAt: new Date().toISOString(),
//     });
//   };

//   const decreaseQuantity = async (productId) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
//     );
//     setCart(updatedCart);
//     setParentCart(updatedCart);

//     // Update Firestore
//     const cartRef = doc(db, 'carts', user.uid);
//     await updateDoc(cartRef, {
//       items: updatedCart,
//       updatedAt: new Date().toISOString(),
//     });
//   };

//   const removeItem = async (productId) => {
//     const updatedCart = cart.filter((item) => item.id !== productId);
//     setCart(updatedCart);
//     setParentCart(updatedCart);

//     // Update Firestore
//     const cartRef = doc(db, 'carts', user.uid);
//     await updateDoc(cartRef, {
//       items: updatedCart,
//       updatedAt: new Date().toISOString(),
//     });
//   };

//   const handlePlaceOrder = async () => {
//     if (!user) {
//       Alert.alert('Error', 'Please log in to place an order.');
//       return;
//     }

//     if (cart.length === 0) {
//       Alert.alert('Error', 'Your cart is empty.');
//       return;
//     }

//     if (cart.some((item) => item.stock !== undefined && item.stock < item.quantity)) {
//       Alert.alert('Error', 'Cannot place order: Some items exceed available stock.');
//       return;
//     }

//     try {
//       const orderRef = collection(db, 'orders');
//       await addDoc(orderRef, {
//         userId: user.uid,
//         userEmail: user.email,
//         cartItems: cart,
//         totalPrice: totalPrice,
//         createdAt: new Date().toISOString(),
//       });

//       // Clear cart in Firestore
//       const cartRef = doc(db, 'carts', user.uid);
//       await setDoc(cartRef, {
//         userId: user.uid,
//         items: [],
//         updatedAt: new Date().toISOString(),
//       });

//       Alert.alert('Success', 'Order placed successfully!');
//       setCart([]);
//       setParentCart([]);
//       navigation.goBack();
//     } catch (error) {
//       console.error('Error placing order:', error);
//       Alert.alert('Error', 'Failed to place the order. Please try again.');
//     }
//   };

//   const renderItem = ({ item }) => {
//     const isOutOfStock = item.stock !== undefined && item.stock < item.quantity;

//     return (
//       <View style={styles.cartItem}>
//         <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//         <View style={styles.itemDetails}>
//           <Text style={styles.productName}>{item.name}</Text>
//           <Text style={styles.productPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
//           {isOutOfStock ? (
//             <Text style={styles.outOfStockText}>Out of Stock</Text>
//           ) : (
//             <View style={styles.quantityContainer}>
//               <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
//                 <Ionicons name="remove-circle" size={24} color="#A84CF2" /> {/* Changed to #A84CF2 */}
//               </TouchableOpacity>
//               <Text style={styles.quantityText}>{item.quantity}</Text>
//               <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
//                 <Ionicons
//                   name="add-circle"
//                   size={24}
//                   color={item.stock && item.quantity >= item.stock ? '#A0A0A0' : '#A84CF2'} // Changed to #A84CF2
//                 />
//               </TouchableOpacity>
//             </View>
//           )}
//           <TouchableOpacity onPress={() => removeItem(item.id)}>
//             <Text style={styles.removeButton}>Remove</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={30} color="#A84CF2" /> {/* Changed to #A84CF2 */}
//         </TouchableOpacity>
//         <Text style={styles.title}>Cart</Text>
//       </View>
//       <FlatList
//         data={cart}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         contentContainerStyle={styles.list}
//         ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty.</Text>}
//         showsVerticalScrollIndicator={false}
//       />
//       <View style={styles.footer}>
//         <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>
//         <TouchableOpacity
//           style={[styles.placeOrderButton, cart.length === 0 && styles.disabledButton]}
//           onPress={handlePlaceOrder}
//           disabled={cart.length === 0}
//         >
//           <Text style={styles.placeOrderText}>Place Order</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF', // Changed to white background
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingTop: 50,
//     paddingHorizontal: 20,
//     paddingBottom: 15,
//     // Removed backgroundColor: 'rgba(0, 0, 0, 0.3)' to match white background
//   },
//   backButton: {
//     marginRight: 15,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#333333', // Changed to dark gray for white background
//     textShadowColor: 'rgba(0, 0, 0, 0.1)', // Adjusted shadow for white background
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   list: {
//     paddingHorizontal: 20,
//     paddingTop: 10,
//     paddingBottom: 100,
//   },
//   cartItem: {
//     flexDirection: 'row',
//     // backgroundColor: 'rgba(255, 255, 255, 0.2)', // Adjusted for white background contrast
//     borderRadius: 12,
//     marginVertical: 10,
//     padding: 10,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     // shadowRadius: 8,
//     shadowOffset: { width: 0, height: 2 },
    
//   },
//   productImage: {
//     width: 100,
//     height: 100,
//     marginTop:2,
//     borderRadius: 8,
//     marginRight: 15,
//   },
//   itemDetails: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   productName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333333', // Changed to dark gray for white background
//   },
//   productPrice: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#A84CF2', // Changed to #A84CF2
//     marginVertical: 5,
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 5,
//   },
//   quantityText: {
//     fontSize: 16,
//     color: '#333333', // Changed to dark gray for white background
//     marginHorizontal: 15,
//   },
//   outOfStockText: {
//     fontSize: 14,
//     color: '#FF4444',
//     fontWeight: '600',
//     marginVertical: 5,
//   },
//   removeButton: {
//     color: '#A84CF2', // Changed to #A84CF2
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   emptyText: {
//     fontSize: 18,
//     color: '#666666', // Changed to medium gray for white background
//     textAlign: 'center',
//     marginTop: 50,
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     padding: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.9)', // Adjusted for white background
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   totalPrice: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333333', // Changed to dark gray for white background
//   },
//   placeOrderButton: {
//     backgroundColor: '#A84CF2', // Changed to #A84CF2
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     elevation: 3,
//   },
//   disabledButton: {
//     backgroundColor: '#A0A0A0',
//   },
//   placeOrderText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });



// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Alert,
// } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { getAuth } from 'firebase/auth';
// import { db } from '../firebaseConfig';
// import { collection, addDoc, doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function Cart() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { cart: initialCart, setCart: setParentCart } = route.params;
//   const [cart, setCart] = useState(initialCart || []);
//   const auth = getAuth();
//   const user = auth.currentUser;

//   useEffect(() => {
//     if (!user) return;

//     // Sync local cart with Firestore on mount
//     const fetchCart = async () => {
//       const cartRef = doc(db, 'carts', user.uid);
//       const cartSnap = await getDoc(cartRef);
//       if (cartSnap.exists()) {
//         const cartData = cartSnap.data().items || [];
//         setCart(cartData);
//         setParentCart(cartData); // Sync parent state
//       }
//     };

//     fetchCart();
//   }, [user, setParentCart]);

//   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   const increaseQuantity = async (productId) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId && (item.stock === undefined || item.quantity < item.stock)
//         ? { ...item, quantity: item.quantity + 1 }
//         : item
//     );
//     setCart(updatedCart);
//     setParentCart(updatedCart);

//     // Update Firestore
//     const cartRef = doc(db, 'carts', user.uid);
//     await updateDoc(cartRef, {
//       items: updatedCart,
//       updatedAt: new Date().toISOString(),
//     });
//   };

//   const decreaseQuantity = async (productId) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
//     );
//     setCart(updatedCart);
//     setParentCart(updatedCart);

//     // Update Firestore
//     const cartRef = doc(db, 'carts', user.uid);
//     await updateDoc(cartRef, {
//       items: updatedCart,
//       updatedAt: new Date().toISOString(),
//     });
//   };

//   const removeItem = async (productId) => {
//     const updatedCart = cart.filter((item) => item.id !== productId);
//     setCart(updatedCart);
//     setParentCart(updatedCart);

//     // Update Firestore
//     const cartRef = doc(db, 'carts', user.uid);
//     await updateDoc(cartRef, {
//       items: updatedCart,
//       updatedAt: new Date().toISOString(),
//     });
//   };

//   const handlePlaceOrder = async () => {
//     if (!user) {
//       Alert.alert('Error', 'Please log in to place an order.');
//       return;
//     }

//     if (cart.length === 0) {
//       Alert.alert('Error', 'Your cart is empty.');
//       return;
//     }

//     if (cart.some((item) => item.stock !== undefined && item.stock < item.quantity)) {
//       Alert.alert('Error', 'Cannot place order: Some items exceed available stock.');
//       return;
//     }

//     try {
//       const orderRef = collection(db, 'orders');
//       await addDoc(orderRef, {
//         userId: user.uid,
//         userEmail: user.email,
//         cartItems: cart,
//         totalPrice: totalPrice,
//         createdAt: new Date().toISOString(),
//       });

//       // Clear cart in Firestore
//       const cartRef = doc(db, 'carts', user.uid);
//       await setDoc(cartRef, {
//         userId: user.uid,
//         items: [],
//         updatedAt: new Date().toISOString(),
//       });

//       Alert.alert('Success', 'Order placed successfully!');
//       setCart([]);
//       setParentCart([]);
//       navigation.goBack();
//     } catch (error) {
//       console.error('Error placing order:', error);
//       Alert.alert('Error', 'Failed to place the order. Please try again.');
//     }
//   };

//   const renderItem = ({ item }) => {
//     const isOutOfStock = item.stock !== undefined && item.stock < item.quantity;

//     return (
//       <View style={styles.cartItem}>
//         <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//         <View style={styles.itemDetails}>
//           <Text style={styles.productName}>{item.name}</Text>
//           <Text style={styles.productPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
//           {isOutOfStock ? (
//             <Text style={styles.outOfStockText}>Out of Stock</Text>
//           ) : (
//             <View style={styles.quantityContainer}>
//               <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
//                 <Ionicons name="remove-circle" size={24} color="#4A90E2" />
//               </TouchableOpacity>
//               <Text style={styles.quantityText}>{item.quantity}</Text>
//               <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
//                 <Ionicons
//                   name="add-circle"
//                   size={24}
//                   color={item.stock && item.quantity >= item.stock ? '#A0AEC0' : '#4A90E2'}
//                 />
//               </TouchableOpacity>
//             </View>
//           )}
//           <TouchableOpacity onPress={() => removeItem(item.id)}>
//             <Text style={styles.removeButton}>Remove</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={30} color="#4A90E2" />
//         </TouchableOpacity>
//         <Text style={styles.title}>Cart</Text>
//       </View>
//       <FlatList
//         data={cart}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         contentContainerStyle={styles.list}
//         ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty.</Text>}
//         showsVerticalScrollIndicator={false}
//       />
//       <View style={styles.footer}>
//         <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>
//         <TouchableOpacity
//           style={[styles.placeOrderButton, cart.length === 0 && styles.disabledButton]}
//           onPress={handlePlaceOrder}
//           disabled={cart.length === 0}
//         >
//           <Text style={styles.placeOrderText}>Place Order</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F0F4F8', // Soft blue-gray background
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 15,
//     paddingVertical: 20,
//     backgroundColor: '#FFFFFF',
//     borderBottomWidth: 2,
//     borderBottomColor: '#E6ECEF',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 4 },
//   },
//   backButton: {
//     marginRight: 15,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#2D3748',
//     textShadowColor: 'rgba(0, 0, 0, 0.1)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   list: {
//     paddingHorizontal: 15,
//     paddingTop: 10,
//     paddingBottom: 120, // Adjusted for footer height
//   },
//   cartItem: {
//     flexDirection: 'row',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 15,
//     marginVertical: 10,
//     padding: 15,
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//   },
//   productImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 10,
//     marginRight: 15,
//     resizeMode: 'cover',
//   },
//   itemDetails: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   productName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#2D3748',
//     marginBottom: 5,
//   },
//   productPrice: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#4A90E2',
//     marginBottom: 10,
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   quantityText: {
//     fontSize: 16,
//     color: '#2D3748',
//     marginHorizontal: 15,
//   },
//   outOfStockText: {
//     fontSize: 14,
//     color: '#E53E3E',
//     fontWeight: '600',
//     marginBottom: 10,
//   },
//   removeButton: {
//     color: '#4A90E2',
//     fontSize: 14,
//     fontWeight: '600',
//     textDecorationLine: 'underline',
//   },
//   emptyText: {
//     fontSize: 18,
//     color: '#718096',
//     textAlign: 'center',
//     marginTop: 50,
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     padding: 20,
//     backgroundColor: '#FFFFFF',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     elevation: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: -4 },
//   },
//   totalPrice: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#2D3748',
//   },
//   placeOrderButton: {
//     backgroundColor: '#4A90E2',
//     paddingVertical: 12,
//     paddingHorizontal: 25,
//     borderRadius: 20,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   disabledButton: {
//     backgroundColor: '#A0AEC0',
//   },
//   placeOrderText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });


// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Alert,
// } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { getAuth } from 'firebase/auth';
// import { db } from '../firebaseConfig';
// import { collection, addDoc, doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function Cart() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { cart: initialCart, setCart: setParentCart, userData } = route.params; // Receive userData
//   const [cart, setCart] = useState(initialCart || []);
//   const auth = getAuth();
//   const user = auth.currentUser;

//   useEffect(() => {
//     if (!user) return;

//     const fetchCart = async () => {
//       const cartRef = doc(db, 'carts', user.uid);
//       const cartSnap = await getDoc(cartRef);
//       if (cartSnap.exists()) {
//         const cartData = cartSnap.data().items || [];
//         setCart(cartData);
//         setParentCart(cartData);
//       }
//     };

//     fetchCart();
//   }, [user, setParentCart]);

//   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   const increaseQuantity = async (productId) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId && (item.stock === undefined || item.quantity < item.stock)
//         ? { ...item, quantity: item.quantity + 1 }
//         : item
//     );
//     setCart(updatedCart);
//     setParentCart(updatedCart);

//     const cartRef = doc(db, 'carts', user.uid);
//     await updateDoc(cartRef, {
//       items: updatedCart,
//       updatedAt: new Date().toISOString(),
//     });
//   };

//   const decreaseQuantity = async (productId) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
//     );
//     setCart(updatedCart);
//     setParentCart(updatedCart);

//     const cartRef = doc(db, 'carts', user.uid);
//     await updateDoc(cartRef, {
//       items: updatedCart,
//       updatedAt: new Date().toISOString(),
//     });
//   };

//   const removeItem = async (productId) => {
//     const updatedCart = cart.filter((item) => item.id !== productId);
//     setCart(updatedCart);
//     setParentCart(updatedCart);

//     const cartRef = doc(db, 'carts', user.uid);
//     await updateDoc(cartRef, {
//       items: updatedCart,
//       updatedAt: new Date().toISOString(),
//     });
//   };

//   const handlePlaceOrder = async () => {
//     if (!user || !userData) {
//       Alert.alert('Error', 'Please log in to place an order.');
//       return;
//     }

//     if (cart.length === 0) {
//       Alert.alert('Error', 'Your cart is empty.');
//       return;
//     }

//     if (cart.some((item) => item.stock !== undefined && item.stock < item.quantity)) {
//       Alert.alert('Error', 'Cannot place order: Some items exceed available stock.');
//       return;
//     }

//     try {
//       const orderRef = collection(db, 'orders');
//       await addDoc(orderRef, {
//         userId: userData.id || user.uid,
//         userEmail: userData.email,
//         userName: userData.name, // Include user name from userData
//         cartItems: cart,
//         totalPrice: totalPrice,
//         createdAt: new Date().toISOString(),
//       });

//       const cartRef = doc(db, 'carts', user.uid);
//       await setDoc(cartRef, {
//         userId: user.uid,
//         items: [],
//         updatedAt: new Date().toISOString(),
//       });

//       Alert.alert('Success', 'Order placed successfully!');
//       setCart([]);
//       setParentCart([]);
//       navigation.goBack();
//     } catch (error) {
//       console.error('Error placing order:', error);
//       Alert.alert('Error', 'Failed to place the order. Please try again.');
//     }
//   };

//   const renderItem = ({ item }) => {
//     const isOutOfStock = item.stock !== undefined && item.stock < item.quantity;

//     return (
//       <View style={styles.cartItem}>
//         <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//         <View style={styles.itemDetails}>
//           <Text style={styles.productName}>{item.name}</Text>
//           <Text style={styles.productPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
//           {isOutOfStock ? (
//             <Text style={styles.outOfStockText}>Out of Stock</Text>
//           ) : (
//             <View style={styles.quantityContainer}>
//               <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
//                 <Ionicons name="remove-circle" size={24} color="#4A90E2" />
//               </TouchableOpacity>
//               <Text style={styles.quantityText}>{item.quantity}</Text>
//               <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
//                 <Ionicons
//                   name="add-circle"
//                   size={24}
//                   color={item.stock && item.quantity >= item.stock ? '#A0AEC0' : '#4A90E2'}
//                 />
//               </TouchableOpacity>
//             </View>
//           )}
//           <TouchableOpacity onPress={() => removeItem(item.id)}>
//             <Text style={styles.removeButton}>Remove</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={30} color="#4A90E2" />
//         </TouchableOpacity>
//         <Text style={styles.title}>Cart</Text>
//       </View>
//       <FlatList
//         data={cart}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         contentContainerStyle={styles.list}
//         ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty.</Text>}
//         showsVerticalScrollIndicator={false}
//       />
//       <View style={styles.footer}>
//         <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>
//         <TouchableOpacity
//           style={[styles.placeOrderButton, cart.length === 0 && styles.disabledButton]}
//           onPress={handlePlaceOrder}
//           disabled={cart.length === 0}
//         >
//           <Text style={styles.placeOrderText}>Place Order</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// // Styles remain unchanged
// const styles = StyleSheet.create({
//   // ... (styles remain the same as in your original code)
// });



// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Alert,
// } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { getAuth } from 'firebase/auth';
// import { db } from '../firebaseConfig';
// import { collection, addDoc, doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function Cart() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { cart: initialCart, setCart: setParentCart, userData } = route.params; // Receive userData
//   const [cart, setCart] = useState(initialCart || []);
//   const auth = getAuth();
//   const user = auth.currentUser;

//   useEffect(() => {
//     if (!user) return;

//     const fetchCart = async () => {
//       const cartRef = doc(db, 'carts', user.uid);
//       const cartSnap = await getDoc(cartRef);
//       if (cartSnap.exists()) {
//         const cartData = cartSnap.data().items || [];
//         setCart(cartData);
//         setParentCart(cartData);
//       }
//     };

//     fetchCart();
//   }, [user, setParentCart]);

//   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   const increaseQuantity = async (productId) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId && (item.stock === undefined || item.quantity < item.stock)
//         ? { ...item, quantity: item.quantity + 1 }
//         : item
//     );
//     setCart(updatedCart);
//     setParentCart(updatedCart);

//     const cartRef = doc(db, 'carts', user.uid);
//     await updateDoc(cartRef, {
//       items: updatedCart,
//       updatedAt: new Date().toISOString(),
//     });
//   };

//   const decreaseQuantity = async (productId) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
//     );
//     setCart(updatedCart);
//     setParentCart(updatedCart);

//     const cartRef = doc(db, 'carts', user.uid);
//     await updateDoc(cartRef, {
//       items: updatedCart,
//       updatedAt: new Date().toISOString(),
//     });
//   };

//   const removeItem = async (productId) => {
//     const updatedCart = cart.filter((item) => item.id !== productId);
//     setCart(updatedCart);
//     setParentCart(updatedCart);

//     const cartRef = doc(db, 'carts', user.uid);
//     await updateDoc(cartRef, {
//       items: updatedCart,
//       updatedAt: new Date().toISOString(),
//     });
//   };

//   const handlePlaceOrder = async () => {
//     if (!user || !userData) {
//       Alert.alert('Error', 'Please log in to place an order.');
//       return;
//     }

//     if (cart.length === 0) {
//       Alert.alert('Error', 'Your cart is empty.');
//       return;
//     }

//     if (cart.some((item) => item.stock !== undefined && item.stock < item.quantity)) {
//       Alert.alert('Error', 'Cannot place order: Some items exceed available stock.');
//       return;
//     }

//     try {
//       const orderRef = collection(db, 'orders');
//       await addDoc(orderRef, {
//         userId: userData.id || user.uid,
//         userEmail: userData.email,
//         userName: userData.name, // Include user's name in the order
//         cartItems: cart,
//         totalPrice: totalPrice,
//         createdAt: new Date().toISOString(),
//       });

//       const cartRef = doc(db, 'carts', user.uid);
//       await setDoc(cartRef, {
//         userId: user.uid,
//         items: [],
//         updatedAt: new Date().toISOString(),
//       });

//       Alert.alert('Success', 'Order placed successfully!');
//       setCart([]);
//       setParentCart([]);
//       navigation.goBack();
//     } catch (error) {
//       console.error('Error placing order:', error);
//       Alert.alert('Error', 'Failed to place the order. Please try again.');
//     }
//   };

//   const renderItem = ({ item }) => {
//     const isOutOfStock = item.stock !== undefined && item.stock < item.quantity;

//     return (
//       <View style={styles.cartItem}>
//         <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//         <View style={styles.itemDetails}>
//           <Text style={styles.productName}>{item.name}</Text>
//           <Text style={styles.productPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
//           {isOutOfStock ? (
//             <Text style={styles.outOfStockText}>Out of Stock</Text>
//           ) : (
//             <View style={styles.quantityContainer}>
//               <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
//                 <Ionicons name="remove-circle" size={24} color="#4A90E2" />
//               </TouchableOpacity>
//               <Text style={styles.quantityText}>{item.quantity}</Text>
//               <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
//                 <Ionicons
//                   name="add-circle"
//                   size={24}
//                   color={item.stock && item.quantity >= item.stock ? '#A0AEC0' : '#4A90E2'}
//                 />
//               </TouchableOpacity>
//             </View>
//           )}
//           <TouchableOpacity onPress={() => removeItem(item.id)}>
//             <Text style={styles.removeButton}>Remove</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={30} color="#4A90E2" />
//         </TouchableOpacity>
//         <Text style={styles.title}>Cart</Text>
//       </View>
//       <FlatList
//         data={cart}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         contentContainerStyle={styles.list}
//         ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty.</Text>}
//         showsVerticalScrollIndicator={false}
//       />
//       <View style={styles.footer}>
//         <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>
//         <TouchableOpacity
//           style={[styles.placeOrderButton, cart.length === 0 && styles.disabledButton]}
//           onPress={handlePlaceOrder}
//           disabled={cart.length === 0}
//         >
//           <Text style={styles.placeOrderText}>Place Order</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F0F4F8',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 15,
//     paddingVertical: 20,
//     backgroundColor: '#FFFFFF',
//     borderBottomWidth: 2,
//     borderBottomColor: '#E6ECEF',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 4 },
//   },
//   backButton: {
//     marginRight: 15,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#2D3748',
//     textShadowColor: 'rgba(0, 0, 0, 0.1)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   list: {
//     paddingHorizontal: 15,
//     paddingTop: 10,
//     paddingBottom: 120,
//   },
//   cartItem: {
//     flexDirection: 'row',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 15,
//     marginVertical: 10,
//     padding: 15,
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//   },
//   productImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 10,
//     marginRight: 15,
//     resizeMode: 'cover',
//   },
//   itemDetails: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   productName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#2D3748',
//     marginBottom: 5,
//   },
//   productPrice: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#4A90E2',
//     marginBottom: 10,
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   quantityText: {
//     fontSize: 16,
//     color: '#2D3748',
//     marginHorizontal: 15,
//   },
//   outOfStockText: {
//     fontSize: 14,
//     color: '#E53E3E',
//     fontWeight: '600',
//     marginBottom: 10,
//   },
//   removeButton: {
//     color: '#4A90E2',
//     fontSize: 14,
//     fontWeight: '600',
//     textDecorationLine: 'underline',
//   },
//   emptyText: {
//     fontSize: 18,
//     color: '#718096',
//     textAlign: 'center',
//     marginTop: 50,
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     padding: 20,
//     backgroundColor: '#FFFFFF',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     elevation: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: -4 },
//   },
//   totalPrice: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#2D3748',
//   },
//   placeOrderButton: {
//     backgroundColor: '#4A90E2',
//     paddingVertical: 12,
//     paddingHorizontal: 25,
//     borderRadius: 20,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   disabledButton: {
//     backgroundColor: '#A0AEC0',
//   },
//   placeOrderText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });


// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Alert,
//   ActivityIndicator,
//   Animated,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { getAuth } from 'firebase/auth';
// import { db } from '../firebaseConfig';
// import { collection, addDoc, doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function Cart() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { cart: initialCart, setCart: setParentCart, userData } = route.params || {};
//   const [cart, setCart] = useState(initialCart || []);
//   const [loadingCart, setLoadingCart] = useState(true); // Track initial cart fetch
//   const [placingOrder, setPlacingOrder] = useState(false); // Track order placement
//   const auth = getAuth();
//   const user = auth.currentUser;
//   const fadeAnim = useState(new Animated.Value(0))[0]; // Fade-in animation
//   const [placeOrderScale] = useState(new Animated.Value(1)); // Animation for Place Order button

//   useEffect(() => {
//     if (!user) {
//       setLoadingCart(false);
//       return;
//     }

//     const fetchCart = async () => {
//       setLoadingCart(true);
//       try {
//         const cartRef = doc(db, 'carts', user.uid);
//         const cartSnap = await getDoc(cartRef);
//         if (cartSnap.exists()) {
//           const cartData = cartSnap.data().items || [];
//           setCart(cartData);
//           setParentCart(cartData);
//         }
//       } catch (error) {
//         console.error('Error fetching cart:', error);
//         Alert.alert('Error', 'Failed to load cart.');
//       } finally {
//         setLoadingCart(false);
//       }
//     };

//     fetchCart();

//     // Fade-in animation
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 600,
//       useNativeDriver: true,
//     }).start();
//   }, [user, setParentCart]);

//   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   const increaseQuantity = async (productId) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId && (item.stock === undefined || item.quantity < item.stock)
//         ? { ...item, quantity: item.quantity + 1 }
//         : item
//     );
//     setCart(updatedCart);
//     setParentCart(updatedCart);

//     const cartRef = doc(db, 'carts', user.uid);
//     await updateDoc(cartRef, {
//       items: updatedCart,
//       updatedAt: new Date().toISOString(),
//     });
//   };

//   const decreaseQuantity = async (productId) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
//     );
//     setCart(updatedCart);
//     setParentCart(updatedCart);

//     const cartRef = doc(db, 'carts', user.uid);
//     await updateDoc(cartRef, {
//       items: updatedCart,
//       updatedAt: new Date().toISOString(),
//     });
//   };

//   const removeItem = async (productId) => {
//     const updatedCart = cart.filter((item) => item.id !== productId);
//     setCart(updatedCart);
//     setParentCart(updatedCart);

//     const cartRef = doc(db, 'carts', user.uid);
//     await updateDoc(cartRef, {
//       items: updatedCart,
//       updatedAt: new Date().toISOString(),
//     });
//   };

//   const handlePlaceOrder = async () => {
//     if (!user || !userData) {
//       Alert.alert('Error', 'Please log in to place an order.');
//       return;
//     }

//     if (cart.length === 0) {
//       Alert.alert('Error', 'Your cart is empty.');
//       return;
//     }

//     if (cart.some((item) => item.stock !== undefined && item.stock < item.quantity)) {
//       Alert.alert('Error', 'Cannot place order: Some items exceed available stock.');
//       return;
//     }

//     setPlacingOrder(true);
//     try {
//       const orderRef = collection(db, 'orders');
//       await addDoc(orderRef, {
//         userId: userData.id || user.uid,
//         userEmail: userData.email,
//         userName: userData.name,
//         cartItems: cart,
//         totalPrice: totalPrice,
//         createdAt: new Date().toISOString(),
//       });

//       const cartRef = doc(db, 'carts', user.uid);
//       await setDoc(cartRef, {
//         userId: user.uid,
//         items: [],
//         updatedAt: new Date().toISOString(),
//       });

//       Alert.alert('Success', 'Order placed successfully!');
//       setCart([]);
//       setParentCart([]);
//       navigation.goBack();
//     } catch (error) {
//       console.error('Error placing order:', error);
//       Alert.alert('Error', 'Failed to place the order. Please try again.');
//     } finally {
//       setPlacingOrder(false);
//     }
//   };

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

//   const renderItem = ({ item }) => {
//     const isOutOfStock = item.stock !== undefined && item.stock < item.quantity;

//     return (
//       <View style={styles.cartItem}>
//         <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//         <View style={styles.itemDetails}>
//           <Text style={styles.productName}>{item.name}</Text>
//           <Text style={styles.productPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
//           {isOutOfStock ? (
//             <Text style={styles.outOfStockText}>Out of Stock</Text>
//           ) : (
//             <View style={styles.quantityContainer}>
//               <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
//                 <Ionicons name="remove-circle" size={24} color="#FF6F61" />
//               </TouchableOpacity>
//               <Text style={styles.quantityText}>{item.quantity}</Text>
//               <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
//                 <Ionicons
//                   name="add-circle"
//                   size={24}
//                   color={item.stock && item.quantity >= item.stock ? '#A0AEC0' : '#FF6F61'}
//                 />
//               </TouchableOpacity>
//             </View>
//           )}
//           <TouchableOpacity onPress={() => removeItem(item.id)}>
//             <Text style={styles.removeButton}>Remove</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   if (loadingCart) {
//     return (
//       <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#FF6F61" />
//         <Text style={styles.loadingText}>Loading Cart...</Text>
//       </LinearGradient>
//     );
//   }

//   return (
//     <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
//       <Animated.View style={{ opacity: fadeAnim }}>
//         <LinearGradient
//           colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)']}
//           style={styles.header}
//         >
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Ionicons name="arrow-back" size={30} color="#FFFFFF" />
//           </TouchableOpacity>
//           <Text style={styles.title}>Cart</Text>
//         </LinearGradient>
//         <FlatList
//           data={cart}
//           keyExtractor={(item) => item.id}
//           renderItem={renderItem}
//           contentContainerStyle={styles.list}
//           ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty.</Text>}
//           showsVerticalScrollIndicator={false}
//         />
//         <LinearGradient
//           colors={['rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 0.8)']}
//           style={styles.footer}
//         >
//           <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>
//           <TouchableOpacity
//             style={[styles.placeOrderButton, cart.length === 0 && styles.disabledButton]}
//             onPressIn={() => handlePressIn(placeOrderScale)}
//             onPressOut={() => handlePressOut(placeOrderScale)}
//             onPress={handlePlaceOrder}
//             disabled={cart.length === 0 || placingOrder}
//           >
//             <Animated.View style={{ transform: [{ scale: placeOrderScale }] }}>
//               <LinearGradient
//                 colors={cart.length > 0 ? ['#FF6F61', '#FF9F1C'] : ['#A0AEC0', '#A0AEC0']}
//                 style={styles.placeOrderGradient}
//               >
//                 {placingOrder ? (
//                   <ActivityIndicator size="small" color="#FFFFFF" />
//                 ) : (
//                   <Text style={styles.placeOrderText}>Place Order</Text>
//                 )}
//               </LinearGradient>
//             </Animated.View>
//           </TouchableOpacity>
//         </LinearGradient>
//       </Animated.View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     marginTop: 10,
//     fontWeight: '600',
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
//   list: {
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 120,
//   },
//   cartItem: {
//     flexDirection: 'row',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 15,
//     marginVertical: 10,
//     padding: 15,
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//   },
//   productImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 10,
//     marginRight: 15,
//     resizeMode: 'cover',
//   },
//   itemDetails: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   productName: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#1F2937',
//     marginBottom: 5,
//   },
//   productPrice: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#FF6F61', // Match UserDashboard steps accent
//     marginBottom: 10,
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   quantityText: {
//     fontSize: 16,
//     color: '#1F2937',
//     marginHorizontal: 15,
//     fontWeight: '600',
//   },
//   outOfStockText: {
//     fontSize: 14,
//     color: '#E53E3E',
//     fontWeight: '600',
//     marginBottom: 10,
//   },
//   removeButton: {
//     color: '#FF6F61',
//     fontSize: 14,
//     fontWeight: '600',
//     textDecorationLine: 'underline',
//   },
//   emptyText: {
//     fontSize: 18,
//     color: '#FFFFFF',
//     textAlign: 'center',
//     marginTop: 50,
//     fontWeight: '500',
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     padding: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     elevation: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowRadius: 15,
//     shadowOffset: { width: 0, height: -4 },
//   },
//   totalPrice: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#1F2937',
//   },
//   placeOrderButton: {
//     borderRadius: 20,
//     overflow: 'hidden',
//   },
//   placeOrderGradient: {
//     paddingVertical: 12,
//     paddingHorizontal: 25,
//     alignItems: 'center',
//   },
//   disabledButton: {
//     opacity: 0.8,
//   },
//   placeOrderText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '700',
//   },
// });



import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ActivityIndicator,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { db } from '../firebaseConfig';
import { collection, addDoc, doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Cart() {
  const route = useRoute();
  const navigation = useNavigation();
  const { cart: initialCart, setCart: setParentCart, userData } = route.params || {};
  const [cart, setCart] = useState(initialCart || []);
  const [loadingCart, setLoadingCart] = useState(true); // Track initial cart fetch
  const [placingOrder, setPlacingOrder] = useState(false); // Track order placement
  const auth = getAuth();
  const user = auth.currentUser;
  const fadeAnim = useState(new Animated.Value(0))[0]; // Fade-in animation
  const [placeOrderScale] = useState(new Animated.Value(1)); // Animation for Place Order button

  useEffect(() => {
    if (!user) {
      setLoadingCart(false);
      return;
    }

    const fetchCart = async () => {
      setLoadingCart(true);
      try {
        const cartRef = doc(db, 'carts', user.uid);
        const cartSnap = await getDoc(cartRef);
        if (cartSnap.exists()) {
          const cartData = cartSnap.data().items || [];
          setCart(cartData);
          setParentCart(cartData);
        }
      } catch (error) {
        console.error('Error fetching cart:', error);
        Alert.alert('Error', 'Failed to load cart.');
      } finally {
        setLoadingCart(false);
      }
    };

    fetchCart();

    // Fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [user, setParentCart]);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const increaseQuantity = async (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && (item.stock === undefined || item.quantity < item.stock)
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
    setParentCart(updatedCart);

    const cartRef = doc(db, 'carts', user.uid);
    await updateDoc(cartRef, {
      items: updatedCart,
      updatedAt: new Date().toISOString(),
    });
  };

  const decreaseQuantity = async (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
    );
    setCart(updatedCart);
    setParentCart(updatedCart);

    const cartRef = doc(db, 'carts', user.uid);
    await updateDoc(cartRef, {
      items: updatedCart,
      updatedAt: new Date().toISOString(),
    });
  };

  const removeItem = async (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    setParentCart(updatedCart);

    const cartRef = doc(db, 'carts', user.uid);
    await updateDoc(cartRef, {
      items: updatedCart,
      updatedAt: new Date().toISOString(),
    });
  };

  const handlePlaceOrder = () => {
    if (!user || !userData) {
      Alert.alert('Error', 'Please log in to place an order.');
      return;
    }

    if (cart.length === 0) {
      Alert.alert('Error', 'Your cart is empty.');
      return;
    }

    if (cart.some((item) => item.stock !== undefined && item.stock < item.quantity)) {
      Alert.alert('Error', 'Cannot place order: Some items exceed available stock.');
      return;
    }

    // Navigate to PlaceOrder screen
    navigation.navigate('PlaceOrder', {
      cart,
      totalPrice,
      userData,
      setCart,
      setParentCart,
    });
  };

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

  const renderItem = ({ item }) => {
    const isOutOfStock = item.stock !== undefined && item.stock < item.quantity;
    // Use the first image from imageUrls, or a fallback image
    const imageUri = item.imageUrls && item.imageUrls.length > 0 ? item.imageUrls[0] : 'https://via.placeholder.com/120';

    return (
      <View style={styles.cartItem}>
        <Image source={{ uri: imageUri }} style={styles.productImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
          {isOutOfStock ? (
            <Text style={styles.outOfStockText}>Out of Stock</Text>
          ) : (
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
                <Ionicons name="remove-circle" size={24} color="#FF6F61" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
                <Ionicons
                  name="add-circle"
                  size={24}
                  color={item.stock && item.quantity >= item.stock ? '#A0AEC0' : '#FF6F61'}
                />
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity onPress={() => removeItem(item.id)}>
            <Text style={styles.removeButton}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  if (loadingCart) {
    return (
      <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF6F61" />
        <Text style={styles.loadingText}>Loading Cart...</Text>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)']}
          style={styles.header}
        >
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={30} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.title}>Cart</Text>
        </LinearGradient>
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty.</Text>}
          showsVerticalScrollIndicator={false}
        />
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 0.8)']}
          style={styles.footer}
        >
          <Text style={styles.totalPrice}>Total: ${totalPrice.toFixed(2)}</Text>
          <TouchableOpacity
            style={[styles.placeOrderButton, cart.length === 0 && styles.disabledButton]}
            onPressIn={() => handlePressIn(placeOrderScale)}
            onPressOut={() => handlePressOut(placeOrderScale)}
            onPress={handlePlaceOrder}
            disabled={cart.length === 0 || placingOrder}
          >
            <Animated.View style={{ transform: [{ scale: placeOrderScale }] }}>
              <LinearGradient
                colors={cart.length > 0 ? ['#FF6F61', '#FF9F1C'] : ['#A0AEC0', '#A0AEC0']}
                style={styles.placeOrderGradient}
              >
                {placingOrder ? (
                  <ActivityIndicator size="small" color="#FFFFFF" />
                ) : (
                  <Text style={styles.placeOrderText}>Place Order</Text>
                )}
              </LinearGradient>
            </Animated.View>
          </TouchableOpacity>
        </LinearGradient>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 10,
    fontWeight: '600',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
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
    // textAlign:"center"
  },
  list: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 120,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginVertical: 10,
    padding: 15,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 15,
    resizeMode: 'cover',
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF6F61',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityText: {
    fontSize: 16,
    color: '#1F2937',
    marginHorizontal: 15,
    fontWeight: '600',
  },
  outOfStockText: {
    fontSize: 14,
    color: '#E53E3E',
    fontWeight: '600',
    marginBottom: 10,
  },
  removeButton: {
    color: '#FF6F61',
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  emptyingText: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 50,
    fontWeight: '500',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: -4 },
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },
  placeOrderButton: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  placeOrderGradient: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.8,
  },
  placeOrderText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});