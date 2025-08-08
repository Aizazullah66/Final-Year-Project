// import React, { useState, useRef } from 'react';
// import { 
//   View, 
//   Text, 
//   ActivityIndicator, 
//   StyleSheet, 
//   ScrollView, 
//   TouchableOpacity,
//   Dimensions,
//   StatusBar,
//   SafeAreaView,
//   Modal,
//   Animated
// } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { Video } from 'expo-av';
// import axios from 'axios';
// import { LinearGradient } from 'expo-linear-gradient';
// import { Ionicons } from '@expo/vector-icons';
// import { Picker } from '@react-native-picker/picker';

// const { width, height } = Dimensions.get('window');

// export default function WorkoutDetection() {
//   const [videoUri, setVideoUri] = useState(null);
//   const [feedbackVideoUrl, setFeedbackVideoUrl] = useState(null);
//   const [feedbackData, setFeedbackData] = useState([]);
//   const [currentFeedback, setCurrentFeedback] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [error, setError] = useState(null);
//   const [fullScreen, setFullScreen] = useState(false);
//   const [selectedExercise, setSelectedExercise] = useState('');
//   const videoRef = useRef(null);
//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   // Request permissions and pick video
//   const pickVideo = async () => {
//     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (status !== 'granted') {
//       setError('Permission to access media library denied');
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Videos,
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setVideoUri(result.assets[0].uri);
//       setFeedbackVideoUrl(null);
//       setFeedbackData([]);
//       setCurrentFeedback(null);
//       setError(null);
//     }
//   };

//   // Upload video to Cloudinary and send to server
//   const uploadVideo = async () => {
//     if (!videoUri) {
//       setError('No video selected');
//       return;
//     }
//     if (!selectedExercise) {
//       setError('Please select an exercise');
//       return;
//     }

//     setUploading(true);
//     setError(null);

//     try {
//       // Upload to Cloudinary
//       const formData = new FormData();
//       formData.append('file', {
//         uri: videoUri,
//         type: 'video/mp4',
//         name: 'workout.mp4',
//       });
//       formData.append('upload_preset', 'workout_upload');
//       formData.append('folder', 'workout_videos');

//       const cloudinaryResponse = await axios.post(
//         'https://api.cloudinary.com/v1_1/dmwaesnu7/video/upload',
//         formData,
//         { headers: { 'Content-Type': 'multipart/form-data' } }
//       );
//       const videoUrl = cloudinaryResponse.data.secure_url;

//       // Send to server
//       const serverResponse = await axios.post('https://workout-feedback-app-production.up.railway.app/process-video', {
//         video_url: videoUrl,
//         exercise_type: selectedExercise
//       });

//       setFeedbackVideoUrl(serverResponse.data.feedback_video_url);
//       setFeedbackData(serverResponse.data.feedback_data || []);
      
//       // Animate feedback appearance
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 800,
//         useNativeDriver: true,
//       }).start();
      
//     } catch (err) {
//       setError('Error uploading or processing video: ' + (err.response?.data?.error || err.message));
//     } finally {
//       setUploading(false);
//     }
//   };

//   // Handle video playback status updates to sync feedback
//   const handlePlaybackStatusUpdate = (status) => {
//     if (status.isPlaying && status.positionMillis && feedbackData.length > 0) {
//       const currentTime = status.positionMillis / 1000;
//       const closestFeedback = feedbackData.reduce((prev, curr) => {
//         return Math.abs(curr.timestamp - currentTime) < Math.abs(prev?.timestamp - currentTime) ? curr : prev;
//       }, feedbackData[0]);
//       setCurrentFeedback(closestFeedback);
//     }
//   };

//   const CustomButton = ({ title, onPress, style, gradient = false, icon = null }) => (
//     <TouchableOpacity 
//       style={[styles.button, style]} 
//       onPress={onPress}
//       activeOpacity={0.8}
//     >
//       {gradient ? (
//         <LinearGradient
//           colors={['#667eea', '#764ba2']}
//           style={styles.gradientButton}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 1 }}
//         >
//           {icon && <Ionicons name={icon} size={24} color="white" style={styles.buttonIcon} />}
//           <Text style={styles.buttonText}>{title}</Text>
//         </LinearGradient>
//       ) : (
//         <View style={styles.secondaryButton}>
//           {icon && <Ionicons name={icon} size={24} color="#667eea" style={styles.buttonIcon} />}
//           <Text style={styles.secondaryButtonText}>{title}</Text>
//         </View>
//       )}
//     </TouchableOpacity>
//   );

//   const FeedbackCard = ({ data }) => (
//     <View style={styles.feedbackCard}>
//       <View style={styles.feedbackHeader}>
//         <Ionicons 
//           name="fitness" 
//           size={24} 
//           color="#667eea" 
//         />
//         <Text style={styles.feedbackTitle}>
//           {data.name} Analysis
//         </Text>
//       </View>
      
//       <View style={styles.metricsContainer}>
//         <View style={styles.metricItem}>
//           <Text style={styles.metricLabel}>Angle</Text>
//           <Text style={styles.metricValue}>{data.angle}°</Text>
//         </View>
//         <View style={styles.metricItem}>
//           <Text style={styles.metricLabel}>Reps</Text>
//           <Text style={styles.metricValue}>{data.reps}</Text>
//         </View>
//       </View>
      
//       <View style={styles.feedbackTextContainer}>
//         <Text style={styles.feedbackText}>{data.feedback}</Text>
//       </View>
//     </View>
//   );

//   const FullScreenVideo = () => (
//     <Modal
//       visible={fullScreen}
//       animationType="fade"
//       presentationStyle="fullScreen"
//       onRequestClose={() => setFullScreen(false)}
//     >
//       <View style={styles.fullScreenContainer}>
//         <StatusBar hidden />
//         <TouchableOpacity
//           style={styles.fullScreenCloseButton}
//           onPress={() => setFullScreen(false)}
//         >
//           <Ionicons name="close" size={30} color="white" />
//         </TouchableOpacity>
        
//         <Video
//           source={{ uri: feedbackVideoUrl }}
//           style={styles.fullScreenVideo}
//           useNativeControls
//           resizeMode="contain"
//           isLooping={false}
//           onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
//         />
//       </View>
//     </Modal>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      
//       <LinearGradient
//         colors={['#1a1a2e', '#16213e', '#0f3460']}
//         style={styles.gradientBackground}
//       >
//         <ScrollView 
//           style={styles.scrollView}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={styles.scrollContent}
//         >
//           {/* Header */}
//           <View style={styles.header}>
//             <Text style={styles.headerTitle}>Workout Analyzer</Text>
//             <Text style={styles.headerSubtitle}>AI-Powered Form Analysis</Text>
//           </View>

//           {/* Upload Section */}
//           <View style={styles.uploadSection}>
//             <View style={styles.uploadCard}>
//               <Ionicons name="cloud-upload" size={48} color="#667eea" />
//               <Text style={styles.uploadTitle}>Upload Your Workout Video</Text>
//               <Text style={styles.uploadSubtitle}>
//                 Get instant feedback on your form and technique
//               </Text>
              
