import Link from "next/link";
import React from "react";
import classes from "./Register.module.css";
const Register = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.registerHeading}>Sign Up</h1>
      <p className={classes.registerText}>Welcome to Gaming Realm! Many new games waiting to be played.</p>
      <hr className={classes.hrLine} />
        <form action="" name="register" className={classes.registerForm}>
      <input type="text" placeholder="Name"  className={classes.loginInput}/>
      <input type="text" placeholder="Username" className={classes.loginInput}/>
        <input type="text" placeholder="Email" className={classes.loginInput}/>
        <input type="password" placeholder="Password" className={classes.loginInput}/>
        <input type="password" placeholder="Confirm Password" className={classes.loginInput}/>
        <button className={classes.loginButton}>Sign-Up</button>
        </form>
        <p>Already have an account? <Link href="" className={classes.linkButton}>Login</Link></p>
    </div>
  );
}

export default Register;