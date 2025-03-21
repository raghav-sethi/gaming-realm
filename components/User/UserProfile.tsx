"use client";
import React, { use, useEffect, useState } from "react";
import classes from "./UserProfile.module.css";
import Link from "next/link";
import { API_URLSS } from "@/app/constant";

const UserProfile = () => {
  const [userData, setUserData] = useState<{
    name: string;
    email: string;
  } | null>(null);

  useEffect(() => {
    const sendRequest = async () => {
      const token = localStorage.getItem("userId");
      if (!token) return;
      console.log("Home Page:", token);

      if (token) {
        try {
          const response = await fetch(`${API_URLSS}/users/${token}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          const data = await response.json();
          console.log("Fetched Data:", data);
          setUserData(data.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
    sendRequest();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("theme");
    window.location.href = "/profile";
  };

  return (
    <>
      <div className={classes.container}>
        <div>
          <h2 className={classes.heading}>Profile</h2>
          <p className={classes.text}>
            Username: {userData && userData.name ? userData.name : "Hi Guest"}
          </p>
          <p className={classes.text}>
            Email: {userData && userData.email ? userData.email : "Hi Guest"}
          </p>
        </div>
        <div>
          <Link href="/settings" className={classes.setting}>
            Settings
          </Link>
        </div>
        {userData && (
          <>
            <div>
              <p className={classes.setting} onClick={handleLogout}>
                Logout
              </p>
            </div>
            <div>
              <Link href="">see complete Profile</Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default UserProfile;
