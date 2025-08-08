// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
//   ActivityIndicator,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// // import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Picker } from '@react-native-picker/picker';

// const API_OPTIONS = {
//   method: 'POST',
//   url: 'https://ai-workout-planner-exercise-fitness-nutrition-guide.p.rapidapi.com/generateWorkoutPlan',
//   params: { noqueue: '6' },
//   headers: {
//     'x-rapidapi-key': '85641ae2f0msh592c9334af123a6p1d9a5ejsn7ddc287f0b4e', // Replace if invalid
//     'x-rapidapi-host': 'ai-workout-planner-exercise-fitness-nutrition-guide.p.rapidapi.com',
//     'Content-Type': 'application/json',
//   },
// };

// export default function WorkoutPlanScreen({navigation}) {
// //   const navigation = useNavigation();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Form states
//   const [goal, setGoal] = useState('Build muscle');
//   const [fitnessLevel, setFitnessLevel] = useState('Intermediate');
//   const [preferences, setPreferences] = useState(['Weight training']);
//   const [healthConditions, setHealthConditions] = useState(['None']);
//   const [daysPerWeek, setDaysPerWeek] = useState('4');
//   const [sessionDuration, setSessionDuration] = useState('60');
//   const [planDurationWeeks, setPlanDurationWeeks] = useState('4');

//   const fetchWorkoutPlan = async () => {
//     setLoading(true);
//     setError(null);

//     const requestData = {
//       goal,
//       fitness_level: fitnessLevel,
//       preferences,
//       health_conditions: healthConditions.includes('None') ? ['None'] : healthConditions,
//       schedule: {
//         days_per_week: parseInt(daysPerWeek, 10),
//         session_duration: parseInt(sessionDuration, 10),
//       },
//       plan_duration_weeks: parseInt(planDurationWeeks, 10),
//       lang: 'en',
//     };

//     try {
//       const response = await axios.request({
//         ...API_OPTIONS,
//         data: requestData,
//       });
//       console.log('API Response:', JSON.stringify(response.data, null, 2));
//       setLoading(false);
//       navigation.navigate('WorkoutPlanResponse', { workoutData: response.data.result });
//     } catch (err) {
//       console.error('Error fetching workout plan:', err.response?.data || err.message);
//       setError(
//         err.response?.status === 403
//           ? 'API Access Denied (403). Check your RapidAPI key or subscription.'
//           : 'Failed to load workout plan. Please try again.'
//       );
//       setLoading(false);
//     }
//   };

//   const togglePreference = (pref) => {
//     setPreferences((prev) =>
//       prev.includes(pref) ? prev.filter((p) => p !== pref) : [...prev, pref]
//     );
//   };

//   const toggleHealthCondition = (condition) => {
//     if (condition === 'None') {
//       setHealthConditions(['None']);
//     } else {
//       setHealthConditions((prev) => {
//         if (prev.includes('None')) return [condition];
//         return prev.includes(condition)
//           ? prev.filter((c) => c !== condition)
//           : [...prev, condition];
//       });
//     }
//   };

//   return (
//     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         {/* Header */}
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Ionicons name="arrow-back" size={30} color="#FF5E9B" />
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Create Workout Plan</Text>
//         </View>

//         {/* Form Container */}
//         <View style={styles.formContainer}>
//           <Text style={styles.label}>Goal</Text>
//           <Picker
//             selectedValue={goal}
//             onValueChange={(itemValue) => setGoal(itemValue)}
//             style={styles.picker}
//           >
//             <Picker.Item label="Build muscle" value="Build muscle" />
//             <Picker.Item label="Lose weight" value="Lose weight" />
//             <Picker.Item label="Improve endurance" value="Improve endurance" />
//           </Picker>

//           <Text style={styles.label}>Fitness Level</Text>
//           <Picker
//             selectedValue={fitnessLevel}
//             onValueChange={(itemValue) => setFitnessLevel(itemValue)}
//             style={styles.picker}
//           >
//             <Picker.Item label="Beginner" value="Beginner" />
//             <Picker.Item label="Intermediate" value="Intermediate" />
//             <Picker.Item label="Advanced" value="Advanced" />
//           </Picker>

//           <Text style={styles.label}>Preferences</Text>
//           <View style={styles.checkboxContainer}>
//             {['Weight training', 'Cardio', 'Bodyweight', 'Yoga'].map((pref) => (
//               <TouchableOpacity
//                 key={pref}
//                 style={[
//                   styles.checkbox,
//                   preferences.includes(pref) && styles.checkboxSelected,
//                 ]}
//                 onPress={() => togglePreference(pref)}
//               >
//                 <Text style={styles.checkboxText}>{pref}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           <Text style={styles.label}>Health Conditions</Text>
//           <View style={styles.checkboxContainer}>
//             {['None', 'Back pain', 'Knee issues', 'Heart condition'].map((condition) => (
//               <TouchableOpacity
//                 key={condition}
//                 style={[
//                   styles.checkbox,
//                   healthConditions.includes(condition) && styles.checkboxSelected,
//                 ]}
//                 onPress={() => toggleHealthCondition(condition)}
//               >
//                 <Text style={styles.checkboxText}>{condition}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           <Text style={styles.label}>Days per Week</Text>
//           <TextInput
//             style={styles.input}
//             value={daysPerWeek}
//             onChangeText={setDaysPerWeek}
//             keyboardType="numeric"
//             placeholder="e.g., 4"
//             placeholderTextColor="#A0A0A0"
//           />

//           <Text style={styles.label}>Session Duration (min)</Text>
//           <TextInput
//             style={styles.input}
//             value={sessionDuration}
//             onChangeText={setSessionDuration}
//             keyboardType="numeric"
//             placeholder="e.g., 60"
//             placeholderTextColor="#A0A0A0"
//           />

//           <Text style={styles.label}>Plan Duration (weeks)</Text>
//           <TextInput
//             style={styles.input}
//             value={planDurationWeeks}
//             onChangeText={setPlanDurationWeeks}
//             keyboardType="numeric"
//             placeholder="e.g., 4"
//             placeholderTextColor="#A0A0A0"
//           />

