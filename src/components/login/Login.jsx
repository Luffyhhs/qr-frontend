import React, { useRef } from "react";
import "./login.scss";
import mab from "../../assets/mab_logo.png";

const Login = (props) => {
  const enterEmail = useRef();
  const enterPassword = useRef();

  const loginFormHandler = (e) => {
    e.preventDefault();
    const enteredEmail = enterEmail.current.value.trim();
    const enteredPassword = enterPassword.current.value.trim();
    if (enteredEmail.includes("@") && enteredPassword.length > 6) {
      props.loginData(enteredEmail, enteredPassword);
      enterEmail.current.value = "";
      enterPassword.current.value = "";
      console.log("logged in");
    } else {
      console.log("Sorry Try again ");
      enterEmail.current.value = "";
      enterPassword.current.value = "";
    }
  };

  return (
    <div className="login-container">
      <img src={mab} alt="MAB Logo" />
      <form action="" onSubmit={loginFormHandler}>
        <div className="input-box">
          <input type="text" ref={enterEmail} id="input_email" />
          <span></span>
          <label htmlFor="input_email">Email</label>
        </div>
        <div className="input-box">
          <input type="password" ref={enterPassword} id="input_pass" />
          <span></span>
          <label htmlFor="input_pass">Password</label>
        </div>
        <button className="button">Login</button>
      </form>
    </div>
  );
};

export default Login;
