// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { getAuth } from 'firebase/auth';
// import { supabase } from './supabase';
// import { Animated } from 'react-native';

// export default function ExerciseRecords({ navigation }) {
//   const [records, setRecords] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const fadeAnim = useState(new Animated.Value(0))[0]; // Fade-in animation

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 600,
//       useNativeDriver: true,
//     }).start();

//     async function fetchRecords() {
//       try {
//         // Get Firebase user's email
//         const auth = getAuth();
//         const user = auth.currentUser;
//         if (!user || !user.email) {
//           setError('No user is logged in.');
//           setRecords([]);
//           setLoading(false);
//           return;
//         }

//         // Fetch exercise records from Supabase where email matches
//         const { data, error } = await supabase
//           .from('exercise_records')
//           .select('*')
//           .eq('email', user.email)
//           .order('created_at', { ascending: false });

//         if (error) {
//           console.error('Supabase error:', error);
//           setError('Failed to fetch exercise records.');
//           setRecords([]);
//         } else {
//           setRecords(data);
//           setError(null);
//         }
//       } catch (e) {
//         console.error('Exception:', e);
//         setError('An unexpected error occurred.');
//         setRecords([]);
//       }
//       setLoading(false);
//     }
//     fetchRecords();
//   }, []);

//   const renderItem = ({ item }) => (
//     <View style={styles.record}>
//       <Text style={styles.recordText}>Exercise: {item.exercise_type}</Text>
//       <Text style={styles.recordText}>Reps: {item.reps}</Text>
//       <Text style={styles.recordText}>
//         Date: {new Date(item.created_at).toLocaleDateString()}
//       </Text>
//     </View>
//   );

//   return (
//     <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
//       <Animated.View style={{ opacity: fadeAnim }}>
//         <LinearGradient
//           colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)']}
//           style={styles.header}
//         >
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Ionicons name="arrow-back" size={30} color="#FFFFFF" />
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Exercise Records</Text>
//         </LinearGradient>
//         {loading ? (
//           <View style={styles.loaderContainer}>
//             <ActivityIndicator size="large" color="#FF6F61" />
//             <Text style={styles.loadingText}>Loading Records...</Text>
//           </View>
//         ) : error ? (
//           <Text style={styles.errorText}>{error}</Text>
//         ) : records.length === 0 ? (
//           <Text style={styles.emptyText}>No exercise records found.</Text>
//         ) : (
//           <FlatList
//             data={records}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.id.toString()}
//             contentContainerStyle={styles.list}
//           />
//         )}
//       </Animated.View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
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
//   list: {
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 120,
//   },
//   record: {
//     backgroundColor: '#FFFFFF',
//     padding: 15,
//     borderRadius: 15,
//     marginVertical: 10,
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//   },
//   recordText: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#1F2937',
//     marginBottom: 5,
//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     marginTop: 10,
//     fontWeight: '600',
//   },
//   errorText: {
//     fontSize: 18,
//     color: '#E53E3E',
//     textAlign: 'center',
//     marginTop: 50,
//     fontWeight: '500',
//   },
//   emptyText: {
//     fontSize: 18,
//     color: '#FFFFFF',
//     textAlign: 'center',
//     marginTop: 50,
//     fontWeight: '500',
//   },
// });





// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity, Animated } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { getAuth } from 'firebase/auth';
// import { supabase } from './supabase';

// export default function ExerciseRecords({ navigation }) {
//   const [records, setRecords] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const fadeAnim = useState(new Animated.Value(0))[0]; // Fade-in animation

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 600,
//       useNativeDriver: true,
//     }).start();

//     async function fetchRecords() {
//       try {
//         // Get Firebase user's email
//         const auth = getAuth();
//         const user = auth.currentUser;
//         if (!user || !user.email) {
//           setError('No user is logged in.');
//           setRecords([]);
//           setLoading(false);
//           return;
//         }

//         // Calculate the date 3 days ago
//         const threeDaysAgo = new Date();
//         threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
//         const threeDaysAgoISO = threeDaysAgo.toISOString();

//         // Fetch exercise records from Supabase for the last 3 days
//         const { data, error } = await supabase
//           .from('exercise_records')
//           .select('*')
//           .eq('email', user.email)
//           .gte('created_at', threeDaysAgoISO)
//           .order('created_at', { ascending: false });

//         if (error) {
//           console.error('Supabase error:', error);
//           setError('Failed to fetch exercise records.');
//           setRecords([]);
//         } else {
//           setRecords(data);
//           setError(null);
//         }
//       } catch (e) {
//         console.error('Exception:', e);
//         setError('An unexpected error occurred.');
//         setRecords([]);
//       }
//       setLoading(false);
//     }
//     fetchRecords();
//   }, []);

//   const formatDateTime = (timestamp) => {
//     const date = new Date(timestamp);
//     const dateStr = date.toLocaleDateString();
//     const timeStr = date.toLocaleTimeString([], { hour12: false }); // 24-hour format
//     return `${dateStr} ${timeStr}`;
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.record}>
//       <Text style={styles.recordText}>Exercise: {item.exercise_type}</Text>
//       <Text style={styles.recordText}>Reps: {item.reps}</Text>
//       <Text style={styles.recordText}>Time: {formatDateTime(item.created_at)}</Text>
//     </View>
//   );

//   return (
//     <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
//       <Animated.View style={{ opacity: fadeAnim }}>
//         <LinearGradient
//           colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)']}
//           style={styles.header}
//         >
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Ionicons name="arrow-back" size={30} color="#FFFFFF" />
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Exercise Records (Last 3 Days)</Text>
//         </LinearGradient>
//         {loading ? (
//           <View style={styles.loaderContainer}>
//             <ActivityIndicator size="large" color="#FF6F61" />
//             <Text style={styles.loadingText}>Loading Records...</Text>
//           </View>
//         ) : error ? (
//           <Text style={styles.errorText}>{error}</Text>
//         ) : records.length === 0 ? (
//           <Text style={styles.emptyText}>No exercise records found for the last 3 days.</Text>
//         ) : (
//           <FlatList
//             data={records}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.id.toString()}
//             contentContainerStyle={styles.list}
//           />
//         )}
//       </Animated.View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
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
//   list: {
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 120,
//   },
//   record: {
//     backgroundColor: '#FFFFFF',
//     padding: 15,
//     borderRadius: 15,
//     marginVertical: 10,
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//   },
//   recordText: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#1F2937',
//     marginBottom: 5,
//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     marginTop: 10,
//     fontWeight: '600',
//   },
//   errorText: {
//     fontSize: 18,
//     color: '#E53E3E',
//     textAlign: 'center',
//     marginTop: 50,
//     fontWeight: '500',
//   },
//   emptyText: {
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
//   ActivityIndicator, 
//   TouchableOpacity, 
//   Animated,
//   Image,
//   Dimensions
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { getAuth } from 'firebase/auth';
// import { supabase } from './supabase';

