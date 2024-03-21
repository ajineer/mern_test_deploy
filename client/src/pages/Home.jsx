import { useAuthContext } from "../hooks/useAuthContext"


const Home = () => {

    const { user } = useAuthContext()

    return (
        <h1>Welcome User @ {user.email}</h1>
    )
}

export default Home