//           <TouchableOpacity
//             style={[styles.generateButton, loading && styles.disabledButton]}
//             onPress={fetchWorkoutPlan}
//             disabled={loading}
//           >
//             <Text style={styles.generateButtonText}>
//               {loading ? 'Generating...' : 'Generate Plan'}
//             </Text>
//           </TouchableOpacity>

//           {error && (
//             <Text style={styles.errorText}>{error}</Text>
//           )}
//         </View>
//       </ScrollView>
//       {loading && (
//         <View style={styles.loadingOverlay}>
//           <ActivityIndicator size="large" color="#FF5E9B" />
//         </View>
//       )}
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
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#FFFFFF',
//   },
//   formContainer: {
//     width: '90%',
//     alignSelf: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 12,
//     padding: 20,
//   },
//   label: {
//     fontSize: 16,
//     color: '#FFFFFF',
//     marginBottom: 5,
//     marginTop: 10,
//   },
//   picker: {
//     color: '#FFFFFF',
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 8,
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginBottom: 10,
//   },
//   checkbox: {
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     borderColor: '#FF5E9B',
//     borderRadius: 5,
//     marginRight: 10,
//     marginBottom: 5,
//   },
//   checkboxSelected: {
//     backgroundColor: '#FF5E9B',
//   },
//   checkboxText: {
//     fontSize: 14,
//     color: '#FFFFFF',
//   },
//   input: {
//     fontSize: 16,
//     color: '#FFFFFF',
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 8,
//     padding: 10,
//     marginBottom: 10,
//   },
//   generateButton: {
//     backgroundColor: '#FF5E9B',
//     paddingVertical: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 15,
//   },
//   disabledButton: {
//     backgroundColor: '#A0A0A0',
//   },
//   generateButtonText: {
//     fontSize: 18,
//     color: '#FFFFFF',
//     fontWeight: '600',
//   },
//   errorText: {
//     fontSize: 16,
//     color: '#FF4444',
//     textAlign: 'center',
//     marginTop: 15,
//   },
//   loadingOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
//   ActivityIndicator,
// } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import axios from 'axios';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const API_OPTIONS = {
//   method: 'POST',
//   url: 'https://ai-workout-planner-exercise-fitness-nutrition-guide.p.rapidapi.com/generateWorkoutPlan',
//   params: { noqueue: '6' },
//   headers: {
//     'x-rapidapi-key': '85641ae2f0msh592c9334af123a6p1d9a5ejsn7ddc287f0b4e', // Replace if invalid
//     'x-rapidapi-host': 'ai-workout-planner-exercise-fitness-nutrition-guide.p.rapidapi.com',
//     'Content-Type': 'application/json',
//   },
// };

// export default function WorkoutPlanScreen({ navigation }) {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Form states
//   const [goal, setGoal] = useState('Build muscle');
//   const [fitnessLevel, setFitnessLevel] = useState('Intermediate');
//   const [preferences, setPreferences] = useState(['Weight training']);
//   const [healthConditions, setHealthConditions] = useState(['None']);
//   const [daysPerWeek, setDaysPerWeek] = useState('4');
//   const [sessionDuration, setSessionDuration] = useState('60');
//   const [planDurationWeeks, setPlanDurationWeeks] = useState('4');

//   const fetchWorkoutPlan = async () => {
//     setLoading(true);
//     setError(null);

//     const requestData = {
//       goal,
//       fitness_level: fitnessLevel,
//       preferences,
//       health_conditions: healthConditions.includes('None') ? ['None'] : healthConditions,
//       schedule: {
//         days_per_week: parseInt(daysPerWeek, 10),
//         session_duration: parseInt(sessionDuration, 10),
//       },
//       plan_duration_weeks: parseInt(planDurationWeeks, 10),
//       lang: 'en',
//     };

//     try {
//       const response = await axios.request({
//         ...API_OPTIONS,
//         data: requestData,
//       });
//       console.log('API Response:', JSON.stringify(response.data, null, 2));
//       setLoading(false);
//       navigation.navigate('WorkoutPlanResponse', { workoutData: response.data.result });
//     } catch (err) {
//       console.error('Error fetching workout plan:', err.response?.data || err.message);
//       setError(
//         err.response?.status === 403
//           ? 'API Access Denied (403). Check your RapidAPI key or subscription.'
//           : 'Failed to load workout plan. Please try again.'
//       );
//       setLoading(false);
//     }
//   };

//   const togglePreference = (pref) => {
//     setPreferences((prev) =>
//       prev.includes(pref) ? prev.filter((p) => p !== pref) : [...prev, pref]
//     );
//   };

//   const toggleHealthCondition = (condition) => {
//     if (condition === 'None') {
//       setHealthConditions(['None']);
//     } else {
//       setHealthConditions((prev) => {
//         if (prev.includes('None')) return [condition];
//         return prev.includes(condition)
//           ? prev.filter((c) => c !== condition)
//           : [...prev, condition];
//       });
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         {/* Header */}
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Ionicons name="arrow-back" size={30} color="#A84CF2" /> {/* Changed to #A84CF2 */}
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Create Workout Plan</Text>
//         </View>

//         {/* Form Container */}
//         <View style={styles.formContainer}>
//           <Text style={styles.label}>Goal</Text>
//           <Picker
//             selectedValue={goal}
//             onValueChange={(itemValue) => setGoal(itemValue)}
//             style={styles.picker}
//           >
//             <Picker.Item label="Build muscle" value="Build muscle" />
//             <Picker.Item label="Lose weight" value="Lose weight" />
//             <Picker.Item label="Improve endurance" value="Improve endurance" />
//           </Picker>

//           <Text style={styles.label}>Fitness Level</Text>
//           <Picker
//             selectedValue={fitnessLevel}
//             onValueChange={(itemValue) => setFitnessLevel(itemValue)}
//             style={styles.picker}
//           >
//             <Picker.Item label="Beginner" value="Beginner" />
//             <Picker.Item label="Intermediate" value="Intermediate" />
//             <Picker.Item label="Advanced" value="Advanced" />
//           </Picker>

