"use client";
import classes from "./Login.module.css";
import Image from "next/image";
import LoginVideo from "@/public/login.gif";
import { useState } from "react";
import Register from "./Register";
import Link from "next/link";
import { LOGIN_URL } from "@/app/constant";

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
    console.log(LOGIN_URL)
    try{
      const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email:username, password }),
        credentials: "include",
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
      <div className={classes.container}>
        <div className={classes.right}>
          {/* <Image
            src={LoginVideo}
            alt="Login Video"
            className={classes.LoginImage}
            height={1200}
            priority
          /> */}
        </div>
        <div className={classes.left}>

            {status === "Login" ? (<><h1 className={classes.loginHeading}>Login to Gaming Realm</h1>
          <p className={classes.loginText}>
            Welcome Back! Please Login to your account to continue.
          </p>
          <hr className={classes.hrLine} />
          <form action="" name="login" className={classes.loginForm}>
            <input
              type="text"
              name=""
              id=""
              placeholder="Username"
              className={classes.loginInput}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Password"
              className={classes.loginInput}
            />
            <button className={classes.loginButton}>Login</button>
            <p className={classes.loginText}>
              Don't have Account? <Link href="" className={classes.linkButton} onClick={changeStatus}>Register</Link>{" "}
            </p>
          </form></>): (<Register />)}
          
        </div>
      </div>
    </>
  );
};

export default Login;
