import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [showPassword,setShowPassword] = useState(false);
    const[username,setUserName]= useState("");
    const[email,setEmail] = useState("");
    const [password,setPassword]= useState("");
    
    const handleSubmit = (e)=>{

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="username">Name</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your Name"
            required
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </p>
        <br />
        <p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email Id"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <br />
        <p>
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" :"password"}
            name="password"
            id="password"
            placeholder="Enter your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="button" onClick={()=> setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}Password</button>
          <br />
          <button type="submit">Register</button>
        </p>
        <br />

      </form>
      <button>
        <Link to={"/login"} >Already Have an account ? <span>Login</span></Link>
      </button>
    </div>
  );
};

export default Register;