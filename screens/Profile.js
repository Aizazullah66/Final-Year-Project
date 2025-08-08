// // import React from 'react';
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   ScrollView,
// //   Image,
// //   Dimensions,
// // } from 'react-native';
// // import { LinearGradient } from 'expo-linear-gradient';
// // import { LineChart } from 'react-native-chart-kit';
// // import Ionicons from 'react-native-vector-icons/Ionicons';

// // // Dummy data
// // const userData = {
// //   name: 'Aizazullah',
// //   goal: 'Lose Weight',
// //   initialWeight: 90, // kg
// //   currentWeight: 85, // kg
// //   targetWeight: 75, // kg
// //   milestones: [
// //     { id: '1', title: 'Lose 5 kg', achieved: true, date: '2025-01-15' },
// //     { id: '2', title: 'Lose 10 kg', achieved: true, date: '2025-02-20' },
// //     { id: '3', title: 'Lose 15 kg', achieved: false, date: null },
// //   ],
// //   weightHistory: {
// //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
// //     data: [90, 88, 87, 86, 85, 85], // kg
// //   },
// // };

// // export default function Profile() {
// //   const { name, goal, initialWeight, currentWeight, targetWeight, milestones, weightHistory } =
// //     userData;

// //   // Calculate progress percentage
// //   const progress = ((initialWeight - currentWeight) / (initialWeight - targetWeight)) * 100;

// //   const chartConfig = {
// //     backgroundGradientFrom: '#1A1A2E',
// //     backgroundGradientTo: '#16213E',
// //     decimalPlaces: 1,
// //     color: (opacity = 1) => `rgba(255, 94, 155, ${opacity})`, // #FF5E9B
// //     labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
// //     style: { borderRadius: 16 },
// //     propsForDots: {
// //       r: '6',
// //       strokeWidth: '2',
// //       stroke: '#FF5E9B',
// //     },
// //   };

// //   return (
// //     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
// //       <ScrollView contentContainerStyle={styles.scrollContainer}>
// //         {/* Header */}
// //         <View style={styles.header}>
// //           <Image
// //             source={{ uri: 'https://via.placeholder.com/150' }} // Dummy profile pic
// //             style={styles.profileImage}
// //           />
// //           <Text style={styles.name}>{name}</Text>
// //           <Text style={styles.goal}>Goal: {goal}</Text>
// //         </View>

// //         {/* Progress Section */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>Weight Loss Progress</Text>
// //           <View style={styles.progressContainer}>
// //             <Text style={styles.progressText}>
// //               {currentWeight} kg / {targetWeight} kg
// //             </Text>
// //             <View style={styles.progressBar}>
// //               <View style={[styles.progressFill, { width: `${progress}%` }]} />
// //             </View>
// //             <Text style={styles.progressPercentage}>{progress.toFixed(1)}%</Text>
// //           </View>
// //         </View>

// //         {/* Weight History Chart */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>Weight History</Text>
// //           <LineChart
// //             data={{
// //               labels: weightHistory.labels,
// //               datasets: [{ data: weightHistory.data }],
// //             }}
// //             width={Dimensions.get('window').width - 40} // Responsive width
// //             height={220}
// //             yAxisLabel=""
// //             yAxisSuffix=" kg"
// //             chartConfig={chartConfig}
// //             style={styles.chart}
// //           />
// //         </View>

