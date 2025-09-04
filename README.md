# Jedox AI Portal

A React Native mobile application built with Expo Router for file-based routing and a comprehensive component system.

## 🚀 Quick Start

1. **Install dependencies**

    ```bash
    npm install
    ```

2. **Start the app**
    ```bash
    npx expo start
    ```

## 📁 Project Structure

### **App Folder (`/app`)**

File-based routing using Expo Router:

- `_layout.tsx` - Root layout with providers (Redux, React Query, Theme)
- `login.tsx` - Login screen (`/login`)
- `expired.tsx` - Session expired screen (`/expired`)
- `+not-found.tsx` - 404 page (`/not-found`)
- `(app)/` - Protected app routes
    - `_layout.tsx` - App layout wrapper
    - `index.tsx` - Home screen (`/`)
    - `about.tsx` - About screen (`/about`)

### **Components (`/components`)**

Global reusable components used across screens:

### **Features (`/features`)**

Feature-based architecture - each feature should include:

- `constants.ts` - Feature-specific constants
- `hooksApi.ts` - API hooks using React Query
- `types.ts` - TypeScript type definitions
- `enums.ts` - Enum definitions
- `components/` - Feature-specific components

### **Shared Feature (`/features/shared`)**

Template for all features with common components:

- Error, Expired, Forbidden, NotFound, NoRecords components
- Global types and enums
- API hooks template

### **State Management (`/redux`)**

- `store.ts` - Redux store with persistence
- `appSlice.ts` - App state (user, token, error modals)

### **Styling (`/constants`, `/lib`)**

- `Colors.ts` - Color palette with light/dark themes
- `theme.ts` - Theme configuration
- `tailwind.config.js` - Tailwind CSS setup

### **API (`/axiosConfig.ts`)**

- Axios configuration with token injection
- Platform-specific base URLs
- Error handling

## 🎨 Design System

- **Colors**: Primary (purple), Secondary (pink), Accent (cyan)
- **Typography**: Poppins font family
- **Components**: Consistent API with variants and themes
- **Dark Mode**: Full light/dark theme support

## 📱 Available Scripts

- `npx expo start` - Start development server
- `npx expo run:ios` - Run on iOS
- `npx expo run:android` - Run on Android

## 🔧 Adding New Features

Follow the shared feature structure:
