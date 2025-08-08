// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Alert,
//   TextInput,
// } from 'react-native';
// import { db } from '../firebaseConfig'; // Firebase Firestore setup
// import { collection, getDocs, addDoc } from 'firebase/firestore';
// import { useNavigation } from '@react-navigation/native';
// import * as Random from 'expo-random'; // For generating a random order ID
// import { getAuth } from 'firebase/auth'; // To get the current user's email

// export default function ShopProducts() {
//   const [products, setProducts] = useState([]);
//   const [ratings, setRatings] = useState({});
//   const [selectedRating, setSelectedRating] = useState(null);
//   const navigation = useNavigation();
//   const auth = getAuth();

//   // Fetch all products from Firestore
//   useEffect(() => {
//     const fetchProducts = async () => {
//       const productsCollection = collection(db, 'products');
//       const productSnapshot = await getDocs(productsCollection);
//       const productList = productSnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setProducts(productList);
//     };
//     fetchProducts();
//   }, []);

//   // Function to handle placing an order
//   const handleOrder = async (product) => {
//     const user = auth.currentUser;
//     if (!user) {
//       Alert.alert('Error', 'Please log in to place an order.');
//       return;
//     }

//     // Generate a random order ID
//     const orderId = Random.getRandomBytes(16).toString('hex');

//     try {
//       // Add order details to Firestore
//       const orderRef = collection(db, 'orders');
//       await addDoc(orderRef, {
//         userEmail: user.email,
//         orderId: orderId,
//         productDetails: {
//           name: product.name,
//           price: product.price,
//           description: product.description,
//           imageUrl: product.imageUrl,
//         },
//         rating: selectedRating || 0, // Default to 0 if no rating is selected
//       });

//       Alert.alert('Success', 'Order placed successfully!');
//       setSelectedRating(null); // Clear selected rating
//     } catch (error) {
//       console.error('Error placing order:', error);
//       Alert.alert('Error', 'Failed to place the order. Please try again.');
//     }
//   };

//   // Function to handle product rating
//   const handleRating = (productId, rating) => {
//     setRatings({
//       ...ratings,
//       [productId]: rating,
//     });
//   };

//   // Function to render individual product
//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.productContainer}>
//         <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//         <View style={styles.productDetails}>
//           <Text style={styles.productName}>{item.name}</Text>
//           <Text style={styles.productPrice}>${item.price}</Text>
//           <Text style={styles.productDescription}>{item.description}</Text>

//           {/* Render product rating */}
//           <View style={styles.ratingContainer}>
//             <Text style={styles.ratingText}>Rating: {item.rating || 'No rating yet'}</Text>
//             {[1, 2, 3, 4, 5].map((star) => (
//               <TouchableOpacity
//                 key={star}
//                 onPress={() => handleRating(item.id, star)}
//                 style={[
//                   styles.star,
//                   { color: ratings[item.id] >= star ? '#FFD700' : '#ccc' },
//                 ]}
//               >
//                 ★
//               </TouchableOpacity>
//             ))}
//           </View>

//           {/* Place order button */}
//           <TouchableOpacity
//             style={styles.orderButton}
//             onPress={() => handleOrder(item)}
//           >
//             <Text style={styles.orderButtonText}>Order Now</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Shop Products</Text>
//       <FlatList
//         data={products}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//       />
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
//   productContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     marginBottom: 15,
//   },
//   productImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 8,
//     marginRight: 15,
//   },
//   productDetails: {
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
//   productDescription: {
//     fontSize: 14,
//     color: '#666',
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//   ratingText: {
//     fontSize: 14,
//     marginRight: 10,
//     alignSelf: 'center',
//   },
//   star: {
//     fontSize: 20,
//     marginHorizontal: 2,
//   },
//   orderButton: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   orderButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });



// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
// import { db } from '../firebaseConfig'; // Firebase Firestore setup
// import { collection, getDocs, addDoc } from 'firebase/firestore';
// import { useNavigation } from '@react-navigation/native';
// import { getAuth } from 'firebase/auth'; // To get the current user's email

// export default function ShopProducts() {
//   const [products, setProducts] = useState([]);
//   const auth = getAuth();
//   const navigation = useNavigation();

//   // Fetch all products from Firestore
//   useEffect(() => {
//     const fetchProducts = async () => {
//       const productsCollection = collection(db, 'products');
//       const productSnapshot = await getDocs(productsCollection);
//       const productList = productSnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setProducts(productList);
//     };
//     fetchProducts();
//   }, []);

//   // Function to handle adding to cart
//   const handleAddToCart = async (product) => {
//     const user = auth.currentUser;
//     if (!user) {
//       Alert.alert('Error', 'Please log in to add items to the cart.');
//       return;
//     }

//     try {
//       const cartRef = collection(db, `users/${user.uid}/cart`);
//       await addDoc(cartRef, {
//         productId: product.id,
//         name: product.name,
//         price: product.price,
//         imageUrl: product.imageUrl,
//         description: product.description,
//         quantity: 1, // Default quantity
//       });
//       Alert.alert('Success', 'Product added to cart!');
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       Alert.alert('Error', 'Failed to add the product to the cart. Please try again.');
//     }
//   };

//   // Function to render individual product
//   const renderItem = ({ item }) => (
//     <View style={styles.productContainer}>
//       <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//       <View style={styles.productDetails}>
//         <Text style={styles.productName}>{item.name}</Text>
//         <Text style={styles.productPrice}>${item.price}</Text>
//         <Text style={styles.productDescription}>{item.description}</Text>
//         <TouchableOpacity
//           style={styles.addButton}
//           onPress={() => handleAddToCart(item)}
//         >
//           <Text style={styles.addButtonText}>Add to Cart</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Shop Products</Text>
//       <FlatList
//         data={products}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//       />
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
//   productContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     marginBottom: 15,
//   },
//   productImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 8,
//     marginRight: 15,
//   },
//   productDetails: {
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
//   productDescription: {
//     fontSize: 14,
//     color: '#666',
//   },
//   addButton: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontSize: 16,
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
// import { db } from '../firebaseConfig'; // Firebase Firestore setup
// import { collection, getDocs } from 'firebase/firestore';
// import { useNavigation } from '@react-navigation/native';

// export default function ShopProducts() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const navigation = useNavigation();

//   // Fetch all products from Firestore
//   useEffect(() => {
//     const fetchProducts = async () => {
//       const productsCollection = collection(db, 'products');
//       const productSnapshot = await getDocs(productsCollection);
//       const productList = productSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setProducts(productList);
//     };
//     fetchProducts();
//   }, []);

//   // Add product to the cart
//   const handleAddToCart = (product) => {
//     const existingItem = cart.find((item) => item.id === product.id);
//     if (existingItem) {
//       Alert.alert('Already in Cart', 'This product is already in your cart.');
//       return;
//     }
//     setCart([...cart, { ...product, quantity: 1 }]);
//     Alert.alert('Added to Cart', 'Product added to the cart.');
//   };

//   // Navigate to Cart screen
//   const goToCart = () => {
//     navigation.navigate('Cart', { cart });
//   };

//   // Render individual product
//   const renderItem = ({ item }) => (
//     <View style={styles.productContainer}>
//       <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//       <View style={styles.productDetails}>
//         <Text style={styles.productName}>{item.name}</Text>
//         <Text style={styles.productPrice}>${item.price}</Text>
//         <Text style={styles.productDescription}>{item.description}</Text>

//         <TouchableOpacity
//           style={styles.cartButton}
//           onPress={() => handleAddToCart(item)}
//         >
//           <Text style={styles.cartButtonText}>Add to Cart</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Shop Products</Text>

//       <TouchableOpacity style={styles.cartSummaryButton} onPress={goToCart}>
//         <Text style={styles.cartSummaryText}>Cart ({cart.length})</Text>
//       </TouchableOpacity>

//       <FlatList
//         data={products}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//       />
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
//   productContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     marginBottom: 15,
//   },
//   productImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 8,
//     marginRight: 15,
//   },
//   productDetails: {
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
//   productDescription: {
//     fontSize: 14,
//     color: '#666',
//   },
//   cartButton: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   cartButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   cartSummaryButton: {
//     alignItems: 'center',
//     marginVertical: 10,
//     padding: 10,
//     backgroundColor: '#2196F3',
//     borderRadius: 5,
//   },
//   cartSummaryText: {
//     color: '#fff',
//     fontSize: 16,
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
// import { db } from '../firebaseConfig';
// import { collection, getDocs } from 'firebase/firestore';
// import { useNavigation } from '@react-navigation/native';

// export default function ShopProducts() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const navigation = useNavigation();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const productsCollection = collection(db, 'products');
//       const productSnapshot = await getDocs(productsCollection);
//       const productList = productSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setProducts(productList);
//     };
//     fetchProducts();
//   }, []);

//   const handleAddToCart = (product) => {
//     const existingItem = cart.find((item) => item.id === product.id);
//     if (existingItem) {
//       Alert.alert('Already in Cart', 'This product is already in your cart.');
//       return;
//     }
//     setCart([...cart, { ...product, quantity: 1 }]);
//     Alert.alert('Added to Cart', 'Product added to the cart.');
//   };

