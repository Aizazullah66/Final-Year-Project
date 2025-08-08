// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { Formik } from 'formik';
// import * as ImagePicker from 'expo-image-picker';
// import * as Yup from 'yup';
// import { db, storage } from '../firebaseConfig';
// import { collection, addDoc } from 'firebase/firestore';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// // Validation Schema
// const ProductSchema = Yup.object().shape({
//   name: Yup.string().required('Required'),
//   price: Yup.number().required('Required').min(1, 'Must be greater than 0'),
//   description: Yup.string().required('Required'),
//   quantity: Yup.number().required('Required').min(1, 'Must be greater than 0'),
// });

// export default function AddProductScreen() {
//   const [image, setImage] = useState(null);

//   // Pick Image
//   const pickImage = async (setFieldValue) => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//       setFieldValue('image', result.assets[0].uri);
//     }
//   };

//   // Upload Product
//   const uploadProduct = async (values, resetForm) => {
//     const imageRef = ref(storage, `products/${Date.now()}`);
//     const response = await fetch(values.image);
//     const blob = await response.blob();
//     await uploadBytes(imageRef, blob);

//     const imageUrl = await getDownloadURL(imageRef);

//     const product = {
//       ...values,
//       image: imageUrl,
//     };

//     await addDoc(collection(db, 'products'), product);
//     resetForm();
//     setImage(null);
//     alert('Product added successfully!');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Add Product</Text>

//       <Formik
//         initialValues={{
//           name: '',
//           price: '',
//           description: '',
//           quantity: '',
//           image: '',
//         }}
//         validationSchema={ProductSchema}
//         onSubmit={(values, { resetForm }) => uploadProduct(values, resetForm)}
//       >
//         {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => (
//           <View>
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

//             <TouchableOpacity
//               style={styles.imagePickerButton}
//               onPress={() => pickImage(setFieldValue)}
//             >
//               <Text style={styles.imagePickerButtonText}>Pick an Image</Text>
//             </TouchableOpacity>

//             {image && <Image source={{ uri: image }} style={styles.imagePreview} />}

//             <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//               <Text style={styles.buttonText}>Add Product</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       </Formik>
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
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//     backgroundColor: '#fff',
//   },
//   imagePickerButton: {
//     backgroundColor: '#007BFF',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   imagePickerButtonText: {
//     color: '#fff',
//     fontWeight: '600',
//   },
//   imagePreview: {
//     width: '100%',
//     height: 200,
//     borderRadius: 5,
//     marginBottom: 20,
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
// });


// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { Formik } from 'formik';
// import * as ImagePicker from 'expo-image-picker';
// import * as Yup from 'yup';
// import { db, storage } from '../firebaseConfig';
// import { collection, addDoc } from 'firebase/firestore';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// // Validation Schema
// const ProductSchema = Yup.object().shape({
//   name: Yup.string().required('Required'),
//   price: Yup.number().required('Required').min(1, 'Must be greater than 0'),
//   description: Yup.string().required('Required'),
//   quantity: Yup.number().required('Required').min(1, 'Must be greater than 0'),
// });

// export default function AddProductScreen() {
//   const [image, setImage] = useState(null);

//   // Pick Image
//   const pickImage = async (setFieldValue) => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: [ImagePicker.MediaType.IMAGE], // Updated media type
//         allowsEditing: true,
//         quality: 1,
//       });

//       if (!result.canceled) {
//         setImage(result.assets[0].uri);
//         setFieldValue('image', result.assets[0].uri);
//       }
//     } catch (error) {
//       console.error('Error picking image:', error);
//     }
//   };

//   // Upload Product
//   const uploadProduct = async (values, resetForm) => {
//     try {
//       if (!values.image) {
//         alert('Please select an image.');
//         return;
//       }

//       const imageRef = ref(storage, `products/${Date.now()}`);
//       const response = await fetch(values.image);
//       const blob = await response.blob();
//       await uploadBytes(imageRef, blob);

