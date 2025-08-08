// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from 'react-native';
// import { db } from '../firebaseConfig'; // Firebase Firestore setup
// import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
// import { MaterialIcons } from '@expo/vector-icons'; // For the dustbin icon

// export default function ManageOrderListScreen() {
//   const [orders, setOrders] = useState([]);
//   const [selectedOrder, setSelectedOrder] = useState(null);

//   // Fetch all orders from Firestore
//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const ordersCollection = collection(db, 'orders');
//         const ordersSnapshot = await getDocs(ordersCollection);
//         const orderList = ordersSnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setOrders(orderList);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//       }
//     };
//     fetchOrders();
//   }, []);

//   // Delete an order
//   const deleteOrder = async (orderId) => {
//     Alert.alert(
//       'Confirm Deletion',
//       'Are you sure you want to delete this order?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'Delete',
//           onPress: async () => {
//             try {
//               const orderDoc = doc(db, 'orders', orderId);
//               await deleteDoc(orderDoc);
//               setOrders((prevOrders) =>
//                 prevOrders.filter((order) => order.id !== orderId)
//               );
//               Alert.alert('Success', 'Order deleted successfully.');
//             } catch (error) {
//               console.error('Error deleting order:', error);
//               Alert.alert('Error', 'Failed to delete the order.');
//             }
//           },
//         },
//       ]
//     );
//   };

//   // Function to render each order
//   const renderOrder = ({ item }) => (
//     <TouchableOpacity
//       style={[
//         styles.orderContainer,
//         selectedOrder?.id === item.id && styles.selectedOrder,
//       ]}
//       onPress={() => setSelectedOrder(item)}
//     >
//       <Text style={styles.orderText}>
//         User: {item.userEmail}
//       </Text>
//       <Text style={styles.orderText}>
//         Product: {item.productDetails.name}
//       </Text>
//       <Text style={styles.orderText}>
//         Price: ${item.productDetails.price}
//       </Text>
//       <Text style={styles.orderText}>
//         Rating: {item.rating || 'N/A'}
//       </Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Manage Orders</Text>

//       {/* Show selected order details */}
//       {selectedOrder && (
//         <View style={styles.selectedOrderContainer}>
//           <Text style={styles.selectedOrderTitle}>Selected Order Details:</Text>
//           <Text style={styles.selectedOrderText}>
//             User: {selectedOrder.userEmail}
//           </Text>
//           <Text style={styles.selectedOrderText}>
//             Product: {selectedOrder.productDetails.name}
//           </Text>
//           <Text style={styles.selectedOrderText}>
//             Price: ${selectedOrder.productDetails.price}
//           </Text>
//           <Text style={styles.selectedOrderText}>
//             Rating: {selectedOrder.rating || 'N/A'}
//           </Text>
//           <TouchableOpacity
//             style={styles.deleteButton}
//             onPress={() => deleteOrder(selectedOrder.id)}
//           >
//             <MaterialIcons name="delete" size={24} color="white" />
//             <Text style={styles.deleteButtonText}>Delete Order</Text>
//           </TouchableOpacity>
//         </View>
//       )}

//       {/* List all orders */}
//       <FlatList
//         data={orders}
//         keyExtractor={(item) => item.id}
//         renderItem={renderOrder}
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
//   orderContainer: {
//     padding: 15,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   selectedOrder: {
//     borderColor: '#4CAF50',
//     borderWidth: 2,
//   },
//   orderText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   selectedOrderContainer: {
//     padding: 15,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 8,
//     marginBottom: 20,
//   },
//   selectedOrderTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   selectedOrderText: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 5,
//   },
//   deleteButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f44336',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   deleteButtonText: {
//     color: 'white',
//     fontSize: 16,
//     marginLeft: 5,
//   },
// });



// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   Image,
// } from 'react-native';
// import { db } from '../firebaseConfig'; // Firebase Firestore setup
// import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
// import { MaterialIcons } from '@expo/vector-icons'; // For the dustbin icon

// export default function ManageOrders() {
//   const [orders, setOrders] = useState([]);
//   const [selectedOrder, setSelectedOrder] = useState(null);