// const SCREEN_WIDTH = Dimensions.get('window').width;

// // Exercise icons mapping
// const exerciseIcons = {
//   'bicep curl': 'fitness',
//   'pushup': 'body',
//   'squat': 'body-outline',
//   'shoulder press': 'barbell-outline',
//   'lateral raises': 'barbell'
// };

// // Exercise colors mapping
// const exerciseColors = {
//   'bicep curl': ['#FF6B6B', '#FF8E8E'],
//   'pushup': ['#4ECDC4', '#6BE2D9'],
//   'squat': ['#7F5AF0', '#9D84F7'],
//   'shoulder press': ['#F9C80E', '#FFDA58'],
//   'lateral raises': ['#FF9F1C', '#FFBE5B']
// };

// export default function ExerciseRecords({ navigation }) {
//   const [records, setRecords] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [stats, setStats] = useState({
//     total: 0,
//     todayTotal: 0,
//     mostPopular: '',
//     progress: 0
//   });
//   const fadeAnim = useState(new Animated.Value(0))[0];
//   const scaleAnim = useState(new Animated.Value(0.9))[0];

//   useEffect(() => {
//     Animated.parallel([
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 800,
//         useNativeDriver: true,
//       }),
//       Animated.spring(scaleAnim, {
//         toValue: 1,
//         friction: 8,
//         tension: 40,
//         useNativeDriver: true,
//       })
//     ]).start();

//     async function fetchRecords() {
//       try {
//         // Get Firebase user's email
//         const auth = getAuth();
//         const user = auth.currentUser;
//         if (!user || !user.email) {
//           setError('No user is logged in.');
//           setRecords([]);
//           setLoading(false);
//           return;
//         }

//         // Calculate the date 3 days ago
//         const threeDaysAgo = new Date();
//         threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
//         const threeDaysAgoISO = threeDaysAgo.toISOString();

//         // Fetch exercise records from Supabase for the last 3 days
//         const { data, error } = await supabase
//           .from('exercise_records')
//           .select('*')
//           .eq('email', user.email)
//           .gte('created_at', threeDaysAgoISO)
//           .order('created_at', { ascending: false });

//         if (error) {
//           console.error('Supabase error:', error);
//           setError('Failed to fetch exercise records.');
//           setRecords([]);
//         } else {
//           // Process data
//           setRecords(data);
          
//           // Calculate stats
//           if (data.length > 0) {
//             // Count exercises by type
//             const exerciseCounts = {};
//             let totalReps = 0;
//             let todayReps = 0;
            
//             // Get today's date as string for comparison
//             const today = new Date().toLocaleDateString();
            
//             data.forEach(record => {
//               // Count by exercise type
//               exerciseCounts[record.exercise_type] = (exerciseCounts[record.exercise_type] || 0) + 1;
              
//               // Total reps
//               totalReps += record.reps;
              
//               // Today's reps
//               const recordDate = new Date(record.created_at).toLocaleDateString();
//               if (recordDate === today) {
//                 todayReps += record.reps;
//               }
//             });
            
//             // Find most popular exercise
//             let mostPopular = '';
//             let maxCount = 0;
            
//             Object.keys(exerciseCounts).forEach(exercise => {
//               if (exerciseCounts[exercise] > maxCount) {
//                 maxCount = exerciseCounts[exercise];
//                 mostPopular = exercise;
//               }
//             });
            
//             // Calculate progress (simple metric: today's reps as percentage of total)
//             const progress = Math.min(Math.round((todayReps / (totalReps || 1)) * 100), 100);
            
//             setStats({
//               total: totalReps,
//               todayTotal: todayReps,
//               mostPopular,
//               progress
//             });
//           }
          
//           setError(null);
//         }
//       } catch (e) {
//         console.error('Exception:', e);
//         setError('An unexpected error occurred.');
//         setRecords([]);
//       }
//       setLoading(false);
//     }
//     fetchRecords();
//   }, []);

//   const formatDateTime = (timestamp) => {
//     const date = new Date(timestamp);
//     const now = new Date();
//     const isToday = date.toLocaleDateString() === now.toLocaleDateString();
    
//     if (isToday) {
//       return `Today at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
//     }

//     const yesterday = new Date();
//     yesterday.setDate(yesterday.getDate() - 1);
//     const isYesterday = date.toLocaleDateString() === yesterday.toLocaleDateString();
    
//     if (isYesterday) {
//       return `Yesterday at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
//     }

//     return `${date.toLocaleDateString()} at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
//   };

//   const getMotivationalFeedback = () => {
//     if (stats.todayTotal === 0) {
//       return "Time to start your fitness journey today!";
//     } else if (stats.todayTotal < 50) {
//       return "Good start! Keep pushing yourself!";
//     } else if (stats.todayTotal < 100) {
//       return "Great job! You're building strength!";
//     } else if (stats.todayTotal < 200) {
//       return "Impressive effort! You're crushing it!";
//     } else {
//       return "Incredible workout warrior! Unstoppable!";
//     }
//   };

//   const getExerciseIcon = (exerciseType) => {
//     const lowerType = exerciseType.toLowerCase();
//     return exerciseIcons[lowerType] || 'fitness-outline';
//   };
  
//   const getExerciseColors = (exerciseType) => {
//     const lowerType = exerciseType.toLowerCase();
//     return exerciseColors[lowerType] || ['#6C63FF', '#8F89FF'];
//   };

//   const renderItem = ({ item, index }) => {
//     const exerciseIcon = getExerciseIcon(item.exercise_type);
//     const [color1, color2] = getExerciseColors(item.exercise_type);
    
//     // Animation delay based on index
//     const animationDelay = index * 100;
//     const itemFadeAnim = useState(new Animated.Value(0))[0];
//     const itemTranslateYAnim = useState(new Animated.Value(20))[0];
    
//     useEffect(() => {
//       Animated.parallel([
//         Animated.timing(itemFadeAnim, {
//           toValue: 1,
//           duration: 500,
//           delay: animationDelay,
//           useNativeDriver: true,
//         }),
//         Animated.timing(itemTranslateYAnim, {
//           toValue: 0,
//           duration: 500,
//           delay: animationDelay,
//           useNativeDriver: true,
//         })
//       ]).start();
//     }, []);
    
//     return (
//       <Animated.View 
//         style={[
//           { opacity: itemFadeAnim, transform: [{ translateY: itemTranslateYAnim }] }
//         ]}
//       >
//         <LinearGradient
//           colors={[color1, color2]}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 0 }}
//           style={styles.record}
//         >
//           <View style={styles.recordIcon}>
//             <Ionicons name={exerciseIcon} size={26} color="#FFFFFF" />
//           </View>
//           <View style={styles.recordContent}>
//             <Text style={styles.recordTitle}>{item.exercise_type}</Text>
//             <View style={styles.recordDetails}>
//               <Text style={styles.recordReps}>{item.reps} reps</Text>
//               <Text style={styles.recordTime}>{formatDateTime(item.created_at)}</Text>
//             </View>
//           </View>
//         </LinearGradient>
//       </Animated.View>
//     );
//   };

