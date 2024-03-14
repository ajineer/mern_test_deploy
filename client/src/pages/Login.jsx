import { useState } from "react"

const Login = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm( {[name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('/api/auth/signin', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(form)
        })
        const json = await response.json()
        if(response.ok){
            console.log(json)
        }else{
            console.log(json)
        }
    }

    return (
        
        <form onSubmit={(e) => {handleSubmit(e)}} style={{display: 'flex', flexDirection: 'column'}}>
                <h4>Login</h4>
                <input name='email' onChange={(e) => handleChange(e)} value={form.email} type="email" required label="Email"/>
                <input name='password' onChange={(e) => handleChange(e)} value={form.password} type="password" required label="Password"/>
                <input type='submit' value='Login'/>
        </form>
    )
}

export default Login