//   const goToCart = () => {
//     navigation.navigate('Cart', { cart });
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity style={styles.productCard} onPress={() => handleAddToCart(item)}>
//       <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//       <View style={styles.productDetails}>
//         <Text style={styles.productName}>{item.name}</Text>
//         <Text style={styles.productPrice}>${item.price}</Text>
//         <Text style={styles.productDescription} numberOfLines={2}>
//           {item.description}
//         </Text>
//         <TouchableOpacity style={styles.cartButton}>
//           <Text style={styles.cartButtonText}>Add to Cart</Text>
//         </TouchableOpacity>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Shop Products</Text>
//         <TouchableOpacity style={styles.cartIconButton} onPress={goToCart}>
//           <Image
//             source={require('../assets/user.png')} // Add your cart icon here
//             style={styles.cartIcon}
//           />
//           {cart.length > 0 && (
//             <View style={styles.cartBadge}>
//               <Text style={styles.cartBadgeText}>{cart.length}</Text>
//             </View>
//           )}
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={products}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         numColumns={2} // 2D grid
//         contentContainerStyle={styles.list}
//         showsVerticalScrollIndicator={false}
//       />
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   gradientContainer: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingTop: 50,
//     paddingHorizontal: 20,
//     paddingBottom: 15,
//     backgroundColor: 'rgba(0, 0, 0, 0.3)',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     textShadowColor: 'rgba(0, 0, 0, 0.5)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 4,
//   },
//   cartIconButton: {
//     position: 'relative',
//   },
//   cartIcon: {
//     width: 30,
//     height: 30,
//     tintColor: '#FF5E9B', // Pink tint for consistency
//   },
//   cartBadge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#FF5E9B',
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cartBadgeText: {
//     color: '#FFFFFF',
//     fontSize: 12,
//     fontWeight: '600',
//   },
//   list: {
//     paddingHorizontal: 15,
//     paddingTop: 10,
//     paddingBottom: 20,
//   },
//   productCard: {
//     width: '48%', // Two items per row with spacing
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     margin: 5,
//     overflow: 'hidden',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   productImage: {
//     width: '100%',
//     height: 150,
//     borderTopLeftRadius: 12,
//     borderTopRightRadius: 12,
//   },
//   productDetails: {
//     padding: 10,
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     marginBottom: 5,
//   },
//   productPrice: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#FF5E9B',
//     marginBottom: 5,
//   },
//   productDescription: {
//     fontSize: 12,
//     color: '#D1D1D1',
//     marginBottom: 10,
//   },
//   cartButton: {
//     backgroundColor: '#FF5E9B',
//     paddingVertical: 8,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   cartButtonText: {
//     color: '#FFFFFF',
//     fontSize: 12,
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
//   TextInput,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { db } from '../firebaseConfig';
// import { collection, getDocs } from 'firebase/firestore';
// import { useNavigation } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function ShopProducts() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigation = useNavigation();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const productsCollection = collection(db, 'products');
//       const productSnapshot = await getDocs(productsCollection);
//       const productList = productSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setProducts(productList);
//       setFilteredProducts(productList); // Initially show all products
//     };
//     fetchProducts();
//   }, []);

//   // Filter products based on search query
//   useEffect(() => {
//     const filtered = products.filter((product) =>
//       product.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   }, [searchQuery, products]);

//   const handleAddToCart = (product) => {
//     const existingItem = cart.find((item) => item.id === product.id);
//     if (existingItem) {
//       Alert.alert('Already in Cart', 'This product is already in your cart.');
//       return;
//     }
//     setCart([...cart, { ...product, quantity: 1 }]);
//     Alert.alert('Added to Cart', 'Product added to the cart.');
//   };

//   const goToCart = () => {
//     navigation.navigate('Cart', { cart });
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity style={styles.productCard} onPress={() => handleAddToCart(item)}>
//       <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//       <View style={styles.productDetails}>
//         <Text style={styles.productName}>{item.name}</Text>
//         <Text style={styles.productPrice}>${item.price}</Text>
//         <Text style={styles.productDescription} numberOfLines={2}>
//           {item.description}
//         </Text>
//         <TouchableOpacity style={styles.cartButton}>
//           <Text style={styles.cartButtonText}>Add to Cart</Text>
//         </TouchableOpacity>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
//       <View style={styles.header}>
//         <View style={styles.searchContainer}>
//           <Ionicons name="search" size={24} color="#FF5E9B" style={styles.searchIcon} />
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search products..."
//             placeholderTextColor="#A0A0A0"
//             value={searchQuery}
//             onChangeText={setSearchQuery}
//           />
//         </View>
//         <TouchableOpacity style={styles.cartIconButton} onPress={goToCart}>
//           <Ionicons name="cart" size={30} color="#FF5E9B" />
//           {cart.length > 0 && (
//             <View style={styles.cartBadge}>
//               <Text style={styles.cartBadgeText}>{cart.length}</Text>
//             </View>
//           )}
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={filteredProducts}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         numColumns={2}
//         contentContainerStyle={styles.list}
//         showsVerticalScrollIndicator={false}
//       />
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   gradientContainer: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingTop: 50,
//     paddingHorizontal: 20,
//     paddingBottom: 15,
//     backgroundColor: 'rgba(0, 0, 0, 0.3)',
//   },
//   searchContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     marginRight: 15,
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: '#FFFFFF',
//     paddingVertical: 10,
//   },
//   cartIconButton: {
//     position: 'relative',
//   },
//   cartIcon: {
//     width: 30,
//     height: 30,
//     tintColor: '#FF5E9B',
//   },
//   cartBadge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#FF5E9B',
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cartBadgeText: {
//     color: '#FFFFFF',
//     fontSize: 12,
//     fontWeight: '600',
//   },
//   list: {
//     paddingHorizontal: 15,
//     paddingTop: 10,
//     paddingBottom: 20,
//   },
//   productCard: {
//     width: '48%',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     margin: 5,
//     overflow: 'hidden',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   productImage: {
//     width: '100%',
//     height: 150,
//     borderTopLeftRadius: 12,
//     borderTopRightRadius: 12,
//   },
//   productDetails: {
//     padding: 10,
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     marginBottom: 5,
//   },
//   productPrice: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#FF5E9B',
//     marginBottom: 5,
//   },
//   productDescription: {
//     fontSize: 12,
//     color: '#D1D1D1',
//     marginBottom: 10,
//   },
//   cartButton: {
//     backgroundColor: '#FF5E9B',
//     paddingVertical: 8,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   cartButtonText: {
//     color: '#FFFFFF',
//     fontSize: 12,
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
//   TextInput,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { db } from '../firebaseConfig';
// import { collection, getDocs } from 'firebase/firestore';
// import { useNavigation } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function ShopProducts() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigation = useNavigation();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const productsCollection = collection(db, 'products');
//       const productSnapshot = await getDocs(productsCollection);
//       const productList = productSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setProducts(productList);
//       setFilteredProducts(productList);
//     };
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     const filtered = products.filter((product) =>
//       product.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   }, [searchQuery, products]);

//   const handleAddToCart = (product) => {
//     const existingItem = cart.find((item) => item.id === product.id);
//     if (existingItem) {
//       Alert.alert('Already in Cart', 'This product is already in your cart.');
//       return;
//     }
//     const updatedCart = [...cart, { ...product, quantity: 1 }];
//     setCart(updatedCart);
//     Alert.alert('Added to Cart', 'Product added to the cart.');
//   };

//   const goToCart = () => {
//     navigation.navigate('Cart', { cart });
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.productCard}
//       onPress={() => handleAddToCart(item)}
//       activeOpacity={0.8}
//     >
//       <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//       <View style={styles.productDetails}>
//         <Text style={styles.productName}>{item.name}</Text>
//         <Text style={styles.productPrice}>${item.price}</Text>
//         <Text style={styles.productDescription} numberOfLines={2}>
//           {item.description}
//         </Text>
//         <View style={styles.cartButton}>
//           <Text style={styles.cartButtonText}>Add to Cart</Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
//       <View style={styles.header}>
//         <View style={styles.searchContainer}>
//           <Ionicons name="search" size={24} color="#FF5E9B" style={styles.searchIcon} />
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search products..."
//             placeholderTextColor="#A0A0A0"
//             value={searchQuery}
//             onChangeText={setSearchQuery}
//           />
//         </View>
//         <TouchableOpacity style={styles.cartIconButton} onPress={goToCart}>
//           <Ionicons name="cart" size={30} color="#FF5E9B" />
//           {cart.length > 0 && (
//             <View style={styles.cartBadge}>
//               <Text style={styles.cartBadgeText}>{cart.length}</Text>
//             </View>
//           )}
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={filteredProducts}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         numColumns={2}
//         contentContainerStyle={styles.list}
//         showsVerticalScrollIndicator={false}
//       />
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   gradientContainer: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingTop: 50,
//     paddingHorizontal: 20,
//     paddingBottom: 15,
//     backgroundColor: 'rgba(0, 0, 0, 0.3)',
//   },
//   searchContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     marginRight: 15,
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: '#FFFFFF',
//     paddingVertical: 10,
//   },
//   cartIconButton: {
//     position: 'relative',
//   },
//   cartBadge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#FF5E9B',
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cartBadgeText: {
//     color: '#FFFFFF',
//     fontSize: 12,
//     fontWeight: '600',
//   },
//   list: {
//     paddingHorizontal: 15,
//     paddingTop: 10,
//     paddingBottom: 20,
//   },
//   productCard: {
//     width: '48%',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     margin: 5,
//     overflow: 'hidden',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   productImage: {
//     width: '100%',
//     height: 150,
//     borderTopLeftRadius: 12,
//     borderTopRightRadius: 12,
//   },
//   productDetails: {
//     padding: 10,
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     marginBottom: 5,
//   },
//   productPrice: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#FF5E9B',
//     marginBottom: 5,
//   },
//   productDescription: {
//     fontSize: 12,
//     color: '#D1D1D1',
//     marginBottom: 10,
//   },
//   cartButton: {
//     backgroundColor: '#FF5E9B',
//     paddingVertical: 8,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   cartButtonText: {
//     color: '#FFFFFF',
//     fontSize: 12,
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
//   TextInput,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { db } from '../firebaseConfig';
// import { collection, getDocs } from 'firebase/firestore';
// import { useNavigation } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function ShopProducts() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortOrder, setSortOrder] = useState(null); // null, 'lowToHigh', 'highToLow'
//   const navigation = useNavigation();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const productsCollection = collection(db, 'products');
//       const productSnapshot = await getDocs(productsCollection);
//       const productList = productSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setProducts(productList);
//       setFilteredProducts(productList);
//     };
//     fetchProducts();
//   }, []);

//   // Filter and sort products based on search query and sort order
//   useEffect(() => {
//     let updatedProducts = [...products];

//     // Apply search filter
//     if (searchQuery) {
//       updatedProducts = updatedProducts.filter((product) =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     // Apply sorting
//     if (sortOrder === 'lowToHigh') {
//       updatedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
//     } else if (sortOrder === 'highToLow') {
//       updatedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
//     }

//     setFilteredProducts(updatedProducts);
//   }, [searchQuery, sortOrder, products]);

//   const handleAddToCart = (product) => {
//     const existingItem = cart.find((item) => item.id === product.id);
//     if (existingItem) {
//       Alert.alert('Already in Cart', 'This product is already in your cart.');
//       return;
//     }
//     const updatedCart = [...cart, { ...product, quantity: 1 }];
//     setCart(updatedCart);
//     Alert.alert('Added to Cart', 'Product added to the cart.');
//   };

//   const goToCart = () => {
//     navigation.navigate('Cart', { cart });
//   };

//   const toggleSortOrder = () => {
//     if (!sortOrder) {
//       setSortOrder('lowToHigh');
//     } else if (sortOrder === 'lowToHigh') {
//       setSortOrder('highToLow');
//     } else {
//       setSortOrder(null); // Reset to no sorting
//     }
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.productCard}
//       onPress={() => handleAddToCart(item)}
//       activeOpacity={0.8}
//     >
//       <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//       <View style={styles.productDetails}>
//         <Text style={styles.productName}>{item.name}</Text>
//         <Text style={styles.productPrice}>${item.price}</Text>
//         <Text style={styles.productDescription} numberOfLines={2}>
//           {item.description}
//         </Text>
//         <View style={styles.cartButton}>
//           <Text style={styles.cartButtonText}>Add to Cart</Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
//       <View style={styles.header}>
//         <View style={styles.searchContainer}>
//           <Ionicons name="search" size={24} color="#FF5E9B" style={styles.searchIcon} />
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search products..."
//             placeholderTextColor="#A0A0A0"
//             value={searchQuery}
//             onChangeText={setSearchQuery}
//           />
//         </View>
//         <TouchableOpacity style={styles.filterButton} onPress={toggleSortOrder}>
//           <Ionicons
//             name="filter"
//             size={24}
//             color="#FF5E9B"
//             style={styles.filterIcon}
//           />
//           {sortOrder && (
//             <Ionicons
//               name={sortOrder === 'lowToHigh' ? 'arrow-up' : 'arrow-down'}
//               size={16}
//               color="#FF5E9B"
//               style={styles.sortDirectionIcon}
//             />
//           )}
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.cartIconButton} onPress={goToCart}>
//           <Ionicons name="cart" size={30} color="#FF5E9B" />
//           {cart.length > 0 && (
//             <View style={styles.cartBadge}>
//               <Text style={styles.cartBadgeText}>{cart.length}</Text>
//             </View>
//           )}
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={filteredProducts}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         numColumns={2}
//         contentContainerStyle={styles.list}
//         showsVerticalScrollIndicator={false}
//       />
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   gradientContainer: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingTop: 50,
//     paddingHorizontal: 20,
//     paddingBottom: 15,
//     backgroundColor: 'rgba(0, 0, 0, 0.3)',
//   },
//   searchContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     marginRight: 10,
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: '#FFFFFF',
//     paddingVertical: 10,
//   },
//   filterButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 5,
//     marginRight: 10,
//   },
//   filterIcon: {
//     marginRight: 5,
//   },
//   sortDirectionIcon: {
//     marginLeft: -5, // Adjust overlap with filter icon
//   },
//   cartIconButton: {
//     position: 'relative',
//   },
//   cartBadge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#FF5E9B',
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cartBadgeText: {
//     color: '#FFFFFF',
//     fontSize: 12,
//     fontWeight: '600',
//   },
//   list: {
//     paddingHorizontal: 15,
//     paddingTop: 10,
//     paddingBottom: 20,
//   },
//   productCard: {
//     width: '48%',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     margin: 5,
//     overflow: 'hidden',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   productImage: {
//     width: '100%',
//     height: 150,
//     borderTopLeftRadius: 12,
//     borderTopRightRadius: 12,
//   },
//   productDetails: {
//     padding: 10,
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     marginBottom: 5,
//   },
//   productPrice: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#FF5E9B',
//     marginBottom: 5,
//   },
//   productDescription: {
//     fontSize: 12,
//     color: '#D1D1D1',
//     marginBottom: 10,
//   },
//   cartButton: {
//     backgroundColor: '#FF5E9B',
//     paddingVertical: 8,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   cartButtonText: {
//     color: '#FFFFFF',
//     fontSize: 12,
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
//   TextInput,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { db } from '../firebaseConfig';
// import { collection, getDocs } from 'firebase/firestore';
// import { useNavigation } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function ShopProducts() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [cart, setCart] = useState([]); // Cart state managed here
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortOrder, setSortOrder] = useState(null);
//   const navigation = useNavigation();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const productsCollection = collection(db, 'products');
//       const productSnapshot = await getDocs(productsCollection);
//       const productList = productSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setProducts(productList);
//       setFilteredProducts(productList);
//     };
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     let updatedProducts = [...products];

//     if (searchQuery) {
//       updatedProducts = updatedProducts.filter((product) =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (sortOrder === 'lowToHigh') {
//       updatedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
//     } else if (sortOrder === 'highToLow') {
//       updatedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
//     }

//     setFilteredProducts(updatedProducts);
//   }, [searchQuery, sortOrder, products]);

//   const handleAddToCart = (product) => {
//     const existingItem = cart.find((item) => item.id === product.id);
//     if (existingItem) {
//       Alert.alert('Already in Cart', 'This product is already in your cart.');
//       return;
//     }
//     const updatedCart = [...cart, { ...product, quantity: 1 }];
//     setCart(updatedCart);
//     Alert.alert('Added to Cart', 'Product added to the cart.');
//   };

//   const goToCart = () => {
//     navigation.navigate('Cart', { cart, setCart }); // Pass setCart to Cart screen
//   };

//   const toggleSortOrder = () => {
//     if (!sortOrder) {
//       setSortOrder('lowToHigh');
//     } else if (sortOrder === 'lowToHigh') {
//       setSortOrder('highToLow');
//     } else {
//       setSortOrder(null);
//     }
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.productCard}
//       onPress={() => handleAddToCart(item)}
//       activeOpacity={0.8}
//     >
//       <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//       <View style={styles.productDetails}>
//         <Text style={styles.productName}>{item.name}</Text>
//         <Text style={styles.productPrice}>${item.price}</Text>
//         <Text style={styles.productDescription} numberOfLines={2}>
//           {item.description}
//         </Text>
//         <View style={styles.cartButton}>
//           <Text style={styles.cartButtonText}>Add to Cart</Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
//       <View style={styles.header}>
//         <View style={styles.searchContainer}>
//           <Ionicons name="search" size={24} color="#FF5E9B" style={styles.searchIcon} />
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search products..."
//             placeholderTextColor="#A0A0A0"
//             value={searchQuery}
//             onChangeText={setSearchQuery}
//           />
//         </View>
//         <TouchableOpacity style={styles.filterButton} onPress={toggleSortOrder}>
//           <Ionicons
//             name="filter"
//             size={24}
//             color="#FF5E9B"
//             style={styles.filterIcon}
//           />
//           {sortOrder && (
//             <Ionicons
//               name={sortOrder === 'lowToHigh' ? 'arrow-up' : 'arrow-down'}
//               size={16}
//               color="#FF5E9B"
//               style={styles.sortDirectionIcon}
//             />
//           )}
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.cartIconButton} onPress={goToCart}>
//           <Ionicons name="cart" size={30} color="#FF5E9B" />
//           {cart.length > 0 && (
//             <View style={styles.cartBadge}>
//               <Text style={styles.cartBadgeText}>{cart.length}</Text>
//             </View>
//           )}
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={filteredProducts}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         numColumns={2}
//         contentContainerStyle={styles.list}
//         showsVerticalScrollIndicator={false}
//       />
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   gradientContainer: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingTop: 50,
//     paddingHorizontal: 20,
//     paddingBottom: 15,
//     backgroundColor: 'rgba(0, 0, 0, 0.3)',
//   },
//   searchContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     marginRight: 10,
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: '#FFFFFF',
//     paddingVertical: 10,
//   },
//   filterButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 5,
//     marginRight: 10,
//   },
//   filterIcon: {
//     marginRight: 5,
//   },
//   sortDirectionIcon: {
//     marginLeft: -5,
//   },
//   cartIconButton: {
//     position: 'relative',
//   },
//   cartBadge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#FF5E9B',
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cartBadgeText: {
//     color: '#FFFFFF',
//     fontSize: 12,
//     fontWeight: '600',
//   },
//   list: {
//     paddingHorizontal: 15,
//     paddingTop: 10,
//     paddingBottom: 20,
//   },
//   productCard: {
//     width: '48%',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     margin: 5,
//     overflow: 'hidden',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   productImage: {
//     width: '100%',
//     height: 150,
//     borderTopLeftRadius: 12,
//     borderTopRightRadius: 12,
//   },
//   productDetails: {
//     padding: 10,
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     marginBottom: 5,
//   },
//   productPrice: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#FF5E9B',
//     marginBottom: 5,
//   },
//   productDescription: {
//     fontSize: 12,
//     color: '#D1D1D1',
//     marginBottom: 10,
//   },
//   cartButton: {
//     backgroundColor: '#FF5E9B',
//     paddingVertical: 8,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   cartButtonText: {
//     color: '#FFFFFF',
//     fontSize: 12,
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
//   TextInput,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { db, auth } from '../firebaseConfig';
// import { collection, getDocs, doc, setDoc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
// import { useNavigation } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function ShopProducts() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortOrder, setSortOrder] = useState(null);
//   const navigation = useNavigation();
//   const user = auth.currentUser;

//   useEffect(() => {
//     if (!user) return;

//     // Fetch products
//     const fetchProducts = async () => {
//       const productsCollection = collection(db, 'products');
//       const productSnapshot = await getDocs(productsCollection);
//       const productList = productSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setProducts(productList);
//       setFilteredProducts(productList);
//     };

//     // Fetch user's cart
//     const fetchCart = async () => {
//       const cartRef = doc(db, 'carts', user.uid);
//       const cartSnap = await getDoc(cartRef);
//       if (cartSnap.exists()) {
//         setCart(cartSnap.data().items || []);
//       } else {
//         setCart([]);
//       }
//     };

//     fetchProducts();
//     fetchCart();
//   }, [user]);

//   useEffect(() => {
//     let updatedProducts = [...products];

//     if (searchQuery) {
//       updatedProducts = updatedProducts.filter((product) =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (sortOrder === 'lowToHigh') {
//       updatedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
//     } else if (sortOrder === 'highToLow') {
//       updatedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
//     }

//     setFilteredProducts(updatedProducts);
//   }, [searchQuery, sortOrder, products]);

//   const handleAddToCart = async (product) => {
//     if (!user) {
//       Alert.alert('Error', 'Please log in to add items to your cart.');
//       return;
//     }

//     const cartRef = doc(db, 'carts', user.uid);
//     const existingItem = cart.find((item) => item.id === product.id);

//     if (existingItem) {
//       Alert.alert('Already in Cart', 'This product is already in your cart.');
//       return;
//     }

//     const newItem = { ...product, quantity: 1 };
//     const updatedCart = [...cart, newItem];

//     try {
//       const cartSnap = await getDoc(cartRef);
//       if (cartSnap.exists()) {
//         await updateDoc(cartRef, {
//           items: arrayUnion(newItem),
//           updatedAt: new Date().toISOString(),
//         });
//       } else {
//         await setDoc(cartRef, {
//           userId: user.uid,
//           items: [newItem],
//           updatedAt: new Date().toISOString(),
//         });
//       }
//       setCart(updatedCart);
//       Alert.alert('Added to Cart', 'Product added to your cart.');
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       Alert.alert('Error', 'Failed to add product to cart.');
//     }
//   };

//   const goToCart = () => {
//     navigation.navigate('Cart', { cart, setCart });
//   };

//   const toggleSortOrder = () => {
//     if (!sortOrder) {
//       setSortOrder('lowToHigh');
//     } else if (sortOrder === 'lowToHigh') {
//       setSortOrder('highToLow');
//     } else {
//       setSortOrder(null);
//     }
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.productCard}
//       onPress={() => handleAddToCart(item)}
//       activeOpacity={0.8}
//     >
//       <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//       <View style={styles.productDetails}>
//         <Text style={styles.productName}>{item.name}</Text>
//         <Text style={styles.productPrice}>${item.price}</Text>
//         <Text style={styles.productDescription} numberOfLines={2}>
//           {item.description}
//         </Text>
//         <View style={styles.cartButton}>
//           <Text style={styles.cartButtonText}>Add to Cart</Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
//       <View style={styles.header}>
//         <View style={styles.searchContainer}>
//           <Ionicons name="search" size={24} color="#FF5E9B" style={styles.searchIcon} />
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search products..."
//             placeholderTextColor="#A0A0A0"
//             value={searchQuery}
//             onChangeText={setSearchQuery}
//           />
//         </View>
//         <TouchableOpacity style={styles.filterButton} onPress={toggleSortOrder}>
//           <Ionicons name="filter" size={24} color="#FF5E9B" style={styles.filterIcon} />
//           {sortOrder && (
//             <Ionicons
//               name={sortOrder === 'lowToHigh' ? 'arrow-up' : 'arrow-down'}
//               size={16}
//               color="#FF5E9B"
//               style={styles.sortDirectionIcon}
//             />
//           )}
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.cartIconButton} onPress={goToCart}>
//           <Ionicons name="cart" size={30} color="#FF5E9B" />
//           {cart.length > 0 && (
//             <View style={styles.cartBadge}>
//               <Text style={styles.cartBadgeText}>{cart.length}</Text>
//             </View>
//           )}
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={filteredProducts}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         numColumns={2}
//         contentContainerStyle={styles.list}
//         showsVerticalScrollIndicator={false}
//       />
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   gradientContainer: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingTop: 50,
//     paddingHorizontal: 20,
//     paddingBottom: 15,
//     backgroundColor: 'rgba(0, 0, 0, 0.3)',
//   },
//   searchContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     marginRight: 10,
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: '#FFFFFF',
//     paddingVertical: 10,
//   },
//   filterButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 5,
//     marginRight: 10,
//   },
//   filterIcon: {
//     marginRight: 5,
//   },
//   sortDirectionIcon: {
//     marginLeft: -5,
//   },
//   cartIconButton: {
//     position: 'relative',
//   },
//   cartBadge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#FF5E9B',
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cartBadgeText: {
//     color: '#FFFFFF',
//     fontSize: 12,
//     fontWeight: '600',
//   },
//   list: {
//     paddingHorizontal: 15,
//     paddingTop: 10,
//     paddingBottom: 20,
//   },
//   productCard: {
//     width: '48%',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     margin: 5,
//     overflow: 'hidden',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   productImage: {
//     width: '100%',
//     height: 150,
//     borderTopLeftRadius: 12,
//     borderTopRightRadius: 12,
//   },
//   productDetails: {
//     padding: 10,
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     marginBottom: 5,
//   },
//   productPrice: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#FF5E9B',
//     marginBottom: 5,
//   },
//   productDescription: {
//     fontSize: 12,
//     color: '#D1D1D1',
//     marginBottom: 10,
//   },
//   cartButton: {
//     backgroundColor: '#FF5E9B',
//     paddingVertical: 8,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   cartButtonText: {
//     color: '#FFFFFF',
//     fontSize: 12,
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
//   TextInput,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { db, auth } from '../firebaseConfig';
// import { collection, getDocs, doc, setDoc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
// import { useNavigation, useIsFocused } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function ShopProducts() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortOrder, setSortOrder] = useState(null);
//   const navigation = useNavigation();
//   const user = auth.currentUser;
//   const isFocused = useIsFocused(); // Detect when screen is focused

//   useEffect(() => {
//     if (!user) return;

//     // Fetch products
//     const fetchProducts = async () => {
//       const productsCollection = collection(db, 'products');
//       const productSnapshot = await getDocs(productsCollection);
//       const productList = productSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//         ratings: doc.data().ratings || 0, // Default to 0 if no ratings
//       }));
//       setProducts(productList);
//       setFilteredProducts(productList);
//     };

//     // Fetch user's cart
//     const fetchCart = async () => {
//       const cartRef = doc(db, 'carts', user.uid);
//       const cartSnap = await getDoc(cartRef);
//       if (cartSnap.exists()) {
//         setCart(cartSnap.data().items || []);
//       } else {
//         setCart([]);
//       }
//     };

//     fetchProducts();
//     fetchCart();
//   }, [user, isFocused]); // Refetch cart when screen is focused

//   useEffect(() => {
//     let updatedProducts = [...products];

//     if (searchQuery) {
//       updatedProducts = updatedProducts.filter((product) =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (sortOrder === 'lowToHigh') {
//       updatedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
//     } else if (sortOrder === 'highToLow') {
//       updatedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(b.price));
//     }

//     setFilteredProducts(updatedProducts);
//   }, [searchQuery, sortOrder, products]);

//   const handleAddToCart = async (product) => {
//     if (!user) {
//       Alert.alert('Error', 'Please log in to add items to your cart.');
//       return;
//     }

//     const cartRef = doc(db, 'carts', user.uid);
//     const existingItem = cart.find((item) => item.id === product.id);

//     if (existingItem) {
//       Alert.alert('Already in Cart', 'This product is already in your cart.');
//       return;
//     }

//     const newItem = { ...product, quantity: 1 };
//     const updatedCart = [...cart, newItem];

//     try {
//       const cartSnap = await getDoc(cartRef);
//       if (cartSnap.exists()) {
//         await updateDoc(cartRef, {
//           items: arrayUnion(newItem),
//           updatedAt: new Date().toISOString(),
//         });
//       } else {
//         await setDoc(cartRef, {
//           userId: user.uid,
//           items: [newItem],
//           updatedAt: new Date().toISOString(),
//         });
//       }
//       setCart(updatedCart);
//       Alert.alert('Added to Cart', 'Product added to your cart.');
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       Alert.alert('Error', 'Failed to add product to cart.');
//     }
//   };

//   const goToCart = () => {
//     navigation.navigate('Cart', { cart, setCart });
//   };

//   const toggleSortOrder = () => {
//     if (!sortOrder) {
//       setSortOrder('lowToHigh');
//     } else if (sortOrder === 'lowToHigh') {
//       setSortOrder('highToLow');
//     } else {
//       setSortOrder(null);
//     }
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.productCard}
//       onPress={() => navigation.navigate('ProductDetail', { products, cart, setCart, handleAddToCart })}
//       activeOpacity={0.8}
//     >
//       <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//       <View style={styles.productDetails}>
//         <Text style={styles.productName}>{item.name}</Text>
//         <Text style={styles.productPrice}>${item.price}</Text>
//         <View style={styles.ratingsContainer}>
//           {[...Array(5)].map((_, index) => (
//             <Ionicons
//               key={index}
//               name={index < Math.round(item.ratings) ? 'star' : 'star-outline'}
//               size={16}
//               color="#FF5E9B"
//             />
//           ))}
//           <Text style={styles.ratingsText}>({item.ratings.toFixed(1)})</Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
//       <View style={styles.header}>
//         <View style={styles.searchContainer}>
//           <Ionicons name="search" size={24} color="#FF5E9B" style={styles.searchIcon} />
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search products..."
//             placeholderTextColor="#A0A0A0"
//             value={searchQuery}
//             onChangeText={setSearchQuery}
//           />
//         </View>
//         <TouchableOpacity style={styles.filterButton} onPress={toggleSortOrder}>
//           <Ionicons name="filter" size={24} color="#FF5E9B" style={styles.filterIcon} />
//           {sortOrder && (
//             <Ionicons
//               name={sortOrder === 'lowToHigh' ? 'arrow-up' : 'arrow-down'}
//               size={16}
//               color="#FF5E9B"
//               style={styles.sortDirectionIcon}
//             />
//           )}
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.cartIconButton} onPress={goToCart}>
//           <Ionicons name="cart" size={30} color="#FF5E9B" />
//           {cart.length > 0 && (
//             <View style={styles.cartBadge}>
//               <Text style={styles.cartBadgeText}>{cart.length}</Text>
//             </View>
//           )}
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={filteredProducts}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         numColumns={2}
//         contentContainerStyle={styles.list}
//         showsVerticalScrollIndicator={false}
//       />
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   gradientContainer: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingTop: 50,
//     paddingHorizontal: 20,
//     paddingBottom: 15,
//     backgroundColor: 'rgba(0, 0, 0, 0.3)',
//   },
//   searchContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     marginRight: 10,
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: '#FFFFFF',
//     paddingVertical: 10,
//   },
//   filterButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 5,
//     marginRight: 10,
//   },
//   filterIcon: {
//     marginRight: 5,
//   },
//   sortDirectionIcon: {
//     marginLeft: -5,
//   },
//   cartIconButton: {
//     position: 'relative',
//   },
//   cartBadge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#FF5E9B',
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cartBadgeText: {
//     color: '#FFFFFF',
//     fontSize: 12,
//     fontWeight: '600',
//   },
//   list: {
//     paddingHorizontal: 15,
//     paddingTop: 10,
//     paddingBottom: 20,
//   },
//   productCard: {
//     width: '48%',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     margin: 5,
//     overflow: 'hidden',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   productImage: {
//     width: '100%',
//     height: 150,
//     borderTopLeftRadius: 12,
//     borderTopRightRadius: 12,
//   },
//   productDetails: {
//     padding: 10,
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     marginBottom: 5,
//   },
//   productPrice: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#FF5E9B',
//     marginBottom: 5,
//   },
//   ratingsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   ratingsText: {
//     color: '#D1D1D1',
//     fontSize: 12,
//     marginLeft: 5,
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
//   TextInput,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { db, auth } from '../firebaseConfig';
// import { collection, getDocs, doc, setDoc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
// import { useNavigation, useIsFocused } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function ShopProducts() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortOrder, setSortOrder] = useState(null);
//   const navigation = useNavigation();
//   const user = auth.currentUser;
//   const isFocused = useIsFocused();

//   useEffect(() => {
//     if (!user) return;

//     const fetchProducts = async () => {
//       try {
//         const productsCollection = collection(db, 'products');
//         const productSnapshot = await getDocs(productsCollection);
//         const productList = productSnapshot.docs.map((doc) => {
//           const data = doc.data();
//           return {
//             id: doc.id,
//             ...data,
//             price: parseFloat(data.price) || 0, // Parse price to number
//             ratings: data.ratings !== undefined ? data.ratings : 0, // Ensure ratings is a number
//             stock: parseInt(data.stock, 10) || 0, // Parse stock to number
//           };
//         });
//         console.log('Fetched Products:', productList); // Debug log
//         setProducts(productList);
//         setFilteredProducts(productList);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         Alert.alert('Error', 'Failed to load products.');
//       }
//     };

//     const fetchCart = async () => {
//       const cartRef = doc(db, 'carts', user.uid);
//       const cartSnap = await getDoc(cartRef);
//       if (cartSnap.exists()) {
//         setCart(cartSnap.data().items || []);
//       } else {
//         setCart([]);
//       }
//     };

//     fetchProducts();
//     fetchCart();
//   }, [user, isFocused]);

//   useEffect(() => {
//     let updatedProducts = [...products];

//     if (searchQuery) {
//       updatedProducts = updatedProducts.filter((product) =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (sortOrder === 'lowToHigh') {
//       updatedProducts.sort((a, b) => a.price - b.price); // Already numbers
//     } else if (sortOrder === 'highToLow') {
//       updatedProducts.sort((a, b) => b.price - a.price);
//     }

//     setFilteredProducts(updatedProducts);
//   }, [searchQuery, sortOrder, products]);

//   const handleAddToCart = async (product) => {
//     if (!user) {
//       Alert.alert('Error', 'Please log in to add items to your cart.');
//       return;
//     }

//     if (product.stock <= 0) {
//       Alert.alert('Out of Stock', 'This product is currently unavailable.');
//       return;
//     }

//     const cartRef = doc(db, 'carts', user.uid);
//     const existingItem = cart.find((item) => item.id === product.id);

//     if (existingItem) {
//       Alert.alert('Already in Cart', 'This product is already in your cart.');
//       return;
//     }

//     const newItem = { ...product, quantity: 1 };
//     const updatedCart = [...cart, newItem];

//     try {
//       const cartSnap = await getDoc(cartRef);
//       if (cartSnap.exists()) {
//         await updateDoc(cartRef, {
//           items: arrayUnion(newItem),
//           updatedAt: new Date().toISOString(),
//         });
//       } else {
//         await setDoc(cartRef, {
//           userId: user.uid,
//           items: [newItem],
//           updatedAt: new Date().toISOString(),
//         });
//       }
//       setCart(updatedCart);
//       Alert.alert('Added to Cart', 'Product added to your cart.');
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       Alert.alert('Error', 'Failed to add product to cart.');
//     }
//   };

//   const goToCart = () => {
//     navigation.navigate('Cart', { cart, setCart });
//   };

//   const toggleSortOrder = () => {
//     if (!sortOrder) {
//       setSortOrder('lowToHigh');
//     } else if (sortOrder === 'lowToHigh') {
//       setSortOrder('highToLow');
//     } else {
//       setSortOrder(null);
//     }
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={[styles.productCard, item.stock === 0 && styles.outOfStockCard]}
//       onPress={() => navigation.navigate('ProductDetail', { product: item, cart, setCart, handleAddToCart })}
//       activeOpacity={0.8}
//       disabled={item.stock === 0} // Disable interaction if out of stock
//     >
//       <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//       <View style={styles.productDetails}>
//         <Text style={styles.productName}>{item.name}</Text>
//         <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
//         <View style={styles.ratingsContainer}>
//           {[...Array(5)].map((_, index) => (
//             <Ionicons
//               key={index}
//               name={index < Math.round(item.ratings) ? 'star' : 'star-outline'}
//               size={16}
//               color="#FF5E9B"
//             />
//           ))}
//           <Text style={styles.ratingsText}>
//             ({typeof item.ratings === 'number' ? item.ratings.toFixed(1) : '0.0'})
//           </Text>
//         </View>
//         {item.stock === 0 && <Text style={styles.outOfStockText}>Out of Stock</Text>}
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
//       <View style={styles.header}>
//         <View style={styles.searchContainer}>
//           <Ionicons name="search" size={24} color="#FF5E9B" style={styles.searchIcon} />
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search products..."
//             placeholderTextColor="#A0A0A0"
//             value={searchQuery}
//             onChangeText={setSearchQuery}
//           />
//         </View>
//         <TouchableOpacity style={styles.filterButton} onPress={toggleSortOrder}>
//           <Ionicons name="filter" size={24} color="#FF5E9B" style={styles.filterIcon} />
//           {sortOrder && (
//             <Ionicons
//               name={sortOrder === 'lowToHigh' ? 'arrow-up' : 'arrow-down'}
//               size={16}
//               color="#FF5E9B"
//               style={styles.sortDirectionIcon}
//             />
//           )}
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.cartIconButton} onPress={goToCart}>
//           <Ionicons name="cart" size={30} color="#FF5E9B" />
//           {cart.length > 0 && (
//             <View style={styles.cartBadge}>
//               <Text style={styles.cartBadgeText}>{cart.length}</Text>
//             </View>
//           )}
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={filteredProducts}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         numColumns={2}
//         contentContainerStyle={styles.list}
//         showsVerticalScrollIndicator={false}
//       />
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   gradientContainer: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingTop: 50,
//     paddingHorizontal: 20,
//     paddingBottom: 15,
//     backgroundColor: 'rgba(0, 0, 0, 0.3)',
//   },
//   searchContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     marginRight: 10,
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: '#FFFFFF',
//     paddingVertical: 10,
//   },
//   filterButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 5,
//     marginRight: 10,
//   },
//   filterIcon: {
//     marginRight: 5,
//   },
//   sortDirectionIcon: {
//     marginLeft: -5,
//   },
//   cartIconButton: {
//     position: 'relative',
//   },
//   cartBadge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#FF5E9B',
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cartBadgeText: {
//     color: '#FFFFFF',
//     fontSize: 12,
//     fontWeight: '600',
//   },
//   list: {
//     paddingHorizontal: 15,
//     paddingTop: 10,
//     paddingBottom: 20,
//   },
//   productCard: {
//     width: '48%',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     margin: 5,
//     overflow: 'hidden',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   outOfStockCard: {
//     backgroundColor: 'rgba(160, 160, 160, 0.2)', // Grayed out for out-of-stock items
//   },
//   productImage: {
//     width: '100%',
//     height: 150,
//     borderTopLeftRadius: 12,
//     borderTopRightRadius: 12,
//   },
//   productDetails: {
//     padding: 10,
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     marginBottom: 5,
//   },
//   productPrice: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#FF5E9B',
//     marginBottom: 5,
//   },
//   ratingsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   ratingsText: {
//     color: '#D1D1D1',
//     fontSize: 12,
//     marginLeft: 5,
//   },
//   outOfStockText: {
//     fontSize: 12,
//     color: '#FF4444',
//     fontWeight: '600',
//     marginTop: 5,
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
//   TextInput,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { db, auth } from '../firebaseConfig';
// import { collection, getDocs, doc, setDoc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
// import { useNavigation, useIsFocused } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function ShopProducts() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortOrder, setSortOrder] = useState(null);
//   const navigation = useNavigation();
//   const user = auth.currentUser;
//   const isFocused = useIsFocused();

//   useEffect(() => {
//     if (!user) return;

//     const fetchProducts = async () => {
//       try {
//         const productsCollection = collection(db, 'products');
//         const productSnapshot = await getDocs(productsCollection);
//         const productList = productSnapshot.docs.map((doc) => {
//           const data = doc.data();
//           return {
//             id: doc.id,
//             ...data,
//             price: parseFloat(data.price) || 0, // Parse price to number
//             ratings: data.ratings !== undefined ? data.ratings : 0, // Ensure ratings is a number
//             stock: parseInt(data.stock, 10) || 0, // Parse stock to number
//           };
//         });
//         console.log('Fetched Products:', productList); // Debug log
//         setProducts(productList);
//         setFilteredProducts(productList);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         Alert.alert('Error', 'Failed to load products.');
//       }
//     };

//     const fetchCart = async () => {
//       const cartRef = doc(db, 'carts', user.uid);
//       const cartSnap = await getDoc(cartRef);
//       if (cartSnap.exists()) {
//         setCart(cartSnap.data().items || []);
//       } else {
//         setCart([]);
//       }
//     };

//     fetchProducts();
//     fetchCart();
//   }, [user, isFocused]);

//   useEffect(() => {
//     let updatedProducts = [...products];

//     if (searchQuery) {
//       updatedProducts = updatedProducts.filter((product) =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (sortOrder === 'lowToHigh') {
//       updatedProducts.sort((a, b) => a.price - b.price); // Already numbers
//     } else if (sortOrder === 'highToLow') {
//       updatedProducts.sort((a, b) => b.price - a.price);
//     }

//     setFilteredProducts(updatedProducts);
//   }, [searchQuery, sortOrder, products]);

//   const handleAddToCart = async (product) => {
//     if (!user) {
//       Alert.alert('Error', 'Please log in to add items to your cart.');
//       return;
//     }

//     if (product.stock <= 0) {
//       Alert.alert('Out of Stock', 'This product is currently unavailable.');
//       return;
//     }

//     const cartRef = doc(db, 'carts', user.uid);
//     const existingItem = cart.find((item) => item.id === product.id);

//     if (existingItem) {
//       Alert.alert('Already in Cart', 'This product is already in your cart.');
//       return;
//     }

//     const newItem = { ...product, quantity: 1 };
//     const updatedCart = [...cart, newItem];

//     try {
//       const cartSnap = await getDoc(cartRef);
//       if (cartSnap.exists()) {
//         await updateDoc(cartRef, {
//           items: arrayUnion(newItem),
//           updatedAt: new Date().toISOString(),
//         });
//       } else {
//         await setDoc(cartRef, {
//           userId: user.uid,
//           items: [newItem],
//           updatedAt: new Date().toISOString(),
//         });
//       }
//       setCart(updatedCart);
//       Alert.alert('Added to Cart', 'Product added to your cart.');
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       Alert.alert('Error', 'Failed to add product to cart.');
//     }
//   };

//   const goToCart = () => {
//     navigation.navigate('Cart', { cart, setCart });
//   };

//   const toggleSortOrder = () => {
//     if (!sortOrder) {
//       setSortOrder('lowToHigh');
//     } else if (sortOrder === 'lowToHigh') {
//       setSortOrder('highToLow');
//     } else {
//       setSortOrder(null);
//     }
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={[styles.productCard, item.stock === 0 && styles.outOfStockCard]}
//       onPress={() => navigation.navigate('ProductDetail', { product: item, cart, setCart, handleAddToCart })}
//       activeOpacity={0.8}
//       disabled={item.stock === 0} // Disable interaction if out of stock
//     >
//       <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//       <View style={styles.productDetails}>
//         <Text style={styles.productName}>{item.name}</Text>
//         <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
//         <View style={styles.ratingsContainer}>
//           {[...Array(5)].map((_, index) => (
//             <Ionicons
//               key={index}
//               name={index < Math.round(item.ratings) ? 'star' : 'star-outline'}
//               size={16}
//               color="white" // Changed from #FF5E9B to #A84CF2
//             />
//           ))}
//           <Text style={styles.ratingsText}>
//             ({typeof item.ratings === 'number' ? item.ratings.toFixed(1) : '0.0'})
//           </Text>
//         </View>
//         {item.stock === 0 && <Text style={styles.outOfStockText}>Out of Stock</Text>}
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       {/* <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" /> */}
//       <View style={styles.header}>
//         <View style={styles.searchContainer}>
//           <Ionicons name="search" size={24} color="#A84CF2" style={styles.searchIcon} /> {/* Changed to #A84CF2 */}
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search products..."
//             placeholderTextColor="#A0A0A0"
//             value={searchQuery}
//             onChangeText={setSearchQuery}
//           />
//         </View>
//         <TouchableOpacity style={styles.filterButton} onPress={toggleSortOrder}>
//           <Ionicons name="filter" size={24} color="#A84CF2" style={styles.filterIcon} /> {/* Changed to #A84CF2 */}
//           {sortOrder && (
//             <Ionicons
//               name={sortOrder === 'lowToHigh' ? 'arrow-up' : 'arrow-down'}
//               size={16}
//               color="#A84CF2" // Changed to #A84CF2
//               style={styles.sortDirectionIcon}
//             />
//           )}
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.cartIconButton} onPress={goToCart}>
//           <Ionicons name="cart" size={30} color="#A84CF2" /> {/* Changed to #A84CF2 */}
//           {cart.length > 0 && (
//             <View style={styles.cartBadge}>
//               <Text style={styles.cartBadgeText}>{cart.length}</Text>
//             </View>
//           )}
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={filteredProducts}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         numColumns={2}
//         contentContainerStyle={styles.list}
//         showsVerticalScrollIndicator={false}
//       />
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
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingTop: 50,
//     paddingHorizontal: 20,
//     paddingBottom: 15,
   
