import React from "react";
import classes from "./AboutPage.module.css";
import Image from "next/image";
import LinkedIn from "@/public/Gaming Realm_files/linkedin.png";
import GitHub from "@/public/Gaming Realm_files/github.png";
import Profile1 from "@/public/Gaming Realm_files/profileimage1.jpeg";
import Profile2 from "@/public/Gaming Realm_files/profileimage2.jpeg";
import Profile3 from "@/public/Gaming Realm_files/profileimage3.jpeg";
import Profile4 from "@/public/Gaming Realm_files/profileimage4.jpeg";

const AboutPage = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.cardContainter}>
            <div className={classes.imageContainer}>
              <Image
                src={Profile1}
                alt="Piyush Kumar"
                width={150}
                height={80}
                className={classes.profileImage}
              />
              <Image src={LinkedIn} alt="Piyush Kumar" width={50} height={45} />
              <Image src={GitHub} alt="Piyush Kumar" width={65} height={65} />
            </div>
            <p className={classes.profilename}>Piyush Kumar</p>
            <p className={classes.profiletext}>Web Developer</p>
            <p className={classes.profiletext}>piyush1297@chitkara.edu.in</p>
          </div>
          <div className={classes.cardContainter}>
            <div className={classes.imageContainer}>
              <Image
                src={Profile2}
                alt="Piyush Kumar"
                width={150}
                height={150}
                className={classes.profileImage}
              />
              <Image src={LinkedIn} alt="Piyush Kumar" width={50} height={45} />
              <Image src={GitHub} alt="Piyush Kumar" width={65} height={65} />
            </div>
            <p className={classes.profilename}>Samridhi Goyal</p>
            <p className={classes.profiletext}>Web Developer</p>
            <p className={classes.profiletext}>samridhi1311@chitkara.edu.in</p>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.cardContainter}>
            <div className={classes.imageContainer}>
              <Image
                src={Profile3}
                alt="Piyush Kumar"
                width={150}
                height={150}
                className={classes.profileImage}
              />
              <Image src={LinkedIn} alt="Piyush Kumar" width={50} height={45} />
              <Image src={GitHub} alt="Piyush Kumar" width={65} height={65} />
            </div>
            <p className={classes.profilename}>Nischay Agrawal</p>
            <p className={classes.profiletext}>Web Developer</p>
            <p className={classes.profiletext}>nischay1295@chitkara.edu.in</p>
          </div>
          <div className={classes.cardContainter}>
            <div className={classes.imageContainer}>
              <Image
                src={Profile4}
                alt="Piyush Kumar"
                width={150}
                height={150}
                className={classes.profileImage}
              />
              <Image src={LinkedIn} alt="Piyush Kumar" width={50} height={45} />
              <Image src={GitHub} alt="Piyush Kumar" width={65} height={65} />
            </div>
            <p className={classes.profilename}>Saksham Singhal</p>
            <p className={classes.profiletext}>Web Developer</p>
            <p className={classes.profiletext}>saksham1310@chitkara.edu.in</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
