import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import Counter from '../../src/Counter';
import CheckIn from '../../src/CheckIn';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Redux Demo</Text>
      <Counter />
      <CheckIn />
    </View>
  );
}

onst styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});








