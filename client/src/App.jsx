import { Route, Routes, Navigate } from "react-router-dom"
import { useAuthContext } from "./hooks/useAuthContext"
import Home from './pages/Home'
import Login from './pages/Login'
import NavBar from "./components/NavBar"
import Page2 from "./pages/Page2"


function App() {

  const {user} = useAuthContext()

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={user ? <Home/> : <Navigate to="/login"/>}/>
        <Route path='/page2' element={user ? <Page2/> : <Navigate to="/page2"/>}/>
        <Route path='/login' element={!user ? <Login/> : <Navigate to='/'/>}/>
      </Routes>
    </>
  )
}

export default App
