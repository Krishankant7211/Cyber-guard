import { StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator, RefreshControl, Image, SafeAreaView, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const newslogo = require('../Assets/finalogo.png');
const newsbg = require('../Assets/background1.png');

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

  const getData = async (categoryQuery) => {
    try {
      setError(null);
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(categoryQuery)}&apiKey=b692d86a14df41b88a090565a9f33b26`
      );
      const result = await response.json();
      if (result.status === 'ok' && result.articles) {
        // Sort articles by publishedAt date in descending order (most recent first)
        const sortedArticles = result.articles.sort((a, b) => 
          new Date(b.publishedAt) - new Date(a.publishedAt)
        );
        setData(sortedArticles);
        if (sortedArticles.length === 0) {
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
      <SafeAreaView style={styles.loading}>
        <ActivityIndicator size={50} color="#0000ff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Logo View with Background Image */}
      <ImageBackground source={newsbg} resizeMode="cover">
        <Image source={newslogo} style={styles.logo} />
      </ImageBackground>

      {/* News Title View with Search Icon */}
      <View style={styles.newsTitleContainer}>
        <Text style={styles.newsTitleText}>News</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <MaterialIcons name="search" size={32} color="#000" style={styles.searchIcon} />
        </TouchableOpacity>
      </View>

      {/* Content Below Banner */}
      <View style={styles.contentContainer}>
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
    </SafeAreaView>
  );
};

export default News;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: '8%',
    backgroundColor: '#263CBD', // Background color for the status bar area (above banner)
  },
  logo: {
    height: 90,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15,
    shadowColor: '#018AD8',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  newsTitleContainer: {
    backgroundColor: '#fff', // White background
    paddingHorizontal: 16,
    flexDirection: 'row', // Use row to place text and icon side by side
    justifyContent: 'space-between', // Space between text and icon
    alignItems: 'center', // Vertically center content
  },
  newsTitleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#233FCC',
    textAlign: 'left',
  },
  searchIcon: {
    marginRight: 14,
    color: '#233FCC',
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#D7F0FC',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
    paddingVertical: 5,
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
    borderColor: '#7F7F7F',
    borderWidth: 0.2,
    shadowColor: '#018AD8',
    elevation: 4,
    shadowOpacity: 0.8,
    backgroundColor: '#40ACFF',
  },
  selectedCategory: {
    backgroundColor: '#233FCC',
    borderColor: 'red',
    borderWidth: 1,
  },
  unselectedCategory: {
    backgroundColor: '#F0F0F0',
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