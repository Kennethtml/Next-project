import React from 'react'
import './../home page/home.styles.scss'
import { useState } from 'react';
import { resetUserPassword } from '../../firebase';

const ResetPassword = () => {
  const [userInput, setUserInput] = useState({ email: "" });
  const [error, setError] = useState("");
   const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  //handle changes in form input
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => {
      return { ...prev, [name]: value };
    });
  };



  //handle password reset
  const handlePasswordReset = async() => {
    try{
        setMessage('')
        setLoading(true)
    await resetUserPassword(userInput.email)
    setMessage('check your email to reset password')
    console.log('workinh')
    }
    catch(error){
        setError('Failed to reset password')

    }

    setLoading(false)

  };




  return (
    <div className="form">
      <form action="">
        <h1>Reset password</h1>
        {error && <p className="error">{error}</p>}
        {message && <p className="message">{message}</p>}

        <label htmlFor="email"> Email</label>
        <input
          type="email"
          onChange={onChangeHandler}
          value={userInput.email}
          name="email"
          placeholder="Enter email"
        />

        <button
          type="submit"
          onClick={handlePasswordReset}
          className="btn"
          disabled={loading}
        >
          Reset password
        </button>
      </form>
    </div>
  );
}

export default ResetPassword