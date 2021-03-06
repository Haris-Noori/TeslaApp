/**
 * Tesla Clone React Native App
 * Author: M.Haris Noori
 * https://haris-noori.github.io
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, } from 'react-native';
import CarsList from './components/CarsList';
import Header from './components/Header';

function App() {
  
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default App;
