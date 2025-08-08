


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView, Dimensions, Animated } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { BarChart } from 'react-native-chart-kit';

// export default function DetailsScreen({ route }) {
//   const { weeklyData } = route.params;
//   const fadeAnim = useState(new Animated.Value(0))[0]; // Fade-in animation

//   // Prepare data for graphs
//   const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//   const labels = [];
//   const stepsData = [];
//   const caloriesData = [];
//   const today = new Date();
//   const oneWeekAgo = new Date();
//   oneWeekAgo.setDate(today.getDate() - 6);

//   // Generate labels and data for the last 7 days, ending with today
//   for (let i = 0; i < 7; i++) {
//     const date = new Date(oneWeekAgo);
//     date.setDate(oneWeekAgo.getDate() + i);
//     const dateStr = date.toISOString().split('T')[0];
//     const dayIndex = date.getDay(); // 0 = Sunday, 6 = Saturday
//     labels.push(daysOfWeek[dayIndex]);
//     stepsData.push(weeklyData[dateStr]?.steps || 0);
//     caloriesData.push(Math.round(weeklyData[dateStr]?.calories || 0)); // Round calories to whole numbers
//   }

//   // Calculate descriptive data
//   const totalSteps = stepsData.reduce((sum, value) => sum + value, 0);
//   const avgSteps = Math.round(totalSteps / 7);
//   const peakSteps = Math.max(...stepsData);
//   const peakStepsDay = labels[stepsData.indexOf(peakSteps)];

//   const totalCalories = caloriesData.reduce((sum, value) => sum + value, 0);
//   const avgCalories = Math.round(totalCalories / 7);
//   const peakCalories = Math.max(...caloriesData);
//   const peakCaloriesDay = labels[caloriesData.indexOf(peakCalories)];

//   const stepsChartConfig = {
//     backgroundGradientFrom: '#FFFFFF',
//     backgroundGradientTo: '#F5F7FA',
//     decimalPlaces: 0, // No decimals for steps
//     color: (opacity = 1) => `rgba(255, 111, 97, ${opacity})`, // #FF6F61 for steps
//     labelColor: (opacity = 1) => `rgba(31, 41, 55, ${opacity})`, // #1F2937 for labels
//     style: { borderRadius: 16 },
//     propsForBackgroundLines: {
//       strokeDasharray: '5, 5', // Dashed grid lines
//       stroke: '#D1D5DB',
//       strokeWidth: 1,
//     },
//     propsForLabels: {
//       fontSize: 12,
//       fontWeight: '600',
//     },
//     fillShadowGradient: '#FF6F61',
//     fillShadowGradientTo: '#FF9F1C',
//     fillShadowGradientOpacity: 1,
//     barPercentage: 0.7, // Thicker bars
//   };

