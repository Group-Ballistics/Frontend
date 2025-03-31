import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen flex flex-col bg-gray-50'>
        <Navbar />
        <main  className='flex-grow p-4 mt-16'>

        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<About />} path='/about' />

        </Routes>
        </main >
      </div>
    </>
  )
}

export default App
