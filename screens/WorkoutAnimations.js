// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
// import axios from 'axios';
// import { Image } from 'expo-image';

// const WorkoutAnimations = ({ route }) => {
//   const { bodyPart } = route.params;  // Get the body part passed from WorkoutVideos.js
//   const [exercises, setExercises] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchExercises = async () => {
//       const options = {
//         method: 'GET',
//         url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
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
//   }, [bodyPart]);

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
//       <Text style={styles.title}>{bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)} Exercises</Text>
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
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 15,
//   },
// });

// export default WorkoutAnimations;


// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
// import axios from 'axios';
// import { Image } from 'expo-image';
// import { LinearGradient } from 'expo-linear-gradient';

// const WorkoutAnimations = ({ route }) => {
//   const { bodyPart } = route.params;  // Get the body part passed from WorkoutVideos.js
//   const [exercises, setExercises] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchExercises = async () => {
//       const options = {
//         method: 'GET',
//         url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
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
//   }, [bodyPart]);

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
//     <LinearGradient colors={['#1D2671', '#C33764']} style={styles.gradientContainer}>
//     <View style={styles.container}>
//       <Text style={styles.title}>{bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)} Exercises</Text>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <FlatList
//           data={exercises}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={renderExercise}
//           contentContainerStyle={styles.list}
//         />
//       </ScrollView>
//     </View>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   backgroundColor: '#f5f5f5',
//   //   paddingTop: 20,
//   //   paddingHorizontal: 15,
//   // },

//   gradientContainer:{
//     flex:1

//   },
//   loader: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//     color: 'white',
//   },
//   scrollContainer: {
//     paddingBottom: 20,
//     paddingTop: 10,
//   },
//   list: {
//     flexGrow: 1,
//     justifyContent: 'flex-start',
//   },
//   card: {
//     backgroundColor: '#fff',
//     marginVertical: 20,
//     borderRadius: 15,
//     marginHorizontal:15,
//     overflow: 'hidden',
//     elevation: 5,
//     padding: 15,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 10,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 15,
//     resizeMode: 'contain',
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 5,
//   },
//   bodyPart: {
//     fontSize: 16,
//     color: '#777',
//   },
// });

// export default WorkoutAnimations;

// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
// import axios from 'axios';
// import { Image } from 'expo-image';
// import { LinearGradient } from 'expo-linear-gradient';

// const WorkoutAnimations = ({ route }) => {
//   const { bodyPart } = route.params;
//   const [exercises, setExercises] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchExercises = async () => {
//       const options = {
//         method: 'GET',
//         url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
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
//   }, [bodyPart]);

//   if (loading) {
//     return (
//       // <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
//         <View style={styles.loader}>
//           <ActivityIndicator size="large" color="#FF5E9B" />
//         </View>
//       // </LinearGradient>
//     );
//   }

//   const renderExercise = ({ item }) => (
//     <View style={styles.card}>
//       <Image source={{ uri: item.gifUrl }} style={styles.image} contentFit="cover" />
//       <View style={styles.cardContent}>
//         <Text style={styles.name}>{item.name}</Text>
//         <Text style={styles.bodyPart}>Target: {item.target}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
//       <View style={styles.header}>
//         <Text style={styles.title}>
//           {bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)} Exercises
//         </Text>
//       </View>
//       <FlatList
//         data={exercises}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderExercise}
//         contentContainerStyle={styles.list}
//         showsVerticalScrollIndicator={false}
//       />
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   gradientContainer: {
//     flex: 1,
//   },
//   header: {
//     paddingTop: 50,
//     paddingBottom: 20,
//     paddingHorizontal: 20,
//     // backgroundColor: 'rgba(0, 0, 0, 0.3)',
    
//   },
//   loader: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     textAlign: 'center',
//     textShadowColor: 'rgba(0, 0, 0, 0.5)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 4,
//   },
//   list: {
//     paddingHorizontal: 20,
//     paddingBottom: 20,
//     paddingTop: 10,
//   },
//   card: {
//     backgroundColor: '#FF5E9B', // Changed to pink
//     borderRadius: 15,
//     marginVertical: 10,
//     overflow: 'hidden',
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 4 },
//   },
//   image: {
//     width: '100%',
//     height: 300, // Increased from 220 to 300 for larger animation visibility
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//   },
//   cardContent: {
//     padding: 15,
//   },
//   name: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#FFFFFF', // Changed to white for contrast against pink
//     marginBottom: 5,
//     textTransform: 'capitalize',
//   },
//   bodyPart: {
//     fontSize: 16,
//     color: '#F0F0F0', // Light gray for contrast against pink
//     fontWeight: '400',
//   },
// });

