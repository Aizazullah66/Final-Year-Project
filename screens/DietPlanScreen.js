// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
//   ActivityIndicator,
//   Animated,
// } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { LinearGradient } from 'expo-linear-gradient';
// import { GoogleGenerativeAI } from '@google/generative-ai';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const API_KEY = 'AIzaSyCTDmDp3GohRzr-1s7pm9OkeDRV6fMyC8Y'; // Replace with your Google Gemini API key
// const genAI = new GoogleGenerativeAI(API_KEY);
// const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// export default function DietPlanScreen({ navigation }) {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Form states
//   const [goal, setGoal] = useState('Build muscle');
//   const [gender, setGender] = useState('Male');
//   const [nationality, setNationality] = useState('American');
//   const [dietType, setDietType] = useState('Balanced');
//   const [healthConditions, setHealthConditions] = useState('');
//   const [numMeals, setNumMeals] = useState('3');
//   const [calories, setCalories] = useState('2000');
//   const [dietaryPrefs, setDietaryPrefs] = useState(['High protein']); // Additional flair

//   const fadeAnim = useState(new Animated.Value(0))[0];
//   const [generateScale] = useState(new Animated.Value(1));

//   useEffect(() => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 600,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//   const handlePressIn = () => Animated.spring(generateScale, { toValue: 0.95, useNativeDriver: true }).start();
//   const handlePressOut = () => Animated.spring(generateScale, { toValue: 1, friction: 5, useNativeDriver: true }).start();

//   const fetchDietPlan = async () => {
//     setLoading(true);
//     setError(null);

//     const prompt = `
//       Return ONLY a valid JSON object with no additional text, markdown, or code block markers. The JSON should represent a detailed 1-day diet plan with the following structure:
//       {
//         "plan": [
//           {
//             "meal": string (e.g., "Breakfast", "Lunch", "Dinner", "Snack"),
//             "foods": [
//               {
//                 "name": string,
//                 "calories": number,
//                 "portion": string (e.g., "100g", "1 cup"),
//                 "notes": string (optional preparation or dietary notes)
//               }
//             ]
//           }
//         ],
//         "totalCalories": number
//       }
//       The plan should be tailored to:
//       - Goal: ${goal}
//       - Gender: ${gender}
//       - Nationality: ${nationality}
//       - Diet Type: ${dietType}
//       - Health Conditions: ${healthConditions || 'None'}
//       - Dietary Preferences: ${dietaryPrefs.join(', ')}
//       - Number of Meals: ${numMeals}
//       - Target Calories: ${calories}
//       - Plan Duration: 1 day
//       Ensure the plan respects the health conditions and aligns with the nationality's cuisine where possible. The total calories must equal ${calories}. Distribute calories evenly across meals unless the goal (e.g., "Build muscle") suggests otherwise (e.g., higher protein meals).
//     `;

//     try {
//       const result = await model.generateContent(prompt);
//       let responseText = result.response.text().replace(/```json\n|```/g, '').trim();
//       const dietData = JSON.parse(responseText);

//       if (!dietData.plan || !Array.isArray(dietData.plan)) {
//         throw new Error('Invalid diet plan structure');
//       }

//       setLoading(false);
//       navigation.navigate('DietPlanResponse', {
//         dietData: dietData.plan,
//         totalCalories: dietData.totalCalories,
//         goal,
//         gender,
//         nationality,
//         dietType,
//         numMeals: parseInt(numMeals, 10),
//         targetCalories: parseInt(calories, 10),
//       });
//     } catch (err) {
//       console.error('Error fetching diet plan:', err.message);
//       setError('Failed to load diet plan. Please try again.');
//       setLoading(false);
//     }
//   };

//   const toggleDietaryPref = (pref) => {
//     setDietaryPrefs((prev) =>
//       prev.includes(pref) ? prev.filter((p) => p !== pref) : [...prev, pref]
//     );
//   };

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
//             <Text style={styles.headerTitle}>Create Diet Plan</Text>
//           </LinearGradient>

//           <LinearGradient colors={['#FFFFFF', '#F5F7FA']} style={styles.formContainer}>
//             <Text style={styles.label}>Goal</Text>
//             <Picker selectedValue={goal} onValueChange={setGoal} style={styles.picker}>
//               <Picker.Item label="Build muscle" value="Build muscle" />
//               <Picker.Item label="Lose weight" value="Lose weight" />
//               <Picker.Item label="Improve endurance" value="Improve endurance" />
//             </Picker>

//             <Text style={styles.label}>Gender</Text>
//             <Picker selectedValue={gender} onValueChange={setGender} style={styles.picker}>
//               <Picker.Item label="Male" value="Male" />
//               <Picker.Item label="Female" value="Female" />
//             </Picker>

