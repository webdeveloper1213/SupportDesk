import React from 'react'
import { Navigate , Outlet } from 'react-router-dom';
import { useAuthStatus } from '../hooks/useAuthStatus';
import Spinner from './Spinner';

const PrivateRoute = () => {
    const {loggedIn , checkStatus} = useAuthStatus();

    if(checkStatus) {
        return <Spinner />
    }
    return loggedIn ? <Outlet /> : <Navigate to='/login' />
//if logged in then navigate to the protected route otherwise to the login page
}

export default PrivateRoute