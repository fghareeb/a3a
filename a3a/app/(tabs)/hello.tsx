// app/hello.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Hello() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});