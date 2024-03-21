import { useState } from "react"
import { useLogin } from "../hooks/useLogin"


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Login</label>
                <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} value={password} required/>
                <input disabled={isLoading} type="submit" value="Login"/>
                {error && <div>{error}</div>}
            </form>
        </>
    )
}

export default Login