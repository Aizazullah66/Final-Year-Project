// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { db, auth } from '../firebaseConfig';
// import { doc, updateDoc, increment } from 'firebase/firestore';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function ProductDetail() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { products, cart, setCart, handleAddToCart } = route.params;
//   const user = auth.currentUser;
//   const [userRating, setUserRating] = useState(0); // User’s selected rating

//   const submitRating = async () => {
//     if (!user) {
//       Alert.alert('Error', 'Please log in to rate this product.');
//       return;
//     }

//     try {
//       const productRef = doc(db, 'products', product.id);
//       // Simplified rating update: increment total ratings and count
//       await updateDoc(productRef, {
//         ratings: (product.ratings * (product.ratingsCount || 0) + userRating) / ((product.ratingsCount || 0) + 1),
//         ratingsCount: increment(1),
//       });
//       Alert.alert('Success', 'Rating submitted!');
//       setUserRating(0); // Reset rating
//     } catch (error) {
//       console.error('Error submitting rating:', error);
//       Alert.alert('Error', 'Failed to submit rating.');
//     }
//   };

//   return (
//     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={30} color="#FF5E9B" />
//         </TouchableOpacity>
//         <Image source={{ uri: products.imageUrl }} style={styles.productImage} />
//         <View style={styles.detailsContainer}>
//           <Text style={styles.productName}>{products.name}</Text>
//           <Text style={styles.productPrice}>${products.price}</Text>
//           <View style={styles.ratingsContainer}>
//             <Text style={styles.ratingsLabel}>Average Rating: </Text>
//             {[...Array(5)].map((_, index) => (
//               <Ionicons
//                 key={index}
//                 name={index < Math.round(products.ratings) ? 'star' : 'star-outline'}
//                 size={20}
//                 color="#FF5E9B"
//               />
//             ))}
//             <Text style={styles.ratingsText}>({products.ratings.toFixed(1)} / {products.ratingsCount || 0} reviews)</Text>
//           </View>
//           <Text style={styles.productDescription}>{products.description}</Text>
//           <TouchableOpacity
//             style={styles.addToCartButton}
//             onPress={() => handleAddToCart(products)}
//           >
//             <Text style={styles.addToCartText}>Add to Cart</Text>
//           </TouchableOpacity>
//           <View style={styles.ratingSection}>
//             <Text style={styles.ratingLabel}>Rate this product:</Text>
//             <View style={styles.starContainer}>
//               {[...Array(5)].map((_, index) => (
//                 <TouchableOpacity
//                   key={index}
//                   onPress={() => setUserRating(index + 1)}
//                 >
//                   <Ionicons
//                     name={index < userRating ? 'star' : 'star-outline'}
//                     size={30}
//                     color="#FF5E9B"
//                   />
//                 </TouchableOpacity>
//               ))}
//             </View>
//             {userRating > 0 && (
//               <TouchableOpacity style={styles.submitRatingButton} onPress={submitRating}>
//                 <Text style={styles.submitRatingText}>Submit Rating</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         </View>
//       </ScrollView>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   gradientContainer: {
//     flex: 1,
//   },
//   scrollContent: {
//     paddingTop: 50,
//     paddingBottom: 20,
//     alignItems: 'center',
//   },
//   backButton: {
//     position: 'absolute',
//     top: 40,
//     left: 20,
//     zIndex: 1,
//   },
//   productImage: {
//     width: '90%',
//     height: 300,
//     borderRadius: 12,
//     marginBottom: 20,
//   },
//   detailsContainer: {
//     width: '90%',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     padding: 20,
//     alignItems: 'center',
//   },
//   productName: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   productPrice: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#FF5E9B',
//     marginBottom: 15,
//   },
//   ratingsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   ratingsLabel: {
//     color: '#D1D1D1',
//     fontSize: 16,
//     marginRight: 5,
//   },
//   ratingsText: {
//     color: '#D1D1D1',
//     fontSize: 14,
//     marginLeft: 5,
//   },
//   productDescription: {
//     fontSize: 16,
//     color: '#D1D1D1',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   addToCartButton: {
//     backgroundColor: '#FF5E9B',
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 25,
//     marginBottom: 20,
//   },
//   addToCartText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   ratingSection: {
//     alignItems: 'center',
//   },
//   ratingLabel: {
//     fontSize: 16,
//     color: '#FFFFFF',
//     marginBottom: 10,
//   },
//   starContainer: {
//     flexDirection: 'row',
//     marginBottom: 15,
//   },
//   submitRatingButton: {
//     backgroundColor: '#FF5E9B',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//   },
//   submitRatingText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });






// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { db, auth } from '../firebaseConfig';
// import { doc, updateDoc, increment } from 'firebase/firestore';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function ProductDetail() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { product, cart, setCart, handleAddToCart } = route.params; // Fixed from 'products' to 'product'
//   const user = auth.currentUser;
//   const [userRating, setUserRating] = useState(0); // User’s selected rating

//   const submitRating = async () => {
//     if (!user) {
//       Alert.alert('Error', 'Please log in to rate this product.');
//       return;
//     }

//     if (!product || !product.id) {
//       Alert.alert('Error', 'Invalid product data.');
//       return;
//     }

//     try {
//       const productRef = doc(db, 'products', product.id);
//       const currentRatings = typeof product.ratings === 'number' ? product.ratings : 0;
//       const currentCount = product.ratingsCount || 0;
//       const newAverage = (currentRatings * currentCount + userRating) / (currentCount + 1);

//       await updateDoc(productRef, {
//         ratings: newAverage,
//         ratingsCount: increment(1),
//       });
//       Alert.alert('Success', 'Rating submitted!');
//       setUserRating(0); // Reset rating
//     } catch (error) {
//       console.error('Error submitting rating:', error);
//       Alert.alert('Error', 'Failed to submit rating.');
//     }
//   };

//   if (!product) {
//     return (
//       <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
//         <Text style={styles.errorText}>Product data not available.</Text>
//       </LinearGradient>
//     );
//   }