//   const renderHeader = () => {
//     if (loading || error || records.length === 0) return null;
    
//     return (
//       <Animated.View 
//         style={[
//           styles.statsContainer, 
//           { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }
//         ]}
//       >
//         <LinearGradient
//           colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.05)']}
//           style={styles.statsCard}
//         >
//           <View style={styles.statsRow}>
//             <View style={styles.statItem}>
//               <Text style={styles.statValue}>{stats.todayTotal}</Text>
//               <Text style={styles.statLabel}>Today's Reps</Text>
//             </View>
//             <View style={styles.statDivider} />
//             <View style={styles.statItem}>
//               <Text style={styles.statValue}>{stats.total}</Text>
//               <Text style={styles.statLabel}>Total Reps</Text>
//             </View>
//           </View>
          
//           {stats.mostPopular && (
//             <View style={styles.favoriteExercise}>
//               <Text style={styles.favoriteLabel}>Favorite Exercise</Text>
//               <View style={styles.favoriteContent}>
//                 <Ionicons 
//                   name={getExerciseIcon(stats.mostPopular)} 
//                   size={20} 
//                   color="#FF6B6B" 
//                   style={styles.favoriteIcon} 
//                 />
//                 <Text style={styles.favoriteValue}>{stats.mostPopular}</Text>
//               </View>
//             </View>
//           )}
          
//           <View style={styles.progressContainer}>
//             <View style={styles.progressRow}>
//               <Text style={styles.progressLabel}>Daily Progress</Text>
//               <Text style={styles.progressValue}>{stats.progress}%</Text>
//             </View>
//             <View style={styles.progressBarContainer}>
//               <View style={[styles.progressBar, { width: `${stats.progress}%` }]} />
//             </View>
//           </View>
          
//           <View style={styles.motivationalContainer}>
//             <Text style={styles.motivationalText}>{getMotivationalFeedback()}</Text>
//           </View>
//         </LinearGradient>
//       </Animated.View>
//     );
//   };

//   const renderEmptyList = () => {
//     if (loading || error) return null;
    
//     return (
//       <Animated.View 
//         style={[
//           styles.emptyContainer, 
//           { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }
//         ]}
//       >
//         <Ionicons name="fitness-outline" size={80} color="rgba(255,255,255,0.3)" />
//         <Text style={styles.emptyText}>No exercise records found.</Text>
//         <Text style={styles.emptySubtext}>Start your fitness journey today!</Text>
        
//         <TouchableOpacity 
//           style={styles.addButton}
//           onPress={() => navigation.navigate('AddExercise')} // Assuming you have this screen
//         >
//           <LinearGradient
//             colors={['#FF6B6B', '#FF8E8E']}
//             style={styles.addButtonGradient}
//           >
//             <Text style={styles.addButtonText}>Add Exercise</Text>
//             <Ionicons name="add-circle" size={22} color="#FFFFFF" />
//           </LinearGradient>
//         </TouchableOpacity>
//       </Animated.View>
//     );
//   };

//   return (
//     <LinearGradient 
//       colors={['#1A2151', '#323B72']} 
//       start={{ x: 0, y: 0 }}
//       end={{ x: 1, y: 1 }}
//       style={styles.container}
//     >
//       {/* Header */}
//       <Animated.View style={[styles.headerContainer, { opacity: fadeAnim }]}>
//         <LinearGradient
//           colors={['rgba(255, 255, 255, 0.13)', 'rgba(255, 255, 255, 0.05)']}
//           style={styles.header}
//         >
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Ionicons name="arrow-back" size={26} color="#FFFFFF" />
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Fitness Tracker</Text>
//           <TouchableOpacity style={styles.infoButton}>
//             <Ionicons name="calendar" size={24} color="#FFFFFF" />
//           </TouchableOpacity>
//         </LinearGradient>
//         <Text style={styles.headerSubtitle}>Your Exercise Records</Text>
//       </Animated.View>

//       {/* Content */}
//       {loading ? (
//         <View style={styles.loaderContainer}>
//           <ActivityIndicator size="large" color="#FF6B6B" />
//           <Text style={styles.loadingText}>Loading your fitness journey...</Text>
//         </View>
//       ) : error ? (
//         <View style={styles.errorContainer}>
//           <Ionicons name="alert-circle" size={60} color="#FF6B6B" />
//           <Text style={styles.errorText}>{error}</Text>
//           <TouchableOpacity 
//             style={styles.retryButton}
//             onPress={() => navigation.replace('ExerciseRecords')}
//           >
//             <Text style={styles.retryText}>Retry</Text>
//           </TouchableOpacity>
//         </View>
//       ) : (
//         <FlatList
//           data={records}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id.toString()}
//           contentContainerStyle={styles.list}
//           ListHeaderComponent={renderHeader}
//           ListEmptyComponent={renderEmptyList}
//           showsVerticalScrollIndicator={false}
//         />
//       )}

