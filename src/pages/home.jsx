import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import {
  createUserwithAuth,
  authEventListener,
  signUserOut,
  signInwithGoogleProvider,
} from "../firebase";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

export const Home = () => {
  //extract the setUser function from the auth context
  const { setUser, user } = useContext(AuthContext);

  const [userInput, setUserInput] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  useEffect(() => {
    authEventListener((res) => {
      if (res.displayName === null) {
        console.log(userInput.displayName);
        setUser({ displayName: userInput.displayName, email: res.email });
      } else {
        setUser({ displayName: res.displayName, email: res.email });
      }
    });
  }, []);

  console.log(user);

  const signOutHandler = () => {
    signUserOut();
    setUser(null);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await createUserwithAuth(userInput.email, userInput.password);
    // console.log(res);
  };

  return (
    <Signup>
      <form action="">
        <label htmlFor="displayName"> Display Name</label>
        <input
          type="text"
          onChange={onChangeHandler}
          value={userInput.displayname}
          name="displayName"
        />
        <label htmlFor="email"> Email</label>
        <input
          type="email"
          onChange={onChangeHandler}
          value={userInput.email}
          name="email"
        />

        <label htmlFor="password"> Password</label>
        <input
          type="password"
          onChange={onChangeHandler}
          value={userInput.password}
          name="password"
        />

        <label htmlFor="confirm-password"> Confirm Password</label>
        <input
          type="pasword"
          onChange={onChangeHandler}
          value={userInput.confirmPassword}
          name="confirmPassword"
        />

        <button type="submit" onClick={submitHandler}>
          Submit
        </button>
        <button type="button" onClick={signOutHandler}>
          sign out
        </button>
        <button type="button" onClick={signInwithGoogleProvider}>
          sign in with Google
        </button>
      </form>
    </Signup>
  );
};

const Signup = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }
`;
