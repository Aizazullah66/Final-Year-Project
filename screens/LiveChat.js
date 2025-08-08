// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
// import { db } from '../firebaseConfig';
// import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';

// export default function LiveChat() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   useEffect(() => {
//     // Get real-time updates for messages in the chat
//     const q = query(collection(db, 'chats', 'chatId', 'messages'), orderBy('timestamp'));
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const messagesArray = [];
//       querySnapshot.forEach((doc) => {
//         messagesArray.push(doc.data());
//       });
//       setMessages(messagesArray);
//     });

//     return () => unsubscribe();
//   }, []);

//   const sendMessage = async () => {
//     if (newMessage.trim()) {
//       // Send a new message to Firestore
//       await addDoc(collection(db, 'chats', 'chatId', 'messages'), {
//         text: newMessage,
//         sender: 'User', // You can set this dynamically based on the authenticated user
//         timestamp: new Date(),
//       });
//       setNewMessage('');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Live Chat</Text>

//       <FlatList
//         data={messages}
//         renderItem={({ item }) => (
//           <View style={styles.messageContainer}>
//             <Text style={styles.sender}>{item.sender}:</Text>
//             <Text style={styles.message}>{item.text}</Text>
//           </View>
//         )}
//         keyExtractor={(item, index) => index.toString()}
//         style={styles.messageList}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Type a message"
//         value={newMessage}
//         onChangeText={setNewMessage}
//       />

//       <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
//         <Text style={styles.sendButtonText}>Send</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   messageList: {
//     flex: 1,
//     marginBottom: 20,
//   },
//   messageContainer: {
//     marginBottom: 10,
//   },
//   sender: {
//     fontWeight: 'bold',
//   },
//   message: {
//     fontSize: 16,
//     marginTop: 5,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//     backgroundColor: '#fff',
//   },
//   sendButton: {
//     backgroundColor: '#007BFF',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   sendButtonText: {
//     color: '#fff',
//     fontWeight: '600',
//   },
// });


// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   FlatList,
//   Alert,
// } from 'react-native';
// import { db } from '../firebaseConfig';
// import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
// import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
// import { LinearGradient } from 'expo-linear-gradient'; // Gradient bubbles

// export default function LiveChat() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [replyingTo, setReplyingTo] = useState(null);

//   const userEmail = 'current_user@example.com'; // Replace with the authenticated user's email

//   useEffect(() => {
//     // Get real-time updates for messages in the chat
//     const q = query(collection(db, 'chats', 'chatId', 'messages'), orderBy('timestamp'));
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const messagesArray = [];
//       querySnapshot.forEach((doc) => {
//         messagesArray.push({ id: doc.id, ...doc.data() });
//       });
//       setMessages(messagesArray);
//     });

//     return () => unsubscribe();
//   }, []);

//   const sendMessage = async () => {
//     if (newMessage.trim()) {
//       // Send a new message to Firestore
//       await addDoc(collection(db, 'chats', 'chatId', 'messages'), {
//         text: newMessage,
//         sender: userEmail,
//         timestamp: new Date(),
//         replyTo: replyingTo ? replyingTo.text : null,
//       });
//       setNewMessage('');
//       setReplyingTo(null);
//     }
//   };

//   const handleReply = (message) => {
//     setReplyingTo(message);
//     Alert.alert('Replying to:', message.text);
//   };

//   const renderMessage = ({ item }) => {
//     const isUserMessage = item.sender === userEmail;

//     const RightSwipeActions = () => (
//       <TouchableOpacity
//         style={[styles.swipeReplyButton, { backgroundColor: '#6c757d' }]}
//         onPress={() => handleReply(item)}
//       >
//         <Text style={styles.swipeText}>Reply</Text>
//       </TouchableOpacity>
//     );

//     return (
//       <GestureHandlerRootView>
//         <Swipeable renderRightActions={RightSwipeActions}>
//           <View
//             style={[
//               styles.messageContainer,
//               isUserMessage ? styles.userMessage : styles.otherMessage,
//             ]}
//           >
//             <LinearGradient
//               colors={
//                 isUserMessage
//                   ? ['#4CAF50', '#2E7D32']
//                   : ['#1E88E5', '#1565C0']
//               }
//               style={styles.messageBubble}
//             >
//               {item.replyTo && (
//                 <Text style={styles.replyText}>
//                   Replying to: {item.replyTo}
//                 </Text>
//               )}
//               <Text style={styles.messageText}>{item.text}</Text>
//               <Text style={styles.senderEmail}>
//                 {isUserMessage ? 'You' : item.sender}
//               </Text>
//             </LinearGradient>
//           </View>
//         </Swipeable>
//       </GestureHandlerRootView>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Live Chat</Text>

//       <FlatList
//         data={messages}
//         renderItem={renderMessage}
//         keyExtractor={(item) => item.id}
//         style={styles.messageList}
//       />

//       {replyingTo && (
//         <View style={styles.replyingToContainer}>
//           <Text style={styles.replyingToText}>
//             Replying to: {replyingTo.text}
//           </Text>
//           <TouchableOpacity onPress={() => setReplyingTo(null)}>
//             <Text style={styles.cancelReplyText}>Cancel</Text>
//           </TouchableOpacity>
//         </View>
//       )}

//       <TextInput
//         style={styles.input}
//         placeholder="Type a message"
//         value={newMessage}
//         onChangeText={setNewMessage}
//       />

//       <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
//         <Text style={styles.sendButtonText}>Send</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   messageList: {
//     flex: 1,
//     marginBottom: 10,
//   },
//   messageContainer: {
//     marginVertical: 5,
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//   },
//   userMessage: {
//     alignSelf: 'flex-end',
//   },
//   otherMessage: {
//     alignSelf: 'flex-start',
//   },
//   messageBubble: {
//     padding: 15,
//     borderRadius: 10,
//     maxWidth: '75%',
//   },
//   messageText: {
//     fontSize: 16,
//     color: '#fff',
//   },
//   senderEmail: {
//     fontSize: 12,
//     color: '#ccc',
//     marginTop: 5,
//     textAlign: 'right',
//   },
//   swipeReplyButton: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 70,
//   },
//   swipeText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   replyText: {
//     fontSize: 14,
//     color: '#ccc',
//     marginBottom: 5,
//   },
//   replyingToContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     padding: 10,
//     backgroundColor: '#eee',
//     borderRadius: 5,
//   },
//   replyingToText: {
//     flex: 1,
//     color: '#333',
//   },
//   cancelReplyText: {
//     color: '#f44336',
//     fontWeight: 'bold',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     backgroundColor: '#fff',
//     marginBottom: 10,
//   },
//   sendButton: {
//     backgroundColor: '#007BFF',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   sendButtonText: {
//     color: '#fff',
//     fontWeight: '600',
//   },
// });



// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   FlatList,
//   Alert,
// } from 'react-native';
// import { db } from '../firebaseConfig';
// import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
// import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
// import { LinearGradient } from 'expo-linear-gradient';

// export default function LiveChat() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [replyingTo, setReplyingTo] = useState(null);

//   const userEmail = 'current_user@example.com'; // Replace with authenticated user's email

//   useEffect(() => {
//     const q = query(collection(db, 'chats', 'chatId', 'messages'), orderBy('timestamp'));
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const messagesArray = [];
//       querySnapshot.forEach((doc) => {
//         messagesArray.push({ id: doc.id, ...doc.data() });
//       });
//       setMessages(messagesArray);
//     });

//     return () => unsubscribe();
//   }, []);

//   const sendMessage = async () => {
//     if (newMessage.trim()) {
//       await addDoc(collection(db, 'chats', 'chatId', 'messages'), {
//         text: newMessage,
//         sender: userEmail,
//         timestamp: new Date(),
//         replyTo: replyingTo ? replyingTo.text : null,
//       });
//       setNewMessage('');
//       setReplyingTo(null);
//     }
//   };

//   const handleReply = (message) => {
//     setReplyingTo(message);
//     Alert.alert('Replying to:', message.text);
//   };

//   const renderMessage = ({ item }) => {
//     const isUserMessage = item.sender === userEmail;

//     const RightSwipeActions = () => (
//       <TouchableOpacity
//         style={styles.replyButton}
//         onPress={() => handleReply(item)}
//       >
//         <Text style={styles.replyButtonText}>Reply</Text>
//       </TouchableOpacity>
//     );