//               <View style={styles.pickerContainer}>
//                 <Picker
//                   selectedValue={selectedExercise}
//                   onValueChange={(itemValue) => setSelectedExercise(itemValue)}
//                   style={styles.picker}
//                 >
//                   <Picker.Item label="Select Exercise" value="" />
//                   <Picker.Item label="Bicep Curl" value="bicep_curl" />
//                   <Picker.Item label="Squat" value="squat" />
//                   <Picker.Item label="Lateral Raise" value="lateral_raise" />
//                   <Picker.Item label="Shoulder Press" value="shoulder_press" />
//                   <Picker.Item label="Push Up" value="pushup" />
//                 </Picker>
//               </View>

//               <CustomButton
//                 title="Select Video"
//                 onPress={pickVideo}
//                 gradient={true}
//                 icon="videocam"
//                 style={styles.uploadButton}
//               />
              
//               {videoUri && (
//                 <CustomButton
//                   title="Analyze Workout"
//                   onPress={uploadVideo}
//                   gradient={true}
//                   icon="analytics"
//                   style={styles.processButton}
//                 />
//               )}
//             </View>
//           </View>

//           {/* Loading State */}
//           {uploading && (
//             <View style={styles.loadingContainer}>
//               <ActivityIndicator size="large" color="#667eea" />
//               <Text style={styles.loadingText}>Analyzing your workout...</Text>
//               <Text style={styles.loadingSubtext}>This may take a few moments</Text>
//             </View>
//           )}

//           {/* Error State */}
//           {error && (
//             <View style={styles.errorContainer}>
//               <Ionicons name="alert-circle" size={24} color="#ff6b6b" />
//               <Text style={styles.errorText}>{error}</Text>
//             </View>
//           )}

//           {/* Video Section */}
//           {feedbackVideoUrl && (
//             <Animated.View style={[styles.videoSection, { opacity: fadeAnim }]}>
//               <View style={styles.videoCard}>
//                 <View style={styles.videoHeader}>
//                   <Text style={styles.videoTitle}>Analysis Results</Text>
//                   <TouchableOpacity
//                     style={styles.fullScreenButton}
//                     onPress={() => setFullScreen(true)}
//                   >
//                     <Ionicons name="expand" size={24} color="#667eea" />
//                   </TouchableOpacity>
//                 </View>
                
//                 <View style={styles.videoContainer}>
//                   <Video
//                     ref={videoRef}
//                     source={{ uri: feedbackVideoUrl }}
//                     style={styles.video}
//                     useNativeControls
//                     resizeMode="contain"
//                     isLooping={false}
//                     onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
//                   />
//                 </View>
//               </View>
//             </Animated.View>
//           )}

//           {/* Feedback Data */}
//           {currentFeedback && (
//             <Animated.View style={[styles.feedbackSection, { opacity: fadeAnim }]}>
//               <Text style={styles.sectionTitle}>Real-time Feedback</Text>
//               <FeedbackCard data={currentFeedback} />
//             </Animated.View>
//           )}
//         </ScrollView>
//       </LinearGradient>

//       <FullScreenVideo />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1a1a2e',
//   },
//   gradientBackground: {
//     flex: 1,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   scrollContent: {
//     paddingBottom: 20,
//   },
//   header: {
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 30,
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center',
//   },
//   headerSubtitle: {
//     fontSize: 16,
//     color: '#a8a8a8',
//     textAlign: 'center',
//     marginTop: 8,
//   },
//   uploadSection: {
//     paddingHorizontal: 20,
//     marginBottom: 30,
//   },
//   uploadCard: {
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 20,
//     padding: 30,
//     alignItems: 'center',
//     backdropFilter: 'blur(10px)',
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   uploadTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//     marginTop: 16,
//     textAlign: 'center',
//   },
//   uploadSubtitle: {
//     fontSize: 16,
//     color: '#a8a8a8',
//     textAlign: 'center',
//     marginTop: 8,
//     marginBottom: 16,
//   },
//   pickerContainer: {
//     width: '100%',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 8,
//     marginBottom: 16,
//     borderWidth: 1,
//     borderColor: '#667eea',
//   },
//   picker: {
//     height: 50,
//     width: '100%',
//     color: 'white',
//   },
//   button: {
//     marginVertical: 4,
//     borderRadius: 8,
//     overflow: 'hidden',
//   },
//   gradientButton: {
//     flexDirection: 'row-',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 16,
//     paddingHorizontal: 32,
//   },
//   secondaryButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 16,
//     paddingHorizontal: 32,
//     backgroundColor: 'rgba(255,255,255,0.1)',
//     borderWidth: 1,
//     borderColor: '#667eea',
//   },
//   buttonIcon: {
//     marginRight: 8,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   secondaryButtonText: {
//     color: '#667eea',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   uploadButton: {
//     width: '100%',
//   },
//   processButton: {
//     width: '100%',
//   },
//   loadingContainer: {
//     alignItems: 'center',
//     paddingVertical: 40,
//   },
//   loadingText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 600,
//     marginTop: 16,
//   },
//   loadingSubtext: {
//     color: '#a8a8a8',
//     fontSize: 14,
//     marginTop: 4,
//   },
//   errorContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255,107,107,0.1)',
//     borderRadius: 12,
//     padding: 16,
//     marginHorizontal: 20,
//     marginBottom: 20,
//     borderWidth: 1,
//     borderColor: 'rgba(255,107,107,0.3)',
//   },
//   errorText: {
//     color: '#ff6b6b',
//     fontSize: 16,
//     marginLeft: 12,
//     flex: 1,
//   },
//   videoSection: {
//     paddingHorizontal: 20,
//     marginBottom: 30,
//   },
//   videoCard: {
//     backgroundColor: 'rgba(255,255,255,0.1)',
//     borderRadius: 20,
//     padding: 20,
//     borderWidth: 1,
//     borderColor: 'rgba(255,255,255,0.2)',
//   },
//   videoHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   videoTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   fullScreenButton: {
//     padding: 8,
//     borderRadius: 8,
//     backgroundColor: 'rgba(102,126,234,0.2)',
//   },
//   videoContainer: {
//     borderRadius: 15,
//     overflow: 'hidden',
//     backgroundColor: '#000000',
//   },
//   video: {
//     width: '100%',
//     height: 300,
//   },
//   feedbackSection: {
//     paddingHorizontal: 20,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   feedbackCard: {
//     backgroundColor: 'rgba(255,255,255,0.1)',
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 16,
//     borderWidth: 1,
//     borderColor: 'rgba(255,255,255,0.2)',
//   },
//   feedbackHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   feedbackTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//     marginLeft: 12,
//   },
//   metricsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 16,
//   },
//   metricItem: {
//     alignItems: 'center',
//     backgroundColor: 'rgba(102,126,234,0.2)',
//     borderRadius: 12,
//     padding: 16,
//     minWidth: 80,
//   },
//   metricLabel: {
//     fontSize: 14,
//     color: '#a8a8a8',
//     marginBottom: 4,
//   },
//   metricValue: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#667eea',
//   },
//   feedbackTextContainer: {
//     backgroundColor: 'rgba(0,0,0,0.2)',
//     borderRadius: 12,
//     padding: 16,
//   },
//   feedbackText: {
//     fontSize: 16,
//     color: 'white',
//     lineHeight: 24,
//   },
//   fullScreenContainer: {
//     flex: 1,
//     backgroundColor: 'black',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   fullScreenCloseButton: {
//     position: 'absolute',
//     top: 50,
//     right: 20,
//     zIndex: 1,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     borderRadius: 20,
//     padding: 10,
//   },
//   fullScreenVideo: {
//     width: width,
//     height: height,
//   }
// });




