
import { createContext,useState,useContext } from "react"
const GlobleContext=createContext();
export const useGlobleContext=()=> useContext(GlobleContext);

const Context = ({children}) => {
    const [user,setUser]=useState({name:"Reaksa"})
    function handleClick(){
        setUser(null)
    }
  return (
       <GlobleContext.Provider value={{user,handleClick}}>
            {children}
       </GlobleContext.Provider>
  )
}

export default Context
