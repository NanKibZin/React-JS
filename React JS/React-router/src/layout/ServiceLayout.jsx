
import { Link, Outlet } from 'react-router-dom'

const ServiceLayout = () => {
  return (
    <div>
      <h3>Service LayOut</h3>
      <Link to="mission">Mission...</Link>
      <Link to="vission">Vission...</Link>
      <Link to="goal">Goal...</Link>
      <Outlet/>
    </div>
  )
}

export default ServiceLayout