//   return (
//     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={30} color="#FF5E9B" />
//         </TouchableOpacity>
//         <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
//         <View style={styles.detailsContainer}>
//           <Text style={styles.productName}>{product.name}</Text>
//           <Text style={styles.productPrice}>${product.price}</Text>
//           <View style={styles.ratingsContainer}>
//             <Text style={styles.ratingsLabel}>Average Rating: </Text>
//             {[...Array(5)].map((_, index) => (
//               <Ionicons
//                 key={index}
//                 name={index < Math.round(product.ratings || 0) ? 'star' : 'star-outline'}
//                 size={20}
//                 color="#FF5E9B"
//               />
//             ))}
//             <Text style={styles.ratingsText}>
//               ({typeof product.ratings === 'number' ? product.ratings.toFixed(1) : '0.0'} / {product.ratingsCount || 0} reviews)
//             </Text>
//           </View>
//           <Text style={styles.productDescription}>{product.description}</Text>
//           <TouchableOpacity
//             style={styles.addToCartButton}
//             onPress={() => handleAddToCart(product)}
//           >
//             <Text style={styles.addToCartText}>Add to Cart</Text>
//           </TouchableOpacity>
//           <View style={styles.ratingSection}>
//             <Text style={styles.ratingLabel}>Rate this product:</Text>
//             <View style={styles.starContainer}>
//               {[...Array(5)].map((_, index) => (
//                 <TouchableOpacity
//                   key={index}
//                   onPress={() => setUserRating(index + 1)}
//                 >
//                   <Ionicons
//                     name={index < userRating ? 'star' : 'star-outline'}
//                     size={30}
//                     color="#FF5E9B"
//                   />
//                 </TouchableOpacity>
//               ))}
//             </View>
//             {userRating > 0 && (
//               <TouchableOpacity style={styles.submitRatingButton} onPress={submitRating}>
//                 <Text style={styles.submitRatingText}>Submit Rating</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         </View>
//       </ScrollView>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   gradientContainer: {
//     flex: 1,
//   },
//   scrollContent: {
//     paddingTop: 50,
//     paddingBottom: 20,
//     alignItems: 'center',
//   },
//   backButton: {
//     position: 'absolute',
//     top: 40,
//     left: 20,
//     zIndex: 1,
//   },
//   productImage: {
//     width: '90%',
//     height: 300,
//     borderRadius: 12,
//     marginBottom: 20,
//   },
//   detailsContainer: {
//     width: '90%',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     padding: 20,
//     alignItems: 'center',
//   },
//   productName: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   productPrice: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#FF5E9B',
//     marginBottom: 15,
//   },
//   ratingsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   ratingsLabel: {
//     color: '#D1D1D1',
//     fontSize: 16,
//     marginRight: 5,
//   },
//   ratingsText: {
//     color: '#D1D1D1',
//     fontSize: 14,
//     marginLeft: 5,
//   },
//   productDescription: {
//     fontSize: 16,
//     color: '#D1D1D1',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   addToCartButton: {
//     backgroundColor: '#FF5E9B',
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 25,
//     marginBottom: 20,
//   },
//   addToCartText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   ratingSection: {
//     alignItems: 'center',
//   },
//   ratingLabel: {
//     fontSize: 16,
//     color: '#FFFFFF',
//     marginBottom: 10,
//   },
//   starContainer: {
//     flexDirection: 'row',
//     marginBottom: 15,
//   },
//   submitRatingButton: {
//     backgroundColor: '#FF5E9B',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//   },
//   submitRatingText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   errorText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     textAlign: 'center',
//     marginTop: 50,
//   },
// });



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { db, auth } from '../firebaseConfig';
// import { doc, updateDoc, increment } from 'firebase/firestore';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function ProductDetail() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { product, cart, setCart, handleAddToCart } = route.params; // Use 'product' as passed from ShopProducts
//   const user = auth.currentUser;
//   const [userRating, setUserRating] = useState(0);

//   const submitRating = async () => {
//     if (!user) {
//       Alert.alert('Error', 'Please log in to rate this product.');
//       return;
//     }

//     if (!product || !product.id) {
//       Alert.alert('Error', 'Invalid product data.');
//       return;
//     }

//     try {
//       const productRef = doc(db, 'products', product.id);
//       const currentRatings = typeof product.ratings === 'number' ? product.ratings : 0;
//       const currentCount = product.ratingsCount || 0;
//       const newAverage = (currentRatings * currentCount + userRating) / (currentCount + 1);

//       await updateDoc(productRef, {
//         ratings: newAverage,
//         ratingsCount: increment(1),
//       });
//       Alert.alert('Success', 'Rating submitted!');
//       setUserRating(0);
//     } catch (error) {
//       console.error('Error submitting rating:', error);
//       Alert.alert('Error', 'Failed to submit rating.');
//     }
//   };

//   if (!product) {
//     return (
//       <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
//         <Text style={styles.errorText}>Product data not available.</Text>
//       </LinearGradient>
//     );
//   }

//   // Parse price and stock from strings to numbers
//   const price = parseFloat(product.price) || 0;
//   const stock = parseInt(product.stock, 10) || 0;

//   return (
//     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={30} color="#FF5E9B" />
//         </TouchableOpacity>
//         <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
//         <View style={styles.detailsContainer}>
//           <Text style={styles.productName}>{product.name}</Text>
//           <Text style={styles.productPrice}>${price.toFixed(2)}</Text>
//           <Text style={styles.stockText}>Stock: {stock}</Text>
//           <View style={styles.ratingsContainer}>
//             <Text style={styles.ratingsLabel}>Average Rating: </Text>
//             {[...Array(5)].map((_, index) => (
//               <Ionicons
//                 key={index}
//                 name={index < Math.round(product.ratings || 0) ? 'star' : 'star-outline'}
//                 size={20}
//                 color="#FF5E9B"
//               />
//             ))}
//             <Text style={styles.ratingsText}>
//               ({typeof product.ratings === 'number' ? product.ratings.toFixed(1) : '0.0'} / {product.ratingsCount || 0} reviews)
//             </Text>
//           </View>
//           <Text style={styles.productDescription}>{product.description}</Text>
//           <TouchableOpacity
//             style={[styles.addToCartButton, stock === 0 && styles.disabledButton]}
//             onPress={() => stock > 0 && handleAddToCart(product)}
//             disabled={stock === 0}
//           >
//             <Text style={styles.addToCartText}>
//               {stock > 0 ? 'Add to Cart' : 'Out of Stock'}
//             </Text>
//           </TouchableOpacity>
//           <View style={styles.ratingSection}>
//             <Text style={styles.ratingLabel}>Rate this product:</Text>
//             <View style={styles.starContainer}>
//               {[...Array(5)].map((_, index) => (
//                 <TouchableOpacity
//                   key={index}
//                   onPress={() => setUserRating(index + 1)}
//                 >
//                   <Ionicons
//                     name={index < userRating ? 'star' : 'star-outline'}
//                     size={30}
//                     color="#FF5E9B"
//                   />
//                 </TouchableOpacity>
//               ))}
//             </View>
//             {userRating > 0 && (
//               <TouchableOpacity style={styles.submitRatingButton} onPress={submitRating}>
//                 <Text style={styles.submitRatingText}>Submit Rating</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         </View>
//       </ScrollView>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   gradientContainer: {
//     flex: 1,
//   },
//   scrollContent: {
//     paddingTop: 50,
//     paddingBottom: 20,
//     alignItems: 'center',
//   },
//   backButton: {
//     position: 'absolute',
//     top: 40,
//     left: 20,
//     zIndex: 1,
//   },
//   productImage: {
//     width: '90%',
//     height: 300,
//     borderRadius: 12,
//     marginBottom: 20,
//   },
//   detailsContainer: {
//     width: '90%',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     padding: 20,
//     alignItems: 'center',
//   },
//   productName: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   productPrice: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#FF5E9B',
//     marginBottom: 10,
//   },
//   stockText: {
//     fontSize: 16,
//     color: '#D1D1D1',
//     marginBottom: 15,
//   },
//   ratingsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   ratingsLabel: {
//     color: '#D1D1D1',
//     fontSize: 16,
//     marginRight: 5,
//   },
//   ratingsText: {
//     color: '#D1D1D1',
//     fontSize: 14,
//     marginLeft: 5,
//   },
//   productDescription: {
//     fontSize: 16,
//     color: '#D1D1D1',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   addToCartButton: {
//     backgroundColor: '#FF5E9B',
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 25,
//     marginBottom: 20,
//   },
//   disabledButton: {
//     backgroundColor: '#A0A0A0',
//   },
//   addToCartText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   ratingSection: {
//     alignItems: 'center',
//   },
//   ratingLabel: {
//     fontSize: 16,
//     color: '#FFFFFF',
//     marginBottom: 10,
//   },
//   starContainer: {
//     flexDirection: 'row',
//     marginBottom: 15,
//   },
//   submitRatingButton: {
//     backgroundColor: '#FF5E9B',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//   },
//   submitRatingText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   errorText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     textAlign: 'center',
//     marginTop: 50,
//   },
// });


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { db, auth } from '../firebaseConfig';
// import { doc, updateDoc, increment } from 'firebase/firestore';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function ProductDetail() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { product, cart, setCart, handleAddToCart } = route.params;
//   const user = auth.currentUser;
//   const [userRating, setUserRating] = useState(0);

