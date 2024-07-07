import useAccountStore from "../Zustand/AccountsStore"

const Profile = () => {
  const store = useAccountStore()
  const handleClick = () => {
    store.logout()
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
