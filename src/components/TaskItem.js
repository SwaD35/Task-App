import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SPACING, FONT_SIZES } from "../utils/constants";

const TaskItem = ({ task, onToggleComplete, onDelete, onEdit, showTime = true }) => {
  const handleDelete = () => {
    Alert.alert(
      "Delete Task",
      `Are you sure you want to delete "${task.text}"?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => onDelete(task.id),
        },
      ]
    );
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now - date) / (1000 * 60 * 60);
    if (diffInHours < 1) {
      const minutes = Math.floor((now - date) / (1000 * 60));
      return minutes <= 0 ? "Just now" : `${minutes}m ago`;
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}h ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
    <View
      style={[styles.container, task.completed && styles.completedContainer]}
    >
      <View style={styles.verticalBar} />
      <TouchableOpacity
        onPress={() => onToggleComplete(task.id)}
        style={styles.checkbox}
        activeOpacity={0.7}
      >
        <Ionicons
          name={task.completed ? "checkmark-circle" : "ellipse-outline"}
          size={26}
          color={task.completed ? COLORS.success : COLORS.gray[400]}
        />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={[styles.taskText, task.completed && styles.completedText]}>
          {task.text}
        </Text>
        {showTime && (
          <Text style={styles.timeText}>
            Created {formatTime(task.createdAt)}
            {task.completedAt && ` • Completed ${formatTime(task.completedAt)}`}
          </Text>
        )}
      </View>
      <TouchableOpacity
        onPress={handleDelete}
        style={styles.deleteButton}
        activeOpacity={0.7}
      >
        <Ionicons name="trash-outline" size={20} color={COLORS.danger} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onEdit && onEdit(task)}
        style={styles.editButton}
        activeOpacity={0.7}
      >
        <Ionicons name="create-outline" size={20} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.xl,
    marginVertical: SPACING.xs,
    marginHorizontal: SPACING.xl,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.gray[200],
    shadowColor: COLORS.gray[400],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  completedContainer: {
    backgroundColor: COLORS.gray[100],
    opacity: 0.7,
  },
  verticalBar: {
    width: 8,
    height: "100%",
    borderRadius: 8,
    backgroundColor: "#B5EAD7", // pastel green accent
    marginRight: SPACING.lg,
  },
  checkbox: {
    marginRight: SPACING.md,
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.gray[100],
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    paddingRight: SPACING.md,
  },
  taskText: {
    fontSize: FONT_SIZES.lg,
    color: COLORS.dark,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: Platform.OS === "ios" ? "San Francisco" : "Roboto",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: COLORS.gray[400],
    fontWeight: "400",
  },
  timeText: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.gray[400],
    marginTop: 2,
    fontStyle: "italic",
  },
  deleteButton: {
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.gray[100],
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 4,
  },
  editButton: {
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.gray[100],
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 4,
  },
});

export default TaskItem;
