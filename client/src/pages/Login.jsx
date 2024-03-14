import { useState } from "react"

const Login = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    
    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    return (
        
        <form onSubmit={(e) => {handleSubmit(e)}} style={{display: 'flex', flexDirection: 'column'}}>
                <h4>Login</h4>
                <input onChange={(e) => setForm({email: e.target.value})} value={form.email} type="email" required label="Email"/>
                <input onChange={(e) => setForm({password: e.target.value})} value={form.password} type="password" required label="Password"/>
                <input type='submit' value='sign up'/>
        </form>
    )
}

export default Login