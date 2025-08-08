// // import React from 'react';
// // import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// // export default function AdminDashboardScreen({ navigation }) {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Admin Dashboard</Text>
      
// //       <TouchableOpacity
// //         style={styles.button}
// //         onPress={() => navigation.navigate('ManageProducts')}
// //       >
// //         <Text style={styles.buttonText}>Manage Products</Text>
// //       </TouchableOpacity>

// //       <TouchableOpacity
// //         style={styles.button}
// //         onPress={() => navigation.navigate('ManageVideos')}
// //       >
// //         <Text style={styles.buttonText}>Manage Videos</Text>
// //       </TouchableOpacity>

// //       <TouchableOpacity
// //         style={styles.button}
// //         onPress={() => navigation.navigate('ManageOrderList')}
// //       >
// //         <Text style={styles.buttonText}>Manage Order List</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#f5f5f5',
// //     padding: 20,
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 30,
// //   },
// //   button: {
// //     backgroundColor: '#007BFF',
// //     padding: 15,
// //     borderRadius: 10,
// //     width: '80%',
// //     alignItems: 'center',
// //     marginBottom: 20,
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //     fontWeight: '600',
// //   },
// // });



// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { Image } from 'expo-image';

// export default function AdminDashboard({ navigation }) {
//   return (
//     <LinearGradient colors={['#1A1A2E', '#16213E']} style={styles.container}>
//       <Text style={styles.title}>Admin Dashboard</Text>

//       <View style={styles.row}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('ManageProducts')}
//         >
//           <Image
//             source={require('../assets/box.png')} // Add your image path
//             style={styles.imagePlaceholder}
//           />
//           <Text style={styles.buttonText}>Manage Products</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('ManageVideos')}
//         >
//           <Image
//             source={require('../assets/creative.png')} // Add your image path
//             style={styles.imagePlaceholder}
//           />
//           <Text style={styles.buttonText}>Manage Videos</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.row}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('ManageOrderList')}
//         >
//           <Image
//             source={require('../assets/project-management.png')} // Add your image path
//             style={styles.imagePlaceholder}
//           />
//           <Text style={styles.buttonText}>Manage Orders</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.button}
//           // onPress={() => navigation.navigate('UserList')}
//         >
//           <Image
//             source={require('../assets/user.png')} // Add your image path
//             style={styles.imagePlaceholder}
//           />
//           <Text style={styles.buttonText}>Manage Users</Text>
//         </TouchableOpacity>
//       </View>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//     width: '100%',
//   },
//   button: {
//     flex: 1,
//     marginHorizontal: 10,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     paddingVertical: 20,
//     borderRadius: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   imagePlaceholder: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 16,
//     marginTop: 10,
//   },
// });



// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { Image } from 'expo-image';

// export default function AdminDashboard({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Admin Dashboard</Text>

//       <View style={styles.row}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('ManageProducts')}
//         >
//           <Image
//             source={require('../assets/box.png')} // Add your image path
//             style={styles.image}
//           />
//           <Text style={styles.buttonText}>Manage Products</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('ManageVideos')}
//         >
//           <Image
//             source={require('../assets/creative.png')} // Add your image path
//             style={styles.image}
//           />
//           <Text style={styles.buttonText}>Manage Videos</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.row}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('ManageOrderList')}
//         >
//           <Image
//             source={require('../assets/project-management.png')} // Add your image path
//             style={styles.image}
//           />
//           <Text style={styles.buttonText}>Manage Orders</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.button}
//           // onPress={() => navigation.navigate('UserList')}
//         >
//           <Image
//             source={require('../assets/user.png')} // Add your image path
//             style={styles.image}
//           />
//           <Text style={styles.buttonText}>Manage Users</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F0F4F8', // Soft blue-gray background
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#2D3748',
//     marginBottom: 30,
//     textAlign: 'center',
//     textShadowColor: 'rgba(0, 0, 0, 0.1)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//     width: '100%',
//   },
//   button: {
//     flex: 1,
//     marginHorizontal: 10,
//     backgroundColor: '#FFFFFF',
//     paddingVertical: 20,
//     borderRadius: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//   },
//   image: {
//     width: 40,
//     height: 40,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: '#2D3748',
//     fontWeight: '600',
//     fontSize: 16,
//   },
// });


// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { Image } from 'expo-image';
// import { LinearGradient } from 'expo-linear-gradient';

// export default function AdminDashboard({ navigation }) {
//   return (
//     <View style={styles.container}>
//       {/* Header Design */}
//       <View style={styles.headerContainer}>
//         <LinearGradient
//           colors={['#4A90E2', '#7AB8F5']}
//           style={styles.headerGradient}
//         >
//           <View style={styles.wave} />
//         </LinearGradient>
//       </View>

