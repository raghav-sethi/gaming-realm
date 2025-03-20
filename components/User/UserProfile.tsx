import React from "react";
import classes from './UserProfile.module.css';

const UserProfile = () => {
    return (
        <>
            <div className={classes.container}>
                <div>
                    <h2 className={classes.heading}>Profile</h2>
                    <p className={classes.text}>Username: Batman</p>
                    <p className={classes.text}>Email: 123@gmail.com</p>
                </div>
                <div>
                    <h2 className={classes.setting}>Settings</h2>
                </div>
                <div>
                    <p className={classes.lbutton}>Logout</p>
                </div>

            </div>
        </>
    );
    };

export default UserProfile;