// import React, { useState, useRef } from 'react';
// import { 
//   View, 
//   Text, 
//   ActivityIndicator, 
//   StyleSheet, 
//   ScrollView, 
//   TouchableOpacity,
//   Dimensions,
//   StatusBar,
//   SafeAreaView,
//   Modal,
//   Animated
// } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { Video } from 'expo-av';
// import axios from 'axios';
// import { LinearGradient } from 'expo-linear-gradient';
// import { Ionicons } from '@expo/vector-icons';
// import { Picker } from '@react-native-picker/picker';

// const { width, height } = Dimensions.get('window');

// export default function WorkoutDetection() {
//   const [videoUri, setVideoUri] = useState(null);
//   const [feedbackVideoUrl, setFeedbackVideoUrl] = useState(null);
//   const [feedbackData, setFeedbackData] = useState([]);
//   const [currentFeedback, setCurrentFeedback] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [error, setError] = useState(null);
//   const [fullScreen, setFullScreen] = useState(false);
//   const [selectedExercise, setSelectedExercise] = useState('');
//   const videoRef = useRef(null);
//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   // Request permissions and pick video
//   const pickVideo = async () => {
//     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (status !== 'granted') {
//       setError('Permission to access media library denied');
//       console.log('Media library permission denied');
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Videos,
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setVideoUri(result.assets[0].uri);
//       setFeedbackVideoUrl(null);
//       setFeedbackData([]);
//       setCurrentFeedback(null);
//       setError(null);
//       console.log('Video selected:', result.assets[0].uri);
//     } else {
//       console.log('Video selection canceled');
//     }
//   };

//   // Upload video to Cloudinary and send to server with retry logic
//   const uploadVideo = async (retries = 3) => {
//     if (!videoUri) {
//       setError('No video selected');
//       console.log('Error: No video selected');
//       return;
//     }
//     if (!selectedExercise) {
//       setError('Please select an exercise');
//       console.log('Error: No exercise selected');
//       return;
//     }

//     setUploading(true);
//     setError(null);
//     console.log('Starting video upload process...');
//     console.log('Selected exercise:', selectedExercise);

//     try {
//       // Upload to Cloudinary
//       console.log('Uploading video to Cloudinary...');
//       const formData = new FormData();
//       formData.append('file', {
//         uri: videoUri,
//         type: 'video/mp4',
//         name: 'workout.mp4',
//       });
//       formData.append('upload_preset', 'workout_upload');
//       formData.append('folder', 'workout_videos');

//       const cloudinaryResponse = await axios.post(
//         'https://api.cloudinary.com/v1_1/dmwaesnu7/video/upload',
//         formData,
//         { headers: { 'Content-Type': 'multipart/form-data' } }
//       );
//       const videoUrl = cloudinaryResponse.data.secure_url;
//       console.log('Cloudinary upload successful. Video URL:', videoUrl);

//       // Send to server with retry logic
//       const API_URL = 'https://friend-workout-app.up.railway.app'; // Replace with your friend's Railway URL
//       console.log(`Sending request to backend: ${API_URL}/process-video`);

//       for (let attempt = 1; attempt <= retries; attempt++) {
//         try {
//           console.log(`Backend request attempt ${attempt} of ${retries}...`);
//           const serverResponse = await axios.post(`${API_URL}/process-video`, {
//             video_url: videoUrl,
//             exercise_type: selectedExercise
//           });
//           console.log('Backend response:', serverResponse.data);

//           setFeedbackVideoUrl(serverResponse.data.feedback_video_url);
//           setFeedbackData(serverResponse.data.feedback_data || []);
          
//           // Animate feedback appearance
//           Animated.timing(fadeAnim, {
//             toValue: 1,
//             duration: 800,
//             useNativeDriver: true,
//           }).start();
          
//           return; // Success, exit retry loop
//         } catch (backendErr) {
//           console.log(`Backend request attempt ${attempt} failed:`, {
//             status: backendErr.response?.status,
//             message: backendErr.response?.data?.error || backendErr.message,
//             headers: backendErr.response?.headers
//           });
//           if (attempt === retries) {
//             throw backendErr; // Final attempt failed, throw error
//           }
//           console.log(`Retrying in 2 seconds...`);
//           await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2s
//         }
//       }
//     } catch (err) {
//       const errorMessage = `Error uploading or processing video: ${err.response?.data?.error || err.message}`;
//       setError(errorMessage);
//       console.log('Error details:', {
//         message: errorMessage,
//         status: err.response?.status,
//         responseData: err.response?.data,
//         requestUrl: err.config?.url,
//         requestData: err.config?.data
//       });
//     } finally {
//       setUploading(false);
//       console.log('Upload process completed');
//     }
//   };

//   // Handle video playback status updates to sync feedback
//   const handlePlaybackStatusUpdate = (status) => {
//     if (status.isPlaying && status.positionMillis && feedbackData.length > 0) {
//       const currentTime = status.positionMillis / 1000;
//       const closestFeedback = feedbackData.reduce((prev, curr) => {
//         return Math.abs(curr.timestamp - currentTime) < Math.abs(prev?.timestamp - currentTime) ? curr : prev;
//       }, feedbackData[0]);
//       setCurrentFeedback(closestFeedback);
//     }
//   };

//   const CustomButton = ({ title, onPress, style, gradient = false, icon = null }) => (
//     <TouchableOpacity 
//       style={[styles.button, style]} 
//       onPress={onPress}
//       activeOpacity={0.8}
//     >
//       {gradient ? (
//         <LinearGradient
//           colors={['#667eea', '#764ba2']}
//           style={styles.gradientButton}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 1 }}
//         >
//           {icon && <Ionicons name={icon} size={24} color="white" style={styles.buttonIcon} />}
//           <Text style={styles.buttonText}>{title}</Text>
//         </LinearGradient>
//       ) : (
//         <View style={styles.secondaryButton}>
//           {icon && <Ionicons name={icon} size={24} color="#667eea" style={styles.buttonIcon} />}
//           <Text style={styles.secondaryButtonText}>{title}</Text>
//         </View>
//       )}
//     </TouchableOpacity>
//   );

//   const FeedbackCard = ({ data }) => (
//     <View style={styles.feedbackCard}>
//       <View style={styles.feedbackHeader}>
//         <Ionicons 
//           name="fitness" 
//           size={24} 
//           color="#667eea" 
//         />
//         <Text style={styles.feedbackTitle}>
//           {data.name} Analysis
//         </Text>
//       </View>
      
//       <View style={styles.metricsContainer}>
//         <View style={styles.metricItem}>
//           <Text style={styles.metricLabel}>Angle</Text>
//           <Text style={styles.metricValue}>{data.angle}°</Text>
//         </View>
//         <View style={styles.metricItem}>
//           <Text style={styles.metricLabel}>Reps</Text>
//           <Text style={styles.metricValue}>{data.reps}</Text>
//         </View>
//       </View>
      
//       <View style={styles.feedbackTextContainer}>
//         <Text style={styles.feedbackText}>{data.feedback}</Text>
//       </View>
//     </View>
//   );