//   // Fetch all orders from Firestore
//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const ordersCollection = collection(db, 'orders');
//         const ordersSnapshot = await getDocs(ordersCollection);
//         const orderList = ordersSnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setOrders(orderList);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//       }
//     };
//     fetchOrders();
//   }, []);

//   // Delete an order
//   const deleteOrder = async (orderId) => {
//     Alert.alert(
//       'Confirm Deletion',
//       'Are you sure you want to delete this order?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'Delete',
//           onPress: async () => {
//             try {
//               const orderDoc = doc(db, 'orders', orderId);
//               await deleteDoc(orderDoc);
//               setOrders((prevOrders) =>
//                 prevOrders.filter((order) => order.id !== orderId)
//               );
//               Alert.alert('Success', 'Order deleted successfully.');
//             } catch (error) {
//               console.error('Error deleting order:', error);
//               Alert.alert('Error', 'Failed to delete the order.');
//             }
//           },
//         },
//       ]
//     );
//   };

//   // Render individual order item
//   const renderOrder = ({ item }) => (
//     <TouchableOpacity
//       style={[
//         styles.orderContainer,
//         selectedOrder?.id === item.id && styles.selectedOrder,
//       ]}
//       onPress={() => setSelectedOrder(item)}
//     >
//       <Text style={styles.orderText}>User: {item.userEmail}</Text>
//       <Text style={styles.orderText}>Total Price: ${item.totalPrice}</Text>
//       <FlatList
//         data={item.cartItems}
//         keyExtractor={(cartItem) => cartItem.id}
//         renderItem={({ item: cartItem }) => (
//           <View style={styles.cartItemContainer}>
//             <Image source={{ uri: cartItem.imageUrl }} style={styles.cartItemImage} />
//             <View style={styles.cartItemDetails}>
//               <Text style={styles.cartItemName}>{cartItem.name}</Text>
//               <Text style={styles.cartItemPrice}>Price: ${cartItem.price}</Text>
//               <Text style={styles.cartItemQuantity}>Quantity: {cartItem.quantity}</Text>
//             </View>
//           </View>
//         )}
//       />
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Manage Orders</Text>

//       {/* Show selected order details */}
//       {selectedOrder && (
//         <View style={styles.selectedOrderContainer}>
//           <Text style={styles.selectedOrderTitle}>Selected Order Details:</Text>
//           <Text style={styles.selectedOrderText}>
//             User: {selectedOrder.userEmail}
//           </Text>
//           <Text style={styles.selectedOrderText}>
//             Total Price: ${selectedOrder.totalPrice}
//           </Text>
//           <FlatList
//             data={selectedOrder.cartItems}
//             keyExtractor={(cartItem) => cartItem.id}
//             renderItem={({ item }) => (
//               <View style={styles.cartItemContainer}>
//                 <Image source={{ uri: item.imageUrl }} style={styles.cartItemImage} />
//                 <View style={styles.cartItemDetails}>
//                   <Text style={styles.cartItemName}>{item.name}</Text>
//                   <Text style={styles.cartItemPrice}>Price: ${item.price}</Text>
//                   <Text style={styles.cartItemQuantity}>Quantity: {item.quantity}</Text>
//                 </View>
//               </View>
//             )}
//           />
//           <TouchableOpacity
//             style={styles.deleteButton}
//             onPress={() => deleteOrder(selectedOrder.id)}
//           >
//             <MaterialIcons name="delete" size={24} color="white" />
//             <Text style={styles.deleteButtonText}>Delete Order</Text>
//           </TouchableOpacity>
//         </View>
//       )}

//       {/* List all orders */}
//       <FlatList
//         data={orders}
//         keyExtractor={(item) => item.id}
//         renderItem={renderOrder}
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
//   orderContainer: {
//     padding: 15,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   selectedOrder: {
//     borderColor: '#4CAF50',
//     borderWidth: 2,
//   },
//   orderText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   cartItemContainer: {
//     flexDirection: 'row',
//     marginVertical: 10,
//   },
//   cartItemImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 8,
//     marginRight: 15,
//   },
//   cartItemDetails: {
//     flex: 1,
//   },
//   cartItemName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   cartItemPrice: {
//     fontSize: 14,
//     color: '#555',
//   },
//   cartItemQuantity: {
//     fontSize: 14,
//     color: '#888',
//   },
//   selectedOrderContainer: {
//     padding: 15,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 8,
//     marginBottom: 20,
//   },
//   selectedOrderTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   selectedOrderText: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 5,
//   },
//   deleteButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f44336',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   deleteButtonText: {
//     color: 'white',
//     fontSize: 16,
//     marginLeft: 5,
//   },
// });


// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   Image,
//   Modal,
//   Pressable,
// } from 'react-native';
// import { db } from '../firebaseConfig'; // Firebase Firestore setup
// import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
// import { MaterialIcons } from '@expo/vector-icons'; // For the dustbin icon

// export default function ManageOrders() {
//   const [orders, setOrders] = useState([]);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
//   const [orderToDelete, setOrderToDelete] = useState(null);

//   // Fetch all orders from Firestore
//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const ordersCollection = collection(db, 'orders');
//         const ordersSnapshot = await getDocs(ordersCollection);
//         const orderList = ordersSnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setOrders(orderList);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//         Alert.alert('Error', 'Failed to fetch orders.');
//       }
//     };
//     fetchOrders();
//   }, []);

//   // Delete an order
//   const handleDeleteOrder = async (orderId) => {
//     setShowDeleteConfirm(false);
//     try {
//       const orderDoc = doc(db, 'orders', orderId);
//       await deleteDoc(orderDoc);
//       setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
//       setSelectedOrder(null); // Clear selected order after deletion
//       Alert.alert('Success', 'Order deleted successfully.');
//     } catch (error) {
//       console.error('Error deleting order:', error);
//       Alert.alert('Error', 'Failed to delete the order.');
//     }
//   };

//   // Render individual order item
//   const renderOrder = ({ item }) => (
//     <View style={styles.orderContainer}>
//       <View style={styles.orderHeader}>
//         <View style={styles.orderHeaderText}>
//           <Text style={styles.orderUserName}>{item.userName || 'Unknown User'}</Text>
//           <Text style={styles.orderUserEmail}>{item.userEmail}</Text>
//         </View>
//         <Text style={styles.orderTotalPrice}>${item.totalPrice.toFixed(2)}</Text>
//         <TouchableOpacity
//           style={styles.deleteIconButton}
//           onPress={() => {
//             setOrderToDelete(item.id);
//             setShowDeleteConfirm(true);
//           }}
//           activeOpacity={0.7}
//         >
//           <MaterialIcons name="delete" size={24} color="#FF4444" />
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={item.cartItems}
//         horizontal
//         keyExtractor={(cartItem) => cartItem.id}
//         renderItem={({ item: cartItem }) => (
//           <View style={styles.cartItemWrapper}>
//             <View style={styles.cartItemContainer}>
//               <Image source={{ uri: cartItem.imageUrl }} style={styles.cartItemImage} />
//               <View style={styles.cartItemDetails}>
//                 <Text style={styles.cartItemName}>{cartItem.name}</Text>
//                 <Text style={styles.cartItemPrice}>${cartItem.price.toFixed(2)}</Text>
//                 <Text style={styles.cartItemQuantity}>Qty: {cartItem.quantity}</Text>
//               </View>
//             </View>
//           </View>
//         )}
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.cartItemList}
//       />
//       <TouchableOpacity
//         style={styles.viewDetailsButton}
//         onPress={() => setSelectedOrder(item)}
//         activeOpacity={0.7}
//       >
//         <Text style={styles.viewDetailsText}>View Details</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   // Render selected order details
//   const renderSelectedOrder = () => (
//     <View style={styles.selectedOrderContainer}>
//       <Text style={styles.selectedOrderTitle}>Order Details</Text>
//       <View style={styles.selectedOrderHeader}>
//         <View style={styles.selectedOrderHeaderText}>
//           <Text style={styles.selectedOrderUserName}>{selectedOrder.userName || 'Unknown User'}</Text>
//           <Text style={styles.selectedOrderUserEmail}>{selectedOrder.userEmail}</Text>
//         </View>
//         <Text style={styles.selectedOrderTotalPrice}>${selectedOrder.totalPrice.toFixed(2)}</Text>
//       </View>
//       <FlatList
//         data={selectedOrder.cartItems}
//         keyExtractor={(cartItem) => cartItem.id}
//         renderItem={({ item }) => (
//           <View style={styles.cartItemContainer}>
//             <Image source={{ uri: item.imageUrl }} style={styles.cartItemImage} />
//             <View style={styles.cartItemDetails}>
//               <Text style={styles.cartItemName}>{item.name}</Text>
//               <Text style={styles.cartItemPrice}>Price: ${item.price.toFixed(2)}</Text>
//               <Text style={styles.cartItemQuantity}>Qty: {item.quantity}</Text>
//             </View>
//           </View>
//         )}
//         contentContainerStyle={styles.selectedCartItemList}
//       />
//       <TouchableOpacity
//         style={styles.deleteButton}
//         onPress={() => {
//           setOrderToDelete(selectedOrder.id);
//           setShowDeleteConfirm(true);
//         }}
//         activeOpacity={0.7}
//       >
//         <MaterialIcons name="delete" size={24} color="#FFFFFF" />
//         <Text style={styles.deleteButtonText}>Delete Order</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.title}>Manage Orders</Text>
//       </View>

