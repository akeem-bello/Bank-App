import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = ()=>{
    let divStyle = {
        backgroundColor: '#183C51',
        padding: '0.6%'
    }

    let linkStyle = {
      marginRight: '30px',
      color: '#000001',
      textDecoration: 'none',
      fontSize: '17px'
    }

    let logoStyle = {
      marginRight: '680px'
    }
  return (
    <div style={divStyle}>
        <div className="container">
          <Link to='/'><img src="https://res.cloudinary.com/akeem/image/upload/v1655468166/7455157406_b2ec7001-9751-4e99-a510-3b0be2ee5af7_q8majw.png" width={'8%'} style={logoStyle}/></Link>
          <Link to='/' style={linkStyle}>Home</Link>
          <Link to='/signin' style={linkStyle}>Sign In</Link>
          <Link to='/signup' style={linkStyle}>Create Account</Link>
          <Link to='#' style={linkStyle}>About Us</Link>
          <Link to='/contact' style={linkStyle}>Contact</Link>
        </div>
    </div>
  )
}

export default NavBar