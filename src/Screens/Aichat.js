import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from 'react-native';
import { GoogleGenerativeAI } from '@google/generative-ai';

const Aibg = require('../Assets/background1.png');

const GEMINI_API_KEY = 'AIzaSyDsE7hkDFg6NBqEkLz5dcd9_gOxNthQSbk'; // Replace with your actual API key

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

const Aichat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollViewRef = useRef();

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage = { sender: 'user', text: inputText };
    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setLoading(true);

    try {
      const chat = model.startChat({
        history: messages.map((msg) => ({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }],
        })),
      });
      const result = await chat.sendMessage(inputText);
      const response = await result.response.text();
      const aiMessage = { sender: 'ai', text: response };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = { sender: 'ai', text: 'Sorry, something went wrong!' };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Aibg} style={styles.background} resizeMode="cover">
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        >
          <View style={styles.header}>
            <Text style={styles.headerText}>AI CHAT BOT</Text>
            <TouchableOpacity style={styles.clearButton} onPress={clearChat}>
              <Text style={styles.clearButtonText}>Clear</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            style={styles.chatArea}
            ref={scrollViewRef}
            onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
            contentContainerStyle={{ paddingBottom: 10 }}
          >
            {messages.map((msg, index) => (
              <View
                key={index}
                style={[
                  styles.messageContainer,
                  msg.sender === 'user' ? styles.userMessage : styles.aiMessage,
                ]}
              >
                <Text style={styles.messageText}>{msg.text}</Text>
              </View>
            ))}
            {loading && (
              <ActivityIndicator size="large" color="#263CBD" style={styles.loader} />
            )}
          </ScrollView>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Type your query here..."
              placeholderTextColor="#888"
              editable={!loading}
            />
            <TouchableOpacity style={styles.sendButton} onPress={sendMessage} disabled={loading}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  header: {
    backgroundColor: '#263CBD',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 20,
    shadowColor: '#2F2F2F',
  },
  headerText: {
    marginTop: 25,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  clearButton: {
    backgroundColor: '#FFF',
    marginTop: 25,
    padding: 5,
    borderRadius: 10,
  },
  clearButtonText: {
    color: '#2f2f2f',
    fontWeight: 'bold',
  },
  chatArea: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: '70%',
  },
  userMessage: {
    backgroundColor: '#211BD3',
    alignSelf: 'flex-end',
    elevation: 10,
    shadowColor: 'blue',
    borderColor: '#1C17BA',
    borderWidth: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
  },
  aiMessage: {
    backgroundColor: '#539BFF',
    alignSelf: 'flex-start',
    elevation: 20,
    shadowColor: '#018AD8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
  },
  messageText: {
    color: '#FFF',
    fontSize: 18,
  },
  loader: {
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderColor: '#DDD',
    paddingBottom: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2f2f2f',
    padding: 10,
    fontSize: 16,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#263CBD',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Aichat;