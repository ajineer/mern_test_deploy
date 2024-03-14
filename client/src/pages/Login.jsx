import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

const Login = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const {login, error, isLoading} = useLogin()
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm( {[name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(form.email, form.password)
    }

    return (
        
        <form
            style={{display: 'flex', flexDirection: 'column', width: '10rem'}} 
            onSubmit={(e) => {handleSubmit(e)}}>
                <h4>Login</h4>
                <input name='email' onChange={(e) => handleChange(e)} value={form.email} type="email" required label="Email"/>
                <input name='password' onChange={(e) => handleChange(e)} value={form.password} type="password" required label="Password"/>
                <input type='submit' value='Login'/>
        </form>
    )
}

export default Login