//       {/* Floating Action Button - only show when there are records */}
//       {!loading && !error && records.length > 0 && (
//         <TouchableOpacity 
//           style={styles.fab}
//           onPress={() => navigation.navigate('AddExercise')} // Assuming you have this screen
//         >
//           <LinearGradient
//             colors={['#FF6B6B', '#FF8E8E']}
//             style={styles.fabGradient}
//           >
//             <Ionicons name="add" size={32} color="#FFFFFF" />
//           </LinearGradient>
//         </TouchableOpacity>
//       )}
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1E2A44',
//   },
//   headerContainer: {
//     paddingTop: 50, // For status bar
//     paddingBottom: 15,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//     borderRadius: 20,
//     marginHorizontal: 15,
//     marginBottom: 5,
//   },
//   headerTitle: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     textShadowColor: 'rgba(0, 0, 0, 0.2)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 3,
//   },
//   headerSubtitle: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: 'rgba(255, 255, 255, 0.7)',
//     textAlign: 'center',
//     marginTop: 5,
//   },
//   backButton: {
//     padding: 5,
//   },
//   infoButton: {
//     padding: 5,
//   },
//   list: {
//     paddingHorizontal: 15,
//     paddingTop: 10,
//     paddingBottom: 100, // Extra space for FAB
//   },
//   statsContainer: {
//     marginBottom: 20,
//   },
//   statsCard: {
//     padding: 20,
//     borderRadius: 20,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowRadius: 10,
//     shadowOffset: { width: 0, height: 5 },
//   },
//   statsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   statItem: {
//     alignItems: 'center',
//   },
//   statValue: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     marginBottom: 5,
//   },
//   statLabel: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   statDivider: {
//     height: '70%',
//     width: 1,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   favoriteExercise: {
//     marginTop: 10,
//     marginBottom: 15,
//     paddingTop: 15,
//     borderTopWidth: 1,
//     borderTopColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   favoriteLabel: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: 'rgba(255, 255, 255, 0.7)',
//     marginBottom: 6,
//   },
//   favoriteContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   favoriteIcon: {
//     marginRight: 8,
//   },
//   favoriteValue: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     textTransform: 'capitalize',
//   },
//   progressContainer: {
//     marginBottom: 15,
//   },
//   progressRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   progressLabel: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   progressValue: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
//   progressBarContainer: {
//     height: 8,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 4,
//     overflow: 'hidden',
//   },
//   progressBar: {
//     height: '100%',
//     backgroundColor: '#FF6B6B',
//     borderRadius: 4,
//   },
//   motivationalContainer: {
//     marginTop: 5,
//     paddingTop: 15,
//     borderTopWidth: 1,
//     borderTopColor: 'rgba(255, 255, 255, 0.1)',
//     alignItems: 'center',
//   },
//   motivationalText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     textAlign: 'center',
//     fontStyle: 'italic',
//   },
//   record: {
//     flexDirection: 'row',
//     borderRadius: 16,
//     marginBottom: 15,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 4 },
//     overflow: 'hidden',
//   },
//   recordIcon: {
//     width: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.1)',
//   },
//   recordContent: {
//     flex: 1,
//     padding: 15,
//   },
//   recordTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     marginBottom: 5,
//     textTransform: 'capitalize',
//   },
//   recordDetails: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   recordReps: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: 'rgba(255, 255, 255, 0.85)',
//   },
//   recordTime: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     marginTop: 15,
//     fontWeight: '500',
//   },
//   errorContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 30,
//   },
//   errorText: {
//     fontSize: 16,
//     color: '#FFFFFF',
//     textAlign: 'center',
//     marginTop: 20,
//     marginBottom: 30,
//     fontWeight: '500',
//     opacity: 0.8,
//   },
//   retryButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 30,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 30,
//   },
//   retryText: {
//     color: '#FFFFFF',
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   emptyContainer: {
//     flex: 1,
//     paddingTop: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   emptyText: {
//     marginTop: 20,
//     fontSize: 18,
//     color: '#FFFFFF',
//     fontWeight: '600',
//   },
//   emptySubtext: {
//     marginTop: 10,
//     fontSize: 14,
//     color: 'rgba(255, 255, 255, 0.7)',
//     fontWeight: '500',
//     marginBottom: 40,
//   },
//   addButton: {
//     marginTop: 20,
//     width: SCREEN_WIDTH * 0.6,
//     height: 50,
//     borderRadius: 25,
//     overflow: 'hidden',
//   },
//   addButtonGradient: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   addButtonText: {
//     color: '#FFFFFF',
//     fontWeight: '600',
//     fontSize: 16,
//     marginRight: 8,
//   },
//   fab: {
//     position: 'absolute',
//     bottom: 30,
//     right: 30,
//     width: 60,
//     height: 60,
//     borderRadius:
//     30,
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 4 },
//     overflow: 'hidden',
//   },
//   fabGradient: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });




// import React, { useState, useEffect } from 'react';
// import { 
//   View, 
//   Text, 
//   FlatList, 
//   StyleSheet, 
//   ActivityIndicator, 
//   TouchableOpacity, 
//   Animated,
//   Image,
//   Dimensions
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { getAuth } from 'firebase/auth';
// import { supabase } from './supabase';

// const SCREEN_WIDTH = Dimensions.get('window').width;

// // Exercise icons mapping
// const exerciseIcons = {
//   'bicep curl': 'fitness',
//   'pushup': 'body',
//   'squat': 'body-outline',
//   'shoulder press': 'barbell-outline',
//   'lateral raises': 'barbell'
// };

// // Exercise colors mapping
// const exerciseColors = {
//   'bicep curl': ['#FF6B6B', '#FF8E8E'],
//   'pushup': ['#4ECDC4', '#6BE2D9'],
//   'squat': ['#7F5AF0', '#9D84F7'],
//   'shoulder press': ['#F9C80E', '#FFDA58'],
//   'lateral raises': ['#FF9F1C', '#FFBE5B']
// };

// export default function ExerciseRecords({ navigation }) {
//   const [records, setRecords] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [stats, setStats] = useState({
//     total: 0,
//     todayTotal: 0,
//     mostPopular: '',
//     progress: 0
//   });
//   const fadeAnim = useState(new Animated.Value(0))[0];
//   const scaleAnim = useState(new Animated.Value(0.9))[0];

//   useEffect(() => {
//     Animated.parallel([
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 800,
//         useNativeDriver: true,
//       }),
//       Animated.spring(scaleAnim, {
//         toValue: 1,
//         friction: 8,
//         tension: 40,
//         useNativeDriver: true,
//       })
//     ]).start();

//     async function fetchRecords() {
//       try {
//         // Get Firebase user's email
//         const auth = getAuth();
//         const user = auth.currentUser;
//         if (!user || !user.email) {
//           setError('No user is logged in.');
//           setRecords([]);
//           setLoading(false);
//           return;
//         }

//         // Calculate the date 3 days ago
//         const threeDaysAgo = new Date();
//         threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
//         const threeDaysAgoISO = threeDaysAgo.toISOString();

//         // Fetch exercise records from Supabase for the last 3 days
//         const { data, error } = await supabase
//           .from('exercise_records')
//           .select('*')
//           .eq('email', user.email)
//           .gte('created_at', threeDaysAgoISO)
//           .order('created_at', { ascending: false });

//         if (error) {
//           console.error('Supabase error:', error);
//           setError('Failed to fetch exercise records.');
//           setRecords([]);
//         } else {
//           // Process data
//           setRecords(data);
          
//           // Calculate stats
//           if (data.length > 0) {
//             // Count exercises by type
//             const exerciseCounts = {};
//             let totalReps = 0;
//             let todayReps = 0;
            
//             // Get today's date as string for comparison
//             const today = new Date().toLocaleDateString();
            
//             data.forEach(record => {
//               // Count by exercise type
//               exerciseCounts[record.exercise_type] = (exerciseCounts[record.exercise_type] || 0) + 1;
              
//               // Total reps
//               totalReps += record.reps;
              
//               // Today's reps
//               const recordDate = new Date(record.created_at).toLocaleDateString();
//               if (recordDate === today) {
//                 todayReps += record.reps;
//               }
//             });
            
//             // Find most popular exercise
//             let mostPopular = '';
//             let maxCount = 0;
            
//             Object.keys(exerciseCounts).forEach(exercise => {
//               if (exerciseCounts[exercise] > maxCount) {
//                 maxCount = exerciseCounts[exercise];
//                 mostPopular = exercise;
//               }
//             });
            
//             // Calculate progress (simple metric: today's reps as percentage of total)
//             const progress = Math.min(Math.round((todayReps / (totalReps || 1)) * 100), 100);
            
