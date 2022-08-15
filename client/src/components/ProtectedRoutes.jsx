import React from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks';

const ProtectedRoutes = () => {

    const auth = useAuth();

    return auth.user ? <Outlet /> : <Navigate to="/" />;

}

export default ProtectedRoutes;