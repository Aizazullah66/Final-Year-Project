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

// export default function DietPlanResponse({ route, navigation }) {
//   const { dietData, totalCalories, goal, gender, nationality, dietType, numMeals, targetCalories } = route.params || {};
//   const fadeAnim = useState(new Animated.Value(0))[0];

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 600,
//       useNativeDriver: true,
//     }).start();
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
//     <LinearGradient colors={['#FFFFFF', '#F5F7FA']} style={styles.mealCard}>
//       <LinearGradient colors={['#34C759', '#28A745']} style={styles.mealHeader}>
//         <Text style={styles.mealTitle}>{item.meal}</Text>
//       </LinearGradient>
//       <FlatList
//         data={item.foods}
//         renderItem={renderFoodItem}
//         keyExtractor={(food, index) => `food-${food.name}-${index}`}
//         scrollEnabled={false}
//       />
//     </LinearGradient>
//   );

//   if (!dietData || !Array.isArray(dietData)) {
//     return (
//       <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
//         <Text style={styles.errorText}>No diet plan available.</Text>
//       </LinearGradient>
//     );
//   }

//   const motivationalQuote = "Nourish your body, fuel your soul – every bite counts!";

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
//             <Text style={styles.headerTitle}>Your Diet Plan</Text>
//           </LinearGradient>

//           <LinearGradient colors={['#FFFFFF', '#F5F7FA']} style={styles.overviewCard}>
//             <LinearGradient colors={['#FF6F61', '#FF9F1C']} style={styles.overviewHeader}>
//               <Text style={styles.planTitle}>Daily Diet Overview</Text>
//             </LinearGradient>
//             <View style={styles.overviewContent}>
//               <Text style={styles.planInfo}>
//                 <Text style={styles.highlight}>Goal: </Text>
//                 <Text>{goal}</Text>
//               </Text>
//               <Text style={styles.planInfo}>
//                 <Text style={styles.highlight}>Gender: </Text>
//                 <Text>{gender}</Text>
//               </Text>
//               <Text style={styles.planInfo}>
//                 <Text style={styles.highlight}>Nationality: </Text>
//                 <Text>{nationality}</Text>
//               </Text>
//               <Text style={styles.planInfo}>
//                 <Text style={styles.highlight}>Diet Type: </Text>
//                 <Text>{dietType}</Text>
//               </Text>
//               <Text style={styles.planInfo}>
//                 <Text style={styles.highlight}>Meals: </Text>
//                 <Text>{numMeals}</Text>
//               </Text>
//               <Text style={styles.planInfo}>
//                 <Text style={styles.highlight}>Total Calories: </Text>
//                 <Text>{totalCalories} kcal (Target: {targetCalories} kcal)</Text>
//               </Text>
//               <Text style={styles.planDescription}>{motivationalQuote}</Text>
//             </View>
//           </LinearGradient>

//           <Text style={styles.sectionTitle}>Meal Schedule</Text>
//           <FlatList
//             data={dietData}
//             renderItem={renderMealItem}
//             keyExtractor={(item) => `meal-${item.meal}`}
//             scrollEnabled={false}
//             contentContainerStyle={styles.scheduleList}
//           />
//         </ScrollView>
//       </Animated.View>
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
//   planTitle: { fontSize: 20, fontWeight: '700', color: '#FFFFFF', textAlign: 'center' },
//   overviewContent: { padding: 20 },
//   planInfo: { fontSize: 16, color: '#34C759', marginBottom: 8 },
//   highlight: { fontWeight: '700', color: '#1F2937' },
//   planDescription: {
//     fontSize: 14,
//     fontStyle: 'italic',
//     color: '#4A5568',
//     marginTop: 10,
//     textAlign: 'center',
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
//   scheduleList: { paddingHorizontal: 20 },
//   mealCard: {
//     width: '100%',
//     borderRadius: 15,
//     marginBottom: 15,
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 4 },
//   },
//   mealHeader: {
//     paddingVertical: 12,
//     paddingHorizontal: 15,
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//   },
//   mealTitle: { fontSize: 18, fontWeight: '700', color: '#FFFFFF', textAlign: 'center' },
//   foodCard: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#E2E8F0' },
//   foodName: { fontSize: 16, fontWeight: '700', color: '#1F2937', marginBottom: 5 },
//   foodDetails: { fontSize: 14, color: '#718096', marginBottom: 3 },
//   foodNotes: { fontSize: 14, color: '#718096', fontStyle: 'italic' },
//   errorText: { fontSize: 18, color: '#FFFFFF', textAlign: 'center', marginTop: 50, fontWeight: '500' },
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