//   const caloriesChartConfig = {
//     backgroundGradientFrom: '#FFFFFF',
//     backgroundGradientTo: '#F5F7FA',
//     decimalPlaces: 0, // No decimals for calories
//     color: (opacity = 1) => `rgba(52, 199, 89, ${opacity})`, // #34C759 for calories
//     labelColor: (opacity = 1) => `rgba(31, 41, 55, ${opacity})`, // #1F2937 for labels
//     style: { borderRadius: 16 },
//     propsForBackgroundLines: {
//       strokeDasharray: '5, 5', // Dashed grid lines
//       stroke: '#D1D5DB',
//       strokeWidth: 1,
//     },
//     propsForLabels: {
//       fontSize: 12,
//       fontWeight: '600',
//     },
//     fillShadowGradient: '#34C759',
//     fillShadowGradientTo: '#28A745',
//     fillShadowGradientOpacity: 1,
//     barPercentage: 0.7, // Thicker bars
//   };

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 600,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   return (
//     <LinearGradient
//       colors={['#1E2A44', '#2A3B5E']} // Match UserDashboard background
//       style={styles.container}
//     >
//       <Animated.View style={{ opacity: fadeAnim }}>
//         <ScrollView contentContainerStyle={styles.scrollContent}>
//           {/* Steps Graph */}
//           <View style={styles.graphSection}>
//             <Text style={styles.graphTitle}>Steps This Week</Text>
//             <LinearGradient
//               colors={['#FFFFFF', '#F5F7FA']}
//               style={styles.chartCard}
//             >
//               <BarChart
//                 data={{ labels, datasets: [{ data: stepsData }] }}
//                 width={Dimensions.get('window').width - 40}
//                 height={280}
//                 yAxisLabel=""
//                 chartConfig={stepsChartConfig}
//                 style={styles.chart}
//                 withInnerLines={true}
//                 showValuesOnTopOfBars={true}
//                 withCustomBarWidth={false} // Use barPercentage instead
//               />
//             </LinearGradient>
//             <View style={styles.statsContainer}>
//               <Text style={styles.statsText}>Total: {totalSteps} steps</Text>
//               <Text style={styles.statsText}>Average: {avgSteps} steps/day</Text>
//               <Text style={styles.statsText}>Peak: {peakSteps} steps ({peakStepsDay})</Text>
//             </View>
//           </View>

//           {/* Calories Graph */}
//           <View style={styles.graphSection}>
//             <Text style={styles.graphTitle}>Calories Burned This Week</Text>
//             <LinearGradient
//               colors={['#FFFFFF', '#F5F7FA']}
//               style={styles.chartCard}
//             >
//               <BarChart
//                 data={{ labels, datasets: [{ data: caloriesData }] }}
//                 width={Dimensions.get('window').width - 40}
//                 height={280}
//                 yAxisLabel=""
//                 chartConfig={caloriesChartConfig}
//                 style={styles.chart}
//                 withInnerLines={true}
//                 showValuesOnTopOfBars={true}
//                 withCustomBarWidth={false} // Use barPercentage instead
//               />
//             </LinearGradient>
//             <View style={styles.statsContainer}>
//               <Text style={styles.statsText}>Total: {totalCalories} kcal</Text>
//               <Text style={styles.statsText}>Average: {avgCalories} kcal/day</Text>
//               <Text style={styles.statsText}>Peak: {peakCalories} kcal ({peakCaloriesDay})</Text>
//             </View>
//           </View>
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
//     flexGrow: 1,
//     alignItems: 'center',
//     paddingVertical: 30,
//     paddingHorizontal: 20,
//   },
//   graphSection: {
//     width: '100%',
//     alignItems: 'center',
//     marginBottom: 40,
//   },
//   graphTitle: {
//     fontSize: 24,
//     fontWeight: '800',
//     color: '#FFFFFF', // Match UserDashboard’s white titles
//     marginBottom: 15,
//     letterSpacing: 0.5,
//     textShadowColor: 'rgba(0, 0, 0, 0.2)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 3,
//   },
//   chartCard: {
//     borderRadius: 20,
//     elevation: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowRadius: 15,
//     shadowOffset: { width: 0, height: 8 },
//     overflow: 'hidden', // Ensure gradient doesn’t bleed
//   },
//   chart: {
//     marginVertical: 10,
//     borderRadius: 16,
//     padding: 5,
//   },
//   statsContainer: {
//     marginTop: 15,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)', // Subtle glassmorphism effect
//     borderRadius: 10,
//     padding: 10,
//     width: '90%',
//     alignItems: 'flex-start',
//   },
//   statsText: {
//     fontSize: 16,
//     color: '#E5E7EB', // Light grey for readability against dark background
//     fontWeight: '500',
//     marginVertical: 2,
//   },
// });



// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView, Dimensions, Animated, SafeAreaView, Platform } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { BarChart } from 'react-native-chart-kit';

// export default function DetailsScreen({ route }) {
//   const { weeklyData } = route.params;
//   const fadeAnim = useState(new Animated.Value(0))[0]; // Fade-in animation
//   const screenWidth = Dimensions.get('window').width;

//   // Prepare data for graphs
//   const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//   const labels = [];
//   const stepsData = [];
//   const caloriesData = [];
//   const today = new Date();
//   const oneWeekAgo = new Date();
//   oneWeekAgo.setDate(today.getDate() - 6);

//   // Generate labels and data for the last 7 days, ending with today
//   for (let i = 0; i < 7; i++) {
//     const date = new Date(oneWeekAgo);
//     date.setDate(oneWeekAgo.getDate() + i);
//     const dateStr = date.toISOString().split('T')[0];
//     const dayIndex = date.getDay(); // 0 = Sunday, 6 = Saturday
//     labels.push(daysOfWeek[dayIndex]);
//     stepsData.push(weeklyData[dateStr]?.steps || 0);
//     caloriesData.push(Math.round(weeklyData[dateStr]?.calories || 0)); // Round calories to whole numbers
//   }

//   // Calculate descriptive data
//   const totalSteps = stepsData.reduce((sum, value) => sum + value, 0);
//   const avgSteps = Math.round(totalSteps / 7);
//   const peakSteps = Math.max(...stepsData);
//   const peakStepsDay = labels[stepsData.indexOf(peakSteps)];

//   const totalCalories = caloriesData.reduce((sum, value) => sum + value, 0);
//   const avgCalories = Math.round(totalCalories / 7);
//   const peakCalories = Math.max(...caloriesData);
//   const peakCaloriesDay = labels[caloriesData.indexOf(peakCalories)];

//   // Find the max value for steps to ensure proper y-axis scaling
//   const maxSteps = Math.max(...stepsData) * 1.2; // Add 20% padding to the top
//   const maxCalories = Math.max(...caloriesData) * 1.2; // Add 20% padding to the top

//   const stepsChartConfig = {
//     backgroundGradientFrom: '#FFFFFF',
//     backgroundGradientTo: '#F8FAFF',
//     decimalPlaces: 0,
//     color: (opacity = 1) => `rgba(71, 117, 234, ${opacity})`, // Blue-toned bars
//     labelColor: (opacity = 1) => `rgba(33, 33, 33, ${opacity})`, // Darker labels for better visibility
//     style: { borderRadius: 16 },
//     propsForBackgroundLines: {
//       strokeDasharray: '5, 5',
//       stroke: '#E0E0E0',
//       strokeWidth: 1,
//     },
//     propsForLabels: {
//       fontSize: 12,
//       fontWeight: '600',
//     },
//     fillShadowGradient: '#4775EA',
//     fillShadowGradientTo: '#6C92F4',
//     fillShadowGradientOpacity: 0.8,
//     barPercentage: 0.6, // Thinner bars for more space between them
//     formatYLabel: (value) => Math.round(value).toString(), // Round y-axis labels
//   };

//   const caloriesChartConfig = {
//     backgroundGradientFrom: '#FFFFFF',
//     backgroundGradientTo: '#F8FAFF',
//     decimalPlaces: 0,
//     color: (opacity = 1) => `rgba(255, 99, 71, ${opacity})`, // Tomato/red for calories
//     labelColor: (opacity = 1) => `rgba(33, 33, 33, ${opacity})`, // Darker labels for better visibility
//     style: { borderRadius: 16 },
//     propsForBackgroundLines: {
//       strokeDasharray: '5, 5',
//       stroke: '#E0E0E0',
//       strokeWidth: 1,
//     },
//     propsForLabels: {
//       fontSize: 12,
//       fontWeight: '600',
//     },
//     fillShadowGradient: '#FF6347',
//     fillShadowGradientTo: '#FF8066',
//     fillShadowGradientOpacity: 0.8,
//     barPercentage: 0.6, // Thinner bars for more space between them
//     formatYLabel: (value) => Math.round(value).toString(), // Round y-axis labels
//   };

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 800,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <LinearGradient
//         colors={['#1A2342', '#2A3B5E', '#3A4F7A']}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 1 }}
//         style={styles.container}
//       >
//         <Animated.View style={[styles.animatedContainer, { opacity: fadeAnim }]}>
//           <ScrollView 
//             contentContainerStyle={styles.scrollContent}
//             showsVerticalScrollIndicator={false}
//           >
//             {/* Header */}
//             <View style={styles.header}>
//               <Text style={styles.headerTitle}>Weekly Activity Report</Text>
//               <Text style={styles.headerSubtitle}>
//                 {oneWeekAgo.toLocaleDateString()} - {today.toLocaleDateString()}
//               </Text>
//             </View>
            
//             {/* Steps Graph */}
//             <View style={styles.graphSection}>
//               <Text style={styles.graphTitle}>Steps This Week</Text>
//               <LinearGradient
//                 colors={['#FFFFFF', '#F5F7FA']}
//                 style={styles.chartCard}
//               >
//                 <BarChart
//                   data={{
//                     labels,
//                     datasets: [{ data: stepsData }],
//                   }}
//                   width={screenWidth - 48}
//                   height={250}
//                   yAxisLabel=""
//                   yAxisSuffix=""
//                   chartConfig={stepsChartConfig}
//                   style={styles.chart}
//                   fromZero={true}
//                   showValuesOnTopOfBars={true}
//                   withInnerLines={true}
//                   segments={5}
//                   xLabelsOffset={-5}
//                   yLabelsOffset={5}
//                 />
//               </LinearGradient>
//               <View style={styles.statsContainer}>
//                 <View style={styles.statItem}>
//                   <Text style={styles.statValue}>{totalSteps.toLocaleString()}</Text>
//                   <Text style={styles.statLabel}>Total Steps</Text>
//                 </View>
//                 <View style={styles.statDivider} />
//                 <View style={styles.statItem}>
//                   <Text style={styles.statValue}>{avgSteps.toLocaleString()}</Text>
//                   <Text style={styles.statLabel}>Daily Average</Text>
//                 </View>
//                 <View style={styles.statDivider} />
//                 <View style={styles.statItem}>
//                   <Text style={styles.statValue}>{peakSteps.toLocaleString()}</Text>
//                   <Text style={styles.statLabel}>Peak ({peakStepsDay})</Text>
//                 </View>
//               </View>
//             </View>

//             {/* Calories Graph */}
//             <View style={styles.graphSection}>
//               <Text style={styles.graphTitle}>Calories Burned</Text>
//               <LinearGradient
//                 colors={['#FFFFFF', '#F5F7FA']}
//                 style={styles.chartCard}
//               >
//                 <BarChart
//                   data={{
//                     labels,
//                     datasets: [{ data: caloriesData }],
//                   }}
//                   width={screenWidth - 48}
//                   height={250}
//                   yAxisLabel=""
//                   yAxisSuffix=" cal"
//                   chartConfig={caloriesChartConfig}
//                   style={styles.chart}
//                   fromZero={true}
//                   showValuesOnTopOfBars={true}
//                   withInnerLines={true}
//                   segments={5}
//                   xLabelsOffset={-5}
//                   yLabelsOffset={5}
//                 />
//               </LinearGradient>
//               <View style={styles.statsContainer}>
//                 <View style={styles.statItem}>
//                   <Text style={styles.statValue}>{totalCalories.toLocaleString()}</Text>
//                   <Text style={styles.statLabel}>Total Calories</Text>
//                 </View>
//                 <View style={styles.statDivider} />
//                 <View style={styles.statItem}>
//                   <Text style={styles.statValue}>{avgCalories.toLocaleString()}</Text>
//                   <Text style={styles.statLabel}>Daily Average</Text>
//                 </View>
//                 <View style={styles.statDivider} />
//                 <View style={styles.statItem}>
//                   <Text style={styles.statValue}>{peakCalories.toLocaleString()}</Text>
//                   <Text style={styles.statLabel}>Peak ({peakCaloriesDay})</Text>
//                 </View>
//               </View>
//             </View>
//           </ScrollView>
//         </Animated.View>
//       </LinearGradient>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#1A2342', // Match gradient starting color
//   },
//   container: {
//     flex: 1,
//   },
//   animatedContainer: {
//     flex: 1,
//   },
//   scrollContent: {
//     flexGrow: 1,
//     alignItems: 'center',
//     paddingVertical: 20,
//     paddingHorizontal: 24,
//   },
//   header: {
//     width: '100%',
//     alignItems: 'center',
//     marginBottom: 25,
//     paddingTop: 10,
//   },
//   headerTitle: {
//     fontSize: 28,
//     fontWeight: '800',
//     color: '#FFFFFF',
//     letterSpacing: 0.5,
//     textShadowColor: 'rgba(0, 0, 0, 0.3)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 4,
//     marginBottom: 8,
//   },
//   headerSubtitle: {
//     fontSize: 16,
//     color: '#CBD5E1',
//     fontWeight: '500',
//   },
//   graphSection: {
//     width: '100%',
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   graphTitle: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     marginBottom: 15,
//     alignSelf: 'flex-start',
//     letterSpacing: 0.5,
//   },
//   chartCard: {
//     borderRadius: 20,
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//     padding: 15,
//     width: '100%',
//     ...Platform.select({
//       ios: {
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 6 },
//         shadowOpacity: 0.2,
//         shadowRadius: 12,
//       },
//       android: {
//         elevation: 8,
//       },
//     }),
//   },
//   chart: {
//     borderRadius: 16,
//     marginVertical: 8,
//   },
//   statsContainer: {
//     marginTop: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.15)',
//     borderRadius: 16,
//     padding: 15,
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     ...Platform.select({
//       ios: {
//         shadowColor: 'rgba(0, 0, 0, 0.1)',
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.2,
//         shadowRadius: 8,
//       },
//       android: {
//         elevation: 4,
//       },
//     }),
//   },
//   statItem: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   statValue: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     marginBottom: 5,
//   },
//   statLabel: {
//     fontSize: 13,
//     color: '#CBD5E1',
//     fontWeight: '500',
//     textAlign: 'center',
//   },
//   statDivider: {
//     width: 1,
//     height: '70%',
//     backgroundColor: 'rgba(255, 255, 255, 0.3)',
//   },
// });



import React, { useState, useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Dimensions, 
  Animated, 
  TouchableOpacity,
  StatusBar 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BarChart } from 'react-native-chart-kit';
import { Ionicons } from '@expo/vector-icons';

export default function DetailsScreen({ route, navigation }) {
  const { weeklyData } = route.params;
  const fadeAnim = useState(new Animated.Value(0))[0];
  const slideAnim = useState(new Animated.Value(50))[0];
  const scrollViewRef = useRef();
  
  // Active section state for the tab-like selector
  const [activeSection, setActiveSection] = useState('steps');

  // Prepare data for graphs
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const labels = [];
  const stepsData = [];
  const caloriesData = [];
  const today = new Date();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(today.getDate() - 6);

  // Generate labels and data for the last 7 days, ending with today
  for (let i = 0; i < 7; i++) {
    const date = new Date(oneWeekAgo);
    date.setDate(oneWeekAgo.getDate() + i);
    const dateStr = date.toISOString().split('T')[0];
    const dayIndex = date.getDay();
    labels.push(daysOfWeek[dayIndex]);
    stepsData.push(weeklyData[dateStr]?.steps || 0);
    caloriesData.push(Math.round(weeklyData[dateStr]?.calories || 0));
  }

  // Calculate descriptive data
  const totalSteps = stepsData.reduce((sum, value) => sum + value, 0);
  const avgSteps = Math.round(totalSteps / 7);
  const peakSteps = Math.max(...stepsData);
  const peakStepsDay = labels[stepsData.indexOf(peakSteps)];

  const totalCalories = caloriesData.reduce((sum, value) => sum + value, 0);
  const avgCalories = Math.round(totalCalories / 7);
  const peakCalories = Math.max(...caloriesData);
  const peakCaloriesDay = labels[caloriesData.indexOf(peakCalories)];

  // Calculate progress percentages for animation
  const stepsProgress = Math.min(totalSteps / 70000, 1); // Assuming 10k steps/day goal
  const caloriesProgress = Math.min(totalCalories / 14000, 1); // Assuming 2k calories/day goal

  const stepsChartConfig = {
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientTo: '#F8FAFF',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(82, 130, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(48, 48, 75, ${opacity})`,
    style: { borderRadius: 16 },
    propsForBackgroundLines: {
      strokeDasharray: '5, 5',
      stroke: '#E0E6FF',
      strokeWidth: 1,
    },
    propsForLabels: {
      fontSize: 12,
      fontWeight: '600',
      dx: -10, // Shift labels left to ensure full visibility
    },
    fillShadowGradient: '#5282FF',
    fillShadowGradientTo: '#809CFF',
    fillShadowGradientOpacity: 1,
    barPercentage: 0.7,
    paddingLeft: 30, // Add padding to accommodate y-axis labels
    paddingRight: 10,
  };

  const caloriesChartConfig = {
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientTo: '#F8FAFF',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 124, 94, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(48, 48, 75, ${opacity})`,
    style: { borderRadius: 16 },
    propsForBackgroundLines: {
      strokeDasharray: '5, 5',
      stroke: '#FFE5DD',
      strokeWidth: 1,
    },
    propsForLabels: {
      fontSize: 12,
      fontWeight: '600',
      dx: -10, // Shift labels left to ensure full visibility
    },
    fillShadowGradient: '#FF7C5E',
    fillShadowGradientTo: '#FFA88A',
    fillShadowGradientOpacity: 1,
    barPercentage: 0.7,
    paddingLeft: 30, // Add padding to accommodate y-axis labels
    paddingRight: 10,
  };

  // Animation sequence
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  // Handle tab selection
  const handleSectionChange = (section) => {
    setActiveSection(section);
    
    // Scroll to the appropriate section
    if (section === 'calories') {
      scrollViewRef.current?.scrollTo({ y: 400, animated: true });
    } else {
      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#2A3A65', '#1B2545']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        {/* Header with back button */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={28} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Weekly Summary</Text>
          <View style={styles.spacer} />
        </View>

        {/* Tab-like selector */}
        <View style={styles.tabSelector}>
          <TouchableOpacity
            style={[
              styles.tabButton, 
              activeSection === 'steps' && styles.activeTabButton
            ]}
            onPress={() => handleSectionChange('steps')}
          >
            <Ionicons 
              name="footsteps-outline" 
              size={20} 
              color={activeSection === 'steps' ? '#5282FF' : '#A0A5BD'} 
            />
            <Text style={[
              styles.tabText,
              activeSection === 'steps' && styles.activeTabText
            ]}>Steps</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.tabButton, 
              activeSection === 'calories' && styles.activeTabButton
            ]}
            onPress={() => handleSectionChange('calories')}
          >
            <Ionicons 
              name="flame-outline" 
              size={20} 
              color={activeSection === 'calories' ? '#FF7C5E' : '#A0A5BD'} 
            />
            <Text style={[
              styles.tabText,
              activeSection === 'calories' && styles.activeTabText
            ]}>Calories</Text>
          </TouchableOpacity>
        </View>

        <Animated.View 
          style={{ 
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
            flex: 1
          }}
        >
          <ScrollView 
            ref={scrollViewRef}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* Summary Cards */}
            <View style={styles.summarySection}>
              {/* Steps Summary Card */}
              <LinearGradient
                colors={['#5282FF20', '#5282FF10']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.summaryCard}
              >
                <View style={styles.summaryIconContainer}>
                  <Ionicons name="footsteps" size={26} color="#5282FF" />
                </View>
                <View style={styles.summaryTextContainer}>
                  <Text style={styles.summaryLabel}>Weekly Steps</Text>
                  <Text style={styles.summaryValue}>{totalSteps.toLocaleString()}</Text>
                  
                  {/* Progress bar */}
                  <View style={styles.progressBarContainer}>
                    <View style={[styles.progressBar, { backgroundColor: '#E0E6FF' }]}>
                      <View 
                        style={[
                          styles.progressFill, 
                          { 
                            width: `${stepsProgress * 100}%`,
                            backgroundColor: '#5282FF' 
                          }
                        ]} 
                      />
                    </View>
                    <Text style={styles.progressText}>{Math.round(stepsProgress * 100)}% of goal</Text>
                  </View>
                </View>
              </LinearGradient>
              
              {/* Calories Summary Card */}
              <LinearGradient
                colors={['#FF7C5E20', '#FF7C5E10']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.summaryCard}
              >
                <View style={[styles.summaryIconContainer, { backgroundColor: '#FFECE7' }]}>
                  <Ionicons name="flame" size={26} color="#FF7C5E" />
                </View>
                <View style={styles.summaryTextContainer}>
                  <Text style={styles.summaryLabel}>Weekly Calories</Text>
                  <Text style={styles.summaryValue}>{totalCalories.toLocaleString()}</Text>
                  
                  {/* Progress bar */}
                  <View style={styles.progressBarContainer}>
                    <View style={[styles.progressBar, { backgroundColor: '#FFE5DD' }]}>
                      <View 
                        style={[
                          styles.progressFill, 
                          { 
                            width: `${caloriesProgress * 100}%`,
                            backgroundColor: '#FF7C5E' 
                          }
                        ]} 
                      />
                    </View>
                    <Text style={styles.progressText}>{Math.round(caloriesProgress * 100)}% of goal</Text>
                  </View>
                </View>
              </LinearGradient>
            </View>

            {/* Steps Graph */}
            <View style={styles.graphSection}>
              <Text style={styles.graphTitle}>Steps Breakdown</Text>
              <LinearGradient
                colors={['#FFFFFF', '#F8FAFF']}
                style={styles.chartCard}
              >
                <BarChart
                  data={{ labels, datasets: [{ data: stepsData }] }}
                  width={Dimensions.get('window').width - 48}
                  height={220}
                  yAxisLabel=""
                  chartConfig={stepsChartConfig}
                  style={[styles.chart, { marginLeft: 10 }]}
                  withInnerLines={true}
                  showValuesOnTopOfBars={true}
                  withCustomBarWidth={false}
                />
              </LinearGradient>
              <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                  <View style={[styles.statDot, { backgroundColor: '#5282FF' }]} />
                  <Text style={styles.statLabel}>Daily Average</Text>
                  <Text style={styles.statValue}>{avgSteps.toLocaleString()}</Text>
                </View>
                
                <View style={styles.statItem}>
                  <View style={[styles.statDot, { backgroundColor: '#5282FF' }]} />
                  <Text style={styles.statLabel}>Peak Day</Text>
                  <Text style={styles.statValue}>{peakSteps.toLocaleString()} ({peakStepsDay})</Text>
                </View>
              </View>
            </View>

            {/* Calories Graph */}
            <View style={styles.graphSection}>
              <Text style={styles.graphTitle}>Calories Breakdown</Text>
              <LinearGradient
                colors={['#FFFFFF', '#F8FAFF']}
                style={styles.chartCard}
              >
                <BarChart
                  data={{ labels, datasets: [{ data: caloriesData }] }}
                  width={Dimensions.get('window').width - 48}
                  height={220}
                  yAxisLabel=""
                  chartConfig={caloriesChartConfig}
                  style={[styles.chart, { marginLeft: 10 }]}
                  withInnerLines={true}
                  showValuesOnTopOfBars={true}
                  withCustomBarWidth={false}
                />
              </LinearGradient>
              <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                  <View style={[styles.statDot, { backgroundColor: '#FF7C5E' }]} />
                  <Text style={styles.statLabel}>Daily Average</Text>
                  <Text style={styles.statValue}>{avgCalories.toLocaleString()} kcal</Text>
                </View>
                
                <View style={styles.statItem}>
                  <View style={[styles.statDot, { backgroundColor: '#FF7C5E' }]} />
                  <Text style={styles.statLabel}>Peak Day</Text>
                  <Text style={styles.statValue}>{peakCalories.toLocaleString()} kcal ({peakCaloriesDay})</Text>
                </View>
              </View>
            </View>

            {/* Trends and Insights Card */}
            <View style={styles.insightsSection}>
              <Text style={styles.graphTitle}>Insights</Text>
              <LinearGradient
                colors={['#FFFFFF', '#F8FAFF']}
                style={styles.insightsCard}
              >
                <View style={stepsChartConfig.insightRow}>
                  <View style={styles.insightIconContainer}>
                    <Ionicons name="trending-up" size={20} color="#5282FF" />
                  </View>
                  <Text style={styles.insightText}>
                    Your steps are {avgSteps > 7000 ? 'above' : 'below'} the recommended daily goal of 7,000 steps.
                  </Text>
                </View>
                
                <View style={styles.divider} />
                
                <View style={styles.insightRow}>
                  <View style={[styles.insightIconContainer, { backgroundColor: '#FFECE7' }]}>
                    <Ionicons name="analytics" size={20} color="#FF7C5E" />
                  </View>
                  <Text style={styles.insightText}>
                    {peakStepsDay} was your most active day with {peakSteps.toLocaleString()} steps.
                  </Text>
                </View>
              </LinearGradient>
            </View>
          </ScrollView>
        </Animated.View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 12,
  },
  backButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  spacer: {
    width: 44,
  },
  tabSelector: {
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 12,
    padding: 4,
    marginBottom: 16,
  },
  tabButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  activeTabButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  tabText: {
    color: '#A0A5BD',
    fontWeight: '600',
    marginLeft: 6,
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  summarySection: {
    flexDirection: 'column',
    marginBottom: 24,
    gap: 12,
  },
  summaryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 8,
  },
  summaryIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#E0E6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  summaryTextContainer: {
    flex: 1,
  },
  summaryLabel: {
    fontSize: 12,
    color: '#A0A5BD',
    marginBottom: 4,
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  progressBarContainer: {
    width: '100%',
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
    width: '100%',
    marginBottom: 4,
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: '#A0A5BD',
  },
  graphSection: {
    width: '100%',
    marginBottom: 32,
  },
  graphTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  chartCard: {
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    overflow: 'hidden',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
    // paddingRight: 5,
    // paddingLeft: 5,
  },
  statsContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 12,
    padding: 12,
    flex: 0.48,
  },
  statDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  statLabel: {
    fontSize: 10,
    color: '#A0A5BD',
    marginRight: 4,
  },
  statValue: {
    fontSize: 10,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  insightsSection: {
    marginBottom: 24,
  },
  insightsCard: {
    borderRadius: 16,
    padding: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  insightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  insightIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#E0E6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  insightText: {
    flex: 1,
    fontSize: 14,
    color: '#30304B',
    lineHeight: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E6FF',
    marginVertical: 8,
  },
});
