//       const imageUrl = await getDownloadURL(imageRef);

//       const product = {
//         ...values,
//         image: imageUrl,
//       };

//       await addDoc(collection(db, 'products'), product);
//       resetForm();
//       setImage(null);
//       alert('Product added successfully!');
//     } catch (error) {
//       console.error('Error uploading product:', error);
//       alert('Failed to add product. Please try again.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Add Product</Text>

//       <Formik
//         initialValues={{
//           name: '',
//           price: '',
//           description: '',
//           quantity: '',
//           image: '',
//         }}
//         validationSchema={ProductSchema}
//         onSubmit={(values, { resetForm }) => uploadProduct(values, resetForm)}
//       >
//         {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => (
//           <View>
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

//             <TouchableOpacity
//               style={styles.imagePickerButton}
//               onPress={() => pickImage(setFieldValue)}
//             >
//               <Text style={styles.imagePickerButtonText}>Pick an Image</Text>
//             </TouchableOpacity>

//             {image && <Image source={{ uri: image }} style={styles.imagePreview} />}

//             {touched.image && errors.image && <Text style={styles.error}>{errors.image}</Text>}

//             <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//               <Text style={styles.buttonText}>Add Product</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       </Formik>
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
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//     backgroundColor: '#fff',
//   },
//   imagePickerButton: {
//     backgroundColor: '#007BFF',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   imagePickerButtonText: {
//     color: '#fff',
//     fontWeight: '600',
//   },
//   imagePreview: {
//     width: '100%',
//     height: 200,
//     borderRadius: 5,
//     marginBottom: 20,
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
// });




// import React, { useState } from 'react';
// import {
//   View,
//   TextInput,
//   TouchableOpacity,
//   Text,
//   StyleSheet,
//   Image,
//   Alert,
// } from 'react-native';
// import * as ImagePicker from 'expo-image-picker'; // For picking images from gallery
// import { addDoc, collection } from 'firebase/firestore';
// import { db } from '../firebaseConfig'; // Firebase Firestore setup
// import { LinearGradient } from 'expo-linear-gradient'; // Gradient Background

// export default function AddProductScreen({ navigation }) {
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [description, setDescription] = useState('');
//   const [stock, setStock] = useState('');
//   const [imageUri, setImageUri] = useState(null);

//   // Function to pick image from gallery
//   const pickImage = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: [1, 1],
//         quality: 1,
//       });

//       if (!result.canceled) {
//         setImageUri(result.assets[0].uri); // Set the image URI
//         console.log('Image URI:', result.assets[0].uri);
//       }
//     } catch (error) {
//       console.error('Image Picker Error:', error);
//       Alert.alert('Error', 'Unable to pick an image.');
//     }
//   };

//   // Function to handle adding a product
//   const handleAddProduct = async () => {
//     if (!name || !price || !description || !stock || !imageUri) {
//       Alert.alert('Error', 'Please fill in all fields, including the image.');
//       return;
//     }

//     try {
//       // Upload image to Imgur
//       const imageData = new FormData();
//       imageData.append('image', {
//         uri: imageUri,
//         type: 'image/jpeg',
//         name: 'product.jpg',
//       });

//       const response = await fetch('https://api.imgur.com/3/image', {
//         method: 'POST',
//         headers: {
//           Authorization: 'Client-ID 5d1517ea596efd5', // Imgur Client ID
//           'Content-Type': 'multipart/form-data',
//         },
//         body: imageData,
//       });

//       const result = await response.json();

//       if (!result.success) {
//         throw new Error('Image upload to Imgur failed.');
//       }

//       const imageUrl = result.data.link; // URL of the uploaded image

//       // Add product details to Firestore with a default rating
//       await addDoc(collection(db, 'products'), {
//         name,
//         price,
//         description,
//         stock,
//         imageUrl,
//         ratings: 0, // Default rating value for products
//       });

