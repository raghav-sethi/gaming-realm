import React from "react";
import classes from "./AboutPage.module.css";
import Image from "next/image";
import UltraVilot from "../../public/Gaming Realm_files/Ultra Violet.png";
import LinkedIn from "@/public/Gaming Realm_files/linkedin.png";
import GitHub from "@/public/Gaming Realm_files/github.png";

const AboutPage = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.cardContainter}>
            <div className={classes.imageContainer}>
              <Image
                src={UltraVilot}
                alt="Piyush Kumar"
                width={200}
                height={200}
              />
              <Image src={LinkedIn} alt="Piyush Kumar" width={50} height={50} />
              <Image src={GitHub} alt="Piyush Kumar" width={50} height={50} />
            </div>
            <p>Piyush Kumar</p>
            <p>Web Developer</p>
            <p>email@123</p>
          </div>
          <div className={classes.cardContainter}>
            <div className={classes.imageContainer}>
              <Image
                src={UltraVilot}
                alt="Piyush Kumar"
                width={200}
                height={200}
              />
              <Image src={LinkedIn} alt="Piyush Kumar" width={50} height={50} />
              <Image src={GitHub} alt="Piyush Kumar" width={50} height={50} />
            </div>
            <p>Piyush Kumar</p>
            <p>Web Developer</p>
            <p>email@123</p>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.cardContainter}>
            <div className={classes.imageContainer}>
              <Image
                src={UltraVilot}
                alt="Piyush Kumar"
                width={200}
                height={200}
              />
              <Image src={LinkedIn} alt="Piyush Kumar" width={30} height={25} />
              <Image src={GitHub} alt="Piyush Kumar" width={40} height={40} />
            </div>
            <p>Piyush Kumar</p>
            <p>Web Developer</p>
            <p>email@123</p>
          </div>
          <div className={classes.cardContainter}>
            <div className={classes.imageContainer}>
              <Image
                src={UltraVilot}
                alt="Piyush Kumar"
                width={200}
                height={200}
              />
              <Image src={LinkedIn} alt="Piyush Kumar" width={50} height={50} />
              <Image src={GitHub} alt="Piyush Kumar" width={50} height={50} />
            </div>
            <p>Piyush Kumar</p>
            <p>Web Developer</p>
            <p>email@123</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
