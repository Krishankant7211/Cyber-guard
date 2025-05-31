import { StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator, RefreshControl, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import { MagnifyingGlassIcon } from 'react-native-heroicons/solid';

const newslogo = require('../Assets/logo.png');

const News = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [select, setSelect] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const categories = [
    { id: 1, name: 'Top Headlines', query: 'cybersecurity' },
    { id: 2, name: 'AI', query: 'cybersecurity AI OR artificial intelligence' },
    { id: 3, name: 'Threats', query: 'cybersecurity threat OR phishing' },
    { id: 4, name: 'Technology', query: 'cybersecurity technology OR innovation' },
    { id: 5, name: 'Science', query: 'cybersecurity science OR research' },
  ];

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        height: 85,
        shadowColor: '#0198E3',
        shadowOpacity: 0.6,
        elevation: 5,
        backgroundColor: 'white',
       
      },
      headerTintColor: '#233FCC',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 30,
      },
    });
  }, [navigation]);

  const getData = async (categoryQuery) => {
    try {
      setError(null);
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(categoryQuery)}&apiKey=b692d86a14df41b88a090565a9f33b26`
      );
      const result = await response.json();
      if (result.status === 'ok' && result.articles) {
        setData(result.articles);
        if (result.articles.length === 0) {
          setError('No new articles found for this category');
        }
      } else {
        setError('Failed to fetch news articles');
      }
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('An error occurred while fetching news');
    } finally {
      setLoading(false);
      setTimeout(() => {
        setRefreshing(false);
      }, 500);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    setData([]);
    getData(categories[select].query);
  };

  useEffect(() => {
    setSelect(0);
    getData(categories[0].query);
  }, []);

  useEffect(() => {
    if (select !== null) {
      setData([]);
      getData(categories[select].query);
    }
  }, [select]);

  if (loading && !refreshing) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={50} color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Category Tabs */}
      <View style={styles.categoryContainer}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                styles.categoryButton,
                index === select ? styles.selectedCategory : styles.unselectedCategory,
              ]}
              onPress={() => setSelect(index)}
            >
              <Text
                style={
                  index === select ? styles.selectedCategoryText : styles.unselectedCategoryText
                }
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          initialNumToRender={5}
          windowSize={5}
        />
      </View>

      {/* News List with RefreshControl */}
      <FlatList
        data={data}
        renderItem={({ item, index }) => <Card item={item} navigation={navigation} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        initialNumToRender={10}
        windowSize={5}
        contentContainerStyle={styles.newsList}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#40ACFF']}
            tintColor="#40ACFF"
          />
        }
        ListEmptyComponent={
          error ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
              <TouchableOpacity
                style={styles.retryButton}
                onPress={() => getData(categories[select].query)}
              >
                <Text style={styles.retryButtonText}>Retry</Text>
              </TouchableOpacity>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7F0FC',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D7F0FC',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#D7F0FC',
  },
  errorText: {
    fontSize: 16,
    color: '#B91C1C',
    marginBottom: 16,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: '#40ACFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
  },
  categoryList: {
    paddingVertical: 4,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 12,
    borderRadius: 10,
    shadowColor: '#000000',
    elevation: 9,
    shadowOpacity: 0.8,
    backgroundColor: '#40ACFF',
  },
  selectedCategory: {
    backgroundColor: '#233FCC',
    borderColor:'red',
    borderWidth:1
  },
  unselectedCategory: {
    backgroundColor: '#E5E7EB',
  },
  selectedCategoryText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  unselectedCategoryText: {
    color: '#4B5563',
    fontSize: 15,
    fontWeight: 'normal',
  },
  newsList: {
    paddingBottom: 16,
  },
});