//           <Text style={styles.label}>Preferences</Text>
//           <View style={styles.checkboxContainer}>
//             {['Weight training', 'Cardio', 'Bodyweight', 'Yoga'].map((pref) => (
//               <TouchableOpacity
//                 key={pref}
//                 style={[
//                   styles.checkbox,
//                   preferences.includes(pref) && styles.checkboxSelected,
//                 ]}
//                 onPress={() => togglePreference(pref)}
//               >
//                 <Text style={styles.checkboxText}>{pref}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           <Text style={styles.label}>Health Conditions</Text>
//           <View style={styles.checkboxContainer}>
//             {['None', 'Back pain', 'Knee issues', 'Heart condition'].map((condition) => (
//               <TouchableOpacity
//                 key={condition}
//                 style={[
//                   styles.checkbox,
//                   healthConditions.includes(condition) && styles.checkboxSelected,
//                 ]}
//                 onPress={() => toggleHealthCondition(condition)}
//               >
//                 <Text style={styles.checkboxText}>{condition}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           <Text style={styles.label}>Days per Week</Text>
//           <TextInput
//             style={styles.input}
//             value={daysPerWeek}
//             onChangeText={setDaysPerWeek}
//             keyboardType="numeric"
//             placeholder="e.g., 4"
//             placeholderTextColor="#666666"
//           />

//           <Text style={styles.label}>Session Duration (min)</Text>
//           <TextInput
//             style={styles.input}
//             value={sessionDuration}
//             onChangeText={setSessionDuration}
//             keyboardType="numeric"
//             placeholder="e.g., 60"
//             placeholderTextColor="#666666"
//           />

//           <Text style={styles.label}>Plan Duration (weeks)</Text>
//           <TextInput
//             style={styles.input}
//             value={planDurationWeeks}
//             onChangeText={setPlanDurationWeeks}
//             keyboardType="numeric"
//             placeholder="e.g., 4"
//             placeholderTextColor="#666666"
//           />

//           <TouchableOpacity
//             style={[styles.generateButton, loading && styles.disabledButton]}
//             onPress={fetchWorkoutPlan}
//             disabled={loading}
//           >
//             <Text style={styles.generateButtonText}>
//               {loading ? 'Generating...' : 'Generate Plan'}
//             </Text>
//           </TouchableOpacity>

//           {error && (
//             <Text style={styles.errorText}>{error}</Text>
//           )}
//         </View>
//       </ScrollView>
//       {loading && (
//         <View style={styles.loadingOverlay}>
//           <ActivityIndicator size="large" color="#A84CF2" /> {/* Changed to #A84CF2 */}
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF', // Changed to white background
//   },
//   scrollContent: {
//     paddingBottom: 20,
//     paddingTop: 10,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingBottom: 15,
//     marginBottom: 10,
//   },
//   backButton: {
//     marginRight: 15,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#333333', // Changed to dark gray for white background
//   },
//   formContainer: {
//     width: '90%',
//     alignSelf: 'center',
//     backgroundColor: '#F9F9F9', // Light gray background for contrast
//     borderRadius: 15,
//     padding: 20,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   label: {
//     fontSize: 16,
//     color: '#333333', // Changed to dark gray for white background
//     marginBottom: 8,
//     marginTop: 15,
//   },
//   picker: {
//     color: '#333333',
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//     borderRadius: 8,
//     marginBottom: 15,
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginBottom: 15,
//   },
//   checkbox: {
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderWidth: 1,
//     borderColor: '#A84CF2', // Changed to #A84CF2
//     borderRadius: 20,
//     marginRight: 10,
//     marginBottom: 10,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: 1 },
//   },
//   checkboxSelected: {
//     backgroundColor: '#A84CF2', // Changed to #A84CF2
//   },
//   checkboxText: {
//     fontSize: 14,
//     color: '#333333',
//     textAlign: 'center',
//   },
//   input: {
//     fontSize: 16,
//     color: '#333333',
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 15,
//   },
//   generateButton: {
//     backgroundColor: '#A84CF2', // Changed to #A84CF2
//     paddingVertical: 14,
//     borderRadius: 25,
//     alignItems: 'center',
//     marginTop: 20,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   disabledButton: {
//     backgroundColor: '#A0A0A0',
//   },
//   generateButtonText: {
//     fontSize: 18,
//     color: '#FFFFFF',
//     fontWeight: '600',
//   },
//   errorText: {
//     fontSize: 14,
//     color: '#FF4444',
//     textAlign: 'center',
//     marginTop: 15,
//     paddingHorizontal: 10,
//   },
//   loadingOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjusted for white background
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });







// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
//   ActivityIndicator,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { Picker } from '@react-native-picker/picker';
// import { GoogleGenerativeAI } from '@google/generative-ai'; // Import Gemini API
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const API_KEY = 'AIzaSyCTDmDp3GohRzr-1s7pm9OkeDRV6fMyC8Y'; // Replace with your Google Gemini API key
// const genAI = new GoogleGenerativeAI(API_KEY);
// const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// export default function WorkoutPlanScreen({ navigation }) {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Form states
//   const [goal, setGoal] = useState('Build muscle');
//   const [fitnessLevel, setFitnessLevel] = useState('Intermediate');
//   const [preferences, setPreferences] = useState(['Weight training']);
//   const [healthConditions, setHealthConditions] = useState(['None']);
//   const [sessionDuration, setSessionDuration] = useState('60');
//   const [restDays, setRestDays] = useState(['Fri', 'Sat', 'Sun']); // Default rest days

//   const fetchWorkoutPlan = async () => {
//     setLoading(true);
//     setError(null);

//     // Determine active days (exclude rest days)
//     const allDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
//     const activeDays = allDays.filter((day) => !restDays.includes(day));
//     const daysPerWeek = activeDays.length;

