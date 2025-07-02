import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AboutLayout = () => {
  return (
    <div>
        <h3>About Page</h3>
        <Link to="Vision">Vision</Link>
        <Link to="Mision">Mision</Link>
        <Link to="Goal">Goal</Link>
      <Outlet/>
    </div>
  )
}

export default AboutLayout
