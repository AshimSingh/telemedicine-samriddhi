import React from 'react'
import { useState,useEffect } from 'react'
function Home() {
  const [name,setName]=useState('')
  const fetchdata =async()=>{
    const req =await fetch('/api/getdata',{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":'application/json'
      }
    })
    const data =await req.json()
    setName(data.name)
  }
  useEffect(()=>{
    fetchdata()
  },[])
  return (
    
    <div className='h-screen flex justify-center items-center flex-col'>
      <h1 className='text-2xl font-semibold text-blue-500'>Nameste, {name}</h1>
      <h1 className='text-3xl font-semibold'>We are the MERN Developers</h1>

       
    </div>
  )
}

export default Home