//     const prompt = `
//       Return ONLY a valid JSON object with no additional text, markdown, or code block markers (e.g., no \`\`\`json or \`\`\`). The JSON should represent a detailed workout plan for 1 week with the following structure:
//       {
//         "plan": [
//           {
//             "day": string (one of ${activeDays.join(', ')}, must exclude ${restDays.join(', ')}),
//             "exercises": [
//               {
//                 "name": string,
//                 "sets": number,
//                 "reps": number (must be a numeric value, e.g., 8; do NOT use phrases like "as many as possible". For exercises like Pull-ups where reps are typically 'as many as possible', use a reasonable numeric estimate such as 10),
//                 "duration": number (in minutes, must be greater than 0),
//                 "equipment": string (required; specify the equipment needed, e.g., "Barbell", "Dumbbells", "Bodyweight", or "None" if no equipment is needed)
//               }
//             ]
//           }
//         ]
//       }
//       The plan should be tailored to:
//       - Goal: ${goal}
//       - Fitness Level: ${fitnessLevel}
//       - Preferences: ${preferences.join(', ')}
//       - Health Conditions: ${healthConditions.includes('None') ? 'None' : healthConditions.join(', ')}
//       - Schedule: ${daysPerWeek} days per week, ${sessionDuration} minutes per session
//       - Plan Duration: 1 week
//       Ensure the plan is safe given the health conditions and matches the preferences. For "reps", always provide a numeric value (e.g., 10 instead of "as many as possible"). If an exercise traditionally allows 'as many as possible' reps (e.g., Pull-ups), estimate a reasonable number (e.g., 10).
//       For each day, the sum of "duration" for all exercises must exactly equal the session duration (${sessionDuration} minutes). Distribute the duration appropriately across exercises (e.g., for a 60-minute session with 4 exercises, each could be 15 minutes).
//       Include an "equipment" field for each exercise, specifying the required equipment or "None" if no equipment is needed.
//       Only include days from the list ${activeDays.join(', ')} and exclude ${restDays.join(', ')}.
//     `;

//     try {
//       const result = await model.generateContent(prompt);
//       let responseText = result.response.text();

//       // Log the raw response for debugging
//       console.log('Raw API Response:', responseText);

//       // Remove markdown code block markers (```json ... ```)
//       responseText = responseText.replace(/```json\n|```/g, '').trim();

//       // Log the cleaned response
//       console.log('Cleaned Response:', responseText);

//       // Extract JSON using regex (match the content between { and })
//       const jsonMatch = responseText.match(/\{[\s\S]*\}/);
//       if (!jsonMatch) {
//         throw new Error('No valid JSON found in response');
//       }

//       let jsonString = jsonMatch[0];

//       // Log JSON string before replacement for debugging
//       console.log('JSON String Before Replacement:', jsonString);

//       // Replace invalid "reps" values with a numeric fallback (e.g., 10 for "as many as possible")
//       jsonString = jsonString.replace(/"reps":\s*"as many as possible"/gi, '"reps": 10');

//       // Log JSON string after replacement for debugging
//       console.log('JSON String After Replacement:', jsonString);

//       const workoutData = JSON.parse(jsonString); // Parse the cleaned JSON
//       if (!workoutData.plan || !Array.isArray(workoutData.plan)) {
//         throw new Error('Invalid workout plan structure');
//       }

//       // Validate session duration
//       workoutData.plan.forEach((day) => {
//         const totalDuration = day.exercises.reduce((sum, exercise) => sum + exercise.duration, 0);
//         if (totalDuration !== parseInt(sessionDuration, 10)) {
//           console.warn(
//             `Day ${day.day} duration mismatch: Expected ${sessionDuration} minutes, got ${totalDuration} minutes`
//           );
//         }
//       });

//       console.log('Parsed Workout Data:', JSON.stringify(workoutData, null, 2));
//       setLoading(false);

//       // Pass all form data and plan to WorkoutPlanResponse
//       navigation.navigate('WorkoutPlanResponse', {
//         workoutData: workoutData.plan,
//         goal,
//         fitnessLevel,
//         daysPerWeek,
//         sessionDuration: parseInt(sessionDuration, 10),
//         planDurationWeeks: 1,
//       });
//     } catch (err) {
//       console.error('Error fetching workout plan:', err.message);
//       setError(
//         err.message.includes('403')
//           ? 'API Access Denied (403). Check your Google Gemini API key or subscription.'
//           : err.message.includes('No valid JSON')
//           ? 'Invalid response format from API. Please try again or check the prompt.'
//           : 'Failed to load workout plan. Please try again.'
//       );
//       setLoading(false);
//     }
//   };

//   const togglePreference = (pref) => {
//     setPreferences((prev) =>
//       prev.includes(pref) ? prev.filter((p) => p !== pref) : [...prev, pref]
//     );
//   };

//   const toggleHealthCondition = (condition) => {
//     if (condition === 'None') {
//       setHealthConditions(['None']);
//     } else {
//       setHealthConditions((prev) => {
//         if (prev.includes('None')) return [condition];
//         return prev.includes(condition)
//           ? prev.filter((c) => c !== condition)
//           : [...prev, condition];
//       });
//     }
//   };

//   const toggleRestDay = (day) => {
//     setRestDays((prev) =>
//       prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
//     );
//   };

//   return (
//     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.gradientContainer}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         {/* Header */}
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Ionicons name="arrow-back" size={30} color="#A84CF2" />
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Create Workout Plan</Text>
//         </View>

//         {/* Form Container */}
//         <View style={styles.formContainer}>
//           <Text style={styles.label}>Goal</Text>
//           <Picker
//             selectedValue={goal}
//             onValueChange={(itemValue) => setGoal(itemValue)}
//             style={styles.picker}
//           >
//             <Picker.Item label="Build muscle" value="Build muscle" />
//             <Picker.Item label="Lose weight" value="Lose weight" />
//             <Picker.Item label="Improve endurance" value="Improve endurance" />
//           </Picker>

//           <Text style={styles.label}>Fitness Level</Text>
//           <Picker
//             selectedValue={fitnessLevel}
//             onValueChange={(itemValue) => setFitnessLevel(itemValue)}
//             style={styles.picker}
//           >
//             <Picker.Item label="Beginner" value="Beginner" />
//             <Picker.Item label="Intermediate" value="Intermediate" />
//             <Picker.Item label="Advanced" value="Advanced" />
//           </Picker>

