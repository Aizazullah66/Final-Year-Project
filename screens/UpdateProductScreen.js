// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   TextInput,
//   TouchableOpacity,
//   Text,
//   StyleSheet,
//   Alert,
// } from 'react-native';
// import { db } from '../firebaseConfig'; // Firebase Firestore setup
// import { doc, updateDoc } from 'firebase/firestore';

// export default function UpdateProductScreen({ route, navigation }) {
//   const { product } = route.params; // Get the product data from the previous screen

//   const [name, setName] = useState(product.name);
//   const [price, setPrice] = useState(product.price);
//   const [description, setDescription] = useState(product.description);
//   const [stock, setStock] = useState(product.stock);

//   // Function to handle product update
//   const handleUpdateProduct = async () => {
//     if (!name || !price || !description || !stock) {
//       Alert.alert('Error', 'Please fill in all fields.');
//       return;
//     }

//     try {
//       // Update the product data in Firestore
//       const productRef = doc(db, 'products', product.id);
//       await updateDoc(productRef, {
//         name,
//         price,
//         description,
//         stock,
//       });

//       Alert.alert('Success', 'Product updated successfully!');
//       navigation.goBack(); // Go back to ManageProductsScreen
//     } catch (error) {
//       console.error('Error updating product:', error);
//       Alert.alert('Error', 'Failed to update product. Please try again.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Update Product</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Product Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Price"
//         value={price}
//         onChangeText={setPrice}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Description"
//         value={description}
//         onChangeText={setDescription}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Stock"
//         value={stock}
//         onChangeText={setStock}
//         keyboardType="numeric"
//       />

//       <TouchableOpacity style={styles.button} onPress={handleUpdateProduct}>
//         <Text style={styles.buttonText}>Update Product</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     padding: 10,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
// });



import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // For picking images
import { db } from '../firebaseConfig'; // Firebase Firestore setup
import { doc, updateDoc } from 'firebase/firestore';

export default function UpdateProductScreen({ route, navigation }) {
  const { product } = route.params; // Get the product data from the previous screen

  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [stock, setStock] = useState(product.stock);
  const [imageUri, setImageUri] = useState(product.imageUrl);

  // Function to pick a new image
  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        setImageUri(result.assets[0].uri); // Set the image URI
        console.log('New Image URI:', result.assets[0].uri);
      }
    } catch (error) {
      console.error('Image Picker Error:', error);
      Alert.alert('Error', 'Unable to pick an image.');
    }
  };

  // Function to handle product update
  const handleUpdateProduct = async () => {
    if (!name || !price || !description || !stock) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    try {
      const productRef = doc(db, 'products', product.id);

      // If the image URI was updated, upload the new image and update the image URL
      if (imageUri !== product.imageUrl) {
        // Here, you would upload the image to a storage service (like Imgur or Firebase Storage)
        // For now, we'll assume that you have a function to upload the image and return its URL
        const imageUrl = await uploadImage(imageUri); // Assume this function uploads the image and returns the URL

        // Update the product data in Firestore
        await updateDoc(productRef, {
          name,
          price,
          description,
          stock,
          imageUrl, // Update the image URL
        });
      } else {
        // If the image URI was not updated, only update the text fields
        await updateDoc(productRef, {
          name,
          price,
          description,
          stock,
        });
      }

      Alert.alert('Success', 'Product updated successfully!');
      navigation.goBack(); // Go back to ManageProductsScreen
    } catch (error) {
      console.error('Error updating product:', error);
      Alert.alert('Error', 'Failed to update product. Please try again.');
    }
  };

  // Function to upload image (Dummy function for now)
  const uploadImage = async (uri) => {
    // Replace this with actual image upload logic
    // For example, upload the image to Firebase Storage or an external service
    console.log('Uploading image:', uri);
    return uri; // Return the image URL (For now, returning the same URI)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Product</Text>

      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Stock"
        value={stock}
        onChangeText={setStock}
        keyboardType="numeric"
      />

      <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <Text style={styles.imageText}>Select Image</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleUpdateProduct}>
        <Text style={styles.buttonText}>Update Product</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  imagePicker: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    marginBottom: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  imageText: {
    fontSize: 16,
    color: '#333',
  },
});
