"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import searchIcon from "@/public/Gaming Realm_files/Untitled design (5).png";
import notificationIcon from "@/public/Gaming Realm_files/Untitled design (4).png";
import profileIcon from "@/public/Gaming Realm_files/batman_hero_avatar_comics-512.webp";
import classes from "./TopBar.module.css";
import UserProfile from "./User/UserProfile";
import { API_URLSS } from "@/app/constant";
import Search from "./Search/Search";

const TopBar = () => {
  const [profile, setProfile] = useState(false);
  const [userData, setUserData] = useState<{ name: string } | null>(null);
  const [searchModal, setSearchModal] = useState(false);

  const searchInput = useRef<HTMLInputElement>(null);

  const closeModal = () => {
    console.log("Closing Search Modal");
    setSearchModal(false);
  };

  const handleModal = () => {
    setSearchModal(!searchModal);
  };

  const handleProfile = () => {
    setProfile(!profile);
  };

  useEffect(() => {
    const sendRequest = async () => {
      const token = localStorage.getItem("userId");
      if (!token) return;
      try {
        const response = await fetch(`${API_URLSS}/users/${token}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setUserData(data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    sendRequest();
  }, []);

  return (
    <div className={classes.topBar}>
      <section>
        <h2 style={{ fontSize: "30px" }}>
          {userData && userData.name ? userData.name : "Hi Guest"}
        </h2>
        <p>Welcome Back, many games waiting to be played.</p>
      </section>
      <section className={classes.topBarIcons}>
        <div className={classes.searchIcon}>
          <Image
            className={`${classes.topBarIcon} ${classes.searchIconImage}`}
            src={searchIcon}
            alt="searchIcon"
            onClick={handleModal}
            // onBlur={handleBlur}
          />
        </div>

        <Image
          className={classes.topBarIcon}
          src={notificationIcon}
          alt="notificationIcon"
        />
        <Image
          className={classes.topBarIcon}
          src={profileIcon}
          alt="profileIcon"
          onClick={handleProfile}
        />
        {profile && <UserProfile />}
      </section>

      <Search isOpen={searchModal} onClose={closeModal} />
    </div>
  );
};

export default TopBar;
