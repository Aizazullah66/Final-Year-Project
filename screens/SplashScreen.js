// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet, Animated } from 'react-native';

// export default function SplashScreen({ navigation }) {
//   const opacity = new Animated.Value(0);

//   useEffect(() => {
//     Animated.timing(opacity, {
//       toValue: 1,
//       duration: 2000,
//       useNativeDriver: true,
//     }).start(() => navigation.replace('Login'));
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Animated.Text style={[styles.title, { opacity }]}>Forever Fitness</Animated.Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f4f4f4',
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#ff5722',
//   },
// });


// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet, Image, Animated } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// export default function SplashScreen({ navigation }) {
//   const translateX = new Animated.Value(-200); // Start the shoe off-screen to the left

//   useEffect(() => {
//     // Animate the running shoe from left to right over 5000ms
//     Animated.timing(translateX, {
//       toValue: 200, // Move to off-screen to the right (adjust based on screen width)
//       duration: 5000, // Display for 5 seconds
//       useNativeDriver: true, // Improves performance
//     }).start(() => navigation.replace('Login')); // Navigate after animation completes

//     // Cleanup (not strictly necessary here, but good practice)
//     return () => {};
//   }, [navigation]);

//   return (
//     <LinearGradient 
//       colors={['#1A1A2E', '#16213E']} // Matching the app's dark blue/purple gradient
//       style={styles.container}
//     >
//       {/* Static Title in the Middle */}
//       <Text style={styles.title}>
//         <Text style={styles.foreverText}>Forever </Text>
//         <Text style={styles.fitnessText}>Fitness</Text>
//       </Text>

//       {/* Animated Running Shoe */}
//       <Animated.View style={[styles.shoeContainer, { transform: [{ translateX }] }]}>
//         <Image 
//           source={require('../assets/running.png')} // Replace with your running shoe image path
//           style={styles.shoeImage}
//         />
//       </Animated.View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'transparent', // Transparent to let the gradient show
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     textShadowColor: 'rgba(0, 0, 0, 0.5)', // Add shadow for better readability
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 4,
//     zIndex: 1, // Ensure title stays above the shoe if overlapping
//   },
//   foreverText: {
//     color: '#FFFFFF', // White for "Forever"
//   },
//   fitnessText: {
//     color: '#FF5E9B', // Pink for "Fitness", matching sign-up/login buttons
//   },
//   shoeContainer: {
//     position: 'absolute',
//     top: 150, // Position the shoe below the title (adjust based on screen size)
//     zIndex: 0, // Ensure shoe stays behind the title if overlapping
//   },
//   shoeImage: {
//     width: 150, // Small size for the running shoe
//     height: 150, // Small size for the running shoe
//     resizeMode: 'contain', // Ensures the image fits without cropping or stretching
//   },
// });



// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet, Image, Animated } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// export default function SplashScreen({ navigation }) {
//   const scale = new Animated.Value(1); // For circular container breathing effect
//   const rotate = new Animated.Value(0); // For dumbbell rotation

//   useEffect(() => {
//     // Breathing animation for the circular container (contract/expand)
//     Animated.loop(
//       Animated.sequence([
//         Animated.timing(scale, {
//           toValue: 0.9, // Contract slightly
//           duration: 1000, // 1 second to contract
//           useNativeDriver: true,
//         }),
//         Animated.timing(scale, {
//           toValue: 1.1, // Expand slightly
//           duration: 1000, // 1 second to expand
//           useNativeDriver: true,
//         }),
//         Animated.timing(scale, {
//           toValue: 1, // Return to normal
//           duration: 1000, // 1 second to return
//           useNativeDriver: true,
//         }),
//       ])
//     ).start();

//     // Rotation animation for the dumbbell (continuous rotation)
//     Animated.loop(
//       Animated.timing(rotate, {
//         toValue: 1,
//         duration: 2000, // One full rotation every 2 seconds
//         useNativeDriver: true,
//       })
//     ).start();

//     // Navigate to Login after 5000ms (5 seconds)
//     const timer = setTimeout(() => {
//       navigation.replace('Login');
//     }, 5000);

//     // Cleanup animations and timer on unmount
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [navigation]);

//   // Interpolate rotation value for dumbbell (0 to 1) to degrees (0 to 360)
//   const rotateInterpolate = rotate.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });

//   return (
//     <LinearGradient 
//       colors={['#1A1A2E', '#16213E']} // Matching the app's dark blue/purple gradient
//       style={styles.container}
//     >
//       {/* Animated Circular Container with Rotating Dumbbell */}
//       <View style={styles.animationContainer}>
//         <Animated.View style={[styles.circularContainer, { transform: [{ scale }] }]}>
//           <Animated.Image 
//             source={require('../assets/dumbell.png')} // Replace with your dumbbell image path
//             style={[styles.dumbbell, { transform: [{ rotate: rotateInterpolate }] }]}
//           />
//         </Animated.View>
//       </View>