// //         {/* Milestones */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>Milestones</Text>
// //           {milestones.map((milestone) => (
// //             <View key={milestone.id} style={styles.milestoneItem}>
// //               <Ionicons
// //                 name={milestone.achieved ? 'checkmark-circle' : 'ellipse-outline'}
// //                 size={24}
// //                 color={milestone.achieved ? '#FF5E9B' : '#A0A0A0'}
// //                 style={styles.milestoneIcon}
// //               />
// //               <View style={styles.milestoneDetails}>
// //                 <Text style={styles.milestoneTitle}>{milestone.title}</Text>
// //                 <Text style={styles.milestoneDate}>
// //                   {milestone.achieved ? `Achieved: ${milestone.date}` : 'In Progress'}
// //                 </Text>
// //               </View>
// //             </View>
// //           ))}
// //         </View>
// //       </ScrollView>
// //     </LinearGradient>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   gradientContainer: {
// //     flex: 1,
// //   },
// //   scrollContainer: {
// //     paddingBottom: 20,
// //   },
// //   header: {
// //     alignItems: 'center',
// //     paddingTop: 50,
// //     paddingBottom: 20,
// //     backgroundColor: 'rgba(0, 0, 0, 0.3)',
// //   },
// //   profileImage: {
// //     width: 120,
// //     height: 120,
// //     borderRadius: 60,
// //     borderWidth: 3,
// //     borderColor: '#FF5E9B',
// //     marginBottom: 15,
// //   },
// //   name: {
// //     fontSize: 32,
// //     fontWeight: '700',
// //     color: '#FFFFFF',
// //     textShadowColor: 'rgba(0, 0, 0, 0.5)',
// //     textShadowOffset: { width: 1, height: 1 },
// //     textShadowRadius: 4,
// //   },
// //   goal: {
// //     fontSize: 18,
// //     fontWeight: '500',
// //     color: '#D1D1D1',
// //     marginTop: 5,
// //   },
// //   section: {
// //     marginHorizontal: 20,
// //     marginTop: 20,
// //   },
// //   sectionTitle: {
// //     fontSize: 22,
// //     fontWeight: '600',
// //     color: '#FFFFFF',
// //     marginBottom: 15,
// //     textShadowColor: 'rgba(0, 0, 0, 0.5)',
// //     textShadowOffset: { width: 1, height: 1 },
// //     textShadowRadius: 2,
// //   },
// //   progressContainer: {
// //     backgroundColor: 'rgba(255, 255, 255, 0.1)',
// //     borderRadius: 12,
// //     padding: 15,
// //     elevation: 5,
// //     shadowColor: '#000',
// //     shadowOpacity: 0.3,
// //     shadowRadius: 8,
// //     shadowOffset: { width: 0, height: 2 },
// //   },
// //   progressText: {
// //     fontSize: 16,
// //     color: '#FFFFFF',
// //     marginBottom: 10,
// //   },
// //   progressBar: {
// //     height: 10,
// //     backgroundColor: '#A0A0A0',
// //     borderRadius: 5,
// //     overflow: 'hidden',
// //   },
// //   progressFill: {
// //     height: '100%',
// //     backgroundColor: '#FF5E9B',
// //   },
// //   progressPercentage: {
// //     fontSize: 14,
// //     color: '#FF5E9B',
// //     textAlign: 'right',
// //     marginTop: 5,
// //   },
// //   chart: {
// //     borderRadius: 16,
// //   },
// //   milestoneItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(255, 255, 255, 0.1)',
// //     borderRadius: 10,
// //     padding: 10,
// //     marginBottom: 10,
// //     elevation: 3,
// //     shadowColor: '#000',
// //     shadowOpacity: 0.2,
// //     shadowRadius: 6,
// //   },
// //   milestoneIcon: {
// //     marginRight: 10,
// //   },
// //   milestoneDetails: {
// //     flex: 1,
// //   },
// //   milestoneTitle: {
// //     fontSize: 16,
// //     fontWeight: '500',
// //     color: '#FFFFFF',
// //   },
// //   milestoneDate: {
// //     fontSize: 12,
// //     color: '#D1D1D1',
// //     marginTop: 2,
// //   },
// // });