//           <Text style={styles.label}>Preferences</Text>
//           <View style={styles.checkboxContainer}>
//             {['Weight training', 'Cardio', 'Bodyweight', 'Yoga'].map((pref) => (
//               <TouchableOpacity
//                 key={pref}
//                 style={[
//                   styles.checkbox,
//                   preferences.includes(pref) && styles.checkboxSelected,
//                 ]}
//                 onPress={() => togglePreference(pref)}
//               >
//                 <Text style={styles.checkboxText}>{pref}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           <Text style={styles.label}>Health Conditions</Text>
//           <View style={styles.checkboxContainer}>
//             {['None', 'Back pain', 'Knee issues', 'Heart condition'].map((condition) => (
//               <TouchableOpacity
//                 key={condition}
//                 style={[
//                   styles.checkbox,
//                   healthConditions.includes(condition) && styles.checkboxSelected,
//                 ]}
//                 onPress={() => toggleHealthCondition(condition)}
//               >
//                 <Text style={styles.checkboxText}>{condition}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           <Text style={styles.label}>Session Duration (min)</Text>
//           <TextInput
//             style={styles.input}
//             value={sessionDuration}
//             onChangeText={setSessionDuration}
//             keyboardType="numeric"
//             placeholder="e.g., 60"
//             placeholderTextColor="#D1D1D1"
//           />

//           <Text style={styles.label}>Rest Days</Text>
//           <View style={styles.checkboxContainer}>
//             {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
//               <TouchableOpacity
//                 key={day}
//                 style={[
//                   styles.checkbox,
//                   restDays.includes(day) && styles.checkboxSelected,
//                 ]}
//                 onPress={() => toggleRestDay(day)}
//               >
//                 <Text style={styles.checkboxText}>{day}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           <TouchableOpacity
//             style={[styles.generateButton, loading && styles.disabledButton]}
//             onPress={fetchWorkoutPlan}
//             disabled={loading}
//           >
//             <Text style={styles.generateButtonText}>
//               {loading ? 'Generating...' : 'Generate Plan'}
//             </Text>
//           </TouchableOpacity>

//           {error && <Text style={styles.errorText}>{error}</Text>}
//         </View>
//       </ScrollView>
//       {loading && (
//         <View style={styles.loadingOverlay}>
//           <ActivityIndicator size="large" color="#A84CF2" />
//         </View>
//       )}
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   gradientContainer: {
//     flex: 1,
//   },
//   scrollContent: {
//     paddingBottom: 20,
//     paddingTop: 10,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingBottom: 15,
//     marginBottom: 10,
//   },
//   backButton: {
//     marginRight: 15,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#FFFFFF',
//   },
//   formContainer: {
//     width: '90%',
//     alignSelf: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 15,
//     padding: 20,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   label: {
//     fontSize: 16,
//     color: '#FFFFFF',
//     marginBottom: 8,
//     marginTop: 15,
//   },
//   picker: {
//     color: '#FFFFFF',
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//     borderRadius: 8,
//     marginBottom: 15,
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginBottom: 15,
//   },
//   checkbox: {
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderWidth: 1,
//     borderColor: '#A84CF2',
//     borderRadius: 20,
//     marginRight: 10,
//     marginBottom: 10,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: 1 },
//   },
//   checkboxSelected: {
//     backgroundColor: '#A84CF2',
//   },
//   checkboxText: {
//     fontSize: 14,
//     color: '#FFFFFF',
//     textAlign: 'center',
//   },
//   input: {
//     fontSize: 16,
//     color: '#FFFFFF',
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 15,
//   },
//   generateButton: {
//     backgroundColor: '#A84CF2',
//     paddingVertical: 14,
//     borderRadius: 25,
//     alignItems: 'center',
//     marginTop: 20,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   disabledButton: {
//     backgroundColor: '#A0A0A0',
//   },
//   generateButtonText: {
//     fontSize: 18,
//     color: '#FFFFFF',
//     fontWeight: '600',
//   },
//   errorText: {
//     fontSize: 14,
//     color: '#FF4444',
//     textAlign: 'center',
//     marginTop: 15,
//     paddingHorizontal: 10,
//   },
//   loadingOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(26, 26, 46, 0.8)', // Adjusted for gradient background
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });







// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
//   ActivityIndicator,
// } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { GoogleGenerativeAI } from '@google/generative-ai';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const API_KEY = 'AIzaSyCTDmDp3GohRzr-1s7pm9OkeDRV6fMyC8Y'; // Replace with your Google Gemini API key
// const genAI = new GoogleGenerativeAI(API_KEY);
// const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// export default function WorkoutPlanScreen({ navigation }) {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Form states
//   const [goal, setGoal] = useState('Build muscle');
//   const [fitnessLevel, setFitnessLevel] = useState('Intermediate');
//   const [preferences, setPreferences] = useState(['Weight training']);
//   const [healthConditions, setHealthConditions] = useState(['None']);
//   const [sessionDuration, setSessionDuration] = useState('60');
//   const [restDays, setRestDays] = useState(['Fri', 'Sat', 'Sun']);

//   const fetchWorkoutPlan = async () => {
//     setLoading(true);
//     setError(null);

//     // Determine active days (exclude rest days)
//     const allDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
//     const activeDays = allDays.filter((day) => !restDays.includes(day));
//     const daysPerWeek = activeDays.length;

//     const prompt = `
//       Return ONLY a valid JSON object with no additional text, markdown, or code block markers (e.g., no \`\`\`json or \`\`\`). The JSON should represent a detailed workout plan for 1 week with the following structure:
//       {
//         "plan": [
//           {
//             "day": string (one of ${activeDays.join(', ')}, must exclude ${restDays.join(', ')}),
//             "exercises": [
//               {
//                 "name": string,
//                 "sets": number,
//                 "reps": number (must be a numeric value, e.g., 8; do NOT use phrases like "as many as possible". For exercises like Pull-ups where reps are typically 'as many as possible', use a reasonable numeric estimate such as 10),
//                 "duration": number (in minutes, must be greater than 0),
//                 "equipment": string (required; specify the equipment needed, e.g., "Barbell", "Dumbbells", "Bodyweight", or "None" if no equipment is needed)
//               }
//             ]
//           }
//         ]
//       }
//       The plan should be tailored to:
//       - Goal: ${goal}
//       - Fitness Level: ${fitnessLevel}
//       - Preferences: ${preferences.join(', ')}
//       - Health Conditions: ${healthConditions.includes('None') ? 'None' : healthConditions.join(', ')}
//       - Schedule: ${daysPerWeek} days per week, ${sessionDuration} minutes per session
//       - Plan Duration: 1 week
//       Ensure the plan is safe given the health conditions and matches the preferences. For "reps", always provide a numeric value (e.g., 10 instead of "as many as possible"). If an exercise traditionally allows 'as many as possible' reps (e.g., Pull-ups), estimate a reasonable number (e.g., 10).
//       For each day, the sum of "duration" for all exercises must exactly equal the session duration (${sessionDuration} minutes). Distribute the duration appropriately across exercises (e.g., for a 60-minute session with 4 exercises, each could be 15 minutes).
//       Include an "equipment" field for each exercise, specifying the required equipment or "None" if no equipment is needed.
//       Only include days from the list ${activeDays.join(', ')} and exclude ${restDays.join(', ')}.
//     `;

