import React from 'react'
import { NetflixLogo } from '../icons'
import { Link } from 'react-router-dom'
import Nav from './nav'
import netflix_logo from '../images/netflix-logo.png'

const Header = () => {
  return (
    <header className='header'>
        <div id='logo' className='logo'>
            <Link to="/" style={{height:'41px',width:'150px' , display:'inline-block'}}>
           <NetflixLogo/>
            </Link>
        </div>
    <Nav/>
    <div className="user-profile">
        <div className="user">
         
          <div className="image">
            <img src={netflix_logo} alt="netflix"/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