//       Alert.alert('Success', 'Product added successfully!');
//       // navigation.navigate('ManageProductsScreen'); // Navigate to Manage Products screen
//     } catch (error) {
//       console.error('Error Adding Product:', error);
//       Alert.alert('Error', 'Failed to add product. Please try again.');
//     }
//   };

//   return (
//     <LinearGradient colors={['#1D2671', '#C33764']} style={styles.container}>
//       <View style={styles.productContainer}>
//         <Text style={styles.title}>Add Product</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Product Name"
//           value={name}
//           onChangeText={setName}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Price"
//           value={price}
//           onChangeText={setPrice}
//           keyboardType="numeric"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Description"
//           value={description}
//           onChangeText={setDescription}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Stock"
//           value={stock}
//           onChangeText={setStock}
//           keyboardType="numeric"
//         />

//         <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
//           {imageUri ? (
//             <Image source={{ uri: imageUri }} style={styles.image} />
//           ) : (
//             <Text style={styles.imageText}>Select Image</Text>
//           )}
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
//           <Text style={styles.buttonText}>Add Product</Text>
//         </TouchableOpacity>
//       </View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   productContainer: {
//     width: '90%',
//     maxWidth: 400,
//     padding: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent card
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#fff',
//   },
//   input: {
//     padding: 10,
//     marginBottom: 15,
//     width: '100%',
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly opaque background
//   },
//   imagePicker: {
//     backgroundColor: '#f0f0f0',
//     padding: 20,
//     marginBottom: 20,
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: 100,
//     height: 100,
//     resizeMode: 'contain',
//   },
//   imageText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     width: '100%',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
// });




// import React, { useState } from 'react';
// import {
//   View,
//   TextInput,
//   TouchableOpacity,
//   Text,
//   StyleSheet,
//   Image,
//   Alert,
// } from 'react-native';
// import * as ImagePicker from 'expo-image-picker'; // For picking images from gallery
// import { addDoc, collection } from 'firebase/firestore';
// import { db } from '../firebaseConfig'; // Firebase Firestore setup
// import { LinearGradient } from 'expo-linear-gradient'; // Gradient Background
// import Ionicons from 'react-native-vector-icons/Ionicons'; // For icons

// export default function AddProductScreen({ navigation }) {
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [description, setDescription] = useState('');
//   const [stock, setStock] = useState('');
//   const [imageUri, setImageUri] = useState(null);

//   // Function to pick image from gallery
//   const pickImage = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: [1, 1],
//         quality: 1,
//       });

//       if (!result.canceled) {
//         setImageUri(result.assets[0].uri); // Set the image URI
//         console.log('Image URI:', result.assets[0].uri);
//       }
//     } catch (error) {
//       console.error('Image Picker Error:', error);
//       Alert.alert('Error', 'Unable to pick an image.');
//     }
//   };

//   // Function to handle adding a product
//   const handleAddProduct = async () => {
//     if (!name || !price || !description || !stock || !imageUri) {
//       Alert.alert('Error', 'Please fill in all fields, including the image.');
//       return;
//     }

//     try {
//       // Upload image to Imgur
//       const imageData = new FormData();
//       imageData.append('image', {
//         uri: imageUri,
//         type: 'image/jpeg',
//         name: 'product.jpg',
//       });

//       const response = await fetch('https://api.imgur.com/3/image', {
//         method: 'POST',
//         headers: {
//           Authorization: 'Client-ID 5d1517ea596efd5', // Imgur Client ID
//           'Content-Type': 'multipart/form-data',
//         },
//         body: imageData,
//       });

//       const result = await response.json();

//       if (!result.success) {
//         throw new Error('Image upload to Imgur failed.');
//       }

//       const imageUrl = result.data.link; // URL of the uploaded image

