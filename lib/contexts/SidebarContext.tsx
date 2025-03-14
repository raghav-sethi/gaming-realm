'use client';

import { createContext, useState } from 'react';
import uiImage from '@/public/Gaming Realm_files/UI.png';
import { games } from '../data/data';
import { GameType, SidebarContextType } from '../types/types';
import { QueueClass } from '../classes/Queue';

export const SidebarContext = createContext<SidebarContextType | null>(null);
const recentGamesQueue = new QueueClass<number>(4);
let recentGames: GameType[] = [];

export const SidebarContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [id, setId] = useState(1);
    const [name, setName] = useState('Gaming Realm');
    const [src, setSrc] = useState(uiImage);
    const [alt, setAlt] = useState('uiImage');
    const [desc, setDesc] = useState(
        `The project contains many 2-D games to be played for fun.You can click on any game you want to play and in the same
                    panal you will get to know about all the rules and video
                    related to it. You need to login for more updates about the
                    upcoming games nd to access the same. In case of any query,
                    you are provided with a chat system on the extreme left
                    panel.`
    );
    const [videoSrc, setVideoSrc] = useState<string | null>(null);
    const [recentlyPlayedGames, setRecentlyPlayedGames] = useState<GameType[]>(
        []
    );

    const updateContext = (id: number) => {
        const game = games.find((game) => game.id === id);
        // console.log('Game: ', game);

        if (game) {
            setId(game.id);
            setName(game.name);
            setSrc(game.src);
            setAlt(game.alt);
            setDesc(game.desc);
            setVideoSrc(game.videoSrc);
        }
    };

    const updateRecentlyPlayedGames = (id: number) => {
        recentGamesQueue.enqueue(id);

        const recentIds = recentGamesQueue.getData();

        for (let i = 0; i < recentIds.length; i++) {
            // if(recentIds[i] in )
            const foundGame = games.find((game) => game.id === recentIds[i]);
            if (foundGame) {
                recentGames[i] = foundGame;
            }
        }

        recentGames = recentGames.reverse();

        // console.log(recentIds);
        // console.log(recentGames);
        setRecentlyPlayedGames(recentGames);
        // console.log(id);
    };

    // const updateRecentlyPlayedGames = (id: number) => {
    //     if (recentGamesQueue.length >= 5) {
    //         recentGamesQueue.dequeue();
    //     }
    //     recentGamesQueue.enqueue(id);

    //     const recentGamesIds = recentGamesQueue.toArray();
    //     const recentGames: GameType[] = [];

    //     for (let i = 0; i < games.length; i++) {
    //         const game = games[i];
    //         if (recentGamesIds.indexOf(game.id) != -1) {
    //             recentGames[recentGamesIds.indexOf(game.id)] = game;
    //         }
    //     }

    //     console.log(recentGames);

    //     if (recentGames) {
    //         setRecentlyPlayedGames(recentGames);
    //     }
    // };

    return (
        <SidebarContext.Provider
            value={{
                id,
                name,
                src,
                alt,
                desc,
                videoSrc,
                updateContext,
                recentlyPlayedGames,
                updateRecentlyPlayedGames,
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
};
