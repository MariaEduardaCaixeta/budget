import { Button } from '@/components/Button';
import { Icon } from '@/components/icons';
import { colors } from '@/theme/colors';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [loaded] = useFonts({
    'Lato-Regular': require('./src/assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./src/assets/fonts/Lato-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start teste on your app!</Text>
      <StatusBar style="auto" />
      <Icon iconName="check" iconSize={50} />
      <Button label="Press me" iconName="plus" labelColor={colors.purple.base} iconColor='#000' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