//       // Add product details to Firestore with a default rating
//       await addDoc(collection(db, 'products'), {
//         name,
//         price,
//         description,
//         stock,
//         imageUrl,
//         ratings: 0, // Default rating value for products
//       });

//       Alert.alert('Success', 'Product added successfully!');
//       navigation.navigate('ManageProductsScreen'); // Navigate back after success
//     } catch (error) {
//       console.error('Error Adding Product:', error);
//       Alert.alert('Error', 'Failed to add product. Please try again.');
//     }
//   };

//   return (
//     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.container}>
//       <View style={styles.productContainer}>
//         <Text style={styles.title}>Add Product</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Product Name"
//           placeholderTextColor="#A0A0A0"
//           value={name}
//           onChangeText={setName}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Price"
//           placeholderTextColor="#A0A0A0"
//           value={price}
//           onChangeText={setPrice}
//           keyboardType="numeric"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Description"
//           placeholderTextColor="#A0A0A0"
//           value={description}
//           onChangeText={setDescription}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Stock"
//           placeholderTextColor="#A0A0A0"
//           value={stock}
//           onChangeText={setStock}
//           keyboardType="numeric"
//         />

//         <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
//           {imageUri ? (
//             <Image source={{ uri: imageUri }} style={styles.image} />
//           ) : (
//             <View style={styles.imagePickerContent}>
//               <Ionicons name="image-outline" size={24} color="#FF5E9B" />
//               <Text style={styles.imageText}>Select Image</Text>
//             </View>
//           )}
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
//           <Text style={styles.buttonText}>Add Product</Text>
//         </TouchableOpacity>
//       </View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   productContainer: {
//     width: '90%',
//     maxWidth: 400,
//     padding: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent card
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '600',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#FFFFFF',
//   },
//   input: {
//     padding: 10,
//     marginBottom: 15,
//     width: '100%',
//     borderRadius: 8,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)', // Slightly opaque background
//     color: '#FFFFFF',
//     fontSize: 16,
//   },
//   imagePicker: {
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     padding: 20,
//     marginBottom: 20,
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//   },
//   imagePickerContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 8,
//     resizeMode: 'contain',
//   },
//   imageText: {
//     fontSize: 16,
//     color: '#FF5E9B',
//     marginLeft: 10,
//   },
//   button: {
//     backgroundColor: '#FF5E9B',
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     alignItems: 'center',
//     width: '100%',
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },
// });



// import React, { useState } from 'react';
// import {
//   View,
//   TextInput,
//   TouchableOpacity,
//   Text,
//   StyleSheet,
//   Image,
//   Alert,
// } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { addDoc, collection } from 'firebase/firestore';
// import { db } from '../firebaseConfig';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function AddProductScreen({ navigation }) {
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [description, setDescription] = useState('');
//   const [stock, setStock] = useState('');
//   const [imageUri, setImageUri] = useState(null);

//   // Function to pick image from gallery
//   const pickImage = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: [1, 1],
//         quality: 1,
//       });

//       if (!result.canceled) {
//         setImageUri(result.assets[0].uri);
//         console.log('Image URI:', result.assets[0].uri);
//       }
//     } catch (error) {
//       console.error('Image Picker Error:', error);
//       Alert.alert('Error', 'Unable to pick an image.');
//     }
//   };

//   // Function to handle adding a product
//   const handleAddProduct = async () => {
//     if (!name || !price || !description || !stock || !imageUri) {
//       Alert.alert('Error', 'Please fill in all fields, including the image.');
//       return;
//     }

//     try {
//       // Upload image to Imgur
//       const imageData = new FormData();
//       imageData.append('image', {
//         uri: imageUri,
//         type: 'image/jpeg',
//         name: 'product.jpg',
//       });

//       const response = await fetch('https://api.imgur.com/3/image', {
//         method: 'POST',
//         headers: {
//           Authorization: 'Client-ID 5d1517ea596efd5', // Imgur Client ID
//           'Content-Type': 'multipart/form-data',
//         },
//         body: imageData,
//       });

