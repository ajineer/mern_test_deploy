import { useState } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(null)

  return (
    <>
    {user? 
    <nav>
      <Link to='/'>Home</Link>
      <Link>Logout</Link>
    </nav>:
    <nav>
      <Link to='/signup'>Signup</Link>
      <Link to='/login'>Login</Link>
    </nav>
    }
      <Routes>
        <Route path='/' element={user ? <Home user={user}/> : <Navigate to="/login"/>}/>
        <Route path='/login' element={!user ? <Login/> : <Navigate to='/'/>}/>
        <Route path='/signup' element={!user ? <Signup/> : <Navigate to='/'/>}/>
      </Routes>
    </>
  )
}

export default App
