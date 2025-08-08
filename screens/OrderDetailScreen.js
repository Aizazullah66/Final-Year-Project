// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Alert,
// } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import { db } from '../firebaseConfig';
// import { doc, deleteDoc } from 'firebase/firestore';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function OrderDetailScreen() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { order } = route.params;
//   const [isDeleting, setIsDeleting] = useState(false);

//   const handleDeleteOrder = async () => {
//     Alert.alert(
//       'Confirm Deletion',
//       'Are you sure you want to delete this order?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'Delete',
//           style: 'destructive',
//           onPress: async () => {
//             setIsDeleting(true);
//             try {
//               const orderRef = doc(db, 'orders', order.id);
//               await deleteDoc(orderRef);
//               Alert.alert('Success', 'Order deleted successfully!');
//               navigation.goBack();
//             } catch (error) {
//               console.error('Error deleting order:', error);
//               Alert.alert('Error', 'Failed to delete the order.');
//             } finally {
//               setIsDeleting(false);
//             }
//           },
//         },
//       ]
//     );
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.itemCard}>
//       <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
//       <View style={styles.itemDetails}>
//         <Text style={styles.itemName}>{item.name}</Text>
//         <Text style={styles.itemPrice}>${item.price.toFixed(2)} x {item.quantity}</Text>
//         <Text style={styles.itemTotal}>Subtotal: ${(item.price * item.quantity).toFixed(2)}</Text>
//       </View>
//     </View>
//   );

//   const date = new Date(order.createdAt).toLocaleString();

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={30} color="#4A90E2" />
//         </TouchableOpacity>
//         <Text style={styles.title}>Order Details</Text>
//       </View>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         <View style={styles.orderSummary}>
//           <Text style={styles.orderId}>Order #{order.id.slice(0, 8)}</Text>
//           <Text style={styles.orderDate}>Placed on: {date}</Text>
//           <Text style={styles.orderUser}>By: {order.userName}</Text>
//           <Text style={styles.orderTotal}>Total: ${order.totalPrice.toFixed(2)}</Text>
//         </View>
//         <Text style={styles.sectionTitle}>Items</Text>
//         <FlatList
//           data={order.cartItems}
//           keyExtractor={(item) => item.id}
//           renderItem={renderItem}
//           scrollEnabled={false}
//           contentContainerStyle={styles.itemList}
//         />
//         <TouchableOpacity
//           style={[styles.deleteButton, isDeleting && styles.disabledButton]}
//           onPress={handleDeleteOrder}
//           disabled={isDeleting}
//         >
//           <Ionicons name="trash" size={24} color="#FFFFFF" style={styles.deleteIcon} />
//           <Text style={styles.deleteButtonText}>
//             {isDeleting ? 'Deleting...' : 'Delete Order'}
//           </Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F0F4F8', // Consistent soft blue-gray background
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
//   scrollContent: {
//     paddingHorizontal: 15,
//     paddingTop: 20,
//     paddingBottom: 30,
//   },
//   orderSummary: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 15,
//     padding: 15,
//     marginBottom: 20,
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//   },
//   orderId: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#2D3748',
//     marginBottom: 8,
//   },
//   orderDate: {
//     fontSize: 14,
//     color: '#718096',
//     marginBottom: 8,
//   },
//   orderUser: {
//     fontSize: 14,
//     color: '#718096',
//     marginBottom: 8,
//   },
//   orderTotal: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#4A90E2',
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#2D3748',
//     marginBottom: 15,
//   },
//   itemList: {
//     paddingBottom: 20,
//   },
//   itemCard: {
//     flexDirection: 'row',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 15,
//     padding: 15,
//     marginVertical: 10,
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//   },
//   itemImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//     marginRight: 15,
//     resizeMode: 'cover',
//   },
//   itemDetails: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   itemName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#2D3748',
//     marginBottom: 5,
//   },
//   itemPrice: {
//     fontSize: 14,
//     color: '#718096',
//     marginBottom: 5,
//   },
//   itemTotal: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#4A90E2',
//   },
//   deleteButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#E53E3E', // Red for delete action
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 25,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 4 },
//     marginTop: 20,
//     alignSelf: 'center',
//   },
//   disabledButton: {
//     backgroundColor: '#A0AEC0',
//   },
//   deleteIcon: {
//     marginRight: 10,
//   },
//   deleteButtonText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
// });