//       const result = await response.json();

//       if (!result.success) {
//         throw new Error('Image upload to Imgur failed.');
//       }

//       const imageUrl = result.data.link;

//       // Add product details to Firestore with a default rating
//       await addDoc(collection(db, 'products'), {
//         name,
//         price,
//         description,
//         stock,
//         imageUrl,
//         ratings: 0,
//       });

//       Alert.alert('Success', 'Product added successfully!');
//       navigation.navigate('ManageProducts');
//     } catch (error) {
//       console.error('Error Adding Product:', error);
//       Alert.alert('Error', 'Failed to add product. Please try again.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.productContainer}>
//         <Text style={styles.title}>Add Product</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Product Name"
//           placeholderTextColor="#718096"
//           value={name}
//           onChangeText={setName}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Price"
//           placeholderTextColor="#718096"
//           value={price}
//           onChangeText={setPrice}
//           keyboardType="numeric"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Description"
//           placeholderTextColor="#718096"
//           value={description}
//           onChangeText={setDescription}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Stock"
//           placeholderTextColor="#718096"
//           value={stock}
//           onChangeText={setStock}
//           keyboardType="numeric"
//         />

//         <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
//           {imageUri ? (
//             <Image source={{ uri: imageUri }} style={styles.image} />
//           ) : (
//             <View style={styles.imagePickerContent}>
//               <Ionicons name="image-outline" size={24} color="#4A90E2" />
//               <Text style={styles.imageText}>Select Image</Text>
//             </View>
//           )}
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
//           <Text style={styles.buttonText}>Add Product</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F0F4F8', // Soft blue-gray background
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   productContainer: {
//     width: '90%',
//     maxWidth: 400,
//     padding: 20,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#2D3748',
//     marginBottom: 20,
//     textAlign: 'center',
//     textShadowColor: 'rgba(0, 0, 0, 0.1)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   input: {
//     padding: 12,
//     marginBottom: 15,
//     width: '100%',
//     borderRadius: 8,
//     backgroundColor: '#F5F6F5',
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//     color: '#2D3748',
//     fontSize: 16,
//   },
//   imagePicker: {
//     backgroundColor: '#F5F6F5',
//     padding: 20,
//     marginBottom: 20,
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//   },
//   imagePickerContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 8,
//     resizeMode: 'contain',
//   },
//   imageText: {
//     fontSize: 16,
//     color: '#4A90E2',
//     marginLeft: 10,
//   },
//   button: {
//     backgroundColor: '#4A90E2',
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     alignItems: 'center',
//     width: '100%',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },
// });







// import React, { useState } from 'react';
// import {
//   View,
//   TextInput,
//   TouchableOpacity,
//   Text,
//   StyleSheet,
//   Image,
//   Alert,
//   ScrollView,
// } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { addDoc, collection } from 'firebase/firestore';
// import { db } from '../firebaseConfig';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function AddProductScreen({ navigation }) {
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [description, setDescription] = useState('');
//   const [stock, setStock] = useState('');
//   const [imageUris, setImageUris] = useState([]);

//   // Function to pick multiple images from gallery
//   const pickImages = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsMultipleSelection: true,
//         allowsEditing: false,
//         quality: 1,
//       });

//       if (!result.canceled) {
//         const selectedUris = result.assets.map(asset => asset.uri);
//         setImageUris(prev => [...prev, ...selectedUris]);
//         console.log('Selected Image URIs:', selectedUris);
//       }
//     } catch (error) {
//       console.error('Image Picker Error:', error);
//       Alert.alert('Error', 'Unable to pick images.');
//     }
//   };

//   // Function to remove an image from selection
//   const removeImage = (uri) => {
//     setImageUris(prev => prev.filter(imageUri => imageUri !== uri));
//   };

//   // Function to handle adding a product
//   const handleAddProduct = async () => {
//     if (!name || !price || !description || !stock || imageUris.length === 0) {
//       Alert.alert('Error', 'Please fill in all fields and select at least one image.');
//       return;
//     }

//     try {
//       // Upload images to Cloudinary
//       const imageUrls = [];
//       for (const uri of imageUris) {
//         const formData = new FormData();
//         formData.append('file', {
//           uri,
//           type: 'image/jpeg',
//           name: 'product.jpg',
//         });
//         formData.append('upload_preset', 'your_upload_preset'); // Replace with your Cloudinary upload preset

//         const response = await fetch('', {
//           method: 'POST',
//           body: formData,
//         });

//         const result = await response.json();

//         if (!result.secure_url) {
//           throw new Error('Image upload to Cloudinary failed.');
//         }

//         imageUrls.push(result.secure_url);
//       }

//       // Add product details to Firestore with image URLs and default rating
//       await addDoc(collection(db, 'products'), {
//         name,
//         price,
//         description,
//         stock,
//         imageUrls, // Store array of image URLs
//         ratings: 0,
//       });

//       Alert.alert('Success', 'Product added successfully!');
//       navigation.navigate('ManageProducts');
//     } catch (error) {
//       console.error('Error Adding Product:', error);
//       Alert.alert('Error', 'Failed to add product. Please try again.');
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.productContainer}>
//         <Text style={styles.title}>Add Product</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Product Name"
//           placeholderTextColor="#718096"
//           value={name}
//           onChangeText={setName}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Price"
//           placeholderTextColor="#718096"
//           value={price}
//           onChangeText={setPrice}
//           keyboardType="numeric"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Description"
//           placeholderTextColor="#718096"
//           value={description}
//           onChangeText={setDescription}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Stock"
//           placeholderTextColor="#718096"
//           value={stock}
//           onChangeText={setStock}
//           keyboardType="numeric"
//         />

