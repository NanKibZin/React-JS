import { useState } from 'react'

const useToggle = (initailValue) => {
    const [show,setShow]=useState(initailValue)
        const toggle=()=>{
            setShow(!show)
        }
  return [show,toggle]
}

export default useToggle
