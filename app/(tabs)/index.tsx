import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckIn from '../../src/CheckIn';
import Counter from '../../src/Counter';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Redux Demo</Text>
      <Counter />
      <CheckIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});
