import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import HomeScreen from "./src/screens/HomeScreen";
import SplashScreenComponent from "./src/screens/SplashScreen";


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    async function prepare() {
      try {
        // Simulate app loading time
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Mark app as ready
        setIsAppReady(true);
      } catch (e) {
        console.warn(e);
        setIsAppReady(true);
      } finally {
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  if (!isAppReady) {
    return null;
  }

  if (showSplash) {
    return (
      <View style={styles.container}>
        <SplashScreenComponent onFinish={handleSplashFinish} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