//       {/* Title */}
//       <Text style={styles.title}>Admin Dashboard</Text>

//       {/* Buttons */}
//       <View style={styles.row}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('ManageProducts')}
//         >
//           <Image
//             source={require('../assets/box.png')} // Ensure path is correct
//             style={styles.image}
//           />
//           <Text style={styles.buttonText}>Manage Products</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('ManageVideos')}
//         >
//           <Image
//             source={require('../assets/creative.png')} // Ensure path is correct
//             style={styles.image}
//           />
//           <Text style={styles.buttonText}>Manage Videos</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.row}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate('ManageOrderList')}
//         >
//           <Image
//             source={require('../assets/project-management.png')} // Ensure path is correct
//             style={styles.image}
//           />
//           <Text style={styles.buttonText}>Manage Orders</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.button}
//           // onPress={() => navigation.navigate('UserList')} // Uncomment when route is added
//         >
//           <Image
//             source={require('../assets/user.png')} // Ensure path is correct
//             style={styles.image}
//           />
//           <Text style={styles.buttonText}>Manage Users</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F0F4F8', // Soft blue-gray background (unchanged)
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     height: 150, // Height of the header design
//   },
//   headerGradient: {
//     flex: 1,
//     borderBottomLeftRadius: 50,
//     borderBottomRightRadius: 50,
//     overflow: 'hidden',
//   },
//   wave: {
//     position: 'absolute',
//     bottom: -20,
//     left: 0,
//     right: 0,
//     height: 40,
//     backgroundColor: '#4A90E2', // Wave color
//     borderTopLeftRadius: 100,
//     borderTopRightRadius: 100,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#2D3748',
//     marginBottom: 30,
//     marginTop: 120, // Space for header design
//     textAlign: 'center',
//     textShadowColor: 'rgba(0, 0, 0, 0.1)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//     width: '100%',
//   },
//   button: {
//     flex: 1,
//     marginHorizontal: 10,
//     backgroundColor: '#FFFFFF',
//     paddingVertical: 20,
//     borderRadius: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//   },
//   image: {
//     width: 40,
//     height: 40,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: '#2D3748',
//     fontWeight: '600',
//     fontSize: 16,
//   },
// });


// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { Image } from 'expo-image';
// import { LinearGradient } from 'expo-linear-gradient';

// export default function AdminDashboard({ navigation }) {
//   return (
//     <View style={styles.container}>
//       {/* Top Header Design */}
//       <View style={styles.headerContainer}>
//         <LinearGradient
//           colors={['#4A90E2', '#7AB8F5']}
//           style={styles.headerGradient}
//         >
//           <View style={styles.wave} />
//         </LinearGradient>
//       </View>

//       {/* Main Content */}
//       <View style={styles.contentContainer}>
//         <Text style={styles.title}>Admin Dashboard</Text>

//         <View style={styles.row}>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => navigation.navigate('ManageProducts')}
//           >
//             <Image
//               source={require('../assets/box.png')} // Ensure path is correct
//               style={styles.image}
//             />
//             <Text style={styles.buttonText}>Manage Products</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => navigation.navigate('ManageVideos')}
//           >
//             <Image
//               source={require('../assets/creative.png')} // Ensure path is correct
//               style={styles.image}
//             />
//             <Text style={styles.buttonText}>Manage Videos</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.row}>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => navigation.navigate('ManageOrderList')}
//           >
//             <Image
//               source={require('../assets/project-management.png')} // Ensure path is correct
//               style={styles.image}
//             />
//             <Text style={styles.buttonText}>Manage Orders</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => navigation.navigate('ManageUsers')} // Uncomment when route is added
//           >
//             <Image
//               source={require('../assets/user.png')} // Ensure path is correct
//               style={styles.image}
//             />
//             <Text style={styles.buttonText}>Manage Users</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Bottom Footer Design */}
//       <View style={styles.footerContainer}>
//         <LinearGradient
//           colors={['#7AB8F5', '#4A90E2']}
//           style={styles.footerGradient}
//         >
//           <View style={styles.footerWave} />
//         </LinearGradient>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F0F4F8', // Soft blue-gray background (unchanged)
//   },
//   headerContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     height: 150, // Height of the header design
//   },
//   headerGradient: {
//     flex: 1,
//     borderBottomLeftRadius: 50,
//     borderBottomRightRadius: 50,
//     overflow: 'hidden',
//   },
//   wave: {
//     position: 'absolute',
//     bottom: -20,
//     left: 0,
//     right: 0,
//     height: 40,
//     backgroundColor: '#4A90E2', // Wave color
//     borderTopLeftRadius: 100,
//     borderTopRightRadius: 100,
//   },
//   contentContainer: {
//     flex: 1,
//     padding: 20,
//     paddingTop: 140, // Space for header
//     paddingBottom: 140, // Space for footer
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#2D3748',
//     marginBottom: 30,
//     textAlign: 'center',
//     textShadowColor: 'rgba(0, 0, 0, 0.1)',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//     width: '100%',
//   },
//   button: {
//     flex: 1,
//     marginHorizontal: 10,
//     backgroundColor: '#FFFFFF',
//     paddingVertical: 20,
//     borderRadius: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 6 },
//   },
//   image: {
//     width: 40,
//     height: 40,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: '#2D3748',
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   footerContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 120, // Height of the footer design
//   },
//   footerGradient: {
//     flex: 1,
//     borderTopLeftRadius: 50,
//     borderTopRightRadius: 50,
//     overflow: 'hidden',
//   },
//   footerWave: {
//     position: 'absolute',
//     top: -20,
//     left: 0,
//     right: 0,
//     height: 40,
//     backgroundColor: '#4A90E2', // Footer wave color
//     borderBottomLeftRadius: 100,
//     borderBottomRightRadius: 100,
//   },
// });




