import React from "react";
import classes from "./ThemePage.module.css";
import Image from "next/image";
import UltraVilot from "../../public/Gaming Realm_files/Ultra Violet.png";
import GreenGable from "../../public/Gaming Realm_files/GreenGables.png";
import JustBlack from "../../public/Gaming Realm_files/JustBlack.png";
import Oceanic from "../../public/Gaming Realm_files/Oceani.png";
const ThemePage = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.card}>
            <Image
              src={UltraVilot}
              alt="Piyush Kumar"
              width={200}
              height={200}
              className={classes.image}
            />
            <p className={classes.imageText}>Ultra Violet</p>
          </div>
          <div className={classes.card}>
            <Image
              src={GreenGable}
              alt="Piyush Kumar"
              width={200}
              height={200}
              className={classes.image}
            />
            <p className={classes.imageText}>Green Gable</p>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.card}>
            <Image
              src={JustBlack}
              alt="Piyush Kumar"
              width={200}
              height={200}
              className={classes.image}
            />
            <p className={classes.imageText}>Just Black</p>
          </div>
          <div className={classes.card}>
            <Image
              src={Oceanic}
              alt="Piyush Kumar"
              width={200}
              height={200}
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
