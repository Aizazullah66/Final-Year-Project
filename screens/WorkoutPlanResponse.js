// import React from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function WorkoutPlanResponse({ route, navigation }) {
//   const { workoutData, goal, fitnessLevel, sessionDuration } = route.params;

//   const renderExerciseItem = ({ item }) => (
//     <View style={styles.exerciseCard}>
//       <Text style={styles.exerciseName}>{item.name}</Text>
//       <Text style={styles.exerciseDetails}>
//         <Text style={styles.highlight}>Sets: </Text>
//         <Text>{item.sets}</Text>
//         <Text> | </Text>
//         <Text style={styles.highlight}>Reps: </Text>
//         <Text>{item.reps || 'N/A'}</Text>
//         <Text> | </Text>
//         <Text style={styles.highlight}>Duration: </Text>
//         <Text>{item.duration || 0} min</Text>
//       </Text>
//       <Text style={styles.exerciseEquipment}>
//         <Text style={styles.highlight}>Equipment: </Text>
//         <Text>{item.equipment || 'Not specified'}</Text>
//       </Text>
//     </View>
//   );

//   const renderDayItem = ({ item }) => (
//     <View style={styles.dayCard}>
//       <LinearGradient
//         colors={['#FF5E9B', '#FF8EBF']}
//         style={styles.dayHeader}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 0 }}
//       >
//         <Text style={styles.dayTitle}>{item.day}</Text>
//       </LinearGradient>
//       <FlatList
//         data={item.exercises}
//         renderItem={renderExerciseItem}
//         keyExtractor={(exercise, index) => `exercise-${exercise.name}-${index}`}
//         scrollEnabled={false}
//       />
//     </View>
//   );

//   return (
//     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         {/* Header */}
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Ionicons name="arrow-back" size={30} color="#FF5E9B" />
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Workout Plan</Text>
//         </View>

//         {/* Plan Overview Card */}
//         <View style={styles.overviewCard}>
//           <LinearGradient
//             colors={['#FF5E9B', '#FF8EBF']}
//             style={styles.overviewHeader}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 0 }}
//           >
//             <Text style={styles.planTitle}>Your Custom Plan</Text>
//           </LinearGradient>
//           <View style={styles.overviewContent}>
//             <Text style={styles.planInfo}>
//               <Text style={styles.highlight}>Goal: </Text>
//               <Text>{goal}</Text>
//             </Text>
//             <Text style={styles.planInfo}>
//               <Text style={styles.highlight}>Level: </Text>
//               <Text>{fitnessLevel}</Text>
//             </Text>
//             <Text style={styles.planInfo}>
//               <Text style={styles.highlight}>Session Duration: </Text>
//               <Text>{sessionDuration} min</Text>
//             </Text>
//             <Text style={styles.planDescription}>
//               This plan is tailored to your preferences and health conditions. Follow the schedule for optimal results.
//             </Text>
//           </View>
//         </View>

//         {/* Workout Schedule */}
//         <Text style={styles.sectionTitle}>Workout Schedule</Text>
//         <FlatList
//           data={workoutData}
//           renderItem={renderDayItem}
//           keyExtractor={(item) => `day-${item.day}`}
//           scrollEnabled={false}
//           contentContainerStyle={styles.scheduleList}
//         />
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
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingTop: 40,
//     paddingHorizontal: 20,
//     paddingBottom: 15,
//   },
//   backButton: {
//     marginRight: 15,
//   },
//   headerTitle: {
//     fontSize: 26,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     textTransform: 'uppercase',
//   },
//   overviewCard: {
//     width: '90%',
//     alignSelf: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     marginBottom: 20,
//     overflow: 'hidden',
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   overviewHeader: {
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     borderTopLeftRadius: 12,
//     borderTopRightRadius: 12,
//   },
//   planTitle: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     textAlign: 'center',
//   },
//   overviewContent: {
//     padding: 20,
//   },
//   planInfo: {
//     fontSize: 16,
//     color: '#D1D1D1',
//     marginBottom: 8,
//   },
//   highlight: {
//     fontWeight: '600',
//     color: '#FF8EBF',
//   },
//   planDescription: {
//     fontSize: 14,
//     color: '#D1D1D1',
//     marginTop: 10,
//     marginBottom: 15,
//     textAlign: 'justify',
//     lineHeight: 20,
//   },
//   sectionTitle: {
//     fontSize: 22,
//     fontWeight: '600',
//     color: '#FF5E9B',
//     marginLeft: 20,
//     marginBottom: 15,
//     textTransform: 'uppercase',
//   },
//   scheduleList: {
//     paddingHorizontal: 20,
//   },
//   dayCard: {
//     width: '100%',
//     backgroundColor: 'rgba(255, 255, 255, 0.05)',
//     borderRadius: 12,
//     marginBottom: 15,
//     overflow: 'hidden',
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     shadowOffset: { width: 0, height: 1 },
//   },
//   dayHeader: {
//     paddingVertical: 12,
//     paddingHorizontal: 15,
//   },
//   dayTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     textAlign: 'center',
//   },
//   exerciseCard: {
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   exerciseName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     marginBottom: 5,
//   },
//   exerciseDetails: {
//     fontSize: 14,
//     color: '#D1D1D1',
//     marginBottom: 3,
//   },
//   exerciseEquipment: {
//     fontSize: 14,
//     color: '#A0A0A0',
//   },
// });




// import React from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function WorkoutPlanResponse({ route, navigation }) {
//   const { workoutData, goal, fitnessLevel, sessionDuration } = route.params;

//   const renderExerciseItem = ({ item }) => (
//     <View style={styles.exerciseCard}>
//       <Text style={styles.exerciseName}>{item.name}</Text>
//       <Text style={styles.exerciseDetails}>
//         <Text style={styles.highlight}>Sets: </Text>
//         <Text>{item.sets}</Text>
//         <Text> | </Text>
//         <Text style={styles.highlight}>Reps: </Text>
//         <Text>{item.reps || 'N/A'}</Text>
//         <Text> | </Text>
//         <Text style={styles.highlight}>Duration: </Text>
//         <Text>{item.duration || 0} min</Text>
//       </Text>
//       <Text style={styles.exerciseEquipment}>
//         <Text style={styles.highlight}>Equipment: </Text>
//         <Text>{item.equipment || 'Not specified'}</Text>
//       </Text>
//     </View>
//   );

//   const renderDayItem = ({ item }) => (
//     <View style={styles.dayCard}>
//       <View style={styles.dayHeader}>
//         <Text style={styles.dayTitle}>{item.day}</Text>
//       </View>
//       <FlatList
//         data={item.exercises}
//         renderItem={renderExerciseItem}
//         keyExtractor={(exercise, index) => `exercise-${exercise.name}-${index}`}
//         scrollEnabled={false}
//       />
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         {/* Header */}
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Ionicons name="arrow-back" size={30} color="#4A90E2" />
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Workout Plan</Text>
//         </View>

//         {/* Plan Overview Card */}
//         <View style={styles.overviewCard}>
//           <View style={styles.overviewHeader}>
//             <Text style={styles.planTitle}>Your Custom Plan</Text>
//           </View>
//           <View style={styles.overviewContent}>
//             <Text style={styles.planInfo}>
//               <Text style={styles.highlight}>Goal: </Text>
//               <Text>{goal}</Text>
//             </Text>
//             <Text style={styles.planInfo}>
//               <Text style={styles.highlight}>Level: </Text>
//               <Text>{fitnessLevel}</Text>
//             </Text>
//             <Text style={styles.planInfo}>
//               <Text style={styles.highlight}>Session Duration: </Text>
//               <Text>{sessionDuration} min</Text>
//             </Text>
//             <Text style={styles.planDescription}>
//               This plan is tailored to your preferences and health conditions. Follow the schedule for optimal results.
//             </Text>
//           </View>
//         </View>

//         {/* Workout Schedule */}
//         <Text style={styles.sectionTitle}>Workout Schedule</Text>
//         <FlatList
//           data={workoutData}
//           renderItem={renderDayItem}
//           keyExtractor={(item) => `day-${item.day}`}
//           scrollEnabled={false}
//           contentContainerStyle={styles.scheduleList}
//         />
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
//     paddingTop: 10,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 15,
//     paddingVertical: 20,
//     backgroundColor: '#FFFFFF',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 4 },
//   },
//   backButton: {
//     marginRight: 15,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#2D3748',
//     textShadowColor: 'rgba(0, 0, 0, 0.1)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   overviewCard: {
//     width: '90%',
//     alignSelf: 'center',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 15,
//     marginBottom: 20,
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//   },
//   overviewHeader: {
//     backgroundColor: '#4A90E2',
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//   },
//   planTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     textAlign: 'center',
//   },
//   overviewContent: {
//     padding: 20,
//   },
//   planInfo: {
//     fontSize: 16,
//     color: '#4A90E2',
//     marginBottom: 8,
//   },
//   highlight: {
//     fontWeight: '600',
//     color: '#2D3748',
//   },
//   planDescription: {
//     fontSize: 14,
//     color: '#718096',
//     marginTop: 10,
//     marginBottom: 15,
//     textAlign: 'justify',
//     lineHeight: 20,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#4A90E2',
//     marginLeft: 20,
//     marginBottom: 15,
//   },
//   scheduleList: {
//     paddingHorizontal: 20,
//   },
//   dayCard: {
//     width: '100%',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 15,
//     marginBottom: 15,
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 4 },
//   },
//   dayHeader: {
//     backgroundColor: '#4A90E2',
//     paddingVertical: 12,
//     paddingHorizontal: 15,
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//   },
//   dayTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     textAlign: 'center',
//   },
//   exerciseCard: {
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#E2E8F0',
//   },
//   exerciseName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#2D3748',
//     marginBottom: 5,
//   },
//   exerciseDetails: {
//     fontSize: 14,
//     color: '#718096',
//     marginBottom: 3,
//   },
//   exerciseEquipment: {
//     fontSize: 14,
//     color: '#718096',
//   },
// });


// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Animated,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// export default function WorkoutPlanResponse({ route, navigation }) {
//   const { workoutData, goal, fitnessLevel, sessionDuration } = route.params || {};
//   const fadeAnim = useState(new Animated.Value(0))[0]; // Fade-in animation

//   useEffect(() => {
//     // Fade-in animation
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 600,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   const renderExerciseItem = ({ item }) => (
//     <View style={styles.exerciseCard}>
//       <Text style={styles.exerciseName}>{item.name}</Text>
//       <Text style={styles.exerciseDetails}>
//         <Text style={styles.highlight}>Sets: </Text>
//         <Text>{item.sets}</Text>
//         <Text> | </Text>
//         <Text style={styles.highlight}>Reps: </Text>
//         <Text>{item.reps || 'N/A'}</Text>
//         <Text> | </Text>
//         <Text style={styles.highlight}>Duration: </Text>
//         <Text>{item.duration || 0} min</Text>
//       </Text>
//       <Text style={styles.exerciseEquipment}>
//         <Text style={styles.highlight}>Equipment: </Text>
//         <Text>{item.equipment || 'Not specified'}</Text>
//       </Text>
//     </View>
//   );

//   const renderDayItem = ({ item }) => (
//     <LinearGradient
//       colors={['#FFFFFF', '#F5F7FA']} // Match UserDashboard card gradient
//       style={styles.dayCard}
//     >
//       <LinearGradient
//         colors={['#FF6F61', '#FF9F1C']} // Match UserDashboard steps accent
//         style={styles.dayHeader}
//       >
//         <Text style={styles.dayTitle}>{item.day}</Text>
//       </LinearGradient>
//       <FlatList
//         data={item.exercises}
//         renderItem={renderExerciseItem}
//         keyExtractor={(exercise, index) => `exercise-${exercise.name}-${index}`}
//         scrollEnabled={false}
//       />
//     </LinearGradient>
//   );

//   if (!workoutData || !Array.isArray(workoutData)) {
//     return (
//       <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
//         <Text style={styles.errorText}>No workout plan available.</Text>
//       </LinearGradient>
//     );
//   }

//   return (
//     <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
//       <Animated.View style={{ opacity: fadeAnim }}>
//         <ScrollView contentContainerStyle={styles.scrollContent}>
//           {/* Header */}
//           <LinearGradient
//             colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)']}
//             style={styles.header}
//           >
//             <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//               <Ionicons name="arrow-back" size={30} color="#FFFFFF" />
//             </TouchableOpacity>
//             <Text style={styles.headerTitle}>Workout Plan</Text>
//           </LinearGradient>

//           {/* Plan Overview Card */}
//           <LinearGradient
//             colors={['#FFFFFF', '#F5F7FA']} // Match UserDashboard card gradient
//             style={styles.overviewCard}
//           >
//             <LinearGradient
//               colors={['#34C759', '#28A745']} // Match UserDashboard calories accent
//               style={styles.overviewHeader}
//             >
//               <Text style={styles.planTitle}>Your Custom Plan</Text>
//             </LinearGradient>
//             <View style={styles.overviewContent}>
//               <Text style={styles.planInfo}>
//                 <Text style={styles.highlight}>Goal: </Text>
//                 <Text>{goal || 'N/A'}</Text>
//               </Text>
//               <Text style={styles.planInfo}>
//                 <Text style={styles.highlight}>Level: </Text>
//                 <Text>{fitnessLevel || 'N/A'}</Text>
//               </Text>
//               <Text style={styles.planInfo}>
//                 <Text style={styles.highlight}>Session Duration: </Text>
//                 <Text>{sessionDuration || 0} min</Text>
//               </Text>
//               <Text style={styles.planDescription}>
//                 This plan is tailored to your preferences and health conditions. Follow the schedule for optimal results.
//               </Text>
//             </View>
//           </LinearGradient>

//           {/* Workout Schedule */}
//           <Text style={styles.sectionTitle}>Workout Schedule</Text>
//           <FlatList
//             data={workoutData}
//             renderItem={renderDayItem}
//             keyExtractor={(item) => `day-${item.day}`}
//             scrollEnabled={false}
//             contentContainerStyle={styles.scheduleList}
//           />
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
//     paddingTop: 10,
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
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: '800',
//     color: '#FFFFFF',
//     textShadowColor: 'rgba(0, 0, 0, 0.2)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 3,
//   },
//   overviewCard: {
//     width: '90%',
//     alignSelf: 'center',
//     borderRadius: 15,
//     marginBottom: 20,
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//   },
//   overviewHeader: {
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//   },
//   planTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     textAlign: 'center',
//   },
//   overviewContent: {
//     padding: 20,
//   },
//   planInfo: {
//     fontSize: 16,
//     color: '#FF6F61', // Match UserDashboard steps accent
//     marginBottom: 8,
//   },
//   highlight: {
//     fontWeight: '700',
//     color: '#1F2937',
//   },
//   planDescription: {
//     fontSize: 14,
//     color: '#4A5568',
//     marginTop: 10,
//     marginBottom: 15,
//     textAlign: 'justify',
//     lineHeight: 20,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     marginLeft: 20,
//     marginBottom: 15,
//     textShadowColor: 'rgba(0, 0, 0, 0.2)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   scheduleList: {
//     paddingHorizontal: 20,
//   },
//   dayCard: {
//     width: '100%',
//     borderRadius: 15,
//     marginBottom: 15,
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 4 },
//   },
//   dayHeader: {
//     paddingVertical: 12,
//     paddingHorizontal: 15,
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//   },
//   dayTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     textAlign: 'center',
//   },
//   exerciseCard: {
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#E2E8F0',
//   },
//   exerciseName: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#1F2937',
//     marginBottom: 5,
//   },
//   exerciseDetails: {
//     fontSize: 14,
//     color: '#718096',
//     marginBottom: 3,
//   },
//   exerciseEquipment: {
//     fontSize: 14,
//     color: '#718096',
//   },
//   errorText: {
//     fontSize: 18,
//     color: '#FFFFFF',
//     textAlign: 'center',
//     marginTop: 50,
//     fontWeight: '500',
//   },
// });




// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Animated,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function WorkoutPlanResponse({ route, navigation }) {
//   const { workoutData, goal, fitnessLevel, sessionDuration } = route.params || {};
//   const fadeAnim = useState(new Animated.Value(0))[0];

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 600,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   const saveWorkoutPlan = async () => {
//     try {
//       const workoutPlan = {
//         workoutData,
//         goal,
//         fitnessLevel,
//         sessionDuration,
//       };
//       await AsyncStorage.setItem('workoutPlan', JSON.stringify(workoutPlan));
//       alert('Workout plan saved successfully!');
//     } catch (error) {
//       console.error('Error saving workout plan:', error);
//       alert('Failed to save workout plan.');
//     }
//   };

//   const renderExerciseItem = ({ item }) => (
//     <View style={styles.exerciseCard}>
//       <Text style={styles.exerciseName}>{item.name}</Text>
//       <Text style={styles.exerciseDetails}>
//         <Text style={styles.highlight}>Sets: </Text>
//         <Text>{item.sets}</Text>
//         <Text> | </Text>
//         <Text style={styles.highlight}>Reps: </Text>
//         <Text>{item.reps || 'N/A'}</Text>
//         <Text> | </Text>
//         <Text style={styles.highlight}>Duration: </Text>
//         <Text>{item.duration || 0} min</Text>
//       </Text>
//       <Text style={styles.exerciseEquipment}>
//         <Text style={styles.highlight}>Equipment: </Text>
//         <Text>{item.equipment || 'Not specified'}</Text>
//       </Text>
//     </View>
//   );

//   const renderDayItem = ({ item }) => (
//     <LinearGradient
//       colors={['#FFFFFF', '#F5F7FA']}
//       style={styles.dayCard}
//     >
//       <LinearGradient
//         colors={['#FF6F61', '#FF9F1C']}
//         style={styles.dayHeader}
//       >
//         <Text style={styles.dayTitle}>{item.day}</Text>
//       </LinearGradient>
//       <FlatList
//         data={item.exercises}
//         renderItem={renderExerciseItem}
//         keyExtractor={(exercise, index) => `exercise-${exercise.name}-${index}`}
//         scrollEnabled={false}
//       />
//     </LinearGradient>
//   );

//   if (!workoutData || !Array.isArray(workoutData)) {
//     return (
//       <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
//         <Text style={styles.errorText}>No workout plan available.</Text>
//       </LinearGradient>
//     );
//   }

//   return (
//     <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
//       <Animated.View style={{ opacity: fadeAnim }}>
//         <ScrollView contentContainerStyle={styles.scrollContent}>
//           <LinearGradient
//             colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)']}
//             style={styles.header}
//           >
//             <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//               <Ionicons name="arrow-back" size={30} color="#FFFFFF" />
//             </TouchableOpacity>
//             <Text style={styles.headerTitle}>Workout Plan</Text>
//             <TouchableOpacity onPress={saveWorkoutPlan} style={styles.saveButton}>
//               <Ionicons name="save-outline" size={30} color="#FFFFFF" />
//             </TouchableOpacity>
//           </LinearGradient>

//           <LinearGradient
//             colors={['#FFFFFF', '#F5F7FA']}
//             style={styles.overviewCard}
//           >
//             <LinearGradient
//               colors={['#34C759', '#28A745']}
//               style={styles.overviewHeader}
//             >
//               <Text style={styles.planTitle}>Your Custom Plan</Text>
//             </LinearGradient>
//             <View style={styles.overviewContent}>
//               <Text style={styles.planInfo}>
//                 <Text style={styles.highlight}>Goal: </Text>
//                 <Text>{goal || 'N/A'}</Text>
//               </Text>
//               <Text style={styles.planInfo}>
//                 <Text style={styles.highlight}>Level: </Text>
//                 <Text>{fitnessLevel || 'N/A'}</Text>
//               </Text>
//               <Text style={styles.planInfo}>
//                 <Text style={styles.highlight}>Session Duration: </Text>
//                 <Text>{sessionDuration || 0} min</Text>
//               </Text>
//               <Text style={styles.planDescription}>
//                 This plan is tailored to your preferences and health conditions. Follow the schedule for optimal results.
//               </Text>
//             </View>
//           </LinearGradient>

//           <Text style={styles.sectionTitle}>Workout Schedule</Text>
//           <FlatList
//             data={workoutData}
//             renderItem={renderDayItem}
//             keyExtractor={(item) => `day-${item.day}`}
//             scrollEnabled={false}
//             contentContainerStyle={styles.scheduleList}
//           />
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
//     paddingTop: 10,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
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
//   saveButton: {
//     marginLeft: 15,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: '800',
//     color: '#FFFFFF',
//     textShadowColor: 'rgba(0, 0, 0, 0.2)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 3,
//   },
//   overviewCard: {
//     width: '90%',
//     alignSelf: 'center',
//     borderRadius: 15,
//     marginBottom: 20,
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//   },
//   overviewHeader: {
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//   },
//   planTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     textAlign: 'center',
//   },
//   overviewContent: {
//     padding: 20,
//   },
//   planInfo: {
//     fontSize: 16,
//     color: '#FF6F61',
//     marginBottom: 8,
//   },
//   highlight: {
//     fontWeight: '700',
//     color: '#1F2937',
//   },
//   planDescription: {
//     fontSize: 14,
//     color: '#4A5568',
//     marginTop: 10,
//     marginBottom: 15,
//     textAlign: 'justify',
//     lineHeight: 20,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     marginLeft: 20,
//     marginBottom: 15,
//     textShadowColor: 'rgba(0, 0, 0, 0.2)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   scheduleList: {
//     paddingHorizontal: 20,
//   },
//   dayCard: {
//     width: '100%',
//     borderRadius: 15,
//     marginBottom: 15,
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 4 },
//   },
//   dayHeader: {
//     paddingVertical: 12,
//     paddingHorizontal: 15,
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//   },
//   dayTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     textAlign: 'center',
//   },
//   exerciseCard: {
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#E2E8F0',
//   },
//   exerciseName: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#1F2937',
//     marginBottom: 5,
//   },
//   exerciseDetails: {
//     fontSize: 14,
//     color: '#718096',
//     marginBottom: 3,
//   },
//   exerciseEquipment: {
//     fontSize: 14,
//     color: '#718096',
//   },
//   errorText: {
//     fontSize: 18,
//     color: '#FFFFFF',
//     textAlign: 'center',
//     marginTop: 50,
//     fontWeight: '500',
//   },
// });








