// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import { db } from '../firebaseConfig';
// import {
//   collection,
//   addDoc,
//   getDocs,
//   updateDoc,
//   deleteDoc,
//   doc,
// } from 'firebase/firestore';

// // Validation Schema
// const ProductSchema = Yup.object().shape({
//   name: Yup.string().required('Required'),
//   price: Yup.number().required('Required').min(1, 'Must be greater than 0'),
//   description: Yup.string().required('Required'),
//   quantity: Yup.number().required('Required').min(1, 'Must be greater than 0'),
// });

// export default function ManageProductsScreen() {
//   const [products, setProducts] = useState([]);
//   const [editingProduct, setEditingProduct] = useState(null);

//   // Fetch products from Firestore
//   const fetchProducts = async () => {
//     const querySnapshot = await getDocs(collection(db, 'products'));
//     const fetchedProducts = [];
//     querySnapshot.forEach((doc) => {
//       fetchedProducts.push({ id: doc.id, ...doc.data() });
//     });
//     setProducts(fetchedProducts);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // Add Product to Firestore
//   const addProduct = async (values, resetForm) => {
//     await addDoc(collection(db, 'products'), values);
//     resetForm();
//     fetchProducts();
//   };

//   // Update Product in Firestore
//   const updateProduct = async (values, resetForm) => {
//     const productRef = doc(db, 'products', editingProduct.id);
//     await updateDoc(productRef, values);
//     setEditingProduct(null);
//     resetForm();
//     fetchProducts();
//   };

//   // Delete Product from Firestore
//   const deleteProduct = async (id) => {
//     const productRef = doc(db, 'products', id);
//     await deleteDoc(productRef);
//     fetchProducts();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Manage Products</Text>

//       <Formik
//         initialValues={{
//           name: editingProduct ? editingProduct.name : '',
//           price: editingProduct ? editingProduct.price : '',
//           description: editingProduct ? editingProduct.description : '',
//           quantity: editingProduct ? editingProduct.quantity : '',
//         }}
//         enableReinitialize
//         validationSchema={ProductSchema}
//         onSubmit={(values, { resetForm }) => {
//           editingProduct ? updateProduct(values, resetForm) : addProduct(values, resetForm);
//         }}
//       >
//         {({ handleChange, handleSubmit, values, errors, touched }) => (
//           <View style={styles.form}>
//             <TextInput
//               style={styles.input}
//               placeholder="Product Name"
//               value={values.name}
//               onChangeText={handleChange('name')}
//             />
//             {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}

//             <TextInput
//               style={styles.input}
//               placeholder="Price"
//               value={values.price}
//               onChangeText={handleChange('price')}
//               keyboardType="numeric"
//             />
//             {touched.price && errors.price && <Text style={styles.error}>{errors.price}</Text>}

//             <TextInput
//               style={styles.input}
//               placeholder="Description"
//               value={values.description}
//               onChangeText={handleChange('description')}
//             />
//             {touched.description && errors.description && (
//               <Text style={styles.error}>{errors.description}</Text>
//             )}

//             <TextInput
//               style={styles.input}
//               placeholder="Quantity"
//               value={values.quantity}
//               onChangeText={handleChange('quantity')}
//               keyboardType="numeric"
//             />
//             {touched.quantity && errors.quantity && (
//               <Text style={styles.error}>{errors.quantity}</Text>
//             )}

//             <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//               <Text style={styles.buttonText}>
//                 {editingProduct ? 'Update Product' : 'Add Product'}
//               </Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       </Formik>

//       <FlatList
//         data={products}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.productItem}>
//             <Text style={styles.productText}>{item.name}</Text>
//             <Text style={styles.productText}>Price: ${item.price}</Text>
//             <Text style={styles.productText}>Quantity: {item.quantity}</Text>
//             <Text style={styles.productText}>{item.description}</Text>

