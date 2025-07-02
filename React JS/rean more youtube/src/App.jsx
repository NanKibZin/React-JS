//====  component========


// import "./App.css"
// import GroupPoster from "./components/GroupPoster";
// function App(){
//   return <GroupPoster/>
// }
// export default App;

// import "./App.css"
// import Product from "./component2/Product"
// const App = () => {
//   return (
//     <Product/>
//   )
// }

// export default App
  

//=====component 2========


// function App(){
//     const onChangeHandler=()=>{
//        console.log("typing")
//     }
//     const onClickHanlder=(e)=>{
//       console.log("you click me")
//     }
//     const onSubmitHanlder=(e)=>{
//       e.prevenDefault();
//       console.log("submite")
//     }
//   return (
//     <>
//     <from onSubmit={onSubmitHanlder}>
//       <input onChange={onChangeHandler} type="text" />
//     </from>
//     <button onClick={(e)=>{
//       e.preventDefault();
//       console.log("click me")
//     }}>click me</button>
//     </>
//   )
// }
// export default App;


//========== component 3===========


// import User from "./component3/User";
// const App=()=>{
//   return(
//     <div>
//       <User/>
//     </div>
//   )
// }
// export default App


///========== UseState() =======

  //  import React from 'react'
   
  //  function App() {
  //  const [count,setcount]=React.useState(0);
  //  // const count=useStateArray[0]
  //  // const setcount=useStateArray[1]
  //   function handleIncrement(){
  //     setcount(count+1)   // use it to update nv current target
  //   }
  //    return (
  //      <div>
  //        <h3>{count}</h3>
  //        <button onClick={handleIncrement}>Increment</button>
  //      </div>
  //    )
  //  }
   
  //  export default App


//========== UseState() obj   ===========

  // import React, { useState } from 'react'
  // const obj={name:"nan",age:23,job:"IT"}
  // function App() {
  //   const [user,setuser]=React.useState(obj);
  //   function handleChange(){
  //     setuser({name:"Meng",age:24,job:"Student"})
  //     // setuser({...obj,name}) //if we wnat to change name
  //   }
  //   return (
  //     <article>
  //       <h2>{user.name}</h2>
  //       <h2>{user.age}</h2>
  //       <h2>{user.job}</h2>
  //       <button onClick={handleChange}>change</button>
  //     </article>
  //   )
  // }
  
  // export default App
   


  //====== excersize typing  displau on screen =========

  // import React from 'react'
  
  // function App() {
  //   const [value,setValue]=React.useState("");
  //   function handleChange(e){
  //     console.log(e.target.value);
  //     setValue(e.target.value)
  //   }
  //   return (
  //     <div>
  //       <h3>{value}</h3>
  //       <input 
  //       onChange={handleChange}
  //        value={value} 
  //        type="text"
  //         placeholder="Typing..." />
  //       <button onClick={()=>setValue("")}>clean</button>
  //     </div>
  //   )
  // }
  
  // export default App



  // ======= updater function setTimeout =======
  // import React from 'react'
  
  // function App() {
  //   const [number,setNumber]=React.useState(0);
  //   const handleIncrement=()=>{
  //     setTimeout(function(){
  //       setNumber(function(currentValue){   
  //         return currentValue+1
  //       })
  //     },3000)
  //     console.log(number)
  //   }
  //   return (
  //     <div>
  //       <h2>{number}</h2>
  //       <button onClick={handleIncrement}>increment</button>
  //     </div>
  //   )
  // }
  
  // export default App

  

  ///  ======== select and remove infromation of person   ==========
   
// import UserList from "./component4/UserList"
  
//   const App = () => {
//     return (
//      <UserList/>
//     )
//   }
  
//   export default App


// import React, { useState } from 'react'

// function App() {
//   const [alert,setalert]=useState(false)
//   function handleToggle(){
//    setalert(!alert)
//   }
//   return <div>
//     {alert?<Loading/>:null}
//     <button onClick={handleToggle}>Toggle</button>
//   </div>
// }
// function Loading(){
//   return <h2>Loading...</h2>
// }
// export default App

import React from 'react'
import Card from "./component5/Card"
export default function App() {
  return (
    <div>
      <Card/>
    </div>
  )
}

  
  
   