//             <Text style={styles.label}>Nationality</Text>
//             <Picker selectedValue={nationality} onValueChange={setNationality} style={styles.picker}>
//               <Picker.Item label="American" value="American" />
//               <Picker.Item label="Indian" value="Indian" />
//               <Picker.Item label="Mediterranean" value="Mediterranean" />
//               <Picker.Item label="Japanese" value="Japanese" />
//             </Picker>

//             <Text style={styles.label}>Diet Type</Text>
//             <Picker selectedValue={dietType} onValueChange={setDietType} style={styles.picker}>
//               <Picker.Item label="Balanced" value="Balanced" />
//               <Picker.Item label="Vegetarian" value="Vegetarian" />
//               <Picker.Item label="Vegan" value="Vegan" />
//               <Picker.Item label="Keto" value="Keto" />
//             </Picker>

//             <Text style={styles.label}>Dietary Preferences</Text>
//             <View style={styles.checkboxContainer}>
//               {['High protein', 'Low carb', 'Gluten-free', 'Dairy-free'].map((pref) => (
//                 <TouchableOpacity
//                   key={pref}
//                   style={[styles.checkbox, dietaryPrefs.includes(pref) && styles.checkboxSelected]}
//                   onPress={() => toggleDietaryPref(pref)}
//                 >
//                   <Text style={[
//                     styles.checkboxText,
//                     dietaryPrefs.includes(pref) && styles.checkboxTextSelected
//                   ]}>
//                     {pref}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </View>

//             <Text style={styles.label}>Health Conditions</Text>
//             <TextInput
//               style={styles.input}
//               value={healthConditions}
//               onChangeText={setHealthConditions}
//               placeholder="e.g., Diabetes, None"
//               placeholderTextColor="#718096"
//             />

//             <Text style={styles.label}>Number of Meals</Text>
//             <TextInput
//               style={styles.input}
//               value={numMeals}
//               onChangeText={setNumMeals}
//               keyboardType="numeric"
//               placeholder="e.g., 3"
//               placeholderTextColor="#718096"
//             />

//             <Text style={styles.label}>Target Calories</Text>
//             <TextInput
//               style={styles.input}
//               value={calories}
//               onChangeText={setCalories}
//               keyboardType="numeric"
//               placeholder="e.g., 2000"
//               placeholderTextColor="#718096"
//             />

//             <TouchableOpacity
//               style={[styles.generateButton, loading && styles.disabledButton]}
//               onPressIn={handlePressIn}
//               onPressOut={handlePressOut}
//               onPress={fetchDietPlan}
//               disabled={loading}
//             >
//               <Animated.View style={{ transform: [{ scale: generateScale }] }}>
//                 <LinearGradient
//                   colors={loading ? ['#A0AEC0', '#A0AEC0'] : ['#34C759', '#28A745']}
//                   style={styles.generateGradient}
//                 >
//                   {loading ? (
//                     <ActivityIndicator size="small" color="#FFFFFF" />
//                   ) : (
//                     <Text style={styles.generateButtonText}>Generate Diet Plan</Text>
//                   )}
//                 </LinearGradient>
//               </Animated.View>
//             </TouchableOpacity>

//             {error && <Text style={styles.errorText}>{error}</Text>}
//           </LinearGradient>
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
//   formContainer: {
//     width: '90%',
//     alignSelf: 'center',
//     borderRadius: 15,
//     padding: 20,
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//   },
//   label: { fontSize: 16, fontWeight: '700', color: '#1F2937', marginBottom: 8, marginTop: 15 },
//   picker: { color: '#1F2937', backgroundColor: '#F9FAFB', borderRadius: 8, marginBottom: 15 },
//   checkboxContainer: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 15 },
//   checkbox: {
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderWidth: 1,
//     borderColor: '#34C759',
//     borderRadius: 20,
//     marginRight: 10,
//     marginBottom: 10,
//     backgroundColor: '#F9FAFB',
//   },
//   checkboxSelected: { backgroundColor: '#34C759', borderColor: '#34C759' },
//   checkboxText: { fontSize: 14, fontWeight: '600', color: '#1F2937' },
//   checkboxTextSelected: { color: '#FFFFFF' },
//   input: {
//     fontSize: 16,
//     color: '#1F2937',
//     backgroundColor: '#F9FAFB',
//     borderWidth: 1,
//     borderColor: '#E2E8F0',
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 15,
//   },
//   generateButton: { borderRadius: 25, overflow: 'hidden', marginTop: 20 },
//   generateGradient: { paddingVertical: 14, alignItems: 'center' },
//   disabledButton: { opacity: 0.8 },
//   generateButtonText: { fontSize: 18, color: '#FFFFFF', fontWeight: '700' },
//   errorText: { fontSize: 14, color: '#E53E3E', textAlign: 'center', marginTop: 15 },
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