//         <TouchableOpacity onPress={pickImages} style={styles.imagePicker}>
//           <View style={styles.imagePickerContent}>
//             <Ionicons name="image-outline" size={24} color="#4A90E2" />
//             <Text style={styles.imageText}>Select Images</Text>
//           </View>
//         </TouchableOpacity>

//         {/* Display selected images */}
//         {imageUris.length > 0 && (
//           <View style={styles.imagePreviewContainer}>
//             {imageUris.map((uri, index) => (
//               <View key={index} style={styles.imageWrapper}>
//                 <Image source={{ uri }} style={styles.image} />
//                 <TouchableOpacity
//                   style={styles.removeButton}
//                   onPress={() => removeImage(uri)}
//                 >
//                   <Ionicons name="close-circle" size={24} color="#FF0000" />
//                 </TouchableOpacity>
//               </View>
//             ))}
//           </View>
//         )}

//         <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
//           <Text style={styles.buttonText}>Add Product</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F0F4F8',
//     padding: 20,
//   },
//   productContainer: {
//     width: '100%',
//     maxWidth: 400,
//     padding: 20,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//     alignSelf: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#2D3748',
//     marginBottom: 20,
//     textAlign: 'center',
//     textShadowColor: 'rgba(0, 0, 0, 0.1)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   input: {
//     padding: 12,
//     marginBottom: 15,
//     width: '100%',
//     borderRadius: 8,
//     backgroundColor: '#F5F6F5',
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//     color: '#2D3748',
//     fontSize: 16,
//   },
//   imagePicker: {
//     backgroundColor: '#F5F6F5',
//     padding: 20,
//     marginBottom: 20,
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//   },
//   imagePickerContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   imagePreviewContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
//   imageWrapper: {
//     position: 'relative',
//     margin: 5,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 8,
//     resizeMode: 'contain',
//   },
//   removeButton: {
//     position: 'absolute',
//     top: -10,
//     right: -10,
//   },
//   button: {
//     backgroundColor: '#4A90E2',
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     alignItems: 'center',
//     width: '100%',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },
// });




