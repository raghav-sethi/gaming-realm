"use client";
import classes from "./Login.module.css";
import Link from "next/link";

interface ChildProps {
  status: string;
  setStatus: (param: string) => void;
}

const Login: React.FC<ChildProps> = ({ status, setStatus }) => {
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
      <form action="" name="login" className={classes.loginForm}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Username"
          className={classes.loginInput}
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Enter Password"
          className={classes.loginInput}
        />
        <button className={classes.loginButton}>Login</button>
        <p className={classes.loginText}>
          Don't have Account?{" "}
          <Link href="" className={classes.linkButton} onClick={changeStatus}>
            Register
          </Link>
        </p>
      </form>
    </>
  );
};

export default Login;
