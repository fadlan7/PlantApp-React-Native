import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const DetectScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Detect Screen</Text>
    </ScrollView>
  );
};

export default DetectScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
});