//     return (
//       <GestureHandlerRootView>
//         <Swipeable renderRightActions={RightSwipeActions}>
//           <View
//             style={[
//               styles.messageContainer,
//               isUserMessage ? styles.userMessage : styles.otherMessage,
//             ]}
//           >
//             <LinearGradient
//               colors={isUserMessage ? ['#DCF8C6', '#B9FBC3'] : ['#E5E5E5', '#CFCFCF']}
//               style={styles.messageBubble}
//             >
//               {item.replyTo && (
//                 <Text style={styles.replyToText}>
//                   Replying to: {item.replyTo}
//                 </Text>
//               )}
//               <Text style={styles.messageText}>{item.text}</Text>
//               <Text style={styles.messageMeta}>
//                 {isUserMessage ? 'You' : item.sender}
//               </Text>
//             </LinearGradient>
//           </View>
//         </Swipeable>
//       </GestureHandlerRootView>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={messages}
//         renderItem={renderMessage}
//         keyExtractor={(item) => item.id}
//         style={styles.messageList}
//         inverted // To show the latest messages at the bottom
//       />

//       {replyingTo && (
//         <View style={styles.replyingContainer}>
//           <Text style={styles.replyingText}>
//             Replying to: {replyingTo.text}
//           </Text>
//           <TouchableOpacity onPress={() => setReplyingTo(null)}>
//             <Text style={styles.cancelReply}>Cancel</Text>
//           </TouchableOpacity>
//         </View>
//       )}

//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Type a message"
//           value={newMessage}
//           onChangeText={setNewMessage}
//         />
//         <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
//           <Text style={styles.sendButtonText}>Send</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ECE5DD',
//     padding: 10,
//   },
//   messageList: {
//     flex: 1,
//   },
//   messageContainer: {
//     marginVertical: 5,
//     maxWidth: '80%',
//   },
//   userMessage: {
//     alignSelf: 'flex-end',
//   },
//   otherMessage: {
//     alignSelf: 'flex-start',
//   },
//   messageBubble: {
//     padding: 10,
//     borderRadius: 10,
//     elevation: 2,
//   },
//   replyToText: {
//     fontSize: 12,
//     color: '#555',
//     marginBottom: 5,
//   },
//   messageText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   messageMeta: {
//     fontSize: 12,
//     color: '#555',
//     marginTop: 5,
//     textAlign: 'right',
//   },
//   replyButton: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 70,
//     backgroundColor: '#25D366',
//   },
//   replyButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   replyingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   replyingText: {
//     flex: 1,
//     color: '#333',
//   },
//   cancelReply: {
//     color: '#f00',
//     fontWeight: 'bold',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     backgroundColor: '#fff',
//     borderRadius: 25,
//   },
//   input: {
//     flex: 1,
//     padding: 10,
//     fontSize: 16,
//   },
//   sendButton: {
//     backgroundColor: '#25D366',
//     borderRadius: 50,
//     padding: 10,
//   },
//   sendButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });


// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   FlatList,
//   Alert,
// } from 'react-native';
// import { db, auth } from '../firebaseConfig';
// import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
// import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
// import { LinearGradient } from 'expo-linear-gradient';
// import { onAuthStateChanged } from 'firebase/auth';

// export default function LiveChat() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [replyingTo, setReplyingTo] = useState(null);
//   const [currentUserEmail, setCurrentUserEmail] = useState(null);

//   useEffect(() => {
//     // Get the authenticated user's email
//     const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setCurrentUserEmail(user.email);
//       }
//     });

//     return () => unsubscribeAuth();
//   }, []);

//   useEffect(() => {
//     // Real-time listener for chat messages
//     const q = query(
//       collection(db, 'chats', 'chatId', 'messages'),
//       orderBy('timestamp', 'asc') // Order by timestamp in ascending order
//     );

//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const messagesArray = [];
//       querySnapshot.forEach((doc) => {
//         messagesArray.push({ id: doc.id, ...doc.data() });
//       });
//       setMessages(messagesArray);
//     });

//     return () => unsubscribe();
//   }, []);

//   const sendMessage = async () => {
//     if (newMessage.trim()) {
//       await addDoc(collection(db, 'chats', 'chatId', 'messages'), {
//         text: newMessage,
//         sender: currentUserEmail,
//         timestamp: new Date(),
//         replyTo: replyingTo ? replyingTo.text : null,
//       });
//       setNewMessage('');
//       setReplyingTo(null);
//     }
//   };

//   const handleReply = (message) => {
//     setReplyingTo(message);
//     Alert.alert('Replying to:', message.text);
//   };

//   const renderMessage = ({ item }) => {
//     const isUserMessage = item.sender === currentUserEmail;

//     const RightSwipeActions = () => (
//       <TouchableOpacity
//         style={styles.replyButton}
//         onPress={() => handleReply(item)}
//       >
//         <Text style={styles.replyButtonText}>Reply</Text>
//       </TouchableOpacity>
//     );

//     return (
//       <GestureHandlerRootView>
//         <Swipeable renderRightActions={RightSwipeActions}>
//           <View
//             style={[
//               styles.messageContainer,
//               isUserMessage ? styles.userMessage : styles.otherMessage,
//             ]}
//           >
//             <LinearGradient
//               colors={isUserMessage ? ['#DCF8C6', '#B9FBC3'] : ['#E5E5E5', '#CFCFCF']}
//               style={styles.messageBubble}
//             >
//               {item.replyTo && (
//                 <Text style={styles.replyToText}>
//                   Replying to: {item.replyTo}
//                 </Text>
//               )}
//               <Text style={styles.messageText}>{item.text}</Text>
//               <Text style={styles.messageMeta}>
//                 {isUserMessage ? 'You' : item.sender}
//               </Text>
//             </LinearGradient>
//           </View>
//         </Swipeable>
//       </GestureHandlerRootView>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={messages}
//         renderItem={renderMessage}
//         keyExtractor={(item) => item.id}
//         style={styles.messageList}
//         onContentSizeChange={() => {
//           // Scroll to the bottom when new messages arrive
//           flatListRef.current?.scrollToEnd({ animated: true });
//         }}
//         ref={(ref) => (flatListRef = ref)}
//       />

//       {replyingTo && (
//         <View style={styles.replyingContainer}>
//           <Text style={styles.replyingText}>
//             Replying to: {replyingTo.text}
//           </Text>
//           <TouchableOpacity onPress={() => setReplyingTo(null)}>
//             <Text style={styles.cancelReply}>Cancel</Text>
//           </TouchableOpacity>
//         </View>
//       )}

//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Type a message"
//           value={newMessage}
//           onChangeText={setNewMessage}
//         />
//         <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
//           <Text style={styles.sendButtonText}>Send</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ECE5DD',
//     padding: 10,
//   },
//   messageList: {
//     flex: 1,
//   },
//   messageContainer: {
//     marginVertical: 5,
//     maxWidth: '80%',
//   },
//   userMessage: {
//     alignSelf: 'flex-end',
//   },
//   otherMessage: {
//     alignSelf: 'flex-start',
//   },
//   messageBubble: {
//     padding: 10,
//     borderRadius: 10,
//     elevation: 2,
//   },
//   replyToText: {
//     fontSize: 12,
//     color: '#555',
//     marginBottom: 5,
//   },
//   messageText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   messageMeta: {
//     fontSize: 12,
//     color: '#555',
//     marginTop: 5,
//     textAlign: 'right',
//   },
//   replyButton: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 70,
//     backgroundColor: '#25D366',
//   },
//   replyButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   replyingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   replyingText: {
//     flex: 1,
//     color: '#333',
//   },
//   cancelReply: {
//     color: '#f00',
//     fontWeight: 'bold',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     backgroundColor: '#fff',
//     borderRadius: 25,
//   },
//   input: {
//     flex: 1,
//     padding: 10,
//     fontSize: 16,
//   },
//   sendButton: {
//     backgroundColor: '#25D366',
//     borderRadius: 50,
//     padding: 10,
//   },
//   sendButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });


// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
// } from 'react-native';
// import { db, auth } from '../firebaseConfig';
// import {
//   collection,
//   addDoc,
//   query,
//   orderBy,
//   onSnapshot,
// } from 'firebase/firestore';
// import { onAuthStateChanged } from 'firebase/auth';

