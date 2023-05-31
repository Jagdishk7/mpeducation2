import React from "react";
import "./Registration.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate , Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate()

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/register", { name,email, password })
      .then(resp=>{
        if(resp.data==='userExist'){ 
          alert('User Already Exist')
        }
        else if(resp.data==='notexist'){
            alert('Account Created Succesfully')
            history('/')
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
      <h1 className='page-heading'>Register</h1>
        <form action="POST" className="form">
          <input
            aria-label="Name"
            type="name"
            className="form-control"
            id="name"
            placeholder="Enter Full Name"
            aria-required="true"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
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
            Create Account
          </button>
          <Link to={'/login'}><p className="mt-2 mb-0">Already have an Account ? </p></Link>
        </form>
      </div>
    </>
  );
}

export default Register;










//   const [state, setState] = React.useState({
//     email: "",
//     password: "",
//     cPassword: "",
//   });

//   const [passMatch, setPassMatch] = React.useState(true);

//   React.useEffect(() => {
//     validatePassword();
//   }, [state]);

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setState((prevState) => ({
//       ...prevState,
//       [id]: value,
//     }));
//   };

//   const validatePassword = () => {
//     state.password === state.cPassword
//       ? setPassMatch(true)
//       : setPassMatch(false);
//   };

//   const createAccount = () => {
//     console.log("createAccount");
//     validatePassword();
//   };

//   return (
//     <>
//         <div className="login-page">

//             <div className="form">
//               <input
//                 aria-label="Email"
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 placeholder="Enter email"
//                 value={state.email}
//                 onChange={handleChange}
//                 aria-required="true"
//               />

//               <input
//                 aria-label="Password"
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 placeholder="Password"
//                 value={state.password}
//                 onChange={handleChange}
//                 aria-required="true"
//               />

//               <input
//                 aria-label="Confirm Password"
//                 type="password"
//                 className={`form-control ${
//                   passMatch ? "" : "input-error-border"
//                 }`}
//                 id="cPassword"
//                 placeholder="Confirm Password"
//                 value={state.cPassword}
//                 onChange={handleChange}
//                 aria-required="true"
//                 aria-invalid={passMatch ? true : false}
//               />

//               <div className="input-error">
//                 {state.password !== state.cPassword ? "" : ""}
//               </div>
//               <div className="input-error">
//                 {passMatch ? "" : "Error: Passwords do not match"}
//               </div>

//               <button aria-label="Create Account" onClick={createAccount}>
//                 Create Account
//               </button>
//             </div>
          
//         </div>
//     </>
//   );
// }