//   const FullScreenVideo = () => (
//     <Modal
//       visible={fullScreen}
//       animationType="fade"
//       presentationStyle="fullScreen"
//       onRequestClose={() => setFullScreen(false)}
//     >
//       <View style={styles.fullScreenContainer}>
//         <StatusBar hidden />
//         <TouchableOpacity
//           style={styles.fullScreenCloseButton}
//           onPress={() => setFullScreen(false)}
//         >
//           <Ionicons name="close" size={30} color="white" />
//         </TouchableOpacity>
        
//         <Video
//           source={{ uri: feedbackVideoUrl }}
//           style={styles.fullScreenVideo}
//           useNativeControls
//           resizeMode="contain"
//           isLooping={false}
//           onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
//         />
//       </View>
//     </Modal>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      
//       <LinearGradient
//         colors={['#1a1a2e', '#16213e', '#0f3460']}
//         style={styles.gradientBackground}
//       >
//         <ScrollView 
//           style={styles.scrollView}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={styles.scrollContent}
//         >
//           {/* Header */}
//           <View style={styles.header}>
//             <Text style={styles.headerTitle}>Workout Analyzer</Text>
//             <Text style={styles.headerSubtitle}>AI-Powered Form Analysis</Text>
//           </View>

//           {/* Upload Section */}
//           <View style={styles.uploadSection}>
//             <View style={styles.uploadCard}>
//               <Ionicons name="cloud-upload" size={48} color="#667eea" />
//               <Text style={styles.uploadTitle}>Upload Your Workout Video</Text>
//               <Text style={styles.uploadSubtitle}>
//                 Get instant feedback on your form and technique
//               </Text>
              
//               <View style={styles.pickerContainer}>
//                 <Picker
//                   selectedValue={selectedExercise}
//                   onValueChange={(itemValue) => setSelectedExercise(itemValue)}
//                   style={styles.picker}
//                 >
//                   <Picker.Item label="Select Exercise" value="" />
//                   <Picker.Item label="Bicep Curl" value="bicep_curl" />
//                   <Picker.Item label="Squat" value="squat" />
//                   <Picker.Item label="Lateral Raise" value="lateral_raise" />
//                   <Picker.Item label="Shoulder Press" value="shoulder_press" />
//                   <Picker.Item label="Push Up" value="pushup" />
//                 </Picker>
//               </View>

//               <CustomButton
//                 title="Select Video"
//                 onPress={pickVideo}
//                 gradient={true}
//                 icon="videocam"
//                 style={styles.uploadButton}
//               />
              
//               {videoUri && (
//                 <CustomButton
//                   title="Analyze Workout"
//                   onPress={() => uploadVideo()}
//                   gradient={true}
//                   icon="analytics"
//                   style={styles.processButton}
//                 />
//               )}
//             </View>
//           </View>

//           {/* Loading State */}
//           {uploading && (
//             <View style={styles.loadingContainer}>
//               <ActivityIndicator size="large" color="#667eea" />
//               <Text style={styles.loadingText}>Analyzing your workout...</Text>
//               <Text style={styles.loadingSubtext}>This may take a few moments</Text>
//             </View>
//           )}

//           {/* Error State */}
//           {error && (
//             <View style={styles.errorContainer}>
//               <Ionicons name="alert-circle" size={24} color="#ff6b6b" />
//               <Text style={styles.errorText}>{error}</Text>
//             </View>
//           )}

//           {/* Video Section */}
//           {feedbackVideoUrl && (
//             <Animated.View style={[styles.videoSection, { opacity: fadeAnim }]}>
//               <View style={styles.videoCard}>
//                 <View style={styles.videoHeader}>
//                   <Text style={styles.videoTitle}>Analysis Results</Text>
//                   <TouchableOpacity
//                     style={styles.fullScreenButton}
//                     onPress={() => setFullScreen(true)}
//                   >
//                     <Ionicons name="expand" size={24} color="#667eea" />
//                   </TouchableOpacity>
//                 </View>
                
//                 <View style={styles.videoContainer}>
//                   <Video
//                     ref={videoRef}
//                     source={{ uri: feedbackVideoUrl }}
//                     style={styles.video}
//                     useNativeControls
//                     resizeMode="contain"
//                     isLooping={false}
//                     onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
//                   />
//                 </View>
//               </View>
//             </Animated.View>
//           )}

//           {/* Feedback Data */}
//           {currentFeedback && (
//             <Animated.View style={[styles.feedbackSection, { opacity: fadeAnim }]}>
//               <Text style={styles.sectionTitle}>Real-time Feedback</Text>
//               <FeedbackCard data={currentFeedback} />
//             </Animated.View>
//           )}
//         </ScrollView>
//       </LinearGradient>

//       <FullScreenVideo />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1a1a2e',
//   },
//   gradientBackground: {
//     flex: 1,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   scrollContent: {
//     paddingBottom: 20,
//   },
//   header: {
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 30,
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center',
//   },
//   headerSubtitle: {
//     fontSize: 16,
//     color: '#a8a8a8',
//     textAlign: 'center',
//     marginTop: 8,
//   },
//   uploadSection: {
//     paddingHorizontal: 20,
//     marginBottom: 30,
//   },
//   uploadCard: {
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 20,
//     padding: 30,
//     alignItems: 'center',
//     backdropFilter: 'blur(10px)',
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   uploadTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//     marginTop: 16,
//     textAlign: 'center',
//   },
//   uploadSubtitle: {
//     fontSize: 16,
//     color: '#a8a8a8',
//     textAlign: 'center',
//     marginTop: 8,
//     marginBottom: 16,
//   },
//   pickerContainer: {
//     width: '100%',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 8,
//     marginBottom: 16,
//     borderWidth: 1,
//     borderColor: '#667eea',
//   },
//   picker: {
//     height: 50,
//     width: '100%',
//     color: 'white',
//   },
//   button: {
//     marginVertical: 4,
//     borderRadius: 8,
//     overflow: 'hidden',
//   },
//   gradientButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 16,
//     paddingHorizontal: 32,
//   },
//   secondaryButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 16,
//     paddingHorizontal: 32,
//     backgroundColor: 'rgba(255,255,255,0.1)',
//     borderWidth: 1,
//     borderColor: '#667eea',
//   },
//   buttonIcon: {
//     marginRight: 8,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   secondaryButtonText: {
//     color: '#667eea',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   uploadButton: {
//     width: '100%',
//   },
//   processButton: {
//     width: '100%',
//   },
//   loadingContainer: {
//     alignItems: 'center',
//     paddingVertical: 40,
//   },
//   loadingText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 600,
//     marginTop: 16,
//   },
//   loadingSubtext: {
//     color: '#a8a8a8',
//     fontSize: 14,
//     marginTop: 4,
//   },
//   errorContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255,107,107,0.1)',
//     borderRadius: 12,
//     padding: 16,
//     marginHorizontal: 20,
//     marginBottom: 20,
//     borderWidth: 1,
//     borderColor: 'rgba(255,107,107,0.3)',
//   },
//   errorText: {
//     color: '#ff6b6b',
//     fontSize: 16,
//     marginLeft: 12,
//     flex: 1,
//   },
//   videoSection: {
//     paddingHorizontal: 20,
//     marginBottom: 30,
//   },
//   videoCard: {
//     backgroundColor: 'rgba(255,255,255,0.1)',
//     borderRadius: 20,
//     padding: 20,
//     borderWidth: 1,
//     borderColor: 'rgba(255,255,255,0.2)',
//   },
//   videoHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   videoTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   fullScreenButton: {
//     padding: 8,
//     borderRadius: 8,
//     backgroundColor: 'rgba(102,126,234,0.2)',
//   },
//   videoContainer: {
//     borderRadius: 15,
//     overflow: 'hidden',
//     backgroundColor: '#000000',
//   },
//   video: {
//     width: '100%',
//     height: 300,
//   },
//   feedbackSection: {
//     paddingHorizontal: 20,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   feedbackCard: {
//     backgroundColor: 'rgba(255,255,255,0.1)',
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 16,
//     borderWidth: 1,
//     borderColor: 'rgba(255,255,255,0.2)',
//   },
//   feedbackHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   feedbackTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//     marginLeft: 12,
//   },
//   metricsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 16,
//   },
//   metricItem: {
//     alignItems: 'center',
//     backgroundColor: 'rgba(102,126,234,0.2)',
//     borderRadius: 12,
//     padding: 16,
//     minWidth: 80,
//   },
//   metricLabel: {
//     fontSize: 14,
//     color: '#a8a8a8',
//     marginBottom: 4,
//   },
//   metricValue: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#667eea',
//   },
//   feedbackTextContainer: {
//     backgroundColor: 'rgba(0,0,0,0.2)',
//     borderRadius: 12,
//     padding: 16,
//   },
//   feedbackText: {
//     fontSize: 16,
//     color: 'white',
//     lineHeight: 24,
//   },
//   fullScreenContainer: {
//     flex: 1,
//     backgroundColor: 'black',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   fullScreenCloseButton: {
//     position: 'absolute',
//     top: 50,
//     right: 20,
//     zIndex: 1,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     borderRadius: 20,
//     padding: 10,
//   },
//   fullScreenVideo: {
//     width: width,
//     height: height,
//   }
// });