//   const submitRating = async () => {
//     if (!user) {
//       Alert.alert('Error', 'Please log in to rate this product.');
//       return;
//     }

//     if (!product || !product.id) {
//       Alert.alert('Error', 'Invalid product data.');
//       return;
//     }

//     try {
//       const productRef = doc(db, 'products', product.id);
//       const currentRatings = typeof product.ratings === 'number' ? product.ratings : 0;
//       const currentCount = product.ratingsCount || 0;
//       const newAverage = (currentRatings * currentCount + userRating) / (currentCount + 1);

//       await updateDoc(productRef, {
//         ratings: newAverage,
//         ratingsCount: increment(1),
//       });
//       Alert.alert('Success', 'Rating submitted!');
//       setUserRating(0);
//     } catch (error) {
//       console.error('Error submitting rating:', error);
//       Alert.alert('Error', 'Failed to submit rating.');
//     }
//   };

//   if (!product) {
//     return (
//       <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
//         <Text style={styles.errorText}>Product data not available.</Text>
//       </LinearGradient>
//     );
//   }

//   // Parse price and stock from strings to numbers
//   const price = parseFloat(product.price) || 0;
//   const stock = parseInt(product.stock, 10) || 0;

//   return (
//     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         {/* Header with Back Button */}
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Ionicons name="arrow-back" size={30} color="#FF5E9B" />
//           </TouchableOpacity>
//         </View>

//         {/* Product Image */}
//         <Image source={{ uri: product.imageUrl }} style={styles.productImage} />

//         {/* Product Details */}
//         <View style={styles.detailsContainer}>
//           <Text style={styles.productName}>{product.name}</Text>
//           <Text style={styles.productPrice}>${price.toFixed(2)}</Text>
//           <Text style={styles.stockText}>Stock: {stock}</Text>

//           {/* Ratings Section */}
//           <View style={styles.ratingsContainer}>
//             <Text style={styles.ratingsLabel}>Average Rating:</Text>
//             <View style={styles.starRow}>
//               {[...Array(5)].map((_, index) => (
//                 <Ionicons
//                   key={index}
//                   name={index < Math.round(product.ratings || 0) ? 'star' : 'star-outline'}
//                   size={20}
//                   color="#FF5E9B"
//                 />
//               ))}
//             </View>
//             <Text style={styles.ratingsText}>
//               {typeof product.ratings === 'number' ? product.ratings.toFixed(1) : '0.0'} / 5 ({product.ratingsCount || 0} reviews)
//             </Text>
//           </View>

//           {/* Description */}
//           <Text style={styles.productDescription}>{product.description}</Text>

//           {/* Add to Cart Button */}
//           <TouchableOpacity
//             style={[styles.addToCartButton, stock === 0 && styles.disabledButton]}
//             onPress={() => stock > 0 && handleAddToCart(product)}
//             disabled={stock === 0}
//           >
//             <Text style={styles.addToCartText}>
//               {stock > 0 ? 'Add to Cart' : 'Out of Stock'}
//             </Text>
//           </TouchableOpacity>

