import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';

const RequiredAuth = ({children}) => {
    const {isAuth} = useSelector((state)=>state.user);
    const location = useLocation();
    const from = {
        pathname: location.pathname
    }

    if(isAuth) return children;
    <Navigate to={"/"} state={from} replace></Navigate>
  
}

export default RequiredAuth