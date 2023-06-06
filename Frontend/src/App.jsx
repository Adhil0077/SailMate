import React from 'react'
import Header from './components/header'
import { Outlet } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import {Container} from 'react-bootstrap'

function App() {
  return (
    <>
    <Header/>
    <Container className='my-2'>
    <Outlet/>
    </Container>
    </>
  )
}

export default App
