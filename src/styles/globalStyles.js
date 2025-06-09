import { StyleSheet } from "react-native";
import { COLORS, SPACING, FONT_SIZES } from "../utils/constants";

export const globalStyles = StyleSheet.create({
  // Container Styles
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  // Text Styles
  title: {
    fontSize: FONT_SIZES.xxxl,
    fontWeight: "bold",
    color: COLORS.dark,
  },
  subtitle: {
    fontSize: FONT_SIZES.lg,
    fontWeight: "600",
    color: COLORS.gray[600],
  },
  bodyText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.dark,
    lineHeight: 22,
  },
  caption: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.gray[600],
  },

  // Button Styles
  button: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.md,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: COLORS.gray[200],
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryButtonText: {
    color: COLORS.dark,
    fontSize: FONT_SIZES.md,
    fontWeight: "600",
  },

  // Input Styles
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray[300],
    borderRadius: 12,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    fontSize: FONT_SIZES.md,
    backgroundColor: COLORS.white,
  },
  inputFocused: {
    borderColor: COLORS.primary,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },

  // Card Styles
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: SPACING.lg,
    marginVertical: SPACING.xs,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

  // Layout Styles
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  spaceAround: {
    justifyContent: "space-around",
  },
  spaceEvenly: {
    justifyContent: "space-evenly",
  },

  // Spacing Helpers
  mt1: { marginTop: SPACING.xs },
  mt2: { marginTop: SPACING.sm },
  mt3: { marginTop: SPACING.md },
  mt4: { marginTop: SPACING.lg },
  mb1: { marginBottom: SPACING.xs },
  mb2: { marginBottom: SPACING.sm },
  mb3: { marginBottom: SPACING.md },
  mb4: { marginBottom: SPACING.lg },
  mx1: { marginHorizontal: SPACING.xs },
  mx2: { marginHorizontal: SPACING.sm },
  mx3: { marginHorizontal: SPACING.md },
  mx4: { marginHorizontal: SPACING.lg },
  my1: { marginVertical: SPACING.xs },
  my2: { marginVertical: SPACING.sm },
  my3: { marginVertical: SPACING.md },
  my4: { marginVertical: SPACING.lg },

  // Padding Helpers
  p1: { padding: SPACING.xs },
  p2: { padding: SPACING.sm },
  p3: { padding: SPACING.md },
  p4: { padding: SPACING.lg },
  px1: { paddingHorizontal: SPACING.xs },
  px2: { paddingHorizontal: SPACING.sm },
  px3: { paddingHorizontal: SPACING.md },
  px4: { paddingHorizontal: SPACING.lg },
  py1: { paddingVertical: SPACING.xs },
  py2: { paddingVertical: SPACING.sm },
  py3: { paddingVertical: SPACING.md },
  py4: { paddingVertical: SPACING.lg },

  // Shadow Styles
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lightShadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
});