// export default WorkoutAnimations;




// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
// import axios from 'axios';
// import { Image } from 'expo-image';

// const WorkoutAnimations = ({ route, navigation }) => {
//   const { bodyPart } = route.params;
//   const [exercises, setExercises] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchExercises = async () => {
//       const options = {
//         method: 'GET',
//         url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
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
//   }, [bodyPart]);

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <View style={styles.loader}>
//           <ActivityIndicator size="large" color="#FF5E9B" />
//         </View>
//       </View>
//     );
//   }

//   const renderExercise = ({ item }) => (
//     <TouchableOpacity
//       style={styles.card}
//       onPress={() =>
//         navigation.navigate('WorkoutDetail', {
//           gifUrl: item.gifUrl,
//           name: item.name,
//           target: item.target,
//           description: item.instructions ? item.instructions.join(' ') : 'No instructions available.',
//         })
//       }
//     >
//       <Image source={{ uri: item.gifUrl }} style={styles.image} contentFit="cover" />
//       <View style={styles.cardContent}>
//         <Text style={styles.name}>{item.name}</Text>
//         <Text style={styles.bodyPart}>Target: {item.target}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>
//           {bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)} Exercises
//         </Text>
//       </View>
//       <FlatList
//         data={exercises}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderExercise}
//         contentContainerStyle={styles.list}
//         showsVerticalScrollIndicator={false}
//         numColumns={2} // 2 columns for grid layout
//         columnWrapperStyle={styles.gridRow}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     paddingTop: 50,
//     paddingBottom: 20,
//     paddingHorizontal: 20,
//     alignItems: 'center',
//   },
//   loader: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#333333',
//     textAlign: 'center',
//     textShadowColor: 'rgba(0, 0, 0, 0.1)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   list: {
//     paddingHorizontal: 20,
//     paddingBottom: 20,
//     paddingTop: 10,
//   },
//   gridRow: {
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   card: {
//     width: '48%',
//     borderRadius: 15,
//     marginVertical: 10,
//     overflow: 'hidden',
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 4 },
//   },
//   image: {
//     width: '90%',
//     height: 150,
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//     alignSelf: 'center',
//   },
//   cardContent: {
//     padding: 15,
//     backgroundColor: '#FFFFFF',
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333333',
//     marginBottom: 5,
//     textTransform: 'capitalize',
//   },
//   bodyPart: {
//     fontSize: 14,
//     color: '#666666',
//     fontWeight: '400',
//   },
// });

// export default WorkoutAnimations;




// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
// import axios from 'axios';
// import { Image } from 'expo-image';

// const WorkoutAnimations = ({ route, navigation }) => {
//   const { bodyPart } = route.params;
//   const [exercises, setExercises] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchExercises = async () => {
//       const options = {
//         method: 'GET',
//         url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
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
//   }, [bodyPart]);

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <View style={styles.loader}>
//           <ActivityIndicator size="large" color="#FF5E9B" />
//         </View>
//       </View>
//     );
//   }

