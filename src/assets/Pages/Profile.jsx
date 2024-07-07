import { useNavigate } from "react-router-dom"
import useAccountStore from "../Zustand/AccountsStore"

const Profile = () => {
  const navigate = useNavigate()
  const store = useAccountStore()
  const handleClick = () => {
    store.logout()
    navigate('/login' , {replace : true})
  }
  return (
    <>
    <h1>
      HELLO THIS IS YOUR PROFILE PAGE
    </h1>
    <h2>
    {store.user}
    </h2>
    {store.user &&<button onClick={handleClick}>LOGOUT</button>}
    </>
  )
}

export default Profile
