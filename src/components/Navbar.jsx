import { Box,Button,Text } from '@chakra-ui/react';
import React from 'react'
import "./styles.css"
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
    <Box className='navbar'>
        <Text className='text' as="cite">FacePrep Users</Text>
        <Button onClick={handleClick} colorScheme="pink" marginTop="15px">Logout</Button>
    </Box>
  )
}

export default Navbar