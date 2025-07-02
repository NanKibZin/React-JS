
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {Home,About} from "./page/index"
import Layout from './layout/Layout'
import ServiceLayout from './layout/ServiceLayout'
import UserLayout from './layout/UserLayout'
import User from './page/user/User'
// import { userloader } from './page/user/User'
import UserDetail from './page/user/UserDetail'
// import { detail } from './page/user/UserDetail'
import ErrorPage from './page/user/ErrorPage'
// const router=createBrowserRouter([
//      {
//       path: "/",
//       element: <Layout/>,
//       children:[
//         {
//           // path:"/",
//           index:true,
//           element: <Home/>
//          },
//         {
//           path:"/about",
//           element: <About/>
//          },
//          {
//           path:"/service",
//           element:<ServiceLayout/>,
//           children:[
//             {
//               path:"mission",
//               element: <h3>Mission.....</h3>
              
//             },
//             {
//               path:"vission",
//               element: <h4>Vission.....</h4>
//             },
//             {
//               path:"goal",
//               element: <h2>Goal.....</h2>
//             }
//           ]
//          }
//       ]
//      },
     
// ])
 const router=createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={ <Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='service' element={<ServiceLayout/>}>
              <Route path='vission' element={ <h3>Vission....</h3>}/>
              <Route path='mission' element={ <h4>Mission..</h4>}/>
              <Route path='goal' element={ <h4>Goal..</h4>}/>
          </Route>
          <Route path='about' element={<About/>}/>
          <Route path='user' element={<UserLayout/>}>
              <Route index element={<User/>} />   
              <Route path=':id' element={<UserDetail/>} errorElement={<ErrorPage/>} />
          </Route>
        </Route>
))
const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}
export default App
