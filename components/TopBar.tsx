"use client"
import Image from 'next/image';
import React from 'react';
import searchIcon from '@/public/Gaming Realm_files/Untitled design (5).png';
import notificationIcon from '@/public/Gaming Realm_files/Untitled design (4).png';
import profileIcon from '@/public/Gaming Realm_files/batman_hero_avatar_comics-512.webp';
import classes from './TopBar.module.css'; 
import UserProfile from './User/UserProfile';

const TopBar = () => {

    const [profile, setProfile] = React.useState(false);

    const handleProfile = () => {
        if (profile) {
            setProfile(false);
        }
        else {
            setProfile(true);
        }
    };

    return (
        <div className={classes.topBar}>
            <section>
                <h2 style={{ fontSize: '30px' }}>Hi Guest</h2>
                <p>Welcome Back, many games waiting to be played.</p>
            </section>
            <section className={classes.topBarIcons}>
                <Image
                    className={classes.topBarIcon}
                    src={searchIcon}
                    alt="searchIcon"
                />
                <Image
                    className={classes.topBarIcon}
                    src={notificationIcon}
                    alt="notificationIcon"
                />

                <Image
                    className={classes.topBarIcon}
                    src={profileIcon}
                    alt="profileIcon"
                    onClick={handleProfile}
                />
                {profile && (<UserProfile />)}
            </section>
        </div>
    );
};

export default TopBar;
