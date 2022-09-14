import React from 'react'
import './dashboard.styles.scss'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/authContext'
import { signUserOut } from '../../firebase'
import {useNavigate} from 'react-router-dom'

const Dashboard = () => {
const{user,setUser}=useContext(AuthContext)
  const navigate=useNavigate();

  
  const signOutHandler = () => {
    signUserOut();
    setUser(null);
     navigate("/");

  };

  return (
    <div className='dashboard'>
      <h2>PROFILE</h2>
      <h3>{user && user.email}</h3>

      <button type="button" onClick={signOutHandler}>
        sign out
      </button>
    </div>
  );
}

export default Dashboard