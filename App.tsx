import { Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView edges={['top']} style={{ flex: 1 }}>
      <Text>hello world</Text>
    </SafeAreaView>
  );
};

export default App;
