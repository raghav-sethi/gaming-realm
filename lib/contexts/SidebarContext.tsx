'use client';

import { createContext, useState } from 'react';
import uiImage from '@/public/Gaming Realm_files/UI.png';
import { games } from '../data/data';
import { GameType, SidebarContextType } from '../types/types';
import { Queue } from 'queue-typescript';

export const SidebarContext = createContext<SidebarContextType | null>(null);

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
    const [recentlyPlayedGames, setRecentlyPlayedGames] = useState<
        Queue<GameType>
    >(new Queue<GameType>());

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
        const game = games.find((game) => game.id === id);

        if (game) {
            setRecentlyPlayedGames((prevState) => [...prevState, game]);
        }
    };

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
