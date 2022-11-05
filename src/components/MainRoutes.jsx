import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RequiredAuth from '../hoc/RequiredAuth'
import Dashboard from './Dashboard'
import Login from './Login'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/home' element={<RequiredAuth><Dashboard></Dashboard></RequiredAuth>}></Route>
    </Routes>
  )
}

export default MainRoutes