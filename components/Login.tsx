"use client";
import { useState } from "react";
import classes from "./Login.module.css";
import Link from "next/link";
import APIURL from "@/app/constant";

interface ChildProps {
  status: string;
  setStatus: (param: string) => void;
}

const Login: React.FC<ChildProps> = ({ status, setStatus }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");


  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Stated to send to backend")
    console.log(username, password)
    try{
      const response = await fetch(`${APIURL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email:username, password }),
      });
  
      const result = await response.json();
      console.log(result);
      setMessage(result.message);
      if(result.message === "Login Successful"){
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result.user));
        window.location.href = "/";
      }
    }catch(err){
      console.log(err);
      setMessage("Something went wrong");
    }
    }
    

  const changeStatus = () => {
    status === "register" ? setStatus("login") : setStatus("register");
  };

  return (
    <>
      <h1 className={classes.loginHeading}>Login to Gaming Realm</h1>
      <p className={classes.loginText}>
        Welcome Back! Please Login to your account to continue.
      </p>
      <hr className={classes.hrLine} />
      <form action="" name="login" className={classes.loginForm} onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name=""
          id=""
          placeholder="Username"
          className={classes.loginInput}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name=""
          id=""
          placeholder="Enter Password"
          className={classes.loginInput}
        />
        <button className={classes.loginButton} type="submit" >Login</button>
        <p className={classes.loginText}>
          Don't have Account?{" "}
          <Link href="" className={classes.linkButton} onClick={changeStatus}>
            Register
          </Link>
        </p>
        <p>{message}</p>
      </form>
    </>
  );
};

export default Login;
