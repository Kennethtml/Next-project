import React from 'react'
import { useState, useContext} from 'react';
import { signInUser } from '../../firebase';
import './../home page/home.styles.scss';
import { AuthContext } from '../../context/authContext';
import { useNavigate,Link } from "react-router-dom";


function Signin() {
  const formDetails = {
    email: "",
    password: "",
  };

  const [userInput, setUserInput] = useState(formDetails);
    const [error, setError] = useState("");
    const[loading,setLoading]=useState(false);
    const{user,setUser}=useContext(AuthContext);
      const navigate = useNavigate();

  //handle changes in form input
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => {
      return { ...prev, [name]: value };
    });
  };


    const handleSubmit = (e) => {
      e.preventDefault();

      setError("");
     signInUser(userInput.email, userInput.password)
        .then((userCredential) => {
             navigate("/dashboard");
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


  return (
    <div className='form'>
      <form action="">
        <h1>Sign In</h1>
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

        <button
          type="submit"
          onClick={handleSubmit}
          className="btn"
          disabled={loading}
        >
          Sign In
        </button>
        <Link to='/forgot-password'>
            Forgot password
        </Link>
        
      </form>
    </div>
  );
}

export default Signin