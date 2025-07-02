// import Parent from "./Props/Parent"
// const App = () => {
//   return (
//     <div>
//       <Parent/>
//     </div>
//   )
// }

// const { useState, default: React } = require("react")

// import Card from "./useStare/You"

// export default App

// import React from "react"
// const App=()=>{
//   const [count,setCount]=React.useState(0);
//   function handlechange(){
//     setCount(count+1);
//   }
//   return (
//     <article>

//     <div>{count}</div>
//     <button onClick={handlechange}>click</button>
//     </article>
//   )

// }
// // export default App
// import React from "react";
// const ShowText=()=>{
//   const [value,setValue]=React.useState('');
//   function handletext(e){
//     setValue(e.target.value)
//   }
//   return (
//     <div>
//       <h1>{value}</h1>
//       <input onChange={handletext} placeholder="input text...." type="text" />
//       <button onClick={()=>setValue("")}>click</button>
//     </div>
//   )
// }
// export default ShowText

// import React from "react";
// const App = () => {
//   const [value, setValue] = React.useState(0);
//   const handle=()=> {
//     setTimeout(function () {
//       setValue(function (cv) {
//         return cv + 1
//       });
//     }, 3000);
//   }
//   return (
//     <div>
//       <h2>{value}</h2>
//       <button onClick={handle}>click</button>
//     </div>
//   );
// };
// // export default App;


// import You from "./useStare/You"
// const App = () => {
//   return (
//     <You/>
//   )
// }

// export default App

// //   ===========  toggle ===========
// import React from "react";
// const App=()=>{
//   const [alert,setAlert]=React.useState(false)
//     function handleclick(){
//       setAlert(!alert)
//     }
//   return(
//     <div>
//       {alert?<Loading/>:null}
//       <button onClick={handleclick}>Toggle</button>
//     </div>
//   )
// }
// function Loading(){
//   return (
//     <h4>Loading.....</h4>
//   )
// }

// export default App

// import React, { useEffect } from 'react'

// function App() {
//   const [count,setCount]=React.useState(0)
//   const [value,setValue]=React.useState("")
//   function handleclick(){
//     setCount(count+1)
//   }

//   useEffect(()=>{    //useEffect and dependent
//     document.title=count;
//   },[count])
//   return (
//     <div>
//       <h2>{count}|</h2>
//       <h1>{value}</h1>
//        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
//       <button onClick={handleclick}>click</button>
//     </div>
//   )
// }

// export default App

// import { useEffect, useState } from "react";
// import axios from "axios";
// const App=()=>{
//   const [isLoading,setisLoading]=useState(true)
//   const [users,setUsers]=useState([])
//   const [isError,setIsError]=useState(false)
//   const url="https://api.github.com/user";
//   useEffect(()=>{

//     const fetchData=async ()=>{
//         try{
//           const {data}=await axios(url)
//           setUsers(data)
//           console.log(data)
//           // const Response=await axios(url)
//           // const data=Response.data;
//         //  const Response=await fetch(url);
//         //  if(!Response.ok){     //check error
//         //   const smg=Response.status;
//         //   throw new Error(smg)
//         // const data=await Response.json();
//       }catch(error){
//         setIsError(true)
//         console.log(error.response.status)
//       }
//       setisLoading(false)
//     }
//     fetchData()

//   }, [])
//   if(isLoading){
//     return <h2>loading</h2>
//   }
//   if(isError){
//     return <h5>somthing went wrong</h5>
//   }
//   return <div className="container">
//     {users.map(({id,avatar_url,html_url,login})=>{
//       return (
//         <article key={id}>
//           <img src={avatar_url} alt="" />
//           <h3>{login}</h3>
//           <a href={html_url}>See Profile</a>
//         </article>
//       )
//     })}
//   </div>
// }
// export default App;

// import  useEffect from "react"
// import React from "react"
// const App=()=>{
//   const url="https://api.github.com/users"
//   const [value,setValue]=React.useState([])
//   useEffect(()=>{
//     const fetchData=async ()=>{
//       const Response=await fetch(url);
//       const data=await Response.json()
//       setValue(data)