import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

export default function AdminDashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Background Gradient */}
      <LinearGradient
        colors={['#4A90E2', '#3172C6', '#1A5EB5']}
        style={styles.backgroundGradient}
      />
      
      {/* Top Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.greeting}>Welcome back,</Text>
            <Text style={styles.adminName}>Administrator</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Image
              source={require('../assets/myprofile.jpeg')}
              style={styles.profileImage}
              contentFit="stretch"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Admin Dashboard</Text>
        <Text style={styles.subtitle}>Manage your platform efficiently</Text>
        
        <View style={styles.cardsContainer}>
          {/* Card 1 */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('ManageProducts')}
          >
            <View style={[styles.iconContainer, { backgroundColor: 'rgba(106, 90, 205, 0.15)' }]}>
              <Ionicons name="cube-outline" size={28} color="#6A5ACD" />
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>Products</Text>
              <Text style={styles.cardSubtitle}>Manage inventory & listings</Text>
            </View>
            <View style={styles.arrowContainer}>
              <Ionicons name="arrow-forward" size={20} color="#6A5ACD" />
            </View>
          </TouchableOpacity>

          {/* Card 2 */}
          {/* <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('ManageVideos')}
          >
            <View style={[styles.iconContainer, { backgroundColor: 'rgba(255, 126, 95, 0.15)' }]}>
              <Ionicons name="videocam-outline" size={28} color="#FF7E5F" />
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>Videos</Text>
              <Text style={styles.cardSubtitle}>Manage media content</Text>
            </View>
            <View style={styles.arrowContainer}>
              <Ionicons name="arrow-forward" size={20} color="#FF7E5F" />
            </View>
          </TouchableOpacity> */}

          {/* Card 3 */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('ManageOrderList')}
          >
            <View style={[styles.iconContainer, { backgroundColor: 'rgba(50, 205, 50, 0.15)' }]}>
              <Ionicons name="receipt-outline" size={28} color="#32CD32" />
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>Orders</Text>
              <Text style={styles.cardSubtitle}>Process & track all orders</Text>
            </View>
            <View style={styles.arrowContainer}>
              <Ionicons name="arrow-forward" size={20} color="#32CD32" />
            </View>
          </TouchableOpacity>

          {/* Card 4 */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('ManageUsers')}
          >
            <View style={[styles.iconContainer, { backgroundColor: 'rgba(64, 158, 255, 0.15)' }]}>
              <Ionicons name="people-outline" size={28} color="#409EFF" />
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>Users</Text>
              <Text style={styles.cardSubtitle}>Manage accounts & roles</Text>
            </View>
            <View style={styles.arrowContainer}>
              <Ionicons name="arrow-forward" size={20} color="#409EFF" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Quick Stats Section */}
        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>Quick Stats</Text>
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>147</Text>
              <Text style={styles.statLabel}>Active Orders</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>2.4k</Text>
              <Text style={styles.statLabel}>Products</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>863</Text>
              <Text style={styles.statLabel}>Users</Text>
            </View>
          </View>
        </View>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  backgroundGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '40%',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 16,
  },
  adminName: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
  },
  profileButton: {
    width: 100,
    height: 100,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 3,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 30,
  },
  cardsContainer: {
    marginBottom: 30,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#718096',
  },
  arrowContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7FAFC',
  },
  statsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#F7FAFC',
    marginHorizontal: 5,
  },
  statNumber: {
    fontSize: 22,
    fontWeight: '700',
    color: '#4A90E2',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#718096',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    color: '#A0AEC0',
  },
  activeNavText: {
    color: '#4A90E2',
    fontWeight: '600',
  }
});