// export default function LiveChat() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [replyingTo, setReplyingTo] = useState(null);
//   const [currentUserEmail, setCurrentUserEmail] = useState('');
//   const flatListRef = useRef(null);

//   // Get authenticated user's email
//   useEffect(() => {
//     const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setCurrentUserEmail(user.email);
//       }
//     });
//     return () => unsubscribeAuth();
//   }, []);

//   // Fetch messages in real-time
//   useEffect(() => {
//     const messagesQuery = query(
//       collection(db, 'chats', 'chatId', 'messages'),
//       orderBy('timestamp', 'asc') // Messages in ascending order
//     );
//     const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
//       const loadedMessages = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setMessages(loadedMessages);
//     });
//     return () => unsubscribe();
//   }, []);

//   // Send a new message
//   const sendMessage = async () => {
//     if (newMessage.trim()) {
//       await addDoc(collection(db, 'chats', 'chatId', 'messages'), {
//         text: newMessage.trim(),
//         sender: currentUserEmail,
//         timestamp: new Date(),
//         replyTo: replyingTo?.text || null,
//       });
//       setNewMessage('');
//       setReplyingTo(null);

//       // Scroll to the bottom after sending a message
//       flatListRef.current?.scrollToEnd({ animated: true });
//     }
//   };

//   // Handle reply functionality
//   const handleReply = (message) => {
//     setReplyingTo(message);
//   };

//   // Render a single message
//   const renderMessage = ({ item }) => {
//     const isUserMessage = item.sender === currentUserEmail;

//     return (
//       <View
//         style={[
//           styles.messageContainer,
//           isUserMessage ? styles.userMessage : styles.otherMessage,
//         ]}
//       >
//         {item.replyTo && (
//           <Text style={styles.replyToText}>Replying to: {item.replyTo}</Text>
//         )}
//         <Text style={styles.messageText}>{item.text}</Text>
//         <Text style={styles.senderText}>
//           {isUserMessage ? 'You' : item.sender}
//         </Text>
//         {!isUserMessage && (
//           <TouchableOpacity
//             style={styles.replyButton}
//             onPress={() => handleReply(item)}
//           >
//             <Text style={styles.replyButtonText}>Reply</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={messages}
//         renderItem={renderMessage}
//         keyExtractor={(item) => item.id}
//         ref={flatListRef}
//         onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
//         contentContainerStyle={{ paddingBottom: 20 }}
//       />

//       {replyingTo && (
//         <View style={styles.replyingToContainer}>
//           <Text style={styles.replyingToText}>
//             Replying to: {replyingTo.text}
//           </Text>
//           <TouchableOpacity onPress={() => setReplyingTo(null)}>
//             <Text style={styles.cancelReplyText}>Cancel</Text>
//           </TouchableOpacity>
//         </View>
//       )}

//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Type a message"
//           value={newMessage}
//           onChangeText={setNewMessage}
//         />
//         <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
//           <Text style={styles.sendButtonText}>Send</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 10,
//   },
//   messageContainer: {
//     marginVertical: 5,
//     padding: 10,
//     borderRadius: 10,
//     maxWidth: '75%',
//   },
//   userMessage: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#dcf8c6',
//   },
//   otherMessage: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#e5e5e5',
//   },
//   messageText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   senderText: {
//     fontSize: 12,
//     color: '#555',
//     marginTop: 5,
//   },
//   replyToText: {
//     fontSize: 14,
//     color: '#888',
//     marginBottom: 5,
//   },
//   replyButton: {
//     marginTop: 5,
//   },
//   replyButtonText: {
//     color: '#007bff',
//     fontSize: 14,
//   },
//   replyingToContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 10,
//     borderTopWidth: 1,
//     borderColor: '#ddd',
//   },
//   replyingToText: {
//     flex: 1,
//     fontSize: 14,
//     color: '#555',
//   },
//   cancelReplyText: {
//     color: '#f44336',
//     fontWeight: 'bold',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderTopWidth: 1,
//     borderColor: '#ddd',
//     padding: 10,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginRight: 10,
//     backgroundColor: '#f9f9f9',
//   },
//   sendButton: {
//     backgroundColor: '#007bff',
//     padding: 10,
//     borderRadius: 5,
//   },
//   sendButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });



// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
//   Image,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { db, auth, storage } from '../firebaseConfig';
// import {
//   collection,
//   addDoc,
//   query,
//   orderBy,
//   onSnapshot,
// } from 'firebase/firestore';
// import { onAuthStateChanged } from 'firebase/auth';
// import * as ImagePicker from 'expo-image-picker';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import EmojiPicker from 'emoji-picker-react';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// export default function LiveChat() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [replyingTo, setReplyingTo] = useState(null);
//   const [currentUserEmail, setCurrentUserEmail] = useState('');
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const flatListRef = useRef(null);

//   // Get authenticated user's email
//   useEffect(() => {
//     const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setCurrentUserEmail(user.email);
//       }
//     });
//     return () => unsubscribeAuth();
//   }, []);

//   // Fetch messages in real-time
//   useEffect(() => {
//     const messagesQuery = query(
//       collection(db, 'chats', 'chatId', 'messages'),
//       orderBy('timestamp', 'asc')
//     );
//     const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
//       const loadedMessages = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setMessages(loadedMessages);
//     });
//     return () => unsubscribe();
//   }, []);

//   // Send a new message (with optional image)
//   const sendMessage = async (imageUrl = null) => {
//     if (newMessage.trim() || imageUrl) {
//       await addDoc(collection(db, 'chats', 'chatId', 'messages'), {
//         text: newMessage.trim(),
//         imageUrl,
//         sender: currentUserEmail,
//         timestamp: new Date(),
//         replyTo: replyingTo?.text || null,
//       });
//       setNewMessage('');
//       setReplyingTo(null);
//       flatListRef.current?.scrollToEnd({ animated: true });
//     }
//   };

//   // Handle reply functionality
//   const handleReply = (message) => {
//     setReplyingTo(message);
//   };

//   // Upload photo functionality
//   const pickImage = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       const imageUri = result.assets[0].uri;
//       const response = await fetch(imageUri);
//       const blob = await response.blob();
//       const storageRef = ref(storage, `chatImages/${Date.now()}`);
//       await uploadBytes(storageRef, blob);
//       const downloadURL = await getDownloadURL(storageRef);
//       sendMessage(downloadURL);
//     }
//   };

//   // Render a single message
//   const renderMessage = ({ item }) => {
//     const isUserMessage = item.sender === currentUserEmail;

//     return (
//       <View
//         style={[
//           styles.messageContainer,
//           isUserMessage ? styles.userMessage : styles.otherMessage,
//         ]}
//       >
//         {item.replyTo && (
//           <Text style={styles.replyToText}>Replying to: {item.replyTo}</Text>
//         )}
//         {item.imageUrl && (
//           <Image source={{ uri: item.imageUrl }} style={styles.messageImage} />
//         )}
//         <Text style={styles.messageText}>{item.text}</Text>
//         <Text style={styles.timestampText}>
//           {new Date(item.timestamp).toLocaleTimeString()}
//         </Text>
//         <Text style={styles.senderText}>
//           {isUserMessage ? 'You' : item.sender}
//         </Text>
//         {!isUserMessage && (
//           <TouchableOpacity
//             style={styles.replyButton}
//             onPress={() => handleReply(item)}
//           >
//             <Text style={styles.replyButtonText}>Reply</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     );
//   };

//   return (
//     <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.keyboardAvoidingView}
//       >
//         <FlatList
//           data={messages}
//           renderItem={renderMessage}
//           keyExtractor={(item) => item.id}
//           ref={flatListRef}
//           onContentSizeChange={() =>
//             flatListRef.current?.scrollToEnd({ animated: true })
//           }
//           contentContainerStyle={{ paddingBottom: 20 }}
//         />

//         {replyingTo && (
//           <View style={styles.replyingToContainer}>
//             <Text style={styles.replyingToText}>
//               Replying to: {replyingTo.text}
//             </Text>
//             <TouchableOpacity onPress={() => setReplyingTo(null)}>
//               <Text style={styles.cancelReplyText}>Cancel</Text>
//             </TouchableOpacity>
//           </View>
//         )}

