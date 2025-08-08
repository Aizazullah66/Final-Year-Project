
// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Animated,
//   StatusBar,
//   Image,
//   Dimensions,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { Accelerometer } from 'expo-sensors';
// import { Circle } from 'react-native-progress';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { BlurView } from 'expo-blur';

// const { width } = Dimensions.get('window');
// const CARD_WIDTH = width * 0.85;

// export default function UserDashboard({ navigation }) {
//   const [stepCount, setStepCount] = useState(0);
//   const [subscription, setSubscription] = useState(null);
//   const [x, setX] = useState(0);
//   const [y, setY] = useState(0);
//   const [z, setZ] = useState(0);
//   const [caloriesBurned, setCaloriesBurned] = useState(0);
//   const [goal] = useState(10000);
//   const [isTracking, setIsTracking] = useState(false);
//   const [isAccelerometerAvailable, setIsAccelerometerAvailable] = useState('checking');
//   const [weeklyData, setWeeklyData] = useState({});
//   const [userName, setUserName] = useState('Loading...');
//   const [userData, setUserData] = useState(null);
//   const [activeTime, setActiveTime] = useState(0); // New state for active time

//   const scaleAnim = useState(new Animated.Value(1))[0];
//   const fadeAnim = useState(new Animated.Value(0))[0];
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const scrollY = useRef(new Animated.Value(0)).current;
//   const THRESHOLD = 1.3;
//   const REST_THRESHOLD = 0.2;
//   const DETECTION_INTERVAL = 333;
//   const [lastMagnitude, setLastMagnitude] = useState(0);
//   const [isMoving, setIsMoving] = useState(false);

//   const stepCountRef = useRef(0);
//   const prevStepCountRef = useRef(0);
//   const caloriesBurnedRef = useRef(0);
//   const activeTimeRef = useRef(0);
//   const weeklyDataRef = useRef({});
//   const saveTimeoutRef = useRef(null);
//   const lastStepTimeRef = useRef(0);

//   const auth = getAuth();
//   const db = getFirestore();

//   const getCurrentDate = () => new Date().toISOString().split('T')[0];
//   const formattedDate = new Date().toLocaleDateString('en-US', { 
//     weekday: 'long', 
//     month: 'long', 
//     day: 'numeric' 
//   });

//   const saveWeeklyData = async (data) => {
//     try {
//       await AsyncStorage.setItem('weeklyStepData', JSON.stringify(data));
//     } catch (e) {
//       console.error('Failed to save weekly data:', e);
//     }
//   };

//   const loadWeeklyData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('weeklyStepData');
//       if (value !== null) {
//         const data = JSON.parse(value);
//         const currentDate = getCurrentDate();
//         const oneWeekAgo = new Date();
//         oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

//         const filteredData = Object.keys(data).reduce((acc, date) => {
//           if (new Date(date) >= oneWeekAgo) {
//             acc[date] = data[date];
//           }
//           return acc;
//         }, {});

//         weeklyDataRef.current = filteredData;
//         setWeeklyData(filteredData);

//         if (filteredData[currentDate]) {
//           stepCountRef.current = filteredData[currentDate].steps;
//           caloriesBurnedRef.current = filteredData[currentDate].calories;
//           activeTimeRef.current = filteredData[currentDate].activeTime || 0;
//           prevStepCountRef.current = filteredData[currentDate].steps;
//           setStepCount(filteredData[currentDate].steps);
//           setCaloriesBurned(filteredData[currentDate].calories);
//           setActiveTime(filteredData[currentDate].activeTime || 0);
//         }
//       }
//     } catch (e) {
//       console.error('Failed to load weekly data:', e);
//     }
//   };

//   const debounceSave = (data) => {
//     if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
//     saveTimeoutRef.current = setTimeout(() => saveWeeklyData(data), 30000);
//   };

//   const calculateMagnitude = (x, y, z) => Math.sqrt(x * x + y * y + z * z);

//   const animateCircle = () => {
//     Animated.sequence([
//       Animated.timing(scaleAnim, { toValue: 1.15, duration: 150, useNativeDriver: true }),
//       Animated.spring(scaleAnim, { toValue: 0.95, friction: 4, tension: 40, useNativeDriver: true }),
//       Animated.timing(scaleAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
//     ]).start();
//   };

//   const detectStep = (magnitude, currentTime) => {
//     if (currentTime - lastStepTimeRef.current < DETECTION_INTERVAL) {
//       setLastMagnitude(magnitude);
//       return;
//     }

//     if (magnitude > REST_THRESHOLD) {
//       if (!isMoving && Math.abs(magnitude - lastMagnitude) > THRESHOLD) {
//         // Update steps
//         stepCountRef.current += 1;
        
//         // Update calories (more sophisticated calculation)
//         caloriesBurnedRef.current = stepCountRef.current * 0.045;
        
//         // Update active time in minutes (roughly 100 steps = 1 minute of activity)
//         activeTimeRef.current = Math.round(stepCountRef.current / 100);

//         const currentDate = getCurrentDate();
//         weeklyDataRef.current = {
//           ...weeklyDataRef.current,
//           [currentDate]: { 
//             steps: stepCountRef.current, 
//             calories: caloriesBurnedRef.current,
//             activeTime: activeTimeRef.current
//           },
//         };

//         setStepCount(stepCountRef.current);
//         setCaloriesBurned(caloriesBurnedRef.current);
//         setActiveTime(activeTimeRef.current);
//         setWeeklyData(weeklyDataRef.current);

//         debounceSave(weeklyDataRef.current);
//         animateCircle();
//         setIsMoving(true);
//         lastStepTimeRef.current = currentTime;
//         prevStepCountRef.current = stepCountRef.current;
//       }
//     } else {
//       setIsMoving(false);
//     }
//     setLastMagnitude(magnitude);
//   };

//   const subscribe = async () => {
//     const isAvailable = await Accelerometer.isAvailableAsync();
//     setIsAccelerometerAvailable(String(isAvailable));

//     if (!isAvailable) {
//       alert('Error: Accelerometer is not available on this device.');
//       return;
//     }

//     const { status } = await Accelerometer.requestPermissionsAsync();
//     if (status !== 'granted') {
//       alert('Permission Denied: Accelerometer requires motion permission.');
//       setIsAccelerometerAvailable('Permission Denied');
//       return;
//     }

//     Accelerometer.setUpdateInterval(100);
//     const listener = Accelerometer.addListener(data => {
//       setX(data.x);
//       setY(data.y);
//       setZ(data.z);
//       const magnitude = calculateMagnitude(data.x, data.y, data.z);
//       detectStep(magnitude, Date.now());
//     });

//     setSubscription(listener);
//     setIsTracking(true);
//   };

//   const unsubscribe = () => {
//     if (subscription) {
//       subscription.remove();
//       setSubscription(null);
//       setIsTracking(false);
//     }
//   };

//   const resetSteps = async () => {
//     const currentDate = getCurrentDate();
//     stepCountRef.current = 0;
//     prevStepCountRef.current = 0;
//     caloriesBurnedRef.current = 0;
//     activeTimeRef.current = 0;
//     weeklyDataRef.current = {
//       ...weeklyDataRef.current,
//       [currentDate]: { steps: 0, calories: 0, activeTime: 0 },
//     };

//     setStepCount(0);
//     setCaloriesBurned(0);
//     setActiveTime(0);
//     setWeeklyData(weeklyDataRef.current);
//     await saveWeeklyData(weeklyDataRef.current);
    
//     // Add a nice animation for feedback
//     Animated.sequence([
//       Animated.timing(scaleAnim, { toValue: 0.8, duration: 150, useNativeDriver: true }),
//       Animated.spring(scaleAnim, { toValue: 1, friction: 4, tension: 40, useNativeDriver: true }),
//     ]).start();
//   };

//   useEffect(() => {
//     const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         const userEmail = user.email;
//         try {
//           const usersRef = collection(db, 'users');
//           const q = query(usersRef, where('email', '==', userEmail));
//           const querySnapshot = await getDocs(q);

//           if (!querySnapshot.empty) {
//             const userDoc = querySnapshot.docs[0];
//             const userDataFromDb = userDoc.data();
//             const fullUserData = {
//               id: userDoc.id,
//               name: userDataFromDb.name || 'User',
//               email: userEmail,
//               ...userDataFromDb,
//             };
//             setUserName(fullUserData.name);
//             setUserData(fullUserData);
//           } else {
//             setUserName('User');
//             setUserData({ name: 'User', email: userEmail });
//           }
//         } catch (error) {
//           console.error('Error fetching user name from Firestore:', error);
//           setUserName('User');
//           setUserData({ name: 'User', email: userEmail });
//         }
//       } else {
//         setUserName('Not logged in');
//         setUserData(null);
//       }
//     });

//     loadWeeklyData();
//     subscribe();

//     // Animated entrance
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start();

//     return () => {
//       unsubscribeAuth();
//       unsubscribe();
//       if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
//     };
//   }, []);

//   const progress = Math.min(stepCount / goal, 1);
//   const calorieGoal = 500;
//   const calorieProgress = Math.min(caloriesBurned / calorieGoal, 1);
//   const activeTimeGoal = 60; // 60 minutes goal
//   const activeTimeProgress = Math.min(activeTime / activeTimeGoal, 1);

//   // Animation for scroll effects
//   const headerTranslateY = scrollY.interpolate({
//     inputRange: [0, 100],
//     outputRange: [0, -20],
//     extrapolate: 'clamp',
//   });

//   const headerScale = scrollY.interpolate({
//     inputRange: [0, 100],
//     outputRange: [1, 0.95],
//     extrapolate: 'clamp',
//   });

//   const headerOpacity = scrollY.interpolate({
//     inputRange: [0, 60, 90],
//     outputRange: [1, 0.6, 0],
//     extrapolate: 'clamp',
//   });

//   const featuresData = [
//     { 
//       id: 'workout', 
//       title: 'Workout', 
//       icon: 'barbell', 
//       colors: ['#4A00E0', '#8E2DE2'], 
//       screen: 'WorkoutVideos',
//       description: 'Find guided workouts'
//     },
//     { 
//       id: 'chat', 
//       title: 'Live Chat', 
//       icon: 'chatbubbles', 
//       colors: ['#11998e', '#38ef7d'], 
//       screen: 'LiveChat',
//       description: 'Connect with trainers'
//     },
//     { 
//       id: 'shop', 
//       title: 'Shop', 
//       icon: 'cart', 
//       colors: ['#FF416C', '#FF4B2B'], 
//       screen: 'ShopProducts',
//       description: 'Health products & gear'
//     },
//     { 
//       id: 'plan', 
//       title: 'Workout Plan', 
//       icon: 'fitness', 
//       colors: ['#0072ff', '#00c6ff'], 
//       screen: 'WorkoutPlanScreen',
//       description: 'Your custom plan'
//     },
//     { 
//       id: 'diet', 
//       title: 'Diet Plan', 
//       icon: 'nutrition', 
//       colors: ['#FC5C7D', '#6A82FB'], 
//       screen: 'DietPlanScreen',
//       description: 'Nutrition guidance'
//     },
//     { 
//       id: 'records', 
//       title: 'Records', 
//       icon: 'stats-chart', 
//       colors: ['#8A2387', '#E94057'], 
//       screen: 'ExerciseRecords',
//       description: 'Track your progress'
//     },
//   ];

//   // Create button animation scales for each feature
//   const featureScales = featuresData.map(() => useState(new Animated.Value(1))[0]);

//   const handlePressIn = (scale) => {
//     Animated.spring(scale, {
//       toValue: 0.92,
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

//   const buttonScale1 = useState(new Animated.Value(1))[0];
//   const buttonScale2 = useState(new Animated.Value(1))[0];

//   return (
//     <View style={styles.container}>
//       <StatusBar translucent backgroundColor="transparent" />
      
//       {/* Dynamic background gradient */}
//       <LinearGradient
//         colors={['#0F2027', '#203A43', '#2C5364']}
//         style={StyleSheet.absoluteFillObject}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 1 }}
//       />

