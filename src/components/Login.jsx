import { Box, Button, Heading, Input } from '@chakra-ui/react';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../Redux/userReducer/action';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isAuth} = useSelector((state)=>state.user);
    const [logindetails,setLoginDetails] = useState({
        email: "",
        password:""
    });

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setLoginDetails({...logindetails,[name]:value})
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(logindetails)
        dispatch(loginApi(logindetails));
        console.log(isAuth)
    }
    useEffect(()=>{
        if(isAuth){
            navigate("/home", { replace: true })
        }
    },[navigate,isAuth])
  return (
    <Box>
        <Heading>Login</Heading>
        <form onSubmit={handleSubmit}>
            <Input name='email' type="text" placeholder='Enter Username' value={logindetails.email} onChange={handleChange}></Input>
            <Input name='password' type="password" placeholder='Enter Password' value={logindetails.password} onChange={handleChange}></Input>
            <Button type='submit'>Login</Button>
        </form>
    </Box>
  )
}

export default Login