// export default function DietPlanResponse({ route, navigation }) {
//   const { dietData, totalWeeklyCalories, goal, gender, nationality, dietType, numMeals, targetCalories } = route.params || {};
//   const fadeAnim = useState(new Animated.Value(0))[0];

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 600,
//       useNativeDriver: true,
//     }).start();
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

//   const renderDayItem = ({ item }) => (
//     <LinearGradient colors={['#FFFFFF', '#F5F7FA']} style={styles.dayCard}>
//       <LinearGradient colors={['#FF6F61', '#FF9F1C']} style={styles.dayHeader}>
//         <Text style={styles.dayTitle}>{item.day}</Text>
//       </LinearGradient>
//       <FlatList
//         data={item.meals}
//         renderItem={renderMealItem}
//         keyExtractor={(meal) => `meal-${meal.meal}`}
//         scrollEnabled={false}
//       />
//       <Text style={styles.dailyCalories}>
//         <Text style={styles.highlight}>Daily Total: </Text>
//         {item.dailyCalories} kcal
//       </Text>
//     </LinearGradient>
//   );

//   if (!dietData || !Array.isArray(dietData)) {
//     return (
//       <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
//         <Text style={styles.errorText}>No diet plan available.</Text>
//       </LinearGradient>
//     );
//   }

//   const motivationalQuote = "Fuel your week with purpose – every meal is a step toward your goal!";

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
//             <Text style={styles.headerTitle}>Weekly Diet Plan</Text>
//           </LinearGradient>

//           <LinearGradient colors={['#FFFFFF', '#F5F7FA']} style={styles.overviewCard}>
//             <LinearGradient colors={['#FF6F61', '#FF9F1C']} style={styles.overviewHeader}>
//               <Text style={styles.planTitle}>Weekly Diet Overview</Text>
//             </LinearGradient>
//             <View style={styles.overviewContent}>
//               <Text style={styles.planInfo}>
//                 <Text style={styles.highlight}>Goal: </Text>
//                 <Text>{goal}</Text>
//               </Text>
//               <Text style={styles.planInfo}>
//                 <Text style={styles.highlight}>Gender: </Text>
//                 <Text>{gender}</Text>
//               </Text>
//               <Text style={styles.planInfo}>
//                 <Text style={styles.highlight}>Nationality: </Text>
//                 <Text>{nationality}</Text>
//               </Text>
//               <Text style={styles.planInfo}>
//                 <Text style={styles.highlight}>Diet Type: </Text>
//                 <Text>{dietType}</Text>
//               </Text>
//               <Text style={styles.planInfo}>
//                 <Text style={styles.highlight}>Meals per Day: </Text>
//                 <Text>{numMeals}</Text>
//               </Text>
//               <Text style={styles.planInfo}>
//                 <Text style={styles.highlight}>Daily Calories: </Text>
//                 <Text>{targetCalories} kcal</Text>
//               </Text>
//               <Text style={styles.planInfo}>
//                 <Text style={styles.highlight}>Weekly Total: </Text>
//                 <Text>{totalWeeklyCalories} kcal</Text>
//               </Text>
//               <Text style={styles.planDescription}>{motivationalQuote}</Text>
//             </View>
//           </LinearGradient>

