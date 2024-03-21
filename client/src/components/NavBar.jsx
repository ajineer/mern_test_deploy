import { Link, NavLink } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"

const NavBar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleclick = () => {
        logout()
    }

    return (
        <nav>
            {user?
            <div>
                <NavLink to='/'>Home</NavLink>
                <button onClick={() => {handleclick()}}>Log out</button>
            </div>:
            <div>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/page2'>Page 2</NavLink>
            </div>
        }
        </nav>
    )
}

export default NavBar