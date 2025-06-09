import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SPACING, FONT_SIZES } from "../utils/constants";

const TaskItem = ({ task, onToggleComplete, onDelete, showTime = true }) => {
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: SPACING.lg,
    marginVertical: SPACING.xs,
    marginHorizontal: SPACING.xl,
    borderRadius: 12,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  completedContainer: {
    backgroundColor: COLORS.gray[50],
    opacity: 0.8,
  },
  checkbox: {
    marginRight: SPACING.md,
    padding: SPACING.xs,
  },
  content: {
    flex: 1,
    paddingRight: SPACING.md,
  },
  taskText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.dark,
    lineHeight: 22,
    marginBottom: SPACING.xs,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: COLORS.gray[600],
  },
  timeText: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.gray[500],
  },
  deleteButton: {
    padding: SPACING.sm,
    borderRadius: 8,
  },
});

export default TaskItem;
