import React, { useEffect, useRef } from "react";
import { View, Text, Animated, Easing, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONT_SIZES, APP_NAME } from "../utils/constants";

const LoadingScreen = ({ message = "Loading...", showLogo = true }) => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const pulseValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const spinAnimation = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseValue, {
          toValue: 1.2,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );
    spinAnimation.start();
    pulseAnimation.start();
    return () => {
      spinAnimation.stop();
      pulseAnimation.stop();
    };
  }, [spinValue, pulseValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {showLogo && (
          <Animated.View
            style={[
              styles.logoContainer,
              { transform: [{ scale: pulseValue }] },
            ]}
          >
            <Ionicons
              name="clipboard-outline"
              size={80}
              color={COLORS.primary}
            />
          </Animated.View>
        )}
        <Text style={styles.appName}>{APP_NAME}</Text>
        <View style={styles.loadingContainer}>
          <Animated.View
            style={[styles.spinner, { transform: [{ rotate: spin }] }]}
          >
            <Ionicons name="refresh-outline" size={32} color={COLORS.primary} />
          </Animated.View>
          <Text style={styles.loadingText}>{message}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Organizing your tasks...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  logoContainer: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 100,
    backgroundColor: `${COLORS.primary}10`,
  },
  appName: {
    fontSize: FONT_SIZES.xxxl,
    fontWeight: "bold",
    color: COLORS.dark,
    marginBottom: 40,
    textAlign: "center",
  },
  loadingContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  spinner: {
    marginBottom: 16,
  },
  loadingText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.gray[600],
    textAlign: "center",
  },
  footer: {
    paddingBottom: 50,
    alignItems: "center",
  },
  footerText: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.gray[500],
    fontStyle: "italic",
  },
});

export default LoadingScreen;
