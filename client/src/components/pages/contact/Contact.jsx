// import React from "react";
// import "../register&login/Registration.css"
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Alert from 'react-bootstrap/Alert';

// function Contact() {

//   const [show, setShow] = useState(false);

//     const [email, setEmail] = useState("");

//     const sendEmail = async (e) => {
//         e.preventDefault();

//         const res = await fetch("/contact", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 email
//             })
//         });

//         const data = await res.json();
//         console.log(data);

//         if (data.status === 401 || !data) {
//             console.log("error")
//         } else {
//             setShow(true);
//             setEmail("")
//             console.log("Email sent")
//         }
//     }

//   return (
// <>

//   <div className="login-page">
//   <h1 className='page-heading'>Contact Us</h1>
//   {
//     show ? <Alert variant="primary" onClose={() => setShow(false)} dismissible>
//         Your Email Succesfully Send
//     </Alert> : ""
// }
//   <form action="POST" className="form">
//       <input
//         aria-label="Email"
//         type="name"
//         className="form-control"
//         id="name"
//         placeholder="Enter Full Name"
//         aria-required="true"

//       />
//       <input
//         aria-label="Email"
//         type="email"
//         className="form-control"
//         id="email"
//         placeholder="Enter Email"
//         aria-required="true"
//         value={email} onChange={(e) => setEmail(e.target.value)}
//       />

//       <input
//         aria-label="Password"
//         type="number"
//         className="form-control"
//         id="password"
//         placeholder="Mobile Number"
//         aria-required="true"

//       />

//       <button type="submit" aria-label="Create Account" onClick={sendEmail}>
//         Contact Us
//       </button>

//       <Link to={'https://icoesolution.com/'}>Visit our Official Website</Link>

//     </form>

//   </div>
// </>
//   );
// }

// export default Contact;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../register&login/Registration.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

const Contact = () => {
  const [show, setShow] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bmqnwm3",
        "template_84cl86c",
        form.current,
        "NGu_w81vu7tL7AZW7"
      )
      .then(
        (result) => {
          setShow(true)
          console.log(result.text);
        },
        (error) => {
          alert("Some error ");
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="login-page">
        <h1 className="page-heading">Contact Us</h1>
        {show ? (
          <Alert variant="primary" onClose={() => setShow(false)} dismissible>
            Your Email Succesfully Send
          </Alert>
        ) : (
          ""
        )}
        <form ref={form} onSubmit={sendEmail} className="form">
          <input
            aria-label="Name"
            name="name"
            type="text"
            className="form-control"
            placeholder="Enter Full Name"
            aria-required="true"
          />
          <input
            aria-label="Email"
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter Email"
            aria-required="true"
          />

          <input
            aria-label="Mobile Number"
            type="number"
            name="mobile"
            className="form-control"
            placeholder="Mobile Number"
            aria-required="true"
          />

          <textarea aria-label="Message"  name="message" className="form-control mt-2" placeholder="Message"
            aria-required="true"></textarea>

          <button type="submit" aria-label="Create Account">
            Submit
          </button>

          <Link to={"https://icoesolution.com/"}>
            Visit our Official Website
          </Link>
        </form>
      </div>
    </>
  );
};

export default Contact;

{
  /* <form ref={form} onSubmit={sendEmail}>
<label>Name</label>
<input type="text" name="name" />
<label>Email</label>
<input type="email" name="email" />
<label>Mobile Number</label>
<input type="number" name="mobile" />
<label>Message</label>
<textarea name="message" />
<input type="submit" value="Send" />
</form> */
}
