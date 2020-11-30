import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marg: 10,
    textAlign: 'center',
  },
});

export default function App() {
  return (
    <>
      <View style={styles.Container}>
        <Text style={styles.Title}>Hellow</Text>
      </View>
    </>
  );
};
