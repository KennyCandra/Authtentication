import useAccountStore from "../Zustand/AccountsStore"

function HomePage() {
  const user = useAccountStore()
  return (
    <h1>
      Hello this is Home Page {user.user}
    </h1>

  )
}

export default HomePage