// import React, { useState, useRef } from 'react';
// import { 
//   View, 
//   Text, 
//   ActivityIndicator, 
//   StyleSheet, 
//   ScrollView, 
//   TouchableOpacity,
//   Dimensions,
//   StatusBar,
//   SafeAreaView,
//   Modal,
//   Animated
// } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { Video } from 'expo-av';
// import axios from 'axios';
// import { LinearGradient } from 'expo-linear-gradient';
// import { Ionicons } from '@expo/vector-icons';
// import { Picker } from '@react-native-picker/picker';

// const { width, height } = Dimensions.get('window');

// export default function WorkoutDetection() {
//   const [videoUri, setVideoUri] = useState(null);
//   const [feedbackVideoUrl, setFeedbackVideoUrl] = useState(null);
//   const [feedbackData, setFeedbackData] = useState([]);
//   const [currentFeedback, setCurrentFeedback] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [error, setError] = useState(null);
//   const [fullScreen, setFullScreen] = useState(false);
//   const [selectedExercise, setSelectedExercise] = useState('');
//   const videoRef = useRef(null);
//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   // Request permissions and pick video
//   const pickVideo = async () => {
//     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (status !== 'granted') {
//       setError('Permission to access media library denied');
//       console.log('Media library permission denied');
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Videos,
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setVideoUri(result.assets[0].uri);
//       setFeedbackVideoUrl(null);
//       setFeedbackData([]);
//       setCurrentFeedback(null);
//       setError(null);
//       console.log('Video selected:', result.assets[0].uri);
//     } else {
//       console.log('Video selection canceled');
//     }
//   };

//   // Upload video to Cloudinary and send to server
//   const uploadVideo = async (retries = 3) => {
//     if (!videoUri) {
//       setError('No video selected');
//       console.log('Error: No video selected');
//       return;
//     }
//     if (!selectedExercise) {
//       setError('Please select an exercise');
//       console.log('Error: No exercise selected');
//       return;
//     }

//     setUploading(true);
//     setError(null);
//     console.log('Starting video upload process...');
//     console.log('Selected exercise:', selectedExercise);

//     try {
//       // Upload to Cloudinary
//       console.log('Uploading video to Cloudinary...');
//       const formData = new FormData();
//       formData.append('file', {
//         uri: videoUri,
//         type: 'video/mp4',
//         name: 'workout.mp4',
//       });
//       formData.append('upload_preset', 'workout_upload');
//       formData.append('folder', 'workout_videos');

//       const cloudinaryResponse = await axios.post(
//         'https://api.cloudinary.com/v1_1/dmwaesnu7/video/upload',
//         formData,
//         { headers: { 'Content-Type': 'multipart/form-data' } }
//       );
//       const videoUrl = cloudinaryResponse.data.secure_url;
//       console.log('Cloudinary upload successful. Video URL:', videoUrl);

//       // Send to server with retry logic
//       const API_URL = 'https://workoutdetection-production.up.railway.app';
//       console.log(`Sending request to backend: ${API_URL}/process-video`);

//       for (let attempt = 1; attempt <= retries; attempt++) {
//         try {
//           console.log(`Backend request attempt ${attempt} of ${retries}...`);
//           const serverResponse = await axios.post(`${API_URL}/process-video`, {
//             video_url: videoUrl,
//             exercise_type: selectedExercise
//           });
//           console.log('Backend response:', serverResponse.data);

//           setFeedbackVideoUrl(serverResponse.data.feedback_video_url);
//           setFeedbackData(serverResponse.data.feedback_data || []);
          
//           Animated.timing(fadeAnim, {
//             toValue: 1,
//             duration: 800,
//             useNativeDriver: true,
//           }).start();
//           return;
//         } catch (backendErr) {
//           console.log(`Backend request attempt ${attempt} failed:`, {
//             status: backendErr.response?.status,
//             message: backendErr.response?.data?.error || backendErr.message,
//             headers: backendErr.response?.headers
//           });
//           if (attempt === retries) {
//             throw backendErr;
//           }
//           console.log(`Retrying in 2 seconds...`);
//           await new Promise(resolve => setTimeout(resolve, 2000));
//         }
//       }
//     } catch (err) {
//       const errorMessage = `Error uploading or processing video: ${err.response?.data?.error || err.message}`;
//       setError(errorMessage);
//       console.log('Error details:', {
//         message: errorMessage,
//         status: err.response?.status,
//         responseData: err.response?.data,
//         requestUrl: err.config?.url,
//         requestData: err.config?.data
//       });
//     } finally {
//       setUploading(false);
//       console.log('Upload process completed');
//     }
//   };

//   // Handle video playback status updates
//   const handlePlaybackStatusUpdate = (status) => {
//     if (status.isPlaying && status.positionMillis && feedbackData.length > 0) {
//       const currentTime = status.positionMillis / 1000;
//       const closestFeedback = feedbackData.reduce((prev, curr) => {
//         return Math.abs(curr.timestamp - currentTime) < Math.abs(prev?.timestamp - currentTime) ? curr : prev;
//       }, feedbackData[0]);
//       setCurrentFeedback(closestFeedback);
//     }
//   };

//   const CustomButton = ({ title, onPress, style, gradient = false, icon = null }) => (
//     <TouchableOpacity 
//       style={[styles.button, style]} 
//       onPress={onPress}
//       activeOpacity={0.8}
//     >
//       {gradient ? (
//         <LinearGradient
//           colors={['#667eea', '#764ba2']}
//           style={styles.gradientButton}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 1 }}
//         >
//           {icon && <Ionicons name={icon} size={24} color="white" style={styles.buttonIcon} />}
//           <Text style={styles.buttonText}>{title}</Text>
//         </LinearGradient>
//       ) : (
//         <View style={styles.secondaryButton}>
//           {icon && <Ionicons name={icon} size={24} color="#667eea" style={styles.buttonIcon} />}
//           <Text style={styles.secondaryButtonText}>{title}</Text>
//         </View>
//       )}
//     </TouchableOpacity>
//   );

