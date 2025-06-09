// App Constants
export const APP_NAME = "My Tasks";

// Notification Settings
export const NOTIFICATION_DELAYS = {
  SHORT: 10, // 10 seconds for testing
  MEDIUM: 60, // 1 minute
  LONG: 300, // 5 minutes
};

// Colors
export const COLORS = {
  primary: "#007bff",
  success: "#4CAF50",
  danger: "#F44336",
  warning: "#FF9800",
  info: "#2196F3",
  light: "#f8f9fa",
  dark: "#212529",
  gray: {
    100: "#f8f9fa",
    200: "#e9ecef",
    300: "#dee2e6",
    400: "#ced4da",
    500: "#adb5bd",
    600: "#6c757d",
    700: "#495057",
    800: "#343a40",
    900: "#212529",
  },
  white: "#ffffff",
  black: "#000000",
};

// Dimensions
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

// Font Sizes
export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 28,
  jumbo: 32,
};

// Animation Durations
export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
};

// Task Status
export const TASK_STATUS = {
  PENDING: "pending",
  COMPLETED: "completed",
};

// Storage Keys
export const STORAGE_KEYS = {
  TASKS: "@MyTasks:tasks",
  SETTINGS: "@MyTasks:settings",
};
