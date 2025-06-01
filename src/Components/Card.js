import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const NoImage = require('../Assets/noimage.jpg');

const Card = ({ item, navigation }) => {
  return (
    <View style={styles.card}>
      <Image
        source={item.urlToImage ? { uri: item.urlToImage } : NoImage}
        style={styles.image}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>

      <View style={styles.infoContainer}>
        <View style={styles.authorContainer}>
          <Text style={styles.author}>{item.author || 'Unknown Author'}</Text>
        </View>
        <Text style={styles.date}>
          {new Date(item.publishedAt).toLocaleString('en-GB', { timeZone: 'UTC' })}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.readbox}
        onPress={() => navigation.navigate('NewsViewer', { url: item.url })}
      >
        <Text style={styles.readboxText}>Read More</Text>
      </TouchableOpacity>

      <View style={styles.sourceContainer}>
        <Text style={styles.sourceText}>{item.source.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#018AD8',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'black',
  },
  description: {
    fontSize: 14,
    marginVertical: 3,
    color: '#666',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 7,
    alignItems: 'flex-start',
  },
  authorContainer: {
    flex: 1,
    marginRight: 10,
  },
  author: {
    fontWeight: '600',
    fontSize: 14,
    color: '#505050',
  },
  date: {
    fontWeight: '600',
    fontSize: 14,
    color: '#505050',
    textAlign: 'right',
  },
  sourceContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#DE5151',
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  sourceText: {
    fontSize: 12,
    color: '#fff',
    paddingVertical: 4,
  },
  readbox: {
    padding: 8,
    flexDirection: 'row',
    shadowColor: '#000000',
    elevation: 6,
    shadowOpacity: 0.8,
    backgroundColor: '#233FCC',
    width: '25%',
    borderRadius: 6,
  },
  readboxText: {
    color: 'white',
    fontWeight: '500',
  },
});

export default Card;