//         <View style={styles.inputContainer}>
//           <TouchableOpacity onPress={pickImage} style={styles.uploadButton}>
//             <Icon name="photo" size={24} color="#FF6F61" />
//           </TouchableOpacity>
//           <TextInput
//             style={styles.input}
//             placeholder="Type a message"
//             value={newMessage}
//             onChangeText={setNewMessage}
//           />
//           <TouchableOpacity
//             onPress={() => setShowEmojiPicker(!showEmojiPicker)}
//             style={styles.emojiButton}
//           >
//             <Icon name="emoji-emotions" size={24} color="#FF6F61" />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.sendButton} onPress={() => sendMessage()}>
//             <Text style={styles.sendButtonText}>Send</Text>
//           </TouchableOpacity>
//         </View>

//         {showEmojiPicker && (
//           <EmojiPicker
//             onEmojiClick={(emoji) => setNewMessage(newMessage + emoji.emoji)}
//             style={styles.emojiPicker}
//           />
//         )}
//       </KeyboardAvoidingView>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   keyboardAvoidingView: {
//     flex: 1,
//   },
//   messageContainer: {
//     marginVertical: 5,
//     padding: 10,
//     borderRadius: 10,
//     maxWidth: '75%',
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   userMessage: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#FF6F61',
//   },
//   otherMessage: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#E5E7EB',
//   },
//   messageText: {
//     fontSize: 16,
//     color: '#fff', // White text for user messages
//   },
//   senderText: {
//     fontSize: 12,
//     color: '#fff',
//     marginTop: 5,
//   },
//   timestampText: {
//     fontSize: 10,
//     color: '#fff',
//     marginTop: 5,
//   },
//   replyToText: {
//     fontSize: 14,
//     color: '#fff',
//     marginBottom: 5,
//   },
//   messageImage: {
//     width: 200,
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   replyButton: {
//     marginTop: 5,
//   },
//   replyButtonText: {
//     color: '#FF6F61',
//     fontSize: 14,
//   },
//   replyingToContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 10,
//     borderTopWidth: 1,
//     borderColor: '#ddd',
//   },
//   replyingToText: {
//     flex: 1,
//     fontSize: 14,
//     color: '#555',
//   },
//   cancelReplyText: {
//     color: '#f44336',
//     fontWeight: 'bold',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderTopWidth: 1,
//     borderColor: '#ddd',
//     padding: 10,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: -2 },
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginRight: 10,
//     backgroundColor: '#f9f9f9',
//   },
//   uploadButton: {
//     marginRight: 10,
//   },
//   emojiButton: {
//     marginRight: 10,
//   },
//   sendButton: {
//     backgroundColor: '#FF6F61',
//     padding: 10,
//     borderRadius: 5,
//   },
//   sendButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   emojiPicker: {
//     position: 'absolute',
//     bottom: 60,
//     left: 10,
//     right: 10,
//   },
// });


// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
//   Image,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { db, auth } from '../firebaseConfig';
// import {
//   collection,
//   addDoc,
//   query,
//   orderBy,
//   onSnapshot,
// } from 'firebase/firestore';
// import { onAuthStateChanged } from 'firebase/auth';
// import * as ImagePicker from 'expo-image-picker';
// import * as FileSystem from 'expo-file-system';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// export default function LiveChat({ navigation }) {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [replyingTo, setReplyingTo] = useState(null);
//   const [currentUserEmail, setCurrentUserEmail] = useState('');
//   const flatListRef = useRef(null);

//   // Get authenticated user's email
//   useEffect(() => {
//     const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setCurrentUserEmail(user.email);
//       } else {
//         navigation.navigate('Login');
//       }
//     });
//     return () => unsubscribeAuth();
//   }, [navigation]);

//   // Fetch messages in real-time
//   useEffect(() => {
//     const messagesQuery = query(
//       collection(db, 'chats', 'chatId', 'messages'),
//       orderBy('timestamp', 'asc')
//     );
//     const unsubscribe = onSnapshot(
//       messagesQuery,
//       (snapshot) => {
//         const loadedMessages = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setMessages(loadedMessages);
//       },
//       (error) => {
//         console.error('Firestore snapshot error:', error);
//       }
//     );
//     return () => unsubscribe();
//   }, []);

//   // Request media library permissions
//   useEffect(() => {
//     (async () => {
//       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//       if (status !== 'granted') {
//         alert('Permission to access media library is required for image uploads.');
//       }
//     })();
//   }, []);

//   // Send a new message (with optional Base64 image)
//   const sendMessage = async (imageBase64 = null) => {
//     if (!newMessage.trim() && !imageBase64) return;

//     try {
//       await addDoc(collection(db, 'chats', 'chatId', 'messages'), {
//         text: newMessage.trim() || '',
//         imageBase64,
//         sender: currentUserEmail,
//         timestamp: new Date(),
//         replyTo: replyingTo?.text || null,
//       });
//       setNewMessage('');
//       setReplyingTo(null);
//       flatListRef.current?.scrollToEnd({ animated: true });
//     } catch (error) {
//       console.error('Error sending message:', error);
//       alert('Failed to send message. Please try again.');
//     }
//   };

//   // Handle reply functionality
//   const handleReply = (message) => {
//     setReplyingTo(message);
//   };

//   // Upload photo as Base64
//   const pickImage = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: [4, 3],
//         quality: 0.5, // Reduce quality to keep Base64 size manageable
//       });

//       if (!result.canceled) {
//         const imageUri = result.assets[0].uri;
//         console.log('Selected image URI:', imageUri);

//         // Read the image file as Base64
//         const base64 = await FileSystem.readAsStringAsync(imageUri, {
//           encoding: FileSystem.EncodingType.Base64,
//         });
//         console.log('Base64 string length:', base64.length);

//         // Send the message with the Base64 image
//         sendMessage(`data:image/jpeg;base64,${base64}`);
//       } else {
//         console.log('Image selection canceled');
//       }
//     } catch (error) {
//       console.error('Error converting image to Base64:', error);
//       alert('Failed to upload image. Check console for details.');
//     }
//   };

//   // Render a single message
//   const renderMessage = ({ item }) => {
//     const isUserMessage = item.sender === currentUserEmail;

//     return (
//       <View
//         style={[
//           styles.messageContainer,
//           isUserMessage ? styles.userMessage : styles.otherMessage,
//         ]}
//       >
//         {item.replyTo && (
//           <Text style={styles.replyToText}>↳ {item.replyTo}</Text>
//         )}
//         {item.imageBase64 && (
//           <Image source={{ uri: item.imageBase64 }} style={styles.messageImage} />
//         )}
//         {item.text && <Text style={styles.messageText}>{item.text}</Text>}
//         <Text style={styles.timestampText}>
//           {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//         </Text>
//         {!isUserMessage && (
//           <TouchableOpacity
//             style={styles.replyButton}
//             onPress={() => handleReply(item)}
//           >
//             <Icon name="reply" size={16} color="#FF6F61" />
//           </TouchableOpacity>
//         )}
//       </View>
//     );
//   };

//   return (
//     <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
//       {/* WhatsApp-like Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Icon name="arrow-back" size={24} color="#FFFFFF" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Live Chat</Text>
//       </View>

//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.keyboardAvoidingView}
//       >
//         <FlatList
//           data={messages}
//           renderItem={renderMessage}
//           keyExtractor={(item) => item.id}
//           ref={flatListRef}
//           onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
//           contentContainerStyle={styles.messageList}
//         />

//         {replyingTo && (
//           <View style={styles.replyingToContainer}>
//             <Text style={styles.replyingToText}>Replying to: {replyingTo.text}</Text>
//             <TouchableOpacity onPress={() => setReplyingTo(null)}>
//               <Icon name="close" size={20} color="#FF6F61" />
//             </TouchableOpacity>
//           </View>
//         )}

//         <View style={styles.inputContainer}>
//           <TouchableOpacity onPress={pickImage} style={styles.attachmentButton}>
//             <Icon name="attach-file" size={24} color="#FF6F61" />
//           </TouchableOpacity>
//           <TextInput
//             style={styles.input}
//             placeholder="Type a message"
//             placeholderTextColor="#A0A0A0"
//             value={newMessage}
//             onChangeText={setNewMessage}
//             multiline
//           />
//           {newMessage.trim() && (
//             <TouchableOpacity style={styles.sendButton} onPress={() => sendMessage()}>
//               <Icon name="send" size={24} color="#FFFFFF" />
//             </TouchableOpacity>
//           )}
//         </View>
//       </KeyboardAvoidingView>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#1E2A44',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#2A3B5E',
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     marginLeft: 15,
//   },
//   keyboardAvoidingView: {
//     flex: 1,
//   },
//   messageList: {
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//   },
//   messageContainer: {
//     marginVertical: 5,
//     padding: 10,
//     borderRadius: 10,
//     maxWidth: '75%',
//   },
//   userMessage: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#FF6F61',
//   },
//   otherMessage: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#E5E7EB',
//   },
//   messageText: {
//     fontSize: 16,
//     color: '#FFFFFF',
//   },
//   timestampText: {
//     fontSize: 12,
//     color: '#FFFFFF',
//     alignSelf: 'flex-end',
//     marginTop: 5,
//   },
//   replyToText: {
//     fontSize: 14,
//     color: '#FFFFFF',
//     marginBottom: 5,
//   },
//   messageImage: {
//     width: 200,
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   replyButton: {
//     marginTop: 5,
//   },
//   replyingToContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     padding: 10,
//     borderTopWidth: 1,
//     borderColor: '#DDD',
//   },
//   replyingToText: {
//     flex: 1,
//     fontSize: 14,
//     color: '#555',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     padding: 10,
//     borderTopWidth: 1,
//     borderColor: '#DDD',
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: -2 },
//   },
//   attachmentButton: {
//     padding: 5,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#CCC',
//     borderRadius: 20,
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     marginHorizontal: 10,
//     backgroundColor: '#F9F9F9',
//     fontSize: 16,
//     color: '#1F2937',
//     maxHeight: 100,
//   },
//   sendButton: {
//     backgroundColor: '#FF6F61',
//     borderRadius: 20,
//     padding: 10,
//   },
// });


// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
//   Image,
//   KeyboardAvoidingView,
//   Platform,
//   Modal,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { db, auth } from '../firebaseConfig';
// import {
//   collection,
//   addDoc,
//   query,
//   orderBy,
//   onSnapshot,
//   getDocs,
//   where,
// } from 'firebase/firestore';
// import { onAuthStateChanged } from 'firebase/auth';
// import * as ImagePicker from 'expo-image-picker';
// import * as FileSystem from 'expo-file-system';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// export default function LiveChat({ navigation, route }) {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [replyingTo, setReplyingTo] = useState(null);
//   const [currentUserEmail, setCurrentUserEmail] = useState('');
//   const [userData, setUserData] = useState(route.params?.userData || null);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const flatListRef = useRef(null);

//   // Get authenticated user's email and userData
//   useEffect(() => {
//     const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setCurrentUserEmail(user.email);
//         if (!userData) {
//           // Fallback if userData isn’t passed via navigation
//           const fetchedUserData = { name: user.displayName || 'User', email: user.email };
//           setUserData(fetchedUserData);
//         }
//       } else {
//         navigation.navigate('Login');
//       }
//     });
//     return () => unsubscribeAuth();
//   }, [navigation, userData]);

//   // Fetch messages in real-time and sender names
//   useEffect(() => {
//     const messagesQuery = query(
//       collection(db, 'chats', 'chatId', 'messages'),
//       orderBy('timestamp', 'asc')
//     );
//     const unsubscribe = onSnapshot(
//       messagesQuery,
//       async (snapshot) => {
//         const loadedMessages = await Promise.all(
//           snapshot.docs.map(async (doc) => {
//             const data = doc.data();
//             let senderName = data.sender === currentUserEmail ? userData?.name || 'You' : data.sender;
//             if (data.sender !== currentUserEmail) {
//               try {
//                 const usersRef = collection(db, 'users');
//                 const q = query(usersRef, where('email', '==', data.sender));
//                 const querySnapshot = await getDocs(q);
//                 if (!querySnapshot.empty) {
//                   senderName = querySnapshot.docs[0].data().name || data.sender;
//                 }
//               } catch (error) {
//                 console.error('Error fetching sender name:', error);
//               }
//             }
//             return {
//               id: doc.id,
//               ...data,
//               senderName,
//             };
//           })
//         );
//         setMessages(loadedMessages);
//       },
//       (error) => {
//         console.error('Firestore snapshot error:', error);
//       }
//     );
//     return () => unsubscribe();
//   }, [currentUserEmail, userData]);

//   // Request media library permissions
//   useEffect(() => {
//     (async () => {
//       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//       if (status !== 'granted') {
//         alert('Permission to access media library is required for image uploads.');
//       }
//     })();
//   }, []);

//   // Send a new message (with optional Base64 image)
//   const sendMessage = async (imageBase64 = null) => {
//     if (!newMessage.trim() && !imageBase64) return;

//     try {
//       await addDoc(collection(db, 'chats', 'chatId', 'messages'), {
//         text: newMessage.trim() || '',
//         imageBase64,
//         sender: currentUserEmail,
//         timestamp: new Date(),
//         replyTo: replyingTo?.text || null,
//       });
//       setNewMessage('');
//       setReplyingTo(null);
//       flatListRef.current?.scrollToEnd({ animated: true });
//     } catch (error) {
//       console.error('Error sending message:', error);
//       alert('Failed to send message. Please try again.');
//     }
//   };

//   // Handle reply functionality
//   const handleReply = (message) => {
//     setReplyingTo(message);
//   };

//   // Upload photo as Base64
//   const pickImage = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: [4, 3],
//         quality: 0.5,
//       });

//       if (!result.canceled) {
//         const imageUri = result.assets[0].uri;
//         const base64 = await FileSystem.readAsStringAsync(imageUri, {
//           encoding: FileSystem.EncodingType.Base64,
//         });
//         sendMessage(`data:image/jpeg;base64,${base64}`);
//       }
//     } catch (error) {
//       console.error('Error converting image to Base64:', error);
//       alert('Failed to upload image. Check console for details.');
//     }
//   };

//   // Render a single message
//   const renderMessage = ({ item }) => {
//     const isUserMessage = item.sender === currentUserEmail;
//     const timestamp = item.timestamp instanceof Date 
//       ? item.timestamp 
//       : new Date(item.timestamp.seconds * 1000); // Handle Firestore timestamp

//     return (
//       <View
//         style={[
//           styles.messageContainer,
//           isUserMessage ? styles.userMessage : styles.otherMessage,
//         ]}
//       >
//         <Text style={styles.senderText}>{item.senderName}</Text>
//         {item.replyTo && (
//           <Text style={styles.replyToText}>↳ {item.replyTo}</Text>
//         )}
//         {item.imageBase64 && (
//           <TouchableOpacity onPress={() => setSelectedImage(item.imageBase64)}>
//             <Image source={{ uri: item.imageBase64 }} style={styles.messageImage} />
//           </TouchableOpacity>
//         )}
//         {item.text && <Text style={styles.messageText}>{item.text}</Text>}
//         <Text style={styles.timestampText}>
//           {timestamp.toLocaleString()}
//         </Text>
//         {!isUserMessage && (
//           <TouchableOpacity
//             style={styles.replyButton}
//             onPress={() => handleReply(item)}
//           >
//             <Icon name="reply" size={16} color="#FF6F61" />
//           </TouchableOpacity>
//         )}
//       </View>
//     );
//   };

//   return (
//     <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
//       {/* WhatsApp-like Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Icon name="arrow-back" size={24} color="#FFFFFF" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Live Chat</Text>
//       </View>

//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.keyboardAvoidingView}
//       >
//         <FlatList
//           data={messages}
//           renderItem={renderMessage}
//           keyExtractor={(item) => item.id}
//           ref={flatListRef}
//           onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
//           contentContainerStyle={styles.messageList}
//         />

//         {replyingTo && (
//           <View style={styles.replyingToContainer}>
//             <Text style={styles.replyingToText}>Replying to: {replyingTo.text}</Text>
//             <TouchableOpacity onPress={() => setReplyingTo(null)}>
//               <Icon name="close" size={20} color="#FF6F61" />
//             </TouchableOpacity>
//           </View>
//         )}

//         <View style={styles.inputContainer}>
//           <TouchableOpacity onPress={pickImage} style={styles.attachmentButton}>
//             <Icon name="attach-file" size={24} color="#FF6F61" />
//           </TouchableOpacity>
//           <TextInput
//             style={styles.input}
//             placeholder="Type a message"
//             placeholderTextColor="#A0A0A0"
//             value={newMessage}
//             onChangeText={setNewMessage}
//             multiline
//           />
//           {newMessage.trim() && (
//             <TouchableOpacity style={styles.sendButton} onPress={() => sendMessage()}>
//               <Icon name="send" size={24} color="#FFFFFF" />
//             </TouchableOpacity>
//           )}
//         </View>
//       </KeyboardAvoidingView>

//       {/* Full-screen Image Modal */}
//       <Modal
//         visible={!!selectedImage}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setSelectedImage(null)}
//       >
//         <View style={styles.modalContainer}>
//           <TouchableOpacity
//             style={styles.closeModalButton}
//             onPress={() => setSelectedImage(null)}
//           >
//             <Icon name="close" size={30} color="#FFFFFF" />
//           </TouchableOpacity>
//           <Image
//             source={{ uri: selectedImage }}
//             style={styles.fullScreenImage}
//             resizeMode="contain"
//           />
//         </View>
//       </Modal>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#1E2A44',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#2A3B5E',
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     marginLeft: 15,
//   },
//   keyboardAvoidingView: {
//     flex: 1,
//   },
//   messageList: {
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//   },
//   messageContainer: {
//     marginVertical: 5,
//     padding: 10,
//     borderRadius: 10,
//     maxWidth: '75%',
//   },
//   userMessage: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#FF6F61',
//   },
//   otherMessage: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#E5E7EB',
//   },
//   senderText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     marginBottom: 5,
//   },
//   messageText: {
//     fontSize: 16,
//     color: '#FFFFFF',
//   },
//   timestampText: {
//     fontSize: 12,
//     color: '#FFFFFF',
//     alignSelf: 'flex-end',
//     marginTop: 5,
//   },
//   replyToText: {
//     fontSize: 14,
//     color: '#FFFFFF',
//     marginBottom: 5,
//   },
//   messageImage: {
//     width: 200,
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   replyButton: {
//     marginTop: 5,
//   },
//   replyingToContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     padding: 10,
//     borderTopWidth: 1,
//     borderColor: '#DDD',
//   },
//   replyingToText: {
//     flex: 1,
//     fontSize: 14,
//     color: '#555',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     padding: 10,
//     borderTopWidth: 1,
//     borderColor: '#DDD',
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: -2 },
//   },
//   attachmentButton: {
//     padding: 5,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#CCC',
//     borderRadius: 20,
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     marginHorizontal: 10,
//     backgroundColor: '#F9F9F9',
//     fontSize: 16,
//     color: '#1F2937',
//     maxHeight: 100,
//   },
//   sendButton: {
//     backgroundColor: '#FF6F61',
//     borderRadius: 20,
//     padding: 10,
//   },
//   modalContainer: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.9)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   fullScreenImage: {
//     width: '90%',
//     height: '80%',
//   },
//   closeModalButton: {
//     position: 'absolute',
//     top: 40,
//     right: 20,
//     zIndex: 1,
//   },
// });




// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
//   Image,
//   KeyboardAvoidingView,
//   Platform,
//   Modal,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { db, auth } from '../firebaseConfig';
// import {
//   collection,
//   addDoc,
//   query,
//   orderBy,
//   onSnapshot,
//   getDocs,
//   where,
// } from 'firebase/firestore';
// import { onAuthStateChanged } from 'firebase/auth';
// import * as ImagePicker from 'expo-image-picker';
// import * as FileSystem from 'expo-file-system';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// export default function LiveChat({ navigation, route }) {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [replyingTo, setReplyingTo] = useState(null);
//   const [currentUserEmail, setCurrentUserEmail] = useState('');
//   const [userData, setUserData] = useState(route.params?.userData || null);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const flatListRef = useRef(null);

//   // Get authenticated user's email and userData
//   useEffect(() => {
//     const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setCurrentUserEmail(user.email);
//         if (!userData) {
//           const fetchedUserData = { name: user.displayName || 'User', email: user.email };
//           setUserData(fetchedUserData);
//         }
//       } else {
//         navigation.navigate('Login');
//       }
//     });
//     return () => unsubscribeAuth();
//   }, [navigation, userData]);

//   // Fetch messages in real-time and sender names
//   useEffect(() => {
//     const messagesQuery = query(
//       collection(db, 'chats', 'chatId', 'messages'),
//       orderBy('timestamp', 'asc')
//     );
//     const unsubscribe = onSnapshot(
//       messagesQuery,
//       async (snapshot) => {
//         const loadedMessages = await Promise.all(
//           snapshot.docs.map(async (doc) => {
//             const data = doc.data();
//             let senderName = data.sender === currentUserEmail ? userData?.name || 'You' : data.sender;
//             let replyToSender = null;
//             if (data.sender !== currentUserEmail) {
//               try {
//                 const usersRef = collection(db, 'users');
//                 const q = query(usersRef, where('email', '==', data.sender));
//                 const querySnapshot = await getDocs(q);
//                 if (!querySnapshot.empty) {
//                   senderName = querySnapshot.docs[0].data().name || data.sender;
//                 }
//               } catch (error) {
//                 console.error('Error fetching sender name:', error);
//               }
//             }
//             if (data.replyTo) {
//               try {
//                 const replyQuery = query(
//                   collection(db, 'chats', 'chatId', 'messages'),
//                   where('text', '==', data.replyTo)
//                 );
//                 const replySnapshot = await getDocs(replyQuery);
//                 if (!replySnapshot.empty) {
//                   const replyDoc = replySnapshot.docs[0].data();
//                   const replySenderEmail = replyDoc.sender;
//                   const replyUsersRef = collection(db, 'users');
//                   const replyQ = query(replyUsersRef, where('email', '==', replySenderEmail));
//                   const replyQuerySnapshot = await getDocs(replyQ);
//                   replyToSender = replyQuerySnapshot.empty
//                     ? replySenderEmail
//                     : replyQuerySnapshot.docs[0].data().name || replySenderEmail;
//                 }
//               } catch (error) {
//                 console.error('Error fetching reply-to sender:', error);
//               }
//             }
//             return {
//               id: doc.id,
//               ...data,
//               senderName,
//               replyToSender,
//             };
//           })
//         );
//         setMessages(loadedMessages);
//         flatListRef.current?.scrollToEnd({ animated: true });
//       },
//       (error) => {
//         console.error('Firestore snapshot error:', error);
//       }
//     );
//     return () => unsubscribe();
//   }, [currentUserEmail, userData]);

//   // Request media library permissions
//   useEffect(() => {
//     (async () => {
//       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//       if (status !== 'granted') {
//         alert('Permission to access media library is required for image uploads.');
//       }
//     })();
//   }, []);

//   // Send a new message (with optional Base64 image)
//   const sendMessage = async (imageBase64 = null) => {
//     if (!newMessage.trim() && !imageBase64) return;

//     try {
//       await addDoc(collection(db, 'chats', 'chatId', 'messages'), {
//         text: newMessage.trim() || '',
//         imageBase64,
//         sender: currentUserEmail,
//         timestamp: new Date(),
//         replyTo: replyingTo?.text || null,
//       });
//       setNewMessage('');
//       setReplyingTo(null);
//       setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);
//     } catch (error) {
//       console.error('Error sending message:', error);
//       alert('Failed to send message. Please try again.');
//     }
//   };

//   // Handle reply functionality
//   const handleReply = (message) => {
//     console.log('Replying to:', message.text);
//     setReplyingTo(message);
//   };

//   // Upload photo as Base64
//   const pickImage = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: [4, 3],
//         quality: 0.5,
//       });

//       if (!result.canceled) {
//         const imageUri = result.assets[0].uri;
//         const base64 = await FileSystem.readAsStringAsync(imageUri, {
//           encoding: FileSystem.EncodingType.Base64,
//         });
//         sendMessage(`data:image/jpeg;base64,${base64}`);
//       }
//     } catch (error) {
//       console.error('Error converting image to Base64:', error);
//       alert('Failed to upload image. Check console for details.');
//     }
//   };

//   // Render a single message
//   const renderMessage = ({ item }) => {
//     const isUserMessage = item.sender === currentUserEmail;
//     const timestamp = item.timestamp instanceof Date 
//       ? item.timestamp 
//       : new Date(item.timestamp.seconds * 1000);

//     return (
//       <View
//         style={[
//           styles.messageContainer,
//           isUserMessage ? styles.userMessage : styles.otherMessage,
//         ]}
//       >
//         <View style={styles.messageHeader}>
//           <Text style={isUserMessage ? styles.senderTextUser : styles.senderTextOther}>
//             {item.senderName}
//           </Text>
//           {!isUserMessage && (
//             <TouchableOpacity onPress={() => handleReply(item)} style={styles.replyButton}>
//               <Icon name="reply" size={18} color="#FF6F61" />
//             </TouchableOpacity>
//           )}
//         </View>
//         {item.replyTo && (
//           <View style={styles.replyContainer}>
//             <View style={styles.replyBar} />
//             <View style={styles.replyContent}>
//               <Text style={styles.replySender}>
//                 {item.replyToSender || 'Unknown'}
//               </Text>
//               <Text style={styles.replyToText}>{item.replyTo}</Text>
//             </View>
//           </View>
//         )}
//         <View style={styles.messageContent}>
//           {item.imageBase64 && (
//             <TouchableOpacity onPress={() => setSelectedImage(item.imageBase64)}>
//               <Image source={{ uri: item.imageBase64 }} style={styles.messageImage} />
//             </TouchableOpacity>
//           )}
//           {item.text && (
//             <Text style={isUserMessage ? styles.messageTextUser : styles.messageTextOther}>
//               {item.text}
//             </Text>
//           )}
//         </View>
//         <Text style={isUserMessage ? styles.timestampTextUser : styles.timestampTextOther}>
//           {timestamp.toLocaleString()}
//         </Text>
//       </View>
//     );
//   };

//   return (
//     <LinearGradient colors={['#1E2A44', '#2A3B5E']} style={styles.container}>
//       {/* WhatsApp-like Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Icon name="arrow-back" size={24} color="#FFFFFF" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Live Chat</Text>
//       </View>

//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.keyboardAvoidingView}
//       >
//         <FlatList
//           data={messages}
//           renderItem={renderMessage}
//           keyExtractor={(item) => item.id}
//           ref={flatListRef}
//           onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
//           contentContainerStyle={styles.messageList}
//         />

//         {replyingTo && (
//           <View style={styles.replyingToContainer}>
//             <Text style={styles.replyingToText}>Replying to: {replyingTo.senderName}: {replyingTo.text}</Text>
//             <TouchableOpacity onPress={() => setReplyingTo(null)}>
//               <Icon name="close" size={20} color="#FF6F61" />
//             </TouchableOpacity>
//           </View>
//         )}

//         <View style={styles.inputContainer}>
//           <TouchableOpacity onPress={pickImage} style={styles.attachmentButton}>
//             <Icon name="attach-file" size={24} color="#FF6F61" />
//           </TouchableOpacity>
//           <TextInput
//             style={styles.input}
//             placeholder="Type a message"
//             placeholderTextColor="#A0A0A0"
//             value={newMessage}
//             onChangeText={setNewMessage}
//             multiline
//           />
//           {newMessage.trim() && (
//             <TouchableOpacity style={styles.sendButton} onPress={() => sendMessage()}>
//               <Icon name="send" size={24} color="#FFFFFF" />
//             </TouchableOpacity>
//           )}
//         </View>
//       </KeyboardAvoidingView>

//       {/* Full-screen Image Modal */}
//       <Modal
//         visible={!!selectedImage}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setSelectedImage(null)}
//       >
//         <View style={styles.modalContainer}>
//           <TouchableOpacity
//             style={styles.closeModalButton}
//             onPress={() => setSelectedImage(null)}
//           >
//             <Icon name="close" size={30} color="#FFFFFF" />
//           </TouchableOpacity>
//           <Image
//             source={{ uri: selectedImage }}
//             style={styles.fullScreenImage}
//             resizeMode="contain"
//           />
//         </View>
//       </Modal>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#1E2A44',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#2A3B5E',
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     marginLeft: 15,
//   },
//   keyboardAvoidingView: {
//     flex: 1,
//   },
//   messageList: {
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//   },
//   messageContainer: {
//     marginVertical: 5,
//     padding: 10,
//     borderRadius: 10,
//     maxWidth: '75%',
//   },
//   userMessage: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#FF6F61',
//   },
//   otherMessage: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#E5E7EB',
//   },
//   messageHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   senderTextUser: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//     marginBottom: 5,
//   },
//   senderTextOther: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#1F2937',
//     marginBottom: 5,
//   },
//   replyButton: {
//     padding: 5,
//   },
//   messageContent: {
//     marginTop: 5,
//   },
//   messageTextUser: {
//     fontSize: 16,
//     color: '#FFFFFF',
//   },
//   messageTextOther: {
//     fontSize: 16,
//     color: '#1F2937',
//   },
//   timestampTextUser: {
//     fontSize: 12,
//     color: '#FFFFFF',
//     alignSelf: 'flex-end',
//     marginTop: 5,
//   },
//   timestampTextOther: {
//     fontSize: 12,
//     color: '#6B7280',
//     alignSelf: 'flex-end',
//     marginTop: 5,
//   },
//   replyContainer: {
//     flexDirection: 'row',
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 5,
//     padding: 8,
//     marginBottom: 8,
//   },
//   replyBar: {
//     width: 4,
//     backgroundColor: '#FF6F61',
//     borderRadius: 2,
//     marginRight: 8,
//   },
//   replyContent: {
//     flex: 1,
//   },
//   replySender: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#FF6F61',
//   },
//   replyToText: {
//     fontSize: 14,
//     color: '#1F2937', // Changed to dark grey for visibility
//   },
//   messageImage: {
//     width: 200,
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   replyingToContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     padding: 10,
//     borderTopWidth: 1,
//     borderColor: '#DDD',
//   },
//   replyingToText: {
//     flex: 1,
//     fontSize: 14,
//     color: '#555',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     padding: 10,
//     borderTopWidth: 1,
//     borderColor: '#DDD',
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: -2 },
//   },
//   attachmentButton: {
//     padding: 5,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#CCC',
//     borderRadius: 20,
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     marginHorizontal: 10,
//     backgroundColor: '#F9F9F9',
//     fontSize: 16,
//     color: '#1F2937',
//     maxHeight: 100,
//   },
//   sendButton: {
//     backgroundColor: '#FF6F61',
//     borderRadius: 20,
//     padding: 10,
//   },
//   modalContainer: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.9)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   fullScreenImage: {
//     width: '90%',
//     height: '80%',
//   },
//   closeModalButton: {
//     position: 'absolute',
//     top: 40,
//     right: 20,
//     zIndex: 1,
//   },
// });