//             setStats({
//               total: totalReps,
//               todayTotal: todayReps,
//               mostPopular,
//               progress
//             });
//           }
          
//           setError(null);
//         }
//       } catch (e) {
//         console.error('Exception:', e);
//         setError('An unexpected error occurred.');
//         setRecords([]);
//       }
//       setLoading(false);
//     }
//     fetchRecords();
//   }, []);

//   const formatDateTime = (timestamp) => {
//     const date = new Date(timestamp);
//     const now = new Date();
//     const isToday = date.toLocaleDateString() === now.toLocaleDateString();
    
//     if (isToday) {
//       return `Today at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
//     }

//     const yesterday = new Date();
//     yesterday.setDate(yesterday.getDate() - 1);
//     const isYesterday = date.toLocaleDateString() === yesterday.toLocaleDateString();
    
//     if (isYesterday) {
//       return `Yesterday at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
//     }

//     return `${date.toLocaleDateString()} at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
//   };

//   const getMotivationalFeedback = () => {
//     if (stats.todayTotal === 0) {
//       return "Time to start your fitness journey today!";
//     } else if (stats.todayTotal < 50) {
//       return "Good start! Keep pushing yourself!";
//     } else if (stats.todayTotal < 100) {
//       return "Great job! You're building strength!";
//     } else if (stats.todayTotal < 200) {
//       return "Impressive effort! You're crushing it!";
//     } else {
//       return "Incredible workout warrior! Unstoppable!";
//     }
//   };

//   const getExerciseIcon = (exerciseType) => {
//     const lowerType = exerciseType.toLowerCase();
//     return exerciseIcons[lowerType] || 'fitness-outline';
//   };
  
//   const getExerciseColors = (exerciseType) => {
//     const lowerType = exerciseType.toLowerCase();
//     return exerciseColors[lowerType] || ['#6C63FF', '#8F89FF'];
//   };

//   // Create animations for list items
//   const [listItemAnimations] = useState(() => {
//     // Pre-create animations for potential list items (up to 50)
//     return Array(50).fill().map(() => ({
//       opacity: new Animated.Value(0),
//       translateY: new Animated.Value(20)
//     }));
//   });
  
//   // Start animations when records are loaded
//   useEffect(() => {
//     if (!loading && records.length > 0) {
//       records.forEach((_, index) => {
//         const delay = index * 100;
//         if (listItemAnimations[index]) {
//           Animated.parallel([
//             Animated.timing(listItemAnimations[index].opacity, {
//               toValue: 1,
//               duration: 500,
//               delay,
//               useNativeDriver: true,
//             }),
//             Animated.timing(listItemAnimations[index].translateY, {
//               toValue: 0,
//               duration: 500,
//               delay,
//               useNativeDriver: true,
//             })
//           ]).start();
//         }
//       });
//     }
//   }, [loading, records]);

//   const renderItem = ({ item, index }) => {
//     const exerciseIcon = getExerciseIcon(item.exercise_type);
//     const [color1, color2] = getExerciseColors(item.exercise_type);
    
//     // Use pre-created animations for this item or fallback to default styles
//     const itemAnimation = index < listItemAnimations.length 
//       ? listItemAnimations[index] 
//       : { opacity: new Animated.Value(1), translateY: new Animated.Value(0) };
    
//     return (
//       <Animated.View 
//         style={[
//           { opacity: itemAnimation.opacity, transform: [{ translateY: itemAnimation.translateY }] }
//         ]}
//       >
//         <LinearGradient
//           colors={[color1, color2]}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 0 }}
//           style={styles.record}
//         >
//           <View style={styles.recordIcon}>
//             <Ionicons name={exerciseIcon} size={26} color="#FFFFFF" />
//           </View>
//           <View style={styles.recordContent}>
//             <Text style={styles.recordTitle}>{item.exercise_type}</Text>
//             <View style={styles.recordDetails}>
//               <Text style={styles.recordReps}>{item.reps} reps</Text>
//               <Text style={styles.recordTime}>{formatDateTime(item.created_at)}</Text>
//             </View>
//           </View>
//         </LinearGradient>
//       </Animated.View>
//     );
//   };

//   const renderHeader = () => {
//     if (loading || error || records.length === 0) return null;
    
//     return (
//       <Animated.View 
//         style={[
//           styles.statsContainer, 
//           { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }
//         ]}
//       >
//         <LinearGradient
//           colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.05)']}
//           style={styles.statsCard}
//         >
//           <View style={styles.statsRow}>
//             <View style={styles.statItem}>
//               <Text style={styles.statValue}>{stats.todayTotal}</Text>
//               <Text style={styles.statLabel}>Today's Reps</Text>
//             </View>
//             <View style={styles.statDivider} />
//             <View style={styles.statItem}>
//               <Text style={styles.statValue}>{stats.total}</Text>
//               <Text style={styles.statLabel}>Total Reps</Text>
//             </View>
//           </View>
          
//           {stats.mostPopular && (
//             <View style={styles.favoriteExercise}>
//               <Text style={styles.favoriteLabel}>Favorite Exercise</Text>
//               <View style={styles.favoriteContent}>
//                 <Ionicons 
//                   name={getExerciseIcon(stats.mostPopular)} 
//                   size={20} 
//                   color="#FF6B6B" 
//                   style={styles.favoriteIcon} 
//                 />
//                 <Text style={styles.favoriteValue}>{stats.mostPopular}</Text>
//               </View>
//             </View>
//           )}
          
//           <View style={styles.progressContainer}>
//             <View style={styles.progressRow}>
//               <Text style={styles.progressLabel}>Daily Progress</Text>
//               <Text style={styles.progressValue}>{stats.progress}%</Text>
//             </View>
//             <View style={styles.progressBarContainer}>
//               <View style={[styles.progressBar, { width: `${stats.progress}%` }]} />
//             </View>
//           </View>
          
//           <View style={styles.motivationalContainer}>
//             <Text style={styles.motivationalText}>{getMotivationalFeedback()}</Text>
//           </View>
//         </LinearGradient>
//       </Animated.View>
//     );
//   };

//   const renderEmptyList = () => {
//     if (loading || error) return null;
    
//     return (
//       <Animated.View 
//         style={[
//           styles.emptyContainer, 
//           { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }
//         ]}
//       >
//         <Ionicons name="fitness-outline" size={80} color="rgba(255,255,255,0.3)" />
//         <Text style={styles.emptyText}>No exercise records found.</Text>
//         <Text style={styles.emptySubtext}>Start your fitness journey today!</Text>
        
//         <TouchableOpacity 
//           style={styles.addButton}
//           onPress={() => navigation.navigate('AddExercise')} // Assuming you have this screen
//         >
//           <LinearGradient
//             colors={['#FF6B6B', '#FF8E8E']}
//             style={styles.addButtonGradient}
//           >
//             <Text style={styles.addButtonText}>Add Exercise</Text>
//             <Ionicons name="add-circle" size={22} color="#FFFFFF" />
//           </LinearGradient>
//         </TouchableOpacity>
//       </Animated.View>
//     );
//   };

