import React, { useContext } from 'react';
import { LoginRoutes } from './login.routes';
import { AppRoutes } from './app.routes'
import { useAuth } from '../contexts/Auth';

export function MainRoutes() {
    const { user, refreshToken } = useAuth();

    refreshToken();
    //console.log(user);

    if (user.first_name) {
        return <AppRoutes />
    } else {
        return <LoginRoutes />
    }
}