//           {/* Rating Section */}
//           <View style={styles.ratingSection}>
//             <Text style={styles.ratingLabel}>Rate this product:</Text>
//             <View style={styles.starContainer}>
//               {[...Array(5)].map((_, index) => (
//                 <TouchableOpacity
//                   key={index}
//                   onPress={() => setUserRating(index + 1)}
//                 >
//                   <Ionicons
//                     name={index < userRating ? 'star' : 'star-outline'}
//                     size={30}
//                     color="#FF5E9B"
//                   />
//                 </TouchableOpacity>
//               ))}
//             </View>
//             {userRating > 0 && (
//               <TouchableOpacity style={styles.submitRatingButton} onPress={submitRating}>
//                 <Text style={styles.submitRatingText}>Submit Rating</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         </View>
//       </ScrollView>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   gradientContainer: {
//     flex: 1,
//   },
//   scrollContent: {
//     paddingBottom: 20,
//   },
//   header: {
//     paddingTop: 40, // Space for status bar
//     paddingHorizontal: 20,
//     paddingBottom: 10,
//   },
//   backButton: {
//     alignSelf: 'flex-start',
//   },
//   productImage: {
//     width: '100%',
//     height: 300,
//     resizeMode: 'cover',
//     borderRadius:20
//   },
//   detailsContainer: {
//     width: '90%',
//     alignSelf: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     padding: 20,
//     marginTop: 10,
//   },
//   productName: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     textAlign: 'center',
//     marginBottom: 15,
//   },
//   productPrice: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#FF5E9B',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   stockText: {
//     fontSize: 16,
//     color: '#D1D1D1',
//     textAlign: 'center',
//     marginBottom: 15,
//   },
//   ratingsContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   ratingsLabel: {
//     fontSize: 16,
//     color: '#D1D1D1',
//     marginBottom: 5,
//   },
//   starRow: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 5,
//   },
//   ratingsText: {
//     fontSize: 14,
//     color: '#D1D1D1',
//   },
//   productDescription: {
//     fontSize: 16,
//     color: '#D1D1D1',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   addToCartButton: {
//     backgroundColor: '#FF5E9B',
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 25,
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   disabledButton: {
//     backgroundColor: '#A0A0A0',
//   },
//   addToCartText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   ratingSection: {
//     alignItems: 'center',
//   },
//   ratingLabel: {
//     fontSize: 16,
//     color: '#FFFFFF',
//     marginBottom: 10,
//   },
//   starContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 15,
//   },
//   submitRatingButton: {
//     backgroundColor: '#FF5E9B',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//   },
//   submitRatingText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   errorText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     textAlign: 'center',
//     marginTop: 50,
//   },
// });



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { db, auth } from '../firebaseConfig';
// import { doc, updateDoc, increment } from 'firebase/firestore';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function ProductDetail() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { product, cart, setCart, handleAddToCart } = route.params;
//   const user = auth.currentUser;
//   const [userRating, setUserRating] = useState(0);

//   const submitRating = async () => {
//     if (!user) {
//       Alert.alert('Error', 'Please log in to rate this product.');
//       return;
//     }

//     if (!product || !product.id) {
//       Alert.alert('Error', 'Invalid product data.');
//       return;
//     }

//     try {
//       const productRef = doc(db, 'products', product.id);
//       const currentRatings = typeof product.ratings === 'number' ? product.ratings : 0;
//       const currentCount = product.ratingsCount || 0;
//       const newAverage = (currentRatings * currentCount + userRating) / (currentCount + 1);

//       await updateDoc(productRef, {
//         ratings: newAverage,
//         ratingsCount: increment(1),
//       });
//       Alert.alert('Success', 'Rating submitted!');
//       setUserRating(0);
//     } catch (error) {
//       console.error('Error submitting rating:', error);
//       Alert.alert('Error', 'Failed to submit rating.');
//     }
//   };

//   if (!product) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.errorText}>Product data not available.</Text>
//       </View>
//     );
//   }

//   // Parse price and stock from strings to numbers
//   const price = parseFloat(product.price) || 0;
//   const stock = parseInt(product.stock, 10) || 0;

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         {/* Header with Back Button */}
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Ionicons name="arrow-back" size={30} color="#A84CF2" /> {/* Changed to #A84CF2 */}
//           </TouchableOpacity>
//         </View>

//         {/* Product Image */}
//         <Image source={{ uri: product.imageUrl }} style={styles.productImage} />

//         {/* Product Details */}
//         <View style={styles.detailsContainer}>
//           <Text style={styles.productName}>{product.name}</Text>
//           <Text style={styles.productPrice}>${price.toFixed(2)}</Text>
//           <Text style={styles.stockText}>Stock: {stock}</Text>

//           {/* Ratings Section */}
//           <View style={styles.ratingsContainer}>
//             <Text style={styles.ratingsLabel}>Average Rating:</Text>
//             <View style={styles.starRow}>
//               {[...Array(5)].map((_, index) => (
//                 <Ionicons
//                   key={index}
//                   name={index < Math.round(product.ratings || 0) ? 'star' : 'star-outline'}
//                   size={20}
//                   color="#A84CF2" // Changed to #A84CF2
//                 />
//               ))}
//             </View>
//             <Text style={styles.ratingsText}>
//               {typeof product.ratings === 'number' ? product.ratings.toFixed(1) : '0.0'} / 5 ({product.ratingsCount || 0} reviews)
//             </Text>
//           </View>

//           {/* Description */}
//           <Text style={styles.productDescription}>{product.description}</Text>

//           {/* Add to Cart Button */}
//           <TouchableOpacity
//             style={[styles.addToCartButton, stock === 0 && styles.disabledButton]}
//             onPress={() => stock > 0 && handleAddToCart(product)}
//             disabled={stock === 0}
//           >
//             <Text style={styles.addToCartText}>
//               {stock > 0 ? 'Add to Cart' : 'Out of Stock'}
//             </Text>
//           </TouchableOpacity>

//           {/* Rating Section */}
//           <View style={styles.ratingSection}>
//             <Text style={styles.ratingLabel}>Rate this product:</Text>
//             <View style={styles.starContainer}>
//               {[...Array(5)].map((_, index) => (
//                 <TouchableOpacity
//                   key={index}
//                   onPress={() => setUserRating(index + 1)}
//                 >
//                   <Ionicons
//                     name={index < userRating ? 'star' : 'star-outline'}
//                     size={30}
//                     color="#A84CF2" // Changed to #A84CF2
//                   />
//                 </TouchableOpacity>
//               ))}
//             </View>
//             {userRating > 0 && (
//               <TouchableOpacity style={styles.submitRatingButton} onPress={submitRating}>
//                 <Text style={styles.submitRatingText}>Submit Rating</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF', // Changed to white background
//   },
//   scrollContent: {
//     paddingBottom: 20,
//   },
//   header: {
//     paddingTop: 40, // Space for status bar
//     paddingHorizontal: 20,
//     paddingBottom: 10,
//   },
//   backButton: {
//     alignSelf: 'flex-start',
//   },
//   productImage: {
//     width: '100%',
//     height: 300,
//     resizeMode: 'cover',
//     borderRadius: 20,
//   },
//   detailsContainer: {
//     width: '90%',
//     alignSelf: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.2)', // Adjusted for white background contrast
//     borderRadius: 12,
//     padding: 20,
//     marginTop: 10,
//   },
//   productName: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#333333', // Changed to dark gray for white background
//     textAlign: 'center',
//     marginBottom: 15,
//   },
//   productPrice: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#A84CF2', // Changed to #A84CF2
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   stockText: {
//     fontSize: 16,
//     color: '#666666', // Changed to medium gray for white background
//     textAlign: 'center',
//     marginBottom: 15,
//   },
//   ratingsContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   ratingsLabel: {
//     fontSize: 16,
//     color: '#666666', // Changed to medium gray for white background
//     marginBottom: 5,
//   },
//   starRow: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 5,
//   },
//   ratingsText: {
//     fontSize: 14,
//     color: '#666666', // Changed to medium gray for white background
//   },
//   productDescription: {
//     fontSize: 16,
//     color: '#666666', // Changed to medium gray for white background
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   addToCartButton: {
//     backgroundColor: '#A84CF2', // Changed to #A84CF2
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 25,
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   disabledButton: {
//     backgroundColor: '#A0A0A0',
//   },
//   addToCartText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   ratingSection: {
//     alignItems: 'center',
//   },
//   ratingLabel: {
//     fontSize: 16,
//     color: '#333333', // Changed to dark gray for white background
//     marginBottom: 10,
//   },
//   starContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 15,
//   },
//   submitRatingButton: {
//     backgroundColor: '#A84CF2', // Changed to #A84CF2
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//   },
//   submitRatingText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   errorText: {
//     color: '#333333', // Changed to dark gray for white background
//     fontSize: 18,
//     textAlign: 'center',
//     marginTop: 50,
//   },
// });


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { db, auth } from '../firebaseConfig';
// import { doc, updateDoc, increment } from 'firebase/firestore';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function ProductDetail() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { product, cart, setCart, handleAddToCart } = route.params;
//   const user = auth.currentUser;
//   const [userRating, setUserRating] = useState(0);

//   const submitRating = async () => {
//     if (!user) {
//       Alert.alert('Error', 'Please log in to rate this product.');
//       return;
//     }

//     if (!product || !product.id) {
//       Alert.alert('Error', 'Invalid product data.');
//       return;
//     }

//     try {
//       const productRef = doc(db, 'products', product.id);
//       const currentRatings = typeof product.ratings === 'number' ? product.ratings : 0;
//       const currentCount = product.ratingsCount || 0;
//       const newAverage = (currentRatings * currentCount + userRating) / (currentCount + 1);

//       await updateDoc(productRef, {
//         ratings: newAverage,
//         ratingsCount: increment(1),
//       });
//       Alert.alert('Success', 'Rating submitted!');
//       setUserRating(0);
//     } catch (error) {
//       console.error('Error submitting rating:', error);
//       Alert.alert('Error', 'Failed to submit rating.');
//     }
//   };

//   if (!product) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.errorText}>Product data not available.</Text>
//       </View>
//     );
//   }

//   // Parse price and stock from strings to numbers
//   const price = parseFloat(product.price) || 0;
//   const stock = parseInt(product.stock, 10) || 0;

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         {/* Header with Back Button */}
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Ionicons name="arrow-back" size={30} color="#4A90E2" />
//           </TouchableOpacity>
//         </View>

//         {/* Product Image */}
//         <Image source={{ uri: product.imageUrl }} style={styles.productImage} />

//         {/* Product Details Card */}
//         <View style={styles.detailsCard}>
//           <Text style={styles.productName}>{product.name}</Text>
//           <Text style={styles.productPrice}>${price.toFixed(2)}</Text>
//           <Text style={styles.stockText}>Stock: {stock}</Text>

//           {/* Ratings Section */}
//           <View style={styles.ratingsContainer}>
//             <Text style={styles.ratingsLabel}>Average Rating:</Text>
//             <View style={styles.starRow}>
//               {[...Array(5)].map((_, index) => (
//                 <Ionicons
//                   key={index}
//                   name={index < Math.round(product.ratings || 0) ? 'star' : 'star-outline'}
//                   size={20}
//                   color="#FFD700" // Gold stars
//                 />
//               ))}
//             </View>
//             <Text style={styles.ratingsText}>
//               {typeof product.ratings === 'number' ? product.ratings.toFixed(1) : '0.0'} / 5 ({product.ratingsCount || 0} reviews)
//             </Text>
//           </View>

//           {/* Description */}
//           <Text style={styles.productDescription}>{product.description}</Text>

//           {/* Add to Cart Button */}
//           <TouchableOpacity
//             style={[styles.addToCartButton, stock === 0 && styles.disabledButton]}
//             onPress={() => stock > 0 && handleAddToCart(product)}
//             disabled={stock === 0}
//           >
//             <Text style={styles.addToCartText}>
//               {stock > 0 ? 'Add to Cart' : 'Out of Stock'}
//             </Text>
//           </TouchableOpacity>

//           {/* Rating Section */}
//           <View style={styles.ratingSection}>
//             <Text style={styles.ratingLabel}>Rate this product:</Text>
//             <View style={styles.starContainer}>
//               {[...Array(5)].map((_, index) => (
//                 <TouchableOpacity
//                   key={index}
//                   onPress={() => setUserRating(index + 1)}
//                 >
//                   <Ionicons
//                     name={index < userRating ? 'star' : 'star-outline'}
//                     size={30}
//                     color="#4A90E2"
//                   />
//                 </TouchableOpacity>
//               ))}
//             </View>
//             {userRating > 0 && (
//               <TouchableOpacity style={styles.submitRatingButton} onPress={submitRating}>
//                 <Text style={styles.submitRatingText}>Submit Rating</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F0F4F8', // Soft blue-gray background
//   },
//   scrollContent: {
//     paddingBottom: 30,
//   },
//   header: {
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
//     alignSelf: 'flex-start',
//   },
//   productImage: {
//     width: '100%',
//     height: 350,
//     resizeMode: 'cover',
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//   },
//   detailsCard: {
//     width: '90%',
//     alignSelf: 'center',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 20,
//     padding: 20,
//     marginTop: -20, // Slight overlap with image for seamless transition
//     elevation: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//   },
//   productName: {
//     fontSize: 26,
//     fontWeight: '700',
//     color: '#2D3748',
//     textAlign: 'center',
//     marginBottom: 15,
//   },
//   productPrice: {
//     fontSize: 22,
//     fontWeight: '600',
//     color: '#4A90E2',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   stockText: {
//     fontSize: 16,
//     color: '#718096',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   ratingsContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   ratingsLabel: {
//     fontSize: 16,
//     color: '#718096',
//     marginBottom: 5,
//   },
//   starRow: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 5,
//   },
//   ratingsText: {
//     fontSize: 14,
//     color: '#4A90E2',
//     textAlign: 'center',
//   },
//   productDescription: {
//     fontSize: 16,
//     color: '#4A90E2',
//     textAlign: 'center',
//     marginBottom: 25,
//     lineHeight: 24,
//   },
//   addToCartButton: {
//     backgroundColor: '#4A90E2',
//     paddingVertical: 14,
//     paddingHorizontal: 40,
//     borderRadius: 25,
//     alignItems: 'center',
//     marginBottom: 20,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   disabledButton: {
//     backgroundColor: '#A0AEC0',
//   },
//   addToCartText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   ratingSection: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   ratingLabel: {
//     fontSize: 16,
//     color: '#2D3748',
//     marginBottom: 10,
//   },
//   starContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 15,
//   },
//   submitRatingButton: {
//     backgroundColor: '#4A90E2',
//     paddingVertical: 10,
//     paddingHorizontal: 25,
//     borderRadius: 8,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   submitRatingText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   errorText: {
//     color: '#2D3748',
//     fontSize: 18,
//     textAlign: 'center',
//     marginTop: 50,
//   },
// });


// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Alert,
//   ActivityIndicator,
//   Animated,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { db, auth } from '../firebaseConfig';
// import { doc, updateDoc, increment } from 'firebase/firestore';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function ProductDetail() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { product, cart, setCart, handleAddToCart } = route.params || {};
//   const user = auth.currentUser;
//   const [userRating, setUserRating] = useState(0);
//   const [submittingRating, setSubmittingRating] = useState(false); // Track rating submission
//   const fadeAnim = useState(new Animated.Value(0))[0]; // Fade-in animation
//   const [buttonScale] = useState(new Animated.Value(1)); // Animation for Add to Cart button
//   const [submitScale] = useState(new Animated.Value(1)); // Animation for Submit Rating button

//   useEffect(() => {
//     // Fade-in animation
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

//   const submitRating = async () => {
//     if (!user) {
//       Alert.alert('Error', 'Please log in to rate this product.');
//       return;
//     }

//     if (!product || !product.id) {
//       Alert.alert('Error', 'Invalid product data.');
//       return;
//     }

//     setSubmittingRating(true);
//     try {
//       const productRef = doc(db, 'products', product.id);
//       const currentRatings = typeof product.ratings === 'number' ? product.ratings : 0;
//       const currentCount = product.ratingsCount || 0;
//       const newAverage = (currentRatings * currentCount + userRating) / (currentCount + 1);

//       await updateDoc(productRef, {
//         ratings: newAverage,
//         ratingsCount: increment(1),
//       });
//       Alert.alert('Success', 'Rating submitted!');
//       setUserRating(0);
//     } catch (error) {
//       console.error('Error submitting rating:', error);
//       Alert.alert('Error', 'Failed to submit rating.');
//     } finally {
//       setSubmittingRating(false);
//     }
//   };

//   if (!product) {
//     return (
//       <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
//         <Text style={styles.errorText}>Product data not available.</Text>
//       </LinearGradient>
//     );
//   }

//   // Parse price and stock from strings to numbers
//   const price = parseFloat(product.price) || 0;
//   const stock = parseInt(product.stock, 10) || 0;

//   return (
//     <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
//       <Animated.View style={{ opacity: fadeAnim }}>
//         <ScrollView contentContainerStyle={styles.scrollContent}>
//           {/* Header with Back Button */}
//           <LinearGradient
//             colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)']}
//             style={styles.header}
//           >
//             <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//               <Ionicons name="arrow-back" size={30} color="#FFFFFF" />
//             </TouchableOpacity>
//           </LinearGradient>

//           {/* Product Image */}
//           <Image source={{ uri: product.imageUrl }} style={styles.productImage} />

//           {/* Product Details Card */}
//           <LinearGradient
//             colors={['#FFFFFF', '#F5F7FA']} // Match UserDashboard card gradient
//             style={styles.detailsCard}
//           >
//             <Text style={styles.productName}>{product.name}</Text>
//             <Text style={styles.productPrice}>${price.toFixed(2)}</Text>
//             <Text style={styles.stockText}>
//               {stock > 0 ? `In Stock: ${stock}` : 'Out of Stock'}
//             </Text>

//             {/* Ratings Section */}
//             <View style={styles.ratingsContainer}>
//               <Text style={styles.ratingsLabel}>Average Rating:</Text>
//               <View style={styles.starRow}>
//                 {[...Array(5)].map((_, index) => (
//                   <Ionicons
//                     key={index}
//                     name={index < Math.round(product.ratings || 0) ? 'star' : 'star-outline'}
//                     size={20}
//                     color="#FFD700"
//                   />
//                 ))}
//               </View>
//               <Text style={styles.ratingsText}>
//                 {typeof product.ratings === 'number' ? product.ratings.toFixed(1) : '0.0'} / 5 ({product.ratingsCount || 0} reviews)
//               </Text>
//             </View>

//             {/* Description */}
//             <Text style={styles.productDescription}>{product.description || 'No description available.'}</Text>

//             {/* Add to Cart Button */}
//             <TouchableOpacity
//               style={[styles.addToCartButton, stock === 0 && styles.disabledButton]}
//               onPressIn={() => handlePressIn(buttonScale)}
//               onPressOut={() => handlePressOut(buttonScale)}
//               onPress={() => stock > 0 && handleAddToCart(product)}
//               disabled={stock === 0}
//             >
//               <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
//                 <LinearGradient
//                   colors={stock > 0 ? ['#FF6F61', '#FF9F1C'] : ['#A0AEC0', '#A0AEC0']}
//                   style={styles.addToCartGradient}
//                 >
//                   <Text style={styles.addToCartText}>
//                     {stock > 0 ? 'Add to Cart' : 'Out of Stock'}
//                   </Text>
//                 </LinearGradient>
//               </Animated.View>
//             </TouchableOpacity>

//             {/* Rating Section */}
//             <View style={styles.ratingSection}>
//               <Text style={styles.ratingLabel}>Rate this product:</Text>
//               <View style={styles.starContainer}>
//                 {[...Array(5)].map((_, index) => (
//                   <TouchableOpacity
//                     key={index}
//                     onPress={() => setUserRating(index + 1)}
//                     disabled={submittingRating}
//                   >
//                     <Ionicons
//                       name={index < userRating ? 'star' : 'star-outline'}
//                       size={30}
//                       color="#FF6F61"
//                     />
//                   </TouchableOpacity>
//                 ))}
//               </View>
//               {userRating > 0 && (
//                 <TouchableOpacity
//                   style={styles.submitRatingButton}
//                   onPressIn={() => handlePressIn(submitScale)}
//                   onPressOut={() => handlePressOut(submitScale)}
//                   onPress={submitRating}
//                   disabled={submittingRating}
//                 >
//                   <Animated.View style={{ transform: [{ scale: submitScale }] }}>
//                     <LinearGradient
//                       colors={['#34C759', '#28A745']} // Match UserDashboard calories gradient
//                       style={styles.submitRatingGradient}
//                     >
//                       {submittingRating ? (
//                         <ActivityIndicator size="small" color="#FFFFFF" />
//                       ) : (
//                         <Text style={styles.submitRatingText}>Submit Rating</Text>
//                       )}
//                     </LinearGradient>
//                   </Animated.View>
//                 </TouchableOpacity>
//               )}
//             </View>
//           </LinearGradient>
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
//     alignSelf: 'flex-start',
//   },
//   productImage: {
//     width: '100%',
//     height: 350,
//     resizeMode: 'cover',
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//   },
//   detailsCard: {
//     width: '90%',
//     alignSelf: 'center',
//     borderRadius: 20,
//     padding: 20,
//     marginTop: -20, // Overlap with image
//     elevation: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowRadius: 15,
//     shadowOffset: { width: 0, height: 8 },
//   },
//   productName: {
//     fontSize: 26,
//     fontWeight: '800',
//     color: '#1F2937',
//     textAlign: 'center',
//     marginBottom: 15,
//     textShadowColor: 'rgba(0, 0, 0, 0.1)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   productPrice: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#FF6F61', // Match UserDashboard steps accent
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   stockText: {
//     fontSize: 16,
//     color: '#718096',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   ratingsContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   ratingsLabel: {
//     fontSize: 16,
//     color: '#718096',
//     marginBottom: 5,
//   },
//   starRow: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 5,
//   },
//   ratingsText: {
//     fontSize: 14,
//     color: '#1F2937',
//     textAlign: 'center',
//   },
//   productDescription: {
//     fontSize: 16,
//     color: '#4A5568',
//     textAlign: 'center',
//     marginBottom: 25,
//     lineHeight: 24,
//   },
//   addToCartButton: {
//     borderRadius: 25,
//     overflow: 'hidden',
//     marginBottom: 20,
//   },
//   addToCartGradient: {
//     paddingVertical: 14,
//     paddingHorizontal: 40,
//     alignItems: 'center',
//   },
//   disabledButton: {
//     opacity: 0.8,
//   },
//   addToCartText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: '700',
//   },
//   ratingSection: {
//     alignItems: 'center',
//   },
//   ratingLabel: {
//     fontSize: 16,
//     color: '#1F2937',
//     marginBottom: 10,
//   },
//   starContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 15,
//   },
//   submitRatingButton: {
//     borderRadius: 25,
//     overflow: 'hidden',
//   },
//   submitRatingGradient: {
//     paddingVertical: 10,
//     paddingHorizontal: 25,
//     alignItems: 'center',
//   },
//   submitRatingText: {
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


// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Alert,
//   ActivityIndicator,
//   Animated,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { db, auth } from '../firebaseConfig';
// import { doc, updateDoc, increment } from 'firebase/firestore';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function ProductDetail() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { product, cart, setCart, handleAddToCart } = route.params || {};
//   const user = auth.currentUser;
//   const [userRating, setUserRating] = useState(0);
//   const [submittingRating, setSubmittingRating] = useState(false); // Track rating submission
//   const [addingToCart, setAddingToCart] = useState(false); // Track add to cart action
//   const fadeAnim = useState(new Animated.Value(0))[0]; // Fade-in animation
//   const [buttonScale] = useState(new Animated.Value(1)); // Animation for Add to Cart button
//   const [submitScale] = useState(new Animated.Value(1)); // Animation for Submit Rating button

//   useEffect(() => {
//     // Fade-in animation
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

//   const submitRating = async () => {
//     if (!user) {
//       Alert.alert('Error', 'Please log in to rate this product.');
//       return;
//     }

//     if (!product || !product.id) {
//       Alert.alert('Error', 'Invalid product data.');
//       return;
//     }

//     setSubmittingRating(true);
//     try {
//       const productRef = doc(db, 'products', product.id);
//       const currentRatings = typeof product.ratings === 'number' ? product.ratings : 0;
//       const currentCount = product.ratingsCount || 0;
//       const newAverage = (currentRatings * currentCount + userRating) / (currentCount + 1);

//       await updateDoc(productRef, {
//         ratings: newAverage,
//         ratingsCount: increment(1),
//       });
//       Alert.alert('Success', 'Rating submitted!');
//       setUserRating(0);
//     } catch (error) {
//       console.error('Error submitting rating:', error);
//       Alert.alert('Error', 'Failed to submit rating.');
//     } finally {
//       setSubmittingRating(false);
//     }
//   };

//   const handleAddToCartWithLoading = async () => {
//     if (!product || stock <= 0) return;

//     setAddingToCart(true);
//     try {
//       await handleAddToCart(product); // Assuming handleAddToCart is async and handles its own alerts
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//     } finally {
//       setAddingToCart(false);
//     }
//   };

//   if (!product) {
//     return (
//       <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
//         <Text style={styles.errorText}>Product data not available.</Text>
//       </LinearGradient>
//     );
//   }

//   // Parse price and stock from strings to numbers
//   const price = parseFloat(product.price) || 0;
//   const stock = parseInt(product.stock, 10) || 0;

//   return (
//     <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
//       <Animated.View style={{ opacity: fadeAnim }}>
//         <ScrollView contentContainerStyle={styles.scrollContent}>
//           {/* Header with Back Button */}
//           <LinearGradient
//             colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)']}
//             style={styles.header}
//           >
//             <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//               <Ionicons name="arrow-back" size={30} color="#FFFFFF" />
//             </TouchableOpacity>
//           </LinearGradient>

//           {/* Product Image */}
//           <Image source={{ uri: product.imageUrl }} style={styles.productImage} />

//           {/* Product Details Card */}
//           <LinearGradient
//             colors={['#FFFFFF', '#F5F7FA']} // Match UserDashboard card gradient
//             style={styles.detailsCard}
//           >
//             <Text style={styles.productName}>{product.name}</Text>
//             <Text style={styles.productPrice}>${price.toFixed(2)}</Text>
//             <Text style={styles.stockText}>
//               {stock > 0 ? `In Stock: ${stock}` : 'Out of Stock'}
//             </Text>

//             {/* Ratings Section */}
//             <View style={styles.ratingsContainer}>
//               <Text style={styles.ratingsLabel}>Average Rating:</Text>
//               <View style={styles.starRow}>
//                 {[...Array(5)].map((_, index) => (
//                   <Ionicons
//                     key={index}
//                     name={index < Math.round(product.ratings || 0) ? 'star' : 'star-outline'}
//                     size={20}
//                     color="#FFD700"
//                   />
//                 ))}
//               </View>
//               <Text style={styles.ratingsText}>
//                 {typeof product.ratings === 'number' ? product.ratings.toFixed(1) : '0.0'} / 5 ({product.ratingsCount || 0} reviews)
//               </Text>
//             </View>

//             {/* Description */}
//             <Text style={styles.productDescription}>{product.description || 'No description available.'}</Text>

//             {/* Add to Cart Button */}
//             <TouchableOpacity
//               style={[styles.addToCartButton, stock === 0 && styles.disabledButton]}
//               onPressIn={() => handlePressIn(buttonScale)}
//               onPressOut={() => handlePressOut(buttonScale)}
//               onPress={handleAddToCartWithLoading}
//               disabled={stock === 0 || addingToCart}
//             >
//               <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
//                 <LinearGradient
//                   colors={stock > 0 ? ['#FF6F61', '#FF9F1C'] : ['#A0AEC0', '#A0AEC0']}
//                   style={styles.addToCartGradient}
//                 >
//                   {addingToCart ? (
//                     <ActivityIndicator size="small" color="#FFFFFF" />
//                   ) : (
//                     <Text style={styles.addToCartText}>
//                       {stock > 0 ? 'Add to Cart' : 'Out of Stock'}
//                     </Text>
//                   )}
//                 </LinearGradient>
//               </Animated.View>
//             </TouchableOpacity>

//             {/* Rating Section */}
//             <View style={styles.ratingSection}>
//               <Text style={styles.ratingLabel}>Rate this product:</Text>
//               <View style={styles.starContainer}>
//                 {[...Array(5)].map((_, index) => (
//                   <TouchableOpacity
//                     key={index}
//                     onPress={() => setUserRating(index + 1)}
//                     disabled={submittingRating}
//                   >
//                     <Ionicons
//                       name={index < userRating ? 'star' : 'star-outline'}
//                       size={30}
//                       color="#FF6F61"
//                     />
//                   </TouchableOpacity>
//                 ))}
//               </View>
//               {userRating > 0 && (
//                 <TouchableOpacity
//                   style={styles.submitRatingButton}
//                   onPressIn={() => handlePressIn(submitScale)}
//                   onPressOut={() => handlePressOut(submitScale)}
//                   onPress={submitRating}
//                   disabled={submittingRating}
//                 >
//                   <Animated.View style={{ transform: [{ scale: submitScale }] }}>
//                     <LinearGradient
//                       colors={['#34C759', '#28A745']} // Match UserDashboard calories gradient
//                       style={styles.submitRatingGradient}
//                     >
//                       {submittingRating ? (
//                         <ActivityIndicator size="small" color="#FFFFFF" />
//                       ) : (
//                         <Text style={styles.submitRatingText}>Submit Rating</Text>
//                       )}
//                     </LinearGradient>
//                   </Animated.View>
//                 </TouchableOpacity>
//               )}
//             </View>
//           </LinearGradient>
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
//     alignSelf: 'flex-start',
//   },
//   productImage: {
//     width: '100%',
//     height: 350,
//     resizeMode: 'cover',
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//   },
//   detailsCard: {
//     width: '90%',
//     alignSelf: 'center',
//     borderRadius: 20,
//     padding: 20,
//     marginTop: -20, // Overlap with image
//     elevation: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowRadius: 15,
//     shadowOffset: { width: 0, height: 8 },
//   },
//   productName: {
//     fontSize: 26,
//     fontWeight: '800',
//     color: '#1F2937',
//     textAlign: 'center',
//     marginBottom: 15,
//     textShadowColor: 'rgba(0, 0, 0, 0.1)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   productPrice: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#FF6F61', // Match UserDashboard steps accent
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   stockText: {
//     fontSize: 16,
//     color: '#718096',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   ratingsContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   ratingsLabel: {
//     fontSize: 16,
//     color: '#718096',
//     marginBottom: 5,
//   },
//   starRow: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 5,
//   },
//   ratingsText: {
//     fontSize: 14,
//     color: '#1F2937',
//     textAlign: 'center',
//   },
//   productDescription: {
//     fontSize: 16,
//     color: '#4A5568',
//     textAlign: 'center',
//     marginBottom: 25,
//     lineHeight: 24,
//   },
//   addToCartButton: {
//     borderRadius: 25,
//     overflow: 'hidden',
//     marginBottom: 20,
//   },
//   addToCartGradient: {
//     paddingVertical: 14,
//     paddingHorizontal: 40,
//     alignItems: 'center',
//   },
//   disabledButton: {
//     opacity: 0.8,
//   },
//   addToCartText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: '700',
//   },
//   ratingSection: {
//     alignItems: 'center',
//   },
//   ratingLabel: {
//     fontSize: 16,
//     color: '#1F2937',
//     marginBottom: 10,
//   },
//   starContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 15,
//   },
//   submitRatingButton: {
//     borderRadius: 25,
//     overflow: 'hidden',
//   },
//   submitRatingGradient: {
//     paddingVertical: 10,
//     paddingHorizontal: 25,
//     alignItems: 'center',
//   },
//   submitRatingText: {
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




import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  ActivityIndicator,
  Animated,
  FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import { db, auth } from '../firebaseConfig';
import { doc, updateDoc, increment } from 'firebase/firestore';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProductDetail() {
  const route = useRoute();
  const navigation = useNavigation();
  const { product, cart, setCart, handleAddToCart } = route.params || {};
  const user = auth.currentUser;
  const [userRating, setUserRating] = useState(0);
  const [submittingRating, setSubmittingRating] = useState(false); // Track rating submission
  const [addingToCart, setAddingToCart] = useState(false); // Track add to cart action
  const fadeAnim = useState(new Animated.Value(0))[0]; // Fade-in animation
  const [buttonScale] = useState(new Animated.Value(1)); // Animation for Add to Cart button
  const [submitScale] = useState(new Animated.Value(1)); // Animation for Submit Rating button

  useEffect(() => {
    // Fade-in animation
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

  const submitRating = async () => {
    if (!user) {
      Alert.alert('Error', 'Please log in to rate this product.');
      return;
    }

    if (!product || !product.id) {
      Alert.alert('Error', 'Invalid product data.');
      return;
    }

    setSubmittingRating(true);
    try {
      const productRef = doc(db, 'products', product.id);
      const currentRatings = typeof product.ratings === 'number' ? product.ratings : 0;
      const currentCount = product.ratingsCount || 0;
      const newAverage = (currentRatings * currentCount + userRating) / (currentCount + 1);

      await updateDoc(productRef, {
        ratings: newAverage,
        ratingsCount: increment(1),
      });
      Alert.alert('Success', 'Rating submitted!');
      setUserRating(0);
    } catch (error) {
      console.error('Error submitting rating:', error);
      Alert.alert('Error', 'Failed to submit rating.');
    } finally {
      setSubmittingRating(false);
    }
  };

  const handleAddToCartWithLoading = async () => {
    if (!product || stock <= 0) return;

    setAddingToCart(true);
    try {
      await handleAddToCart(product); // Assuming handleAddToCart is async and handles its own alerts
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setAddingToCart(false);
    }
  };

  if (!product) {
    return (
      <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
        <Text style={styles.errorText}>Product data not available.</Text>
      </LinearGradient>
    );
  }

  // Parse price and stock from strings to numbers
  const price = parseFloat(product.price) || 0;
  const stock = parseInt(product.stock, 10) || 0;

  // Prepare image data for FlatList
  const images = Array.isArray(product.imageUrls) && product.imageUrls.length > 0
    ? product.imageUrls
    : ['https://via.placeholder.com/350']; // Fallback image

  const renderImage = ({ item }) => (
    <Image source={{ uri: item }} style={styles.productImage} />
  );

  return (
    <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Header with Back Button */}
          <LinearGradient
            colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)']}
            style={styles.header}
          >
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={30} color="#FFFFFF" />
            </TouchableOpacity>
          </LinearGradient>

          {/* Product Images FlatList */}
          <FlatList
            data={images}
            renderItem={renderImage}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={styles.imageList}
          />

          {/* Product Details Card */}
          <LinearGradient
            colors={['#FFFFFF', '#F5F7FA']}
            style={styles.detailsCard}
          >
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>${price.toFixed(2)}</Text>
            <Text style={styles.stockText}>
              {stock > 0 ? `In Stock: ${stock}` : 'Out of Stock'}
            </Text>

            {/* Ratings Section */}
            <View style={styles.ratingsContainer}>
              <Text style={styles.ratingsLabel}>Average Rating:</Text>
              <View style={styles.starRow}>
                {[...Array(5)].map((_, index) => (
                  <Ionicons
                    key={index}
                    name={index < Math.round(product.ratings || 0) ? 'star' : 'star-outline'}
                    size={20}
                    color="#FFD700"
                  />
                ))}
              </View>
              <Text style={styles.ratingsText}>
                {typeof product.ratings === 'number' ? product.ratings.toFixed(1) : '0.0'} / 5 ({product.ratingsCount || 0} reviews)
              </Text>
            </View>

            {/* Description */}
            <Text style={styles.productDescription}>{product.description || 'No description available.'}</Text>

            {/* Add to Cart Button */}
            <TouchableOpacity
              style={[styles.addToCartButton, stock === 0 && styles.disabledButton]}
              onPressIn={() => handlePressIn(buttonScale)}
              onPressOut={() => handlePressOut(buttonScale)}
              onPress={handleAddToCartWithLoading}
              disabled={stock === 0 || addingToCart}
            >
              <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
                <LinearGradient
                  colors={stock > 0 ? ['#FF6F61', '#FF9F1C'] : ['#A0AEC0', '#A0AEC0']}
                  style={styles.addToCartGradient}
                >
                  {addingToCart ? (
                    <ActivityIndicator size="small" color="#FFFFFF" />
                  ) : (
                    <Text style={styles.addToCartText}>
                      {stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                    </Text>
                  )}
                </LinearGradient>
              </Animated.View>
            </TouchableOpacity>

            {/* Rating Section */}
            <View style={styles.ratingSection}>
              <Text style={styles.ratingLabel}>Rate this product:</Text>
              <View style={styles.starContainer}>
                {[...Array(5)].map((_, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setUserRating(index + 1)}
                    disabled={submittingRating}
                  >
                    <Ionicons
                      name={index < userRating ? 'star' : 'star-outline'}
                      size={30}
                      color="#FF6F61"
                    />
                  </TouchableOpacity>
                ))}
              </View>
              {userRating > 0 && (
                <TouchableOpacity
                  style={styles.submitRatingButton}
                  onPressIn={() => handlePressIn(submitScale)}
                  onPressOut={() => handlePressOut(submitScale)}
                  onPress={submitRating}
                  disabled={submittingRating}
                >
                  <Animated.View style={{ transform: [{ scale: submitScale }] }}>
                    <LinearGradient
                      colors={['#34C759', '#28A745']}
                      style={styles.submitRatingGradient}
                    >
                      {submittingRating ? (
                        <ActivityIndicator size="small" color="#FFFFFF" />
                      ) : (
                        <Text style={styles.submitRatingText}>Submit Rating</Text>
                      )}
                    </LinearGradient>
                  </Animated.View>
                </TouchableOpacity>
              )}
            </View>
          </LinearGradient>
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
    alignSelf: 'flex-start',
  },
  imageList: {
    maxHeight: 350,
  },
  productImage: {
    width: 350, // Match container width
    height: 350,
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  detailsCard: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    padding: 20,
    marginTop: -20, // Overlap with image
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 8 },
  },
  productName: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  productPrice: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FF6F61',
    textAlign: 'center',
    marginBottom: 10,
  },
  stockText: {
    fontSize: 16,
    color: '#718096',
    textAlign: 'center',
    marginBottom: 20,
  },
  ratingsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingsLabel: {
    fontSize: 16,
    color: '#718096',
    marginBottom: 5,
  },
  starRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  ratingsText: {
    fontSize: 14,
    color: '#1F2937',
    textAlign: 'center',
  },
  productDescription: {
    fontSize: 16,
    color: '#4A5568',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 24,
  },
  addToCartButton: {
    borderRadius: 25,
    overflow: 'hidden',
    marginBottom: 20,
  },
  addToCartGradient: {
    paddingVertical: 14,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.8,
  },
  addToCartText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  ratingSection: {
    alignItems: 'center',
  },
  ratingLabel: {
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 10,
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  submitRatingButton: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  submitRatingGradient: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  submitRatingText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  errorText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
});