//           <Text style={styles.sectionTitle}>Weekly Meal Schedule</Text>
//           <FlatList
//             data={dietData}
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
//   planTitle: { fontSize: 20, fontWeight: '700', color: '#FFFFFF', textAlign: 'center' },
//   overviewContent: { padding: 20 },
//   planInfo: { fontSize: 16, color: '#34C759', marginBottom: 8 },
//   highlight: { fontWeight: '700', color: '#1F2937' },
//   planDescription: {
//     fontSize: 14,
//     fontStyle: 'italic',
//     color: '#4A5568',
//     marginTop: 10,
//     textAlign: 'center',
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
//   scheduleList: { paddingHorizontal: 20 },
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
//   dayTitle: { fontSize: 18, fontWeight: '700', color: '#FFFFFF', textAlign: 'center' },
//   mealCard: { paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#E2E8F0' },
//   mealHeader: {
//     paddingVertical: 8,
//     paddingHorizontal: 15,
//     marginHorizontal: 10,
//     borderRadius: 8,
//   },
//   mealTitle: { fontSize: 16, fontWeight: '600', color: '#FFFFFF', textAlign: 'center' },
//   foodCard: { padding: 10, paddingLeft: 20 },
//   foodName: { fontSize: 14, fontWeight: '700', color: '#1F2937', marginBottom: 3 },
//   foodDetails: { fontSize: 12, color: '#718096', marginBottom: 2 },
//   foodNotes: { fontSize: 12, color: '#718096', fontStyle: 'italic' },
//   dailyCalories: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#1F2937',
//     textAlign: 'right',
//     padding: 10,
//   },
//   errorText: { fontSize: 18, color: '#FFFFFF', textAlign: 'center', marginTop: 50, fontWeight: '500' },
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