//   const FeedbackCard = ({ data }) => (
//     <View style={styles.feedbackCard}>
//       <View style={styles.feedbackHeader}>
//         <Ionicons name="fitness" size={24} color="#667eea" />
//         <Text style={styles.feedbackTitle}>{data.name} Analysis</Text>
//       </View>
      
//       <View style={styles.metricsContainer}>
//         <View style={styles.metricItem}>
//           <Text style={styles.metricLabel}>Angle</Text>
//           <Text style={styles.metricValue}>{data.angle}°</Text>
//         </View>
//         <View style={styles.metricItem}>
//           <Text style={styles.metricLabel}>Reps</Text>
//           <Text style={styles.metricValue}>{data.reps}</Text>
//         </View>
//       </View>
      
//       <View style={styles.feedbackTextContainer}>
//         <Text style={styles.feedbackText}>{data.feedback}</Text>
//       </View>
//     </View>
//   );

//   const FullScreenVideo = () => (
//     <Modal
//       visible={fullScreen}
//       animationType="fade"
//       presentationStyle="fullScreen"
//       onRequestClose={() => setFullScreen(false)}
//     >
//       <View style={styles.fullScreenContainer}>
//         <StatusBar hidden />
//         <TouchableOpacity
//           style={styles.fullScreenCloseButton}
//           onPress={() => setFullScreen(false)}
//         >
//           <Ionicons name="close" size={30} color="white" />
//         </TouchableOpacity>
        
//         <Video
//           source={{ uri: feedbackVideoUrl }}
//           style={styles.fullScreenVideo}
//           useNativeControls
//           resizeMode="contain"
//           isLooping={false}
//           onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
//         />
//       </View>
//     </Modal>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      
//       <LinearGradient
//         colors={['#1a1a2e', '#16213e', '#0f3460']}
//         style={styles.gradientBackground}
//       >
//         <ScrollView 
//           style={styles.scrollView}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={styles.scrollContent}
//         >
//           <View style={styles.header}>
//             <Text style={styles.headerTitle}>Workout Analyzer</Text>
//             <Text style={styles.headerSubtitle}>AI-Powered Form Analysis</Text>
//           </View>

//           <View style={styles.uploadSection}>
//             <View style={styles.uploadCard}>
//               <Ionicons name="cloud-upload" size={48} color="#667eea" />
//               <Text style={styles.uploadTitle}>Upload Your Workout Video</Text>
//               <Text style={styles.uploadSubtitle}>
//                 Get instant feedback on your form and technique
//               </Text>
              
//               <View style={styles.pickerContainer}>
//                 <Picker
//                   selectedValue={selectedExercise}
//                   onValueChange={(itemValue) => setSelectedExercise(itemValue)}
//                   style={styles.picker}
//                 >
//                   <Picker.Item label="Select Exercise" value="" />
//                   <Picker.Item label="Bicep Curl" value="bicep_curl" />
//                   <Picker.Item label="Squat" value="squat" />
//                   <Picker.Item label="Lateral Raise" value="lateral_raise" />
//                   <Picker.Item label="Shoulder Press" value="shoulder_press" />
//                   <Picker.Item label="Push Up" value="pushup" />
//                 </Picker>
//               </View>

//               <CustomButton
//                 title="Select Video"
//                 onPress={pickVideo}
//                 gradient={true}
//                 icon="videocam"
//                 style={styles.uploadButton}
//               />
              
//               {videoUri && (
//                 <CustomButton
//                   title="Analyze Workout"
//                   onPress={() => uploadVideo()}
//                   gradient={true}
//                   icon="analytics"
//                   style={styles.processButton}
//                 />
//               )}
//             </View>
//           </View>

//           {uploading && (
//             <View style={styles.loadingContainer}>
//               <ActivityIndicator size="large" color="#667eea" />
//               <Text style={styles.loadingText}>Analyzing your workout...</Text>
//               <Text style={styles.loadingSubtext}>This may take a few moments</Text>
//             </View>
//           )}

//           {error && (
//             <View style={styles.errorContainer}>
//               <Ionicons name="alert-circle" size={24} color="#ff6b6b" />
//               <Text style={styles.errorText}>{error}</Text>
//             </View>
//           )}

//           {feedbackVideoUrl && (
//             <Animated.View style={[styles.videoSection, { opacity: fadeAnim }]}>
//               <View style={styles.videoCard}>
//                 <View style={styles.videoHeader}>
//                   <Text style={styles.videoTitle}>Analysis Results</Text>
//                   <TouchableOpacity
//                     style={styles.fullScreenButton}
//                     onPress={() => setFullScreen(true)}
//                   >
//                     <Ionicons name="expand" size={24} color="#667eea" />
//                   </TouchableOpacity>
//                 </View>
                
//                 <View style={styles.videoContainer}>
//                   <Video
//                     ref={videoRef}
//                     source={{ uri: feedbackVideoUrl }}
//                     style={styles.video}
//                     useNativeControls
//                     resizeMode="contain"
//                     isLooping={false}
//                     onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
//                   />
//                 </View>
//               </View>
//             </Animated.View>
//           )}

//           {currentFeedback && (
//             <Animated.View style={[styles.feedbackSection, { opacity: fadeAnim }]}>
//               <Text style={styles.sectionTitle}>Real-time Feedback</Text>
//               <FeedbackCard data={currentFeedback} />
//             </Animated.View>
//           )}
//         </ScrollView>
//       </LinearGradient>

