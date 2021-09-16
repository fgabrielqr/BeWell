import React,{useContext} from 'react';
import { LoginRoutes } from './login.routes';
import { AppRoutes } from './app.routes'
import { useAuth } from '../contexts/Auth';
export function MainRoutes(){

    const {user}= useAuth()
    return user.first_name ? <AppRoutes/>: <LoginRoutes/>;
}