//       {/* Delete Confirmation Modal */}
//       <Modal
//         transparent
//         visible={showDeleteConfirm}
//         animationType="fade"
//         onRequestClose={() => setShowDeleteConfirm(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContainer}>
//             <Text style={styles.modalTitle}>Confirm Deletion</Text>
//             <Text style={styles.modalMessage}>Are you sure you want to delete this order?</Text>
//             <View style={styles.modalButtons}>
//               <Pressable
//                 style={[styles.modalButton, styles.cancelButton]}
//                 onPress={() => setShowDeleteConfirm(false)}
//               >
//                 <Text style={styles.modalButtonText}>Cancel</Text>
//               </Pressable>
//               <Pressable
//                 style={[styles.modalButton, styles.deleteButtonModal]}
//                 onPress={() => handleDeleteOrder(orderToDelete)}
//               >
//                 <Text style={styles.modalButtonText}>Delete</Text>
//               </Pressable>
//             </View>
//           </View>
//         </View>
//       </Modal>

//       {/* Selected Order Details */}
//       {selectedOrder && renderSelectedOrder()}

//       {/* List all orders */}
//       <FlatList
//         data={orders}
//         keyExtractor={(item) => item.id}
//         renderItem={renderOrder}
//         contentContainerStyle={styles.list}
//         ListEmptyComponent={
//           <Text style={styles.emptyText}>No orders available.</Text>
//         }
//         showsVerticalScrollIndicator={false}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     paddingTop: 50,
//     paddingHorizontal: 20,
//     paddingBottom: 15,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#333333',
//     textAlign: 'center',
//   },
//   list: {
//     paddingHorizontal: 20,
//     paddingBottom: 20,
//   },
//   orderContainer: {
//     backgroundColor: '#F9F9F9',
//     borderRadius: 12,
//     padding: 15,
//     marginBottom: 15,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   orderHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   orderHeaderText: {
//     flex: 1,
//   },
//   orderUserName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333333',
//   },
//   orderUserEmail: {
//     fontSize: 14,
//     color: '#666666',
//     marginTop: 2,
//   },
//   orderTotalPrice: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#A84CF2',
//   },
//   deleteIconButton: {
//     padding: 5,
//   },
//   cartItemList: {
//     paddingVertical: 5,
//   },
//   cartItemWrapper: {
//     marginRight: 10,
//   },
//   cartItemContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 8,
//     padding: 8,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: 1 },
//     width: 200, // Fixed width for horizontal scroll
//   },
//   cartItemImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 8,
//     marginRight: 10,
//   },
//   cartItemDetails: {
//     flex: 1,
//   },
//   cartItemName: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#333333',
//   },
//   cartItemPrice: {
//     fontSize: 12,
//     color: '#666666',
//     marginTop: 2,
//   },
//   cartItemQuantity: {
//     fontSize: 12,
//     color: '#666666',
//     marginTop: 2,
//   },
//   viewDetailsButton: {
//     backgroundColor: '#A84CF2',
//     paddingVertical: 8,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   viewDetailsText: {
//     color: '#FFFFFF',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   selectedOrderContainer: {
//     backgroundColor: '#F9F9F9',
//     borderRadius: 12,
//     padding: 15,
//     marginHorizontal: 20,
//     marginBottom: 20,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 3 },
//   },
//   selectedOrderTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#333333',
//     marginBottom: 15,
//   },
//   selectedOrderHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   selectedOrderHeaderText: {
//     flex: 1,
//   },
//   selectedOrderUserName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333333',
//   },
//   selectedOrderUserEmail: {
//     fontSize: 14,
//     color: '#666666',
//     marginTop: 2,
//   },
//   selectedOrderTotalPrice: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#A84CF2',
//   },
//   selectedCartItemList: {
//     paddingVertical: 5,
//   },
//   deleteButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#FF4444',
//     paddingVertical: 12,
//     borderRadius: 8,
//     marginTop: 15,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   deleteButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//     marginLeft: 8,
//   },
//   emptyText: {
//     fontSize: 18,
//     color: '#666666',
//     textAlign: 'center',
//     marginTop: 50,
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     padding: 20,
//     width: '80%',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#333333',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   modalMessage: {
//     fontSize: 16,
//     color: '#666666',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   modalButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     alignItems: 'center',
//     width: '45%',
//   },
//   cancelButton: {
//     backgroundColor: '#E0E0E0',
//   },
//   deleteButtonModal: {
//     backgroundColor: '#FF4444',
//   },
//   modalButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });





// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   Image,
//   Modal,
//   Pressable,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { db } from '../firebaseConfig'; // Firebase Firestore setup
// import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
// import { MaterialIcons } from '@expo/vector-icons'; // For the dustbin icon

// export default function ManageOrders() {
//   const [orders, setOrders] = useState([]);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
//   const [orderToDelete, setOrderToDelete] = useState(null);

//   // Fetch all orders from Firestore
//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const ordersCollection = collection(db, 'orders');
//         const ordersSnapshot = await getDocs(ordersCollection);
//         const orderList = ordersSnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setOrders(orderList);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//         Alert.alert('Error', 'Failed to fetch orders.');
//       }
//     };
//     fetchOrders();
//   }, []);

//   // Delete an order
//   const handleDeleteOrder = async (orderId) => {
//     setShowDeleteConfirm(false);
//     try {
//       const orderDoc = doc(db, 'orders', orderId);
//       await deleteDoc(orderDoc);
//       setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
//       setSelectedOrder(null); // Clear selected order after deletion
//       Alert.alert('Success', 'Order deleted successfully.');
//     } catch (error) {
//       console.error('Error deleting order:', error);
//       Alert.alert('Error', 'Failed to delete the order.');
//     }
//   };

//   // Render individual order item
//   const renderOrder = ({ item }) => (
//     <TouchableOpacity
//       style={[
//         styles.orderContainer,
//         selectedOrder?.id === item.id && styles.selectedOrder,
//       ]}
//       onPress={() => setSelectedOrder(item)}
//       activeOpacity={0.8}
//     >
//       <View style={styles.orderHeader}>
//         <View style={styles.orderHeaderText}>
//           <Text style={styles.orderUserName}>{item.userName || 'Unknown User'}</Text>
//           <Text style={styles.orderUserEmail}>{item.userEmail}</Text>
//         </View>
//         <Text style={styles.orderTotalPrice}>${item.totalPrice.toFixed(2)}</Text>
//         <TouchableOpacity
//           style={styles.deleteIconButton}
//           onPress={() => {
//             setOrderToDelete(item.id);
//             setShowDeleteConfirm(true);
//           }}
//           activeOpacity={0.7}
//         >
//           <MaterialIcons name="delete" size={24} color="#FF4444" />
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={item.cartItems}
//         horizontal
//         keyExtractor={(cartItem) => cartItem.id}
//         renderItem={({ item: cartItem }) => (
//           <View style={styles.cartItemWrapper}>
//             <View style={styles.cartItemContainer}>
//               <Image source={{ uri: cartItem.imageUrl }} style={styles.cartItemImage} />
//               <View style={styles.cartItemDetails}>
//                 <Text style={styles.cartItemName}>{cartItem.name}</Text>
//                 <Text style={styles.cartItemPrice}>${cartItem.price.toFixed(2)}</Text>
//                 <Text style={styles.cartItemQuantity}>Qty: {cartItem.quantity}</Text>
//               </View>
//             </View>
//           </View>
//         )}
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.cartItemList}
//       />
//     </TouchableOpacity>
//   );

