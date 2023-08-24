
import './App.css'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from './components/navbar'
import Signin from './pages/SignIn'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Register from './pages/Register'
import Error from './pages/404';
import Logout from './pages/Logout';
import React, { useReducer,useContext } from 'react';
import { initialState,reducer } from './store/useReducer';

export const UserContext = React.createContext()

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <>
      <UserContext.Provider value={{state,dispatch}}>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path='/logout' element={<Logout/>}/>
        <Route path="/signup" element={<Register/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>
      
    </>
  )
}

export default App
