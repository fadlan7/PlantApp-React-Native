import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Home Screen</Text>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
});
