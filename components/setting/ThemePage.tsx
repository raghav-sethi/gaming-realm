import React, { useEffect, useState } from "react";
import classes from "./ThemePage.module.css";
import Image from "next/image";
import UltraVilot from "../../public/Gaming Realm_files/Ultra Violet.png";
import GreenGable from "../../public/Gaming Realm_files/GreenGables.png";
import JustBlack from "../../public/Gaming Realm_files/JustBlack.png";
import Oceanic from "../../public/Gaming Realm_files/Oceani.png";
import { useTheme } from "next-themes";
import {API_URLSS} from "@/app/constant";

const ThemePage = () => {
  const { theme, setTheme } = useTheme();

  
   useEffect(() => {
    const setTheme = async () => {
      try {
        const response = await fetch(`${API_URLSS}/users/${localStorage.getItem("userId")}/preference`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userTheme: theme }),
        });
        const result = await response.json();
        console.log(result);
      }
      catch (err) {
        console.log(err);
      }
    };
    setTheme();
  }, [theme]);

  if (typeof window === "undefined") return null;


  return (
    <>
      <div className={classes.container}>
        <div className={classes.row}>
          <div
            className={classes.card}
            onClick={() => {
              console.log(theme);
              return setTheme("ultraviolet");
            }}
          >
            <Image
              src={UltraVilot}
              alt="Piyush Kumar"
              width={400}
              height={500}
              className={classes.image}
            />
            <p className={classes.imageText}>Ultra Violet</p>
          </div>
          <div
            className={classes.card}
            onClick={() => {
              console.log(theme);
              return setTheme("greengable");
            }}
          >
            <Image
              src={GreenGable}
              alt="Piyush Kumar"
              width={400}
              height={500}
              className={classes.image}
            />
            <p className={classes.imageText}>Green Gable</p>
          </div>
        </div>
        <div className={classes.row}>
          <div
            className={classes.card}
            onClick={() => {
              console.log(theme);
              return setTheme("justblack");
            }}
          >
            <Image
              src={JustBlack}
              alt="Piyush Kumar"
              width={400}
              height={500}
              className={classes.image}
            />
            <p className={classes.imageText}>Just Black</p>
          </div>
          <div
            className={classes.card}
            onClick={() => {
              console.log(theme);
              return setTheme("Oceanic");
            }}
          >
            <Image
              src={Oceanic}
              alt="Piyush Kumar"
              width={400}
              height={500}
              className={classes.image}
            />
            <p className={classes.imageText}>Oceanic</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemePage;
