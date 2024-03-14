import { useAuthContext } from "../hooks/useAuthContext"

const Home = () => {

    const {user} = useAuthContext()

    return (
        <div>
            Welcome user!
        </div>
    )   
}

export default Home