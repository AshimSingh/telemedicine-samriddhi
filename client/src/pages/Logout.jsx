import React,{useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App'
const Logout = () => {
  const {state,dispatch} = useContext(UserContext)
  const fetch_log =async ()=>{
    const res =await fetch('/api/logout',{
      method:"GET",
      Headers:{
        Accept:'application/json',
        "Content-Type":"application/json"
      }
    })
    if(res.status ==200){
      {
        dispatch({type:"User",pay})
        setTimeout(()=>{
          navigate('/')
        },2000)
      }
    }
   
  }
  useEffect(()=>{
    fetch_log()
  },[])
  const navigate =useNavigate()
  return (

    <div className='h-screen justify-center items-center flex'>

      <h1>Loging out...</h1>
      
    </div>
  )
}

export default Logout
