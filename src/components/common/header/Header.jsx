import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const [click, setClick] = useState(false)
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const reload=()=>{
    if(window.location.pathname=='/login'){
      window.location.reload()
    }
  }
  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/journal'>Forum</Link>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="start">
            {
              isAuthenticated ? 
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
</button>
              : <button onClick={() => loginWithRedirect()}>Log In</button>
            }
          </div>

          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
