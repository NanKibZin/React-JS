import React from 'react'
import { Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h3>Home page</h3>
      <Link to="/About">About</Link>
      <Link to="/Service">Service</Link>
    </div>
  )
}

export default Home
