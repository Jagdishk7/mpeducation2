import React from "react";
import "./Registration.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate()

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/login", { email, password })
      .then(resp=>{
        if(resp.data==='accountExist'){
          alert('Successfully Logged in')
          history('/',{state:{id:email}})
        }
        else if(resp.data==='emailNotExist'){
          alert('Please make an account')
          history('/register')
        }
        else if(resp.data==='passNotMatch'){
          alert('Please Enter Correct Password')
        }
      })
      .catch((e)=>{
        alert('Something went wrong')
        console.log(e)
      })
    } 
    catch (e) {
        console.log(e)
    }
  }

  return (
    <>
      <div className="login-page">
      <h1 className='page-heading'>Login</h1>
        <form action="POST" className="form">
          <input
            aria-label="Email"
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            aria-required="true"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            aria-label="Password"
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            aria-required="true"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button type="submit" aria-label="Create Account" onClick={submit}>
            Login
          </button>

          <Link to={'/register'} ><p className="mt-2 mb-0">Click to create an account</p></Link>
          
        </form>
      </div>
    </>
  );
}

export default Login;
