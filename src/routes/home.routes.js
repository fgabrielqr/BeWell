import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Conta from '../pages/Conta';
import Dicas from '../pages/Dicas';

const Tab = createBottomTabNavigator();

export default function HomeRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Dicas" component={Dicas} />
            <Tab.Screen name="Conta" component={Conta} />
        </Tab.Navigator>
    );
}