//   },
//   searchContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.2)', 
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     marginRight: 10,
//     borderWidth:1,
//     borderColor:"#A84CF2"
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: '#333333', // Changed to dark gray for white background
//     paddingVertical: 10,
//   },
//   filterButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 5,
//     marginRight: 10,
//   },
//   filterIcon: {
//     marginRight: 5,
//   },
//   sortDirectionIcon: {
//     marginLeft: -5,
//   },
//   cartIconButton: {
//     position: 'relative',
//   },
//   cartBadge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#A84CF2', // Changed from #FF5E9B to #A84CF2
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cartBadgeText: {
//     color: '#FFFFFF',
//     fontSize: 12,
//     fontWeight: '600',
//   },
//   list: {
//     paddingHorizontal: 15,
//     paddingTop: 10,
//     paddingBottom: 20,
//   },
//   productCard: {
//     width: '48%',
//     // backgroundColor: 'rgba(255, 255, 255, 0.2)', // Adjusted for white background contrast
//     backgroundColor:"#A84CF2",
//     borderRadius: 12,
//     margin: 5,
//     overflow: 'hidden',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   outOfStockCard: {
//     backgroundColor: 'rgba(160, 160, 160, 0.2)', // Grayed out for out-of-stock items
//   },
//   productImage: {
//     width: '100%',
//     height: 150,
//     borderTopLeftRadius: 12,
//     borderTopRightRadius: 12,
//   },
//   productDetails: {
//     padding: 10,
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333333', // Changed to dark gray for white background
//     marginBottom: 5,
//   },
//   productPrice: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: 'white', // Changed from #FF5E9B to #A84CF2
//     marginBottom: 5,
//   },
//   ratingsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   ratingsText: {
//     // color: '#666666', // Changed to medium gray for white background
//     color:"white",
//     fontSize: 12,
//     marginLeft: 5,
//   },
//   outOfStockText: {
//     fontSize: 12,
//     color: '#FF4444',
//     fontWeight: '600',
//     marginTop: 5,
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
//   TextInput,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { db, auth } from '../firebaseConfig';
// import { collection, getDocs, doc, setDoc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
// import { useNavigation, useIsFocused } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function ShopProducts() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortOrder, setSortOrder] = useState(null);
//   const navigation = useNavigation();
//   const user = auth.currentUser;
//   const isFocused = useIsFocused();

//   useEffect(() => {
//     if (!user) return;

//     const fetchProducts = async () => {
//       try {
//         const productsCollection = collection(db, 'products');
//         const productSnapshot = await getDocs(productsCollection);
//         const productList = productSnapshot.docs.map((doc) => {
//           const data = doc.data();
//           return {
//             id: doc.id,
//             ...data,
//             price: parseFloat(data.price) || 0,
//             ratings: data.ratings !== undefined ? data.ratings : 0,
//             stock: parseInt(data.stock, 10) || 0,
//           };
//         });
//         console.log('Fetched Products:', productList);
//         setProducts(productList);
//         setFilteredProducts(productList);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         Alert.alert('Error', 'Failed to load products.');
//       }
//     };

//     const fetchCart = async () => {
//       const cartRef = doc(db, 'carts', user.uid);
//       const cartSnap = await getDoc(cartRef);
//       if (cartSnap.exists()) {
//         setCart(cartSnap.data().items || []);
//       } else {
//         setCart([]);
//       }
//     };

//     fetchProducts();
//     fetchCart();
//   }, [user, isFocused]);

//   useEffect(() => {
//     let updatedProducts = [...products];

//     if (searchQuery) {
//       updatedProducts = updatedProducts.filter((product) =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (sortOrder === 'lowToHigh') {
//       updatedProducts.sort((a, b) => a.price - b.price);
//     } else if (sortOrder === 'highToLow') {
//       updatedProducts.sort((a, b) => b.price - a.price);
//     }

//     setFilteredProducts(updatedProducts);
//   }, [searchQuery, sortOrder, products]);

//   const handleAddToCart = async (product) => {
//     if (!user) {
//       Alert.alert('Error', 'Please log in to add items to your cart.');
//       return;
//     }

//     if (product.stock <= 0) {
//       Alert.alert('Out of Stock', 'This product is currently unavailable.');
//       return;
//     }

//     const cartRef = doc(db, 'carts', user.uid);
//     const existingItem = cart.find((item) => item.id === product.id);

//     if (existingItem) {
//       Alert.alert('Already in Cart', 'This product is already in your cart.');
//       return;
//     }

//     const newItem = { ...product, quantity: 1 };
//     const updatedCart = [...cart, newItem];

//     try {
//       const cartSnap = await getDoc(cartRef);
//       if (cartSnap.exists()) {
//         await updateDoc(cartRef, {
//           items: arrayUnion(newItem),
//           updatedAt: new Date().toISOString(),
//         });
//       } else {
//         await setDoc(cartRef, {
//           userId: user.uid,
//           items: [newItem],
//           updatedAt: new Date().toISOString(),
//         });
//       }
//       setCart(updatedCart);
//       Alert.alert('Added to Cart', 'Product added to your cart.');
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       Alert.alert('Error', 'Failed to add product to cart.');
//     }
//   };

//   const goToCart = () => {
//     navigation.navigate('Cart', { cart, setCart });
//   };

//   const toggleSortOrder = () => {
//     if (!sortOrder) {
//       setSortOrder('lowToHigh');
//     } else if (sortOrder === 'lowToHigh') {
//       setSortOrder('highToLow');
//     } else {
//       setSortOrder(null);
//     }
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={[styles.productCard, item.stock === 0 && styles.outOfStockCard]}
//       onPress={() => navigation.navigate('ProductDetail', { product: item, cart, setCart, handleAddToCart })}
//       activeOpacity={0.8}
//       disabled={item.stock === 0}
//     >
//       <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//       <View style={styles.productDetails}>
//         <Text style={styles.productName}>{item.name}</Text>
//         <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
//         <View style={styles.ratingsContainer}>
//           {[...Array(5)].map((_, index) => (
//             <Ionicons
//               key={index}
//               name={index < Math.round(item.ratings) ? 'star' : 'star-outline'}
//               size={16}
//               color="#FFD700" // Gold stars
//             />
//           ))}
//           <Text style={styles.ratingsText}>
//             ({typeof item.ratings === 'number' ? item.ratings.toFixed(1) : '0.0'})
//           </Text>
//         </View>
//         {item.stock === 0 && <Text style={styles.outOfStockText}>Out of Stock</Text>}
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <View style={styles.searchContainer}>
//           <Ionicons name="search" size={24} color="#4A90E2" style={styles.searchIcon} />
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search products..."
//             placeholderTextColor="#A0AEC0"
//             value={searchQuery}
//             onChangeText={setSearchQuery}
//           />
//         </View>
//         <TouchableOpacity style={styles.filterButton} onPress={toggleSortOrder}>
//           <Ionicons name="filter" size={24} color="#4A90E2" style={styles.filterIcon} />
//           {sortOrder && (
//             <Ionicons
//               name={sortOrder === 'lowToHigh' ? 'arrow-up' : 'arrow-down'}
//               size={16}
//               color="#4A90E2"
//               style={styles.sortDirectionIcon}
//             />
//           )}
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.cartIconButton} onPress={goToCart}>
//           <Ionicons name="cart" size={30} color="#4A90E2" />
//           {cart.length > 0 && (
//             <View style={styles.cartBadge}>
//               <Text style={styles.cartBadgeText}>{cart.length}</Text>
//             </View>
//           )}
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={filteredProducts}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         numColumns={2}
//         contentContainerStyle={styles.list}
//         showsVerticalScrollIndicator={false}
//       />
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
//     justifyContent: 'space-between',
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
//   searchContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F9FAFB',
//     borderRadius: 30,
//     paddingHorizontal: 15,
//     marginRight: 10,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.05,
//     shadowRadius: 3,
//     shadowOffset: { width: 0, height: 1 },
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: '#2D3748',
//     paddingVertical: 10,
//   },
//   filterButton: {
//     padding: 10,
//     backgroundColor: '#EDF2F7',
//     borderRadius: 20,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.05,
//     shadowRadius: 3,
//     shadowOffset: { width: 0, height: 1 },
//   },
//   filterIcon: {
//     marginRight: 5,
//   },
//   sortDirectionIcon: {
//     marginLeft: -5,
//   },
//   cartIconButton: {
//     position: 'relative',
//   },
//   cartBadge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#4A90E2',
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cartBadgeText: {
//     color: '#FFFFFF',
//     fontSize: 12,
//     fontWeight: '600',
//   },
//   list: {
//     paddingHorizontal: 10,
//     paddingTop: 20,
//     paddingBottom: 20,
//   },
//   productCard: {
//     width: '48%',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 20,
//     margin: 8,
//     overflow: 'hidden',
//     elevation: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//   },
//   outOfStockCard: {
//     backgroundColor: '#E2E8F0',
//     opacity: 0.9,
//   },
//   productImage: {
//     width: '100%',
//     height: 160,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     resizeMode: 'cover',
//   },
//   productDetails: {
//     padding: 12,
//     backgroundColor: 'rgba(255, 255, 255, 0.9)',
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#2D3748',
//     marginBottom: 5,
//     textAlign: 'center',
//   },
//   productPrice: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#4A90E2',
//     marginBottom: 5,
//     textAlign: 'center',
//   },
//   ratingsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 5,
//   },
//   ratingsText: {
//     color: '#4A90E2',
//     fontSize: 12,
//     marginLeft: 5,
//   },
//   outOfStockText: {
//     fontSize: 12,
//     color: '#E53E3E',
//     fontWeight: '600',
//     textAlign: 'center',
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
//   TextInput,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { db, auth } from '../firebaseConfig';
// import { collection, getDocs, doc, setDoc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
// import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function ShopProducts() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortOrder, setSortOrder] = useState(null);
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { userData } = route.params; // Receive userData from UserDashboard
//   const user = auth.currentUser;
//   const isFocused = useIsFocused();

//   useEffect(() => {
//     if (!user) return;

//     const fetchProducts = async () => {
//       try {
//         const productsCollection = collection(db, 'products');
//         const productSnapshot = await getDocs(productsCollection);
//         const productList = productSnapshot.docs.map((doc) => {
//           const data = doc.data();
//           return {
//             id: doc.id,
//             ...data,
//             price: parseFloat(data.price) || 0,
//             ratings: data.ratings !== undefined ? data.ratings : 0,
//             stock: parseInt(data.stock, 10) || 0,
//           };
//         });
//         setProducts(productList);
//         setFilteredProducts(productList);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         Alert.alert('Error', 'Failed to load products.');
//       }
//     };

//     const fetchCart = async () => {
//       const cartRef = doc(db, 'carts', user.uid);
//       const cartSnap = await getDoc(cartRef);
//       if (cartSnap.exists()) {
//         setCart(cartSnap.data().items || []);
//       } else {
//         setCart([]);
//       }
//     };

//     fetchProducts();
//     fetchCart();
//   }, [user, isFocused]);

//   useEffect(() => {
//     let updatedProducts = [...products];

//     if (searchQuery) {
//       updatedProducts = updatedProducts.filter((product) =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (sortOrder === 'lowToHigh') {
//       updatedProducts.sort((a, b) => a.price - b.price);
//     } else if (sortOrder === 'highToLow') {
//       updatedProducts.sort((a, b) => b.price - a.price);
//     }

//     setFilteredProducts(updatedProducts);
//   }, [searchQuery, sortOrder, products]);

//   const handleAddToCart = async (product) => {
//     if (!user) {
//       Alert.alert('Error', 'Please log in to add items to your cart.');
//       return;
//     }

//     if (product.stock <= 0) {
//       Alert.alert('Out of Stock', 'This product is currently unavailable.');
//       return;
//     }

//     const cartRef = doc(db, 'carts', user.uid);
//     const existingItem = cart.find((item) => item.id === product.id);

//     if (existingItem) {
//       Alert.alert('Already in Cart', 'This product is already in your cart.');
//       return;
//     }

//     const newItem = { ...product, quantity: 1 };
//     const updatedCart = [...cart, newItem];

//     try {
//       const cartSnap = await getDoc(cartRef);
//       if (cartSnap.exists()) {
//         await updateDoc(cartRef, {
//           items: arrayUnion(newItem),
//           updatedAt: new Date().toISOString(),
//         });
//       } else {
//         await setDoc(cartRef, {
//           userId: user.uid,
//           items: [newItem],
//           updatedAt: new Date().toISOString(),
//         });
//       }
//       setCart(updatedCart);
//       Alert.alert('Added to Cart', 'Product added to your cart.');
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       Alert.alert('Error', 'Failed to add product to cart.');
//     }
//   };

//   const goToCart = () => {
//     navigation.navigate('Cart', { cart, setCart, userData }); // Pass userData to Cart
//   };

//   const toggleSortOrder = () => {
//     if (!sortOrder) {
//       setSortOrder('lowToHigh');
//     } else if (sortOrder === 'lowToHigh') {
//       setSortOrder('highToLow');
//     } else {
//       setSortOrder(null);
//     }
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={[styles.productCard, item.stock === 0 && styles.outOfStockCard]}
//       onPress={() => navigation.navigate('ProductDetail', { product: item, cart, setCart, handleAddToCart })}
//       activeOpacity={0.8}
//       disabled={item.stock === 0}
//     >
//       <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//       <View style={styles.productDetails}>
//         <Text style={styles.productName}>{item.name}</Text>
//         <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
//         <View style={styles.ratingsContainer}>
//           {[...Array(5)].map((_, index) => (
//             <Ionicons
//               key={index}
//               name={index < Math.round(item.ratings) ? 'star' : 'star-outline'}
//               size={16}
//               color="#FFD700"
//             />
//           ))}
//           <Text style={styles.ratingsText}>
//             ({typeof item.ratings === 'number' ? item.ratings.toFixed(1) : '0.0'})
//           </Text>
//         </View>
//         {item.stock === 0 && <Text style={styles.outOfStockText}>Out of Stock</Text>}
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <View style={styles.searchContainer}>
//           <Ionicons name="search" size={24} color="#4A90E2" style={styles.searchIcon} />
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search products..."
//             placeholderTextColor="#A0AEC0"
//             value={searchQuery}
//             onChangeText={setSearchQuery}
//           />
//         </View>
//         <TouchableOpacity style={styles.filterButton} onPress={toggleSortOrder}>
//           <Ionicons name="filter" size={24} color="#4A90E2" style={styles.filterIcon} />
//           {sortOrder && (
//             <Ionicons
//               name={sortOrder === 'lowToHigh' ? 'arrow-up' : 'arrow-down'}
//               size={16}
//               color="#4A90E2"
//               style={styles.sortDirectionIcon}
//             />
//           )}
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.cartIconButton} onPress={goToCart}>
//           <Ionicons name="cart" size={30} color="#4A90E2" />
//           {cart.length > 0 && (
//             <View style={styles.cartBadge}>
//               <Text style={styles.cartBadgeText}>{cart.length}</Text>
//             </View>
//           )}
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={filteredProducts}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         numColumns={2}
//         contentContainerStyle={styles.list}
//         showsVerticalScrollIndicator={false}
//       />
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
//   TextInput,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { db, auth } from '../firebaseConfig';
// import { collection, getDocs, doc, setDoc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
// import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function ShopProducts() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortOrder, setSortOrder] = useState(null);
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { userData } = route.params; // Receive userData from UserDashboard
//   const user = auth.currentUser;
//   const isFocused = useIsFocused();

