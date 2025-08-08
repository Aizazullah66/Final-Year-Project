// import React from 'react';
// import { View, Text, ScrollView, StyleSheet } from 'react-native';
// import { Image } from 'expo-image';

// const WorkoutDetail = ({ route }) => {
//   const { gifUrl, name, target, description } = route.params;

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>{name}</Text>
//       </View>
//       <ScrollView contentContainerStyle={styles.content}>
//         <Image source={{ uri: gifUrl }} style={styles.image} contentFit="cover" />
//         <View style={styles.details}>
//           <Text style={styles.label}>Target Area:</Text>
//           <Text style={styles.value}>{target}</Text>
//           <Text style={styles.label}>Instructions:</Text>
//           <Text style={styles.value}>{description}</Text>
//         </View>
//       </ScrollView>
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
//   title: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#333333',
//     textAlign: 'center',
//     textShadowColor: 'rgba(0, 0, 0, 0.1)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   content: {
//     paddingHorizontal: 20,
//     paddingBottom: 20,
//   },
//   image: {
//     width: '100%',
//     height: 400, // Larger image for detail view
//     borderRadius: 15,
//     marginBottom: 20,
//   },
//   details: {
//     marginBottom: 20,
//   },
//   label: {    
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#A84CF2',
//     marginBottom: 5,
//   },
//   value: {
//     fontSize: 16,
//     fontWeight: '400',
//     color: '#666666',
//     marginBottom: 15,
//     lineHeight: 22,
//   },
// });

// export default WorkoutDetail;


import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

const WorkoutDetail = ({ route }) => {
  const { gifUrl, name, target, description } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{name}</Text>
        </View>
        <Image source={{ uri: gifUrl }} style={styles.image} contentFit="cover" />
        <View style={styles.details}>
          <Text style={styles.label}>Target Area:</Text>
          <Text style={styles.value}>{target}</Text>
          <Text style={styles.label}>Instructions:</Text>
          <Text style={styles.value}>{description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8', // Soft blue-gray background
  },
  content: {
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2D3748',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  details: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4A90E2',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    fontWeight: '400',
    color: '#2D3748',
    marginBottom: 15,
    lineHeight: 22,
  },
});

export default WorkoutDetail;