//   // Render selected order details
//   const renderSelectedOrder = () => (
//     <View style={styles.selectedOrderContainer}>
//       <Text style={styles.selectedOrderTitle}>Order Details</Text>
//       <View style={styles.selectedOrderHeader}>
//         <View style={styles.selectedOrderHeaderText}>
//           <Text style={styles.selectedOrderUserName}>{selectedOrder.userName || 'Unknown User'}</Text>
//           <Text style={styles.selectedOrderUserEmail}>{selectedOrder.userEmail}</Text>
//         </View>
//         <Text style={styles.selectedOrderTotalPrice}>${selectedOrder.totalPrice.toFixed(2)}</Text>
//       </View>
//       <FlatList
//         data={selectedOrder.cartItems}
//         keyExtractor={(cartItem) => cartItem.id}
//         renderItem={({ item }) => (
//           <View style={styles.cartItemContainer}>
//             <Image source={{ uri: item.imageUrl }} style={styles.cartItemImage} />
//             <View style={styles.cartItemDetails}>
//               <Text style={styles.cartItemName}>{item.name}</Text>
//               <Text style={styles.cartItemPrice}>Price: ${item.price.toFixed(2)}</Text>
//               <Text style={styles.cartItemQuantity}>Qty: {item.quantity}</Text>
//             </View>
//           </View>
//         )}
//         contentContainerStyle={styles.selectedCartItemList}
//       />
//       <TouchableOpacity
//         style={styles.deleteButton}
//         onPress={() => {
//           setOrderToDelete(selectedOrder.id);
//           setShowDeleteConfirm(true);
//         }}
//         activeOpacity={0.7}
//       >
//         <MaterialIcons name="delete" size={24} color="#FFFFFF" />
//         <Text style={styles.deleteButtonText}>Delete Order</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.title}>Manage Orders</Text>
//       </View>

//       {/* Delete Confirmation Modal */}
//       <Modal
//         transparent
//         visible={showDeleteConfirm}
//         animationType="fade"
//         onRequestClose={() => setShowDeleteConfirm(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContainer}>
//             <Text style={styles.modalTitle}>Confirm Deletion</Text>
//             <Text style={styles.modalMessage}>Are you sure you want to delete this order?</Text>
//             <View style={styles.modalButtons}>
//               <Pressable
//                 style={[styles.modalButton, styles.cancelButton]}
//                 onPress={() => setShowDeleteConfirm(false)}
//               >
//                 <Text style={styles.modalButtonText}>Cancel</Text>
//               </Pressable>
//               <Pressable
//                 style={[styles.modalButton, styles.deleteButtonModal]}
//                 onPress={() => handleDeleteOrder(orderToDelete)}
//               >
//                 <Text style={styles.modalButtonText}>Delete</Text>
//               </Pressable>
//             </View>
//           </View>
//         </View>
//       </Modal>

//       {/* Selected Order Details */}
//       {selectedOrder && renderSelectedOrder()}

