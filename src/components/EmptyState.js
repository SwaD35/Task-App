import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONT_SIZES, SPACING } from "../utils/constants";

const EmptyState = ({
  icon = "clipboard-outline",
  title = "No tasks yet!",
  subtitle = "Add a task above to get started",
  iconSize = 64,
  iconColor = COLORS.gray[300],
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={iconSize} color={iconColor} />
      </View>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SPACING.xxxl,
    backgroundColor: COLORS.white,
    borderRadius: 24,
    margin: SPACING.xl,
    borderWidth: 1,
    borderColor: COLORS.gray[200],
    shadowColor: COLORS.gray[400],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  iconContainer: {
    marginBottom: SPACING.xl,
    opacity: 1,
    backgroundColor: COLORS.white,
    borderRadius: 40,
    padding: 24,
    shadowColor: COLORS.gray[400],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  title: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: "600",
    color: COLORS.gray[700],
    marginBottom: SPACING.md,
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "San Francisco" : "Roboto",
  },
  subtitle: {
    fontSize: FONT_SIZES.md,
    color: COLORS.gray[400],
    textAlign: "center",
    lineHeight: 24,
    fontWeight: "400",
    fontFamily: Platform.OS === "ios" ? "San Francisco" : "Roboto",
  },
});

export default EmptyState;
