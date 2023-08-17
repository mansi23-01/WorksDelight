import React, { useState } from "react";
import "./style2.css";
import { useAuth } from "./Auth";
import { useNavigate, useLocation } from "react-router-dom";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  // const handleLogin = () => {
  //   // Implement your login logic here
  //   console.log("Login attempt:", loginData);
  // };

  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation()
  const previousPath = location.state?.path || '/'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginData.email === "" || loginData.password === "") {
      alert("Please fill both Email and Password.");
    }
    // console.log("in");

    else{
      auth.login(loginData);
      navigate(previousPath, {replace : true});

    }
  };

  return (
    <div className="inputs">
      <div>
        <input
          type="text"
          name="email"
          value={loginData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
      </div>

      <div>
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleInputChange}
          placeholder="Password"
        />
      </div>

      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default LoginForm;