//       <Animated.View style={{ opacity: fadeAnim, flex: 1 }}>
//         <Animated.ScrollView
//           contentContainerStyle={styles.scrollContent}
//           onScroll={Animated.event(
//             [{ nativeEvent: { contentOffset: { y: scrollY } } }], 
//             { useNativeDriver: true }
//           )}
//           scrollEventThrottle={16}
//           showsVerticalScrollIndicator={false}
//         >
//           {/* Header Section */}
//           <Animated.View style={[
//             styles.headerContainer,
//             { 
//               transform: [
//                 { translateY: headerTranslateY },
//                 { scale: headerScale }
//               ],
//               opacity: headerOpacity
//             }
//           ]}>
//             <BlurView intensity={90} tint="dark" style={styles.blurContainer}>
//               <View style={styles.headerContent}>
//                 <View>
//                   <Text style={styles.dateText}>{formattedDate}</Text>
//                   <Text style={styles.greeting}>Hello, {userName}</Text>
//                 </View>
//                 <TouchableOpacity onPress={() => navigation.navigate('Profile', { userData })}>
//                   <LinearGradient 
//                     colors={['#FF416C', '#FF4B2B']} 
//                     style={styles.profileButton}
//                   >
//                     <Ionicons name="person" size={24} color="#FFF" />
//                   </LinearGradient>
//                 </TouchableOpacity>
//               </View>
//             </BlurView>
//           </Animated.View>

//           {/* Today's Activity Summary Card */}
//           <View style={styles.summaryContainer}>
//             <LinearGradient
//               colors={['rgba(255,255,255,0.15)', 'rgba(255,255,255,0.05)']}
//               style={styles.summaryCard}
//               start={{ x: 0, y: 0 }}
//               end={{ x: 1, y: 1 }}
//             >
//               <Text style={styles.summaryTitle}>Today's Activity</Text>
              
//               {/* Steps Display */}
//               <View style={styles.metricRow}>
//                 <Animated.View style={[styles.circleContainer, { transform: [{ scale: scaleAnim }] }]}>
//                   <Circle
//                     progress={progress}
//                     size={90}
//                     thickness={8}
//                     color="#5E72E4"
//                     unfilledColor="rgba(255,255,255,0.2)"
//                     borderWidth={0}
//                     strokeCap="round"
//                   />
//                   <View style={styles.circleContent}>
//                     <Text style={styles.circleValue}>{stepCount}</Text>
//                     <Text style={styles.circleLabel}>steps</Text>
//                   </View>
//                 </Animated.View>
                
//                 <View style={styles.metricsDetail}>
//                   <View style={styles.progressDetail}>
//                     <View style={styles.progressLabelContainer}>
//                       <Ionicons name="footsteps" size={16} color="#5E72E4" />
//                       <Text style={styles.progressLabel}>Daily Goal</Text>
//                     </View>
//                     <Text style={styles.progressValue}>{Math.round(progress * 100)}%</Text>
//                   </View>
                  
//                   <View style={styles.progressBarContainer}>
//                     <LinearGradient
//                       colors={['#5E72E4', '#825EE4']}
//                       style={[styles.progressFill, { width: `${progress * 100}%` }]}
//                       start={{ x: 0, y: 0 }}
//                       end={{ x: 1, y: 0 }}
//                     />
//                   </View>
                  
//                   <Text style={styles.goalText}>{stepCount} / {goal} steps</Text>
//                 </View>
//               </View>
              
//               {/* Additional Metrics */}
//               <View style={styles.additionalMetrics}>
//                 <View style={styles.metricItem}>
//                   <LinearGradient 
//                     colors={['#FF416C', '#FF4B2B']} 
//                     style={styles.metricIcon}
//                   >
//                     <Ionicons name="flame" size={18} color="#FFF" />
//                   </LinearGradient>
//                   <View>
//                     <Text style={styles.metricValue}>{caloriesBurned.toFixed(0)}</Text>
//                     <Text style={styles.metricLabel}>Calories</Text>
//                   </View>
//                   <View style={styles.miniProgressContainer}>
//                     <LinearGradient
//                       colors={['#FF416C', '#FF4B2B']}
//                       style={[styles.miniProgressFill, { width: `${calorieProgress * 100}%` }]}
//                     />
//                   </View>
//                 </View>
                
//                 <View style={styles.metricDivider} />
                
//                 <View style={styles.metricItem}>
//                   <LinearGradient 
//                     colors={['#11998e', '#38ef7d']} 
//                     style={styles.metricIcon}
//                   >
//                     <Ionicons name="time" size={18} color="#FFF" />
//                   </LinearGradient>
//                   <View>
//                     <Text style={styles.metricValue}>{activeTime}</Text>
//                     <Text style={styles.metricLabel}>Active Min</Text>
//                   </View>
//                   <View style={styles.miniProgressContainer}>
//                     <LinearGradient
//                       colors={['#11998e', '#38ef7d']}
//                       style={[styles.miniProgressFill, { width: `${activeTimeProgress * 100}%` }]}
//                     />
//                   </View>
//                 </View>
//               </View>
              
//               {/* Action Buttons */}
//               <View style={styles.actionButtonsContainer}>
//                 <TouchableOpacity
//                   onPressIn={() => handlePressIn(buttonScale1)}
//                   onPressOut={() => handlePressOut(buttonScale1)}
//                   onPress={resetSteps}
//                   style={styles.actionButtonWrapper}
//                 >
//                   <Animated.View style={[styles.actionButtonInner, { transform: [{ scale: buttonScale1 }] }]}>
//                     <LinearGradient
//                       colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.1)']}
//                       style={styles.actionButton}
//                     >
//                       <Ionicons name="refresh" size={16} color="#FFF" />
//                       <Text style={styles.actionButtonText}>Reset</Text>
//                     </LinearGradient>
//                   </Animated.View>
//                 </TouchableOpacity>
                
//                 <TouchableOpacity
//                   onPressIn={() => handlePressIn(buttonScale2)}
//                   onPressOut={() => handlePressOut(buttonScale2)}
//                   onPress={() => navigation.navigate('DetailsScreen', { weeklyData })}
//                   style={styles.actionButtonWrapper}
//                 >
//                   <Animated.View style={[styles.actionButtonInner, { transform: [{ scale: buttonScale2 }] }]}>
//                     <LinearGradient
//                       colors={['#5E72E4', '#825EE4']}
//                       style={styles.actionButton}
//                     >
//                       <Ionicons name="stats-chart" size={16} color="#FFF" />
//                       <Text style={styles.actionButtonText}>Details</Text>
//                     </LinearGradient>
//                   </Animated.View>
//                 </TouchableOpacity>
//               </View>
//             </LinearGradient>
//           </View>
          
//           {/* Features Section */}
//           <View style={styles.sectionContainer}>
//             <Text style={styles.sectionTitle}>Features</Text>
            
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.featuresScrollContainer}
//               onScroll={Animated.event(
//                 [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//                 { useNativeDriver: false }
//               )}
//               scrollEventThrottle={16}
//               decelerationRate="fast"
//               snapToInterval={CARD_WIDTH + 15}
//               snapToAlignment="center"
//             >
//               {featuresData.map((item, index) => {
//                 const inputRange = [
//                   (index - 1) * (CARD_WIDTH + 15),
//                   index * (CARD_WIDTH + 15),
//                   (index + 1) * (CARD_WIDTH + 15)
//                 ];
                
//                 const scale = scrollX.interpolate({
//                   inputRange,
//                   outputRange: [0.92, 1, 0.92],
//                   extrapolate: 'clamp'
//                 });
                
//                 return (
//                   <TouchableOpacity
//                     key={item.id}
//                     onPressIn={() => handlePressIn(featureScales[index])}
//                     onPressOut={() => handlePressOut(featureScales[index])}
//                     onPress={() => navigation.navigate(item.screen, { userData })}
//                     activeOpacity={0.9}
//                   >
//                     <Animated.View 
//                       style={[
//                         styles.featureCard,
//                         { transform: [{ scale: featureScales[index] }] }
//                       ]}
//                     >
//                       <LinearGradient
//                         colors={item.colors}
//                         style={styles.featureGradient}
//                         start={{ x: 0, y: 0 }}
//                         end={{ x: 1, y: 1 }}
//                       >
//                         <View style={styles.featureContent}>
//                           <View style={styles.featureIconContainer}>
//                             <Ionicons name={item.icon} size={28} color="#FFF" />
//                           </View>
//                           <Text style={styles.featureTitle}>{item.title}</Text>
//                           <Text style={styles.featureDescription}>{item.description}</Text>
//                         </View>
//                       </LinearGradient>
//                     </Animated.View>
//                   </TouchableOpacity>
//                 );
//               })}
//             </ScrollView>
//           </View>
          
//           {/* Quick Access Section */}
//           <View style={styles.quickAccessSection}>
//             <Text style={styles.sectionTitle}>Quick Access</Text>
            
//             <View style={styles.quickGrid}>
//               {featuresData.slice(0, 4).map((item, index) => (
//                 <TouchableOpacity
//                   key={`quick-${item.id}`}
//                   style={styles.quickItem}
//                   onPress={() => navigation.navigate(item.screen, { userData })}
//                 >
//                   <LinearGradient
//                     colors={item.colors}
//                     style={styles.quickItemIcon}
//                   >
//                     <Ionicons name={item.icon} size={22} color="#FFF" />
//                   </LinearGradient>
//                   <Text style={styles.quickItemText}>{item.title}</Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </View>
          
//           {/* Error Message if needed */}
//           {isAccelerometerAvailable !== 'true' && (
//             <View style={styles.errorContainer}>
//               <LinearGradient
//                 colors={['rgba(239, 68, 68, 0.2)', 'rgba(239, 68, 68, 0.1)']}
//                 style={styles.errorCard}
//               >
//                 <Ionicons name="warning" size={20} color="#EF4444" />
//                 <Text style={styles.errorText}>
//                   Accelerometer unavailable: {isAccelerometerAvailable}
//                 </Text>
//               </LinearGradient>
//             </View>
//           )}
          
