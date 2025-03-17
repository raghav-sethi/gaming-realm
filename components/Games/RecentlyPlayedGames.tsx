'use client';

import React, { useContext } from 'react';
import classes from './RecentlyPlayedGames.module.css';
import { SidebarContext } from '@/lib/contexts/SidebarContext';
import { GameType } from '@/lib/types/types';
import Image from 'next/image';

const RecentlyPlayedGames = () => {
    const context = useContext(SidebarContext);

    if (!context) return null;

    const { recentlyPlayedGames }:{recentlyPlayedGames:GameType[]} = context;

    return (
        <div className={classes.container}>
            <h2>Recently Played Games</h2>
            <section className="flex flex-row gap-5 ">
                {recentlyPlayedGames.map((game: GameType) => (
                    <div
                        key={game.id}
                        className={`flex items-center gap-5 ${classes.recentGameDiv}`}
                    >
                        <Image
                            className="rounded-full"
                            style={{ width: '5rem', height: '5rem' }}
                            alt={game.alt}
                            src={game.recentlyPlayedSrc}
                        />
                        <span className="font-bold">{game.name}</span>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default RecentlyPlayedGames;