//     try {
//       const result = await model.generateContent(prompt);
//       let responseText = result.response.text();

//       console.log('Raw API Response:', responseText);
//       responseText = responseText.replace(/```json\n|```/g, '').trim();
//       console.log('Cleaned Response:', responseText);

//       const jsonMatch = responseText.match(/\{[\s\S]*\}/);
//       if (!jsonMatch) {
//         throw new Error('No valid JSON found in response');
//       }

//       let jsonString = jsonMatch[0];
//       console.log('JSON String Before Replacement:', jsonString);
//       jsonString = jsonString.replace(/"reps":\s*"as many as possible"/gi, '"reps": 10');
//       console.log('JSON String After Replacement:', jsonString);

//       const workoutData = JSON.parse(jsonString);
//       if (!workoutData.plan || !Array.isArray(workoutData.plan)) {
//         throw new Error('Invalid workout plan structure');
//       }

//       workoutData.plan.forEach((day) => {
//         const totalDuration = day.exercises.reduce((sum, exercise) => sum + exercise.duration, 0);
//         if (totalDuration !== parseInt(sessionDuration, 10)) {
//           console.warn(
//             `Day ${day.day} duration mismatch: Expected ${sessionDuration} minutes, got ${totalDuration} minutes`
//           );
//         }
//       });

//       console.log('Parsed Workout Data:', JSON.stringify(workoutData, null, 2));
//       setLoading(false);

//       navigation.navigate('WorkoutPlanResponse', {
//         workoutData: workoutData.plan,
//         goal,
//         fitnessLevel,
//         daysPerWeek,
//         sessionDuration: parseInt(sessionDuration, 10),
//         planDurationWeeks: 1,
//       });
//     } catch (err) {
//       console.error('Error fetching workout plan:', err.message);
//       setError(
//         err.message.includes('403')
//           ? 'API Access Denied (403). Check your Google Gemini API key or subscription.'
//           : err.message.includes('No valid JSON')
//           ? 'Invalid response format from API. Please try again or check the prompt.'
//           : 'Failed to load workout plan. Please try again.'
//       );
//       setLoading(false);
//     }
//   };

//   const togglePreference = (pref) => {
//     setPreferences((prev) =>
//       prev.includes(pref) ? prev.filter((p) => p !== pref) : [...prev, pref]
//     );
//   };

//   const toggleHealthCondition = (condition) => {
//     if (condition === 'None') {
//       setHealthConditions(['None']);
//     } else {
//       setHealthConditions((prev) => {
//         if (prev.includes('None')) return [condition];
//         return prev.includes(condition)
//           ? prev.filter((c) => c !== condition)
//           : [...prev, condition];
//       });
//     }
//   };

//   const toggleRestDay = (day) => {
//     setRestDays((prev) =>
//       prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         {/* Header */}
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Ionicons name="arrow-back" size={30} color="#4A90E2" />
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Create Workout Plan</Text>
//         </View>

//         {/* Form Container */}
//         <View style={styles.formContainer}>
//           <Text style={styles.label}>Goal</Text>
//           <Picker
//             selectedValue={goal}
//             onValueChange={(itemValue) => setGoal(itemValue)}
//             style={styles.picker}
//           >
//             <Picker.Item label="Build muscle" value="Build muscle" />
//             <Picker.Item label="Lose weight" value="Lose weight" />
//             <Picker.Item label="Improve endurance" value="Improve endurance" />
//           </Picker>

//           <Text style={styles.label}>Fitness Level</Text>
//           <Picker
//             selectedValue={fitnessLevel}
//             onValueChange={(itemValue) => setFitnessLevel(itemValue)}
//             style={styles.picker}
//           >
//             <Picker.Item label="Beginner" value="Beginner" />
//             <Picker.Item label="Intermediate" value="Intermediate" />
//             <Picker.Item label="Advanced" value="Advanced" />
//           </Picker>

//           <Text style={styles.label}>Preferences</Text>
//           <View style={styles.checkboxContainer}>
//             {['Weight training', 'Cardio', 'Bodyweight', 'Yoga'].map((pref) => (
//               <TouchableOpacity
//                 key={pref}
//                 style={[
//                   styles.checkbox,
//                   preferences.includes(pref) && styles.checkboxSelected,
//                 ]}
//                 onPress={() => togglePreference(pref)}
//               >
//                 <Text style={styles.checkboxText}>{pref}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           <Text style={styles.label}>Health Conditions</Text>
//           <View style={styles.checkboxContainer}>
//             {['None', 'Back pain', 'Knee issues', 'Heart condition'].map((condition) => (
//               <TouchableOpacity
//                 key={condition}
//                 style={[
//                   styles.checkbox,
//                   healthConditions.includes(condition) && styles.checkboxSelected,
//                 ]}
//                 onPress={() => toggleHealthCondition(condition)}
//               >
//                 <Text style={styles.checkboxText}>{condition}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           <Text style={styles.label}>Session Duration (min)</Text>
//           <TextInput
//             style={styles.input}
//             value={sessionDuration}
//             onChangeText={setSessionDuration}
//             keyboardType="numeric"
//             placeholder="e.g., 60"
//             placeholderTextColor="#718096"
//           />

//           <Text style={styles.label}>Rest Days</Text>
//           <View style={styles.checkboxContainer}>
//             {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
//               <TouchableOpacity
//                 key={day}
//                 style={[
//                   styles.checkbox,
//                   restDays.includes(day) && styles.checkboxSelected,
//                 ]}
//                 onPress={() => toggleRestDay(day)}
//               >
//                 <Text style={styles.checkboxText}>{day}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           <TouchableOpacity
//             style={[styles.generateButton, loading && styles.disabledButton]}
//             onPress={fetchWorkoutPlan}
//             disabled={loading}
//           >
//             <Text style={styles.generateButtonText}>
//               {loading ? 'Generating...' : 'Generate Plan'}
//             </Text>
//           </TouchableOpacity>

