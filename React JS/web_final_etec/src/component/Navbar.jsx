
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const links=[
    {
        label:"Home",
        path:"/",

    },
    {
        label:"Services",
        path:"services",

    },
    {
        label:"About",
        path:"about",

    },
    {
        label:"Contact Us",
        path:"contact",

    }
]
const Navbar=()=>{
   const [isOpen,setOpen]=useState(false);
   return(
    <nav className="nav-bar">
        <h1 className="nav-logo">TourWithUs</h1>
        <button onClick={()=>setOpen(!isOpen)} className="nav-toggle">
           {isOpen?<X/>:<Menu/>}
        </button>
        <ul className={isOpen?"nav-lists active":"nav-lists"}>
        {links.map(link=>(
            <li key={link.label} className="nav-link">
                 <Link to={link.path}>{link.label}</Link>
            </li>
        ))}
        </ul>
    </nav>
   )
}
export default Navbar;