//             <View style={styles.actions}>
//               <TouchableOpacity
//                 style={[styles.actionButton, styles.editButton]}
//                 onPress={() => setEditingProduct(item)}
//               >
//                 <Text style={styles.actionText}>Edit</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={[styles.actionButton, styles.deleteButton]}
//                 onPress={() => deleteProduct(item.id)}
//               >
//                 <Text style={styles.actionText}>Delete</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   form: {
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//     backgroundColor: '#fff',
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: '600',
//   },
//   error: {
//     color: 'red',
//     fontSize: 12,
//     marginBottom: 5,
//   },
//   productItem: {
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   productText: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   actions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   actionButton: {
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   editButton: {
//     backgroundColor: '#007BFF',
//   },
//   deleteButton: {
//     backgroundColor: '#FF3D00',
//   },
//   actionText: {
//     color: '#fff',
//     fontWeight: '600',
//   },
// });


// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// export default function ManageProductsScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Manage Products</Text>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('AddProductScreen')}
//       >
//         <Text style={styles.buttonText}>Add Product</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('UpdateProductScreen')}
//       >
//         <Text style={styles.buttonText}>Update Product</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('DeleteProductScreen')}
//       >
//         <Text style={styles.buttonText}>Delete Product</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 18,
//   },
// });







// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   FlatList,
//   Image,
//   Alert,
//   StyleSheet,
// } from 'react-native';
// import { db } from '../firebaseConfig'; // Firebase Firestore setup
// import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'; 
// import { MaterialIcons } from '@expo/vector-icons'; // For icons

// export default function ManageProductsScreen({ navigation }) {
//   const [products, setProducts] = useState([]);

//   // Fetching the list of products from Firestore
//   const fetchProducts = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, 'products'));
//       const productList = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setProducts(productList);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//       Alert.alert('Error', 'Failed to fetch products.');
//     }
//   };

//   // Function to delete product
//   const deleteProduct = async (productId) => {
//     try {
//       await deleteDoc(doc(db, 'products', productId));
//       setProducts(products.filter(product => product.id !== productId));
//       Alert.alert('Success', 'Product deleted successfully!');
//     } catch (error) {
//       console.error('Error deleting product:', error);
//       Alert.alert('Error', 'Failed to delete product.');
//     }
//   };

//   // Navigate to the UpdateProductScreen with product details
//   const updateProduct = (product) => {
//     navigation.navigate('UpdateProductScreen', { product });
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const renderItem = ({ item }) => (
//     <View style={styles.productContainer}>
//       <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//       <Text style={styles.productTitle}>{item.name}</Text>
//       <Text style={styles.productDetail}>Price: ${item.price}</Text>
//       <Text style={styles.productDetail}>Description: {item.description}</Text>
//       <Text style={styles.productDetail}>Stock: {item.stock}</Text>

//       <View style={styles.actionButtons}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => updateProduct(item)}
//         >
//           <Text style={styles.buttonText}>Update</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.button, styles.deleteButton]}
//           onPress={() => deleteProduct(item.id)}
//         >
//           <Text style={styles.buttonText}>Delete</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={products}
//         keyExtractor={item => item.id}
//         renderItem={renderItem}
//         contentContainerStyle={styles.productList}
//       />

//       {/* Add Product button */}
//       <TouchableOpacity
//         style={styles.addProductButton}
//         onPress={() => navigation.navigate('AddProductScreen')}
//       >
//         <MaterialIcons name="add" size={30} color="#fff" />
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
//   productList: {
//     paddingBottom: 70, // To give space for the Add Product button
//   },
//   productContainer: {
//     backgroundColor: '#f9f9f9',
//     padding: 15,
//     marginBottom: 15,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   productImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 8,
//     marginBottom: 10,
//     resizeMode: 'contain',
//   },
//   productTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   productDetail: {
//     fontSize: 14,
//     color: '#555',
//     marginBottom: 5,
//   },
//   actionButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//   },
//   deleteButton: {
//     backgroundColor: '#F44336',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 14,
//   },
//   addProductButton: {
//     position: 'absolute',
//     bottom: 30,
//     right: 20,
//     backgroundColor: '#4CAF50',
//     borderRadius: 50,
//     padding: 15,
//     elevation: 5,
//   },
// });




// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   FlatList,
//   Image,
//   Alert,
//   StyleSheet,
//   TextInput,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { db } from '../firebaseConfig'; // Firebase Firestore setup
// import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
// import Ionicons from 'react-native-vector-icons/Ionicons'; // Switched to Ionicons
// import { useNavigation } from '@react-navigation/native';

// export default function ManageProductsScreen() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigation = useNavigation();

//   // Fetching the list of products from Firestore
//   const fetchProducts = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, 'products'));
//       const productList = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setProducts(productList);
//       setFilteredProducts(productList);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//       Alert.alert('Error', 'Failed to fetch products.');
//     }
//   };

//   // Filter products based on search query
//   const handleSearch = (query) => {
//     setSearchQuery(query);
//     if (query.trim() === '') {
//       setFilteredProducts(products);
//     } else {
//       const filtered = products.filter((product) =>
//         product.name.toLowerCase().includes(query.toLowerCase())
//       );
//       setFilteredProducts(filtered);
//     }
//   };

//   // Function to delete product
//   const deleteProduct = async (productId) => {
//     try {
//       await deleteDoc(doc(db, 'products', productId));
//       setProducts(products.filter((product) => product.id !== productId));
//       setFilteredProducts(filteredProducts.filter((product) => product.id !== productId));
//       Alert.alert('Success', 'Product deleted successfully!');
//     } catch (error) {
//       console.error('Error deleting product:', error);
//       Alert.alert('Error', 'Failed to delete product.');
//     }
//   };

//   // Navigate to the UpdateProductScreen with product details
//   const updateProduct = (product) => {
//     navigation.navigate('UpdateProductScreen', { product });
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const renderItem = ({ item }) => (
//     <View style={styles.productCard}>
//       <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
//       <View style={styles.productDetails}>
//         <Text style={styles.productName}>{item.name}</Text>
//         <Text style={styles.productPrice}>${item.price}</Text>
//         <Text style={styles.productDescription} numberOfLines={2}>
//           {item.description}
//         </Text>
//         <Text style={styles.productStock}>Stock: {item.stock}</Text>
//         <View style={styles.actionButtons}>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => updateProduct(item)}
//           >
//             <Text style={styles.buttonText}>Update</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.button, styles.deleteButton]}
//             onPress={() => deleteProduct(item.id)}
//           >
//             <Text style={styles.buttonText}>Delete</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
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
//             onChangeText={handleSearch}
//           />
//         </View>
//       </View>
//       <FlatList
//         data={filteredProducts}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         numColumns={2} // Match ShopProducts' grid layout
//         contentContainerStyle={styles.list}
//         showsVerticalScrollIndicator={false}
//       />
//       {/* Add Product button */}
//       <TouchableOpacity
//         style={styles.addProductButton}
//         onPress={() => navigation.navigate('AddProductScreen')}
//       >
//         <Ionicons name="add" size={30} color="#FFFFFF" />
//       </TouchableOpacity>
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
//   searchContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 10,
//     paddingHorizontal: 10,
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
//   list: {
//     paddingHorizontal: 15,
//     paddingTop: 10,
//     paddingBottom: 80, // Space for floating button
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
//     marginBottom: 5,
//   },
//   productStock: {
//     fontSize: 12,
//     color: '#D1D1D1',
//     marginBottom: 10,
//   },
//   actionButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   button: {
//     backgroundColor: '#FF5E9B',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 5,
//     alignItems: 'center',
//     flex: 1,
//     marginHorizontal: 2,
//   },
//   deleteButton: {
//     backgroundColor: '#F44336', // Keep red for delete to distinguish
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 10,
//     fontWeight: '600',
//   },
//   addProductButton: {
//     position: 'absolute',
//     bottom: 30,
//     right: 20,
//     backgroundColor: '#FF5E9B',
//     borderRadius: 50,
//     padding: 12,
//     elevation: 5,
//   },
// });



import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
  StyleSheet,
  TextInput,
} from 'react-native';
import { db } from '../firebaseConfig'; // Firebase Firestore setup
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function ManageProductsScreen() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  // Fetching the list of products from Firestore
  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const productList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
      setFilteredProducts(productList);
    } catch (error) {
      console.error('Error fetching products:', error);
      Alert.alert('Error', 'Failed to fetch products.');
    }
  };

  // Filter products based on search query
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  // Function to delete product
  const deleteProduct = async (productId) => {
    try {
      await deleteDoc(doc(db, 'products', productId));
      setProducts(products.filter((product) => product.id !== productId));
      setFilteredProducts(filteredProducts.filter((product) => product.id !== productId));
      Alert.alert('Success', 'Product deleted successfully!');
    } catch (error) {
      console.error('Error deleting product:', error);
      Alert.alert('Error', 'Failed to delete product.');
    }
  };

  // Navigate to the UpdateProductScreen with product details
  const updateProduct = (product) => {
    navigation.navigate('UpdateProductScreen', { product });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <Text style={styles.productDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.productStock}>Stock: {item.stock}</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => updateProduct(item)}
          >
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={() => deleteProduct(item.id)}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={24} color="#4A90E2" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            placeholderTextColor="#718096"
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
      </View>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2} // Match ShopProducts' grid layout
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
      {/* Add Product button */}
      <TouchableOpacity
        style={styles.addProductButton}
        onPress={() => navigation.navigate('AddProductScreen')}
      >
        <Ionicons name="add" size={30} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8', // Soft blue-gray background
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F6F5',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#2D3748',
    paddingVertical: 10,
  },
  list: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 80, // Space for floating button
  },
  productCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    margin: 5,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  productDetails: {
    padding: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4A90E2',
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 12,
    color: '#718096',
    marginBottom: 5,
  },
  productStock: {
    fontSize: 12,
    color: '#718096',
    marginBottom: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 2,
  },
  deleteButton: {
    backgroundColor: '#E53E3E', // Changed to a distinct red shade for delete
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  addProductButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#4A90E2',
    borderRadius: 50,
    padding: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
});