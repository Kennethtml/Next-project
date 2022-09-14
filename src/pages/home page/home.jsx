import React, { useEffect } from "react";

//import styles
import styled from "styled-components";
import "./home.styles.scss";
import { useState } from "react";
import {
  authEventListener,
  signUserOut,
  signInwithGoogleProvider,
  auth,
  createUserwithAuth,
} from "../../firebase";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {useNavigate} from 'react-router-dom'

export const Home = () => {
  //extract the setUser function from the auth context
  const formDetails = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  //states
  const { setUser, user } = useContext(AuthContext);
  const [userInput, setUserInput] = useState(formDetails);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate()

  //handle changes in form input
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  //sign in with google authentication
  const signInwithGoogle = async () => {
    try{
      setError('')
      setLoading(true);
      await signInwithGoogleProvider();
       navigate("/dashboard");
    }
    catch(error){
      console.log(error)
      setError('failed to authenticate')
      setLoading(false);

    }
    
    
  };

  //sign in with email and password
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.password !== userInput.confirmPassword) {
      return setError("Passwords do not match");
    }

    setError("");
    createUserwithAuth(userInput.email, userInput.password)
      .then((userCredential) => {
        navigate('/dashboard')
      })
      .catch((error) => {
        console.log(error.message);


        switch (error.message) {
          case "Firebase: Error (auth/email-already-in-use).":
            setError("Email already in use");
            break;
          case "Firebase: Error (auth/network-request-failed).":
            setError("Check your connection settings");
            break;

          default:
            setError("Failed to create an Account");
        }
      });
  };





console.log(error)
  
  return (
    <div className="form">
      <form action="">
        <h1>Create an account</h1>
        <p>{user && user.email}</p>
       {error && <p className="error">{error}</p>}

        <label htmlFor="email"> Email</label>
        <input
          type="email"
          onChange={onChangeHandler}
          value={userInput.email}
          name="email"
          placeholder="Enter email"
        />

        <label htmlFor="password"> Password</label>
        <input
          type="password"
          onChange={onChangeHandler}
          value={userInput.password}
          name="password"
          placeholder="Enter password"
        />

        <label htmlFor="confirm-password"> Confirm Password</label>
        <input
          type="password"
          onChange={onChangeHandler}
          value={userInput.confirmPassword}
          name="confirmPassword"
          placeholder="confirm password"
        />

        <button
          type="submit"
          onClick={handleSubmit}
          className="btn"
          disabled={loading}
        >
          Sign In
        </button>

        <button
          type="button"
          onClick={signInwithGoogle}
          className="btn btn-google"
          disabled={loading}
        >
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt="google image"
          />
          sign in with Google
        </button>
      </form>

     
    </div>
  );
};

const Signup = styled.div``;
