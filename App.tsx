// import React, { useEffect } from 'react';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
// import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './global.css';
import MainApp from './src/main-app';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import AuthProvider from './src/providers/auth-provider';

// SplashScreen.preventAutoHideAsync();

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  // const [loaded] = useFonts({
  //   SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  // });

  // useEffect(() => {
  // if (loaded) {
  //   SplashScreen.hideAsync();
  // }

  // const timeoutId = setTimeout(() => {
  //   SplashScreen.hideAsync();
  // }, 5000);

  // return () => clearTimeout(timeoutId);
  // }, [loaded]);
  // }, []);

  // if (!loaded) {
  //   return null;
  // }

  const isDark = colorScheme.colorScheme === 'dark';
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
            <AuthProvider>
              <MainApp />
            </AuthProvider>
          </ThemeProvider>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
export default App;
