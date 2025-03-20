import React from "react";
import classes from './UserProfile.module.css';
import Link from "next/link";


const UserProfile = () => {
    

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/profile";
    }


    return (
        <>
            <div className={classes.container}>
                <div>
                    <h2 className={classes.heading}>Profile</h2>
                    <p className={classes.text}>Username: Batman</p>
                    <p className={classes.text}>Email: 123@gmail.com</p>
                </div>  
                <div>
                    <Link href="/settings" className={classes.setting}>
                        Settings
                    </Link>
                </div>
                <div>
                    <p className={classes.setting} onClick={handleLogout}>Logout</p>
                </div>
                <div>
                    <Link href="">see complete Profile</Link>
                </div>

            </div>
        </>
    );
    };

export default UserProfile;