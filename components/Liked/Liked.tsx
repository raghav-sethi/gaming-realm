"use client";
import React, { useEffect, useState } from "react";
import classes from "./Liked.module.css";
import { API_URLSS } from "@/app/constant";
import Image from "next/image";



const Liked = () => {
  const [likedGameIds, setLikedGameIds] = useState<number[]>([]); // IDs of liked games
  const [likedGames, setLikedGames] = useState<any[]>([]); // Full game details

  useEffect(() => {
    async function fetchLikedGameIds() {
      const token = localStorage.getItem("userId");
      console.log("Fetching liked game IDs...");
      if (!token) return;

      try {
        const response = await fetch(`${API_URLSS}/users/${token}/like`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();

        
        setLikedGameIds(data.data.likedGames || []); 
        console.log("Liked game IDs:", data.data.likedGames);
      } catch (error) {
        console.error("Error fetching liked games:", error);
      }
    }

    fetchLikedGameIds();
  }, []);

  useEffect(() => {
    async function fetchLikedGames() {
      console.log("Fetching full game details...");
      const gameDetails: any[] = [];

      for (const gameID of likedGameIds) {
        try {
          const response = await fetch(`${API_URLSS}/games/${gameID}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          const data = await response.json();
          gameDetails.push(data); 
          console.log(`Game data for ID ${gameID}:`, data);
        } catch (error) {
          console.error(`Error fetching game with ID ${gameID}:`, error);
        }
      }

    
      setLikedGames(gameDetails);
    }

    if (likedGameIds.length > 0) {
      fetchLikedGames();
    }
    console.log("this is liked games",likedGames)
  }, [likedGameIds]); 

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Liked Games</h1>
      <div className={classes.gamesContainer}>
        {likedGames.length > 0 ? (
          likedGames.map((game: any) => (
            <div key={game.id} className={classes.gameCard}>
              <Image
                className={classes.gameImage}
                src={game.src}
                width={100}
                height={100}
                alt={game.name}
              />
               <h2 className={classes.gameName}>{game.name}</h2>
            </div>
          ))
        ) : (
          <p>No liked games found.</p>
        )} 

      
      </div>
    </div>
  );
};

export default Liked;
