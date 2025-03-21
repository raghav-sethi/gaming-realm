'use client';
import React, { useState } from 'react';
import classes from './Profile.module.css';
import Register from './Register';
import Login from './Login';

const Profile = () => {
    const [status, setStatus] = useState<string>('login');
    return (
        <>
            <div className={classes.container}>
                <div className={classes.right}></div>
                <div className={classes.left}>
                    {status === 'register' ? (
                        <Register status={status} setStatus={setStatus} />
                    ) : (
                        <Login status={status} setStatus={setStatus} />
                    )}
                </div>
            </div>
        </>
    );
};
export default Profile;