//       {/* List all orders */}
//       <FlatList
//         data={orders}
//         keyExtractor={(item) => item.id}
//         renderItem={renderOrder}
//         contentContainerStyle={styles.list}
//         ListEmptyComponent={
//           <Text style={styles.emptyText}>No orders available.</Text>
//         }
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
//     paddingTop: 50,
//     paddingHorizontal: 20,
//     paddingBottom: 15,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     textAlign: 'center',
//   },
//   list: {
//     paddingHorizontal: 20,
//     paddingBottom: 20,
//   },
//   orderContainer: {
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     padding: 15,
//     marginBottom: 15,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   selectedOrder: {
//     borderWidth: 2,
//     borderColor: '#A84CF2',
//     backgroundColor: 'rgba(168, 76, 242, 0.05)',
//   },
//   orderHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   orderHeaderText: {
//     flex: 1,
//   },
//   orderUserName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
//   orderUserEmail: {
//     fontSize: 14,
//     color: '#D1D1D1',
//     marginTop: 2,
//   },
//   orderTotalPrice: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#A84CF2',
//   },
//   deleteIconButton: {
//     padding: 5,
//   },
//   cartItemList: {
//     paddingVertical: 5,
//   },
//   cartItemWrapper: {
//     marginRight: 10,
//   },
//   cartItemContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 8,
//     padding: 8,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: 1 },
//     width: 200, // Fixed width for horizontal scroll
//   },
//   cartItemImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 8,
//     marginRight: 10,
//   },
//   cartItemDetails: {
//     flex: 1,
//   },
//   cartItemName: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
//   cartItemPrice: {
//     fontSize: 12,
//     color: '#D1D1D1',
//     marginTop: 2,
//   },
//   cartItemQuantity: {
//     fontSize: 12,
//     color: '#D1D1D1',
//     marginTop: 2,
//   },
//   selectedOrderContainer: {
//     backgroundColor: 'rgba(255, 255, 255, 0.15)',
//     borderRadius: 12,
//     padding: 15,
//     marginHorizontal: 20,
//     marginBottom: 20,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 3 },
//   },
//   selectedOrderTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     marginBottom: 15,
//   },
//   selectedOrderHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   selectedOrderHeaderText: {
//     flex: 1,
//   },
//   selectedOrderUserName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
//   selectedOrderUserEmail: {
//     fontSize: 14,
//     color: '#D1D1D1',
//     marginTop: 2,
//   },
//   selectedOrderTotalPrice: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#A84CF2',
//   },
//   selectedCartItemList: {
//     paddingVertical: 5,
//   },
//   deleteButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#FF4444',
//     paddingVertical: 12,
//     borderRadius: 8,
//     marginTop: 15,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   deleteButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//     marginLeft: 8,
//   },
//   emptyText: {
//     fontSize: 18,
//     color: '#D1D1D1',
//     textAlign: 'center',
//     marginTop: 50,
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     padding: 20,
//     width: '80%',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   modalMessage: {
//     fontSize: 16,
//     color: '#D1D1D1',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   modalButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     alignItems: 'center',
//     width: '45%',
//   },
//   cancelButton: {
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   deleteButtonModal: {
//     backgroundColor: '#FF4444',
//   },
//   modalButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });



import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ManageOrdersListScreen() {
  const [orders, setOrders] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersRef = collection(db, 'orders');
        const querySnapshot = await getDocs(ordersRef); // Fetch all orders without filtering by userId
        const ordersList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(ordersList);
      } catch (error) {
        console.error('Error fetching orders:', error);
        Alert.alert('Error', 'Failed to load orders.');
      }
    };

    fetchOrders();
  }, []); // No dependencies since we fetch all orders once on mount

  const renderOrder = ({ item }) => {
    const date = new Date(item.createdAt).toLocaleDateString();
    const itemCount = item.cartItems.length;

    return (
      <TouchableOpacity
        style={styles.orderCard}
        onPress={() => navigation.navigate('OrderDetailScreen', { order: item })}
      >
        <View style={styles.orderInfo}>
          <Text style={styles.orderId}>Order #{item.id.slice(0, 8)}</Text>
          <Text style={styles.orderDate}>Placed on: {date}</Text>
          <Text style={styles.orderUser}>By: {item.userName}</Text> {/* Show user name */}
          <Text style={styles.orderItems}>{itemCount} Item{itemCount !== 1 ? 's' : ''}</Text>
          <Text style={styles.orderTotal}>Total: ${item.totalPrice.toFixed(2)}</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#4A90E2" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={30} color="#4A90E2" />
        </TouchableOpacity>
        <Text style={styles.title}>Manage Orders</Text>
      </View>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrder}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text style={styles.emptyText}>No orders found.</Text>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8', // Consistent soft blue-gray background
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 2,
    borderBottomColor: '#E6ECEF',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2D3748',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  list: {
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 20,
  },
  orderCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  orderInfo: {
    flex: 1,
  },
  orderId: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 5,
  },
  orderDate: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 5,
  },
  orderUser: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 5,
  },
  orderItems: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 5,
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A90E2',
  },
  emptyText: {
    fontSize: 18,
    color: '#718096',
    textAlign: 'center',
    marginTop: 50,
  },
});