const API_KEY = 'AIzaSyCTDmDp3GohRzr-1s7pm9OkeDRV6fMyC8Y'; // Replace with your actual Google Gemini API key
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export default function DietPlanScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Form states
  const [goal, setGoal] = useState('Build muscle');
  const [gender, setGender] = useState('Male');
  const [nationality, setNationality] = useState('');
  const [dietType, setDietType] = useState('Balanced');
  const [healthConditions, setHealthConditions] = useState('');
  const [numMeals, setNumMeals] = useState('3');
  const [calories, setCalories] = useState('2000');
  const [dietaryPrefs, setDietaryPrefs] = useState(['High protein']);

  const fadeAnim = useState(new Animated.Value(0))[0];
  const [generateScale] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  const handlePressIn = () => Animated.spring(generateScale, { toValue: 0.95, useNativeDriver: true }).start();
  const handlePressOut = () => Animated.spring(generateScale, { toValue: 1, friction: 5, useNativeDriver: true }).start();

  const fetchDietPlan = async () => {
    setLoading(true);
    setError(null);

    const prompt = `
      Return ONLY a valid JSON object with no additional text, markdown, or code block markers (e.g., no \`\`\`json or \`\`\`). The JSON must follow this exact structure:
      {
        "plan": [
          {
            "day": string (e.g., "Monday", "Tuesday", etc.),
            "meals": [
              {
                "meal": string (e.g., "Breakfast", "Lunch", "Dinner", "Snack"),
                "foods": [
                  {
                    "name": string,
                    "calories": number,
                    "portion": string (e.g., "100g", "1 cup"),
                    "notes": string (optional preparation or dietary notes)
                  }
                ]
              }
            ],
            "dailyCalories": number
          }
        ],
        "totalWeeklyCalories": number
      }
      The plan must be tailored to:
      - Goal: ${goal}
      - Gender: ${gender}
      - Nationality: ${nationality || 'Not specified'}
      - Diet Type: ${dietType}
      - Health Conditions: ${healthConditions || 'None'}
      - Dietary Preferences: ${dietaryPrefs.join(', ')}
      - Number of Meals per Day: ${numMeals}
      - Target Daily Calories: ${calories}
      - Plan Duration: 7 days
      Ensure the plan respects the health conditions and aligns with the nationality's cuisine where possible. The "dailyCalories" for each day must equal ${calories}. The "totalWeeklyCalories" must equal ${calories} * 7. Do not include any text outside the JSON object.
    `;

    try {
      const result = await model.generateContent(prompt);
      const responseText = result.response.text();

      // Log the raw response for debugging
      console.log('Raw API Response:', responseText);

      // Clean the response by removing known problematic markers and trimming
      let cleanedResponse = responseText
        .replace(/```json\n|```/g, '') // Remove markdown markers
        .replace(/\n/g, '') // Remove newlines
        .trim();

      console.log('Cleaned Response:', cleanedResponse);

      // Attempt to extract valid JSON if the response contains extra characters
      const jsonMatch = cleanedResponse.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('No valid JSON object found in response');
      }

      const jsonString = jsonMatch[0];
      console.log('Extracted JSON String:', jsonString);

      // Parse the JSON
      const dietData = JSON.parse(jsonString);

      if (!dietData.plan || !Array.isArray(dietData.plan) || typeof dietData.totalWeeklyCalories !== 'number') {
        throw new Error('Invalid diet plan structure: Missing "plan" array or "totalWeeklyCalories"');
      }

      // Validate the structure further if needed
      dietData.plan.forEach((day, index) => {
        if (!day.day || !Array.isArray(day.meals) || typeof day.dailyCalories !== 'number') {
          throw new Error(`Invalid structure for day ${index + 1}: Missing required fields`);
        }
      });

      console.log('Parsed Diet Data:', JSON.stringify(dietData, null, 2));

      setLoading(false);
      navigation.navigate('DietPlanResponse', {
        dietData: dietData.plan,
        totalWeeklyCalories: dietData.totalWeeklyCalories,
        goal,
        gender,
        nationality: nationality || 'Not specified',
        dietType,
        numMeals: parseInt(numMeals, 10),
        targetCalories: parseInt(calories, 10),
      });
    } catch (err) {
      console.error('Error fetching diet plan:', err.message);
      console.error('Full error:', err);
      setError(
        err.message.includes('JSON Parse')
          ? 'Invalid JSON response from API. Check console logs for details.'
          : err.message.includes('Invalid diet plan structure')
          ? 'API returned malformed diet plan data.'
          : 'Failed to load diet plan. Please try again.'
      );
      setLoading(false);
    }
  };

  const toggleDietaryPref = (pref) => {
    setDietaryPrefs((prev) =>
      prev.includes(pref) ? prev.filter((p) => p !== pref) : [...prev, pref]
    );
  };

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
            <Text style={styles.headerTitle}>Create Diet Plan</Text>
          </LinearGradient>

          <LinearGradient colors={['#FFFFFF', '#F5F7FA']} style={styles.formContainer}>
            <Text style={styles.label}>Goal</Text>
            <Picker selectedValue={goal} onValueChange={setGoal} style={styles.picker}>
              <Picker.Item label="Build muscle" value="Build muscle" />
              <Picker.Item label="Lose weight" value="Lose weight" />
              <Picker.Item label="Improve endurance" value="Improve endurance" />
            </Picker>

            <Text style={styles.label}>Gender</Text>
            <Picker selectedValue={gender} onValueChange={setGender} style={styles.picker}>
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
            </Picker>

            <Text style={styles.label}>Nationality</Text>
            <TextInput
              style={styles.input}
              value={nationality}
              onChangeText={setNationality}
              placeholder="e.g., Italian, Brazilian"
              placeholderTextColor="#718096"
            />

            <Text style={styles.label}>Diet Type</Text>
            <Picker selectedValue={dietType} onValueChange={setDietType} style={styles.picker}>
              <Picker.Item label="Balanced" value="Balanced" />
              <Picker.Item label="Vegetarian" value="Vegetarian" />
              <Picker.Item label="Vegan" value="Vegan" />
              <Picker.Item label="Keto" value="Keto" />
            </Picker>

            <Text style={styles.label}>Dietary Preferences</Text>
            <View style={styles.checkboxContainer}>
              {['High protein', 'Low carb', 'Gluten-free', 'Dairy-free'].map((pref) => (
                <TouchableOpacity
                  key={pref}
                  style={[styles.checkbox, dietaryPrefs.includes(pref) && styles.checkboxSelected]}
                  onPress={() => toggleDietaryPref(pref)}
                >
                  <Text style={[
                    styles.checkboxText,
                    dietaryPrefs.includes(pref) && styles.checkboxTextSelected
                  ]}>
                    {pref}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.label}>Health Conditions</Text>
            <TextInput
              style={styles.input}
              value={healthConditions}
              onChangeText={setHealthConditions}
              placeholder="e.g., Diabetes, None"
              placeholderTextColor="#718096"
            />

            <Text style={styles.label}>Number of Meals per Day</Text>
            <TextInput
              style={styles.input}
              value={numMeals}
              onChangeText={setNumMeals}
              keyboardType="numeric"
              placeholder="e.g., 3"
              placeholderTextColor="#718096"
            />

            <Text style={styles.label}>Target Daily Calories</Text>
            <TextInput
              style={styles.input}
              value={calories}
              onChangeText={setCalories}
              keyboardType="numeric"
              placeholder="e.g., 2000"
              placeholderTextColor="#718096"
            />

            <TouchableOpacity
              style={[styles.generateButton, loading && styles.disabledButton]}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              onPress={fetchDietPlan}
              disabled={loading}
            >
              <Animated.View style={{ transform: [{ scale: generateScale }] }}>
                <LinearGradient
                  colors={loading ? ['#A0AEC0', '#A0AEC0'] : ['#34C759', '#28A745']}
                  style={styles.generateGradient}
                >
                  {loading ? (
                    <ActivityIndicator size="small" color="#FFFFFF" />
                  ) : (
                    <Text style={styles.generateButtonText}>Generate Weekly Diet Plan</Text>
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
  label: { fontSize: 16, fontWeight: '700', color: '#1F2937', marginBottom: 8, marginTop: 15 },
  picker: { color: '#1F2937', backgroundColor: '#F9FAFB', borderRadius: 8, marginBottom: 15 },
  checkboxContainer: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 15 },
  checkbox: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#34C759',
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#F9FAFB',
  },
  checkboxSelected: { backgroundColor: '#34C759', borderColor: '#34C759' },
  checkboxText: { fontSize: 14, fontWeight: '600', color: '#1F2937' },
  checkboxTextSelected: { color: '#FFFFFF' },
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
  generateButton: { borderRadius: 25, overflow: 'hidden', marginTop: 20 },
  generateGradient: { paddingVertical: 14, alignItems: 'center' },
  disabledButton: { opacity: 0.8 },
  generateButtonText: { fontSize: 18, color: '#FFFFFF', fontWeight: '700' },
  errorText: { fontSize: 14, color: '#E53E3E', textAlign: 'center', marginTop: 15 },
});