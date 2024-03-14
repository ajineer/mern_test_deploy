import { useState } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useAuthContext } from './hooks/useAuthContext'
import { useLogout } from './hooks/useLogout'

function App() {
  const {logout} = useLogout()
  const {user} = useAuthContext()

  return (
    <div>
      {user? 
      <nav>
        <Link to='/'>Home</Link>
        <button onClick={() => {logout()}}>Logout</button>
      </nav>:
      <nav>
        <Link to='/signup'>Signup</Link>
        <Link to='/login'>Login</Link>
      </nav>
      }
        <Routes>
          <Route path='/' element={user ? <Home/> : <Navigate to="/login"/>}/>
          <Route path='/login' element={!user ? <Login/> : <Navigate to='/'/>}/>
          <Route path='/signup' element={!user ? <Signup/> : <Navigate to='/'/>}/>
        </Routes>
    </div>
  )
}

export default App
