import React from "react";
import styled from "styled-components";
import { useState } from "react";

export const Home = () => {
 const [userInput, setUserInput]=useState({
  name:'',
  password:'',
  confirmPassword:''
 })

 const onChangeHandler=(e)=>{
  const{name,value}=e.target
  setUserInput((prev)=>{
    return {...prev,[name]:value}
  })

 }

 console.log(userInput)

  return (
    <Signup>
      <form action="">
        <label htmlFor="email"> Email</label>
        <input type="email" onChange={onChangeHandler} value={userInput.name} name="name"/>

        <label htmlFor="password"> Password</label>
        <input type="password" onChange={onChangeHandler} value={userInput.password} name='password'/>

        <label htmlFor="confirm-password"> Password</label>
        <input type="pasword" onChange={onChangeHandler} value={userInput.confirmPassword} name='confirmPassword'/>


        <button>Submit</button>
      </form>
    </Signup>
  );
};

const Signup=styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:center;

form{
  display:flex;
  flex-direction:column;
}



`
