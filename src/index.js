import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    margin: 10,
    textAlign: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Hellow</Text>
    </View>
  );
}
