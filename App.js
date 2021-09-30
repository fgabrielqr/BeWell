import React from 'react';
import { MainRoutes } from './src/routes/main.routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/Auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <MainRoutes />
      </AuthProvider>
    </NavigationContainer>
  );
}