// import React, { useState, useEffect } from 'react';
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
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function Profile({ navigation }) {
//   const [dietPlan, setDietPlan] = useState(null);
//   const [workoutPlan, setWorkoutPlan] = useState(null);
//   const [currentDay, setCurrentDay] = useState('');

//   useEffect(() => {
//     const loadPlans = async () => {
//       try {
//         // Load diet plan
//         const savedDietPlan = await AsyncStorage.getItem('dietPlan');
//         if (savedDietPlan) {
//           setDietPlan(JSON.parse(savedDietPlan));
//         }

//         // Load workout plan
//         const savedWorkoutPlan = await AsyncStorage.getItem('workoutPlan');
//         if (savedWorkoutPlan) {
//           setWorkoutPlan(JSON.parse(savedWorkoutPlan));
//         }
//       } catch (error) {
//         console.error('Error loading plans:', error);
//       }
//     };

//     // Get current weekday
//     const today = new Date();
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     setCurrentDay(daysOfWeek[today.getDay()]);

//     loadPlans();
//   }, []);

//   const renderFoodItem = ({ item }) => (
//     <View style={styles.foodCard}>
//       <Text style={styles.foodName}>{item.name}</Text>
//       <Text style={styles.foodDetails}>
//         <Text style={styles.highlight}>Calories: </Text>
//         <Text>{item.calories} kcal</Text>
//         <Text> | </Text>
//         <Text style={styles.highlight}>Portion: </Text>
//         <Text>{item.portion}</Text>
//       </Text>
//       {item.notes && (
//         <Text style={styles.foodNotes}>
//           <Text style={styles.highlight}>Notes: </Text>
//           <Text>{item.notes}</Text>
//         </Text>
//       )}
//     </View>
//   );

//   const renderMealItem = ({ item }) => (
//     <View style={styles.mealCard}>
//       <LinearGradient colors={['#34C759', '#28A745']} style={styles.mealHeader}>
//         <Text style={styles.mealTitle}>{item.meal}</Text>
//       </LinearGradient>
//       <FlatList
//         data={item.foods}
//         renderItem={renderFoodItem}
//         keyExtractor={(food, index) => `food-${food.name}-${index}`}
//         scrollEnabled={false}
//       />
//     </View>
//   );

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

//   // Find today's diet and workout plans
//   const todayDiet = dietPlan?.dietData?.find((day) => day.day.toLowerCase() === currentDay.toLowerCase());
//   const todayWorkout = workoutPlan?.workoutData?.find((day) => day.day.toLowerCase() === currentDay.toLowerCase());

//   return (
//     <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         <LinearGradient
//           colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)']}
//           style={styles.header}
//         >
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Ionicons name="arrow-back" size={30} color="#FFFFFF" />
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Today's Plan - {currentDay}</Text>
//         </LinearGradient>

//         {/* Diet Plan for Today */}
//         <Text style={styles.sectionTitle}>Today's Diet</Text>
//         {todayDiet ? (
//           <LinearGradient colors={['#FFFFFF', '#F5F7FA']} style={styles.dayCard}>
//             <LinearGradient colors={['#FF6F61', '#FF9F1C']} style={styles.dayHeader}>
//               <Text style={styles.dayTitle}>{todayDiet.day}</Text>
//             </LinearGradient>
//             <FlatList
//               data={todayDiet.meals}
//               renderItem={renderMealItem}
//               keyExtractor={(meal) => `meal-${meal.meal}`}
//               scrollEnabled={false}
//             />
//             <Text style={styles.dailyCalories}>
//               <Text style={styles.highlight}>Daily Total: </Text>
//               {todayDiet.dailyCalories} kcal
//             </Text>
//           </LinearGradient>
//         ) : (
//           <Text style={styles.noPlanText}>No diet plan available for today.</Text>
//         )}

//         {/* Workout Plan for Today */}
//         <Text style={styles.sectionTitle}>Today's Workout</Text>
//         {todayWorkout ? (
//           <LinearGradient colors={['#FFFFFF', '#F5F7FA']} style={styles.dayCard}>
//             <LinearGradient colors={['#FF6F61', '#FF9F1C']} style={styles.dayHeader}>
//               <Text style={styles.dayTitle}>{todayWorkout.day}</Text>
//             </LinearGradient>
//             <FlatList
//               data={todayWorkout.exercises}
//               renderItem={renderExerciseItem}
//               keyExtractor={(exercise, index) => `exercise-${exercise.name}-${index}`}
//               scrollEnabled={false}
//             />
//           </LinearGradient>
//         ) : (
//           <Text style={styles.noPlanText}>No workout plan available for today.</Text>
//         )}
//       </ScrollView>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   scrollContent: { paddingBottom: 30, paddingTop: 10 },
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
//   backButton: { marginRight: 15 },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: '800',
//     color: '#FFFFFF',
//     textShadowColor: 'rgba(0, 0, 0, 0.2)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 3,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     marginLeft: 20,
//     marginBottom: 15,
//     marginTop: 20,
//     textShadowColor: 'rgba(0, 0, 0, 0.2)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   dayCard: {
//     width: '90%',
//     alignSelf: 'center',
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
//   mealCard: {
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#E2E8F0',
//   },
//   mealHeader: {
//     paddingVertical: 8,
//     paddingHorizontal: 15,
//     marginHorizontal: 10,
//     borderRadius: 8,
//   },
//   mealTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     textAlign: 'center',
//   },
//   foodCard: {
//     padding: 10,
//     paddingLeft: 20,
//   },
//   foodName: {
//     fontSize: 14,
//     fontWeight: '700',
//     color: '#1F2937',
//     marginBottom: 3,
//   },
//   foodDetails: {
//     fontSize: 12,
//     color: '#718096',
//     marginBottom: 2,
//   },
//   foodNotes: {
//     fontSize: 12,
//     color: '#718096',
//     fontStyle: 'italic',
//   },
//   dailyCalories: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#1F2937',
//     textAlign: 'right',
//     padding: 10,
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
//   noPlanText: {
//     fontSize: 16,
//     color: '#FFFFFF',
//     textAlign: 'center',
//     marginVertical: 20,
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
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function Profile({ navigation }) {
//   const [dietPlan, setDietPlan] = useState(null);
//   const [workoutPlan, setWorkoutPlan] = useState(null);
//   const [currentDay, setCurrentDay] = useState('');

//   // Map for normalizing day names (handles "Mon" and "Monday" formats)
//   const dayNameMap = {
//     sun: 'Sunday',
//     sunday: 'Sunday',
//     mon: 'Monday',
//     monday: 'Monday',
//     tue: 'Tuesday',
//     tuesday: 'Tuesday',
//     wed: 'Wednesday',
//     wednesday: 'Wednesday',
//     thu: 'Thursday',
//     thursday: 'Thursday',
//     fri: 'Friday',
//     friday: 'Friday',
//     sat: 'Saturday',
//     saturday: 'Saturday',
//   };

//   useEffect(() => {
//     const loadPlans = async () => {
//       try {
//         // Load diet plan from AsyncStorage
//         const savedDietPlan = await AsyncStorage.getItem('dietPlan');
//         if (savedDietPlan) {
//           const parsedDietPlan = JSON.parse(savedDietPlan);
//           setDietPlan(parsedDietPlan);
//           console.log('Loaded diet plan:', parsedDietPlan);
//         } else {
//           console.log('No diet plan found in AsyncStorage');
//         }

//         // Load workout plan from AsyncStorage
//         const savedWorkoutPlan = await AsyncStorage.getItem('workoutPlan');
//         if (savedWorkoutPlan) {
//           const parsedWorkoutPlan = JSON.parse(savedWorkoutPlan);
//           setWorkoutPlan(parsedWorkoutPlan);
//           console.log('Loaded workout plan:', parsedWorkoutPlan);
//         } else {
//           console.log('No workout plan found in AsyncStorage');
//         }
//       } catch (error) {
//         console.error('Error loading plans from AsyncStorage:', error);
//       }
//     };

//     // Set current day
//     const today = new Date();
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const todayName = daysOfWeek[today.getDay()];
//     setCurrentDay(todayName);
//     console.log('Current day set to:', todayName);

//     loadPlans();
//   }, []);

//   // Rendering functions for diet items
//   const renderFoodItem = ({ item }) => (
//     <View style={styles.foodCard}>
//       <Text style={styles.foodName}>{item.name}</Text>
//       <Text style={styles.foodDetails}>
//         <Text style={styles.highlight}>Calories: </Text>
//         <Text>{item.calories} kcal</Text>
//         <Text> | </Text>
//         <Text style={styles.highlight}>Portion: </Text>
//         <Text>{item.portion}</Text>
//       </Text>
//       {item.notes && (
//         <Text style={styles.foodNotes}>
//           <Text style={styles.highlight}>Notes: </Text>
//           <Text>{item.notes}</Text>
//         </Text>
//       )}
//     </View>
//   );

//   const renderMealItem = ({ item }) => (
//     <View style={styles.mealCard}>
//       <LinearGradient colors={['#34C759', '#28A745']} style={styles.mealHeader}>
//         <Text style={styles.mealTitle}>{item.meal}</Text>
//       </LinearGradient>
//       <FlatList
//         data={item.foods}
//         renderItem={renderFoodItem}
//         keyExtractor={(food, index) => `food-${food.name}-${index}`}
//         scrollEnabled={false}
//       />
//     </View>
//   );

//   // Rendering function for workout items
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

//   // Normalize the current day and filter today's plans
//   const normalizedCurrentDay = dayNameMap[currentDay.toLowerCase()];
//   const todayDiet = dietPlan?.plan?.find(
//     (day) => dayNameMap[day.day.toLowerCase()] === normalizedCurrentDay
//   );
//   const todayWorkout = workoutPlan?.plan?.find(
//     (day) => dayNameMap[day.day.toLowerCase()] === normalizedCurrentDay
//   );

//   console.log('Normalized current day:', normalizedCurrentDay);
//   console.log('Today diet plan:', todayDiet);
//   console.log('Today workout plan:', todayWorkout);

//   return (
//     <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         <LinearGradient
//           colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)']}
//           style={styles.header}
//         >
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Ionicons name="arrow-back" size={30} color="#FFFFFF" />
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Today's Plan - {currentDay}</Text>
//         </LinearGradient>

//         {/* Diet Plan Section */}
//         <Text style={styles.sectionTitle}>Today's Diet</Text>
//         {todayDiet ? (
//           <LinearGradient colors={['#FFFFFF', '#F5F7FA']} style={styles.dayCard}>
//             <LinearGradient colors={['#FF6F61', '#FF9F1C']} style={styles.dayHeader}>
//               <Text style={styles.dayTitle}>{todayDiet.day}</Text>
//             </LinearGradient>
//             <FlatList
//               data={todayDiet.meals}
//               renderItem={renderMealItem}
//               keyExtractor={(meal) => `meal-${meal.meal}`}
//               scrollEnabled={false}
//             />
//             <Text style={styles.dailyCalories}>
//               <Text style={styles.highlight}>Daily Total: </Text>
//               {todayDiet.dailyCalories} kcal
//             </Text>
//           </LinearGradient>
//         ) : (
//           <Text style={styles.noPlanText}>No diet plan available for today.</Text>
//         )}

//         {/* Workout Plan Section */}
//         <Text style={styles.sectionTitle}>Today's Workout</Text>
//         {todayWorkout ? (
//           <LinearGradient colors={['#FFFFFF', '#F5F7FA']} style={styles.dayCard}>
//             <LinearGradient colors={['#FF6F61', '#FF9F1C']} style={styles.dayHeader}>
//               <Text style={styles.dayTitle}>{todayWorkout.day}</Text>
//             </LinearGradient>
//             <FlatList
//               data={todayWorkout.exercises}
//               renderItem={renderExerciseItem}
//               keyExtractor={(exercise, index) => `exercise-${exercise.name}-${index}`}
//               scrollEnabled={false}
//             />
//           </LinearGradient>
//         ) : (
//           <Text style={styles.noPlanText}>No workout plan available for today.</Text>
//         )}
//       </ScrollView>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   scrollContent: { paddingBottom: 30, paddingTop: 10 },
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
//   backButton: { marginRight: 15 },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: '800',
//     color: '#FFFFFF',
//     textShadowColor: 'rgba(0, 0, 0, 0.2)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 3,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     marginLeft: 20,
//     marginBottom: 15,
//     marginTop: 20,
//     textShadowColor: 'rgba(0, 0, 0, 0.2)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   dayCard: {
//     width: '90%',
//     alignSelf: 'center',
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
//   mealCard: {
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#E2E8F0',
//   },
//   mealHeader: {
//     paddingVertical: 8,
//     paddingHorizontal: 15,
//     marginHorizontal: 10,
//     borderRadius: 8,
//   },
//   mealTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     textAlign: 'center',
//   },
//   foodCard: {
//     padding: 10,
//     paddingLeft: 20,
//   },
//   foodName: {
//     fontSize: 14,
//     fontWeight: '700',
//     color: '#1F2937',
//     marginBottom: 3,
//   },
//   foodDetails: {
//     fontSize: 12,
//     color: '#718096',
//     marginBottom: 2,
//   },
//   foodNotes: {
//     fontSize: 12,
//     color: '#718096',
//     fontStyle: 'italic',
//   },
//   dailyCalories: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#1F2937',
//     textAlign: 'right',
//     padding: 10,
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
//   noPlanText: {
//     fontSize: 16,
//     color: '#FFFFFF',
//     textAlign: 'center',
//     marginVertical: 20,
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
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile({ navigation }) {
  const [dietPlan, setDietPlan] = useState(null);
  const [workoutPlan, setWorkoutPlan] = useState(null);
  const [currentDay, setCurrentDay] = useState('');

  // Map for normalizing day names
  const dayNameMap = {
    sun: 'Sunday',
    sunday: 'Sunday',
    mon: 'Monday',
    monday: 'Monday',
    tue: 'Tuesday',
    tuesday: 'Tuesday',
    wed: 'Wednesday',
    wednesday: 'Wednesday',
    thu: 'Thursday',
    thursday: 'Thursday',
    fri: 'Friday',
    friday: 'Friday',
    sat: 'Saturday',
    saturday: 'Saturday',
    MON: 'Monday',
    WED: 'Wednesday',
    THU: 'Thursday',
  };

  useEffect(() => {
    const loadPlans = async () => {
      try {
        // Load diet plan
        const savedDietPlan = await AsyncStorage.getItem('dietPlan');
        if (savedDietPlan) {
          const parsedDietPlan = JSON.parse(savedDietPlan);
          setDietPlan(parsedDietPlan);
          console.log('Loaded diet plan:', parsedDietPlan);
        } else {
          console.log('No diet plan found in AsyncStorage');
        }

        // Load workout plan
        const savedWorkoutPlan = await AsyncStorage.getItem('workoutPlan');
        if (savedWorkoutPlan) {
          const parsedWorkoutPlan = JSON.parse(savedWorkoutPlan);
          setWorkoutPlan(parsedWorkoutPlan);
          console.log('Loaded workout plan:', parsedWorkoutPlan);
        } else {
          console.log('No workout plan found in AsyncStorage');
        }
      } catch (error) {
        console.error('Error loading plans from AsyncStorage:', error);
      }
    };

    // Test AsyncStorage directly
    const testAsyncStorage = async () => {
      const rawWorkoutPlan = await AsyncStorage.getItem('workoutPlan');
      console.log('Raw workoutPlan from AsyncStorage:', rawWorkoutPlan);
      console.log('Parsed workoutPlan:', rawWorkoutPlan ? JSON.parse(rawWorkoutPlan) : null);
    };

    // Set current day
    const today = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const todayName = daysOfWeek[today.getDay()];
    setCurrentDay(todayName);
    console.log('Current day set to:', todayName);

    loadPlans();
    testAsyncStorage();
  }, []);

  const renderFoodItem = ({ item }) => (
    <View style={styles.foodCard}>
      <Text style={styles.foodName}>{item.name}</Text>
      <Text style={styles.foodDetails}>
        <Text style={styles.highlight}>Calories: </Text>
        <Text>{item.calories} kcal</Text>
        <Text> | </Text>
        <Text style={styles.highlight}>Portion: </Text>
        <Text>{item.portion}</Text>
      </Text>
      {item.notes && (
        <Text style={styles.foodNotes}>
          <Text style={styles.highlight}>Notes: </Text>
          <Text>{item.notes}</Text>
        </Text>
      )}
    </View>
  );

  const renderMealItem = ({ item }) => (
    <View style={styles.mealCard}>
      <LinearGradient colors={['#34C759', '#28A745']} style={styles.mealHeader}>
        <Text style={styles.mealTitle}>{item.meal}</Text>
      </LinearGradient>
      <FlatList
        data={item.foods}
        renderItem={renderFoodItem}
        keyExtractor={(food, index) => `food-${food.name}-${index}`}
        scrollEnabled={false}
      />
    </View>
  );

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

  // Normalize the current day and find today's plans
  const normalizedCurrentDay = dayNameMap[currentDay.toLowerCase()] || currentDay;
  console.log('Normalized current day:', normalizedCurrentDay);
  console.log('Workout plan plan field:', workoutPlan?.plan);

  const todayDiet = dietPlan?.plan?.find(
    (day) => dayNameMap[day.day.toLowerCase()] === normalizedCurrentDay
  );
  const todayWorkout = workoutPlan?.plan?.find(
    (day) => {
      const normalizedPlanDay = dayNameMap[day.day.toLowerCase()];
      console.log(`Comparing plan day: ${day.day} (normalized: ${normalizedPlanDay}) with ${normalizedCurrentDay}`);
      return normalizedPlanDay === normalizedCurrentDay;
    }
  );

  console.log('Today diet plan:', todayDiet);
  console.log('Today workout plan:', todayWorkout);

  return (
    <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)']}
          style={styles.header}
        >
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={30} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Today's Plan - {currentDay}</Text>
        </LinearGradient>

        {/* Diet Plan Section */}
        <Text style={styles.sectionTitle}>Today's Diet</Text>
        {todayDiet ? (
          <LinearGradient colors={['#FFFFFF', '#F5F7FA']} style={styles.dayCard}>
            <LinearGradient colors={['#FF6F61', '#FF9F1C']} style={styles.dayHeader}>
              <Text style={styles.dayTitle}>{todayDiet.day}</Text>
            </LinearGradient>
            <FlatList
              data={todayDiet.meals}
              renderItem={renderMealItem}
              keyExtractor={(meal) => `meal-${meal.meal}`}
              scrollEnabled={false}
            />
            <Text style={styles.dailyCalories}>
              <Text style={styles.highlight}>Daily Total: </Text>
              {todayDiet.dailyCalories} kcal
            </Text>
          </LinearGradient>
        ) : (
          <Text style={styles.noPlanText}>No diet plan available for today.</Text>
        )}

        {/* Workout Plan Section */}
        <Text style={styles.sectionTitle}>Today's Workout</Text>
        {todayWorkout ? (
          <LinearGradient colors={['#FFFFFF', '#F5F7FA']} style={styles.dayCard}>
            <LinearGradient colors={['#FF6F61', '#FF9F1C']} style={styles.dayHeader}>
              <Text style={styles.dayTitle}>{todayWorkout.day}</Text>
            </LinearGradient>
            <FlatList
              data={todayWorkout.exercises}
              renderItem={renderExerciseItem}
              keyExtractor={(exercise, index) => `exercise-${exercise.name}-${index}`}
              scrollEnabled={false}
            />
          </LinearGradient>
        ) : (
          <Text style={styles.noPlanText}>No workout plan available for today.</Text>
        )}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { paddingBottom: 30, paddingTop: 10 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
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
  backButton: { marginRight: 15 },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginLeft: 20,
    marginBottom: 15,
    marginTop: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  dayCard: {
    width: '90%',
    alignSelf: 'center',
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
  mealCard: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  mealHeader: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  mealTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  foodCard: {
    padding: 10,
    paddingLeft: 20,
  },
  foodName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 3,
  },
  foodDetails: {
    fontSize: 12,
    color: '#718096',
    marginBottom: 2,
  },
  foodNotes: {
    fontSize: 12,
    color: '#718096',
    fontStyle: 'italic',
  },
  dailyCalories: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'right',
    padding: 10,
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
  noPlanText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: 20,
  },
});