//       <FullScreenVideo />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1a1a2e',
//   },
//   gradientBackground: {
//     flex: 1,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   scrollContent: {
//     paddingBottom: 20,
//   },
//   header: {
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 30,
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center',
//   },
//   headerSubtitle: {
//     fontSize: 16,
//     color: '#a8a8a8',
//     textAlign: 'center',
//     marginTop: 8,
//   },
//   uploadSection: {
//     paddingHorizontal: 20,
//     marginBottom: 30,
//   },
//   uploadCard: {
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 20,
//     padding: 30,
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   uploadTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//     marginTop: 16,
//     textAlign: 'center',
//   },
//   uploadSubtitle: {
//     fontSize: 16,
//     color: '#a8a8a8',
//     textAlign: 'center',
//     marginTop: 8,
//     marginBottom: 16,
//   },
//   pickerContainer: {
//     width: '100%',
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 8,
//     marginBottom: 16,
//     borderWidth: 1,
//     borderColor: '#667eea',
//   },
//   picker: {
//     height: 50,
//     width: '100%',
//     color: 'white',
//   },
//   button: {
//     marginVertical: 4,
//     borderRadius: 8,
//     overflow: 'hidden',
//   },
//   gradientButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 16,
//     paddingHorizontal: 32,
//   },
//   secondaryButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 16,
//     paddingHorizontal: 32,
//     backgroundColor: 'rgba(255,255,255,0.1)',
//     borderWidth: 1,
//     borderColor: '#667eea',
//   },
//   buttonIcon: {
//     marginRight: 8,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   secondaryButtonText: {
//     color: '#667eea',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   uploadButton: {
//     width: '100%',
//   },
//   processButton: {
//     width: '100%',
//   },
//   loadingContainer: {
//     alignItems: 'center',
//     paddingVertical: 40,
//   },
//   loadingText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 600,
//     marginTop: 16,
//   },
//   loadingSubtext: {
//     color: '#a8a8a8',
//     fontSize: 14,
//     marginTop: 4,
//   },
//   errorContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255,107,107,0.1)',
//     borderRadius: 12,
//     padding: 16,
//     marginHorizontal: 20,
//     marginBottom: 20,
//     borderWidth: 1,
//     borderColor: 'rgba(255,107,107,0.3)',
//   },
//   errorText: {
//     color: '#ff6b6b',
//     fontSize: 16,
//     marginLeft: 12,
//     flex: 1,
//   },
//   videoSection: {
//     paddingHorizontal: 20,
//     marginBottom: 30,
//   },
//   videoCard: {
//     backgroundColor: 'rgba(255,255,255,0.1)',
//     borderRadius: 20,
//     padding: 20,
//     borderWidth: 1,
//     borderColor: 'rgba(255,255,255,0.2)',
//   },
//   videoHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   videoTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   fullScreenButton: {
//     padding: 8,
//     borderRadius: 8,
//     backgroundColor: 'rgba(102,126,234,0.2)',
//   },
//   videoContainer: {
//     borderRadius: 15,
//     overflow: 'hidden',
//     backgroundColor: '#000000',
//   },
//   video: {
//     width: '100%',
//     height: 300,
//   },
//   feedbackSection: {
//     paddingHorizontal: 20,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   feedbackCard: {
//     backgroundColor: 'rgba(255,255,255,0.1)',
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 16,
//     borderWidth: 1,
//     borderColor: 'rgba(255,255,255,0.2)',
//   },
//   feedbackHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   feedbackTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//     marginLeft: 12,
//   },
//   metricsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 16,
//   },
//   metricItem: {
//     alignItems: 'center',
//     backgroundColor: 'rgba(102,126,234,0.2)',
//     borderRadius: 12,
//     padding: 16,
//     minWidth: 80,
//   },
//   metricLabel: {
//     fontSize: 14,
//     color: '#a8a8a8',
//     marginBottom: 4,
//   },
//   metricValue: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#667eea',
//   },
//   feedbackTextContainer: {
//     backgroundColor: 'rgba(0,0,0,0.2)',
//     borderRadius: 12,
//     padding: 16,
//   },
//   feedbackText: {
//     fontSize: 16,
//     color: 'white',
//     lineHeight: 24,
//   },
//   fullScreenContainer: {
//     flex: 1,
//     backgroundColor: 'black',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   fullScreenCloseButton: {
//     position: 'absolute',
//     top: 50,
//     right: 20,
//     zIndex: 1,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     borderRadius: 20,
//     padding: 10,
//   },
//   fullScreenVideo: {
//     width: width,
//     height: height,
//   }
// });





