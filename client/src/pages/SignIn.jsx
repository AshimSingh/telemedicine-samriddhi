import React,{useContext} from 'react'
import './Register.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App'


const SignIn = () => {
  const {state,dispatch} =useContext(UserContext)
  

  // context.dispatch({type:"User",payload:"ashim babe"})
  const Navigate =useNavigate()
  const [log_info,set_info]=useState({
    email:"",
    password:""
  })
  const handelChange=(e)=>{
    e.preventDefault()
    const name =e.target.name
    const value =e.target.value
    set_info({...log_info,[name]:value})
  }

  const Post =async(e)=>{
    e.preventDefault()
    const {email,password}=log_info
    
    const res = await fetch("/api/login",{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,password
      })
    })
    const data = await res.json()
    console.log("ashim",data)
    if(res.status == 422 || !data){
      alert("Invalid Credentials")
    }
    else{
      dispatch({trpe:"User",payload:true})
      alert("logged in sucessfully")
      Navigate('/')

    }

  }
  return (
    <div className=' h-screen flex justify-center items-center bg-gray-200'>
       <div className='bg-white md:w-[70%] w-[90%] flex justify-center items-center shadow-md rounded-md min-h-[50%]'>
        <form className='flex flex-col md:w-[40%] w-full m-5 ' method='POST'>
          <h3 className='font-bold text-2xl p-2 '>LogIn In</h3>
          
          
         
          <input type='text' value={log_info.name} onChange={handelChange} name='email' className=' border-b-[3px]  border-grey-400 p-2 my-3 fonz' placeholder=" &#xf0e0; Email"></input>


         

          <input type='password' value={log_info.password} onChange={handelChange} name='password' className=' border-b-[3px]  border-grey-400 p-2 my-3 fonz' placeholder=" &#xf0e0; Password"></input>

          
  
          <button className='bg-blue-300  p-3 font-semibold text-white' onClick={Post}>Register</button>
        </form>
        <img src='https://cdn.dribbble.com/users/4781516/screenshots/10796279/media/04eb24250e23400dc0162080a231b70c.gif' className='w-[40%] h-[60%] md:flex hidden'></img>
       </div>
    </div>
  )
}

export default SignIn
