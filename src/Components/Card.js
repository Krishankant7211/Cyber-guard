import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity,ArrowRightIcon} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const placeholderImage = require('./assets/no-image-placeholder.png');

const Card = ({ item ,navigation}) => {
  return (
    <View style={styles.card}>
      {item.urlToImage && <Image source={{ uri: item.urlToImage }} style={styles.image} />}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>

      <View style={{marginVertical:7, flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.author}>{item.publishedAt.toLocaleString('en-GB',{timeZone:'UTC'})}</Text>
      </View>

      <TouchableOpacity style={styles.readbox} onPress={() => navigation.navigate("NewsViewer",{url:item.url,})}>
        <Text style={{color:'white',fontWeight:500}}>Read More</Text>
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
    color:'black'
  },
  description: {
    fontSize: 14,
    marginVertical: 3,
    color: '#666',
  },
  author: {
    margin:5,
    fontWeight:'600',
    fontSize: 14,
    color: '#505050'
  },
 sourceContainer: {
    position: 'absolute',
    top: 16, // top-4
    right: 16, // right-4
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
      padding:8,
      flexDirection:'row',
      shadowColor:'#000000',
      elevation:6,
      shadowOpacity: 0.8,
      backgroundColor:'#40ACFF',
      width:'25%', 
      borderRadius: 6,
  }
});

export default Card;