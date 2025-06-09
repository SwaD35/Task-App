import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SPACING, FONT_SIZES } from "../utils/constants";

const TaskInput = ({ onAddTask, disabled = false, initialValue = "" }) => {
  const [inputText, setInputText] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);

  // Update inputText if initialValue changes (for editing)
  useEffect(() => {
    setInputText(initialValue);
  }, [initialValue]);

  const handleAddTask = () => {
    if (inputText.trim() === "") {
      Alert.alert("Error", "Please enter a task!");
      return;
    }
    if (inputText.trim().length > 200) {
      Alert.alert(
        "Error",
        "Task is too long. Please keep it under 200 characters."
      );
      return;
    }
    onAddTask(inputText.trim());
    setInputText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.textInput,
          isFocused && styles.textInputFocused,
          disabled && styles.textInputDisabled,
        ]}
        placeholder="Enter a new task..."
        placeholderTextColor={COLORS.gray[500]}
        value={inputText}
        onChangeText={setInputText}
        onSubmitEditing={handleAddTask}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        multiline={false}
        maxLength={200}
        editable={!disabled}
        returnKeyType="done"
        blurOnSubmit={true}
      />
      <TouchableOpacity
        style={[styles.addButton, disabled && styles.addButtonDisabled]}
        onPress={handleAddTask}
        disabled={disabled}
        activeOpacity={0.7}
      >
        <Ionicons
          name="add"
          size={24}
          color={disabled ? COLORS.gray[500] : COLORS.white}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.lg,
    backgroundColor: COLORS.white,
    alignItems: "center",
    gap: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray[200],
  },
  textInput: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderColor: COLORS.gray[300],
    borderRadius: 12,
    paddingHorizontal: SPACING.lg,
    fontSize: FONT_SIZES.md,
    backgroundColor: COLORS.gray[100],
    color: COLORS.dark,
  },
  textInputFocused: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  textInputDisabled: {
    backgroundColor: COLORS.gray[200],
    color: COLORS.gray[500],
  },
  addButton: {
    backgroundColor: COLORS.primary,
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  addButtonDisabled: {
    backgroundColor: COLORS.gray[300],
    shadowOpacity: 0,
    elevation: 0,
  },
});

export default TaskInput;
