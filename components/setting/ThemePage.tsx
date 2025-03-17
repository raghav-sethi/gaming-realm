import React, { use, useEffect, useState } from "react";
import classes from "./ThemePage.module.css";
import Image from "next/image";
import UltraVilot from "../../public/Gaming Realm_files/Ultra Violet.png";
import GreenGable from "../../public/Gaming Realm_files/GreenGables.png";
import JustBlack from "../../public/Gaming Realm_files/JustBlack.png";
import Oceanic from "../../public/Gaming Realm_files/Oceani.png";
const ThemePage = () => {
  const [selectedTheme, setSelectedTheme] = useState("");


  useEffect(() => {
    if (selectedTheme) {
        if(selectedTheme === "Ultra Violet"){
          // document.documentElement.style.setProperty("--background-color", "#5B3E90");
          document.documentElement.style.setProperty("--setting-background", "rgba(69, 87, 100, 0.66)");
          document.documentElement.style.setProperty("--fullscreen-background", "linear-gradient(rgb(28, 19, 53), rgb(100, 108, 143))");
          document.documentElement.style.setProperty("--maincontainer-background", "rgb(8, 2, 39)");
          document.documentElement.style.setProperty("--container-background", "rgb(27, 40, 70)");
        }
        else if(selectedTheme === "Green Gable"){
          
          document.documentElement.style.setProperty("--setting-background", "rgba(67, 119, 71, 0.61)");
          document.documentElement.style.setProperty("--fullscreen-background", "linear-gradient(rgb(54, 116, 55), rgb(151, 188, 98))");
          document.documentElement.style.setProperty("--maincontainer-background", "rgba(56, 105, 44, 0.604);");
          document.documentElement.style.setProperty("--container-background", "rgb(19, 61, 13);");
        }
        else if(selectedTheme === "Just Black"){
         
          document.documentElement.style.setProperty("--setting-background", "rgba(97, 99, 99, 0.65)");
          document.documentElement.style.setProperty("--fullscreen-background", "linear-gradient(rgb(19, 17, 17), rgb(117, 114, 114))");
          document.documentElement.style.setProperty("--maincontainer-background", "rgb(0, 0, 0)");
          document.documentElement.style.setProperty("--container-background", "rgb(44, 43, 43)");
        }
        else if(selectedTheme === "Oceanic"){
      
          document.documentElement.style.setProperty("--setting-background", "rgba(67, 107, 119, 0.61)");
          document.documentElement.style.setProperty("--fullscreen-background", "#455764a8");
          document.documentElement.style.setProperty("--maincontainer-background", "rgb(10, 50, 73)");
          document.documentElement.style.setProperty("--container-background", "rgba(39, 82, 107, 0.76)");
        }
      
      console.log("Theme Changed to: ", selectedTheme);}
    },[selectedTheme]);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.card} onClick={() => setSelectedTheme("Ultra Violet")}>
            <Image
              src={UltraVilot}
              alt="Piyush Kumar"
              width={200}
              height={200}
              className={classes.image}
            />
            <p className={classes.imageText}>Ultra Violet</p>
          </div>
          <div className={classes.card} onClick={() => setSelectedTheme("Green Gable")}>
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
          <div className={classes.card} onClick={() => setSelectedTheme("Just Black")}>
            <Image
              src={JustBlack}
              alt="Piyush Kumar"
              width={200}
              height={200}
              className={classes.image}
            />
            <p className={classes.imageText}>Just Black</p>
          </div>
          <div className={classes.card} onClick={() => setSelectedTheme("Oceanic")}>
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
