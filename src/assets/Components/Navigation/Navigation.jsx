import { NavLink } from "react-router-dom"
import './Navigation.css'
import useAccountStore from "../../Zustand/AccountsStore";

const Navigation = () => {

      const store = useAccountStore()

    const navBarStyles = ({isActive}) => {
        return {
            fontWeight : isActive ? 'bold' : 'normal',
            textDecoration : isActive ? 'none' : 'underline',
            fontSize : '25px',
        };
    };

  return (
    <div className="navigation">
      <NavLink style={navBarStyles} to={'/'}>
            Home Page
      </NavLink>
      {!store.user && <NavLink style={navBarStyles} to={'/login'}>
            Login
      </NavLink>}
      {!store.user && <NavLink style={navBarStyles} to={'/sign-up'}>
            Sign Up
      </NavLink>}
      {store.user &&<NavLink style={navBarStyles} to={'/profile'}>
            Profile
      </NavLink>}
    </div>
  )
}

export default Navigation
