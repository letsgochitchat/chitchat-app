import React from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <WebView source={{ uri: 'https://naver.com' }} />
    </SafeAreaView>
  );
};

export default HomeScreen;
