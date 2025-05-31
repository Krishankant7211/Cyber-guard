import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';

const NewsViewer = ( {navigation, route} ) => { // Correct destructuring
  const { url } = route.params;

  return (
    <WebView source={{ uri: url }} style={{ marginTop:'13%',flex: 1 }} />
  );
};

export default NewsViewer;

const styles = StyleSheet.create({});