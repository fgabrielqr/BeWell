import React from 'react';
import Dashboard from './pages/Dashboard';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}