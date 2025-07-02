
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
      <h3>User Page</h3>
      <Outlet/>
    </div>
  )
}

export default UserLayout