//   return (
//     <LinearGradient 
//       colors={['#1A2151', '#323B72']} 
//       start={{ x: 0, y: 0 }}
//       end={{ x: 1, y: 1 }}
//       style={styles.container}
//     >
//       {/* Header */}
//       <Animated.View style={[styles.headerContainer, { opacity: fadeAnim }]}>
//         <LinearGradient
//           colors={['rgba(255, 255, 255, 0.13)', 'rgba(255, 255, 255, 0.05)']}
//           style={styles.header}
//         >
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Ionicons name="arrow-back" size={26} color="#FFFFFF" />
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Fitness Tracker</Text>
//           <TouchableOpacity style={styles.infoButton}>
//             <Ionicons name="calendar" size={24} color="#FFFFFF" />
//           </TouchableOpacity>
//         </LinearGradient>
//         <Text style={styles.headerSubtitle}>Your Exercise Records</Text>
//       </Animated.View>

//       {/* Content */}
//       {loading ? (
//         <View style={styles.loaderContainer}>
//           <ActivityIndicator size="large" color="#FF6B6B" />
//           <Text style={styles.loadingText}>Loading your fitness journey...</Text>
//         </View>
//       ) : error ? (
//         <View style={styles.errorContainer}>
//           <Ionicons name="alert-circle" size={60} color="#FF6B6B" />
//           <Text style={styles.errorText}>{error}</Text>
//           <TouchableOpacity 
//             style={styles.retryButton}
//             onPress={() => navigation.replace('ExerciseRecords')}
//           >
//             <Text style={styles.retryText}>Retry</Text>
//           </TouchableOpacity>
//         </View>
//       ) : (
//         <FlatList
//           data={records}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id.toString()}
//           contentContainerStyle={styles.list}
//           ListHeaderComponent={renderHeader}
//           ListEmptyComponent={renderEmptyList}
//           showsVerticalScrollIndicator={false}
//         />
//       )}

//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1E2A44',
//   },
//   headerContainer: {
//     paddingTop: 50, // For status bar
//     paddingBottom: 15,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//     borderRadius: 20,
//     marginHorizontal: 15,
//     marginBottom: 5,
//   },
//   headerTitle: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     textShadowColor: 'rgba(0, 0, 0, 0.2)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 3,
//   },
//   headerSubtitle: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: 'rgba(255, 255, 255, 0.7)',
//     textAlign: 'center',
//     marginTop: 5,
//   },
//   backButton: {
//     padding: 5,
//   },
//   infoButton: {
//     padding: 5,
//   },
//   list: {
//     paddingHorizontal: 15,
//     paddingTop: 10,
//     paddingBottom: 100, // Extra space for FAB
//   },
//   statsContainer: {
//     marginBottom: 20,
//   },
//   statsCard: {
//     padding: 20,
//     borderRadius: 20,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowRadius: 10,
//     shadowOffset: { width: 0, height: 5 },
//   },
//   statsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   statItem: {
//     alignItems: 'center',
//   },
//   statValue: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     marginBottom: 5,
//   },
//   statLabel: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   statDivider: {
//     height: '70%',
//     width: 1,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   favoriteExercise: {
//     marginTop: 10,
//     marginBottom: 15,
//     paddingTop: 15,
//     borderTopWidth: 1,
//     borderTopColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   favoriteLabel: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: 'rgba(255, 255, 255, 0.7)',
//     marginBottom: 6,
//   },
//   favoriteContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   favoriteIcon: {
//     marginRight: 8,
//   },
//   favoriteValue: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     textTransform: 'capitalize',
//   },
//   progressContainer: {
//     marginBottom: 15,
//   },
//   progressRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   progressLabel: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   progressValue: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#FFFFFF',
//   },
//   progressBarContainer: {
//     height: 8,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 4,
//     overflow: 'hidden',
//   },
//   progressBar: {
//     height: '100%',
//     backgroundColor: '#FF6B6B',
//     borderRadius: 4,
//   },
//   motivationalContainer: {
//     marginTop: 5,
//     paddingTop: 15,
//     borderTopWidth: 1,
//     borderTopColor: 'rgba(255, 255, 255, 0.1)',
//     alignItems: 'center',
//   },
//   motivationalText: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#FFFFFF',
//     textAlign: 'center',
//     fontStyle: 'italic',
//   },
//   record: {
//     flexDirection: 'row',
//     borderRadius: 16,
//     marginBottom: 15,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 4 },
//     overflow: 'hidden',
//   },
//   recordIcon: {
//     width: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.1)',
//   },
//   recordContent: {
//     flex: 1,
//     padding: 15,
//   },
//   recordTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     marginBottom: 5,
//     textTransform: 'capitalize',
//   },
//   recordDetails: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   recordReps: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: 'rgba(255, 255, 255, 0.85)',
//   },
//   recordTime: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     marginTop: 15,
//     fontWeight: '500',
//   },
//   errorContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 30,
//   },
//   errorText: {
//     fontSize: 16,
//     color: '#FFFFFF',
//     textAlign: 'center',
//     marginTop: 20,
//     marginBottom: 30,
//     fontWeight: '500',
//     opacity: 0.8,
//   },
//   retryButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 30,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 30,
//   },
//   retryText: {
//     color: '#FFFFFF',
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   emptyContainer: {
//     flex: 1,
//     paddingTop: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   emptyText: {
//     marginTop: 20,
//     fontSize: 18,
//     color: '#FFFFFF',
//     fontWeight: '600',
//   },
//   emptySubtext: {
//     marginTop: 10,
//     fontSize: 14,
//     color: 'rgba(255, 255, 255, 0.7)',
//     fontWeight: '500',
//     marginBottom: 40,
//   },
//   addButton: {
//     marginTop: 20,
//     width: SCREEN_WIDTH * 0.6,
//     height: 50,
//     borderRadius: 25,
//     overflow: 'hidden',
//   },
//   addButtonGradient: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   addButtonText: {
//     color: '#FFFFFF',
//     fontWeight: '600',
//     fontSize: 16,
//     marginRight: 8,
//   },
//   fab: {
//     position: 'absolute',
//     bottom: 30,
//     right: 30,
//     width: 60,
//     height: 60,
//     borderRadius:
//     30,
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 4 },
//     overflow: 'hidden',
//   },
//   fabGradient: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });



import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Animated,
  Image,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getAuth } from 'firebase/auth';
import { supabase } from './supabase';

const SCREEN_WIDTH = Dimensions.get('window').width;

// Exercise icons mapping
const exerciseIcons = {
  'bicep curl': 'fitness',
  pushup: 'body',
  squat: 'body-outline',
  'shoulder press': 'barbell-outline',
  'lateral raises': 'barbell',
};

