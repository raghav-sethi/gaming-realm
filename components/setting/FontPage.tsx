import React, { useEffect, useState } from "react";
import classes from "./FontPage.module.css";
import {API_URLSS} from "@/app/constant";

const FontPage = () => {
  const [selectedFont, setSelectedFont] = useState("");

  useEffect(() => {
    if (selectedFont) {
      document.body.style.fontFamily = selectedFont;
      console.log("Font Changed to: ", selectedFont);
      console.log(selectedFont.replace(/\s/g, "").toLowerCase());
    }


    const setFont = async () => {
      try {
        const response = await fetch(`${API_URLSS}/users/${localStorage.getItem('userId')}/preference`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userFont: selectedFont.replace(/\s/g, "").toLowerCase() }),
        });
        const result = await response.json();
        console.log(result);
      }
      catch (err) {
        console.log(err);
      }
    };
    setFont();
  }, [selectedFont]);

  const handleFontChange = (fontFamily: string) => {
    setSelectedFont(fontFamily);
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.row}>
          <div
            className={classes.cardContainter}
            onClick={() => handleFontChange("Courier New")}
          >
            <div className={classes.card}>
              <h1
                className={classes.cardHead}
                style={{ fontFamily: "Courier New" }}
              >
                Hi Guest
              </h1>
              <p
                className={classes.paragraphText}
                style={{ fontFamily: "Courier New" }}
              >
                Welcome Back, many games waiting to be played.
              </p>
            </div>
            <p className={classes.cartText} id={classes.cardTextID}>
              Courier New
            </p>
          </div>
          <div
            className={classes.cardContainter}
            onClick={() => handleFontChange("Trebuchet MS")}
          >
            <div className={classes.card}>
              <h1
                className={classes.cardHead}
                style={{ fontFamily: "Trebuchet MS" }}
              >
                Hi Guest
              </h1>
              <p
                className={classes.paragraphText}
                style={{ fontFamily: "Trebuchet MS" }}
              >
                Welcome Back, many games waiting to be played.
              </p>
            </div>
            <p className={classes.cartText} id={classes.cardTextID}>
              Trebuchet MS
            </p>
          </div>
        </div>
        <div className={classes.row}>
          <div
            className={classes.cardContainter}
            onClick={() => handleFontChange("Lucida Sans")}
          >
            <div className={classes.card}>
              <h1
                className={classes.cardHead}
                style={{ fontFamily: "Lucida Sans" }}
              >
                Hi Guest
              </h1>
              <p
                className={classes.paragraphText}
                style={{ fontFamily: "Lucida Sans" }}
              >
                Welcome Back, many games waiting to be played.
              </p>
            </div>
            <p className={classes.cartText} id={classes.cardTextID}>
              Lucida Sans
            </p>
          </div>
          <div
            className={classes.cardContainter}
            onClick={() => handleFontChange("Arial")}
          >
            <div className={classes.card}>
              <h1 className={classes.cardHead} style={{ fontFamily: "Arial" }}>
                Hi Guest
              </h1>
              <p
                className={classes.paragraphText}
                style={{ fontFamily: "Arial" }}
              >
                Welcome Back, many games waiting to be played.
              </p>
            </div>
            <p className={classes.cartText} id={classes.cardTextID}>
              Arial
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FontPage;