import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Cloudinary configuration
const CLOUD_NAME = 'dmwaesnu7'; // Replace with your Cloudinary cloud name
const UPLOAD_PRESET = 'productpics'; // Replace with your unsigned upload preset

export default function AddProductScreen({ navigation }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');
  const [imageUris, setImageUris] = useState([]);

  // Function to pick multiple images from gallery
  const pickImages = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        allowsEditing: false,
        quality: 1,
      });

      if (!result.canceled) {
        const selectedUris = result.assets.map(asset => asset.uri);
        setImageUris(prev => [...prev, ...selectedUris]);
        console.log('Selected Image URIs:', selectedUris);
      }
    } catch (error) {
      console.error('Image Picker Error:', error);
      Alert.alert('Error', 'Unable to pick images.');
    }
  };

  // Function to remove an image from selection
  const removeImage = (uri) => {
    setImageUris(prev => prev.filter(imageUri => imageUri !== uri));
  };

  // Function to handle adding a product
  const handleAddProduct = async () => {
    if (!name || !price || !description || !stock || imageUris.length === 0) {
      Alert.alert('Error', 'Please fill in all fields and select at least one image.');
      return;
    }

    try {
      // Upload images to Cloudinary
      const imageUrls = [];
      for (const uri of imageUris) {
        const formData = new FormData();
        formData.append('file', {
          uri,
          type: 'image/jpeg',
          name: 'product.jpg',
        });
        formData.append('upload_preset', UPLOAD_PRESET);

        const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        const result = await response.json();

        if (!result.secure_url) {
          throw new Error(`Image upload to Cloudinary failed: ${result.error?.message || 'Unknown error'}`);
        }

        imageUrls.push(result.secure_url);
      }

      // Add product details to Firestore with image URLs and default rating
      await addDoc(collection(db, 'products'), {
        name,
        price,
        description,
        stock,
        imageUrls,
        ratings: 0,
      });

      Alert.alert('Success', 'Product added successfully!');
      navigation.navigate('ManageProducts');
    } catch (error) {
      console.error('Error Adding Product:', error);
      Alert.alert('Error', `Failed to add product: ${error.message}`);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.productContainer}>
        <Text style={styles.title}>Add Product</Text>

        <TextInput
          style={styles.input}
          placeholder="Product Name"
          placeholderTextColor="#718096"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          placeholderTextColor="#718096"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          placeholderTextColor="#718096"
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          style={styles.input}
          placeholder="Stock"
          placeholderTextColor="#718096"
          value={stock}
          onChangeText={setStock}
          keyboardType="numeric"
        />

        <TouchableOpacity onPress={pickImages} style={styles.imagePicker}>
          <View style={styles.imagePickerContent}>
            <Ionicons name="image-outline" size={24} color="#4A90E2" />
            <Text style={styles.imageText}>Select Images</Text>
          </View>
        </TouchableOpacity>

        {/* Display selected images */}
        {imageUris.length > 0 && (
          <View style={styles.imagePreviewContainer}>
            {imageUris.map((uri, index) => (
              <View key={index} style={styles.imageWrapper}>
                <Image source={{ uri }} style={styles.image} />
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => removeImage(uri)}
                >
                  <Ionicons name="close-circle" size={24} color="#FF0000" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}

        <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
          <Text style={styles.buttonText}>Add Product</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    padding: 20,
  },
  productContainer: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2D3748',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  input: {
    padding: 12,
    marginBottom: 15,
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#F5F6F5',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    color: '#2D3748',
    fontSize: 16,
  },
  imagePicker: {
    backgroundColor: '#F5F6F5',
    padding: 20,
    marginBottom: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  imagePickerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagePreviewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  imageWrapper: {
    position: 'relative',
    margin: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  removeButton: {
    position: 'absolute',
    top: -10,
    right: -10,
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});