//           {error && <Text style={styles.errorText}>{error}</Text>}
//         </View>
//       </ScrollView>
//       {loading && (
//         <View style={styles.loadingOverlay}>
//           <ActivityIndicator size="large" color="#4A90E2" />
//         </View>
//       )}
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
//     paddingBottom: 15,
//     marginBottom: 10,
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
//   formContainer: {
//     width: '90%',
//     alignSelf: 'center',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 15,
//     padding: 20,
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#2D3748',
//     marginBottom: 8,
//     marginTop: 15,
//   },
//   picker: {
//     color: '#2D3748',
//     backgroundColor: '#F5F6F5',
//     borderRadius: 8,
//     marginBottom: 15,
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginBottom: 15,
//   },
//   checkbox: {
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderWidth: 1,
//     borderColor: '#4A90E2',
//     borderRadius: 20,
//     marginRight: 10,
//     marginBottom: 10,
//     backgroundColor: '#F5F6F5',
//   },
//   checkboxSelected: {
//     backgroundColor: '#4A90E2',
//   },
//   checkboxText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#2D3748',
//   },
//   input: {
//     fontSize: 16,
//     color: '#2D3748',
//     backgroundColor: '#F5F6F5',
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 15,
//   },
//   generateButton: {
//     backgroundColor: '#4A90E2',
//     paddingVertical: 14,
//     borderRadius: 25,
//     alignItems: 'center',
//     marginTop: 20,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   disabledButton: {
//     backgroundColor: '#A0A0A0',
//   },
//   generateButtonText: {
//     fontSize: 18,
//     color: '#FFFFFF',
//     fontWeight: '600',
//   },
//   errorText: {
//     fontSize: 14,
//     color: '#E53E3E',
//     textAlign: 'center',
//     marginTop: 15,
//     paddingHorizontal: 10,
//   },
//   loadingOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjusted for white background
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Animated,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Ionicons from 'react-native-vector-icons/Ionicons';

