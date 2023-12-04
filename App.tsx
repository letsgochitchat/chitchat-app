import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import MainNavigator from './src/navigation/MainNavigator';

const App = () => {
  return (
    <>
      <StatusBar />
      <View style={styles.root}>
        <MainNavigator />
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
});
