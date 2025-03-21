"use client";
// import Navbar from '@/components/Navbar';
import React, { useEffect } from 'react';
import GamesListCarousel from '@/components/Games/GamesListCarousel';
import RecentlyPlayedGames from '@/components/Games/RecentlyPlayedGames';
import MainCarousel from '@/components/MainCarousel';
import TopBar from '@/components/TopBar';
import {API_URLSS} from './constant';
import { useTheme } from 'next-themes';

export default function Home() {
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const getTheme = async () => {
          try {
            const response = await fetch(`${API_URLSS}/users/${localStorage.getItem('userId')}/preference`, {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            });
            const result = await response.json();
            console.log(result);
            if (result.data.userTheme === "ultraviolet") {
              setTheme("ultraviolet");
            }
            else if (result.data.userTheme === "greengable") {
              setTheme("greengable");
            }
            else if (result.data.userTheme === "justblack") {
              setTheme("justblack");
            }
            else if (result.data.userTheme === "Oceanic") {
              setTheme("oceanic");
            }

            if(result.data.userFont === "couriernew"){
                document.body.style.fontFamily = "Courier New";
            }else if(result.data.userFont === "trebuchetms"){
                document.body.style.fontFamily = "Trebuchet MS";
            }else if(result.data.userFont === "lucidasans"){
                document.body.style.fontFamily = "Lucida Sans";
            }else if(result.data.userFont === "arial"){
                document.body.style.fontFamily = "Arial";
            }

          }
          catch (err) {
            console.log(err);
          }
        };
        getTheme();
      }, []);


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <TopBar />
            <MainCarousel />
            <RecentlyPlayedGames />
            <GamesListCarousel />
        </main>
    );
}
