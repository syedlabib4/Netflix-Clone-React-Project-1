import React from 'react'
import Logo from '../../assets/cards/Netflixlogo.png'

const Navbar = () => {
  return (
<>
  <div className='navbar '>
    <div >
      <img src={Logo} alt='Netflix Logo' className='navbar-logo' />
    </div>

    <div className='navbar-links'>
      <ul>
        <li>Home</li>
        <li>about</li>
      </ul>
    <div>
      <h1>Hello</h1>
    </div>
    </div>
    </div>
</>
  )
}

export default Navbar
