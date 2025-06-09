# Task Management Application
### Developed by Swaraj Dhage

<p align="center">
  <img alt="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <img alt="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
</p>

## 📱 Project Overview
A dynamic task management application developed as a internship assignment using React Native and Expo. This cross-platform solution demonstrates proficiency in mobile app development with focus on user experience and functionality.

## 🎯 Key Features
- Create, Read, Update and Delete tasks
- Task status tracking
- Intuitive user interface
- Local data persistence

## 🔧 Technology Stack
- React Native
- Expo Framework
- AsyncStorage
- React Navigation
- Native Base UI

## 📸 Screenshots

### Home Screen
<img src="./screenshot/homepage.jpg" width="250" alt="Home Screen"/>
> Task overview and management dashboard showcasing the main interface where users can view and manage their tasks.

### Task Management
<p float="left">
  <img src="./screenshot/editTask.jpg" width="200" alt="Edit Task" />
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="./screenshot/deleteTask.jpg" width="200" alt="Delete Task" />
</p>
> Left: Task editing interface for modifying existing tasks
> Right: Task deletion confirmation dialog for safe task removal

### Notifications
<img src="./screenshot/notification.jpg" width="250" alt="Notification Screen"/>
> Task reminder notifications to keep users updated about their tasks

### Loading Screen
<img src="./screenshot/splashLoading.jpg" width="250" alt="Splash Screen"/>
> Application splash screen showing the initial loading state

## ⚙️ Installation

1. **Clone the repository**
```bash
git clone [repository-url]
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Install Expo CLI globally** (if not already installed)
```bash
npm install -g expo-cli
# or
yarn global add expo-cli
```

4. **Start the Expo development server**
```bash
npx expo start
```

## 📱 Running the App

- iOS: Press 'i' in terminal or run on iOS simulator
- Android: Press 'a' in terminal or run on Android emulator
- Web: Press 'w' in terminal or open in web browser

## 🎨 Features Implementation

### Data Persistence
- Local storage using AsyncStorage
- Efficient data management
- Offline functionality

### User Interface
- Clean and intuitive design
- Responsive layouts
- Cross-platform consistency
- Interactive elements

### Component Architecture
- Modular component design for maximum reusability
- Separate components for:
  - TaskItem: Task display component with completion toggle, edit and delete functionality
  - TaskInput: Reusable input component for creating and editing tasks
  - EmptyState: Customizable empty state display component
  - LoadingScreen: Animated loading screen with progress indicators
- Component Features:
  - Props-based configuration for flexibility
  - Consistent styling
  - Integration with AsyncStorage for data persistence
  - Built-in error handling and validation
  - Responsive design across different screen sizes


## 🧪 Testing
- Component testing
- Functionality verification
- Cross-platform compatibility


## 👨‍💻 Developer Information
- Developer: Swaraj Dhage



---
*This project was developed as part of an internship application assignment to demonstrate mobile application development capabilities using React Native and Expo.*
