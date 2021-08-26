import React from 'react';
import { Routes } from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/Auth';

export default function App() {
  return (
    <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
    </NavigationContainer>
  );
}