//   const renderExercise = ({ item }) => (
//     <TouchableOpacity
//       style={styles.card}
//       onPress={() =>
//         navigation.navigate('WorkoutDetail', {
//           gifUrl: item.gifUrl,
//           name: item.name,
//           target: item.target,
//           description: item.instructions ? item.instructions.join(' ') : 'No instructions available.',
//         })
//       }
//     >
//       <Image source={{ uri: item.gifUrl }} style={styles.image} contentFit="cover" />
//       <View style={styles.cardContent}>
//         <Text style={styles.name}>{item.name}</Text>
//         <Text style={styles.bodyPart}>Target: {item.target}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>
//           {bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)} Exercises
//         </Text>
//       </View>
//       <FlatList
//         data={exercises}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderExercise}
//         contentContainerStyle={styles.list}
//         showsVerticalScrollIndicator={false}
//         numColumns={2} // 2 columns for grid layout
//         columnWrapperStyle={styles.gridRow}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     paddingTop: 50,
//     paddingBottom: 20,
//     paddingHorizontal: 20,
//     alignItems: 'center',
//   },
//   loader: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#A84CF2', // Updated to purple
//     textAlign: 'center',
//     textShadowColor: 'rgba(0, 0, 0, 0.1)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   list: {
//     paddingHorizontal: 20,
//     paddingBottom: 20,
//     paddingTop: 10,
//   },
//   gridRow: {
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   card: {
//     width: '47%', // Slightly reduced for better spacing
//     borderRadius: 15,
//     marginVertical: 10,
//     overflow: 'hidden',
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 4 },
//   },
//   image: {
//     width: '90%',
//     height: 200, // Increased for better visibility
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//     alignSelf: 'center',
//   },
//   cardContent: {
//     padding: 12, // Slightly reduced padding for balance
//     // backgroundColor: '#F9F9F9', // Light gray background for contrast
//     backgroundColor: '#F9F9F9', 
//     alignItems: 'center',
    
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: '600',
//     // color: '#A84CF2', // Updated to purple
//     marginBottom: 5,
//     textTransform: 'capitalize',
//     textAlign: 'center',
//   },
//   bodyPart: {
//     fontSize: 14,
//     color: '#666666',
//     fontWeight: '400',
//     textAlign: 'center',
//   },
// });

// export default WorkoutAnimations;




// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
// import axios from 'axios';
// import { Image } from 'expo-image';

// const WorkoutAnimations = ({ route, navigation }) => {
//   const { bodyPart } = route.params;
//   const [exercises, setExercises] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchExercises = async () => {
//       const options = {
//         method: 'GET',
//         url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
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
//   }, [bodyPart]);

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <View style={styles.loader}>
//           <ActivityIndicator size="large" color="#FF5E9B" />
//         </View>
//       </View>
//     );
//   }

//   const renderExercise = ({ item }) => (
//     <TouchableOpacity
//       style={styles.card}
//       onPress={() =>
//         navigation.navigate('WorkoutDetail', {
//           gifUrl: item.gifUrl,
//           name: item.name,
//           target: item.target,
//           description: item.instructions ? item.instructions.join(' ') : 'No instructions available.',
//         })
//       }
//     >
//       <Image source={{ uri: item.gifUrl }} style={styles.image} contentFit="cover" />
//       <View style={styles.cardContent}>
//         <Text style={styles.name}>{item.name}</Text>
//         <Text style={styles.bodyPart}>Target: {item.target}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>
//           {bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)} Exercises
//         </Text>
//       </View>
//       <FlatList
//         data={exercises}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderExercise}
//         contentContainerStyle={styles.list}
//         showsVerticalScrollIndicator={false}
//         numColumns={2} // 2 columns for grid layout
//         columnWrapperStyle={styles.gridRow}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     paddingTop: 50,
//     paddingBottom: 20,
//     paddingHorizontal: 20,
//     alignItems: 'center',
//   },
//   loader: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '600', // Adjusted to match WorkoutVideos weight
//     color: '#A84CF2',
//     textAlign: 'center',
//     textShadowColor: 'rgba(0, 0, 0, 0.1)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   list: {
//     paddingHorizontal: 20,
//     paddingBottom: 20,
//     paddingTop: 10,
//   },
//   gridRow: {
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   card: {
//     width: '48%', // Matches WorkoutVideos touchableOpacity width
//     borderRadius: 10, // Matches WorkoutVideos borderRadius
//     marginVertical: 10,
//     overflow: 'hidden',
//     elevation: 5, // Matches WorkoutVideos elevation
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 8, // Matches WorkoutVideos shadowRadius
//     shadowOffset: { width: 0, height: 2 }, // Matches WorkoutVideos shadowOffset
//   },
//   image: {
//     width: '90%', // Matches WorkoutVideos image width
//     height: 150, // Matches WorkoutVideos image height
//     borderTopLeftRadius: 10, // Matches WorkoutVideos
//     borderTopRightRadius: 10, // Matches WorkoutVideos
//     alignSelf: 'center', // Matches WorkoutVideos
//   },
//   cardContent: {
//     padding: 10, // Matches WorkoutVideos textContainer padding
//     backgroundColor: '#A84CF2', // Matches WorkoutVideos textContainer background
//     alignItems: 'center',
//   },
//   name: {
//     fontSize: 18, // Matches WorkoutVideos bodyPartText
//     fontWeight: '600', // Matches WorkoutVideos bodyPartText
//     color: 'white', // Matches WorkoutVideos bodyPartText
//     marginBottom: 5,
//     textTransform: 'capitalize',
//     textAlign: 'center',
//   },
//   bodyPart: {
//     fontSize: 14, // Slightly reduced for balance
//     color: 'white', // Matches WorkoutVideos bodyPartText contrast
//     fontWeight: '400',
//     textAlign: 'center',
//   },
// });

// export default WorkoutAnimations;


// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
// import axios from 'axios';
// import { Image } from 'expo-image';

// const WorkoutAnimations = ({ route, navigation }) => {
//   const { bodyPart } = route.params;
//   const [exercises, setExercises] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchExercises = async () => {
//       const options = {
//         method: 'GET',
//         url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
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
//   }, [bodyPart]);

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <View style={styles.loader}>
//           <ActivityIndicator size="large" color="#FF5E9B" />
//         </View>
//       </View>
//     );
//   }

//   const renderExercise = ({ item }) => (
//     <TouchableOpacity
//       style={styles.card}
//       onPress={() =>
//         navigation.navigate('WorkoutDetail', {
//           gifUrl: item.gifUrl,
//           name: item.name,
//           target: item.target,
//           description: item.instructions ? item.instructions.join(' ') : 'No instructions available.',
//         })
//       }
//     >
//       <View style={styles.imageContainer}>
//         <Image source={{ uri: item.gifUrl }} style={styles.image} contentFit="cover" />
//       </View>
//       <View style={styles.cardContent}>
//         <Text style={styles.name}>{item.name}</Text>
//         <Text style={styles.bodyPart}>Target: {item.target}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>
//           {bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)} Exercises
//         </Text>
//       </View>
//       <FlatList
//         data={exercises}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderExercise}
//         contentContainerStyle={styles.list}
//         showsVerticalScrollIndicator={false}
//         numColumns={2} // 2 columns for grid layout
//         columnWrapperStyle={styles.gridRow}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     paddingTop: 50,
//     paddingBottom: 20,
//     paddingHorizontal: 20,
//     alignItems: 'center',
//   },
//   loader: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '600',
//     color: '#A84CF2',
//     textAlign: 'center',
//     textShadowColor: 'rgba(0, 0, 0, 0.1)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   list: {
//     paddingHorizontal: 20,
//     paddingBottom: 20,
//     paddingTop: 10,
//   },
//   gridRow: {
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   card: {
//     width: '48%',
//     borderRadius: 10,
//     marginVertical: 10,
//     overflow: 'hidden',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   imageContainer: {
//     width: '90%',
//     height: 150, // Fixed height to contain the image
//     alignSelf: 'center',
//     overflow: 'hidden', // Ensure image doesn't spill out
//   },
//   image: {
//     width: '100%',
//     height: '100%', // Fill the container
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//   },
//   cardContent: {
//     padding: 10,
//     backgroundColor: '#A84CF2',
//     alignItems: 'center',
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: 'white',
//     marginBottom: 5,
//     textTransform: 'capitalize',
//     textAlign: 'center',
//   },
//   bodyPart: {
//     fontSize: 14,
//     color: 'white',
//     fontWeight: '400',
//     textAlign: 'center',
//   },
// });

// export default WorkoutAnimations;


// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
// import axios from 'axios';
// import { Image } from 'expo-image';

// const WorkoutAnimations = ({ route, navigation }) => {
//   const { bodyPart } = route.params;
//   const [exercises, setExercises] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchExercises = async () => {
//       const options = {
//         method: 'GET',
//         url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
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
//   }, [bodyPart]);

//   if (loading) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color="#FF5E9B" />
//       </View>
//     );
//   }

//   const renderExercise = ({ item }) => (
//     <TouchableOpacity
//       style={styles.card}
//       onPress={() =>
//         navigation.navigate('WorkoutDetail', {
//           gifUrl: item.gifUrl,
//           name: item.name,
//           target: item.target,
//           description: item.instructions ? item.instructions.join(' ') : 'No instructions available.',
//         })
//       }
//     >
//       <Image source={{ uri: item.gifUrl }} style={styles.image} contentFit="cover" />
//       <View style={styles.cardContent}>
//         <Text style={styles.name}>{item.name}</Text>
//         <Text style={styles.target}>Target: {item.target}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)} Exercises</Text>
//       <FlatList
//         data={exercises}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderExercise}
//         contentContainerStyle={styles.list}
//         numColumns={2}
//         columnWrapperStyle={styles.row}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#1C1C1E',
//     padding: 20,
//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // backgroundColor: '#1C1C1E',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     // color: '#FF5E9B',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   list: {
//     paddingBottom: 20,
//   },
//   row: {
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   card: {
//     width: '48%',
//     borderRadius: 15,
//     // backgroundColor: '#292929',
//     // backgroundColor:"#FF5E9B",
//     backgroundColor:'#A84CF2',
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOpacity: 0.5,
//     shadowRadius: 10,
//     elevation: 6,
//   },
//   image: {
//     width: '100%',
//     height: 150,
//   },
//   cardContent: {
//     padding: 10,
//     alignItems: 'center',
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#FFF',
//     textAlign: 'center',
//     marginBottom: 5,
//   },
//   target: {
//     fontSize: 14,

//     // color: '#FF5E9B',
//     fontWeight: '500',
//   },
// });

// export default WorkoutAnimations;







import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Image } from 'expo-image';

const WorkoutAnimations = ({ route, navigation }) => {
  const { bodyPart } = route.params;
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercises = async () => {
      const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
        params: { limit: '10', offset: '0' },
        headers: {
          'x-rapidapi-key': '85641ae2f0msh592c9334af123a6p1d9a5ejsn7ddc287f0b4e',
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setExercises(response.data);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, [bodyPart]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#4A90E2" />
      </View>
    );
  }

  const renderExercise = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('WorkoutDetail', {
          gifUrl: item.gifUrl,
          name: item.name,
          target: item.target,
          description: item.instructions ? item.instructions.join(' ') : 'No instructions available.',
        })
      }
    >
      <Image source={{ uri: item.gifUrl }} style={styles.image} contentFit="cover" />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.target}>Target: {item.target}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)} Exercises</Text>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderExercise}
        contentContainerStyle={styles.list}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8', // Soft blue-gray background
    padding: 15,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F4F8',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2D3748',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  list: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardContent: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    textAlign: 'center',
    marginBottom: 5,
  },
  target: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '500',
  },
});

export default WorkoutAnimations;