const API_KEY = 'AIzaSyCTDmDp3GohRzr-1s7pm9OkeDRV6fMyC8Y'; // Replace with your Google Gemini API key
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export default function WorkoutPlanScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Form states
  const [goal, setGoal] = useState('Build muscle');
  const [fitnessLevel, setFitnessLevel] = useState('Intermediate');
  const [preferences, setPreferences] = useState(['Weight training']);
  const [healthConditions, setHealthConditions] = useState(['None']);
  const [sessionDuration, setSessionDuration] = useState('60');
  const [restDays, setRestDays] = useState(['Fri', 'Sat', 'Sun']);
  const [gender, setGender] = useState('Male'); // New gender state

  const fadeAnim = useState(new Animated.Value(0))[0]; // Fade-in animation
  const [generateScale] = useState(new Animated.Value(1)); // Animation for Generate button

  useEffect(() => {
    // Fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
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

  const fetchWorkoutPlan = async () => {
    setLoading(true);
    setError(null);

    // Determine active days (exclude rest days)
    const allDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const activeDays = allDays.filter((day) => !restDays.includes(day));
    const daysPerWeek = activeDays.length;

    const prompt = `
      Return ONLY a valid JSON object with no additional text, markdown, or code block markers (e.g., no \`\`\`json or \`\`\`). The JSON should represent a detailed workout plan for 1 week with the following structure:
      {
        "plan": [
          {
            "day": string (one of ${activeDays.join(', ')}, must exclude ${restDays.join(', ')}),
            "exercises": [
              {
                "name": string,
                "sets": number,
                "reps": number (must be a numeric value, e.g., 8; do NOT use phrases like "as many as possible". For exercises like Pull-ups where reps are typically 'as many as possible', use a reasonable numeric estimate such as 10),
                "duration": number (in minutes, must be greater than 0),
                "equipment": string (required; specify the equipment needed, e.g., "Barbell", "Dumbbells", "Bodyweight", or "None" if no equipment is needed)
              }
            ]
          }
        ]
      }
      The plan should be tailored to:
      - Goal: ${goal}
      - Fitness Level: ${fitnessLevel}
      - Preferences: ${preferences.join(', ')}
      - Health Conditions: ${healthConditions.includes('None') ? 'None' : healthConditions.join(', ')}
      - Gender: ${gender}
      - Schedule: ${daysPerWeek} days per week, ${sessionDuration} minutes per session
      - Plan Duration: 1 week
      Ensure the plan is safe given the health conditions and matches the preferences. For "reps", always provide a numeric value (e.g., 10 instead of "as many as possible"). If an exercise traditionally allows 'as many as possible' reps (e.g., Pull-ups), estimate a reasonable number (e.g., 10).
      For each day, the sum of "duration" for all exercises must exactly equal the session duration (${sessionDuration} minutes). Distribute the duration appropriately across exercises (e.g., for a 60-minute session with 4 exercises, each could be 15 minutes).
      Include an "equipment" field for each exercise, specifying the required equipment or "None" if no equipment is needed.
      Only include days from the list ${activeDays.join(', ')} and exclude ${restDays.join(', ')}.
    `;

    try {
      const result = await model.generateContent(prompt);
      let responseText = result.response.text();

      console.log('Raw API Response:', responseText);
      responseText = responseText.replace(/```json\n|```/g, '').trim();
      console.log('Cleaned Response:', responseText);

      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('No valid JSON found in response');
      }

      let jsonString = jsonMatch[0];
      console.log('JSON String Before Replacement:', jsonString);
      jsonString = jsonString.replace(/"reps":\s*"as many as possible"/gi, '"reps": 10');
      console.log('JSON String After Replacement:', jsonString);

      const workoutData = JSON.parse(jsonString);
      if (!workoutData.plan || !Array.isArray(workoutData.plan)) {
        throw new Error('Invalid workout plan structure');
      }

      workoutData.plan.forEach((day) => {
        const totalDuration = day.exercises.reduce((sum, exercise) => sum + exercise.duration, 0);
        if (totalDuration !== parseInt(sessionDuration, 10)) {
          console.warn(
            `Day ${day.day} duration mismatch: Expected ${sessionDuration} minutes, got ${totalDuration} minutes`
          );
        }
      });

      console.log('Parsed Workout Data:', JSON.stringify(workoutData, null, 2));
      setLoading(false);

      navigation.navigate('WorkoutPlanResponse', {
        workoutData: workoutData.plan,
        goal,
        fitnessLevel,
        daysPerWeek,
        sessionDuration: parseInt(sessionDuration, 10),
        planDurationWeeks: 1,
      });
    } catch (err) {
      console.error('Error fetching workout plan:', err.message);
      setError(
        err.message.includes('403')
          ? 'API Access Denied (403). Check your Google Gemini API key or subscription.'
          : err.message.includes('No valid JSON')
          ? 'Invalid response format from API. Please try again or check the prompt.'
          : 'Failed to load workout plan. Please try again.'
      );
      setLoading(false);
    }
  };

  const togglePreference = (pref) => {
    setPreferences((prev) =>
      prev.includes(pref) ? prev.filter((p) => p !== pref) : [...prev, pref]
    );
  };

  const toggleHealthCondition = (condition) => {
    if (condition === 'None') {
      setHealthConditions(['None']);
    } else {
      setHealthConditions((prev) => {
        if (prev.includes('None')) return [condition];
        return prev.includes(condition)
          ? prev.filter((c) => c !== condition)
          : [...prev, condition];
      });
    }
  };

  const toggleRestDay = (day) => {
    setRestDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Header */}
          <LinearGradient
            colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)']}
            style={styles.header}
          >
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={30} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Create Workout Plan</Text>
          </LinearGradient>

          {/* Form Container */}
          <LinearGradient
            colors={['#FFFFFF', '#F5F7FA']} // Match UserDashboard card gradient
            style={styles.formContainer}
          >
            <Text style={styles.label}>Goal</Text>
            <Picker
              selectedValue={goal}
              onValueChange={(itemValue) => setGoal(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Build muscle" value="Build muscle" />
              <Picker.Item label="Lose weight" value="Lose weight" />
              <Picker.Item label="Improve endurance" value="Improve endurance" />
            </Picker>

            <Text style={styles.label}>Fitness Level</Text>
            <Picker
              selectedValue={fitnessLevel}
              onValueChange={(itemValue) => setFitnessLevel(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Beginner" value="Beginner" />
              <Picker.Item label="Intermediate" value="Intermediate" />
              <Picker.Item label="Advanced" value="Advanced" />
            </Picker>

            <Text style={styles.label}>Gender</Text>
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue) => setGender(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
            </Picker>

            <Text style={styles.label}>Preferences</Text>
            <View style={styles.checkboxContainer}>
              {['Weight training', 'Cardio', 'Bodyweight', 'Yoga'].map((pref) => (
                <TouchableOpacity
                  key={pref}
                  style={[
                    styles.checkbox,
                    preferences.includes(pref) && styles.checkboxSelected,
                  ]}
                  onPress={() => togglePreference(pref)}
                >
                  <Text style={[
                    styles.checkboxText,
                    preferences.includes(pref) && styles.checkboxTextSelected
                  ]}>
                    {pref}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.label}>Health Conditions</Text>
            <View style={styles.checkboxContainer}>
              {['None', 'Back pain', 'Knee issues', 'Heart condition'].map((condition) => (
                <TouchableOpacity
                  key={condition}
                  style={[
                    styles.checkbox,
                    healthConditions.includes(condition) && styles.checkboxSelected,
                  ]}
                  onPress={() => toggleHealthCondition(condition)}
                >
                  <Text style={[
                    styles.checkboxText,
                    healthConditions.includes(condition) && styles.checkboxTextSelected
                  ]}>
                    {condition}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.label}>Session Duration (min)</Text>
            <TextInput
              style={styles.input}
              value={sessionDuration}
              onChangeText={setSessionDuration}
              keyboardType="numeric"
              placeholder="e.g., 60"
              placeholderTextColor="#718096"
            />

            <Text style={styles.label}>Rest Days</Text>
            <View style={styles.checkboxContainer}>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <TouchableOpacity
                  key={day}
                  style={[
                    styles.checkbox,
                    restDays.includes(day) && styles.checkboxSelected,
                  ]}
                  onPress={() => toggleRestDay(day)}
                >
                  <Text style={[
                    styles.checkboxText,
                    restDays.includes(day) && styles.checkboxTextSelected
                  ]}>
                    {day}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              style={[styles.generateButton, loading && styles.disabledButton]}
              onPressIn={() => handlePressIn(generateScale)}
              onPressOut={() => handlePressOut(generateScale)}
              onPress={fetchWorkoutPlan}
              disabled={loading}
            >
              <Animated.View style={{ transform: [{ scale: generateScale }] }}>
                <LinearGradient
                  colors={loading ? ['#A0AEC0', '#A0AEC0'] : ['#FF6F61', '#FF9F1C']}
                  style={styles.generateGradient}
                >
                  {loading ? (
                    <ActivityIndicator size="small" color="#FFFFFF" />
                  ) : (
                    <Text style={styles.generateButtonText}>Generate Plan</Text>
                  )}
                </LinearGradient>
              </Animated.View>
            </TouchableOpacity>

            {error && <Text style={styles.errorText}>{error}</Text>}
          </LinearGradient>
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
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  formContainer: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    padding: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
    marginTop: 15,
  },
  picker: {
    color: '#1F2937',
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  checkbox: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#FF6F61',
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#F9FAFB',
  },
  checkboxSelected: {
    backgroundColor: '#FF6F61',
    borderColor: '#FF6F61',
  },
  checkboxText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  checkboxTextSelected: {
    color: '#FFFFFF',
  },
  input: {
    fontSize: 16,
    color: '#1F2937',
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  generateButton: {
    borderRadius: 25,
    overflow: 'hidden',
    marginTop: 20,
  },
  generateGradient: {
    paddingVertical: 14,
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.8,
  },
  generateButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  errorText: {
    fontSize: 14,
    color: '#E53E3E',
    textAlign: 'center',
    marginTop: 15,
    paddingHorizontal: 10,
  },
});