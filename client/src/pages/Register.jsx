import React from 'react'
import './Register.css'
import { useState} from 'react'
// import {useHistory} from 'react-router-dom'
import { useNavigate } from "react-router-dom"
const Register = () => {
  const history =useNavigate()
  const [form,setfrom]=useState({
    name:"",
    email:"",
    work:"",
    phone:"",
    password:"",
    cpass:""
  })
  const handelChange=(e)=>{
    e.preventDefault();
    const name=e.target.name
    const value=e.target.value
    setfrom({...form,[name]:value})
  }
  
  const PostData =async (e)=>{

    e.preventDefault()
    const {name,email,work,phone,password,cpass}=form
    const res = await fetch("/api/register",{
    
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name,email,work,phone,password,cpass
      })
})
console.log(res)
const data =await res.json()

if(data.status ==422 || !data){
  window.alert("Inv Reg")
  console.log("Inc reg")
}
else{
  alert("successfull")
  
}
  }
  
  return (
    <div className=' h-screen flex justify-center items-center bg-gray-200'>
       <div className='bg-white md:w-[70%] w-[90%] flex justify-center items-center shadow-md rounded-md md:mt-0 mt-5'>
        <form className='flex flex-col md:w-[40%] w-full m-5' method='POST'>
          <h3 className='font-bold text-2xl p-2 '>Sign In</h3>
          
          <input type='text' name='name' value={form.name} onChange={handelChange} className=' border-b-[3px]  border-grey-400 p-2 my-2 fonz' placeholder=" &#xf007; Name"></input>
        {/* <div className='flex'>
          <i className="fa-solid fa-user absolute pt-5"></i>
          <input type='text' name='name' classNa3e=' outline-grey-400 p-2 my-2' placeholder=' Name'></input>
        </div> */}
         
          <input value={form.email} onChange={handelChange} type='text' name='email'  className=' border-b-[3px]  border-grey-400 p-2 my-3 fonz' placeholder=" &#xf0e0; Email"></input>


          <input value={form.work} onChange={handelChange} type='text' name='work' className=' border-b-[3px]  border-grey-400 p-2 my-3 fonz' placeholder=" &#xf0e0; work"></input>

          
          <input value={form.phone} onChange={handelChange} type='tel' name='phone' className=' border-b-[3px]  border-grey-400 p-2 my-3 fonz' placeholder=" &#xf0e0; Phone"></input>

          <input value={form.password} onChange={handelChange} type='password' name='password' className=' border-b-[3px]  border-grey-400 p-2 my-3 fonz' placeholder=" &#xf0e0; Password"></input>

          
          <input value={form.cpass} onChange={handelChange} type='password' name='cpass' className=' border-b-[3px]  border-grey-400 p-2 my-3 fonz' placeholder=" &#xf0e0; Confirm Password"></input>
          <button className='bg-blue-300 w-[150px] p-3 font-semibold text-white' type='submit' onClick={PostData}>Register</button>
        </form>
        <img src='https://cdn.dribbble.com/users/4781516/screenshots/10796279/media/04eb24250e23400dc0162080a231b70c.gif' className='w-[40%] h-[60%] md:flex hidden'></img>
       </div>
    </div>
  )
}

export default Register