//     }
//     fetchData();
//   },[])
//   return (
//       <div>
//         {value.map(({id,html_url,login,avatar_url})=>{
//           return (
//             <article key={id}>
//             <img src={avatar_url} alt="" />
//             <a href={html_url}></a>
//             <h3>{login}</h3>
//           </article>
//           )
//         })}
//       </div>
// }
// export default App

// ======= clear useEffect ===========

// import React from 'react'
// import { useEffect } from 'react';
// const App = () => {
//   const [value,setValue]=React.useState(false);
//   return (
//     <div>
//        <h3>{value&&<Message/>}</h3>
//       <button onClick={()=> setValue(!value)}>click</button>
//     </div>
//   )
// }
// function Message(){
//   useEffect(()=>{
//      const clear=setInterval(()=>{
//       console.log("useEffect");
//      },1000)
//      return ()=>{
//       clearInterval(clear)
//      }
//   },[])
//   return <h3>Loading</h3>
// }

// export default App

import { useEffect, useRef, useState} from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [member,setMember]=useState([])
  const inputRef=useRef(null);
  useEffect(()=>{
    inputRef.current.focus();
  },[member])   // video 66 input focus()
  console.log(inputRef)
  function handleName(e) {
    // console.log(e.target.value)
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if(!name||!email){
       alert("input text")
    }else{
      const id=Date.now()
      const addMember={id,name,email} //this value copy from line 231 and 232
      // const updateMember=[addMember]  //if we use this it will overight on old value so will back use line next
      const updateMember=[...member,addMember]

      setMember(updateMember)
      // console.log(name, email);
      setEmail("")  //it for after submit value of name and email will be delete 
      setName("")
    }
  }


  const job="IT Teacher";
  const add="Phnom Pend";
  const obj={
    job,
    add,
  }
  console.log(obj)
  

  function removeMember(id){
    const filterMember=member.filter(m=>m.id!==id);
    setMember(filterMember)
    console.log(id)
  }
  return (
      //we use ref={inputRef} after sub mit cursor will move to input name text and related useEffect line 238
    <div className="container">
    <form onSubmit={handleSubmit}>
      <h3>submit</h3>
      <div>
        <label htmlFor="name">Full Name</label>
        
        <input value={name} ref={inputRef} onChange={handleName} type="text" id="name" />     
     
      </div>    
      <div>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={handleEmail} type="email" id="email" />
      </div>  
      <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    <ul>
      {member.map((m)=>(
        <li key={m.id}>
          <h2>{m.email}</h2>
          <h5>{m.name}</h5>
          <button onClick={()=> removeMember(m.id)}>remove</button>
        </li>
      ))}
    </ul>
    </div>
  );
}
export default App;



// import React from 'react'
// import { useRef } from "react";

// function App() {
//   const [count,setCount]=useState(0);
//   const ref=useRef(0);
//   function handleIncrement(){
//     setCount(count+1);
//     ref.current++;
//     console.log(`ref:${ref.current}`);
//   }
//   return (
//     <div>
//       <h4>{ref.current}</h4>
//       <button onClick={handleIncrement}>handleIncrement</button>
//     </div>
//   )
// }

// export default App

 
//========= custom Hook related with file usetoggle.js ==========

// import useToggle from "./usetoggle";
// const App=()=>{
//   const [show,toggle]=useToggle();    //this is custom Hook  this value from file usetoggle.js
//   return (
//     <div>
//       {show?<Message/>:null}
//       <button onClick={toggle}>toggle</button>
//     </div>
//   )
//   function Message(){
//     return <h4>Massege...</h4>
//   }
// }
// export default App



// //======== custom hook fetch data ========
// import useFetchData from "./useFetchData";
// const url="https://api.github.com/users"
// const App=()=>{
//   const {isLoading,isError,data:users}=useFetchData(url)
//   if(isLoading){
//     return <h3>Loading.........!</h3>
//   }
//   if(isError){
//     return <h4>somthing went wrong...........</h4>
//   }
//   return (
//     <div>
//       {users.map(({id,avatar_url,login,html_url})=>{
//         return (
//           <article key={id}>
//             <img src={avatar_url} alt="" />
//             <h3>{login}</h3>
//             <h4>{html_url}</h4>
//           </article>
//         )
//       })}
//     </div>
//   )
// }
// export default App 

import NavBar from "./navbar/NavBar"

function App() {
  return (
    <NavBar/>
  )
}

export default App
