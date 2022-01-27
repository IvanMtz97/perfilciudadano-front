import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onLogin = () => {
    const { email, password } = state;
    if(!email || !password) {
      alert("Email and Password are required");
      return
    };

    navigate("/dashboard");
    // TODO: Add login request to backend
  };

  return(
    <>
      <h3>Login</h3>

      <label>Username:</label>
      <input type="text" id="email" value={state.email} onChange={handleChange} />

      <br /><br />

      <label>Password:</label>
      <input type="password" id="password" value={state.password} onChange={handleChange} />

      <br /><br />

      <button onClick={onLogin}>Login</button>
    </>
  )
};

export default LoginScreen;