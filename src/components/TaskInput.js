import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
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
    borderBottomWidth: 0,
    borderRadius: 24,
    margin: SPACING.md,
    shadowColor: COLORS.gray[400],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  textInput: {
    flex: 1,
    height: 44,
    borderWidth: 1,
    borderColor: COLORS.gray[200],
    borderRadius: 22,
    paddingHorizontal: SPACING.xl,
    fontSize: FONT_SIZES.lg,
    backgroundColor: COLORS.white,
    color: COLORS.dark,
    fontFamily: Platform.OS === "ios" ? "San Francisco" : "Roboto",
    marginRight: SPACING.md,
  },
  textInputFocused: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 2,
  },
  textInputDisabled: {
    backgroundColor: COLORS.gray[100],
    color: COLORS.gray[400],
  },
  addButton: {
    backgroundColor: COLORS.primary,
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 2,
  },
  addButtonDisabled: {
    backgroundColor: COLORS.gray[200],
    shadowOpacity: 0,
    elevation: 0,
  },
});

export default TaskInput;