import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  Modal,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { db, auth } from '../firebaseConfig';
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  getDocs,
  where,
} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function LiveChat({ navigation, route }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [currentUserEmail, setCurrentUserEmail] = useState('');
  const [userData, setUserData] = useState(route.params?.userData || null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const flatListRef = useRef(null);

  // Get authenticated user's email and userData
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUserEmail(user.email);
        if (!userData) {
          const fetchedUserData = { name: user.displayName || 'User', email: user.email };
          setUserData(fetchedUserData);
        }
      } else {
        navigation.navigate('Login');
      }
    });
    return () => unsubscribeAuth();
  }, [navigation, userData]);

  // Fetch messages in real-time and sender names
  useEffect(() => {
    setLoading(true);
    const messagesQuery = query(
      collection(db, 'chats', 'chatId', 'messages'),
      orderBy('timestamp', 'asc')
    );
    const unsubscribe = onSnapshot(
      messagesQuery,
      async (snapshot) => {
        const loadedMessages = await Promise.all(
          snapshot.docs.map(async (doc) => {
            const data = doc.data();
            let senderName = data.sender === currentUserEmail ? userData?.name || 'You' : data.sender;
            let replyToSender = null;
            if (data.sender !== currentUserEmail) {
              try {
                const usersRef = collection(db, 'users');
                const q = query(usersRef, where('email', '==', data.sender));
                const querySnapshot = await getDocs(q);
                if (!querySnapshot.empty) {
                  senderName = querySnapshot.docs[0].data().name || data.sender;
                }
              } catch (error) {
                console.error('Error fetching sender name:', error);
              }
            }
            if (data.replyTo) {
              try {
                const replyQuery = query(
                  collection(db, 'chats', 'chatId', 'messages'),
                  where('text', '==', data.replyTo)
                );
                const replySnapshot = await getDocs(replyQuery);
                if (!replySnapshot.empty) {
                  const replyDoc = replySnapshot.docs[0].data();
                  const replySenderEmail = replyDoc.sender;
                  const replyUsersRef = collection(db, 'users');
                  const replyQ = query(replyUsersRef, where('email', '==', replySenderEmail));
                  const replyQuerySnapshot = await getDocs(replyQ);
                  replyToSender = replyQuerySnapshot.empty
                    ? replySenderEmail
                    : replyQuerySnapshot.docs[0].data().name || replySenderEmail;
                }
              } catch (error) {
                console.error('Error fetching reply-to sender:', error);
              }
            }
            return {
              id: doc.id,
              ...data,
              senderName,
              replyToSender,
            };
          })
        );
        setMessages(loadedMessages);
        setLoading(false);
        flatListRef.current?.scrollToEnd({ animated: true });
      },
      (error) => {
        console.error('Firestore snapshot error:', error);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, [currentUserEmail, userData]);

  // Request media library permissions
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access media library is required for image uploads.');
      }
    })();
  }, []);

  // Send a new message (with optional Base64 image)
  const sendMessage = async (imageBase64 = null) => {
    if (!newMessage.trim() && !imageBase64) return;

    setSending(true);
    try {
      await addDoc(collection(db, 'chats', 'chatId', 'messages'), {
        text: newMessage.trim() || '',
        imageBase64,
        sender: currentUserEmail,
        timestamp: new Date(),
        replyTo: replyingTo?.text || null,
      });
      setNewMessage('');
      setReplyingTo(null);
      setTimeout(() => flatListRef.current?.scrollToEnd({ animated: true }), 100);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  // Handle reply functionality
  const handleReply = (message) => {
    console.log('Replying to:', message.text);
    setReplyingTo(message);
  };

  // Upload photo as Base64
  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.5,
      });

      if (!result.canceled) {
        const imageUri = result.assets[0].uri;
        const base64 = await FileSystem.readAsStringAsync(imageUri, {
          encoding: FileSystem.EncodingType.Base64,
        });
        sendMessage(`data:image/jpeg;base64,${base64}`);
      }
    } catch (error) {
      console.error('Error converting image to Base64:', error);
      alert('Failed to upload image. Check console for details.');
    }
  };

  // Render a single message
  const renderMessage = ({ item }) => {
    const isUserMessage = item.sender === currentUserEmail;
    const timestamp = item.timestamp instanceof Date 
      ? item.timestamp 
      : new Date(item.timestamp.seconds * 1000);

    return (
      <View
        style={[
          styles.messageContainer,
          isUserMessage ? styles.userMessage : styles.otherMessage,
        ]}
      >
        <View style={styles.messageHeader}>
          <Text style={isUserMessage ? styles.senderTextUser : styles.senderTextOther}>
            {item.senderName}
          </Text>
          {!isUserMessage && (
            <TouchableOpacity onPress={() => handleReply(item)} style={styles.replyButton}>
              <Icon name="reply" size={18} color="#25D366" />
            </TouchableOpacity>
          )}
        </View>
        {item.replyTo && (
          <View style={styles.replyContainer}>
            <View style={styles.replyBar} />
            <View style={styles.replyContent}>
              <Text style={styles.replySender}>
                {item.replyToSender || 'Unknown'}
              </Text>
              <Text style={styles.replyToText}>{item.replyTo}</Text>
            </View>
          </View>
        )}
        <View style={styles.messageContent}>
          {item.imageBase64 && (
            <TouchableOpacity onPress={() => setSelectedImage(item.imageBase64)}>
              <Image source={{ uri: item.imageBase64 }} style={styles.messageImage} />
            </TouchableOpacity>
          )}
          {item.text && (
            <Text style={isUserMessage ? styles.messageTextUser : styles.messageTextOther}>
              {item.text}
            </Text>
          )}
        </View>
        <Text style={isUserMessage ? styles.timestampTextUser : styles.timestampTextOther}>
          {timestamp.toLocaleString()}
        </Text>
      </View>
    );
  };

  return (
    <LinearGradient colors={['#ECE5DD', '#ECE5DD']} style={styles.container}>
      {/* WhatsApp-like Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={40} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Live Chat</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#25D366" />
            <Text style={styles.loadingText}>Loading messages...</Text>
          </View>
        ) : (
          <FlatList
            data={messages}
            renderItem={renderMessage}
            keyExtractor={(item) => item.id}
            ref={flatListRef}
            onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
            contentContainerStyle={styles.messageList}
          />
        )}

        {replyingTo && (
          <View style={styles.replyingToContainer}>
            <Text style={styles.replyingToText}>Replying to: {replyingTo.senderName}: {replyingTo.text}</Text>
            <TouchableOpacity onPress={() => setReplyingTo(null)}>
              <Icon name="close" size={20} color="#25D366" />
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={pickImage} style={styles.attachmentButton}>
            <Icon name="attach-file" size={24} color="#25D366" />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Type a message"
            placeholderTextColor="#A0A0A0"
            value={newMessage}
            onChangeText={setNewMessage}
            multiline
            editable={!sending}
          />
          {newMessage.trim() && (
            <TouchableOpacity
              style={[styles.sendButton, sending && styles.sendButtonDisabled]}
              onPress={() => sendMessage()}
              disabled={sending}
            >
              {sending ? (
                <ActivityIndicator size="small" color="#FFFFFF" />
              ) : (
                <Icon name="send" size={24} color="#FFFFFF" />
              )}
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>

      {/* Full-screen Image Modal */}
      <Modal
        visible={!!selectedImage}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setSelectedImage(null)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeModalButton}
            onPress={() => setSelectedImage(null)}
          >
            <Icon name="close" size={30} color="#FFFFFF" />
          </TouchableOpacity>
          <Image
            source={{ uri: selectedImage }}
            style={styles.fullScreenImage}
            resizeMode="contain"
          />
        </View>
      </Modal>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#075E54', // WhatsApp header green
    paddingVertical: 25,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#064C44',
    // justifyContent:"center"
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 15,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  messageList: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  messageContainer: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '75%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6', // WhatsApp user message green
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF', // WhatsApp other message white
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  senderTextUser: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000', // Black for WhatsApp-like text
    marginBottom: 5,
  },
  senderTextOther: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
  },
  replyButton: {
    padding: 5,
  },
  messageContent: {
    marginTop: 5,
  },
  messageTextUser: {
    fontSize: 16,
    color: '#000000',
  },
  messageTextOther: {
    fontSize: 16,
    color: '#000000',
  },
  timestampTextUser: {
    fontSize: 12,
    color: '#666666', // WhatsApp timestamp grey
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  timestampTextOther: {
    fontSize: 12,
    color: '#666666',
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  replyContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.05)', // WhatsApp reply background
    borderRadius: 5,
    padding: 8,
    marginBottom: 8,
  },
  replyBar: {
    width: 4,
    backgroundColor: '#999999', // WhatsApp reply bar grey
    borderRadius: 2,
    marginRight: 8,
  },
  replyContent: {
    flex: 1,
  },
  replySender: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#34B7F1', // WhatsApp reply sender blue
  },
  replyToText: {
    fontSize: 14,
    color: '#000000',
  },
  messageImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#000000',
    marginTop: 10,
    fontSize: 16,
  },
  replyingToContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0', // WhatsApp replying-to background
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#DDD',
  },
  replyingToText: {
    flex: 1,
    fontSize: 14,
    color: '#000000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0', // WhatsApp input background
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#DDD',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: -2 },
  },
  attachmentButton: {
    padding: 5,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    color: '#000000',
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: '#25D366', // WhatsApp send button teal
    borderRadius: 20,
    padding: 10,
  },
  sendButtonDisabled: {
    backgroundColor: '#A5D6A7', // Lighter teal when disabled
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenImage: {
    width: '90%',
    height: '80%',
  },
  closeModalButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
  },
});
