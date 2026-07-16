import React from 'react'
import Navbar from './components/Navbar.jsx'
import Layout from './components/layout.jsx'
import './App.css'

const App = () => {
  return (
    <>
    <Navbar />
    <div className='app'>App</div>
    <Layout />
    </>
  )
}

export default App