import { Box,Button,Text } from '@chakra-ui/react';
import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';
import { logoutApi } from '../Redux/userReducer/action';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = ()=>{
    dispatch(logoutApi());
    navigate("/")
  }

  return (
    <Box>
        <Text>FacePrep Users</Text>
        <Button onClick={handleClick}>Logout</Button>
    </Box>
  )
}

export default Navbar