import React from "react";
import { useState, useContext } from "react";
import userContext from "../context/userContext";

function Login() {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const {setuser}=useContext(userContext);
  const handelSubmit = (e) => {
    e.preventDefault()
    setuser({userName,password})
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => {
          setuserName(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <button onClick={handelSubmit}>Login</button>
    </div>
  );
}

export default Login;
