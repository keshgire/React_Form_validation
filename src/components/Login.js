import React,{useState} from 'react'


function Login() {
    const[name1,setName1]=useState()
    const[pass1,setPass1]=useState()
    let Name=localStorage.getItem('Name')
    let Password=localStorage.getItem('Password')
    const handleValidation=()=>{
     name1===Name && pass1===Password?alert('Login Success'):alert("Enter Valaid login details")
    }
  return (
    <div>
        <h1>Login </h1>
        <input type='text' placeholder='Enter User Name' onChange={(e)=>setName1(e.target.value)} /> <br/><br/>
        <input type='text' placeholder='Enter password' onChange={(e)=>setPass1(e.target.value)}/><br/><br/>
        <button onClick={handleValidation}>Submit</button>
    </div>
  )
}

export default Login