//   useEffect(() => {
//     if (!user) return;

//     const fetchProducts = async () => {
//       try {
//         const productsCollection = collection(db, 'products');
//         const productSnapshot = await getDocs(productsCollection);
//         const productList = productSnapshot.docs.map((doc) => {
//           const data = doc.data();
//           return {
//             id: doc.id,
//             ...data,
//             price: parseFloat(data.price) || 0,
//             ratings: data.ratings !== undefined ? data.ratings : 0,
//             stock: parseInt(data.stock, 10) || 0,
//           };
//         });
//         setProducts(productList);
//         setFilteredProducts(productList);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         Alert.alert('Error', 'Failed to load products.');
//       }
//     };

//     const fetchCart = async () => {
//       const cartRef = doc(db, 'carts', user.uid);
//       const cartSnap = await getDoc(cartRef);
//       if (cartSnap.exists()) {
//         setCart(cartSnap.data().items || []);
//       } else {
//         setCart([]);
//       }
//     };

//     fetchProducts();
//     fetchCart();
//   }, [user, isFocused]);

//   useEffect(() => {
//     let updatedProducts = [...products];

//     if (searchQuery) {
//       updatedProducts = updatedProducts.filter((product) =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (sortOrder === 'lowToHigh') {
//       updatedProducts.sort((a, b) => a.price - b.price);
//     } else if (sortOrder === 'highToLow') {
//       updatedProducts.sort((a, b) => b.price - a.price);
//     }