import React, { useState, useRef } from 'react';
import { 
  View, 
  Text, 
  ActivityIndicator, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Dimensions,
  StatusBar,
  SafeAreaView,
  Modal,
  Animated
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { Video } from 'expo-av';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const { width, height } = Dimensions.get('window');

export default function WorkoutDetection() {
  const navigation = useNavigation();
  const [videoUri, setVideoUri] = useState(null);
  const [feedbackVideoUrl, setFeedbackVideoUrl] = useState(null);
  const [feedbackData, setFeedbackData] = useState([]);
  const [currentFeedback, setCurrentFeedback] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [fullScreen, setFullScreen] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState('');
  const videoRef = useRef(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Request permissions and pick video
  const pickVideo = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      setError('Permission to access media library denied');
      console.log('Media library permission denied');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setVideoUri(result.assets[0].uri);
      setFeedbackVideoUrl(null);
      setFeedbackData([]);
      setCurrentFeedback(null);
      setError(null);
      console.log('Video selected:', result.assets[0].uri);
    } else {
      console.log('Video selection canceled');
    }
  };

  // Upload video to Cloudinary and send to server
  const uploadVideo = async (retries = 3) => {
    if (!videoUri) {
      setError('No video selected');
      console.log('Error: No video selected');
      return;
    }
    if (!selectedExercise) {
      setError('Please select an exercise');
      console.log('Error: No exercise selected');
      return;
    }

    setUploading(true);
    setError(null);
    console.log('Starting video upload process...');
    console.log('Selected exercise:', selectedExercise);

    try {
      // Upload to Cloudinary
      console.log('Uploading video to Cloudinary...');
      const formData = new FormData();
      formData.append('file', {
        uri: videoUri,
        type: 'video/mp4',
        name: 'workout.mp4',
      });
      formData.append('upload_preset', 'workout_upload');
      formData.append('folder', 'workout_videos');

      const cloudinaryResponse = await axios.post(
        'https://api.cloudinary.com/v1_1/dmwaesnu7/video/upload',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      const videoUrl = cloudinaryResponse.data.secure_url;
      console.log('Cloudinary upload successful. Video URL:', videoUrl);

      // Send to server with retry logic
      const API_URL = 'https://workoutdetection-production.up.railway.app';
      console.log(`Sending request to backend: ${API_URL}/process-video`);

      for (let attempt = 1; attempt <= retries; attempt++) {
        try {
          console.log(`Backend request attempt ${attempt} of ${retries}...`);
          const serverResponse = await axios.post(`${API_URL}/process-video`, {
            video_url: videoUrl,
            exercise_type: selectedExercise
          });
          console.log('Backend response:', serverResponse.data);

          setFeedbackVideoUrl(serverResponse.data.feedback_video_url);
          setFeedbackData(serverResponse.data.feedback_data || []);
          // Set currentFeedback to the last object in feedbackData
          if (serverResponse.data.feedback_data && serverResponse.data.feedback_data.length > 0) {
            setCurrentFeedback(serverResponse.data.feedback_data[serverResponse.data.feedback_data.length - 1]);
          }
          
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
          }).start();
          return;
        } catch (backendErr) {
          console.log(`Backend request attempt ${attempt} failed:`, {
            status: backendErr.response?.status,
            message: backendErr.response?.data?.error || backendErr.message,
            headers: backendErr.response?.headers
          });
          if (attempt === retries) {
            throw backendErr;
          }
          console.log(`Retrying in 2 seconds...`);
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      }
    } catch (err) {
      const errorMessage = `Error uploading or processing video: ${err.response?.data?.error || err.message}`;
      setError(errorMessage);
      console.log('Error details:', {
        message: errorMessage,
        status: err.response?.status,
        responseData: err.response?.data,
        requestUrl: err.config?.url,
        requestData: err.config?.data
      });
    } finally {
      setUploading(false);
      console.log('Upload process completed');
    }
  };

  // Remove time-based feedback updates
  const handlePlaybackStatusUpdate = (status) => {
    // No longer updating currentFeedback based on video timestamp
  };

  const CustomButton = ({ title, onPress, style, gradient = false, icon = null }) => (
    <TouchableOpacity 
      style={[styles.button, style]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      {gradient ? (
        <LinearGradient
          colors={['#667eea', '#764ba2']}
          style={styles.gradientButton}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          {icon && <Ionicons name={icon} size={24} color="white" style={styles.buttonIcon} />}
          <Text style={styles.buttonText}>{title}</Text>
        </LinearGradient>
      ) : (
        <View style={styles.secondaryButton}>
          {icon && <Ionicons name={icon} size={24} color="#667eea" style={styles.buttonIcon} />}
          <Text style={styles.secondaryButtonText}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  const FeedbackCard = ({ data }) => (
    <View style={styles.feedbackCard}>
      <View style={styles.feedbackHeader}>
        <Ionicons name="fitness" size={24} color="#667eea" />
        <Text style={styles.feedbackTitle}>{data.name} Analysis</Text>
      </View>
      
      <View style={styles.metricsContainer}>
        <View style={styles.metricItem}>
          <Text style={styles.metricLabel}>Angle</Text>
          <Text style={styles.metricValue}>{data.angle}°</Text>
        </View>
        <View style={styles.metricItem}>
          <Text style={styles.metricLabel}>Reps</Text>
          <Text style={styles.metricValue}>{data.reps}</Text>
        </View>
      </View>
      
      <View style={styles.feedbackTextContainer}>
        <Text style={styles.feedbackText}>{data.feedback}</Text>
      </View>
    </View>
  );

  const FullScreenVideo = () => (
    <Modal
      visible={fullScreen}
      animationType="fade"
      presentationStyle="fullScreen"
      onRequestClose={() => setFullScreen(false)}
    >
      <View style={styles.fullScreenContainer}>
        <StatusBar hidden />
        <TouchableOpacity
          style={styles.fullScreenCloseButton}
          onPress={() => setFullScreen(false)}
        >
          <Ionicons name="close" size={30} color="white" />
        </TouchableOpacity>
        
        <Video
          source={{ uri: feedbackVideoUrl }}
          style={styles.fullScreenVideo}
          useNativeControls
          resizeMode="contain"
          isLooping={false}
          onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
        />
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      
      <LinearGradient
        colors={['#1a1a2e', '#16213e', '#0f3460']}
        style={styles.gradientBackground}
      >
        <ScrollView 
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={28} color="white" />
            </TouchableOpacity>
            <View style={styles.headerText}>
              <Text style={styles.headerTitle}>Workout Analyzer</Text>
              <Text style={styles.headerSubtitle}>AI-Powered Form Analysis</Text>
            </View>
          </View>

          <View style={styles.uploadSection}>
            <View style={styles.uploadCard}>
              <Ionicons name="cloud-upload" size={48} color="#667eea" />
              <Text style={styles.uploadTitle}>Upload Your Workout Video</Text>
              <Text style={styles.uploadSubtitle}>
                Get instant feedback on your form and technique
              </Text>
              
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={selectedExercise}
                  onValueChange={(itemValue) => setSelectedExercise(itemValue)}
                  style={styles.picker}
                  itemStyle={styles.pickerItem}
                >
                  <Picker.Item label="Select Exercise" value="" />
                  <Picker.Item label="Bicep Curl" value="bicep_curl" />
                  <Picker.Item label="Squat" value="squat" />
                  <Picker.Item label="Lateral Raise" value="lateral_raise" />
                  <Picker.Item label="Shoulder Press" value="shoulder_press" />
                  <Picker.Item label="Push Up" value="pushup" />
                </Picker>
              </View>

              <CustomButton
                title="Select Video"
                onPress={pickVideo}
                gradient={true}
                icon="videocam"
                style={styles.uploadButton}
              />
              
              {videoUri && (
                <CustomButton
                  title="Analyze Workout"
                  onPress={() => uploadVideo()}
                  gradient={true}
                  icon="analytics"
                  style={styles.processButton}
                />
              )}
            </View>
          </View>

          {uploading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#667eea" />
              <Text style={styles.loadingText}>Analyzing your workout...</Text>
              <Text style={styles.loadingSubtext}>This may take a few moments</Text>
            </View>
          )}

          {error && (
            <View style={styles.errorContainer}>
              <Ionicons name="alert-circle" size={24} color="#ff6b6b" />
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}

          {feedbackVideoUrl && (
            <Animated.View style={[styles.videoSection, { opacity: fadeAnim }]}>
              <View style={styles.videoCard}>
                <View style={styles.videoHeader}>
                  <Text style={styles.videoTitle}>Analysis Results</Text>
                  <TouchableOpacity
                    style={styles.fullScreenButton}
                    onPress={() => setFullScreen(true)}
                  >
                    <Ionicons name="expand" size={24} color="#667eea" />
                  </TouchableOpacity>
                </View>
                
                <View style={styles.videoContainer}>
                  <Video
                    ref={videoRef}
                    source={{ uri: feedbackVideoUrl }}
                    style={styles.video}
                    useNativeControls
                    resizeMode="contain"
                    isLooping={false}
                    onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
                  />
                </View>
              </View>
            </Animated.View>
          )}

          {currentFeedback && (
            <Animated.View style={[styles.feedbackSection, { opacity: fadeAnim }]}>
              <Text style={styles.sectionTitle}>Latest Feedback</Text>
              <FeedbackCard data={currentFeedback} />
            </Animated.View>
          )}
        </ScrollView>
      </LinearGradient>

      <FullScreenVideo />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  gradientBackground: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  backButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  headerText: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#a8a8a8',
    textAlign: 'center',
    marginTop: 8,
  },
  uploadSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  uploadCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  uploadTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 16,
    textAlign: 'center',
  },
  uploadSubtitle: {
    fontSize: 16,
    color: '#a8a8a8',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  pickerContainer: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#667eea',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  picker: {
    height: 55,
    width: '100%',
    color: 'white',
  },
  pickerItem: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
  },
  button: {
    marginVertical: 4,
    borderRadius: 8,
    overflow: 'hidden',
  },
  gradientButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    borderColor: '#667eea',
  },
  buttonIcon: {
    marginRight: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: '#667eea',
    fontSize: 18,
    fontWeight: '600',
  },
  uploadButton: {
    width: '100%',
  },
  processButton: {
    width: '100%',
  },
  loadingContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  loadingText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
  },
  loadingSubtext: {
    color: '#a8a8a8',
    fontSize: 14,
    marginTop: 4,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,107,107,0.1)',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,107,107,0.3)',
  },
  errorText: {
    color: '#ff6b6b',
    fontSize: 16,
    marginLeft: 12,
    flex: 1,
  },
  videoSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  videoCard: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  videoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  videoTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  fullScreenButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'rgba(102,126,234,0.2)',
  },
  videoContainer: {
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#000000',
  },
  video: {
    width: '100%',
    height: 300,
  },
  feedbackSection: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  feedbackCard: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  feedbackHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  feedbackTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 12,
  },
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  metricItem: {
    alignItems: 'center',
    backgroundColor: 'rgba(102,126,234,0.2)',
    borderRadius: 12,
    padding: 16,
    minWidth: 80,
  },
  metricLabel: {
    fontSize: 14,
    color: '#a8a8a8',
    marginBottom: 4,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#667eea',
  },
  feedbackTextContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 12,
    padding: 16,
  },
  feedbackText: {
    fontSize: 16,
    color: 'white',
    lineHeight: 24,
  },
  fullScreenContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenCloseButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 10,
  },
  fullScreenVideo: {
    width: width,
    height: height,
  }
});