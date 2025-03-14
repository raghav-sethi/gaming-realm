'use client';

import { createContext, useState } from 'react';
import uiImage from '@/public/Gaming Realm_files/UI.png';
import { games } from '../data/data';
import { SidebarContextType } from '../types/types';

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

    const updateContext = (id: number) => {
        const game = games.find((game) => game.id === id);
        console.log('Game: ', game);

        if (game) {
            setId(game.id);
            setName(game.name);
            setSrc(game.src);
            setAlt(game.alt);
            setDesc(game.desc);
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
                updateContext,
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
};