import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { db } from '../firebaseConfig';
import { doc, deleteDoc } from 'firebase/firestore';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function OrderDetailScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { order } = route.params;
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteOrder = async () => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this order?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            setIsDeleting(true);
            try {
              const orderRef = doc(db, 'orders', order.id);
              await deleteDoc(orderRef);
              Alert.alert('Success', 'Order deleted successfully!');
              navigation.goBack();
            } catch (error) {
              console.error('Error deleting order:', error);
              Alert.alert('Error', 'Failed to delete the order.');
            } finally {
              setIsDeleting(false);
            }
          },
        },
      ]
    );
  };

  const renderItem = ({ item }) => {
    // Use the first image from imageUrls, or a fallback image
    const imageUri = item.imageUrls && item.imageUrls.length > 0 ? item.imageUrls[0] : 'https://via.placeholder.com/100';

    return (
      <View style={styles.itemCard}>
        <Image source={{ uri: imageUri }} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>${item.price.toFixed(2)} x {item.quantity}</Text>
          <Text style={styles.itemTotal}>Subtotal: ${(item.price * item.quantity).toFixed(2)}</Text>
        </View>
      </View>
    );
  };

  const date = new Date(order.createdAt).toLocaleString();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={30} color="#4A90E2" />
        </TouchableOpacity>
        <Text style={styles.title}>Order Details</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.orderSummary}>
          <Text style={styles.orderId}>Order #{order.id.slice(0, 8)}</Text>
          <Text style={styles.orderDate}>Placed on: {date}</Text>
          <Text style={styles.orderUser}>By: {order.userName}</Text>
          <Text style={styles.orderEmail}>Email: {order.userEmail}</Text>
          <Text style={styles.orderTotal}>Total: ${order.totalPrice.toFixed(2)}</Text>
        </View>

        <View style={styles.addressSection}>
          <Text style={styles.sectionTitle}>Shipping Address</Text>
          {order.address ? (
            <>
              <Text style={styles.addressText}>{order.address.street}</Text>
              <Text style={styles.addressText}>
                {order.address.city}, {order.address.state} {order.address.zipCode}
              </Text>
            </>
          ) : (
            <Text style={styles.addressText}>No address provided</Text>
          )}
        </View>

        <Text style={styles.sectionTitle}>Items</Text>
        <FlatList
          data={order.cartItems}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          scrollEnabled={false}
          contentContainerStyle={styles.itemList}
        />

        <TouchableOpacity
          style={[styles.deleteButton, isDeleting && styles.disabledButton]}
          onPress={handleDeleteOrder}
          disabled={isDeleting}
        >
          <Ionicons name="trash" size={24} color="#FFFFFF" style={styles.deleteIcon} />
          <Text style={styles.deleteButtonText}>
            {isDeleting ? 'Deleting...' : 'Delete Order'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
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
  scrollContent: {
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 30,
  },
  orderSummary: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  orderId: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 8,
  },
  orderDate: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 8,
  },
  orderUser: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 8,
  },
  orderEmail: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 8,
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A90E2',
  },
  addressSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 15,
  },
  addressText: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 5,
  },
  itemList: {
    paddingBottom: 20,
  },
  itemCard: {
    flexDirection: 'row',
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
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
    resizeMode: 'cover',
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 5,
  },
  itemTotal: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4A90E2',
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E53E3E', // Red for delete action
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    marginTop: 20,
    alignSelf: 'center',
  },
  disabledButton: {
    backgroundColor: '#A0AEC0',
  },
  deleteIcon: {
    marginRight: 10,
  },
  deleteButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});