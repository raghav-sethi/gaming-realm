import React from "react";
import classes from "./FontPage.module.css";

const FontPage = () => {
  return (
    <>
    <div className={classes.container}>
      <div className={classes.row}>
        <div className={classes.cardContainter}>
          <div className={classes.card}>
            <h1 className={classes.cardHead}>Hi Guest</h1>
            <p>Welcome Back, many games waiting to be played.</p>
          </div>
          <p className={classes.cartText} id={classes.cardTextID}>
            Courier New
          </p>
        </div>
        <div className={classes.cardContainter}>
          <div className={classes.card}>
            <h1 className={classes.cardHead}>Hi Guest</h1>
            <p>Welcome Back, many games waiting to be played.</p>
          </div>
          <p className={classes.cartText} id={classes.cardTextID}>
            Book Antiqua
          </p>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.cardContainter}>
          <div className={classes.card}>
            <h1 className={classes.cardHead}>Hi Guest</h1>
            <p>Welcome Back, many games waiting to be played.</p>
          </div>
          <p className={classes.cartText} id={classes.cardTextID}>
            News Reader
          </p>
        </div>
        <div className={classes.cardContainter}>
          <div className={classes.card}>
            <h1 className={classes.cardHead}>Hi Guest</h1>
            <p>Welcome Back, many games waiting to be played.</p>
          </div>
          <p className={classes.cartText} id={classes.cardTextID}>
            Roboto Mono
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default FontPage;
