import { useState } from "react"

const Signup = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('/api/auth/signup',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },body: JSON.stringify(form)
        })
        const json = await response.json()
        if(response.ok){
            console.log(json)
        }else{
            console.log('error')
        }
    }

    return (
        
        <form onSubmit={(e) => {handleSubmit(e)}} style={{display: 'flex', flexDirection: 'column'}}>
                <h4>Signup</h4>
                <input onChange={(e) => setForm({email: e.target.value})} value={form.email} type="email" required label="Email"/>
                <input onChange={(e) => setForm({password: e.target.value})} value={form.password} type="password" required label="Password"/>
                <input type='submit' value='sign up'/>
        </form>
    )
}

export default Signup