//           {/* Bottom Spacing */}
//           <View style={{ height: 20 }} />
//         </Animated.ScrollView>
//       </Animated.View>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollContent: {
//     paddingTop: StatusBar.currentHeight || 40,
//     paddingBottom: 30,
//   },
//   headerContainer: {
//     marginHorizontal: 20,
//     marginBottom: 20,
//     borderRadius: 20,
//     overflow: 'hidden',
//   },
//   blurContainer: {
//     borderRadius: 20,
//     overflow: 'hidden',
//   },
//   headerContent: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 20,
//   },
//   dateText: {
//     fontSize: 14,
//     color: 'rgba(255, 255, 255, 0.7)',
//     marginBottom: 4,
//   },
//   greeting: {
//     fontSize: 26,
//     fontWeight: '700',
//     color: '#FFFFFF',
//   },
//   profileButton: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   summaryContainer: {
//     paddingHorizontal: 20,
//     marginBottom: 30,
//   },
//   summaryCard: {
//     borderRadius: 22,
//     padding: 20,
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   summaryTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     marginBottom: 20,
//   },
//   metricRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   circleContainer: {
//     marginRight: 20,
//   },
//   circleContent: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   circleValue: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#FFFFFF',
//   },
//   circleLabel: {
//     fontSize: 12,
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   metricsDetail: {
//     flex: 1,
//   },
//   progressDetail: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   progressLabelContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   progressLabel: {
//     fontSize: 14,
//     color: '#FFFFFF',
//     marginLeft: 6,
//   },
//   progressValue: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#5E72E4',
//   },
//   progressBarContainer: {
//     height: 8,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 4,
//     marginBottom: 8,
//     overflow: 'hidden',
//   },
//   progressFill: {
//     height: '100%',
//     borderRadius: 4,
//   },
//   goalText: {
//     fontSize: 12,
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   additionalMetrics: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//     padding: 15,
//     backgroundColor: 'rgba(0, 0, 0, 0.2)',
//     borderRadius: 15,
//   },
//   metricItem: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   metricIcon: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   metricValue: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#FFFFFF',
//   },
//   metricLabel: {
//     fontSize: 12,
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   metricDivider: {
//     width: 1,
//     height: '80%',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     marginHorizontal: 15,
//   },
//   miniProgressContainer: {
//     position: 'absolute',
//     bottom: -8,
//     left: 0,
//     right: 0,
//     height: 3,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 1.5,
//     overflow: 'hidden',
//   },
//   miniProgressFill: {
//     height: '100%',
//     borderRadius: 1.5,
//   },
//   actionButtonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   actionButtonWrapper: {
//     flex: 1,
//     marginHorizontal: 5,
//   },
//   actionButtonInner: {
//     width: '100%',
//   },
//   actionButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     borderRadius: 12,
//   },
//   actionButtonText: {
//     color: '#FFFFFF',
//     fontWeight: '600',
//     fontSize: 14,
//     marginLeft: 6,
//   },
//   sectionContainer: {
//     marginBottom: 30,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     marginLeft: 20,
//     marginBottom: 15,
//   },
//   featuresScrollContainer: {
//     paddingLeft: 20,
//     paddingRight: 5,
//   },
//   featureCard: {
//     width: CARD_WIDTH,
//     height: 160,
//     borderRadius: 20,
//     marginRight: 15,
//     overflow: 'hidden',
//   },
//   featureGradient: {
//     flex: 1,
//     borderRadius: 20,
//     padding: 20,
//   },
//   featureContent: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   featureIconContainer: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   featureTitle: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     marginBottom: 6,
//   },
//   featureDescription: {
//     fontSize: 14,
//     color: 'rgba(255, 255, 255, 0.8)',
//   },
//   quickAccessSection: {
//     marginBottom: 30,
//     paddingHorizontal: 20,
//   },
//   quickGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   quickItem: {
//     width: '48%',
//     backgroundColor: 'rgba(255, 255, 255, 0.08)',
//     borderRadius: 16,
//     padding: 16,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   quickItemIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   quickItemText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
//   errorContainer: {
//     paddingHorizontal: 20,
//     marginBottom: 20,
//   },
//   errorCard: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: 'rgba(239, 68, 68, 0.3)',
//   },
//   errorText: {
//     color: '#EF4444',
//     fontSize: 14,
//     marginLeft: 10,
//   },
// });



// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Animated,
//   StatusBar,
//   Image,
//   Dimensions,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { Accelerometer } from 'expo-sensors';
// import { Circle } from 'react-native-progress';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { BlurView } from 'expo-blur';

// const { width } = Dimensions.get('window');
// const CARD_WIDTH = width * 0.85;

// export default function UserDashboard({ navigation }) {
//   const [stepCount, setStepCount] = useState(0);
//   const [subscription, setSubscription] = useState(null);
//   const [x, setX] = useState(0);
//   const [y, setY] = useState(0);
//   const [z, setZ] = useState(0);
//   const [caloriesBurned, setCaloriesBurned] = useState(0);
//   const [goal] = useState(10000);
//   const [isTracking, setIsTracking] = useState(false);
//   const [isAccelerometerAvailable, setIsAccelerometerAvailable] = useState('checking');
//   const [weeklyData, setWeeklyData] = useState({});
//   const [userName, setUserName] = useState('Loading...');
//   const [userData, setUserData] = useState(null);
//   const [activeTime, setActiveTime] = useState(0); // New state for active time

//   const scaleAnim = useState(new Animated.Value(1))[0];
//   const fadeAnim = useState(new Animated.Value(0))[0];
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const scrollY = useRef(new Animated.Value(0)).current;
//   const THRESHOLD = 1.3;
//   const REST_THRESHOLD = 0.2;
//   const DETECTION_INTERVAL = 333;
//   const [lastMagnitude, setLastMagnitude] = useState(0);
//   const [isMoving, setIsMoving] = useState(false);

//   const stepCountRef = useRef(0);
//   const prevStepCountRef = useRef(0);
//   const caloriesBurnedRef = useRef(0);
//   const activeTimeRef = useRef(0);
//   const weeklyDataRef = useRef({});
//   const saveTimeoutRef = useRef(null);
//   const lastStepTimeRef = useRef(0);

//   const auth = getAuth();
//   const db = getFirestore();

//   const getCurrentDate = () => new Date().toISOString().split('T')[0];
//   const formattedDate = new Date().toLocaleDateString('en-US', { 
//     weekday: 'long', 
//     month: 'long', 
//     day: 'numeric' 
//   });

//   const saveWeeklyData = async (data) => {
//     try {
//       await AsyncStorage.setItem('weeklyStepData', JSON.stringify(data));
//     } catch (e) {
//       console.error('Failed to save weekly data:', e);
//     }
//   };

//   const loadWeeklyData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('weeklyStepData');
//       if (value !== null) {
//         const data = JSON.parse(value);
//         const currentDate = getCurrentDate();
//         const oneWeekAgo = new Date();
//         oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

//         const filteredData = Object.keys(data).reduce((acc, date) => {
//           if (new Date(date) >= oneWeekAgo) {
//             acc[date] = data[date];
//           }
//           return acc;
//         }, {});

//         weeklyDataRef.current = filteredData;
//         setWeeklyData(filteredData);

//         if (filteredData[currentDate]) {
//           stepCountRef.current = filteredData[currentDate].steps;
//           caloriesBurnedRef.current = filteredData[currentDate].calories;
//           activeTimeRef.current = filteredData[currentDate].activeTime || 0;
//           prevStepCountRef.current = filteredData[currentDate].steps;
//           setStepCount(filteredData[currentDate].steps);
//           setCaloriesBurned(filteredData[currentDate].calories);
//           setActiveTime(filteredData[currentDate].activeTime || 0);
//         }
//       }
//     } catch (e) {
//       console.error('Failed to load weekly data:', e);
//     }
//   };

//   const debounceSave = (data) => {
//     if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
//     saveTimeoutRef.current = setTimeout(() => saveWeeklyData(data), 30000);
//   };

//   const calculateMagnitude = (x, y, z) => Math.sqrt(x * x + y * y + z * z);

//   const animateCircle = () => {
//     Animated.sequence([
//       Animated.timing(scaleAnim, { toValue: 1.15, duration: 150, useNativeDriver: true }),
//       Animated.spring(scaleAnim, { toValue: 0.95, friction: 4, tension: 40, useNativeDriver: true }),
//       Animated.timing(scaleAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
//     ]).start();
//   };

//   const detectStep = (magnitude, currentTime) => {
//     if (currentTime - lastStepTimeRef.current < DETECTION_INTERVAL) {
//       setLastMagnitude(magnitude);
//       return;
//     }

//     if (magnitude > REST_THRESHOLD) {
//       if (!isMoving && Math.abs(magnitude - lastMagnitude) > THRESHOLD) {
//         // Update steps
//         stepCountRef.current += 1;
        
//         // Update calories (more sophisticated calculation)
//         caloriesBurnedRef.current = stepCountRef.current * 0.045;
        
//         // Update active time in minutes (roughly 100 steps = 1 minute of activity)
//         activeTimeRef.current = Math.round(stepCountRef.current / 100);

//         const currentDate = getCurrentDate();
//         weeklyDataRef.current = {
//           ...weeklyDataRef.current,
//           [currentDate]: { 
//             steps: stepCountRef.current, 
//             calories: caloriesBurnedRef.current,
//             activeTime: activeTimeRef.current
//           },
//         };

//         setStepCount(stepCountRef.current);
//         setCaloriesBurned(caloriesBurnedRef.current);
//         setActiveTime(activeTimeRef.current);
//         setWeeklyData(weeklyDataRef.current);

//         debounceSave(weeklyDataRef.current);
//         animateCircle();
//         setIsMoving(true);
//         lastStepTimeRef.current = currentTime;
//         prevStepCountRef.current = stepCountRef.current;
//       }
//     } else {
//       setIsMoving(false);
//     }
//     setLastMagnitude(magnitude);
//   };

//   const subscribe = async () => {
//     const isAvailable = await Accelerometer.isAvailableAsync();
//     setIsAccelerometerAvailable(String(isAvailable));

//     if (!isAvailable) {
//       alert('Error: Accelerometer is not available on this device.');
//       return;
//     }

//     const { status } = await Accelerometer.requestPermissionsAsync();
//     if (status !== 'granted') {
//       alert('Permission Denied: Accelerometer requires motion permission.');
//       setIsAccelerometerAvailable('Permission Denied');
//       return;
//     }

//     Accelerometer.setUpdateInterval(100);
//     const listener = Accelerometer.addListener(data => {
//       setX(data.x);
//       setY(data.y);
//       setZ(data.z);
//       const magnitude = calculateMagnitude(data.x, data.y, data.z);
//       detectStep(magnitude, Date.now());
//     });

//     setSubscription(listener);
//     setIsTracking(true);
//   };

//   const unsubscribe = () => {
//     if (subscription) {
//       subscription.remove();
//       setSubscription(null);
//       setIsTracking(false);
//     }
//   };

//   const resetSteps = async () => {
//     const currentDate = getCurrentDate();
//     stepCountRef.current = 0;
//     prevStepCountRef.current = 0;
//     caloriesBurnedRef.current = 0;
//     activeTimeRef.current = 0;
//     weeklyDataRef.current = {
//       ...weeklyDataRef.current,
//       [currentDate]: { steps: 0, calories: 0, activeTime: 0 },
//     };

//     setStepCount(0);
//     setCaloriesBurned(0);
//     setActiveTime(0);
//     setWeeklyData(weeklyDataRef.current);
//     await saveWeeklyData(weeklyDataRef.current);
    
//     // Add a nice animation for feedback
//     Animated.sequence([
//       Animated.timing(scaleAnim, { toValue: 0.8, duration: 150, useNativeDriver: true }),
//       Animated.spring(scaleAnim, { toValue: 1, friction: 4, tension: 40, useNativeDriver: true }),
//     ]).start();
//   };

//   useEffect(() => {
//     const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         const userEmail = user.email;
//         try {
//           const usersRef = collection(db, 'users');
//           const q = query(usersRef, where('email', '==', userEmail));
//           const querySnapshot = await getDocs(q);

//           if (!querySnapshot.empty) {
//             const userDoc = querySnapshot.docs[0];
//             const userDataFromDb = userDoc.data();
//             const fullUserData = {
//               id: userDoc.id,
//               name: userDataFromDb.name || 'User',
//               email: userEmail,
//               ...userDataFromDb,
//             };
//             setUserName(fullUserData.name);
//             setUserData(fullUserData);
//           } else {
//             setUserName('User');
//             setUserData({ name: 'User', email: userEmail });
//           }
//         } catch (error) {
//           console.error('Error fetching user name from Firestore:', error);
//           setUserName('User');
//           setUserData({ name: 'User', email: userEmail });
//         }
//       } else {
//         setUserName('Not logged in');
//         setUserData(null);
//       }
//     });

//     loadWeeklyData();
//     subscribe();

//     // Animated entrance
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start();

//     return () => {
//       unsubscribeAuth();
//       unsubscribe();
//       if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
//     };
//   }, []);

//   const progress = Math.min(stepCount / goal, 1);
//   const calorieGoal = 500;
//   const calorieProgress = Math.min(caloriesBurned / calorieGoal, 1);
//   const activeTimeGoal = 60; // 60 minutes goal
//   const activeTimeProgress = Math.min(activeTime / activeTimeGoal, 1);

//   // Animation for scroll effects
//   const headerTranslateY = scrollY.interpolate({
//     inputRange: [0, 100],
//     outputRange: [0, -20],
//     extrapolate: 'clamp',
//   });

//   const headerScale = scrollY.interpolate({
//     inputRange: [0, 100],
//     outputRange: [1, 0.95],
//     extrapolate: 'clamp',
//   });

//   const headerOpacity = scrollY.interpolate({
//     inputRange: [0, 60, 90],
//     outputRange: [1, 0.6, 0],
//     extrapolate: 'clamp',
//   });

//   const featuresData = [
//     { 
//       id: 'workout', 
//       title: 'Workout', 
//       icon: 'barbell', 
//       colors: ['#4A00E0', '#8E2DE2'], 
//       screen: 'WorkoutVideos',
//       description: 'Find guided workouts'
//     },
//     { 
//       id: 'chat', 
//       title: 'Live Chat', 
//       icon: 'chatbubbles', 
//       colors: ['#11998e', '#38ef7d'], 
//       screen: 'LiveChat',
//       description: 'Connect with trainers'
//     },
//     { 
//       id: 'shop', 
//       title: 'Shop', 
//       icon: 'cart', 
//       colors: ['#FF416C', '#FF4B2B'], 
//       screen: 'ShopProducts',
//       description: 'Health products & gear'
//     },
//     { 
//       id: 'plan', 
//       title: 'Workout Plan', 
//       icon: 'fitness', 
//       colors: ['#0072ff', '#00c6ff'], 
//       screen: 'WorkoutPlanScreen',
//       description: 'Your custom plan'
//     },
//     { 
//       id: 'diet', 
//       title: 'Diet Plan', 
//       icon: 'nutrition', 
//       colors: ['#FC5C7D', '#6A82FB'], 
//       screen: 'DietPlanScreen',
//       description: 'Nutrition guidance'
//     },
//     { 
//       id: 'records', 
//       title: 'Records', 
//       icon: 'stats-chart', 
//       colors: ['#8A2387', '#E94057'], 
//       screen: 'ExerciseRecords',
//       description: 'Track your progress'
//     },
//   ];

//   // Create button animation scales for each feature
//   const featureScales = featuresData.map(() => useState(new Animated.Value(1))[0]);

//   const handlePressIn = (scale) => {
//     Animated.spring(scale, {
//       toValue: 0.92,
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

//   const buttonScale1 = useState(new Animated.Value(1))[0];
//   const buttonScale2 = useState(new Animated.Value(1))[0];

//   return (
//     <View style={styles.container}>
//       <StatusBar translucent backgroundColor="transparent" />
      
//       {/* Dynamic background gradient */}
//       <LinearGradient
//         colors={['#0F2027', '#203A43', '#2C5364']}
//         style={StyleSheet.absoluteFillObject}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 1 }}
//       />

//       <Animated.View style={{ opacity: fadeAnim, flex: 1 }}>
//         <Animated.ScrollView
//           contentContainerStyle={styles.scrollContent}
//           onScroll={Animated.event(
//             [{ nativeEvent: { contentOffset: { y: scrollY } } }], 
//             { useNativeDriver: true }
//           )}
//           scrollEventThrottle={16}
//           showsVerticalScrollIndicator={false}
//         >
//           {/* Header Section */}
//           <Animated.View style={[
//             styles.headerContainer,
//             { 
//               transform: [
//                 { translateY: headerTranslateY },
//                 { scale: headerScale }
//               ],
//               opacity: headerOpacity
//             }
//           ]}>
//             <BlurView intensity={90} tint="dark" style={styles.blurContainer}>
//               <View style={styles.headerContent}>
//                 <View>
//                   <Text style={styles.dateText}>{formattedDate}</Text>
//                   <Text style={styles.greeting}>Hello, {userName}</Text>
//                 </View>
//                 <TouchableOpacity onPress={() => navigation.navigate('Profile', { userData })}>
//                   <LinearGradient 
//                     colors={['#FF416C', '#FF4B2B']} 
//                     style={styles.profileButton}
//                   >
//                     <Ionicons name="person" size={24} color="#FFF" />
//                   </LinearGradient>
//                 </TouchableOpacity>
//               </View>
//             </BlurView>
//           </Animated.View>

//           {/* Today's Activity Summary Card */}
//           <View style={styles.summaryContainer}>
//             <LinearGradient
//               colors={['rgba(255,255,255,0.15)', 'rgba(255,255,255,0.05)']}
//               style={styles.summaryCard}
//               start={{ x: 0, y: 0 }}
//               end={{ x: 1, y: 1 }}
//             >
//               <Text style={styles.summaryTitle}>Today's Activity</Text>
              
//               {/* Steps Display */}
//               <View style={styles.metricRow}>
//                 <Animated.View style={[styles.circleContainer, { transform: [{ scale: scaleAnim }] }]}>
//                   <Circle
//                     progress={progress}
//                     size={90}
//                     thickness={8}
//                     color="#5E72E4"
//                     unfilledColor="rgba(255,255,255,0.2)"
//                     borderWidth={0}
//                     strokeCap="round"
//                   />
//                   <View style={styles.circleContent}>
//                     <Text style={styles.circleValue}>{stepCount}</Text>
//                     <Text style={styles.circleLabel}>steps</Text>
//                   </View>
//                 </Animated.View>
                
//                 <View style={styles.metricsDetail}>
//                   <View style={styles.progressDetail}>
//                     <View style={styles.progressLabelContainer}>
//                       <Ionicons name="footsteps" size={16} color="#5E72E4" />
//                       <Text style={styles.progressLabel}>Daily Goal</Text>
//                     </View>
//                     <Text style={styles.progressValue}>{Math.round(progress * 100)}%</Text>
//                   </View>
                  
//                   <View style={styles.progressBarContainer}>
//                     <LinearGradient
//                       colors={['#5E72E4', '#825EE4']}
//                       style={[styles.progressFill, { width: `${progress * 100}%` }]}
//                       start={{ x: 0, y: 0 }}
//                       end={{ x: 1, y: 0 }}
//                     />
//                   </View>
                  
//                   <Text style={styles.goalText}>{stepCount} / {goal} steps</Text>
//                 </View>
//               </View>
              
//               {/* Additional Metrics */}
//               <View style={styles.additionalMetrics}>
//                 <View style={styles.metricItem}>
//                   <LinearGradient 
//                     colors={['#FF416C', '#FF4B2B']} 
//                     style={styles.metricIcon}
//                   >
//                     <Ionicons name="flame" size={18} color="#FFF" />
//                   </LinearGradient>
//                   <View>
//                     <Text style={styles.metricValue}>{caloriesBurned.toFixed(0)}</Text>
//                     <Text style={styles.metricLabel}>Calories</Text>
//                   </View>
//                   <View style={styles.miniProgressContainer}>
//                     <LinearGradient
//                       colors={['#FF416C', '#FF4B2B']}
//                       style={[styles.miniProgressFill, { width: `${calorieProgress * 100}%` }]}
//                     />
//                   </View>
//                 </View>
                
//                 <View style={styles.metricDivider} />
                
//                 <View style={styles.metricItem}>
//                   <LinearGradient 
//                     colors={['#11998e', '#38ef7d']} 
//                     style={styles.metricIcon}
//                   >
//                     <Ionicons name="time" size={18} color="#FFF" />
//                   </LinearGradient>
//                   <View>
//                     <Text style={styles.metricValue}>{activeTime}</Text>
//                     <Text style={styles.metricLabel}>Active Min</Text>
//                   </View>
//                   <View style={styles.miniProgressContainer}>
//                     <LinearGradient
//                       colors={['#11998e', '#38ef7d']}
//                       style={[styles.miniProgressFill, { width: `${activeTimeProgress * 100}%` }]}
//                     />
//                   </View>
//                 </View>
//               </View>
              
//               {/* Action Buttons */}
//               <View style={styles.actionButtonsContainer}>
//                 <TouchableOpacity
//                   onPressIn={() => handlePressIn(buttonScale1)}
//                   onPressOut={() => handlePressOut(buttonScale1)}
//                   onPress={resetSteps}
//                   style={styles.actionButtonWrapper}
//                 >
//                   <Animated.View style={[styles.actionButtonInner, { transform: [{ scale: buttonScale1 }] }]}>
//                     <LinearGradient
//                       colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.1)']}
//                       style={styles.actionButton}
//                     >
//                       <Ionicons name="refresh" size={16} color="#FFF" />
//                       <Text style={styles.actionButtonText}>Reset</Text>
//                     </LinearGradient>
//                   </Animated.View>
//                 </TouchableOpacity>
                
//                 <TouchableOpacity
//                   onPressIn={() => handlePressIn(buttonScale2)}
//                   onPressOut={() => handlePressOut(buttonScale2)}
//                   onPress={() => navigation.navigate('DetailsScreen', { weeklyData })}
//                   style={styles.actionButtonWrapper}
//                 >
//                   <Animated.View style={[styles.actionButtonInner, { transform: [{ scale: buttonScale2 }] }]}>
//                     <LinearGradient
//                       colors={['#5E72E4', '#825EE4']}
//                       style={styles.actionButton}
//                     >
//                       <Ionicons name="stats-chart" size={16} color="#FFF" />
//                       <Text style={styles.actionButtonText}>Details</Text>
//                     </LinearGradient>
//                   </Animated.View>
//                 </TouchableOpacity>
//               </View>
//             </LinearGradient>
//           </View>
          
//           {/* Features Section */}
//           <View style={styles.sectionContainer}>
//             <Text style={styles.sectionTitle}>Features</Text>
            
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.featuresScrollContainer}
//               onScroll={Animated.event(
//                 [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//                 { useNativeDriver: false }
//               )}
//               scrollEventThrottle={16}
//               decelerationRate="fast"
//               snapToInterval={CARD_WIDTH + 15}
//               snapToAlignment="center"
//             >
//               {featuresData.map((item, index) => {
//                 const inputRange = [
//                   (index - 1) * (CARD_WIDTH + 15),
//                   index * (CARD_WIDTH + 15),
//                   (index + 1) * (CARD_WIDTH + 15)
//                 ];
                
//                 const scale = scrollX.interpolate({
//                   inputRange,
//                   outputRange: [0.92, 1, 0.92],
//                   extrapolate: 'clamp'
//                 });
                
//                 return (
//                   <TouchableOpacity
//                     key={item.id}
//                     onPressIn={() => handlePressIn(featureScales[index])}
//                     onPressOut={() => handlePressOut(featureScales[index])}
//                     onPress={() => navigation.navigate(item.screen, { userData })}
//                     activeOpacity={0.9}
//                   >
//                     <Animated.View 
//                       style={[
//                         styles.featureCard,
//                         { transform: [{ scale: featureScales[index] }] }
//                       ]}
//                     >
//                       <LinearGradient
//                         colors={item.colors}
//                         style={styles.featureGradient}
//                         start={{ x: 0, y: 0 }}
//                         end={{ x: 1, y: 1 }}
//                       >
//                         <View style={styles.featureContent}>
//                           <View style={styles.featureIconContainer}>
//                             <Ionicons name={item.icon} size={28} color="#FFF" />
//                           </View>
//                           <Text style={styles.featureTitle}>{item.title}</Text>
//                           <Text style={styles.featureDescription}>{item.description}</Text>
//                         </View>
//                       </LinearGradient>
//                     </Animated.View>
//                   </TouchableOpacity>
//                 );
//               })}
//             </ScrollView>
//           </View>
          
//           {/* Quick Access Section */}
//           <View style={styles.quickAccessSection}>
// 三、第四段：快速访问部分
//             <Text style={styles.sectionTitle}>Quick Access</Text>
            
//             <View style={styles.quickGrid}>
//               {featuresData.map((item, index) => (
//                 <TouchableOpacity
//                   key={`quick-${item.id}`}
//                   style={styles.quickItem}
//                   onPress={() => navigation.navigate(item.screen, { userData })}
//                 >
//                   <LinearGradient
//                     colors={item.colors}
//                     style={styles.quickItemIcon}
//                   >
//                     <Ionicons name={item.icon} size={22} color="#FFF" />
//                   </LinearGradient>
//                   <Text style={styles.quickItemText}>{item.title}</Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </View>
          
//           {/* Error Message if needed */}
//           {isAccelerometerAvailable !== 'true' && (
//             <View style={styles.errorContainer}>
//               <LinearGradient
//                 colors={['rgba(239, 68, 68, 0.2)', 'rgba(239, 68, 68, 0.1)']}
//                 style={styles.errorCard}
//               >
//                 <Ionicons name="warning" size={20} color="#EF4444" />
//                 <Text style={styles.errorText}>
//                   Accelerometer unavailable: {isAccelerometerAvailable}
//                 </Text>
//               </LinearGradient>
//             </View>
//           )}
          
//           {/* Bottom Spacing */}
//           <View style={{ height: 20 }} />
//         </Animated.ScrollView>
//       </Animated.View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollContent: {
//     paddingTop: StatusBar.currentHeight || 40,
//     paddingBottom: 30,
//   },
//   headerContainer: {
//     marginHorizontal: 20,
//     marginBottom: 20,
//     borderRadius: 20,
//     overflow: 'hidden',
//   },
//   blurContainer: {
//     borderRadius: 20,
//     overflow: 'hidden',
//   },
//   headerContent: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 20,
//   },
//   dateText: {
//     fontSize: 14,
//     color: 'rgba(255, 255, 255, 0.7)',
//     marginBottom: 4,
//   },
//   greeting: {
//     fontSize: 26,
//     fontWeight: '700',
//     color: '#FFFFFF',
//   },
//   profileButton: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   summaryContainer: {
//     paddingHorizontal: 20,
//     marginBottom: 30,
//   },
//   summaryCard: {
//     borderRadius: 22,
//     padding: 20,
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   summaryTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     marginBottom: 20,
//   },
//   metricRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   circleContainer: {
//     marginRight: 20,
//   },
//   circleContent: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   circleValue: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#FFFFFF',
//   },
//   circleLabel: {
//     fontSize: 12,
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   metricsDetail: {
//     flex: 1,
//   },
//   progressDetail: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   progressLabelContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   progressLabel: {
//     fontSize: 14,
//     color: '#FFFFFF',
//     marginLeft: 6,
//   },
//   progressValue: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#5E72E4',
//   },
//   progressBarContainer: {
//     height: 8,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 4,
//     marginBottom: 8,
//     overflow: 'hidden',
//   },
//   progressFill: {
//     height: '100%',
//     borderRadius: 4,
//   },
//   goalText: {
//     fontSize: 12,
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   additionalMetrics: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//     padding: 15,
//     backgroundColor: 'rgba(0, 0, 0, 0.2)',
//     borderRadius: 15,
//   },
//   metricItem: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   metricIcon: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   metricValue: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#FFFFFF',
//   },
//   metricLabel: {
//     fontSize: 12,
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   metricDivider: {
//     width: 1,
//     height: '80%',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     marginHorizontal: 15,
//   },
//   miniProgressContainer: {
//     position: 'absolute',
//     bottom: -8,
//     left: 0,
//     right: 0,
//     height: 3,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 1.5,
//     overflow: 'hidden',
//   },
//   miniProgressFill: {
//     height: '100%',
//     borderRadius: 1.5,
//   },
//   actionButtonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   actionButtonWrapper: {
//     flex: 1,
//     marginHorizontal: 5,
//   },
//   actionButtonInner: {
//     width: '100%',
//   },
//   actionButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     borderRadius: 12,
//   },
//   actionButtonText: {
//     color: '#FFFFFF',
//     fontWeight: '600',
//     fontSize: 14,
//     marginLeft: 6,
//   },
//   sectionContainer: {
//     marginBottom: 30,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     marginLeft: 20,
//     marginBottom: 15,
//   },
//   featuresScrollContainer: {
//     paddingLeft: 20,
//     paddingRight: 5,
//   },
//   featureCard: {
//     width: CARD_WIDTH,
//     height: 160,
//     borderRadius: 20,
//     marginRight: 15,
//     overflow: 'hidden',
//   },
//   featureGradient: {
//     flex: 1,
//     borderRadius: 20,
//     padding: 20,
//   },
//   featureContent: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   featureIconContainer: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   featureTitle: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     marginBottom: 6,
//   },
//   featureDescription: {
//     fontSize: 14,
//     color: 'rgba(255, 255, 255, 0.8)',
//   },
//   quickAccessSection: {
//     marginBottom: 30,
//     paddingHorizontal: 20,
//   },
//   quickGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   quickItem: {
//     width: '48%',
//     backgroundColor: 'rgba(255, 255, 255, 0.08)',
//     borderRadius: 16,
//     padding: 16,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   quickItemIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   quickItemText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
//   errorContainer: {
//     paddingHorizontal: 20,
//     marginBottom: 20,
//   },
//   errorCard: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: 'rgba(239, 68, 68, 0.3)',
//   },
//   errorText: {
//     color : '#EF4444',
//     fontSize: 14,
//     marginLeft: 10,
//   },
// });



// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   Animated,
//   StatusBar,
//   Image,
//   Dimensions,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { Accelerometer } from 'expo-sensors';
// import { Circle } from 'react-native-progress';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { BlurView } from 'expo-blur';

// const { width } = Dimensions.get('window');
// const CARD_WIDTH = width * 0.85;

// export default function UserDashboard({ navigation }) {
//   const [stepCount, setStepCount] = useState(0);
//   const [subscription, setSubscription] = useState(null);
//   const [x, setX] = useState(0);
//   const [y, setY] = useState(0);
//   const [z, setZ] = useState(0);
//   const [caloriesBurned, setCaloriesBurned] = useState(0);
//   const [goal] = useState(10000);
//   const [isTracking, setIsTracking] = useState(false);
//   const [isAccelerometerAvailable, setIsAccelerometerAvailable] = useState('checking');
//   const [weeklyData, setWeeklyData] = useState({});
//   const [userName, setUserName] = useState('Loading...');
//   const [userData, setUserData] = useState(null);
//   const [activeTime, setActiveTime] = useState(0);

//   const scaleAnim = useState(new Animated.Value(1))[0];
//   const fadeAnim = useState(new Animated.Value(0))[0];
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const scrollY = useRef(new Animated.Value(0)).current;
//   const THRESHOLD = 1.3;
//   const REST_THRESHOLD = 0.2;
//   const DETECTION_INTERVAL = 333;
//   const [lastMagnitude, setLastMagnitude] = useState(0);
//   const [isMoving, setIsMoving] = useState(false);

//   const stepCountRef = useRef(0);
//   const prevStepCountRef = useRef(0);
//   const caloriesBurnedRef = useRef(0);
//   const activeTimeRef = useRef(0);
//   const weeklyDataRef = useRef({});
//   const saveTimeoutRef = useRef(null);
//   const lastStepTimeRef = useRef(0);

//   const auth = getAuth();
//   const db = getFirestore();

//   const getCurrentDate = () => new Date().toISOString().split('T')[0];
//   const formattedDate = new Date().toLocaleDateString('en-US', { 
//     weekday: 'long', 
//     month: 'long', 
//     day: 'numeric' 
//   });

//   const saveWeeklyData = async (data) => {
//     try {
//       await AsyncStorage.setItem('weeklyStepData', JSON.stringify(data));
//     } catch (e) {
//       console.error('Failed to save weekly data:', e);
//     }
//   };

//   const loadWeeklyData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('weeklyStepData');
//       if (value !== null) {
//         const data = JSON.parse(value);
//         const currentDate = getCurrentDate();
//         const oneWeekAgo = new Date();
//         oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

//         const filteredData = Object.keys(data).reduce((acc, date) => {
//           if (new Date(date) >= oneWeekAgo) {
//             acc[date] = data[date];
//           }
//           return acc;
//         }, {});

//         weeklyDataRef.current = filteredData;
//         setWeeklyData(filteredData);

//         if (filteredData[currentDate]) {
//           stepCountRef.current = filteredData[currentDate].steps;
//           caloriesBurnedRef.current = filteredData[currentDate].calories;
//           activeTimeRef.current = filteredData[currentDate].activeTime || 0;
//           prevStepCountRef.current = filteredData[currentDate].steps;
//           setStepCount(filteredData[currentDate].steps);
//           setCaloriesBurned(filteredData[currentDate].calories);
//           setActiveTime(filteredData[currentDate].activeTime || 0);
//         }
//       }
//     } catch (e) {
//       console.error('Failed to load weekly data:', e);
//     }
//   };

//   const debounceSave = (data) => {
//     if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
//     saveTimeoutRef.current = setTimeout(() => saveWeeklyData(data), 30000);
//   };

//   const calculateMagnitude = (x, y, z) => Math.sqrt(x * x + y * y + z * z);

//   const animateCircle = () => {
//     Animated.sequence([
//       Animated.timing(scaleAnim, { toValue: 1.15, duration: 150, useNativeDriver: true }),
//       Animated.spring(scaleAnim, { toValue: 0.95, friction: 4, tension: 40, useNativeDriver: true }),
//       Animated.timing(scaleAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
//     ]).start();
//   };

//   const detectStep = (magnitude, currentTime) => {
//     if (currentTime - lastStepTimeRef.current < DETECTION_INTERVAL) {
//       setLastMagnitude(magnitude);
//       return;
//     }

//     if (magnitude > REST_THRESHOLD) {
//       if (!isMoving && Math.abs(magnitude - lastMagnitude) > THRESHOLD) {
//         stepCountRef.current += 1;
//         caloriesBurnedRef.current = stepCountRef.current * 0.045;
//         activeTimeRef.current = Math.round(stepCountRef.current / 100);

//         const currentDate = getCurrentDate();
//         weeklyDataRef.current = {
//           ...weeklyDataRef.current,
//           [currentDate]: { 
//             steps: stepCountRef.current, 
//             calories: caloriesBurnedRef.current,
//             activeTime: activeTimeRef.current
//           },
//         };

//         setStepCount(stepCountRef.current);
//         setCaloriesBurned(caloriesBurnedRef.current);
//         setActiveTime(activeTimeRef.current);
//         setWeeklyData(weeklyDataRef.current);

//         debounceSave(weeklyDataRef.current);
//         animateCircle();
//         setIsMoving(true);
//         lastStepTimeRef.current = currentTime;
//         prevStepCountRef.current = stepCountRef.current;
//       }
//     } else {
//       setIsMoving(false);
//     }
//     setLastMagnitude(magnitude);
//   };

//   const subscribe = async () => {
//     const isAvailable = await Accelerometer.isAvailableAsync();
//     setIsAccelerometerAvailable(String(isAvailable));

//     if (!isAvailable) {
//       alert('Error: Accelerometer is not available on this device.');
//       return;
//     }

//     const { status } = await Accelerometer.requestPermissionsAsync();
//     if (status !== 'granted') {
//       alert('Permission Denied: Accelerometer requires motion permission.');
//       setIsAccelerometerAvailable('Permission Denied');
//       return;
//     }

//     Accelerometer.setUpdateInterval(100);
//     const listener = Accelerometer.addListener(data => {
//       setX(data.x);
//       setY(data.y);
//       setZ(data.z);
//       const magnitude = calculateMagnitude(data.x, data.y, data.z);
//       detectStep(magnitude, Date.now());
//     });

//     setSubscription(listener);
//     setIsTracking(true);
//   };

//   const unsubscribe = () => {
//     if (subscription) {
//       subscription.remove();
//       setSubscription(null);
//       setIsTracking(false);
//     }
//   };

//   const resetSteps = async () => {
//     const currentDate = getCurrentDate();
//     stepCountRef.current = 0;
//     prevStepCountRef.current = 0;
//     caloriesBurnedRef.current = 0;
//     activeTimeRef.current = 0;
//     weeklyDataRef.current = {
//       ...weeklyDataRef.current,
//       [currentDate]: { steps: 0, calories: 0, activeTime: 0 },
//     };

//     setStepCount(0);
//     setCaloriesBurned(0);
//     setActiveTime(0);
//     setWeeklyData(weeklyDataRef.current);
//     await saveWeeklyData(weeklyDataRef.current);
    
//     Animated.sequence([
//       Animated.timing(scaleAnim, { toValue: 0.8, duration: 150, useNativeDriver: true }),
//       Animated.spring(scaleAnim, { toValue: 1, friction: 4, tension: 40, useNativeDriver: true }),
//     ]).start();
//   };

//   useEffect(() => {
//     const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         const userEmail = user.email;
//         try {
//           const usersRef = collection(db, 'users');
//           const q = query(usersRef, where('email', '==', userEmail));
//           const querySnapshot = await getDocs(q);

//           if (!querySnapshot.empty) {
//             const userDoc = querySnapshot.docs[0];
//             const userDataFromDb = userDoc.data();
//             const fullUserData = {
//               id: userDoc.id,
//               name: userDataFromDb.name || 'User',
//               email: userEmail,
//               ...userDataFromDb,
//             };
//             setUserName(fullUserData.name);
//             setUserData(fullUserData);
//           } else {
//             setUserName('User');
//             setUserData({ name: 'User', email: userEmail });
//           }
//         } catch (error) {
//           console.error('Error fetching user name from Firestore:', error);
//           setUserName('User');
//           setUserData({ name: 'User', email: userEmail });
//         }
//       } else {
//         setUserName('Not logged in');
//         setUserData(null);
//       }
//     });

//     loadWeeklyData();
//     subscribe();

//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start();

//     return () => {
//       unsubscribeAuth();
//       unsubscribe();
//       if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
//     };
//   }, []);

//   const progress = Math.min(stepCount / goal, 1);
//   const calorieGoal = 500;
//   const calorieProgress = Math.min(caloriesBurned / calorieGoal, 1);
//   const activeTimeGoal = 60;
//   const activeTimeProgress = Math.min(activeTime / activeTimeGoal, 1);

//   const headerTranslateY = scrollY.interpolate({
//     inputRange: [0, 100],
//     outputRange: [0, -20],
//     extrapolate: 'clamp',
//   });

//   const headerScale = scrollY.interpolate({
//     inputRange: [0, 100],
//     outputRange: [1, 0.95],
//     extrapolate: 'clamp',
//   });

//   const headerOpacity = scrollY.interpolate({
//     inputRange: [0, 60, 90],
//     outputRange: [1, 0.6, 0],
//     extrapolate: 'clamp',
//   });

//   const featuresData = [
//     { 
//       id: 'workout', 
//       title: 'Workout', 
//       icon: 'barbell', 
//       colors: ['#4A00E0', '#8E2DE2'], 
//       screen: 'WorkoutVideos',
//       description: 'Find guided workouts'
//     },
//     { 
//       id: 'chat', 
//       title: 'Live Chat', 
//       icon: 'chatbubbles', 
//       colors: ['#11998e', '#38ef7d'], 
//       screen: 'LiveChat',
//       description: 'Connect with trainers'
//     },
//     { 
//       id: 'shop', 
//       title: 'Shop', 
//       icon: 'cart', 
//       colors: ['#FF416C', '#FF4B2B'], 
//       screen: 'ShopProducts',
//       description: 'Health products & gear'
//     },
//     { 
//       id: 'plan', 
//       title: 'Workout Plan', 
//       icon: 'fitness', 
//       colors: ['#0072ff', '#00c6ff'], 
//       screen: 'WorkoutPlanScreen',
//       description: 'Your custom plan'
//     },
//     { 
//       id: 'diet', 
//       title: 'Diet Plan', 
//       icon: 'nutrition', 
//       colors: ['#FC5C7D', '#6A82FB'], 
//       screen: 'DietPlanScreen',
//       description: 'Nutrition guidance'
//     },
//     { 
//       id: 'records', 
//       title: 'Records', 
//       icon: 'stats-chart', 
//       colors: ['#8A2387', '#E94057'], 
//       screen: 'ExerciseRecords',
//       description: 'Track your progress'
//     },
//     { 
//       id: 'orders', 
//       title: 'My Orders', 
//       icon: 'receipt', 
//       colors: ['#2A2A72', '#009FFD'], 
//       screen: 'MyOrders',
//       description: 'View your order history'
//     },
//   ];

//   const featureScales = featuresData.map(() => useState(new Animated.Value(1))[0]);

//   const handlePressIn = (scale) => {
//     Animated.spring(scale, {
//       toValue: 0.92,
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

//   const buttonScale1 = useState(new Animated.Value(1))[0];
//   const buttonScale2 = useState(new Animated.Value(1))[0];

//   return (
//     <View style={styles.container}>
//       <StatusBar translucent backgroundColor="transparent" />
      
//       <LinearGradient
//         colors={['#0F2027', '#203A43', '#2C5364']}
//         style={StyleSheet.absoluteFillObject}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 1 }}
//       />

//       <Animated.View style={{ opacity: fadeAnim, flex: 1 }}>
//         <Animated.ScrollView
//           contentContainerStyle={styles.scrollContent}
//           onScroll={Animated.event(
//             [{ nativeEvent: { contentOffset: { y: scrollY } } }], 
//             { useNativeDriver: true }
//           )}
//           scrollEventThrottle={16}
//           showsVerticalScrollIndicator={false}
//         >
//           <Animated.View style={[
//             styles.headerContainer,
//             { 
//               transform: [
//                 { translateY: headerTranslateY },
//                 { scale: headerScale }
//               ],
//               opacity: headerOpacity
//             }
//           ]}>
//             <BlurView intensity={90} tint="dark" style={styles.blurContainer}>
//               <View style={styles.headerContent}>
//                 <View>
//                   <Text style={styles.dateText}>{formattedDate}</Text>
//                   <Text style={styles.greeting}>Hello, {userName}</Text>
//                 </View>
//                 <TouchableOpacity onPress={() => navigation.navigate('Profile', { userData })}>
//                   <LinearGradient 
//                     colors={['#FF416C', '#FF4B2B']} 
//                     style={styles.profileButton}
//                   >
//                     <Ionicons name="person" size={24} color="#FFF" />
//                   </LinearGradient>
//                 </TouchableOpacity>
//               </View>
//             </BlurView>
//           </Animated.View>

//           <View style={styles.summaryContainer}>
//             <LinearGradient
//               colors={['rgba(255,255,255,0.15)', 'rgba(255,255,255,0.05)']}
//               style={styles.summaryCard}
//               start={{ x: 0, y: 0 }}
//               end={{ x: 1, y: 1 }}
//             >
//               <Text style={styles.summaryTitle}>Today's Activity</Text>
              
//               <View style={styles.metricRow}>
//                 <Animated.View style={[styles.circleContainer, { transform: [{ scale: scaleAnim }] }]}>
//                   <Circle
//                     progress={progress}
//                     size={90}
//                     thickness={8}
//                     color="#5E72E4"
//                     unfilledColor="rgba(255,255,255,0.2)"
//                     borderWidth={0}
//                     strokeCap="round"
//                   />
//                   <View style={styles.circleContent}>
//                     <Text style={styles.circleValue}>{stepCount}</Text>
//                     <Text style={styles.circleLabel}>steps</Text>
//                   </View>
//                 </Animated.View>
                
//                 <View style={styles.metricsDetail}>
//                   <View style={styles.progressDetail}>
//                     <View style={styles.progressLabelContainer}>
//                       <Ionicons name="footsteps" size={16} color="#5E72E4" />
//                       <Text style={styles.progressLabel}>Daily Goal</Text>
//                     </View>
//                     <Text style={styles.progressValue}>{Math.round(progress * 100)}%</Text>
//                   </View>
                  
//                   <View style={styles.progressBarContainer}>
//                     <LinearGradient
//                       colors={['#5E72E4', '#825EE4']}
//                       style={[styles.progressFill, { width: `${progress * 100}%` }]}
//                       start={{ x: 0, y: 0 }}
//                       end={{ x: 1, y: 0 }}
//                     />
//                   </View>
                  
//                   <Text style={styles.goalText}>{stepCount} / {goal} steps</Text>
//                 </View>
//               </View>
              
//               <View style={styles.additionalMetrics}>
//                 <View style={styles.metricItem}>
//                   <LinearGradient 
//                     colors={['#FF416C', '#FF4B2B']} 
//                     style={styles.metricIcon}
//                   >
//                     <Ionicons name="flame" size={18} color="#FFF" />
//                   </LinearGradient>
//                   <View>
//                     <Text style={styles.metricValue}>{caloriesBurned.toFixed(0)}</Text>
//                     <Text style={styles.metricLabel}>Calories</Text>
//                   </View>
//                   <View style={styles.miniProgressContainer}>
//                     <LinearGradient
//                       colors={['#FF416C', '#FF4B2B']}
//                       style={[styles.miniProgressFill, { width: `${calorieProgress * 100}%` }]}
//                     />
//                   </View>
//                 </View>
                
//                 <View style={styles.metricDivider} />
                
//                 <View style={styles.metricItem}>
//                   <LinearGradient 
//                     colors={['#11998e', '#38ef7d']} 
//                     style={styles.metricIcon}
//                   >
//                     <Ionicons name="time" size={18} color="#FFF" />
//                   </LinearGradient>
//                   <View>
//                     <Text style={styles.metricValue}>{activeTime}</Text>
//                     <Text style={styles.metricLabel}>Active Min</Text>
//                   </View>
//                   <View style={styles.miniProgressContainer}>
//                     <LinearGradient
//                       colors={['#11998e', '#38ef7d']}
//                       style={[styles.miniProgressFill, { width: `${activeTimeProgress * 100}%` }]}
//                     />
//                   </View>
//                 </View>
//               </View>
              
//               <View style={styles.actionButtonsContainer}>
//                 <TouchableOpacity
//                   onPressIn={() => handlePressIn(buttonScale1)}
//                   onPressOut={() => handlePressOut(buttonScale1)}
//                   onPress={resetSteps}
//                   style={styles.actionButtonWrapper}
//                 >
//                   <Animated.View style={[styles.actionButtonInner, { transform: [{ scale: buttonScale1 }] }]}>
//                     <LinearGradient
//                       colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.1)']}
//                       style={styles.actionButton}
//                     >
//                       <Ionicons name="refresh" size={16} color="#FFF" />
//                       <Text style={styles.actionButtonText}>Reset</Text>
//                     </LinearGradient>
//                   </Animated.View>
//                 </TouchableOpacity>
                
//                 <TouchableOpacity
//                   onPressIn={() => handlePressIn(buttonScale2)}
//                   onPressOut={() => handlePressOut(buttonScale2)}
//                   onPress={() => navigation.navigate('DetailsScreen', { weeklyData })}
//                   style={styles.actionButtonWrapper}
//                 >
//                   <Animated.View style={[styles.actionButtonInner, { transform: [{ scale: buttonScale2 }] }]}>
//                     <LinearGradient
//                       colors={['#5E72E4', '#825EE4']}
//                       style={styles.actionButton}
//                     >
//                       <Ionicons name="stats-chart" size={16} color="#FFF" />
//                       <Text style={styles.actionButtonText}>Details</Text>
//                     </LinearGradient>
//                   </Animated.View>
//                 </TouchableOpacity>
//               </View>
//             </LinearGradient>
//           </View>
          
//           <View style={styles.sectionContainer}>
//             <Text style={styles.sectionTitle}>Features</Text>
            
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.featuresScrollContainer}
//               onScroll={Animated.event(
//                 [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//                 { useNativeDriver: false }
//               )}
//               scrollEventThrottle={16}
//               decelerationRate="fast"
//               snapToInterval={CARD_WIDTH + 15}
//               snapToAlignment="center"
//             >
//               {featuresData.map((item, index) => {
//                 const inputRange = [
//                   (index - 1) * (CARD_WIDTH + 15),
//                   index * (CARD_WIDTH + 15),
//                   (index + 1) * (CARD_WIDTH + 15)
//                 ];
                
//                 const scale = scrollX.interpolate({
//                   inputRange,
//                   outputRange: [0.92, 1, 0.92],
//                   extrapolate: 'clamp'
//                 });
                
//                 return (
//                   <TouchableOpacity
//                     key={item.id}
//                     onPressIn={() => handlePressIn(featureScales[index])}
//                     onPressOut={() => handlePressOut(featureScales[index])}
//                     onPress={() => navigation.navigate(item.screen, { userData })}
//                     activeOpacity={0.9}
//                   >
//                     <Animated.View 
//                       style={[
//                         styles.featureCard,
//                         { transform: [{ scale: featureScales[index] }] }
//                       ]}
//                     >
//                       <LinearGradient
//                         colors={item.colors}
//                         style={styles.featureGradient}
//                         start={{ x: 0, y: 0 }}
//                         end={{ x: 1, y: 1 }}
//                       >
//                         <View style={styles.featureContent}>
//                           <View style={styles.featureIconContainer}>
//                             <Ionicons name={item.icon} size={28} color="#FFF" />
//                           </View>
//                           <Text style={styles.featureTitle}>{item.title}</Text>
//                           <Text style={styles.featureDescription}>{item.description}</Text>
//                         </View>
//                       </LinearGradient>
//                     </Animated.View>
//                   </TouchableOpacity>
//                 );
//               })}
//             </ScrollView>
//           </View>
          
//           <View style={styles.quickAccessSection}>
//             <Text style={styles.sectionTitle}>Quick Access</Text>
            
//             <View style={styles.quickGrid}>
//               {featuresData.map((item, index) => (
//                 <TouchableOpacity
//                   key={`quick-${item.id}`}
//                   style={styles.quickItem}
//                   onPress={() => navigation.navigate(item.screen, { userData })}
//                 >
//                   <LinearGradient
//                     colors={item.colors}
//                     style={styles.quickItemIcon}
//                   >
//                     <Ionicons name={item.icon} size={22} color="#FFF" />
//                   </LinearGradient>
//                   <Text style={styles.quickItemText}>{item.title}</Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </View>
          
//           {isAccelerometerAvailable !== 'true' && (
//             <View style={styles.errorContainer}>
//               <LinearGradient
//                 colors={['rgba(239, 68, 68, 0.2)', 'rgba(239, 68, 68, 0.1)']}
//                 style={styles.errorCard}
//               >
//                 <Ionicons name="warning" size={20} color="#EF4444" />
//                 <Text style={styles.errorText}>
//                   Accelerometer unavailable: {isAccelerometerAvailable}
//                 </Text>
//               </LinearGradient>
//             </View>
//           )}
          
//           <View style={{ height: 20 }} />
//         </Animated.ScrollView>
//       </Animated.View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollContent: {
//     paddingTop: StatusBar.currentHeight || 40,
//     paddingBottom: 30,
//   },
//   headerContainer: {
//     marginHorizontal: 20,
//     marginBottom: 20,
//     borderRadius: 20,
//     overflow: 'hidden',
//   },
//   blurContainer: {
//     borderRadius: 20,
//     overflow: 'hidden',
//   },
//   headerContent: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 20,
//   },
//   dateText: {
//     fontSize: 14,
//     color: 'rgba(255, 255, 255, 0.7)',
//     marginBottom: 4,
//   },
//   greeting: {
//     fontSize: 26,
//     fontWeight: '700',
//     color: '#FFFFFF',
//   },
//   profileButton: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   summaryContainer: {
//     paddingHorizontal: 20,
//     marginBottom: 30,
//   },
//   summaryCard: {
//     borderRadius: 22,
//     padding: 20,
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   summaryTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     marginBottom: 20,
//   },
//   metricRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   circleContainer: {
//     marginRight: 20,
//   },
//   circleContent: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   circleValue: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#FFFFFF',
//   },
//   circleLabel: {
//     fontSize: 12,
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   metricsDetail: {
//     flex: 1,
//   },
//   progressDetail: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   progressLabelContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   progressLabel: {
//     fontSize: 14,
//     color: '#FFFFFF',
//     marginLeft: 6,
//   },
//   progressValue: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#5E72E4',
//   },
//   progressBarContainer: {
//     height: 8,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 4,
//     marginBottom: 8,
//     overflow: 'hidden',
//   },
//   progressFill: {
//     height: '100%',
//     borderRadius: 4,
//   },
//   goalText: {
//     fontSize: 12,
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   additionalMetrics: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//     padding: 15,
//     backgroundColor: 'rgba(0, 0, 0, 0.2)',
//     borderRadius: 15,
//   },
//   metricItem: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   metricIcon: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   metricValue: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#FFFFFF',
//   },
//   metricLabel: {
//     fontSize: 12,
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   metricDivider: {
//     width: 1,
//     height: '80%',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     marginHorizontal: 15,
//   },
//   miniProgressContainer: {
//     position: 'absolute',
//     bottom: -8,
//     left: 0,
//     right: 0,
//     height: 3,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 1.5,
//     overflow: 'hidden',
//   },
//   miniProgressFill: {
//     height: '100%',
//     borderRadius: 1.5,
//   },
//   actionButtonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   actionButtonWrapper: {
//     flex: 1,
//     marginHorizontal: 5,
//   },
//   actionButtonInner: {
//     width: '100%',
//   },
//   actionButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     borderRadius: 12,
//   },
//   actionButtonText: {
//     color: '#FFFFFF',
//     fontWeight: '600',
//     fontSize: 14,
//     marginLeft: 6,
//   },
//   sectionContainer: {
//     marginBottom: 30,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     marginLeft: 20,
//     marginBottom: 15,
//   },
//   featuresScrollContainer: {
//     paddingLeft: 20,
//     paddingRight: 5,
//   },
//   featureCard: {
//     width: CARD_WIDTH,
//     height: 160,
//     borderRadius: 20,
//     marginRight: 15,
//     overflow: 'hidden',
//   },
//   featureGradient: {
//     flex: 1,
//     borderRadius: 20,
//     padding: 20,
//   },
//   featureContent: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   featureIconContainer: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   featureTitle: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     marginBottom: 6,
//   },
//   featureDescription: {
//     fontSize: 14,
//     color: 'rgba(255, 255, 255, 0.8)',
//   },
//   quickAccessSection: {
//     marginBottom: 30,
//     paddingHorizontal: 20,
//   },
//   quickGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   quickItem: {
//     width: '48%',
//     backgroundColor: 'rgba(255, 255, 255, 0.08)',
//     borderRadius: 16,
//     padding: 16,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   quickItemIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   quickItemText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
//   errorContainer: {
//     paddingHorizontal: 20,
//     marginBottom: 20,
//   },
//   errorCard: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: 'rgba(239, 68, 68, 0.3)',
//   },
//   errorText: {
//     color: '#EF4444',
//     fontSize: 14,
//     marginLeft: 10,
//   },
// });


import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Accelerometer } from 'expo-sensors';
import { Circle } from 'react-native-progress';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BlurView } from 'expo-blur';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.85;

export default function UserDashboard({ navigation }) {
  const [stepCount, setStepCount] = useState(0);
  const [subscription, setSubscription] = useState(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [goal] = useState(10000);
  const [isTracking, setIsTracking] = useState(false);
  const [isAccelerometerAvailable, setIsAccelerometerAvailable] = useState('checking');
  const [weeklyData, setWeeklyData] = useState({});
  const [userName, setUserName] = useState('Loading...');
  const [userData, setUserData] = useState(null);
  const [activeTime, setActiveTime] = useState(0);

  const scaleAnim = useState(new Animated.Value(1))[0];
  const fadeAnim = useState(new Animated.Value(0))[0];
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollY = useRef(new Animated.Value(0)).current;
  const THRESHOLD = 1.3;
  const REST_THRESHOLD = 0.2;
  const DETECTION_INTERVAL = 333;
  const [lastMagnitude, setLastMagnitude] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const stepCountRef = useRef(0);
  const prevStepCountRef = useRef(0);
  const caloriesBurnedRef = useRef(0);
  const activeTimeRef = useRef(0);
  const weeklyDataRef = useRef({});
  const saveTimeoutRef = useRef(null);
  const lastStepTimeRef = useRef(0);

  const auth = getAuth();
  const db = getFirestore();

  const getCurrentDate = () => new Date().toISOString().split('T')[0];
  const formattedDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  });

  const saveWeeklyData = async (data) => {
    try {
      await AsyncStorage.setItem('weeklyStepData', JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save weekly data:', e);
    }
  };

  const loadWeeklyData = async () => {
    try {
      const value = await AsyncStorage.getItem('weeklyStepData');
      if (value !== null) {
        const data = JSON.parse(value);
        const currentDate = getCurrentDate();
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

        const filteredData = Object.keys(data).reduce((acc, date) => {
          if (new Date(date) >= oneWeekAgo) {
            acc[date] = data[date];
          }
          return acc;
        }, {});

        weeklyDataRef.current = filteredData;
        setWeeklyData(filteredData);

        if (filteredData[currentDate]) {
          stepCountRef.current = filteredData[currentDate].steps;
          caloriesBurnedRef.current = filteredData[currentDate].calories;
          activeTimeRef.current = filteredData[currentDate].activeTime || 0;
          prevStepCountRef.current = filteredData[currentDate].steps;
          setStepCount(filteredData[currentDate].steps);
          setCaloriesBurned(filteredData[currentDate].calories);
          setActiveTime(filteredData[currentDate].activeTime || 0);
        }
      }
    } catch (e) {
      console.error('Failed to load weekly data:', e);
    }
  };

  const debounceSave = (data) => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => saveWeeklyData(data), 30000);
  };

  const calculateMagnitude = (x, y, z) => Math.sqrt(x * x + y * y + z * z);

  const animateCircle = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 1.15, duration: 150, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 0.95, friction: 4, tension: 40, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start();
  };

  const detectStep = (magnitude, currentTime) => {
    if (currentTime - lastStepTimeRef.current < DETECTION_INTERVAL) {
      setLastMagnitude(magnitude);
      return;
    }

    if (magnitude > REST_THRESHOLD) {
      if (!isMoving && Math.abs(magnitude - lastMagnitude) > THRESHOLD) {
        stepCountRef.current += 1;
        caloriesBurnedRef.current = stepCountRef.current * 0.045;
        activeTimeRef.current = Math.round(stepCountRef.current / 100);

        const currentDate = getCurrentDate();
        weeklyDataRef.current = {
          ...weeklyDataRef.current,
          [currentDate]: { 
            steps: stepCountRef.current, 
            calories: caloriesBurnedRef.current,
            activeTime: activeTimeRef.current
          },
        };

        setStepCount(stepCountRef.current);
        setCaloriesBurned(caloriesBurnedRef.current);
        setActiveTime(activeTimeRef.current);
        setWeeklyData(weeklyDataRef.current);

        debounceSave(weeklyDataRef.current);
        animateCircle();
        setIsMoving(true);
        lastStepTimeRef.current = currentTime;
        prevStepCountRef.current = stepCountRef.current;
      }
    } else {
      setIsMoving(false);
    }
    setLastMagnitude(magnitude);
  };

  const subscribe = async () => {
    const isAvailable = await Accelerometer.isAvailableAsync();
    setIsAccelerometerAvailable(String(isAvailable));

    if (!isAvailable) {
      alert('Error: Accelerometer is not available on this device.');
      return;
    }

    const { status } = await Accelerometer.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission Denied: Accelerometer requires motion permission.');
      setIsAccelerometerAvailable('Permission Denied');
      return;
    }

    Accelerometer.setUpdateInterval(100);
    const listener = Accelerometer.addListener(data => {
      setX(data.x);
      setY(data.y);
      setZ(data.z);
      const magnitude = calculateMagnitude(data.x, data.y, data.z);
      detectStep(magnitude, Date.now());
    });

    setSubscription(listener);
    setIsTracking(true);
  };

  const unsubscribe = () => {
    if (subscription) {
      subscription.remove();
      setSubscription(null);
      setIsTracking(false);
    }
  };

  const resetSteps = async () => {
    const currentDate = getCurrentDate();
    stepCountRef.current = 0;
    prevStepCountRef.current = 0;
    caloriesBurnedRef.current = 0;
    activeTimeRef.current = 0;
    weeklyDataRef.current = {
      ...weeklyDataRef.current,
      [currentDate]: { steps: 0, calories: 0, activeTime: 0 },
    };

    setStepCount(0);
    setCaloriesBurned(0);
    setActiveTime(0);
    setWeeklyData(weeklyDataRef.current);
    await saveWeeklyData(weeklyDataRef.current);
    
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 0.8, duration: 150, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1, friction: 4, tension: 40, useNativeDriver: true }),
    ]).start();
  };

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userEmail = user.email;
        try {
          const usersRef = collection(db, 'users');
          const q = query(usersRef, where('email', '==', userEmail));
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            const userDataFromDb = userDoc.data();
            const fullUserData = {
              id: userDoc.id,
              name: userDataFromDb.name || 'User',
              email: userEmail,
              ...userDataFromDb,
            };
            setUserName(fullUserData.name);
            setUserData(fullUserData);
          } else {
            setUserName('User');
            setUserData({ name: 'User', email: userEmail });
          }
        } catch (error) {
          console.error('Error fetching user name from Firestore:', error);
          setUserName('User');
          setUserData({ name: 'User', email: userEmail });
        }
      } else {
        setUserName('Not logged in');
        setUserData(null);
      }
    });

    loadWeeklyData();
    subscribe();

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    return () => {
      unsubscribeAuth();
      unsubscribe();
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    };
  }, []);

  const progress = Math.min(stepCount / goal, 1);
  const calorieGoal = 500;
  const calorieProgress = Math.min(caloriesBurned / calorieGoal, 1);
  const activeTimeGoal = 60;
  const activeTimeProgress = Math.min(activeTime / activeTimeGoal, 1);

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -20],
    extrapolate: 'clamp',
  });

  const headerScale = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0.95],
    extrapolate: 'clamp',
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 60, 90],
    outputRange: [1, 0.6, 0],
    extrapolate: 'clamp',
  });

  const featuresData = [
    { 
      id: 'workout', 
      title: 'Workout', 
      icon: 'barbell', 
      colors: ['#4A00E0', '#8E2DE2'], 
      screen: 'WorkoutVideos',
      description: 'Find guided workouts'
    },
    { 
      id: 'chat', 
      title: 'Live Chat', 
      icon: 'chatbubbles', 
      colors: ['#11998e', '#38ef7d'], 
      screen: 'LiveChat',
      description: 'Connect with trainers'
    },
    { 
      id: 'shop', 
      title: 'Shop', 
      icon: 'cart', 
      colors: ['#FF416C', '#FF4B2B'], 
      screen: 'ShopProducts',
      description: 'Health products & gear'
    },
    { 
      id: 'plan', 
      title: 'Workout Plan', 
      icon: 'fitness', 
      colors: ['#0072ff', '#00c6ff'], 
      screen: 'WorkoutPlanScreen',
      description: 'Your custom plan'
    },
    { 
      id: 'diet', 
      title: 'Diet Plan', 
      icon: 'nutrition', 
      colors: ['#FC5C7D', '#6A82FB'], 
      screen: 'DietPlanScreen',
      description: 'Nutrition guidance'
    },
    { 
      id: 'records', 
      title: 'Records', 
      icon: 'stats-chart', 
      colors: ['#8A2387', '#E94057'], 
      screen: 'ExerciseRecords',
      description: 'Track your progress'
    },
    { 
      id: 'orders', 
      title: 'My Orders', 
      icon: 'receipt', 
      colors: ['#2A2A72', '#009FFD'], 
      screen: 'MyOrders',
      description: 'View your order history'
    },
  ];

  const featureScales = featuresData.map(() => useState(new Animated.Value(1))[0]);

  const handlePressIn = (scale) => {
    Animated.spring(scale, {
      toValue: 0.92,
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

  const buttonScale1 = useState(new Animated.Value(1))[0];
  const buttonScale2 = useState(new Animated.Value(1))[0];
  const buttonScale4 = useState(new Animated.Value(1))[0];

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      
      <LinearGradient
        colors={['#0F2027', '#203A43', '#2C5364']}
        style={StyleSheet.absoluteFillObject}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />

      <Animated.View style={{ opacity: fadeAnim, flex: 1 }}>
        <Animated.ScrollView
          contentContainerStyle={styles.scrollContent}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }], 
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          <Animated.View style={[
            styles.headerContainer,
            { 
              transform: [
                { translateY: headerTranslateY },
                { scale: headerScale }
              ],
              opacity: headerOpacity
            }
          ]}>
            <BlurView intensity={90} tint="dark" style={styles.blurContainer}>
              <View style={styles.headerContent}>
                <View>
                  <Text style={styles.dateText}>{formattedDate}</Text>
                  <Text style={styles.greeting}>Hello, {userName}</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Profile', { userData })}>
                  <LinearGradient 
                    colors={['#FF416C', '#FF4B2B']} 
                    style={styles.profileButton}
                  >
                    <Ionicons name="person" size={24} color="#FFF" />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </BlurView>
          </Animated.View>

          <View style={styles.summaryContainer}>
            <LinearGradient
              colors={['rgba(255,255,255,0.15)', 'rgba(255,255,255,0.05)']}
              style={styles.summaryCard}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.summaryTitle}>Today's Activity</Text>
              
              <View style={styles.metricRow}>
                <Animated.View style={[styles.circleContainer, { transform: [{ scale: scaleAnim }] }]}>
                  <Circle
                    progress={progress}
                    size={90}
                    thickness={8}
                    color="#5E72E4"
                    unfilledColor="rgba(255,255,255,0.2)"
                    borderWidth={0}
                    strokeCap="round"
                  />
                  <View style={styles.circleContent}>
                    <Text style={styles.circleValue}>{stepCount}</Text>
                    <Text style={styles.circleLabel}>steps</Text>
                  </View>
                </Animated.View>
                
                <View style={styles.metricsDetail}>
                  <View style={styles.progressDetail}>
                    <View style={styles.progressLabelContainer}>
                      <Ionicons name="footsteps" size={16} color="#5E72E4" />
                      <Text style={styles.progressLabel}>Daily Goal</Text>
                    </View>
                    <Text style={styles.progressValue}>{Math.round(progress * 100)}%</Text>
                  </View>
                  
                  <View style={styles.progressBarContainer}>
                    <LinearGradient
                      colors={['#5E72E4', '#825EE4']}
                      style={[styles.progressFill, { width: `${progress * 100}%` }]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                    />
                  </View>
                  
                  <Text style={styles.goalText}>{stepCount} / {goal} steps</Text>
                </View>
              </View>
              
              <View style={styles.additionalMetrics}>
                <View style={styles.metricItem}>
                  <LinearGradient 
                    colors={['#FF416C', '#FF4B2B']} 
                    style={styles.metricIcon}
                  >
                    <Ionicons name="flame" size={18} color="#FFF" />
                  </LinearGradient>
                  <View>
                    <Text style={styles.metricValue}>{caloriesBurned.toFixed(0)}</Text>
                    <Text style={styles.metricLabel}>Calories</Text>
                  </View>
                  <View style={styles.miniProgressContainer}>
                    <LinearGradient
                      colors={['#FF416C', '#FF4B2B']}
                      style={[styles.miniProgressFill, { width: `${calorieProgress * 100}%` }]}
                    />
                  </View>
                </View>
                
                <View style={styles.metricDivider} />
                
                <View style={styles.metricItem}>
                  <LinearGradient 
                    colors={['#11998e', '#38ef7d']} 
                    style={styles.metricIcon}
                  >
                    <Ionicons name="time" size={18} color="#FFF" />
                  </LinearGradient>
                  <View>
                    <Text style={styles.metricValue}>{activeTime}</Text>
                    <Text style={styles.metricLabel}>Active Min</Text>
                  </View>
                  <View style={styles.miniProgressContainer}>
                    <LinearGradient
                      colors={['#11998e', '#38ef7d']}
                      style={[styles.miniProgressFill, { width: `${activeTimeProgress * 100}%` }]}
                    />
                  </View>
                </View>
              </View>
              
              <View style={styles.actionButtonsContainer}>
                <TouchableOpacity
                  onPressIn={() => handlePressIn(buttonScale1)}
                  onPressOut={() => handlePressOut(buttonScale1)}
                  onPress={resetSteps}
                  style={styles.actionButtonWrapper}
                >
                  <Animated.View style={[styles.actionButtonInner, { transform: [{ scale: buttonScale1 }] }]}>
                    <LinearGradient
                      colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.1)']}
                      style={styles.actionButton}
                    >
                      <Ionicons name="refresh" size={16} color="#FFF" />
                      <Text style={styles.actionButtonText}>Reset</Text>
                    </LinearGradient>
                  </Animated.View>
                </TouchableOpacity>
                
                <TouchableOpacity
                  onPressIn={() => handlePressIn(buttonScale2)}
                  onPressOut={() => handlePressOut(buttonScale2)}
                  onPress={() => navigation.navigate('DetailsScreen', { weeklyData })}
                  style={styles.actionButtonWrapper}
                >
                  <Animated.View style={[styles.actionButtonInner, { transform: [{ scale: buttonScale2 }] }]}>
                    <LinearGradient
                      colors={['#5E72E4', '#825EE4']}
                      style={styles.actionButton}
                    >
                      <Ionicons name="stats-chart" size={16} color="#FFF" />
                      <Text style={styles.actionButtonText}>Details</Text>
                    </LinearGradient>
                  </Animated.View>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPressIn={() => handlePressIn(buttonScale4)}
                onPressOut={() => handlePressOut(buttonScale4)}
                onPress={() => navigation.navigate('WorkoutDetection', { userData })}
                style={[styles.actionButtonWrapper, styles.workoutButtonWrapper]}
              >
                <Animated.View style={[styles.actionButtonInner, { transform: [{ scale: buttonScale4 }] }]}>
                  <LinearGradient
                    colors={['#4A00E0', '#8E2DE2']}
                    style={styles.actionButton}
                  >
                    <Ionicons name="barbell" size={16} color="#FFF" />
                    <Text style={styles.actionButtonText}>Workout Detection</Text>
                  </LinearGradient>
                </Animated.View>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Features</Text>
            
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.featuresScrollContainer}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
              )}
              scrollEventThrottle={16}
              decelerationRate="fast"
              snapToInterval={CARD_WIDTH + 15}
              snapToAlignment="center"
            >
              {featuresData.map((item, index) => {
                const inputRange = [
                  (index - 1) * (CARD_WIDTH + 15),
                  index * (CARD_WIDTH + 15),
                  (index + 1) * (CARD_WIDTH + 15)
                ];
                
                const scale = scrollX.interpolate({
                  inputRange,
                  outputRange: [0.92, 1, 0.92],
                  extrapolate: 'clamp'
                });
                
                return (
                  <TouchableOpacity
                    key={item.id}
                    onPressIn={() => handlePressIn(featureScales[index])}
                    onPressOut={() => handlePressOut(featureScales[index])}
                    onPress={() => navigation.navigate(item.screen, { userData })}
                    activeOpacity={0.9}
                  >
                    <Animated.View 
                      style={[
                        styles.featureCard,
                        { transform: [{ scale: featureScales[index] }] }
                      ]}
                    >
                      <LinearGradient
                        colors={item.colors}
                        style={styles.featureGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                      >
                        <View style={styles.featureContent}>
                          <View style={styles.featureIconContainer}>
                            <Ionicons name={item.icon} size={28} color="#FFF" />
                          </View>
                          <Text style={styles.featureTitle}>{item.title}</Text>
                          <Text style={styles.featureDescription}>{item.description}</Text>
                        </View>
                      </LinearGradient>
                    </Animated.View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          
          <View style={styles.quickAccessSection}>
            <Text style={styles.sectionTitle}>Quick Access</Text>
            
            <View style={styles.quickGrid}>
              {featuresData.map((item, index) => (
                <TouchableOpacity
                  key={`quick-${item.id}`}
                  style={styles.quickItem}
                  onPress={() => navigation.navigate(item.screen, { userData })}
                >
                  <LinearGradient
                    colors={item.colors}
                    style={styles.quickItemIcon}
                  >
                    <Ionicons name={item.icon} size={22} color="#FFF" />
                  </LinearGradient>
                  <Text style={styles.quickItemText}>{item.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          
          {isAccelerometerAvailable !== 'true' && (
            <View style={styles.errorContainer}>
              <LinearGradient
                colors={['rgba(239, 68, 68, 0.2)', 'rgba(239, 68, 68, 0.1)']}
                style={styles.errorCard}
              >
                <Ionicons name="warning" size={20} color="#EF4444" />
                <Text style={styles.errorText}>
                  Accelerometer unavailable: {isAccelerometerAvailable}
                </Text>
              </LinearGradient>
            </View>
          )}
          
          <View style={{ height: 20 }} />
        </Animated.ScrollView>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: StatusBar.currentHeight || 40,
    paddingBottom: 30,
  },
  headerContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  blurContainer: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  dateText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 4,
  },
  greeting: {
    fontSize: 26,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  profileButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  summaryCard: {
    borderRadius: 22,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  metricRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  circleContainer: {
    marginRight: 20,
  },
  circleContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleValue: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  circleLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  metricsDetail: {
    flex: 1,
  },
  progressDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressLabel: {
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 6,
  },
  progressValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5E72E4',
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 4,
    marginBottom: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  goalText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  additionalMetrics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 15,
  },
  metricItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  metricIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  metricValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  metricLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  metricDivider: {
    width: 1,
    height: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginHorizontal: 15,
  },
  miniProgressContainer: {
    position: 'absolute',
    bottom: -8,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 1.5,
    overflow: 'hidden',
  },
  miniProgressFill: {
    height: '100%',
    borderRadius: 1.5,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  actionButtonWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
  workoutButtonWrapper: {
    marginHorizontal: 5,
    marginTop: 10,
  },
  actionButtonInner: {
    width: '100%',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 12,
    marginLeft: 6,
  },
  sectionContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginLeft: 20,
    marginBottom: 15,
  },
  featuresScrollContainer: {
    paddingLeft: 20,
    paddingRight: 5,
  },
  featureCard: {
    width: CARD_WIDTH,
    height: 160,
    borderRadius: 20,
    marginRight: 15,
    overflow: 'hidden',
  },
  featureGradient: {
    flex: 1,
    borderRadius: 20,
    padding: 20,
  },
  featureContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  featureIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  featureTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  featureDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  quickAccessSection: {
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  quickGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickItem: {
    width: '48%',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  quickItemIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  quickItemText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  errorContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  errorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.3)',
  },
  errorText: {
    color: '#EF4444',
    fontSize: 14,
    marginLeft: 10,
  },
});








