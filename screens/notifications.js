import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Platform } from 'react-native';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Configure notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

// Register for push notifications and return the token
export async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      console.log('Failed to get push token for push notification!');
      return null;
    }
    token = (await Notifications.getExpoPushTokenAsync({ projectId: 'YOUR_EXPO_PROJECT_ID' })).data;

    // Platform-specific settings
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    // Store push token in Firestore
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const db = getFirestore();
      await setDoc(doc(db, 'users', user.uid), { pushToken: token }, { merge: true });
    }
  } else {
    console.log('Must use physical device for Push Notifications');
  }
  return token;
}

// Schedule a local notification
export async function scheduleLocalNotification(identifier, title, body, trigger) {
  await Notifications.scheduleNotificationAsync({
    identifier,
    content: {
      title,
      body,
      data: { type: identifier },
    },
    trigger,
  });
}

// Cancel all scheduled notifications
export async function cancelAllNotifications() {
  await Notifications.cancelAllScheduledNotificationsAsync();
}

// Schedule water reminders (every 2 hours between start and end times)
export async function scheduleWaterReminders(startHour, endHour) {
  const now = new Date();
  const identifiers = [];

  for (let hour = startHour; hour <= endHour; hour += 2) {
    const trigger = {
      hour,
      minute: 0,
      repeats: true,
    };
    const identifier = `water-${hour}`;
    await scheduleLocalNotification(
      identifier,
      'Stay Hydrated!',
      'Time to drink a glass of water 💧',
      trigger
    );
    identifiers.push(identifier);
  }
  return identifiers;
}