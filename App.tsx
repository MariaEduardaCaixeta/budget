import { Home } from '@/app/Home';
import { useFonts } from 'expo-font';
import React from 'react';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [loaded] = useFonts({
    'Lato-Regular': require('./src/assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./src/assets/fonts/Lato-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Home />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
