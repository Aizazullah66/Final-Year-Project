// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
// import axios from 'axios';
// import { Video } from 'expo-av'; // Use expo-av to display videos/animations

// const { width } = Dimensions.get('window');

// export default function WorkoutVideos() {
//   const [exercises, setExercises] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch workout exercises from the API
//   const fetchExercises = async () => {
//     try {
//       const response = await axios.get('https://exercise-db-fitness-workout-gym.p.rapidapi.com/exercises', {
//         headers: {
//           'x-rapidapi-key': '85641ae2f0msh592c9334af123a6p1d9a5ejsn7ddc287f0b4e',
//           'x-rapidapi-host': 'exercise-db-fitness-workout-gym.p.rapidapi.com',
//         },
//       });
//       setExercises(response.data);
//       console.log(JSON.stringify(response.data));
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchExercises();
//   }, []);

//   // Render each exercise in the list
//   const renderExercise = ({ item }) => (
//     <View style={styles.exerciseContainer}>
//       <Text style={styles.exerciseName}>{item.name}</Text>
//       <Text style={styles.exerciseDescription}>{item.description}</Text>
      
//       {/* Display video or animation */}
//       {item.animation_url ? (
//         <Video
//           source={{ uri: item.animation_url }} // You can replace this URL with the one in your API response
//           style={styles.video}
//           useNativeControls
//           resizeMode="contain"
//           isLooping
//         />
//       ) : (
//         <Image source={{ uri: item.image }} style={styles.image} />
//       )}
//     </View>
//   );

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={exercises}
//         renderItem={renderExercise}
//         keyExtractor={(item) => item.id.toString()}
//         contentContainerStyle={styles.listContainer}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   exerciseContainer: {
//     marginBottom: 30,
//     backgroundColor: '#f5f5f5',
//     borderRadius: 10,
//     padding: 10,
//   },
//   exerciseName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 10,
//   },
//   exerciseDescription: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 15,
//   },
//   video: {
//     width: width - 40,
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   image: {
//     width: width - 40,
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
// });

// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
// import axios from 'axios';

// const { width } = Dimensions.get('window');

// export default function WorkoutVideos() {
//   const [exercises, setExercises] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch workout exercises from the API
//   const fetchExercises = async () => {
//     try {
//       const response = await axios.get('https://exercise-db-fitness-workout-gym.p.rapidapi.com/exercises', {
//         headers: {
//           'x-rapidapi-key': '85641ae2f0msh592c9334af123a6p1d9a5ejsn7ddc287f0b4e',
//           'x-rapidapi-host': 'exercise-db-fitness-workout-gym.p.rapidapi.com',
//         },
//       });
//       setExercises(response.data);
//       console.log(JSON.stringify(response.data)); // Inspect this for accuracy
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchExercises();
//   }, []);

//   // Render each exercise in the list
//   const renderExercise = ({ item }) => (
//     <View style={styles.exerciseContainer}>
//       <Text style={styles.exerciseName}>{item.excercises_ids}</Text>
//       <Text style={styles.exerciseBodyPart}>Body Part: {item.bodyPart}</Text>
//       <Text style={styles.exerciseEquipment}>Equipment: {item.equipment}</Text>

//       {/* Display gif animation */}
//       {item.gifUrl ? (
//         <Image source={{ uri: item.gifUrl }} style={styles.image} />
//       ) : (
//         <Text style={styles.noImage}>No animation available</Text>
//       )}
//     </View>
//   );

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={exercises}
//         renderItem={renderExercise}
//         keyExtractor={(item) => item.id.toString()}
//         contentContainerStyle={styles.listContainer}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   exerciseContainer: {
//     marginBottom: 30,
//     backgroundColor: '#f5f5f5',
//     borderRadius: 10,
//     padding: 10,
//   },
//   exerciseName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 10,
//   },
//   exerciseBodyPart: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 5,
//   },
//   exerciseEquipment: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 15,
//   },
//   image: {
//     width: width - 40,
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   noImage: {
//     fontSize: 16,
//     color: '#999',
//     textAlign: 'center',
//     marginTop: 20,
//   },
// });



// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList,  StyleSheet, ActivityIndicator } from 'react-native';
// import axios from 'axios';
// import {Image} from "expo-image";


// const WorkoutVideos = () => {
//   const [exercises, setExercises] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchExercises = async () => {
//       const options = {
//         method: 'GET',
//         url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
//         params: { limit: '10', offset: '0' },
//         headers: {
//           'x-rapidapi-key': '85641ae2f0msh592c9334af123a6p1d9a5ejsn7ddc287f0b4e',
//           'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
//         },
//       };

//       try {
//         const response = await axios.request(options);
//         setExercises(response.data);
//       } catch (error) {
//         console.error('Error fetching exercises:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchExercises();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.loader}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   const renderExercise = ({ item }) => (
//     <View style={styles.card}>
//       <Image source={{ uri: item.gifUrl }} style={styles.image} />
//       <Text style={styles.name}>{item.name}</Text>
//       <Text style={styles.bodyPart}>Target: {item.target}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={exercises}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderExercise}
//         contentContainerStyle={styles.list}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 10,
//   },
//   loader: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   list: {
//     paddingBottom: 20,
//   },
//   card: {
//     backgroundColor: '#fff',
//     marginBottom: 15,
//     borderRadius: 10,
//     overflow: 'hidden',
//     elevation: 3,
//     padding: 10,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'cover',
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   bodyPart: {
//     fontSize: 14,
//     color: '#666',
//   },
// });

// export default WorkoutVideos;



// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// // import { useNavigation } from '@react-navigation/native';

// const bodyParts = [
//   'back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck',
//   'shoulders', 'upper arms', 'upper legs', 'waist'
// ];

// const WorkoutVideos = ({navigation}) => {
//   // const navigation = useNavigation();

//   const handlePress = (bodyPart) => {
//     navigation.navigate('WorkoutAnimations', { bodyPart });
//   };

//   return (
//     <View style={styles.container}>
//       {bodyParts.map((bodyPart) => (
//         <TouchableOpacity
//           key={bodyPart}
//           style={styles.touchableOpacity}
//           onPress={() => handlePress(bodyPart)}
//         >
//           <Text style={styles.bodyPartText}>{bodyPart}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   touchableOpacity: {
//     padding: 15,
//     margin: 10,
//     backgroundColor: '#4CAF50',
//     borderRadius: 5,
//   },
//   bodyPartText: {
//     fontSize: 18,
//     color: '#fff',
//   },
// });

// export default WorkoutVideos;


// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

// const bodyParts = [
//   { name: 'back', image: 'https://hips.hearstapps.com/hmg-prod/images/shot-of-a-man-completing-pull-ups-in-his-gym-royalty-free-image-1699273159.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*' },
//   { name: 'cardio', image: 'https://images.contentstack.io/v3/assets/blt45c082eaf9747747/bltf986a6cd903272e4/5de0baf53d35df03acd48150/Content1_CardiovsStrength.jpg?width=1232&auto=webp&format=progressive&quality=76' },
//   { name: 'chest', image: 'https://cdn.shopify.com/s/files/1/0805/6265/1456/articles/Upper-Chest-Training-_E2_80_93-6-Chest-Exercises-You-Should-Try.jpg' },
//   { name: 'lower arms', image: 'https://link-to-lower-arms-image.png' },
//   { name: 'lower legs', image: 'https://link-to-lower-legs-image.png' },
//   { name: 'neck', image: 'https://link-to-neck-image.png' },
//   { name: 'shoulders', image: 'https://link-to-shoulders-image.png' },
//   { name: 'upper arms', image: 'https://link-to-upper-arms-image.png' },
//   { name: 'upper legs', image: 'https://link-to-upper-legs-image.png' },
//   { name: 'waist', image: 'https://link-to-waist-image.png' }
// ];

// const WorkoutVideos = ({ navigation }) => {
//   const handlePress = (bodyPart) => {
//     navigation.navigate('WorkoutAnimations', { bodyPart });
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {bodyParts.map((bodyPart) => (
//           <TouchableOpacity
//             key={bodyPart.name}
//             style={styles.touchableOpacity}
//             onPress={() => handlePress(bodyPart.name)}
//           >
//             <Image source={{ uri: bodyPart.image }} style={styles.image} />
//             <Text style={styles.bodyPartText}>{bodyPart.name}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#f5f5f5',
//     backgroundColor:"grey"
//   },
//   scrollContainer: {
//     padding: 10,
//     alignItems: 'center',
//   },
//   touchableOpacity: {
//     width: '90%',
//     paddingVertical: 30,
//     marginVertical: 10,
//     // backgroundColor: '#4CAF50',
//     borderRadius: 10,
//     elevation: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'column',
//     borderRadius:15,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//   },
//   image: {
//     width: 250,
//     height: 150,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   bodyPartText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//     textTransform: 'capitalize',
//   },
// });

// export default WorkoutVideos;



// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// const bodyParts = [
//   { name: 'back', image: 'https://hips.hearstapps.com/hmg-prod/images/shot-of-a-man-completing-pull-ups-in-his-gym-royalty-free-image-1699273159.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*' },
//   { name: 'cardio', image: 'https://images.contentstack.io/v3/assets/blt45c082eaf9747747/bltf986a6cd903272e4/5de0baf53d35df03acd48150/Content1_CardiovsStrength.jpg?width=1232&auto=webp&format=progressive&quality=76' },
//   { name: 'chest', image: 'https://cdn.shopify.com/s/files/1/0805/6265/1456/articles/Upper-Chest-Training-_E2_80_93-6-Chest-Exercises-You-Should-Try.jpg' },
//   { name: 'lower arms', image: 'https://mensfitness.co.uk/wp-content/uploads/sites/2/2022/12/omar-CAN30718-1-e1671705397199.jpg' },
//   { name: 'lower legs', image: 'https://mirafit.co.uk/wp/wp-content/uploads/2024/02/Rocking-Standing-Calf-Raise-with-Mirafit-Rubber-Dumbbells-1024x683.jpg' },
//   { name: 'neck', image: 'https://www.dmoose.com/cdn/shop/articles/1_68d5f8c2-0791-4a41-86db-e7f224b142ea.jpg?v=1649931793' },
//   { name: 'shoulders', image: 'https://cdn.prod.website-files.com/63ed08484c069d0492f5b0bc/66ff058d835bc069e3b318a9_6655e153d8fd0cebf365f945_pexels-ivan-samkov-4164773.jpeg' },
//   { name: 'upper arms', image: 'https://gripzilla.co/cdn/shop/articles/from-skinny-to-stacked-5-barbell-arm-workouts-to-transform-your-upper-body-720019.jpg?v=1697243008&width=1000' },
//   { name: 'upper legs', image: 'https://www.muscletech.com/cdn/shop/articles/best-inner-thigh-exercises.jpg?v=1713464853&width=1000' },
//   { name: 'waist', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2023/09/bicycle-crunches-1.jpeg?quality=82&strip=1&w=800' },
// ];

// const WorkoutVideos = ({ navigation }) => {
//   const handlePress = (bodyPart) => {
//     navigation.navigate('WorkoutAnimations', { bodyPart });
//   };

//   return (
//     <LinearGradient colors={['#1D2671', '#C33764']} style={styles.gradientContainer}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {bodyParts.map((bodyPart) => (
//           <TouchableOpacity
//             key={bodyPart.name}
//             style={styles.touchableOpacity}
//             onPress={() => handlePress(bodyPart.name)}
//           >
//             <Image source={{ uri: bodyPart.image }} style={styles.image} />
//             <LinearGradient colors={['#00000000', '#00000080']} style={styles.overlay}>
//               <Text style={styles.bodyPartText}>{bodyPart.name}</Text>
//             </LinearGradient>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   gradientContainer: {
//     flex: 1,
//   },
//   scrollContainer: {
//     padding: 20,
//     alignItems: 'center',
//   },
//   touchableOpacity: {
//     width: '100%',
//     marginBottom: 20,
//     borderRadius: 15,
//     overflow: 'hidden',
//     elevation: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 10,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     borderRadius: 15,
//   },
//   overlay: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: '30%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   bodyPartText: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#fff',
//     textTransform: 'capitalize',
//   },
// });

// export default WorkoutVideos;



// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// const bodyParts = [
//   { name: 'back', image: 'https://hips.hearstapps.com/hmg-prod/images/shot-of-a-man-completing-pull-ups-in-his-gym-royalty-free-image-1699273159.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*' },
//   { name: 'cardio', image: 'https://images.contentstack.io/v3/assets/blt45c082eaf9747747/bltf986a6cd903272e4/5de0baf53d35df03acd48150/Content1_CardiovsStrength.jpg?width=1232&auto=webp&format=progressive&quality=76' },
//   { name: 'chest', image: 'https://cdn.shopify.com/s/files/1/0805/6265/1456/articles/Upper-Chest-Training-_E2_80_93-6-Chest-Exercises-You-Should-Try.jpg' },
//   { name: 'lower arms', image: 'https://mensfitness.co.uk/wp-content/uploads/sites/2/2022/12/omar-CAN30718-1-e1671705397199.jpg' },
//   { name: 'lower legs', image: 'https://mirafit.co.uk/wp/wp-content/uploads/2024/02/Rocking-Standing-Calf-Raise-with-Mirafit-Rubber-Dumbbells-1024x683.jpg' },
//   { name: 'neck', image: 'https://www.dmoose.com/cdn/shop/articles/1_68d5f8c2-0791-4a41-86db-e7f224b142ea.jpg?v=1649931793' },
//   { name: 'shoulders', image: 'https://cdn.prod.website-files.com/63ed08484c069d0492f5b0bc/66ff058d835bc069e3b318a9_6655e153d8fd0cebf365f945_pexels-ivan-samkov-4164773.jpeg' },
//   { name: 'upper arms', image: 'https://gripzilla.co/cdn/shop/articles/from-skinny-to-stacked-5-barbell-arm-workouts-to-transform-your-upper-body-720019.jpg?v=1697243008&width=1000' },
//   { name: 'upper legs', image: 'https://www.muscletech.com/cdn/shop/articles/best-inner-thigh-exercises.jpg?v=1713464853&width=1000' },
//   { name: 'waist', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2023/09/bicycle-crunches-1.jpeg?quality=82&strip=1&w=800' },
// ];

// const WorkoutVideos = ({ navigation }) => {
//   const handlePress = (bodyPart) => {
//     navigation.navigate('WorkoutAnimations', { bodyPart });
//   };

//   return (
//     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <View style={styles.gridContainer}>
//           {bodyParts.map((bodyPart) => (
//             <TouchableOpacity
//               key={bodyPart.name}
//               style={styles.touchableOpacity}
//               onPress={() => handlePress(bodyPart.name)}
//             >
//               <Image source={{ uri: bodyPart.image }} style={styles.image} />
//               <View style={styles.textContainer}>
//                 <Text style={styles.bodyPartText}>{bodyPart.name}</Text>
//               </View>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </ScrollView>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   gradientContainer: {
//     flex: 1,
//   },
//   scrollContainer: {
//     padding: 15,
//   },
//   gridContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   touchableOpacity: {
//     width: '48%', // Two items per row with some spacing
//     marginBottom: 20,
//     borderRadius: 10,
//     overflow: 'hidden',
//     // backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slight background for contrast
//     backgroundColor:'#FF5E9B',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   image: {
//     width: '100%',
//     height: 150,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//   },
//   textContainer: {
//     padding: 10,
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for text readability
//   },
//   bodyPartText: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     textTransform: 'capitalize',
//   },
// });

// export default WorkoutVideos;



// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   FlatList,
//   Image,
//   StatusBar,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// const bodyParts = [
//   { name: 'back', image: 'https://hips.hearstapps.com/hmg-prod/images/shot-of-a-man-completing-pull-ups-in-his-gym-royalty-free-image-1699273159.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*' },
//   { name: 'cardio', image: 'https://images.contentstack.io/v3/assets/blt45c082eaf9747747/bltf986a6cd903272e4/5de0baf53d35df03acd48150/Content1_CardiovsStrength.jpg?width=1232&auto=webp&format=progressive&quality=76' },
//   { name: 'chest', image: 'https://cdn.shopify.com/s/files/1/0805/6265/1456/articles/Upper-Chest-Training-_E2_80_93-6-Chest-Exercises-You-Should-Try.jpg' },
//   { name: 'lower arms', image: 'https://mensfitness.co.uk/wp-content/uploads/sites/2/2022/12/omar-CAN30718-1-e1671705397199.jpg' },
//   { name: 'lower legs', image: 'https://mirafit.co.uk/wp/wp-content/uploads/2024/02/Rocking-Standing-Calf-Raise-with-Mirafit-Rubber-Dumbbells-1024x683.jpg' },
//   { name: 'neck', image: 'https://www.dmoose.com/cdn/shop/articles/1_68d5f8c2-0791-4a41-86db-e7f224b142ea.jpg?v=1649931793' },
//   { name: 'shoulders', image: 'https://cdn.prod.website-files.com/63ed08484c069d0492f5b0bc/66ff058d835bc069e3b318a9_6655e153d8fd0cebf365f945_pexels-ivan-samkov-4164773.jpeg' },
//   { name: 'upper arms', image: 'https://gripzilla.co/cdn/shop/articles/from-skinny-to-stacked-5-barbell-arm-workouts-to-transform-your-upper-body-720019.jpg?v=1697243008&width=1000' },
//   { name: 'upper legs', image: 'https://www.muscletech.com/cdn/shop/articles/best-inner-thigh-exercises.jpg?v=1713464853&width=1000' },
//   { name: 'waist', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2023/09/bicycle-crunches-1.jpeg?quality=82&strip=1&w=800' },
// ];

// const WorkoutVideos = ({ navigation }) => {
//   const handlePress = (bodyPart) => {
//     navigation.navigate('WorkoutAnimations', { bodyPart });
//   };

//   const renderHorizontalItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.horizontalItem}
//       onPress={() => handlePress(item.name)}
//     >
//       <Image source={{ uri: item.image }} style={styles.horizontalImage} />
//     </TouchableOpacity>
//   );

//   const renderGridItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.touchableOpacity}
//       onPress={() => handlePress(item.name)}
//     >
//       <Image source={{ uri: item.image }} style={styles.image} />
//       <View style={styles.textContainer}>
//         <Text style={styles.bodyPartText}>{item.name}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
//       <StatusBar backgroundColor="#1A1A2E" barStyle="light-content" />
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {/* Heading */}
//         <View style={styles.headerContainer}>
//           <Text style={styles.readyText}>Ready TO</Text>
//           <Text style={styles.workoutText}>Workout</Text>
//         </View>

//         {/* Horizontal FlatList (Images Only) */}
//         <FlatList
//           data={bodyParts}
//           renderItem={renderHorizontalItem}
//           keyExtractor={(item) => item.name}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           style={styles.horizontalList}
//         />

//         {/* 2D Grid FlatList (Images with Names) */}
//         <View style={styles.gridContainer}>
//           <FlatList
//             data={bodyParts}
//             renderItem={renderGridItem}
//             keyExtractor={(item) => item.name}
//             numColumns={2}
//             columnWrapperStyle={styles.gridRow}
//           />
//         </View>
//       </ScrollView>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   gradientContainer: {
//     flex: 1,
//   },
//   scrollContainer: {
//     padding: 15,
//   },
//   headerContainer: {
//     marginBottom: 20,
//     alignItems: 'flex-start',
//   },
//   readyText: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#FFD700', // Gold color for contrast
//     textShadowColor: 'rgba(0, 0, 0, 0.3)',
//     textShadowOffset: { width: 0, height: 1 },
//     textShadowRadius: 2,
//   },
//   workoutText: {
//     fontSize: 32,
//     fontWeight: '900',
//     color: '#FF5E9B', // Pink color for contrast
//     textShadowColor: 'rgba(0, 0, 0, 0.3)',
//     textShadowOffset: { width: 0, height: 1 },
//     textShadowRadius: 2,
//   },
//   horizontalList: {
//     marginBottom: 20,
//     height: 150, // Match image height
//   },
//   horizontalItem: {
//     width: 150,
//     marginRight: 10,
//     borderRadius: 10,
//     overflow: 'hidden',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 2 },
//     backgroundColor: '#FF5E9B', // Consistent with grid
//   },
//   horizontalImage: {
//     width: '100%',
//     height: 150,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//   },
//   gridContainer: {
//     flex: 1,
//   },
//   gridRow: {
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   touchableOpacity: {
//     width: '48%',
//     borderRadius: 10,
//     overflow: 'hidden',
//     backgroundColor: '#FF5E9B',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   image: {
//     width: '100%',
//     height: 150,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//   },
//   textContainer: {
//     padding: 10,
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   bodyPartText: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     textTransform: 'capitalize',
//   },
// });

// export default WorkoutVideos;


// import React, { useRef, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   FlatList,
//   Image,
//   StatusBar,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// const bodyParts = [
//   { name: 'back', image: 'https://hips.hearstapps.com/hmg-prod/images/shot-of-a-man-completing-pull-ups-in-his-gym-royalty-free-image-1699273159.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*' },
//   { name: 'cardio', image: 'https://images.contentstack.io/v3/assets/blt45c082eaf9747747/bltf986a6cd903272e4/5de0baf53d35df03acd48150/Content1_CardiovsStrength.jpg?width=1232&auto=webp&format=progressive&quality=76' },
//   { name: 'chest', image: 'https://cdn.shopify.com/s/files/1/0805/6265/1456/articles/Upper-Chest-Training-_E2_80_93-6-Chest-Exercises-You-Should-Try.jpg' },
//   { name: 'lower arms', image: 'https://mensfitness.co.uk/wp-content/uploads/sites/2/2022/12/omar-CAN30718-1-e1671705397199.jpg' },
//   { name: 'lower legs', image: 'https://mirafit.co.uk/wp/wp-content/uploads/2024/02/Rocking-Standing-Calf-Raise-with-Mirafit-Rubber-Dumbbells-1024x683.jpg' },
//   { name: 'neck', image: 'https://www.dmoose.com/cdn/shop/articles/1_68d5f8c2-0791-4a41-86db-e7f224b142ea.jpg?v=1649931793' },
//   { name: 'shoulders', image: 'https://cdn.prod.website-files.com/63ed08484c069d0492f5b0bc/66ff058d835bc069e3b318a9_6655e153d8fd0cebf365f945_pexels-ivan-samkov-4164773.jpeg' },
//   { name: 'upper arms', image: 'https://gripzilla.co/cdn/shop/articles/from-skinny-to-stacked-5-barbell-arm-workouts-to-transform-your-upper-body-720019.jpg?v=1697243008&width=1000' },
//   { name: 'upper legs', image: 'https://www.muscletech.com/cdn/shop/articles/best-inner-thigh-exercises.jpg?v=1713464853&width=1000' },
//   { name: 'waist', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2023/09/bicycle-crunches-1.jpeg?quality=82&strip=1&w=800' },
// ];

// const WorkoutVideos = ({ navigation }) => {
//   const handlePress = (bodyPart) => {
//     navigation.navigate('WorkoutAnimations', { bodyPart });
//   };

//   const flatListRef = useRef(null);

//   // Auto-scroll effect for horizontal FlatList
//   useEffect(() => {
//     let offset = 0;
//     const interval = setInterval(() => {
//       if (flatListRef.current) {
//         offset += 200; // Move by the width of each item
//         if (offset >= bodyParts.length * 200) offset = 0; // Reset to start
//         flatListRef.current.scrollToOffset({ offset, animated: true });
//       }
//     }, 2000); // Scroll every 2 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   const renderHorizontalItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.horizontalItem}
//       onPress={() => handlePress(item.name)}
//     >
//       <Image source={{ uri: item.image }} style={styles.horizontalImage} />
//     </TouchableOpacity>
//   );

//   const renderGridItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.touchableOpacity}
//       onPress={() => handlePress(item.name)}
//     >
//       <Image source={{ uri: item.image }} style={styles.image} />
//       <View style={styles.textContainer}>
//         <Text style={styles.bodyPartText}>{item.name}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   const renderHorizontalSeparator = () => <View style={styles.horizontalSeparator} />;

//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {/* Heading */}
//         <View style={styles.headerContainer}>
//           <Text style={styles.readyText}>Ready TO</Text>
//           <Text style={styles.workoutText}>Workout</Text>
//         </View>

//         {/* Horizontal FlatList (Images Only) */}
//         <FlatList
//           ref={flatListRef}
//           data={bodyParts}
//           renderItem={renderHorizontalItem}
//           keyExtractor={(item) => item.name}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           ItemSeparatorComponent={renderHorizontalSeparator}
//           style={styles.horizontalList}
//         />

//         {/* Exercises Heading */}
//         <Text style={styles.exercisesHeading}>Exercises</Text>

//         {/* 2D Grid FlatList (Images with Names) */}
//         <View style={styles.gridContainer}>
//           <FlatList
//             data={bodyParts}
//             renderItem={renderGridItem}
//             keyExtractor={(item) => item.name}
//             numColumns={2}
//             columnWrapperStyle={styles.gridRow}
//           />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   scrollContainer: {
//     padding: 15,
//   },
//   headerContainer: {
//     marginBottom: 20,
//     alignItems: 'flex-start',
//   },
//   readyText: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#FFD700', // Gold color for contrast
//     textShadowColor: 'rgba(0, 0, 0, 0.3)',
//     textShadowOffset: { width: 0, height: 1 },
//     textShadowRadius: 2,
//   },
//   workoutText: {
//     fontSize: 32,
//     fontWeight: '900',
//     color: '#FF5E9B', // Pink color for contrast
//     textShadowColor: 'rgba(0, 0, 0, 0.3)',
//     textShadowOffset: { width: 0, height: 1 },
//     textShadowRadius: 2,
//   },
//   horizontalList: {
//     marginBottom: 20,
//     height: 200, // Increased height to match new image size
//   },
//   horizontalItem: {
//     width: 200, // Increased width
//     marginRight: 10,
//     borderRadius: 10,
//     overflow: 'hidden',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 2 },
//     backgroundColor: '#FF5E9B',
//   },
//   horizontalImage: {
//     width: '100%',
//     height: 200, // Increased height
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//   },
//   horizontalSeparator: {
//     width: 10, // Space between images
//   },
//   exercisesHeading: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#333333',
//     marginBottom: 15,
//     marginTop: 10,
//   },
//   gridContainer: {
//     flex: 1,
//   },
//   gridRow: {
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   touchableOpacity: {
//     width: '48%',
//     borderRadius: 10,
//     overflow: 'hidden',
//     backgroundColor: '#FF5E9B',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   image: {
//     width: '100',
//     height: 150,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//   },
//   textContainer: {
//     padding: 10,
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   bodyPartText: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     textTransform: 'capitalize',
//   },
// });

// export default WorkoutVideos;




// import React, { useRef, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   FlatList,
//   Image,
//   StatusBar,
//   Dimensions,
// } from 'react-native';

// const { width: screenWidth } = Dimensions.get('window'); // Get screen width dynamically

// const bodyParts = [
//   { name: 'back', image: 'https://hips.hearstapps.com/hmg-prod/images/shot-of-a-man-completing-pull-ups-in-his-gym-royalty-free-image-1699273159.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*' },
//   { name: 'cardio', image: 'https://images.contentstack.io/v3/assets/blt45c082eaf9747747/bltf986a6cd903272e4/5de0baf53d35df03acd48150/Content1_CardiovsStrength.jpg?width=1232&auto=webp&format=progressive&quality=76' },
//   { name: 'chest', image: 'https://cdn.shopify.com/s/files/1/0805/6265/1456/articles/Upper-Chest-Training-_E2_80_93-6-Chest-Exercises-You-Should-Try.jpg' },
//   { name: 'lower arms', image: 'https://mensfitness.co.uk/wp-content/uploads/sites/2/2022/12/omar-CAN30718-1-e1671705397199.jpg' },
//   { name: 'lower legs', image: 'https://mirafit.co.uk/wp/wp-content/uploads/2024/02/Rocking-Standing-Calf-Raise-with-Mirafit-Rubber-Dumbbells-1024x683.jpg' },
//   { name: 'neck', image: 'https://www.dmoose.com/cdn/shop/articles/1_68d5f8c2-0791-4a41-86db-e7f224b142ea.jpg?v=1649931793' },
//   { name: 'shoulders', image: 'https://cdn.prod.website-files.com/63ed08484c069d0492f5b0bc/66ff058d835bc069e3b318a9_6655e153d8fd0cebf365f945_pexels-ivan-samkov-4164773.jpeg' },
//   { name: 'upper arms', image: 'https://gripzilla.co/cdn/shop/articles/from-skinny-to-stacked-5-barbell-arm-workouts-to-transform-your-upper-body-720019.jpg?v=1697243008&width=1000' },
//   { name: 'upper legs', image: 'https://www.muscletech.com/cdn/shop/articles/best-inner-thigh-exercises.jpg?v=1713464853&width=1000' },
//   { name: 'waist', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2023/09/bicycle-crunches-1.jpeg?quality=82&strip=1&w=800' },
// ];

// const WorkoutVideos = ({ navigation }) => {
//   const handlePress = (bodyPart) => {
//     navigation.navigate('WorkoutAnimations', { bodyPart });
//   };

//   const flatListRef = useRef(null);
//   const horizontalImageWidth = screenWidth * 0.9; // 90% of screen width

//   // Auto-scroll effect for horizontal FlatList
//   useEffect(() => {
//     let offset = 0;
//     const interval = setInterval(() => {
//       if (flatListRef.current) {
//         offset += horizontalImageWidth + 10; // Move by the width of each item + separator
//         if (offset >= bodyParts.length * (horizontalImageWidth + 10)) offset = 0; // Reset to start
//         flatListRef.current.scrollToOffset({ offset, animated: true });
//       }
//     }, 2000); // Scroll every 2 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   const renderHorizontalItem = ({ item }) => (
//     <TouchableOpacity
//       style={[styles.horizontalItem, { width: horizontalImageWidth }]}
//       onPress={() => handlePress(item.name)}
//     >
//       <Image source={{ uri: item.image }} style={[styles.horizontalImage, { width: horizontalImageWidth }]} />
//     </TouchableOpacity>
//   );

//   const renderGridItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.touchableOpacity}
//       onPress={() => handlePress(item.name)}
//     >
//       <Image source={{ uri: item.image }} style={styles.image} />
//       <View style={styles.textContainer}>
//         <Text style={styles.bodyPartText}>{item.name}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   const renderHorizontalSeparator = () => <View style={styles.horizontalSeparator} />;

//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {/* Heading */}
//         <View style={styles.headerContainer}>
//           <Text style={styles.readyText}>Ready TO</Text>
//           <Text style={styles.workoutText}>Workout</Text>
//         </View>

//         {/* Horizontal FlatList (Images Only) */}
//         <FlatList
//           ref={flatListRef}
//           data={bodyParts}
//           renderItem={renderHorizontalItem}
//           keyExtractor={(item) => item.name}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           ItemSeparatorComponent={renderHorizontalSeparator}
//           style={styles.horizontalList}
//           snapToInterval={horizontalImageWidth + 10} // Snap to each image + separator
//           snapToAlignment="start" // Snap to the start of each item
//           decelerationRate="fast" // Smooth snapping
//         />

//         {/* Exercises Heading */}
//         <Text style={styles.exercisesHeading}>Exercises</Text>

//         {/* 2D Grid FlatList (Images with Names) */}
//         <View style={styles.gridContainer}>
//           <FlatList
//             data={bodyParts}
//             renderItem={renderGridItem}
//             keyExtractor={(item) => item.name}
//             numColumns={2}
//             columnWrapperStyle={styles.gridRow}
//           />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   scrollContainer: {
//     padding: 15,
//   },
//   headerContainer: {
//     marginBottom: 20,
//     alignItems: 'flex-start',
//   },
//   readyText: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#A84CF2', // Gold color for contrast
//     textShadowColor: 'rgba(0, 0, 0, 0.3)',
//     textShadowOffset: { width: 0, height: 1 },
//     textShadowRadius: 2,
//   },
//   workoutText: {
//     fontSize: 32,
//     fontWeight: '900',
//     color: '#FF5E9B', // Pink color for contrast
//     textShadowColor: 'rgba(0, 0, 0, 0.3)',
//     textShadowOffset: { width: 0, height: 1 },
//     textShadowRadius: 2,
//   },
//   horizontalList: {
//     marginBottom: 20,
//     height: 200,
//   },
//   horizontalItem: {
//     borderRadius: 10,
//     overflow: 'hidden',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   horizontalImage: {
//     height: 200,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//   },
//   horizontalSeparator: {
//     width: 10, // Space between images
//   },
//   exercisesHeading: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#333333',
//     marginBottom: 15,
//     marginTop: 10,
//   },
//   gridContainer: {
//     flex: 1,
//   },
//   gridRow: {
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   touchableOpacity: {
//     width: '48%',
//     borderRadius: 10,
//     overflow: 'hidden',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   image: {
//     width: '90%', // Take 90% of the container width
//     height: 150,
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     alignSelf: 'center', // Center the image within the container
//   },
//   textContainer: {
//     padding: 10,
//     alignItems: 'center',
//     // backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     backgroundColor:"#A84CF2"
//   },
//   bodyPartText: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: 'white',
//     textTransform: 'capitalize',
//   },
// });

// export default WorkoutVideos;



// import React, { useRef, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   FlatList,
//   Image,
//   StatusBar,
//   Dimensions,
// } from 'react-native';

// const { width: screenWidth } = Dimensions.get('window');

// const bodyParts = [
//   { name: 'back', image: 'https://hips.hearstapps.com/hmg-prod/images/shot-of-a-man-completing-pull-ups-in-his-gym-royalty-free-image-1699273159.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*' },
//   { name: 'cardio', image: 'https://images.contentstack.io/v3/assets/blt45c082eaf9747747/bltf986a6cd903272e4/5de0baf53d35df03acd48150/Content1_CardiovsStrength.jpg?width=1232&auto=webp&format=progressive&quality=76' },
//   { name: 'chest', image: 'https://cdn.shopify.com/s/files/1/0805/6265/1456/articles/Upper-Chest-Training-_E2_80_93-6-Chest-Exercises-You-Should-Try.jpg' },
//   { name: 'lower arms', image: 'https://mensfitness.co.uk/wp-content/uploads/sites/2/2022/12/omar-CAN30718-1-e1671705397199.jpg' },
//   { name: 'lower legs', image: 'https://mirafit.co.uk/wp/wp-content/uploads/2024/02/Rocking-Standing-Calf-Raise-with-Mirafit-Rubber-Dumbbells-1024x683.jpg' },
//   { name: 'neck', image: 'https://www.dmoose.com/cdn/shop/articles/1_68d5f8c2-0791-4a41-86db-e7f224b142ea.jpg?v=1649931793' },
//   { name: 'shoulders', image: 'https://cdn.prod.website-files.com/63ed08484c069d0492f5b0bc/66ff058d835bc069e3b318a9_6655e153d8fd0cebf365f945_pexels-ivan-samkov-4164773.jpeg' },
//   { name: 'upper arms', image: 'https://gripzilla.co/cdn/shop/articles/from-skinny-to-stacked-5-barbell-arm-workouts-to-transform-your-upper-body-720019.jpg?v=1697243008&width=1000' },
//   { name: 'upper legs', image: 'https://www.muscletech.com/cdn/shop/articles/best-inner-thigh-exercises.jpg?v=1713464853&width=1000' },
//   { name: 'waist', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2023/09/bicycle-crunches-1.jpeg?quality=82&strip=1&w=800' },
// ];

// const WorkoutVideos = ({ navigation }) => {
//   const handlePress = (bodyPart) => {
//     navigation.navigate('WorkoutAnimations', { bodyPart });
//   };

//   const flatListRef = useRef(null);
//   const horizontalImageWidth = screenWidth * 0.9;

//   useEffect(() => {
//     let offset = 0;
//     const interval = setInterval(() => {
//       if (flatListRef.current) {
//         offset += horizontalImageWidth + 10;
//         if (offset >= bodyParts.length * (horizontalImageWidth + 10)) offset = 0;
//         flatListRef.current.scrollToOffset({ offset, animated: true });
//       }
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   const renderHorizontalItem = ({ item }) => (
//     <TouchableOpacity
//       style={[styles.horizontalItem, { width: horizontalImageWidth }]}
//       onPress={() => handlePress(item.name)}
//     >
//       <Image source={{ uri: item.image }} style={[styles.horizontalImage, { width: horizontalImageWidth }]} />
//     </TouchableOpacity>
//   );

//   const renderGridItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.touchableOpacity}
//       onPress={() => handlePress(item.name)}
//     >
//       <Image source={{ uri: item.image }} style={styles.image} />
//       <View style={styles.textContainer}>
//         <Text style={styles.bodyPartText}>{item.name}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   const renderHorizontalSeparator = () => <View style={styles.horizontalSeparator} />;

//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {/* Heading */}
//         <View style={styles.headerContainer}>
//           <Text style={styles.readyText}>Ready to</Text>
//           <Text style={styles.workoutText}>Workout</Text>
//         </View>

//         {/* Horizontal FlatList (Images Only) */}
//         <FlatList
//           ref={flatListRef}
//           data={bodyParts}
//           renderItem={renderHorizontalItem}
//           keyExtractor={(item) => item.name}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           ItemSeparatorComponent={renderHorizontalSeparator}
//           style={styles.horizontalList}
//           snapToInterval={horizontalImageWidth + 10}
//           snapToAlignment="start"
//           decelerationRate="fast"
//         />

//         {/* Exercises Heading */}
//         <Text style={styles.exercisesHeading}>Exercises</Text>

//         {/* 2D Grid FlatList (Images with Names) */}
//         <View style={styles.gridContainer}>
//           <FlatList
//             data={bodyParts}
//             renderItem={renderGridItem}
//             keyExtractor={(item) => item.name}
//             numColumns={2}
//             columnWrapperStyle={styles.gridRow}
//           />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F0F4F8', // Soft blue-gray background
//   },
//   scrollContainer: {
//     padding: 15,
//     paddingBottom: 30,
//   },
//   headerContainer: {
//     marginBottom: 20,
//     alignItems: 'flex-start',
//   },
//   readyText: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#2D3748',
//     textShadowColor: 'rgba(0, 0, 0, 0.1)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   workoutText: {
//     fontSize: 32,
//     fontWeight: '900',
//     color: '#4A90E2',
//     textShadowColor: 'rgba(0, 0, 0, 0.1)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   horizontalList: {
//     marginBottom: 20,
//     height: 200,
//   },
//   horizontalItem: {
//     borderRadius: 15,
//     overflow: 'hidden',
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//   },
//   horizontalImage: {
//     height: 200,
//     borderRadius: 15,
//     resizeMode: 'cover',
//   },
//   horizontalSeparator: {
//     width: 10,
//   },
//   exercisesHeading: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#2D3748',
//     marginBottom: 15,
//     marginTop: 10,
//   },
//   gridContainer: {
//     flex: 1,
//   },
//   gridRow: {
//     justifyContent: 'space-between',
//     marginBottom: 15,
//   },
//   touchableOpacity: {
//     width: '48%',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 15,
//     overflow: 'hidden',
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//   },
//   image: {
//     width: '100%',
//     height: 150,
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//     resizeMode: 'cover',
//   },
//   textContainer: {
//     padding: 10,
//     alignItems: 'center',
//     backgroundColor: '#4A90E2',
//   },
//   bodyPartText: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     textTransform: 'capitalize',
//   },
// });

// export default WorkoutVideos;


// import React, { useRef, useEffect,useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   FlatList,
//   Image,
//   StatusBar,
//   Dimensions,
//   Animated,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// const { width: screenWidth } = Dimensions.get('window');

// const bodyParts = [
//   { name: 'back', image: 'https://hips.hearstapps.com/hmg-prod/images/shot-of-a-man-completing-pull-ups-in-his-gym-royalty-free-image-1699273159.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*' },
//   { name: 'cardio', image: 'https://images.contentstack.io/v3/assets/blt45c082eaf9747747/bltf986a6cd903272e4/5de0baf53d35df03acd48150/Content1_CardiovsStrength.jpg?width=1232&auto=webp&format=progressive&quality=76' },
//   { name: 'chest', image: 'https://cdn.shopify.com/s/files/1/0805/6265/1456/articles/Upper-Chest-Training-_E2_80_93-6-Chest-Exercises-You-Should-Try.jpg' },
//   { name: 'lower arms', image: 'https://mensfitness.co.uk/wp-content/uploads/sites/2/2022/12/omar-CAN30718-1-e1671705397199.jpg' },
//   { name: 'lower legs', image: 'https://mirafit.co.uk/wp/wp-content/uploads/2024/02/Rocking-Standing-Calf-Raise-with-Mirafit-Rubber-Dumbbells-1024x683.jpg' },
//   { name: 'neck', image: 'https://www.dmoose.com/cdn/shop/articles/1_68d5f8c2-0791-4a41-86db-e7f224b142ea.jpg?v=1649931793' },
//   { name: 'shoulders', image: 'https://cdn.prod.website-files.com/63ed08484c069d0492f5b0bc/66ff058d835bc069e3b318a9_6655e153d8fd0cebf365f945_pexels-ivan-samkov-4164773.jpeg' },
//   { name: 'upper arms', image: 'https://gripzilla.co/cdn/shop/articles/from-skinny-to-stacked-5-barbell-arm-workouts-to-transform-your-upper-body-720019.jpg?v=1697243008&width=1000' },
//   { name: 'upper legs', image: 'https://www.muscletech.com/cdn/shop/articles/best-inner-thigh-exercises.jpg?v=1713464853&width=1000' },
//   { name: 'waist', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2023/09/bicycle-crunches-1.jpeg?quality=82&strip=1&w=800' },
// ];

// const WorkoutVideos = ({ navigation }) => {
//   const handlePress = (bodyPart) => {
//     navigation.navigate('WorkoutAnimations', { bodyPart });
//   };

//   const flatListRef = useRef(null);
//   const horizontalImageWidth = screenWidth - 40; // Full width minus padding
//   const fadeAnim = useState(new Animated.Value(0))[0]; // Fade-in animation

//   useEffect(() => {
//     // Auto-scroll for horizontal list
//     let offset = 0;
//     const interval = setInterval(() => {
//       if (flatListRef.current) {
//         offset += horizontalImageWidth + 10;
//         if (offset >= bodyParts.length * (horizontalImageWidth + 10)) offset = 0;
//         flatListRef.current.scrollToOffset({ offset, animated: true });
//       }
//     }, 3000);

//     // Fade-in animation
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 600,
//       useNativeDriver: true,
//     }).start();

//     return () => clearInterval(interval);
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

//   const gridScales = bodyParts.map(() => useState(new Animated.Value(1))[0]);

//   const renderHorizontalItem = ({ item }) => (
//     <TouchableOpacity
//       style={[styles.horizontalItem, { width: horizontalImageWidth }]}
//       onPress={() => handlePress(item.name)}
//     >
//       <Image
//         source={{ uri: item.image }}
//         style={[styles.horizontalImage, { width: horizontalImageWidth }]}
//       />
//       <LinearGradient
//         colors={['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0)']}
//         style={styles.imageOverlay}
//       >
//         <Text style={styles.horizontalText}>{item.name.toUpperCase()}</Text>
//       </LinearGradient>
//     </TouchableOpacity>
//   );

//   const renderGridItem = ({ item, index }) => (
//     <TouchableOpacity
//       style={styles.gridItem}
//       onPressIn={() => handlePressIn(gridScales[index])}
//       onPressOut={() => handlePressOut(gridScales[index])}
//       onPress={() => handlePress(item.name)}
//     >
//       <Animated.View style={{ transform: [{ scale: gridScales[index] }] }}>
//         <Image source={{ uri: item.image }} style={styles.gridImage} />
//         <LinearGradient
//           colors={['#FF6F61', '#FF9F1C']} // Match UserDashboard steps gradient
//           style={styles.gridTextContainer}
//         >
//           <Text style={styles.bodyPartText}>{item.name.toUpperCase()}</Text>
//         </LinearGradient>
//       </Animated.View>
//     </TouchableOpacity>
//   );

//   const renderHorizontalSeparator = () => <View style={styles.horizontalSeparator} />;

//   return (
//     <LinearGradient
//       colors={['#1E2A44', '#2A3B5E']} // Match UserDashboard background
//       style={styles.container}
//     >
//       <Animated.View style={{ opacity: fadeAnim }}>
//         <StatusBar backgroundColor="#1E2A44" barStyle="light-content" />
//         <ScrollView contentContainerStyle={styles.scrollContainer}>
//           {/* Heading */}
//           <View style={styles.headerContainer}>
//             <Text style={styles.readyText}>Ready to</Text>
//             <Text style={styles.workoutText}>Workout</Text>
//           </View>

//           {/* Horizontal FlatList */}
//           <FlatList
//             ref={flatListRef}
//             data={bodyParts}
//             renderItem={renderHorizontalItem}
//             keyExtractor={(item) => item.name}
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             ItemSeparatorComponent={renderHorizontalSeparator}
//             style={styles.horizontalList}
//             snapToInterval={horizontalImageWidth + 10}
//             snapToAlignment="start"
//             decelerationRate="fast"
//             contentContainerStyle={styles.horizontalContent}
//           />

//           {/* Exercises Heading */}
//           <Text style={styles.exercisesHeading}>Exercises</Text>

//           {/* Grid FlatList */}
//           <FlatList
//             data={bodyParts}
//             renderItem={renderGridItem}
//             keyExtractor={(item) => item.name}
//             numColumns={2}
//             columnWrapperStyle={styles.gridRow}
//             contentContainerStyle={styles.gridContent}
//           />
//         </ScrollView>
//       </Animated.View>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollContainer: {
//     paddingVertical: 20,
//     paddingHorizontal: 20,
//   },
//   headerContainer: {
//     marginBottom: 20,
//   },
//   readyText: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     textShadowColor: 'rgba(0, 0, 0, 0.2)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 3,
//   },
//   workoutText: {
//     fontSize: 36,
//     fontWeight: '900',
//     color: '#FF6F61', // Match UserDashboard accent
//     textShadowColor: 'rgba(0, 0, 0, 0.2)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 3,
//   },
//   horizontalList: {
//     marginBottom: 25,
//   },
//   horizontalContent: {
//     paddingHorizontal: 0, // Ensure alignment with padding handled by scrollContainer
//   },
//   horizontalItem: {
//     borderRadius: 15,
//     overflow: 'hidden',
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//   },
//   horizontalImage: {
//     height: 200,
//     borderRadius: 15,
//     resizeMode: 'cover',
//   },
//   imageOverlay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: 'flex-end',
//     padding: 15,
//   },
//   horizontalText: {
//     fontSize: 20,
//     fontWeight: '800',
//     color: '#FFFFFF',
//     textShadowColor: 'rgba(0, 0, 0, 0.3)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 4,
//   },
//   horizontalSeparator: {
//     width: 10,
//   },
//   exercisesHeading: {
//     fontSize: 24,
//     fontWeight: '800',
//     color: '#FFFFFF',
//     marginBottom: 20,
//     textShadowColor: 'rgba(0, 0, 0, 0.2)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 3,
//   },
//   gridContent: {
//     paddingBottom: 20,
//   },
//   gridRow: {
//     justifyContent: 'space-between',
//   },
//   gridItem: {
//     width: (screenWidth - 50) / 2, // Account for padding and gap
//     marginBottom: 15,
//     borderRadius: 15,
//     overflow: 'hidden',
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//   },
//   gridImage: {
//     width: '100%',
//     height: 150,
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//     resizeMode: 'cover',
//   },
//   gridTextContainer: {
//     paddingVertical: 10,
//     alignItems: 'center',
//   },
//   bodyPartText: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#FFFFFF',
//   },
// });

// export default WorkoutVideos;




import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  StatusBar,
  Dimensions,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for the back arrow

const { width: screenWidth } = Dimensions.get('window');

const bodyParts = [
  { name: 'back', image: 'https://hips.hearstapps.com/hmg-prod/images/shot-of-a-man-completing-pull-ups-in-his-gym-royalty-free-image-1699273159.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*' },
  { name: 'cardio', image: 'https://images.contentstack.io/v3/assets/blt45c082eaf9747747/bltf986a6cd903272e4/5de0baf53d35df03acd48150/Content1_CardiovsStrength.jpg?width=1232&auto=webp&format=progressive&quality=76' },
  { name: 'chest', image: 'https://cdn.shopify.com/s/files/1/0805/6265/1456/articles/Upper-Chest-Training-_E2_80_93-6-Chest-Exercises-You-Should-Try.jpg' },
  { name: 'lower arms', image: 'https://mensfitness.co.uk/wp-content/uploads/sites/2/2022/12/omar-CAN30718-1-e1671705397199.jpg' },
  { name: 'lower legs', image: 'https://mirafit.co.uk/wp/wp-content/uploads/2024/02/Rocking-Standing-Calf-Raise-with-Mirafit-Rubber-Dumbbells-1024x683.jpg' },
  { name: 'neck', image: 'https://www.dmoose.com/cdn/shop/articles/1_68d5f8c2-0791-4a41-86db-e7f224b142ea.jpg?v=1649931793' },
  { name: 'shoulders', image: 'https://cdn.prod.website-files.com/63ed08484c069d0492f5b0bc/66ff058d835bc069e3b318a9_6655e153d8fd0cebf365f945_pexels-ivan-samkov-4164773.jpeg' },
  { name: 'upper arms', image: 'https://gripzilla.co/cdn/shop/articles/from-skinny-to-stacked-5-barbell-arm-workouts-to-transform-your-upper-body-720019.jpg?v=1697243008&width=1000' },
  { name: 'upper legs', image: 'https://www.muscletech.com/cdn/shop/articles/best-inner-thigh-exercises.jpg?v=1713464853&width=1000' },
  { name: 'waist', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2023/09/bicycle-crunches-1.jpeg?quality=82&strip=1&w=800' },
];

const WorkoutVideos = ({ navigation }) => {
  const handlePress = (bodyPart) => {
    navigation.navigate('WorkoutAnimations', { bodyPart });
  };

  const flatListRef = useRef(null);
  const horizontalImageWidth = screenWidth - 40; // Full width minus padding
  const fadeAnim = useState(new Animated.Value(0))[0]; // Fade-in animation

  useEffect(() => {
    // Auto-scroll for horizontal list
    let offset = 0;
    const interval = setInterval(() => {
      if (flatListRef.current) {
        offset += horizontalImageWidth + 10;
        if (offset >= bodyParts.length * (horizontalImageWidth + 10)) offset = 0;
        flatListRef.current.scrollToOffset({ offset, animated: true });
      }
    }, 3000);

    // Fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();

    return () => clearInterval(interval);
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

  const gridScales = bodyParts.map(() => useState(new Animated.Value(1))[0]);

  const renderHorizontalItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.horizontalItem, { width: horizontalImageWidth }]}
      onPress={() => handlePress(item.name)}
    >
      <Image
        source={{ uri: item.image }}
        style={[styles.horizontalImage, { width: horizontalImageWidth }]}
      />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0)']}
        style={styles.imageOverlay}
      >
        <Text style={styles.horizontalText}>{item.name.toUpperCase()}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );

  const renderGridItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPressIn={() => handlePressIn(gridScales[index])}
      onPressOut={() => handlePressOut(gridScales[index])}
      onPress={() => handlePress(item.name)}
    >
      <Animated.View style={{ transform: [{ scale: gridScales[index] }] }}>
        <Image source={{ uri: item.image }} style={styles.gridImage} />
        <LinearGradient
          colors={['#FF6F61', '#FF9F1C']} // Match UserDashboard steps gradient
          style={styles.gridTextContainer}
        >
          <Text style={styles.bodyPartText}>{item.name.toUpperCase()}</Text>
        </LinearGradient>
      </Animated.View>
    </TouchableOpacity>
  );

  const renderHorizontalSeparator = () => <View style={styles.horizontalSeparator} />;

  return (
    <LinearGradient
      colors={['#1E2A44', '#2A3B5E']} // Match UserDashboard background
      style={styles.container}
    >
      <Animated.View style={{ opacity: fadeAnim }}>
        <StatusBar backgroundColor="#1E2A44" barStyle="light-content" />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Header with Back Button */}
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={28} color="#FFFFFF" />
            </TouchableOpacity>
            <View>
              <Text style={styles.readyText}>Ready to</Text>
              <Text style={styles.workoutText}>Workout</Text>
            </View>
          </View>

          {/* Horizontal FlatList */}
          <FlatList
            ref={flatListRef}
            data={bodyParts}
            renderItem={renderHorizontalItem}
            keyExtractor={(item) => item.name}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={renderHorizontalSeparator}
            style={styles.horizontalList}
            snapToInterval={horizontalImageWidth + 10}
            snapToAlignment="start"
            decelerationRate="fast"
            contentContainerStyle={styles.horizontalContent}
          />

          {/* Exercises Heading */}
          <Text style={styles.exercisesHeading}>Exercises</Text>

          {/* Grid FlatList */}
          <FlatList
            data={bodyParts}
            renderItem={renderGridItem}
            keyExtractor={(item) => item.name}
            numColumns={2}
            columnWrapperStyle={styles.gridRow}
            contentContainerStyle={styles.gridContent}
          />
        </ScrollView>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 15,
    padding: 10,
  },
  readyText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
//  prioritization:
//   },
  workoutText: {
    fontSize: 36,
    fontWeight: '900',
    color: '#FF6F61', // Match UserDashboard accent
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  horizontalList: {
    marginBottom: 25,
  },
  horizontalContent: {
    paddingHorizontal: 0, // Ensure alignment with padding handled by scrollContainer
  },
  horizontalItem: {
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  horizontalImage: {
    height: 200,
    borderRadius: 15,
    resizeMode: 'cover',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    padding: 15,
  },
  horizontalText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  horizontalSeparator: {
    width: 10,
  },
  exercisesHeading: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  gridContent: {
    paddingBottom: 20,
  },
  gridRow: {
    justifyContent: 'space-between',
  },
  gridItem: {
    width: (screenWidth - 50) / 2, // Account for padding and gap
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  gridImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    resizeMode: 'cover Olsztyn',
  },
  gridTextContainer: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  bodyPartText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

export default WorkoutVideos;
