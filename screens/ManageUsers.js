import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { getFirestore, collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ManageUsers({ navigation }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const db = getFirestore();

  // Fetch users from Firestore
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const usersCollection = collection(db, 'users');
      const usersSnapshot = await getDocs(usersCollection);
      const usersList = usersSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersList);
    } catch (error) {
      console.error('Error fetching users:', error);
      Alert.alert('Error', 'Failed to fetch users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Delete a user from Firestore
  const deleteUser = async (userId) => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this user?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteDoc(doc(db, 'users', userId));
              setUsers(users.filter(user => user.id !== userId));
              Alert.alert('Success', 'User deleted successfully.');
            } catch (error) {
              console.error('Error deleting user:', error);
              Alert.alert('Error', 'Failed to delete user. Please try again.');
            }
          },
        },
      ]
    );
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Render each user item
  const renderUserItem = ({ item }) => (
    <View style={styles.userCard}>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name || 'Unnamed User'}</Text>
        <Text style={styles.userEmail}>{item.email || 'No email'}</Text>
        <Text style={styles.userId}>ID: {item.id}</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteUser(item.id)}
      >
        <Ionicons name="trash-outline" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Users</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#4A90E2" style={styles.loading} />
      ) : (
        <>
          <Text style={styles.totalUsers}>
            Total Users: {users.length}
          </Text>
          <FlatList
            data={users}
            renderItem={renderUserItem}
            keyExtractor={item => item.id}
            ListEmptyComponent={
              <Text style={styles.emptyText}>No users found.</Text>
            }
            contentContainerStyle={styles.listContainer}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8', // Matches AdminDashboard background
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2D3748',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  totalUsers: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4A90E2', // Accent color
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    width: '100%',
    paddingBottom: 20,
  },
  userCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginVertical: 8,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 5,
  },
  userId: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  deleteButton: {
    backgroundColor: '#EF4444', // Red for delete
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 20,
  },
  loading: {
    marginTop: 50,
  },
});