// Exercise colors mapping
const exerciseColors = {
  'bicep curl': ['#FF6B6B', '#FF8E8E'],
  pushup: ['#4ECDC4', '#6BE2D9'],
  squat: ['#7F5AF0', '#9D84F7'],
  'shoulder press': ['#F9C80E', '#FFDA58'],
  'lateral raises': ['#FF9F1C', '#FFBE5B'],
};

export default function ExerciseRecords({ navigation }) {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    total: 0,
    todayTotal: 0,
    mostPopular: '',
    progress: 0,
  });
  const fadeAnim = useState(new Animated.Value(0))[0];
  const scaleAnim = useState(new Animated.Value(0.9))[0];

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();

    async function fetchRecords() {
      try {
        // Get Firebase user's email
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user || !user.email) {
          setError('No user is logged in.');
          setRecords([]);
          setLoading(false);
          return;
        }

        // Calculate the date 3 days ago
        const threeDaysAgo = new Date();
        threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
        const threeDaysAgoISO = threeDaysAgo.toISOString();

        // Fetch exercise records from Supabase for the last 3 days
        const { data, error } = await supabase
          .from('exercise_records')
          .select('*')
          .eq('email', user.email)
          .gte('created_at', threeDaysAgoISO)
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Supabase error:', error);
          setError('Failed to fetch exercise records.');
          setRecords([]);
        } else {
          // Process data
          setRecords(data);

          // Calculate stats
          if (data.length > 0) {
            // Count exercises by type
            const exerciseCounts = {};
            let totalReps = 0;
            let todayReps = 0;

            // Get today's date in PKT
            const today = new Date().toLocaleString('en-US', {
              timeZone: 'Asia/Karachi',
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            });

            data.forEach((record) => {
              // Count by exercise type
              exerciseCounts[record.exercise_type] =
                (exerciseCounts[record.exercise_type] || 0) + 1;

              // Total reps
              totalReps += record.reps;

              // Today's reps
              const recordDate = new Date(record.created_at).toLocaleString(
                'en-US',
                {
                  timeZone: 'Asia/Karachi',
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                }
              );
              if (recordDate === today) {
                todayReps += record.reps;
              }
            });

            // Find most popular exercise
            let mostPopular = '';
            let maxCount = 0;

            Object.keys(exerciseCounts).forEach((exercise) => {
              if (exerciseCounts[exercise] > maxCount) {
                maxCount = exerciseCounts[exercise];
                mostPopular = exercise;
              }
            });

            // Calculate progress (simple metric: today's reps as percentage of total)
            const progress = Math.min(
              Math.round((todayReps / (totalReps || 1)) * 100),
              100
            );

            setStats({
              total: totalReps,
              todayTotal: todayReps,
              mostPopular,
              progress,
            });
          }

          setError(null);
        }
      } catch (e) {
        console.error('Exception:', e);
        setError('An unexpected error occurred.');
        setRecords([]);
      }
      setLoading(false);
    }
    fetchRecords();
  }, []);

