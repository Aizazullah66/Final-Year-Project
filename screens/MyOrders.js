import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function MyOrders() {
  const navigation = useNavigation();
  const route = useRoute();
  const { userData } = route.params || {};
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const fadeAnim = useState(new Animated.Value(0))[0];
  const backButtonScale = useState(new Animated.Value(1))[0];

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!userData || !userData.id) {
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const ordersRef = collection(db, 'orders');
        const q = query(ordersRef, where('userId', '==', userData.id));
        const querySnapshot = await getDocs(q);
        const ordersList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(ordersList);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userData]);

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

  if (!userData) {
    return (
      <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
        <Text style={styles.errorText}>User data not available.</Text>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <LinearGradient
            colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)']}
            style={styles.header}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              onPressIn={() => handlePressIn(backButtonScale)}
              onPressOut={() => handlePressOut(backButtonScale)}
              style={styles.backButton}
            >
              <Animated.View style={{ transform: [{ scale: backButtonScale }] }}>
                <Ionicons name="arrow-back" size={30} color="#FFFFFF" />
              </Animated.View>
            </TouchableOpacity>
            <Text style={styles.title}>My Orders</Text>
          </LinearGradient>

          <View style={styles.ordersContainer}>
            {loading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#FFFFFF" />
                <Text style={styles.loadingText}>Loading Orders...</Text>
              </View>
            ) : orders.length === 0 ? (
              <Text style={styles.noOrdersText}>No orders found.</Text>
            ) : (
              orders.map((order) => (
                <View key={order.id} style={styles.orderCard}>
                  <LinearGradient
                    colors={['rgba(255, 255, 255, 0.15)', 'rgba(255, 255, 255, 0.05)']}
                    style={styles.orderGradient}
                  >
                    <Text style={styles.orderTitle}>Order #{order.id.slice(0, 8)}</Text>
                    <Text style={styles.orderDetail}>
                      Date: {new Date(order.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </Text>
                    <Text style={styles.orderDetail}>
                      Total: ${order.totalPrice.toFixed(2)}
                    </Text>
                    <Text style={styles.sectionTitle}>Items</Text>
                    {order.cartItems.map((item, index) => (
                      <Text key={index} style={styles.itemText}>
                        {item.name} (x{item.quantity}) - ${item.price.toFixed(2)}
                      </Text>
                    ))}
                    <Text style={styles.sectionTitle}>Shipping Address</Text>
                    <Text style={styles.orderDetail}>
                      {order.address.street}, {order.address.city}, {order.address.state}{' '}
                      {order.address.zipCode}
                    </Text>
                  </LinearGradient>
                </View>
              ))
            )}
          </View>
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
  },
  header: {
    flexDirection: 'row',
    marginTop: 15,
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
    padding: 5, // Added for larger touch area
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  ordersContainer: {
    padding: 20,
  },
  orderCard: {
    marginBottom: 20,
    borderRadius: 15,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  orderGradient: {
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  orderTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 15,
    marginBottom: 10,
  },
  orderDetail: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 5,
    paddingLeft: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  loadingText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 10,
  },
  noOrdersText: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 50,
  },
  errorText: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 50,
  },
});