import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function WorkoutPlanResponse({ route, navigation }) {
  const { workoutData, goal, fitnessLevel, sessionDuration } = route.params || {};
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
    // Debug: Log the received workoutData
    console.log('WorkoutPlanResponse workoutData:', workoutData);
  }, [workoutData]);

  const saveWorkoutPlan = async () => {
    try {
      const workoutPlan = {
        plan: workoutData || [], // Save workoutData as plan to match Profile.js expectation
        goal,
        fitnessLevel,
        sessionDuration,
      };
      await AsyncStorage.setItem('workoutPlan', JSON.stringify(workoutPlan));
      console.log('Workout plan saved:', workoutPlan);
      alert('Workout plan saved successfully!');
    } catch (error) {
      console.error('Error saving workout plan:', error);
      alert('Failed to save workout plan.');
    }
  };

  const renderExerciseItem = ({ item }) => (
    <View style={styles.exerciseCard}>
      <Text style={styles.exerciseName}>{item.name}</Text>
      <Text style={styles.exerciseDetails}>
        <Text style={styles.highlight}>Sets: </Text>
        <Text>{item.sets}</Text>
        <Text> | </Text>
        <Text style={styles.highlight}>Reps: </Text>
        <Text>{item.reps || 'N/A'}</Text>
        <Text> | </Text>
        <Text style={styles.highlight}>Duration: </Text>
        <Text>{item.duration || 0} min</Text>
      </Text>
      <Text style={styles.exerciseEquipment}>
        <Text style={styles.highlight}>Equipment: </Text>
        <Text>{item.equipment || 'Not specified'}</Text>
      </Text>
    </View>
  );

  const renderDayItem = ({ item }) => (
    <LinearGradient
      colors={['#FFFFFF', '#F5F7FA']}
      style={styles.dayCard}
    >
      <LinearGradient
        colors={['#FF6F61', '#FF9F1C']}
        style={styles.dayHeader}
      >
        <Text style={styles.dayTitle}>{item.day}</Text>
      </LinearGradient>
      <FlatList
        data={item.exercises}
        renderItem={renderExerciseItem}
        keyExtractor={(exercise, index) => `exercise-${exercise.name}-${index}`}
        scrollEnabled={false}
      />
    </LinearGradient>
  );

  if (!workoutData || !Array.isArray(workoutData)) {
    console.log('No valid workout plan data:', { workoutData });
    return (
      <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
        <Text style={styles.errorText}>No workout plan available.</Text>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <LinearGradient
            colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)']}
            style={styles.header}
          >
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={30} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Workout Plan</Text>
            <TouchableOpacity onPress={saveWorkoutPlan} style={styles.saveButton}>
              <Ionicons name="save-outline" size={30} color="#FFFFFF" />
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            colors={['#FFFFFF', '#F5F7FA']}
            style={styles.overviewCard}
          >
            <LinearGradient
              colors={['#34C759', '#28A745']}
              style={styles.overviewHeader}
            >
              <Text style={styles.planTitle}>Your Custom Plan</Text>
            </LinearGradient>
            <View style={styles.overviewContent}>
              <Text style={styles.planInfo}>
                <Text style={styles.highlight}>Goal: </Text>
                <Text>{goal || 'N/A'}</Text>
              </Text>
              <Text style={styles.planInfo}>
                <Text style={styles.highlight}>Level: </Text>
                <Text>{fitnessLevel || 'N/A'}</Text>
              </Text>
              <Text style={styles.planInfo}>
                <Text style={styles.highlight}>Session Duration: </Text>
                <Text>{sessionDuration ? `${sessionDuration} min` : 'N/A'}</Text>
              </Text>
              <Text style={styles.planDescription}>
                This plan is tailored to your preferences and health conditions. Follow the schedule for optimal results.
              </Text>
            </View>
          </LinearGradient>

          <Text style={styles.sectionTitle}>Workout Schedule</Text>
          <FlatList
            data={workoutData}
            renderItem={renderDayItem}
            keyExtractor={(item) => `day-${item.day}`}
            scrollEnabled={false}
            contentContainerStyle={styles.scheduleList}
          />
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
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    marginRight: 15,
  },
  saveButton: {
    marginLeft: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    shadowRadius: 3,
  },
  overviewCard: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    marginBottom: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  overviewHeader: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  planTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  overviewContent: {
    padding: 20,
  },
  planInfo: {
    fontSize: 16,
    color: '#FF6F61',
    marginBottom: 8,
  },
  highlight: {
    fontWeight: '700',
    color: '#1F2937',
  },
  planDescription: {
    fontSize: 14,
    color: '#4A5568',
    marginTop: 10,
    marginBottom: 15,
    textAlign: 'justify',
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginLeft: 20,
    marginBottom: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  scheduleList: {
    paddingHorizontal: 20,
  },
  dayCard: {
    width: '100%',
    borderRadius: 15,
    marginBottom: 15,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  dayHeader: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  exerciseCard: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 5,
  },
  exerciseDetails: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 3,
  },
  exerciseEquipment: {
    fontSize: 14,
    color: '#718096',
  },
  errorText: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 50,
    fontWeight: '500',
  },
});