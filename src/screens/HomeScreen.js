import React, { useState, useEffect, useRef } from "react";
import { View, FlatList, StyleSheet, Platform, StatusBar, Modal, TouchableOpacity, Text, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TaskInput from "../components/TaskInput";
import TaskItem from "../components/TaskItem";
import EmptyState from "../components/EmptyState";
import { globalStyles } from "../styles/globalStyles";
import { COLORS } from "../utils/constants";
import notificationService from "../services/notificationService";
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'TASKS';

const getAndroidPadding = () => {
  if (Platform.OS === "android") {
    if (StatusBar.currentHeight && StatusBar.currentHeight > 8) {
      return 8;
    }
    return StatusBar.currentHeight || 0;
  }
  return 0;
};

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const notificationInterval = useRef(null);
  const notificationIds = useRef({});

  // Load tasks from storage on mount
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved) setTasks(JSON.parse(saved));
      } catch (e) {
        console.log('Failed to load tasks', e);
      }
    };
    loadTasks();
    notificationService.initialize();
    return () => {
      if (notificationInterval.current) {
        clearInterval(notificationInterval.current);
      }
      notificationService.cancelAllNotifications();
    };
  }, []);

  // Save tasks to storage whenever they change
  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = async (text) => {
    const newTask = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: Date.now(),
      completedAt: null,
    };
    setTasks([newTask, ...tasks]);
    const notifId = await notificationService.scheduleTaskReminder(
      newTask.id,
      newTask.text,
      60
    );
    notificationIds.current[newTask.id] = notifId;
  };

  const handleToggleComplete = async (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
              completedAt: task.completed ? null : Date.now(),
            }
          : task
      )
    );
    const notifId = notificationIds.current[id];
    if (notifId) {
      await notificationService.cancelNotification(notifId);
      delete notificationIds.current[id];
    }
  };

  const handleDelete = async (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    const notifId = notificationIds.current[id];
    if (notifId) {
      await notificationService.cancelNotification(notifId);
      delete notificationIds.current[id];
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setEditModalVisible(true);
  };

  const handleUpdateTask = (text) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === editingTask.id ? { ...task, text } : task
      )
    );
    setEditModalVisible(false);
    setEditingTask(null);
  };

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        { paddingTop: getAndroidPadding() },
      ]}
      edges={["top", "left", "right"]}
    >
      <StatusBar backgroundColor={COLORS.gray[100]} barStyle="dark-content" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 24}
      >
        <View style={styles.container}>
          <Text style={styles.title}>My Tasks</Text>
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TaskItem
                task={item}
                onToggleComplete={handleToggleComplete}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            )}
            ListEmptyComponent={<EmptyState />}
            contentContainerStyle={styles.listContent}
            style={styles.list}
            keyboardShouldPersistTaps="handled"
          />
          <TaskInput onAddTask={handleAddTask} />
        </View>
        <Modal
          visible={editModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setEditModalVisible(false)}
        >
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.3)" }}>
            <View style={{ backgroundColor: COLORS.white, padding: 24, borderRadius: 16, width: "90%" }}>
              <TaskInput
                onAddTask={handleUpdateTask}
                disabled={false}
                initialValue={editingTask ? editingTask.text : ""}
              />
              <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 12 }}>
                <TouchableOpacity onPress={() => setEditModalVisible(false)} style={{ marginRight: 12 }}>
                  <Text style={{ color: COLORS.danger, fontSize: 16 }}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.gray[100],
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingBottom: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    marginTop: 0,
    shadowColor: "transparent",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  list: {
    flex: 1,
    backgroundColor: "transparent",
  },
  listContent: {
    flexGrow: 1,
    paddingBottom: 32,
    paddingTop: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.gray[800],
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 12,
    fontFamily: Platform.OS === 'ios' ? 'San Francisco' : 'Roboto'
  },
});

export default HomeScreen;
