"use client";
import React, { useState } from "react";
import classes from "./SettingPage.module.css";
import Link from "next/link";
import About from "./setting/AboutPage";
import Themes from "./setting/ThemePage";
import Font from "./setting/FontPage";

const Setting = () => {
  const [setting, setSetting] = useState("About");
  return (
    <>
      <div className={classes.container}>
        <div className={classes.left}>
          <h1 className={classes.leftHeading}>Settings</h1>
          <button
            className={classes.leftButton}
            onClick={() => setSetting("Themes")}
          >
            Themes
          </button>
          <button
            className={classes.leftButton}
            onClick={() => setSetting("Font")}
          >
            Font
          </button>
          <button
            className={classes.leftButton}
            onClick={() => setSetting("About")}
          >
            About
          </button>
          <Link
            className={classes.leftButton}
            href="https://6436f775d29810126eda99ce--gentle-phoenix-29fa99.netlify.app/Team%204%20(Group%2024).pdf"
          >
            Template
          </Link>
        </div>
        <div className={classes.right}>
          {setting === "Themes" && <Themes />}
          {setting === "About" && <About />}
          {setting === "Font" && <Font />}
        </div>
      </div>
    </>
  );
};

export default Setting;
