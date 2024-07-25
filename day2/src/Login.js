import React, { useState } from "react";
import './Login.css';
const Login = () => {
  const [change, setChange] = useState(false);

  const toggleView = () => {
    setChange(!change);
  };
  const loginalert =()=>
  {
    alert('login succesfully!');
  }

  const LoginPage = () => {
    return (
      <div className ="logincontainer" >
        <form className="loginform">
        <h2>Login</h2>
        <label>Email</label>
        <input type="email" placeholder="Enter the email"></input>
        
        <label>Password</label>
        <input type="password" placeholder="Enter the password"></input>
       
        <button className="loginbutton" onClick={loginalert}>Login</button>

        <button onClick={toggleView}>Register page</button>
        </form>
      </div>
    );
  };
  const showAlert = () => {
    alert('Registered Succesfully!');
  };

  const RegisterPage = () => {
    return (
      <div className ="registercontainer">
        
        <h2>Register Page</h2>
        <form className="registerform">
        <label>Name</label>
        <input type="text" placeholder="Enter the name"></input>
        <label>Email</label>
        <input type="email" placeholder="Enter the email"></input>
        <label>Password</label>
        <input type="password" placeholder="Enter the password"></input>
        <label>Confrim Password</label>
        <input type="password" placeholder="Confirm your password"></input>
        
        <button type="button" onClick={showAlert}>Register</button>
        <lable>Alredy have an account?</lable>
        <button onClick={toggleView}>Login page</button>
        </form>
      </div>
    );
  };

  return (
    <div>
      {change ? <LoginPage />:<RegisterPage />}
    </div>
  );
};

export default Login;