const formatDateTime = (timestamp) => {
  try {
    // Parse the Supabase timestamp (YYYY-MM-DD HH:mm:ss.SSSSSS) as UTC
    // Replace space with 'T' and append '+00:00' to ensure UTC
    const normalizedTimestamp = timestamp.replace(' ', 'T') + 'Z';
    const date = new Date(normalizedTimestamp);
    if (isNaN(date.getTime())) {
      console.error('Invalid timestamp:', timestamp, 'Normalized:', normalizedTimestamp);
      return 'Invalid date';
    }

    // Format time in PKT with AM/PM
    const formattedTime = date.toLocaleString('en-US', {
      timeZone: 'Asia/Karachi',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    // Get current date in PKT for comparison
    const now = new Date();
    const todayInPKT = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Karachi' }));
    const todayYear = todayInPKT.getFullYear();
    const todayMonth = todayInPKT.getMonth(); // 0-based
    const todayDay = todayInPKT.getDate();

    // Get yesterday in PKT
    const yesterdayInPKT = new Date(todayInPKT);
    yesterdayInPKT.setDate(todayDay - 1);
    const yesterdayYear = yesterdayInPKT.getFullYear();
    const yesterdayMonth = yesterdayInPKT.getMonth();
    const yesterdayDay = yesterdayInPKT.getDate();

    // Get record date in PKT
    const recordDateInPKT = new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Karachi' }));
    const recordYear = recordDateInPKT.getFullYear();
    const recordMonth = recordDateInPKT.getMonth();
    const recordDay = recordDateInPKT.getDate();

    // Debug logging
    console.log('Original Timestamp:', timestamp);
    console.log('Normalized Timestamp:', normalizedTimestamp);
    console.log('Parsed Date (UTC):', date);
    console.log('Record Date (PKT):', recordDateInPKT);
    console.log('Today (PKT):', todayInPKT);
    console.log('Yesterday (PKT):', yesterdayInPKT);
    console.log('Record Date Components:', { recordYear, recordMonth, recordDay });
    console.log('Today Components:', { todayYear, todayMonth, todayDay });
    console.log('Yesterday Components:', { yesterdayYear, yesterdayMonth, yesterdayDay });

    // Check if the record is from today
    if (recordYear === todayYear && recordMonth === todayMonth && recordDay === todayDay) {
      return `Today at ${formattedTime}`;
    }

    // Check if the record is from yesterday
    if (
      recordYear === yesterdayYear &&
      recordMonth === yesterdayMonth &&
      recordDay === yesterdayDay
    ) {
      return `Yesterday at ${formattedTime}`;
    }

    // Format full date for other days
    const formattedDate = date.toLocaleString('en-US', {
      timeZone: 'Asia/Karachi',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    return `${formattedDate} at ${formattedTime}`;
  } catch (error) {
    console.error('Error formatting timestamp:', timestamp, error);
    return 'Error formatting date';
  }
};

  const getMotivationalFeedback = () => {
    if (stats.todayTotal === 0) {
      return 'Time to start your fitness journey today!';
    } else if (stats.todayTotal < 50) {
      return 'Good start! Keep pushing yourself!';
    } else if (stats.todayTotal < 100) {
      return "Great job! You're building strength!";
    } else if (stats.todayTotal < 200) {
      return "Impressive effort! You're crushing it!";
    } else {
      return 'Incredible workout warrior! Unstoppable!';
    }
  };

  const getExerciseIcon = (exerciseType) => {
    const lowerType = exerciseType.toLowerCase();
    return exerciseIcons[lowerType] || 'fitness-outline';
  };

  const getExerciseColors = (exerciseType) => {
    const lowerType = exerciseType.toLowerCase();
    return exerciseColors[lowerType] || ['#6C63FF', '#8F89FF'];
  };

  // Create animations for list items
  const [listItemAnimations] = useState(() => {
    // Pre-create animations for potential list items (up to 50)
    return Array(50)
      .fill()
      .map(() => ({
        opacity: new Animated.Value(0),
        translateY: new Animated.Value(20),
      }));
  });

  // Start animations when records are loaded
  useEffect(() => {
    if (!loading && records.length > 0) {
      records.forEach((_, index) => {
        const delay = index * 100;
        if (listItemAnimations[index]) {
          Animated.parallel([
            Animated.timing(listItemAnimations[index].opacity, {
              toValue: 1,
              duration: 500,
              delay,
              useNativeDriver: true,
            }),
            Animated.timing(listItemAnimations[index].translateY, {
              toValue: 0,
              duration: 500,
              delay,
              useNativeDriver: true,
            }),
          ]).start();
        }
      });
    }
  }, [loading, records]);

  const renderItem = ({ item, index }) => {
    const exerciseIcon = getExerciseIcon(item.exercise_type);
    const [color1, color2] = getExerciseColors(item.exercise_type);

    // Use pre-created animations for this item or fallback to default styles
    const itemAnimation =
      index < listItemAnimations.length
        ? listItemAnimations[index]
        : { opacity: new Animated.Value(1), translateY: new Animated.Value(0) };

    return (
      <Animated.View
        style={[
          { opacity: itemAnimation.opacity, transform: [{ translateY: itemAnimation.translateY }] },
        ]}
      >
        <LinearGradient
          colors={[color1, color2]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.record}
        >
          <View style={styles.recordIcon}>
            <Ionicons name={exerciseIcon} size={26} color="#FFFFFF" />
          </View>
          <View style={styles.recordContent}>
            <Text style={styles.recordTitle}>{item.exercise_type}</Text>
            <View style={styles.recordDetails}>
              <Text style={styles.recordReps}>{item.reps} reps</Text>
              <Text style={styles.recordTime}>{formatDateTime(item.created_at)}</Text>
            </View>
          </View>
        </LinearGradient>
      </Animated.View>
    );
  };

  const renderHeader = () => {
    if (loading || error || records.length === 0) return null;

    return (
      <Animated.View
        style={[styles.statsContainer, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}
      >
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.05)']}
          style={styles.statsCard}
        >
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{stats.todayTotal}</Text>
              <Text style={styles.statLabel}>Today's Reps</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{stats.total}</Text>
              <Text style={styles.statLabel}>Total Reps</Text>
            </View>
          </View>

          {stats.mostPopular && (
            <View style={styles.favoriteExercise}>
              <Text style={styles.favoriteLabel}>Favorite Exercise</Text>
              <View style={styles.favoriteContent}>
                <Ionicons
                  name={getExerciseIcon(stats.mostPopular)}
                  size={20}
                  color="#FF6B6B"
                  style={styles.favoriteIcon}
                />
                <Text style={styles.favoriteValue}>{stats.mostPopular}</Text>
              </View>
            </View>
          )}

          <View style={styles.progressContainer}>
            <View style={styles.progressRow}>
              <Text style={styles.progressLabel}>Daily Progress</Text>
              <Text style={styles.progressValue}>{stats.progress}%</Text>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: `${stats.progress}%` }]} />
            </View>
          </View>

          <View style={styles.motivationalContainer}>
            <Text style={styles.motivationalText}>{getMotivationalFeedback()}</Text>
          </View>
        </LinearGradient>
      </Animated.View>
    );
  };

  const renderEmptyList = () => {
    if (loading || error) return null;

    return (
      <Animated.View
        style={[styles.emptyContainer, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}
      >
        <Ionicons name="fitness-outline" size={80} color="rgba(255,255,255,0.3)" />
        <Text style={styles.emptyText}>No exercise records found.</Text>
        <Text style={styles.emptySubtext}>Start your fitness journey today!</Text>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddExercise')} // Assuming you have this screen
        >
          <LinearGradient colors={['#FF6B6B', '#FF8E8E']} style={styles.addButtonGradient}>
            <Text style={styles.addButtonText}>Add Exercise</Text>
            <Ionicons name="add-circle" size={22} color="#FFFFFF" />
          </LinearGradient>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <LinearGradient
      colors={['#1A2151', '#323B72']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {/* Header */}
      <Animated.View style={[styles.headerContainer, { opacity: fadeAnim }]}>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.13)', 'rgba(255, 255, 255, 0.05)']}
          style={styles.header}
        >
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={26} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Fitness Tracker</Text>
          <TouchableOpacity style={styles.infoButton}>
            <Ionicons name="calendar" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </LinearGradient>
        <Text style={styles.headerSubtitle}>Your Exercise Records</Text>
      </Animated.View>

      {/* Content */}
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#FF6B6B" />
          <Text style={styles.loadingText}>Loading your fitness journey...</Text>
        </View>
      ) : error ? (
        <View style={styles.errorContainer}>
          <Ionicons name="alert-circle" size={60} color="#FF6B6B" />
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity
            style={styles.retryButton}
            onPress={() => navigation.replace('ExerciseRecords')}
          >
            <Text style={styles.retryText}>Retry</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={records}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
          ListHeaderComponent={renderHeader}
          ListEmptyComponent={renderEmptyList}
          showsVerticalScrollIndicator={false}
        />
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E2A44',
  },
  headerContainer: {
    paddingTop: 50, // For status bar
    paddingBottom: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
    marginHorizontal: 15,
    marginBottom: 5,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  headerSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    marginTop: 5,
  },
  backButton: {
    padding: 5,
  },
  infoButton: {
    padding: 5,
  },
  list: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 100, // Extra space for FAB
  },
  statsContainer: {
    marginBottom: 20,
  },
  statsCard: {
    padding: 20,
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 15,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  statDivider: {
    height: '70%',
    width: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  favoriteExercise: {
    marginTop: 10,
    marginBottom: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  favoriteLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 6,
  },
  favoriteContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  favoriteIcon: {
    marginRight: 8,
  },
  favoriteValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    textTransform: 'capitalize',
  },
  progressContainer: {
    marginBottom: 15,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  progressValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#FF6B6B',
    borderRadius: 4,
  },
  motivationalContainer: {
    marginTop: 5,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
  },
  motivationalText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  record: {
    flexDirection: 'row',
    borderRadius: 16,
    marginBottom: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    overflow: 'hidden',
  },
  recordIcon: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  recordContent: {
    flex: 1,
    padding: 15,
  },
  recordTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 5,
    textTransform: 'capitalize',
  },
  recordDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  recordReps: {
    fontSize: 14,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.85)',
  },
  recordTime: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.7)',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 15,
    fontWeight: '500',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  errorText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
    fontWeight: '500',
    opacity: 0.8,
  },
  retryButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 30,
  },
  retryText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
  emptyContainer: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    marginTop: 20,
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  emptySubtext: {
    marginTop: 10,
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: '500',
    marginBottom: 40,
  },
  addButton: {
    marginTop: 20,
    width: SCREEN_WIDTH * 0.6,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  addButtonGradient: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
    marginRight: 8,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    overflow: 'hidden',
  },
  fabGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});



