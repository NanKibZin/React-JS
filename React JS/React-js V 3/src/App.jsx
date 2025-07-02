
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Home,Service, ErrorPage} from "./page"
import RootLayout from "./LayOut/RootLayout"
import AboutLayout from './LayOut/AboutLayout'

const router=createBrowserRouter([
    {
        path:"/",
        // element: <LayOut/>,
        element:  <RootLayout/>,
        errorElement:<ErrorPage/>,
        children:[
        {
            index:true,
            // path:"/Home",
            element: <Home/>
        },
        {
          path:"About",
          element: <AboutLayout/>
        },
        {
            path:"Service",
            element: <Service/>,
            children:[
              {
                // path:"Vision",
                index:true,
                element: <h4>Vision....</h4>
              },
              {
                path:"Mision",
                element: <h4>Vision....</h4>
              },
              {
                path:"Goal",
                element: <h4>Goal....</h4>
              },
            ]
        },
       
        ]
    },
   

])
const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
