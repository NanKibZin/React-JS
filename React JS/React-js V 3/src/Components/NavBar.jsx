import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <img src="https://cdn.pixabay.com/photo/2018/01/02/09/47/woman-3055841_960_720.jpg" alt="" />
        <ul>

      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="About">About</Link>
      </li>
      <li>
      <Link to="Service">Service</Link>
      </li>
        </ul>
    </nav>
  )
}

export default NavBar