//     setFilteredProducts(updatedProducts);
//   }, [searchQuery, sortOrder, products]);

//   const handleAddToCart = async (product) => {
//     if (!user) {
//       Alert.alert('Error', 'Please log in to add items to your cart.');
//       return;
//     }

//     if (product.stock <= 0) {
//       Alert.alert('Out of Stock', 'This product is currently unavailable.');
//       return;
//     }

//     const cartRef = doc(db, 'carts', user.uid);
//     const existingItem = cart.find((item) => item.id === product.id);

//     if (existingItem) {
//       Alert.alert('Already in Cart', 'This product is already in your cart.');
//       return;
//     }

//     const newItem = { ...product, quantity: 1 };
//     const updatedCart = [...cart, newItem];

//     try {
//       const cartSnap = await getDoc(cartRef);
//       if (cartSnap.exists()) {
//         await updateDoc(cartRef, {
//           items: arrayUnion(newItem),
//           updatedAt: new Date().toISOString(),
//         });
//       } else {
//         await setDoc(cartRef, {
//           userId: user.uid,
//           items: [newItem],
//           updatedAt: new Date().toISOString(),
//         });
//       }
//       setCart(updatedCart);
//       Alert.alert('Added to Cart', 'Product added to your cart.');
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       Alert.alert('Error', 'Failed to add product to cart.');
//     }
//   };

//   const goToCart = () => {
//     navigation.navigate('Cart', { cart, setCart, userData }); // Pass userData to Cart
//   };

