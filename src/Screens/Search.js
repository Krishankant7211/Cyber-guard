import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import Card from '../Components/Card';

const Search = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);

  const searchNews = async (text) => {
    setSearchText(text);
    if (text.length > 2) {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=b692d86a14df41b88a090565a9f33b26&q=${text}`
        );
        const result = await response.json();
        setData(result.articles || []);
      } catch (error) {
        console.error('Error fetching news:', error);
        setData([]);
      }
    } else {
      setData([]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon color={'white'} size={18} />
        </TouchableOpacity>
        <TextInput
          placeholder="Enter your query...."
          value={searchText}
          placeholderTextColor={'white'}
          onChangeText={(text) => searchNews(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item, index }) => (
            <Card item={item} navigation={navigation} index={index} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7F0FC',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#40ACFF',
    padding: 10,
    paddingTop: 40, // Adjust for status bar
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: '#fff',
    fontSize: 16,
    padding: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 8,
  },
  listContainer: {
    flex: 1,
    padding: 10,
    marginBottom: 16,
  },
});