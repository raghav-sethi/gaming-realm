"use client";
import React, { useState } from "react";
import classes from "./Profile.module.css";
import Link from "next/link";
import Register from "./Register";
import Login from "./Login";

const Profile = () => {
  const [status, setStatus] = useState<string>("login");
  return (
    <>
      <div className={classes.container}>
        <div className={classes.right}></div>
        <div className={classes.left}>
          {status === "login" ? (
            <Login status={status} setStatus={setStatus} />
          ) : (
            <Register status={status} setStatus={setStatus} />
          )}
        </div>
      </div>
    </>
  );
};
export default Profile;