//       {/* Static Title Below the Animation */}
//       <Text style={styles.title}>
//         <Text style={styles.foreverText}>Forever </Text>
//         <Text style={styles.fitnessText}>Fitness</Text>
//       </Text>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'transparent', // Transparent to let the gradient show
//   },
//   animationContainer: {
//     marginBottom: 50, // Space between the animation and title
//   },
//   circularContainer: {
//     width: 120, // Size of the circular container
//     height: 120, // Size of the circular container
//     borderRadius: 60, // Half of width/height for a perfect circle
//     backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white for contrast
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 5, // For Android shadow
//   },
//   dumbbell: {
//     width: 80, // Smaller size for the dumbbell inside the circle
//     height: 80, // Smaller size for the dumbbell inside the circle
//     resizeMode: 'contain', // Ensures the image fits without cropping or stretching
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     textShadowColor: 'rgba(0, 0, 0, 0.5)', // Add shadow for better readability
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 4,
//   },
//   foreverText: {
//     color: '#FFFFFF', // White for "Forever"
//   },
//   fitnessText: {
//     color: '#FF5E9B', // Pink for "Fitness", matching sign-up/login buttons
//   },
// });


import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SplashScreen({ navigation }) {
  // Animation values for ripples
  const ripple1Scale = new Animated.Value(1);
  const ripple1Opacity = new Animated.Value(1);
  const ripple2Scale = new Animated.Value(1);
  const ripple2Opacity = new Animated.Value(1);
  const ripple3Scale = new Animated.Value(1);
  const ripple3Opacity = new Animated.Value(1);

  // Animation value for dumbbell rotation
  const rotate = new Animated.Value(0);

  // Animation value for title fade-in
  const titleOpacity = new Animated.Value(0);

  useEffect(() => {
    // Function to animate a single ripple
    const animateRipple = (scale, opacity) => {
      scale.setValue(1); // Start at original size
      opacity.setValue(1); // Start fully opaque
      Animated.parallel([
        Animated.timing(scale, {
          toValue: 2, // Scale up to twice the size
          duration: 1500, // 1.5 seconds
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0, // Fade out completely
          duration: 1500,
          useNativeDriver: true,
        }),
      ]).start(() => animateRipple(scale, opacity)); // Loop back
    };

    // Start ripples with staggered timing
    animateRipple(ripple1Scale, ripple1Opacity);
    setTimeout(() => animateRipple(ripple2Scale, ripple2Opacity), 500); // 0.5s delay
    setTimeout(() => animateRipple(ripple3Scale, ripple3Opacity), 1000); // 1s delay

    // Continuous dumbbell rotation
    Animated.loop(
      Animated.timing(rotate, {
        toValue: 1, // One full rotation
        duration: 2000, // 2 seconds per rotation
        useNativeDriver: true,
      })
    ).start();

    // Title fade-in after 1 second
    setTimeout(() => {
      Animated.timing(titleOpacity, {
        toValue: 1, // Fully opaque
        duration: 1000, // 1-second fade
        useNativeDriver: true,
      }).start();
    }, 1000);

    // Navigate to Login screen after 5 seconds
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 5000);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, [navigation]);

  // Interpolate rotation for dumbbell (0 to 360 degrees)
  const rotateInterpolate = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <LinearGradient
      colors={['#1E2A44', '#2A3B5E']} // Dark blue to purple gradient
      style={styles.container}
    >
      {/* Animation Container with Ripples and Dumbbell */}
      <View style={styles.animationContainer}>
        <Animated.View
          style={[
            styles.ripple,
            { transform: [{ scale: ripple1Scale }], opacity: ripple1Opacity },
          ]}
        />
        <Animated.View
          style={[
            styles.ripple,
            { transform: [{ scale: ripple2Scale }], opacity: ripple2Opacity },
          ]}
        />
        <Animated.View
          style={[
            styles.ripple,
            { transform: [{ scale: ripple3Scale }], opacity: ripple3Opacity },
          ]}
        />
        <View style={styles.circularContainer}>
          <Animated.Image
            source={require('../assets/dumbell.png')} // Ensure this path is correct
            style={[styles.dumbbell, { transform: [{ rotate: rotateInterpolate }] }]}
          />
        </View>
      </View>

      {/* Animated Title */}
      <Animated.View style={{ opacity: titleOpacity }}>
        <Text style={styles.title}>
          <Text style={styles.foreverText}>Forever </Text>
          <Text style={styles.fitnessText}>Fitness</Text>
        </Text>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationContainer: {
    position: 'relative',
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30, // Space between animation and title
  },
  ripple: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white
    backgroundColor: 'transparent',
  },
  circularContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Subtle contrast
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, // Ensure it’s above ripples
  },
  dumbbell: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow for readability
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  foreverText: {
    color: '#FFFFFF', // White for "Forever"
  },
  fitnessText: {
    color: '#FF6F61', // Vibrant coral for "Fitness"
  },
});