//   const toggleSortOrder = () => {
//     if (!sortOrder) {
//       setSortOrder('lowToHigh');
//     } else if (sortOrder === 'lowToHigh') {
//       setSortOrder('highToLow');
//     } else {
//       setSortOrder(null);
//     }
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={[styles.productCard, item.stock === 0 && styles.outOfStockCard]}
//       onPress={() => navigation.navigate('ProductDetail', { product: item, cart, setCart, handleAddToCart })}
//       activeOpacity={0.8}
//       disabled={item.stock === 0}
//     >
//       <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//       <View style={styles.productDetails}>
//         <Text style={styles.productName}>{item.name}</Text>
//         <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
//         <View style={styles.ratingsContainer}>
//           {[...Array(5)].map((_, index) => (
//             <Ionicons
//               key={index}
//               name={index < Math.round(item.ratings) ? 'star' : 'star-outline'}
//               size={16}
//               color="#FFD700"
//             />
//           ))}
//           <Text style={styles.ratingsText}>
//             ({typeof item.ratings === 'number' ? item.ratings.toFixed(1) : '0.0'})
//           </Text>
//         </View>
//         {item.stock === 0 && <Text style={styles.outOfStockText}>Out of Stock</Text>}
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <View style={styles.searchContainer}>
//           <Ionicons name="search" size={24} color="#4A90E2" style={styles.searchIcon} />
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search products..."
//             placeholderTextColor="#A0AEC0"
//             value={searchQuery}
//             onChangeText={setSearchQuery}
//           />
//         </View>
//         <TouchableOpacity style={styles.filterButton} onPress={toggleSortOrder}>
//           <Ionicons name="filter" size={24} color="#4A90E2" style={styles.filterIcon} />
//           {sortOrder && (
//             <Ionicons
//               name={sortOrder === 'lowToHigh' ? 'arrow-up' : 'arrow-down'}
//               size={16}
//               color="#4A90E2"
//               style={styles.sortDirectionIcon}
//             />
//           )}
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.cartIconButton} onPress={goToCart}>
//           <Ionicons name="cart" size={30} color="#4A90E2" />
//           {cart.length > 0 && (
//             <View style={styles.cartBadge}>
//               <Text style={styles.cartBadgeText}>{cart.length}</Text>
//             </View>
//           )}
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={filteredProducts}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         numColumns={2}
//         contentContainerStyle={styles.list}
//         showsVerticalScrollIndicator={false}
//       />
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
//     justifyContent: 'space-between',
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
//   searchContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F9FAFB',
//     borderRadius: 30,
//     paddingHorizontal: 15,
//     marginRight: 10,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.05,
//     shadowRadius: 3,
//     shadowOffset: { width: 0, height: 1 },
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: '#2D3748',
//     paddingVertical: 10,
//   },
//   filterButton: {
//     padding: 10,
//     backgroundColor: '#EDF2F7',
//     borderRadius: 20,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.05,
//     shadowRadius: 3,
//     shadowOffset: { width: 0, height: 1 },
//   },
//   filterIcon: {
//     marginRight: 5,
//   },
//   sortDirectionIcon: {
//     marginLeft: -5,
//   },
//   cartIconButton: {
//     position: 'relative',
//   },
//   cartBadge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#4A90E2',
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cartBadgeText: {
//     color: '#FFFFFF',
//     fontSize: 12,
//     fontWeight: '600',
//   },
//   list: {
//     paddingHorizontal: 10,
//     paddingTop: 20,
//     paddingBottom: 20,
//   },
//   productCard: {
//     width: '48%',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 20,
//     margin: 8,
//     overflow: 'hidden',
//     elevation: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//   },
//   outOfStockCard: {
//     backgroundColor: '#E2E8F0',
//     opacity: 0.9,
//   },
//   productImage: {
//     width: '100%',
//     height: 160,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     resizeMode: 'cover',
//   },
//   productDetails: {
//     padding: 12,
//     backgroundColor: 'rgba(255, 255, 255, 0.9)',
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#2D3748',
//     marginBottom: 5,
//     textAlign: 'center',
//   },
//   productPrice: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#4A90E2',
//     marginBottom: 5,
//     textAlign: 'center',
//   },
//   ratingsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 5,
//   },
//   ratingsText: {
//     color: '#4A90E2',
//     fontSize: 12,
//     marginLeft: 5,
//   },
//   outOfStockText: {
//     fontSize: 12,
//     color: '#E53E3E',
//     fontWeight: '600',
//     textAlign: 'center',
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
//   TextInput,
//   ActivityIndicator,
//   Animated,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { db, auth } from '../firebaseConfig';
// import { collection, getDocs, doc, setDoc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
// import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function ShopProducts() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortOrder, setSortOrder] = useState(null);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [loadingCart, setLoadingCart] = useState(true);
//   const [addingToCart, setAddingToCart] = useState(null); // Track product being added
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { userData } = route.params; // Receive userData from UserDashboard
//   const user = auth.currentUser;
//   const isFocused = useIsFocused();
//   const fadeAnim = useState(new Animated.Value(0))[0]; // Fade-in animation

//   // Define all animation scales before any rendering logic
//   const [cardScales] = useState(() =>
//     Array(products.length).fill().map(() => new Animated.Value(1))
//   );
//   const [filterScale] = useState(new Animated.Value(1));
//   const [cartScale] = useState(new Animated.Value(1));

//   useEffect(() => {
//     if (!user) return;

//     const fetchProducts = async () => {
//       setLoadingProducts(true);
//       try {
//         const productsCollection = collection(db, 'products');
//         const productSnapshot = await getDocs(productsCollection);
//         const productList = productSnapshot.docs.map((doc) => {
//           const data = doc.data();
//           return {
//             id: doc.id,
//             ...data,
//             price: parseFloat(data.price) || 0,
//             ratings: data.ratings !== undefined ? data.ratings : 0,
//             stock: parseInt(data.stock, 10) || 0,
//           };
//         });
//         setProducts(productList);
//         setFilteredProducts(productList);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         Alert.alert('Error', 'Failed to load products.');
//       } finally {
//         setLoadingProducts(false);
//       }
//     };

//     const fetchCart = async () => {
//       setLoadingCart(true);
//       try {
//         const cartRef = doc(db, 'carts', user.uid);
//         const cartSnap = await getDoc(cartRef);
//         if (cartSnap.exists()) {
//           setCart(cartSnap.data().items || []);
//         } else {
//           setCart([]);
//         }
//       } catch (error) {
//         console.error('Error fetching cart:', error);
//       } finally {
//         setLoadingCart(false);
//       }
//     };

//     fetchProducts();
//     fetchCart();

//     // Fade-in animation
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 600,
//       useNativeDriver: true,
//     }).start();
//   }, [user, isFocused]);

//   useEffect(() => {
//     let updatedProducts = [...products];

//     if (searchQuery) {
//       updatedProducts = updatedProducts.filter((product) =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (sortOrder === 'lowToHigh') {
//       updatedProducts.sort((a, b) => a.price - b.price);
//     } else if (sortOrder === 'highToLow') {
//       updatedProducts.sort((a, b) => b.price - a.price);
//     }

//     setFilteredProducts(updatedProducts);
//   }, [searchQuery, sortOrder, products]);

//   const handleAddToCart = async (product) => {
//     if (!user) {
//       Alert.alert('Error', 'Please log in to add items to your cart.');
//       return;
//     }

//     if (product.stock <= 0) {
//       Alert.alert('Out of Stock', 'This product is currently unavailable.');
//       return;
//     }

//     const cartRef = doc(db, 'carts', user.uid);
//     const existingItem = cart.find((item) => item.id === product.id);

//     if (existingItem) {
//       Alert.alert('Already in Cart', 'This product is already in your cart.');
//       return;
//     }

//     setAddingToCart(product.id);
//     const newItem = { ...product, quantity: 1 };
//     const updatedCart = [...cart, newItem];

//     try {
//       const cartSnap = await getDoc(cartRef);
//       if (cartSnap.exists()) {
//         await updateDoc(cartRef, {
//           items: arrayUnion(newItem),
//           updatedAt: new Date().toISOString(),
//         });
//       } else {
//         await setDoc(cartRef, {
//           userId: user.uid,
//           items: [newItem],
//           updatedAt: new Date().toISOString(),
//         });
//       }
//       setCart(updatedCart);
//       Alert.alert('Added to Cart', 'Product added to your cart.');
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       Alert.alert('Error', 'Failed to add product to cart.');
//     } finally {
//       setAddingToCart(null);
//     }
//   };

//   const goToCart = () => {
//     navigation.navigate('Cart', { cart, setCart, userData });
//   };

//   const toggleSortOrder = () => {
//     if (!sortOrder) {
//       setSortOrder('lowToHigh');
//     } else if (sortOrder === 'lowToHigh') {
//       setSortOrder('highToLow');
//     } else {
//       setSortOrder(null);
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

//   const renderItem = ({ item, index }) => {
//     // Ensure cardScales array is long enough for filteredProducts
//     const scale = cardScales[index] || new Animated.Value(1); // Fallback if index exceeds initial length

//     return (
//       <TouchableOpacity
//         style={[styles.productCard, item.stock === 0 && styles.outOfStockCard]}
//         onPressIn={() => handlePressIn(scale)}
//         onPressOut={() => handlePressOut(scale)}
//         onPress={() => navigation.navigate('ProductDetail', { product: item, cart, setCart, handleAddToCart })}
//         activeOpacity={0.8}
//         disabled={item.stock === 0}
//       >
//         <Animated.View style={{ transform: [{ scale }] }}>
//           <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//           <LinearGradient
//             colors={['#FFFFFF', '#F5F7FA']}
//             style={styles.productDetails}
//           >
//             <Text style={styles.productName}>{item.name}</Text>
//             <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
//             <View style={styles.ratingsContainer}>
//               {[...Array(5)].map((_, i) => (
//                 <Ionicons
//                   key={i}
//                   name={i < Math.round(item.ratings) ? 'star' : 'star-outline'}
//                   size={16}
//                   color="#FFD700"
//                 />
//               ))}
//               <Text style={styles.ratingsText}>({item.ratings.toFixed(1)})</Text>
//             </View>
//             {item.stock === 0 ? (
//               <Text style={styles.outOfStockText}>Out of Stock</Text>
//             ) : (
//               <TouchableOpacity
//                 onPress={() => handleAddToCart(item)}
//                 disabled={addingToCart === item.id}
//               >
//                 <LinearGradient
//                   colors={['#FF6F61', '#FF9F1C']}
//                   style={styles.addButton}
//                 >
//                   {addingToCart === item.id ? (
//                     <ActivityIndicator size="small" color="#FFFFFF" />
//                   ) : (
//                     <Text style={styles.addButtonText}>Add to Cart</Text>
//                   )}
//                 </LinearGradient>
//               </TouchableOpacity>
//             )}
//           </LinearGradient>
//         </Animated.View>
//       </TouchableOpacity>
//     );
//   };

//   if (loadingProducts || loadingCart) {
//     return (
//       <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#FF6F61" />
//         <Text style={styles.loadingText}>Loading Products...</Text>
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
//           <View style={styles.searchContainer}>
//             <Ionicons name="search" size={24} color="#FFFFFF" style={styles.searchIcon} />
//             <TextInput
//               style={styles.searchInput}
//               placeholder="Search products..."
//               placeholderTextColor="#A0AEC0"
//               value={searchQuery}
//               onChangeText={setSearchQuery}
//             />
//           </View>
//           <TouchableOpacity
//             style={styles.filterButton}
//             onPress={toggleSortOrder}
//             onPressIn={() => handlePressIn(filterScale)}
//             onPressOut={() => handlePressOut(filterScale)}
//           >
//             <Animated.View style={{ transform: [{ scale: filterScale }] }}>
//               <LinearGradient
//                 colors={['#34C759', '#28A745']}
//                 style={styles.filterGradient}
//               >
//                 <Ionicons name="filter" size={24} color="#FFFFFF" />
//                 {sortOrder && (
//                   <Ionicons
//                     name={sortOrder === 'lowToHigh' ? 'arrow-up' : 'arrow-down'}
//                     size={16}
//                     color="#FFFFFF"
//                     style={styles.sortDirectionIcon}
//                   />
//                 )}
//               </LinearGradient>
//             </Animated.View>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.cartIconButton}
//             onPress={goToCart}
//             onPressIn={() => handlePressIn(cartScale)}
//             onPressOut={() => handlePressOut(cartScale)}
//           >
//             <Animated.View style={{ transform: [{ scale: cartScale }] }}>
//               <Ionicons name="cart" size={30} color="#FFFFFF" />
//               {cart.length > 0 && (
//                 <View style={styles.cartBadge}>
//                   <Text style={styles.cartBadgeText}>{cart.length}</Text>
//                 </View>
//               )}
//             </Animated.View>
//           </TouchableOpacity>
//         </LinearGradient>
//         <FlatList
//           data={filteredProducts}
//           keyExtractor={(item) => item.id}
//           renderItem={renderItem}
//           numColumns={2}
//           contentContainerStyle={styles.list}
//           showsVerticalScrollIndicator={false}
//         />
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
//     justifyContent: 'space-between',
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
//   searchContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 25,
//     paddingHorizontal: 15,
//     marginRight: 15,
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: '#FFFFFF',
//     paddingVertical: 10,
//   },
//   filterButton: {
//     borderRadius: 20,
//     overflow: 'hidden',
//   },
//   filterGradient: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//   },
//   sortDirectionIcon: {
//     marginLeft: 5,
//   },
//   cartIconButton: {
//     padding: 5,
//   },
//   cartBadge: {
//     position: 'absolute',
//     top: 0,
//     right: 0,
//     backgroundColor: '#FF6F61',
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cartBadgeText: {
//     color: '#FFFFFF',
//     fontSize: 12,
//     fontWeight: '600',
//   },
//   list: {
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 20,
//   },
//   productCard: {
//     width: '48%',
//     margin: 8,
//     borderRadius: 15,
//     overflow: 'hidden',
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//   },
//   outOfStockCard: {
//     opacity: 0.7,
//   },
//   productImage: {
//     width: '100%',
//     height: 160,
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//     resizeMode: 'cover',
//   },
//   productDetails: {
//     padding: 12,
//     borderBottomLeftRadius: 15,
//     borderBottomRightRadius: 15,
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#1F2937',
//     marginBottom: 5,
//     textAlign: 'center',
//   },
//   productPrice: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#FF6F61',
//     marginBottom: 5,
//     textAlign: 'center',
//   },
//   ratingsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 10,
//   },
//   ratingsText: {
//     color: '#1F2937',
//     fontSize: 12,
//     marginLeft: 5,
//   },
//   outOfStockText: {
//     fontSize: 12,
//     color: '#E53E3E',
//     fontWeight: '600',
//     textAlign: 'center',
//   },
//   addButton: {
//     paddingVertical: 8,
//     paddingHorizontal: 15,
//     borderRadius: 20,
//     alignItems: 'center',
//   },
//   addButtonText: {
//     color: '#FFFFFF',
//     fontSize: 14,
//     fontWeight: '700',
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
//   TextInput,
//   ActivityIndicator,
//   Animated,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { db, auth } from '../firebaseConfig';
// import { collection, getDocs, doc, setDoc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
// import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function ShopProducts() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortOrder, setSortOrder] = useState(null);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [loadingCart, setLoadingCart] = useState(true);
//   const [addingToCart, setAddingToCart] = useState(null); // Track product being added
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { userData } = route.params; // Receive userData from UserDashboard
//   const user = auth.currentUser;
//   const isFocused = useIsFocused();
//   const fadeAnim = useState(new Animated.Value(0))[0]; // Fade-in animation

//   // Define all animation scales before any rendering logic
//   const [cardScales] = useState(() =>
//     Array(products.length).fill().map(() => new Animated.Value(1))
//   );
//   const [filterScale] = useState(new Animated.Value(1));
//   const [cartScale] = useState(new Animated.Value(1));

//   useEffect(() => {
//     if (!user) return;

//     const fetchProducts = async () => {
//       setLoadingProducts(true);
//       try {
//         const productsCollection = collection(db, 'products');
//         const productSnapshot = await getDocs(productsCollection);
//         const productList = productSnapshot.docs.map((doc) => {
//           const data = doc.data();
//           return {
//             id: doc.id,
//             ...data,
//             price: parseFloat(data.price) || 0,
//             ratings: data.ratings !== undefined ? data.ratings : 0,
//             stock: parseInt(data.stock, 10) || 0,
//             imageUrls: Array.isArray(data.imageUrls) ? data.imageUrls : [], // Ensure imageUrls is an array
//           };
//         });
//         setProducts(productList);
//         setFilteredProducts(productList);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         Alert.alert('Error', 'Failed to load products.');
//       } finally {
//         setLoadingProducts(false);
//       }
//     };

//     const fetchCart = async () => {
//       setLoadingCart(true);
//       try {
//         const cartRef = doc(db, 'carts', user.uid);
//         const cartSnap = await getDoc(cartRef);
//         if (cartSnap.exists()) {
//           setCart(cartSnap.data().items || []);
//         } else {
//           setCart([]);
//         }
//       } catch (error) {
//         console.error('Error fetching cart:', error);
//       } finally {
//         setLoadingCart(false);
//       }
//     };

//     fetchProducts();
//     fetchCart();

//     // Fade-in animation
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 600,
//       useNativeDriver: true,
//     }).start();
//   }, [user, isFocused]);

//   useEffect(() => {
//     let updatedProducts = [...products];

//     if (searchQuery) {
//       updatedProducts = updatedProducts.filter((product) =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (sortOrder === 'lowToHigh') {
//       updatedProducts.sort((a, b) => a.price - b.price);
//     } else if (sortOrder === 'highToLow') {
//       updatedProducts.sort((a, b) => b.price - a.price);
//     }

//     setFilteredProducts(updatedProducts);
//   }, [searchQuery, sortOrder, products]);

//   const handleAddToCart = async (product) => {
//     if (!user) {
//       Alert.alert('Error', 'Please log in to add items to your cart.');
//       return;
//     }

//     if (product.stock <= 0) {
//       Alert.alert('Out of Stock', 'This product is currently unavailable.');
//       return;
//     }

//     const cartRef = doc(db, 'carts', user.uid);
//     const existingItem = cart.find((item) => item.id === product.id);

//     if (existingItem) {
//       Alert.alert('Already in Cart', 'This product is already in your cart.');
//       return;
//     }

//     setAddingToCart(product.id);
//     const newItem = { ...product, quantity: 1 };
//     const updatedCart = [...cart, newItem];

//     try {
//       const cartSnap = await getDoc(cartRef);
//       if (cartSnap.exists()) {
//         await updateDoc(cartRef, {
//           items: arrayUnion(newItem),
//           updatedAt: new Date().toISOString(),
//         });
//       } else {
//         await setDoc(cartRef, {
//           userId: user.uid,
//           items: [newItem],
//           updatedAt: new Date().toISOString(),
//         });
//       }
//       setCart(updatedCart);
//       Alert.alert('Added to Cart', 'Product added to your cart.');
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       Alert.alert('Error', 'Failed to add product to cart.');
//     } finally {
//       setAddingToCart(null);
//     }
//   };

//   const goToCart = () => {
//     navigation.navigate('Cart', { cart, setCart, userData });
//   };

//   const toggleSortOrder = () => {
//     if (!sortOrder) {
//       setSortOrder('lowToHigh');
//     } else if (sortOrder === 'lowToHigh') {
//       setSortOrder('highToLow');
//     } else {
//       setSortOrder(null);
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

//   const renderItem = ({ item, index }) => {
//     // Ensure cardScales array is long enough for filteredProducts
//     const scale = cardScales[index] || new Animated.Value(1); // Fallback if index exceeds initial length

//     // Use the first image from imageUrls, or a fallback image if none exist
//     const imageUri = item.imageUrls && item.imageUrls.length > 0 ? item.imageUrls[0] : 'https://via.placeholder.com/150';

//     return (
//       <TouchableOpacity
//         style={[styles.productCard, item.stock === 0 && styles.outOfStockCard]}
//         onPressIn={() => handlePressIn(scale)}
//         onPressOut={() => handlePressOut(scale)}
//         onPress={() => navigation.navigate('ProductDetail', { product: item, cart, setCart, handleAddToCart })}
//         activeOpacity={0.8}
//         disabled={item.stock === 0}
//       >
//         <Animated.View style={{ transform: [{ scale }] }}>
//           <Image source={{ uri: imageUri }} style={styles.productImage} />
//           <LinearGradient
//             colors={['#FFFFFF', '#F5F7FA']}
//             style={styles.productDetails}
//           >
//             <Text style={styles.productName}>{item.name}</Text>
//             <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
//             <View style={styles.ratingsContainer}>
//               {[...Array(5)].map((_, i) => (
//                 <Ionicons
//                   key={i}
//                   name={i < Math.round(item.ratings) ? 'star' : 'star-outline'}
//                   size={16}
//                   color="#FFD700"
//                 />
//               ))}
//               <Text style={styles.ratingsText}>({item.ratings.toFixed(1)})</Text>
//             </View>
//             {item.stock === 0 ? (
//               <Text style={styles.outOfStockText}>Out of Stock</Text>
//             ) : (
//               <TouchableOpacity
//                 onPress={() => handleAddToCart(item)}
//                 disabled={addingToCart === item.id}
//               >
//                 <LinearGradient
//                   colors={['#FF6F61', '#FF9F1C']}
//                   style={styles.addButton}
//                 >
//                   {addingToCart === item.id ? (
//                     <ActivityIndicator size="small" color="#FFFFFF" />
//                   ) : (
//                     <Text style={styles.addButtonText}>Add to Cart</Text>
//                   )}
//                 </LinearGradient>
//               </TouchableOpacity>
//             )}
//           </LinearGradient>
//         </Animated.View>
//       </TouchableOpacity>
//     );
//   };

//   if (loadingProducts || loadingCart) {
//     return (
//       <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#FF6F61" />
//         <Text style={styles.loadingText}>Loading Products...</Text>
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
//           <View style={styles.searchContainer}>
//             <Ionicons name="search" size={24} color="#FFFFFF" style={styles.searchIcon} />
//             <TextInput
//               style={styles.searchInput}
//               placeholder="Search products..."
//               placeholderTextColor="#A0AEC0"
//               value={searchQuery}
//               onChangeText={setSearchQuery}
//             />
//           </View>
//           <TouchableOpacity
//             style={styles.filterButton}
//             onPress={toggleSortOrder}
//             onPressIn={() => handlePressIn(filterScale)}
//             onPressOut={() => handlePressOut(filterScale)}
//           >
//             <Animated.View style={{ transform: [{ scale: filterScale }] }}>
//               <LinearGradient
//                 colors={['#34C759', '#28A745']}
//                 style={styles.filterGradient}
//               >
//                 <Ionicons name="filter" size={24} color="#FFFFFF" />
//                 {sortOrder && (
//                   <Ionicons
//                     name={sortOrder === 'lowToHigh' ? 'arrow-up' : 'arrow-down'}
//                     size={16}
//                     color="#FFFFFF"
//                     style={styles.sortDirectionIcon}
//                   />
//                 )}
//               </LinearGradient>
//             </Animated.View>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.cartIconButton}
//             onPress={goToCart}
//             onPressIn={() => handlePressIn(cartScale)}
//             onPressOut={() => handlePressOut(cartScale)}
//           >
//             <Animated.View style={{ transform: [{ scale: cartScale }] }}>
//               <Ionicons name="cart" size={30} color="#FFFFFF" />
//               {cart.length > 0 && (
//                 <View style={styles.cartBadge}>
//                   <Text style={styles.cartBadgeText}>{cart.length}</Text>
//                 </View>
//               )}
//             </Animated.View>
//           </TouchableOpacity>
//         </LinearGradient>
//         <FlatList
//           data={filteredProducts}
//           keyExtractor={(item) => item.id}
//           renderItem={renderItem}
//           numColumns={2}
//           contentContainerStyle={styles.list}
//           showsVerticalScrollIndicator={false}
//         />
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
//     justifyContent: 'space-between',
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
//   searchContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 25,
//     paddingHorizontal: 15,
//     marginRight: 15,
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: '#FFFFFF',
//     paddingVertical: 10,
//   },
//   filterButton: {
//     borderRadius: 20,
//     overflow: 'hidden',
//   },
//   filterGradient: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//   },
//   sortDirectionIcon: {
//     marginLeft: 5,
//   },
//   cartIconButton: {
//     padding: 5,
//   },
//   cartBadge: {
//     position: 'absolute',
//     top: 0,
//     right: 0,
//     backgroundColor: '#FF6F61',
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cartBadgeText: {
//     color: '#FFFFFF',
//     fontSize: 12,
//     fontWeight: '600',
//   },
//   list: {
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 20,
//   },
//   productCard: {
//     width: '48%',
//     margin: 8,
//     borderRadius: 15,
//     overflow: 'hidden',
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//   },
//   outOfStockCard: {
//     opacity: 0.7,
//   },
//   productImage: {
//     width: '100%',
//     height: 160,
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//     resizeMode: 'cover',
//   },
//   productDetails: {
//     padding: 12,
//     borderBottomLeftRadius: 15,
//     borderBottomRightRadius: 15,
//   },
//   productName: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#1F2937',
//     marginBottom: 5,
//     textAlign: 'center',
//   },
//   productPrice: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#FF6F61',
//     marginBottom: 5,
//     textAlign: 'center',
//   },
//   ratingsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 10,
//   },
//   ratingsText: {
//     color: '#1F2937',
//     fontSize: 12,
//     marginLeft: 5,
//   },
//   outOfStockText: {
//     fontSize: 12,
//     color: '#E53E3E',
//     fontWeight: '600',
//     textAlign: 'center',
//   },
//   addButton: {
//     paddingVertical: 8,
//     paddingHorizontal: 15,
//     borderRadius: 20,
//     alignItems: 'center',
//   },
//   addButtonText: {
//     color: '#FFFFFF',
//     fontSize: 14,
//     fontWeight: '700',
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
//   TextInput,
//   ActivityIndicator,
//   StatusBar,
//   Dimensions,
// } from 'react-native';
// import { db, auth } from '../firebaseConfig';
// import { collection, getDocs, doc, setDoc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
// import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { LinearGradient } from 'expo-linear-gradient';

// const { width } = Dimensions.get('window');
// const cardWidth = (width - 40) / 2;

// export default function ShopProducts() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortOrder, setSortOrder] = useState(null);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [loadingCart, setLoadingCart] = useState(true);
//   const [addingToCart, setAddingToCart] = useState(null);
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { userData } = route.params;
//   const user = auth.currentUser;
//   const isFocused = useIsFocused();

//   useEffect(() => {
//     if (!user) return;

//     const fetchProducts = async () => {
//       setLoadingProducts(true);
//       try {
//         const productsCollection = collection(db, 'products');
//         const productSnapshot = await getDocs(productsCollection);
//         const productList = productSnapshot.docs.map((doc) => {
//           const data = doc.data();
//           return {
//             id: doc.id,
//             ...data,
//             price: parseFloat(data.price) || 0,
//             ratings: data.ratings !== undefined ? data.ratings : 0,
//             stock: parseInt(data.stock, 10) || 0,
//             imageUrls: Array.isArray(data.imageUrls) ? data.imageUrls : [],
//             category: data.category || 'Other',
//           };
//         });
//         setProducts(productList);
//         setFilteredProducts(productList);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         Alert.alert('Error', 'Failed to load products.');
//       } finally {
//         setLoadingProducts(false);
//       }
//     };

//     const fetchCart = async () => {
//       setLoadingCart(true);
//       try {
//         const cartRef = doc(db, 'carts', user.uid);
//         const cartSnap = await getDoc(cartRef);
//         if (cartSnap.exists()) {
//           setCart(cartSnap.data().items || []);
//         } else {
//           setCart([]);
//         }
//       } catch (error) {
//         console.error('Error fetching cart:', error);
//       } finally {
//         setLoadingCart(false);
//       }
//     };

//     fetchProducts();
//     fetchCart();
//   }, [user, isFocused]);

//   useEffect(() => {
//     let updatedProducts = [...products];

//     if (searchQuery) {
//       updatedProducts = updatedProducts.filter((product) =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (sortOrder === 'lowToHigh') {
//       updatedProducts.sort((a, b) => a.price - b.price);
//     } else if (sortOrder === 'highToLow') {
//       updatedProducts.sort((a, b) => b.price - a.price);
//     }

//     setFilteredProducts(updatedProducts);
//   }, [searchQuery, sortOrder, products]);

//   const handleAddToCart = async (product) => {
//     if (!user) {
//       Alert.alert('Error', 'Please log in to add items to your cart.');
//       return;
//     }

//     if (product.stock <= 0) {
//       Alert.alert('Out of Stock', 'This product is currently unavailable.');
//       return;
//     }

//     const cartRef = doc(db, 'carts', user.uid);
//     const existingItem = cart.find((item) => item.id === product.id);

//     if (existingItem) {
//       Alert.alert('Already in Cart', 'This product is already in your cart.');
//       return;
//     }

//     setAddingToCart(product.id);
//     const newItem = { ...product, quantity: 1 };
//     const updatedCart = [...cart, newItem];

//     try {
//       const cartSnap = await getDoc(cartRef);
//       if (cartSnap.exists()) {
//         await updateDoc(cartRef, {
//           items: arrayUnion(newItem),
//           updatedAt: new Date().toISOString(),
//         });
//       } else {
//         await setDoc(cartRef, {
//           userId: user.uid,
//           items: [newItem],
//           updatedAt: new Date().toISOString(),
//         });
//       }
//       setCart(updatedCart);
//       Alert.alert('Added to Cart', 'Product added to your cart.');
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       Alert.alert('Error', 'Failed to add product to cart.');
//     } finally {
//       setAddingToCart(null);
//     }
//   };

//   const goToCart = () => {
//     navigation.navigate('Cart', { cart, setCart, userData });
//   };

//   const toggleSortOrder = () => {
//     if (!sortOrder) {
//       setSortOrder('lowToHigh');
//     } else if (sortOrder === 'lowToHigh') {
//       setSortOrder('highToLow');
//     } else {
//       setSortOrder(null);
//     }
//   };

//   const renderProductItem = ({ item }) => {
//     const imageUri = item.imageUrls && item.imageUrls.length > 0 
//       ? item.imageUrls[0] 
//       : 'https://via.placeholder.com/150';
    
//     const isInCart = cart.some(cartItem => cartItem.id === item.id);

//     return (
//       <TouchableOpacity
//         style={[styles.productCard, item.stock === 0 && styles.outOfStockCard]}
//         onPress={() => navigation.navigate('ProductDetail', { product: item, cart, setCart, handleAddToCart })}
//         disabled={item.stock === 0}
//       >
//         <View style={styles.imageContainer}>
//           <Image source={{ uri: imageUri }} style={styles.productImage} />
//           {item.stock <= 10 && item.stock > 0 && (
//             <View style={styles.lowStockBadge}>
//               <Text style={styles.lowStockText}>Only {item.stock} left</Text>
//             </View>
//           )}
//         </View>
//         <View style={styles.productDetails}>
//           <Text style={styles.productCategory}>{item.category}</Text>
//           <Text numberOfLines={1} style={styles.productName}>
//             {item.name}
//           </Text>
//           <View style={styles.ratingContainer}>
//             {Array(5)
//               .fill(0)
//               .map((_, i) => (
//                 <Ionicons
//                   key={i}
//                   name={i < Math.floor(item.ratings || 0) ? "star" : "star-outline"}
//                   size={12}
//                   color={i < Math.floor(item.ratings || 0) ? "#FFD700" : "#AAA"}
//                 />
//               ))}
//             <Text style={styles.ratingText}>{item.ratings?.toFixed(1) || "N/A"}</Text>
//           </View>
//           <View style={styles.priceAddContainer}>
//             <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
//             {item.stock === 0 ? (
//               <Text style={styles.outOfStockText}>Out of Stock</Text>
//             ) : (
//               <TouchableOpacity
//                 onPress={(e) => {
//                   e.stopPropagation();
//                   handleAddToCart(item);
//                 }}
//                 disabled={addingToCart === item.id || isInCart}
//                 style={[
//                   styles.addButton,
//                   isInCart && styles.inCartButton,
//                 ]}
//               >
//                 {addingToCart === item.id ? (
//                   <ActivityIndicator size="small" color="#FFFFFF" />
//                 ) : isInCart ? (
//                   <Ionicons name="checkmark" size={16} color="#FFFFFF" />
//                 ) : (
//                   <Ionicons name="add" size={16} color="#FFFFFF" />
//                 )}
//               </TouchableOpacity>
//             )}
//           </View>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   if (loadingProducts || loadingCart) {
//     return (
//       <View style={styles.loadingContainer}>
//         <StatusBar barStyle="light-content" backgroundColor="#0F2027" />
//         <ActivityIndicator size="large" color="#FFFFFF" />
//         <Text style={styles.loadingText}>Loading Products...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <LinearGradient
//         colors={['#0F2027', '#203A43', '#2C5364']}
//         style={StyleSheet.absoluteFillObject}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 1 }}
//       />
//       <StatusBar barStyle="light-content" backgroundColor="#0F2027" />
//       <View style={styles.header}>
//         <View style={styles.searchContainer}>
//           <Ionicons name="search" size={20} color="#FFFFFF" style={styles.searchIcon} />
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search products..."
//             placeholderTextColor="#A0A0A0"
//             value={searchQuery}
//             onChangeText={setSearchQuery}
//           />
//         </View>
//         <View style={styles.headerButtons}>
//           <TouchableOpacity style={styles.iconButton} onPress={toggleSortOrder}>
//             <Ionicons 
//               name={sortOrder === 'highToLow' ? "trending-down" : "trending-up"} 
//               size={22} 
//               color={sortOrder ? "#FFFFFF" : "#A0A0A0"} 
//             />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.cartButton} onPress={goToCart}>
//             <Ionicons name="cart-outline" size={22} color="#FFFFFF" />
//             {cart.length > 0 && (
//               <View style={styles.cartBadge}>
//                 <Text style={styles.cartBadgeText}>
//                   {cart.length > 99 ? '99+' : cart.length}
//                 </Text>
//               </View>
//             )}
//           </TouchableOpacity>
//         </View>
//       </View>

//       <FlatList
//         data={filteredProducts}
//         keyExtractor={(item) => item.id}
//         renderItem={renderProductItem}
//         numColumns={2}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.productsList}
//         ListEmptyComponent={() => (
//           <View style={styles.emptyContainer}>
//             <Ionicons name="search-outline" size={60} color="#A0A0A0" />
//             <Text style={styles.emptyText}>No products found</Text>
//             <Text style={styles.emptySubtext}>
//               Try changing your search or filter settings
//             </Text>
//           </View>
//         )}
//       />
//     </View>
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
//     backgroundColor: '#0F2027',
//   },
//   loadingText: {
//     marginTop: 10,
//     fontSize: 16,
//     color: '#FFFFFF',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingTop: 16,
//     paddingBottom: 12,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   searchContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 12,
//     paddingHorizontal: 12,
//     height: 44,
//     marginRight: 12,
//   },
//   searchIcon: {
//     marginRight: 8,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 15,
//     color: '#FFFFFF',
//   },
//   headerButtons: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconButton: {
//     width: 40,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 8,
//     borderRadius: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   cartButton: {
//     width: 40,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   cartBadge: {
//     position: 'absolute',
//     top: -4,
//     right: -4,
//     backgroundColor: '#FF4081',
//     borderRadius: 10,
//     minWidth: 18,
//     height: 18,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 4,
//   },
//   cartBadgeText: {
//     color: '#FFFFFF',
//     fontSize: 10,
//     fontWeight: 'bold',
//   },
//   productsList: {
//     padding: 12,
//   },
//   productCard: {
//     width: cardWidth,
//     margin: 8,
//     borderRadius: 12,
//     backgroundColor: '#FFFFFF',
//     overflow: 'hidden',
//     elevation: 3,
//   },
//   outOfStockCard: {
//     opacity: 0.7,
//   },
//   imageContainer: {
//     width: '100%',
//     height: cardWidth,
//     position: 'relative',
//   },
//   productImage: {
//     width: '100%',
//     height: '100%',
//   },
//   lowStockBadge: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: 'rgba(255, 87, 34, 0.8)',
//     paddingVertical: 4,
//     alignItems: 'center',
//   },
//   lowStockText: {
//     color: 'white',
//     fontSize: 11,
//     fontWeight: 'bold',
//   },
//   productDetails: {
//     padding: 12,
//   },
//   productCategory: {
//     fontSize: 11,
//     color: '#757575',
//     marginBottom: 4,
//     textTransform: 'uppercase',
//   },
//   productName: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     color: '#212121',
//     marginBottom: 6,
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   ratingText: {
//     fontSize: 12,
//     color: '#757575',
//     marginLeft: 4,
//   },
//   priceAddContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   productPrice: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#212121',
//   },
//   outOfStockText: {
//     fontSize: 12,
//     color: '#FF5722',
//     fontWeight: 'bold',
//   },
//   addButton: {
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     backgroundColor: '#6200EE',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   inCartButton: {
//     backgroundColor: '#4CAF50',
//   },
//   emptyContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 30,
//     marginTop: 80,
//   },
//   emptyText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#A0A0A0',
//     marginTop: 16,
//   },
//   emptySubtext: {
//     fontSize: 14,
//     color: '#A0A0A0',
//     textAlign: 'center',
//     marginTop: 8,
//   },
// });




// import React, { useState, useEffect, useCallback } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Alert,
//   TextInput,
//   ActivityIndicator,
//   StatusBar,
//   Dimensions,
// } from 'react-native';
// import { db, auth } from '../firebaseConfig';
// import { collection, getDocs, doc, setDoc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
// import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { LinearGradient } from 'expo-linear-gradient';

// const { width } = Dimensions.get('window');
// const cardWidth = (width - 40) / 2;

// export default function ShopProducts() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortOrder, setSortOrder] = useState(null);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [loadingCart, setLoadingCart] = useState(true);
//   const [addingToCart, setAddingToCart] = useState(null);
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { userData } = route.params;
//   const user = auth.currentUser;
//   const isFocused = useIsFocused();

//   // Fetch products
//   const fetchProducts = useCallback(async () => {
//     if (products.length > 0) {
//       // Skip fetching if products are already loaded
//       setLoadingProducts(false);
//       return;
//     }
//     setLoadingProducts(true);
//     try {
//       const productsCollection = collection(db, 'products');
//       const productSnapshot = await getDocs(productsCollection);
//       const productList = productSnapshot.docs.map((doc) => {
//         const data = doc.data();
//         return {
//           id: doc.id,
//           ...data,
//           price: parseFloat(data.price) || 0,
//           ratings: data.ratings !== undefined ? data.ratings : 0,
//           stock: parseInt(data.stock, 10) || 0,
//           imageUrls: Array.isArray(data.imageUrls) ? data.imageUrls : [],
//           category: data.category || 'Other',
//         };
//       });
//       setProducts(productList);
//       setFilteredProducts(productList);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//       Alert.alert('Error', 'Failed to load products.');
//     } finally {
//       setLoadingProducts(false);
//     }
//   }, [products]);

//   // Fetch cart
//   const fetchCart = useCallback(async () => {
//     if (cart.length > 0) {
//       // Skip fetching if cart is already loaded
//       setLoadingCart(false);
//       return;
//     }
//     setLoadingCart(true);
//     try {
//       const cartRef = doc(db, 'carts', user.uid);
//       const cartSnap = await getDoc(cartRef);
//       if (cartSnap.exists()) {
//         setCart(cartSnap.data().items || []);
//       } else {
//         setCart([]);
//       }
//     } catch (error) {
//       console.error('Error fetching cart:', error);
//     } finally {
//       setLoadingCart(false);
//     }
//   }, [cart, user]);

//   useEffect(() => {
//     if (!user) return;

//     fetchProducts();
//     fetchCart();
//   }, [user, isFocused, fetchProducts, fetchCart]);

//   useEffect(() => {
//     let updatedProducts = [...products];

//     if (searchQuery) {
//       updatedProducts = updatedProducts.filter((product) =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (sortOrder === 'lowToHigh') {
//       updatedProducts.sort((a, b) => a.price - b.price);
//     } else if (sortOrder === 'highToLow') {
//       updatedProducts.sort((a, b) => b.price - a.price);
//     }

//     setFilteredProducts(updatedProducts);
//   }, [searchQuery, sortOrder, products]);

//   const handleAddToCart = async (product) => {
//     if (!user) {
//       Alert.alert('Error', 'Please log in to add items to your cart.');
//       return;
//     }

//     if (product.stock <= 0) {
//       Alert.alert('Out of Stock', 'This product is currently unavailable.');
//       return;
//     }

//     const cartRef = doc(db, 'carts', user.uid);
//     const existingItem = cart.find((item) => item.id === product.id);

//     if (existingItem) {
//       Alert.alert('Already in Cart', 'This product is already in your cart.');
//       return;
//     }

//     setAddingToCart(product.id);
//     const newItem = { ...product, quantity: 1 };
//     const updatedCart = [...cart, newItem];

//     try {
//       const cartSnap = await getDoc(cartRef);
//       if (cartSnap.exists()) {
//         await updateDoc(cartRef, {
//           items: arrayUnion(newItem),
//           updatedAt: new Date().toISOString(),
//         });
//       } else {
//         await setDoc(cartRef, {
//           userId: user.uid,
//           items: [newItem],
//           updatedAt: new Date().toISOString(),
//         });
//       }
//       setCart(updatedCart);
//       Alert.alert('Added to Cart', 'Product added to your cart.');
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       Alert.alert('Error', 'Failed to add product to cart.');
//     } finally {
//       setAddingToCart(null);
//     }
//   };

//   const goToCart = () => {
//     navigation.navigate('Cart', { cart, setCart, userData });
//   };

//   const toggleSortOrder = () => {
//     if (!sortOrder) {
//       setSortOrder('lowToHigh');
//     } else if (sortOrder === 'lowToHigh') {
//       setSortOrder('highToLow');
//     } else {
//       setSortOrder(null);
//     }
//   };

//   const renderProductItem = ({ item }) => {
//     const imageUri = item.imageUrls && item.imageUrls.length > 0 
//       ? item.imageUrls[0] 
//       : 'https://via.placeholder.com/150';
    
//     const isInCart = cart.some(cartItem => cartItem.id === item.id);

//     return (
//       <TouchableOpacity
//         style={[styles.productCard, item.stock === 0 && styles.outOfStockCard]}
//         onPress={() => navigation.navigate('ProductDetail', { product: item, cart, setCart, handleAddToCart })}
//         disabled={item.stock === 0}
//       >
//         <View style={styles.imageContainer}>
//           <Image source={{ uri: imageUri }} style={styles.productImage} />
//           {item.stock <= 10 && item.stock > 0 && (
//             <View style={styles.lowStockBadge}>
//               <Text style={styles.lowStockText}>Only {item.stock} left</Text>
//             </View>
//           )}
//         </View>
//         <View style={styles.productDetails}>
//           <Text style={styles.productCategory}>{item.category}</Text>
//           <Text numberOfLines={1} style={styles.productName}>
//             {item.name}
//           </Text>
//           <View style={styles.ratingContainer}>
//             {Array(5)
//               .fill(0)
//               .map((_, i) => (
//                 <Ionicons
//                   key={i}
//                   name={i < Math.floor(item.ratings || 0) ? "star" : "star-outline"}
//                   size={12}
//                   color={i < Math.floor(item.ratings || 0) ? "#FFD700" : "#AAA"}
//                 />
//               ))}
//             <Text style={styles.ratingText}>{item.ratings?.toFixed(1) || "N/A"}</Text>
//           </View>
//           <View style={styles.priceAddContainer}>
//             <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
//             {item.stock === 0 ? (
//               <Text style={styles.outOfStockText}>Out of Stock</Text>
//             ) : (
//               <TouchableOpacity
//                 onPress={(e) => {
//                   e.stopPropagation();
//                   handleAddToCart(item);
//                 }}
//                 disabled={addingToCart === item.id || isInCart}
//                 style={[
//                   styles.addButton,
//                   isInCart && styles.inCartButton,
//                 ]}
//               >
//                 {addingToCart === item.id ? (
//                   <ActivityIndicator size="small" color="#FFFFFF" />
//                 ) : isInCart ? (
//                   <Ionicons name="checkmark" size={16} color="#FFFFFF" />
//                 ) : (
//                   <Ionicons name="add" size={16} color="#FFFFFF" />
//                 )}
//               </TouchableOpacity>
//             )}
//           </View>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   if (loadingProducts || loadingCart) {
//     return (
//       <View style={styles.loadingContainer}>
//         <StatusBar barStyle="light-content" backgroundColor="#0F2027" />
//         <ActivityIndicator size="large" color="#FFFFFF" />
//         <Text style={styles.loadingText}>Loading Products...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <LinearGradient
//         colors={['#0F2027', '#203A43', '#2C5364']}
//         style={StyleSheet.absoluteFillObject}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 1 }}
//       />
//       <StatusBar barStyle="light-content" backgroundColor="#0F2027" />
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => navigation.goBack()}
//         >
//           <Ionicons name="arrow-back" size={35} color="#FFFFFF" />
//         </TouchableOpacity>
//         <View style={styles.searchContainer}>
//           <Ionicons name="search" size={20} color="#FFFFFF" style={styles.searchIcon} />
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search products..."
//             placeholderTextColor="#A0A0A0"
//             value={searchQuery}
//             onChangeText={setSearchQuery}
//           />
//         </View>
//         <View style={styles.headerButtons}>
//           <TouchableOpacity style={styles.iconButton} onPress={toggleSortOrder}>
//             <Ionicons 
//               name={sortOrder === 'highToLow' ? "trending-down" : "trending-up"} 
//               size={22} 
//               color={sortOrder ? "#FFFFFF" : "#A0A0A0"} 
//             />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.cartButton} onPress={goToCart}>
//             <Ionicons name="cart-outline" size={22} color="#FFFFFF" />
//             {cart.length > 0 && (
//               <View style={styles.cartBadge}>
//                 <Text style={styles.cartBadgeText}>
//                   {cart.length > 99 ? '99+' : cart.length}
//                 </Text>
//               </View>
//             )}
//           </TouchableOpacity>
//         </View>
//       </View>

//       <FlatList
//         data={filteredProducts}
//         keyExtractor={(item) => item.id}
//         renderItem={renderProductItem}
//         numColumns={2}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.productsList}
//         ListEmptyComponent={() => (
//           <View style={styles.emptyContainer}>
//             <Ionicons name="search-outline" size={60} color="#A0A0A0" />
//             <Text style={styles.emptyText}>No products found</Text>
//             <Text style={styles.emptySubtext}>
//               Try changing your search or filter settings
//             </Text>
//           </View>
//         )}
//       />
//     </View>
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
//     backgroundColor: '#0F2027',
//   },
//   loadingText: {
//     marginTop: 10,
//     fontSize: 16,
//     color: '#FFFFFF',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingTop: 70,
//     paddingBottom: 12,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   backButton: {
//     marginRight: 12,
//     padding: 8,
//   },
//   searchContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 12,
//     paddingHorizontal: 12,
//     height: 44,
//   },
//   searchIcon: {
//     marginRight: 8,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 15,
//     color: '#FFFFFF',
//   },
//   headerButtons: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconButton: {
//     width: 40,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 8,
//     borderRadius: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   cartButton: {
//     width: 40,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   cartBadge: {
//     position: 'absolute',
//     top: -4,
//     right: -4,
//     backgroundColor: '#FF4081',
//     borderRadius: 10,
//     minWidth: 18,
//     height: 18,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 4,
//   },
//   cartBadgeText: {
//     color: '#FFFFFF',
//     fontSize: 10,
//     fontWeight: 'bold',
//   },
//   productsList: {
//     padding: 12,
//   },
//   productCard: {
//     width: cardWidth,
//     margin: 8,
//     borderRadius: 12,
//     backgroundColor: '#FFFFFF',
//     overflow: 'hidden',
//     elevation: 3,
//   },
//   outOfStockCard: {
//     opacity: 0.7,
//   },
//   imageContainer: {
//     width: '100%',
//     height: cardWidth,
//     position: 'relative',
//   },
//   productImage: {
//     width: '100%',
//     height: '100%',
//   },
//   lowStockBadge: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: 'rgba(255, 87, 34, 0.8)',
//     paddingVertical: 4,
//     alignItems: 'center',
//   },
//   lowStockText: {
//     color: 'white',
//     fontSize: 11,
//     fontWeight: 'bold',
//   },
//   productDetails: {
//     padding: 12,
//   },
//   productCategory: {
//     fontSize: 11,
//     color: '#757575',
//     marginBottom: 4,
//     textTransform: 'uppercase',
//   },
//   productName: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     color: '#212121',
//     marginBottom: 6,
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   ratingText: {
//     fontSize: 12,
//     color: '#757575',
//     marginLeft: 4,
//   },
//   priceAddContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   productPrice: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#212121',
//   },
//   outOfStockText: {
//     fontSize: 12,
//     color: '#FF5722',
//     fontWeight: 'bold',
//   },
//   addButton: {
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     backgroundColor: '#6200EE',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   inCartButton: {
//     backgroundColor: '#4CAF50',
//   },
//   emptyContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 30,
//     marginTop: 80,
//   },
//   emptyText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#A0A0A0',
//     marginTop: 16,
//   },
//   emptySubtext: {
//     fontSize: 14,
//     color: '#A0A0A0',
//     textAlign: 'center',
//     marginTop: 8,
//   },
// });





import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  TextInput,
  ActivityIndicator,
  StatusBar,
  Dimensions,
} from 'react-native';
import { db, auth } from '../firebaseConfig';
import { collection, getDocs, doc, setDoc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const cardWidth = (width - 40) / 2;

export default function ShopProducts() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState(null);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [loadingCart, setLoadingCart] = useState(true);
  const [addingToCart, setAddingToCart] = useState(null);
  const navigation = useNavigation();
  const route = useRoute();
  const { userData } = route.params;
  const user = auth.currentUser;
  const isFocused = useIsFocused();

  // Fetch products
  const fetchProducts = useCallback(async () => {
    setLoadingProducts(true);
    try {
      const productsCollection = collection(db, 'products');
      const productSnapshot = await getDocs(productsCollection);
      const productList = productSnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          price: parseFloat(data.price) || 0,
          ratings: data.ratings !== undefined ? data.ratings : 0,
          stock: parseInt(data.stock, 10) || 0,
          imageUrls: Array.isArray(data.imageUrls) ? data.imageUrls : [],
          category: data.category || 'Other',
        };
      });
      setProducts(productList);
      setFilteredProducts(productList);
    } catch (error) {
      console.error('Error fetching products:', error);
      Alert.alert('Error', 'Failed to load products.');
    } finally {
      setLoadingProducts(false);
    }
  }, [db]); // Depend only on db, not products

  // Fetch cart
  const fetchCart = useCallback(async () => {
    setLoadingCart(true);
    try {
      const cartRef = doc(db, 'carts', user.uid);
      const cartSnap = await getDoc(cartRef);
      if (cartSnap.exists()) {
        setCart(cartSnap.data().items || []);
      } else {
        setCart([]);
      }
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setLoadingCart(false);
    }
  }, [user, db]); // Depend on user and db, not cart

  useEffect(() => {
    if (!user) return;

    // Fetch products and cart only when screen is focused and data is not already loaded
    if (isFocused) {
      if (products.length === 0) {
        fetchProducts();
      } else {
        setLoadingProducts(false);
      }
      if (cart.length === 0) {
        fetchCart();
      } else {
        setLoadingCart(false);
      }
    }
  }, [user, isFocused, fetchProducts, fetchCart, products.length, cart.length]);

  useEffect(() => {
    let updatedProducts = [...products];

    if (searchQuery) {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOrder === 'lowToHigh') {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'highToLow') {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  }, [searchQuery, sortOrder, products]);

  const handleAddToCart = async (product) => {
    if (!user) {
      Alert.alert('Error', 'Please log in to add items to your cart.');
      return;
    }

    if (product.stock <= 0) {
      Alert.alert('Out of Stock', 'This product is currently unavailable.');
      return;
    }

    const cartRef = doc(db, 'carts', user.uid);
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      Alert.alert('Already in Cart', 'This product is already in your cart.');
      return;
    }

    setAddingToCart(product.id);
    const newItem = { ...product, quantity: 1 };
    const updatedCart = [...cart, newItem];

    try {
      const cartSnap = await getDoc(cartRef);
      if (cartSnap.exists()) {
        await updateDoc(cartRef, {
          items: arrayUnion(newItem),
          updatedAt: new Date().toISOString(),
        });
      } else {
        await setDoc(cartRef, {
          userId: user.uid,
          items: [newItem],
          updatedAt: new Date().toISOString(),
        });
      }
      setCart(updatedCart);
      Alert.alert('Added to Cart', 'Product added to your cart.');
    } catch (error) {
      console.error('Error adding to cart:', error);
      Alert.alert('Error', 'Failed to add product to cart.');
    } finally {
      setAddingToCart(null);
    }
  };

  const goToCart = () => {
    navigation.navigate('Cart', { cart, setCart, userData });
  };

  const toggleSortOrder = () => {
    if (!sortOrder) {
      setSortOrder('lowToHigh');
    } else if (sortOrder === 'lowToHigh') {
      setSortOrder('highToLow');
    } else {
      setSortOrder(null);
    }
  };

  const renderProductItem = ({ item }) => {
    const imageUri = item.imageUrls && item.imageUrls.length > 0 
      ? item.imageUrls[0] 
      : 'https://via.placeholder.com/150';
    
    const isInCart = cart.some(cartItem => cartItem.id === item.id);

    return (
      <TouchableOpacity
        style={[styles.productCard, item.stock === 0 && styles.outOfStockCard]}
        onPress={() => navigation.navigate('ProductDetail', { product: item, cart, setCart, handleAddToCart })}
        disabled={item.stock === 0}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUri }} style={styles.productImage} />
          {item.stock <= 10 && item.stock > 0 && (
            <View style={styles.lowStockBadge}>
              <Text style={styles.lowStockText}>Only {item.stock} left</Text>
            </View>
          )}
        </View>
        <View style={styles.productDetails}>
          <Text style={styles.productCategory}>{item.category}</Text>
          <Text numberOfLines={1} style={styles.productName}>
            {item.name}
          </Text>
          <View style={styles.ratingContainer}>
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Ionicons
                  key={i}
                  name={i < Math.floor(item.ratings || 0) ? "star" : "star-outline"}
                  size={12}
                  color={i < Math.floor(item.ratings || 0) ? "#FFD700" : "#AAA"}
                />
              ))}
            <Text style={styles.ratingText}>{item.ratings?.toFixed(1) || "N/A"}</Text>
          </View>
          <View style={styles.priceAddContainer}>
            <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
            {item.stock === 0 ? (
              <Text style={styles.outOfStockText}>Out of Stock</Text>
            ) : (
              <TouchableOpacity
                onPress={(e) => {
                  e.stopPropagation();
                  handleAddToCart(item);
                }}
                disabled={addingToCart === item.id || isInCart}
                style={[
                  styles.addButton,
                  isInCart && styles.inCartButton,
                ]}
              >
                {addingToCart === item.id ? (
                  <ActivityIndicator size="small" color="#FFFFFF" />
                ) : isInCart ? (
                  <Ionicons name="checkmark" size={16} color="#FFFFFF" />
                ) : (
                  <Ionicons name="add" size={16} color="#FFFFFF" />
                )}
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (loadingProducts || loadingCart) {
    return (
      <View style={styles.loadingContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#0F2027" />
        <ActivityIndicator size="large" color="#FFFFFF" />
        <Text style={styles.loadingText}>Loading Products...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0F2027', '#203A43', '#2C5364']}
        style={StyleSheet.absoluteFillObject}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      <StatusBar barStyle="light-content" backgroundColor="#0F2027" />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={35} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#FFFFFF" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            placeholderTextColor="#A0A0A0"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.iconButton} onPress={toggleSortOrder}>
            <Ionicons 
              name={sortOrder === 'highToLow' ? "trending-down" : "trending-up"} 
              size={22} 
              color={sortOrder ? "#FFFFFF" : "#A0A0A0"} 
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartButton} onPress={goToCart}>
            <Ionicons name="cart-outline" size={22} color="#FFFFFF" />
            {cart.length > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>
                  {cart.length > 99 ? '99+' : cart.length}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productsList}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Ionicons name="search-outline" size={60} color="#A0A0A0" />
            <Text style={styles.emptyText}>No products found</Text>
            <Text style={styles.emptySubtext}>
              Try changing your search or filter settings
            </Text>
          </View>
        )}
      />
    </View>
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
    backgroundColor: '#0F2027',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 70,
    paddingBottom: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  backButton: {
    marginRight: 12,
    padding: 8,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#FFFFFF',
  },
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  cartButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  cartBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#FF4081',
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  cartBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  productsList: {
    padding: 12,
  },
  productCard: {
    width: cardWidth,
    margin: 8,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    elevation: 3,
  },
  outOfStockCard: {
    opacity: 0.7,
  },
  imageContainer: {
    width: '100%',
    height: cardWidth,
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  lowStockBadge: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 87, 34, 0.8)',
    paddingVertical: 4,
    alignItems: 'center',
  },
  lowStockText: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
  },
  productDetails: {
    padding: 12,
  },
  productCategory: {
    fontSize: 11,
    color: '#757575',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  productName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 6,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    fontSize: 12,
    color: '#757575',
    marginLeft: 4,
  },
  priceAddContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121',
  },
  outOfStockText: {
    fontSize: 12,
    color: '#FF5722',
    fontWeight: 'bold',
  },
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#6200EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inCartButton: {
    backgroundColor: '#4CAF50',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    marginTop: 80,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#A0A0A0',
    marginTop: 16,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#A0A0A0',
    textAlign: 'center',
    marginTop: 8,
  },
});