// export default function DietPlanResponse({ route, navigation }) {
//   const { dietData, totalWeeklyCalories, goal, gender, nationality, dietType, numMeals, targetCalories } = route.params || {};
//   const fadeAnim = useState(new Animated.Value(0))[0];

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 600,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   const saveDietPlan = async () => {
//     try {
//       const dietPlan = {
//         dietData,
//         totalWeeklyCalories,
//         goal,
//         gender,
//         nationality,
//         dietType,
//         numMeals,
//         targetCalories,
//       };
//       await AsyncStorage.setItem('dietPlan', JSON.stringify(dietPlan));
//       alert('Diet plan saved successfully!');
//     } catch (error) {
//       console.error('Error saving diet plan:', error);
//       alert('Failed to save diet plan.');
//     }
//   };

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

//   const renderDayItem = ({ item }) => (
//     <LinearGradient colors={['#FFFFFF', '#F5F7FA']} style={styles.dayCard}>
//       <LinearGradient colors={['#FF6F61', '#FF9F1C']} style={styles.dayHeader}>
//         <Text style={styles.dayTitle}>{item.day}</Text>
//       </LinearGradient>
//       <FlatList
//         data={item.meals}
//         renderItem={renderMealItem}
//         keyExtractor={(meal) => `meal-${meal.meal}`}
//         scrollEnabled={false}
//       />
//       <Text style={styles.dailyCalories}>
//         <Text style={styles.highlight}>Daily Total: </Text>
//         {item.dailyCalories} kcal
//       </Text>
//     </LinearGradient>
//   );

//   if (!dietData || !Array.isArray(dietData)) {
//     return (
//       <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
//         <Text style={styles.errorText}>No diet plan available.</Text>
//       </LinearGradient>
//     );
//   }

//   const motivationalQuote = "Fuel your week with purpose – every meal is a step toward your goal!";

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
//             <Text style={styles.headerTitle}>Weekly Diet Plan</Text>
//             <TouchableOpacity onPress={saveDietPlan} style={styles.saveButton}>
//               <Ionicons name="save-outline" size={30} color="#FFFFFF" />
//             </TouchableOpacity>
//           </LinearGradient>

//           <LinearGradient colors={['#FFFFFF', '#F5F7FA']} style={styles.overviewCard}>
//             <LinearGradient colors={['#FF6F61', '#FF9F1C']} style={styles.overviewHeader}>
//               <Text style={styles.planTitle}>Weekly Diet Overview</Text>
//             </LinearGradient>
//             <View style={styles.overviewContent}>
//               <Text style={styles.planInfo}>
//                 <Text style={styles.highlight}>Goal: </Text>
//                 <Text>{goal}</Text>
//               </Text>
//               <Text style={styles.planInfo}>
//                 <Text style={styles.highlight}>Gender: </Text>
//                 <Text>{gender}</Text>
//               </Text>
//               <Text style={styles.planInfo}>
//                 <Text style={styles.highlight}>Nationality: </Text>
//                 <Text>{nationality}</Text>
//               </Text>
//               <Text style={styles.planInfo}>
//                 <Text style={styles.highlight}>Diet Type: </Text>
//                 <Text>{dietType}</Text>
//               </Text>
//               <Text style={styles.planInfo}>
//                 <Text style={styles.highlight}>Meals per Day: </Text>
//                 <Text>{numMeals}</Text>
//               </Text>
//               <Text style={styles.planInfo}>
//                 <Text style={styles.highlight}>Daily Calories: </Text>
//                 <Text>{targetCalories} kcal</Text>
//               </Text>
//               <Text style={styles.planInfo}>
//                 <Text style={styles.highlight}>Weekly Total: </Text>
//                 <Text>{totalWeeklyCalories} kcal</Text>
//               </Text>
//               <Text style={styles.planDescription}>{motivationalQuote}</Text>
//             </View>
//           </LinearGradient>

//           <Text style={styles.sectionTitle}>Weekly Meal Schedule</Text>
//           <FlatList
//             data={dietData}
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
//   container: { flex: 1 },
//   scrollContent: { paddingBottom: 30, paddingTop: 10 },
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
//   backButton: { marginRight: 15 },
//   saveButton: { marginLeft: 15 },
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
//   planTitle: { fontSize: 20, fontWeight: '700', color: '#FFFFFF', textAlign: 'center' },
//   overviewContent: { padding: 20 },
//   planInfo: { fontSize: 16, color: '#34C759', marginBottom: 8 },
//   highlight: { fontWeight: '700', color: '#1F2937' },
//   planDescription: {
//     fontSize: 14,
//     fontStyle: 'italic',
//     color: '#4A5568',
//     marginTop: 10,
//     textAlign: 'center',
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
//   scheduleList: { paddingHorizontal: 20 },
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
//   dayTitle: { fontSize: 18, fontWeight: '700', color: '#FFFFFF', textAlign: 'center' },
//   mealCard: { paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#E2E8F0' },
//   mealHeader: {
//     paddingVertical: 8,
//     paddingHorizontal: 15,
//     marginHorizontal: 10,
//     borderRadius: 8,
//   },
//   mealTitle: { fontSize: 16, fontWeight: '600', color: '#FFFFFF', textAlign: 'center' },
//   foodCard: { padding: 10, paddingLeft: 20 },
//   foodName: { fontSize: 14, fontWeight: '700', color: '#1F2937', marginBottom: 3 },
//   foodDetails: { fontSize: 12, color: '#718096', marginBottom: 2 },
//   foodNotes: { fontSize: 12, color: '#718096', fontStyle: 'italic' },
//   dailyCalories: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#1F2937',
//     textAlign: 'right',
//     padding: 10,
//   },
//   errorText: { fontSize: 18, color: '#FFFFFF', textAlign: 'center', marginTop: 50, fontWeight: '500' },
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

export default function DietPlanResponse({ route, navigation }) {
  const { dietData, totalWeeklyCalories, goal, gender, nationality, dietType, numMeals, targetCalories } = route.params || {};
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
    console.log('DietPlanResponse dietData:', dietData);
  }, [dietData]);

  const saveDietPlan = async () => {
    try {
      const dietPlan = {
        plan: dietData || [], // Changed from dietData to plan
        totalWeeklyCalories,
        goal,
        gender,
        nationality,
        dietType,
        numMeals,
        targetCalories,
      };
      await AsyncStorage.setItem('dietPlan', JSON.stringify(dietPlan));
      console.log('Diet plan saved:', dietPlan);
      alert('Diet plan saved successfully!');
    } catch (error) {
      console.error('Error saving diet plan:', error);
      alert('Failed to save diet plan.');
    }
  };

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

  const renderDayItem = ({ item }) => (
    <LinearGradient colors={['#FFFFFF', '#F5F7FA']} style={styles.dayCard}>
      <LinearGradient colors={['#FF6F61', '#FF9F1C']} style={styles.dayHeader}>
        <Text style={styles.dayTitle}>{item.day}</Text>
      </LinearGradient>
      <FlatList
        data={item.meals}
        renderItem={renderMealItem}
        keyExtractor={(meal) => `meal-${meal.meal}`}
        scrollEnabled={false}
      />
      <Text style={styles.dailyCalories}>
        <Text style={styles.highlight}>Daily Total: </Text>
        {item.dailyCalories} kcal
      </Text>
    </LinearGradient>
  );

  if (!dietData || !Array.isArray(dietData)) {
    console.log('No valid diet plan data:', { dietData });
    return (
      <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
        <Text style={styles.errorText}>No diet plan available.</Text>
      </LinearGradient>
    );
  }

  const motivationalQuote = "Fuel your week with purpose – every meal is a step toward your goal!";

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
            <Text style={styles.headerTitle}>Weekly Diet Plan</Text>
            <TouchableOpacity onPress={saveDietPlan} style={styles.saveButton}>
              <Ionicons name="save-outline" size={30} color="#FFFFFF" />
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient colors={['#FFFFFF', '#F5F7FA']} style={styles.overviewCard}>
            <LinearGradient colors={['#FF6F61', '#FF9F1C']} style={styles.overviewHeader}>
              <Text style={styles.planTitle}>Weekly Diet Overview</Text>
            </LinearGradient>
            <View style={styles.overviewContent}>
              <Text style={styles.planInfo}>
                <Text style={styles.highlight}>Goal: </Text>
                <Text>{goal || 'N/A'}</Text>
              </Text>
              <Text style={styles.planInfo}>
                <Text style={styles.highlight}>Gender: </Text>
                <Text>{gender || 'N/A'}</Text>
              </Text>
              <Text style={styles.planInfo}>
                <Text style={styles.highlight}>Nationality: </Text>
                <Text>{nationality || 'N/A'}</Text>
              </Text>
              <Text style={styles.planInfo}>
                <Text style={styles.highlight}>Diet Type: </Text>
                <Text>{dietType || 'N/A'}</Text>
              </Text>
              <Text style={styles.planInfo}>
                <Text style={styles.highlight}>Meals per Day: </Text>
                <Text>{numMeals || 'N/A'}</Text>
              </Text>
              <Text style={styles.planInfo}>
                <Text style={styles.highlight}>Daily Calories: </Text>
                <Text>{targetCalories ? `${targetCalories} kcal` : 'N/A'}</Text>
              </Text>
              <Text style={styles.planInfo}>
                <Text style={styles.highlight}>Weekly Total: </Text>
                <Text>{totalWeeklyCalories ? `${totalWeeklyCalories} kcal` : 'N/A'}</Text>
              </Text>
              <Text style={styles.planDescription}>{motivationalQuote}</Text>
            </View>
          </LinearGradient>

          <Text style={styles.sectionTitle}>Weekly Meal Schedule</Text>
          <FlatList
            data={dietData}
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
  container: { flex: 1 },
  scrollContent: { paddingBottom: 30, paddingTop: 10 },
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
  backButton: { marginRight: 15 },
  saveButton: { marginLeft: 15 },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
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
  planTitle: { fontSize: 20, fontWeight: '700', color: '#FFFFFF', textAlign: 'center' },
  overviewContent: { padding: 20 },
  planInfo: { fontSize: 16, color: '#34C759', marginBottom: 8 },
  highlight: { fontWeight: '700', color: '#1F2937' },
  planDescription: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#4A5568',
    marginTop: 10,
    textAlign: 'center',
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
  scheduleList: { paddingHorizontal: 20 },
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
  dayTitle: { fontSize: 18, fontWeight: '700', color: '#FFFFFF', textAlign: 'center' },
  mealCard: { paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#E2E8F0' },
  mealHeader: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  mealTitle: { fontSize: 16, fontWeight: '600', color: '#FFFFFF', textAlign: 'center' },
  foodCard: { padding: 10, paddingLeft: 20 },
  foodName: { fontSize: 14, fontWeight: '700', color: '#1F2937', marginBottom: 3 },
  foodDetails: { fontSize: 12, color: '#718096', marginBottom: 2 },
  foodNotes: { fontSize: 12, color: '#718096', fontStyle: 'italic' },
  dailyCalories: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'right',
    padding: 10,
  },
  errorText: { fontSize: 18, color: '#FFFFFF', textAlign: 'center', marginTop: 50, fontWeight: '500' },
});