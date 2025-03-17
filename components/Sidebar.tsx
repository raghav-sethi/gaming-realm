'use client';

import React, { useContext,useState } from 'react';
import classes from './Sidebar.module.css';
import Image from 'next/image';
import { SidebarContext } from '@/lib/contexts/SidebarContext';
import { Button } from '@/components/ui/button';
import {games} from '@/lib/data/data'

const Sidebar = () => {
    const context = useContext(SidebarContext);
    const [selectedGameUrl, setSelectedGameUrl] = useState<string | null>(null);

    if (!context) {
        return null;
    }

    const { id, name, src, alt, desc, videoSrc,updateRecentlyPlayedGames } =
        context;

    const handleRecentlyPlayedClick = (id: number) => {
        updateRecentlyPlayedGames(id);
        const gameUrl = games.find((game) => game.id === id)?.gameUrl;
        if(gameUrl){
            setSelectedGameUrl("https://6436f775d29810126eda99ce--gentle-phoenix-29fa99.netlify.app/games/"+gameUrl);
        }
    };
    const handleBackButton = () => {
        setSelectedGameUrl(null);
    }

    return (
        <div className={classes.sidebar}>
            {selectedGameUrl ? (
                <div className={classes.gameContainer}>
                    <Button
                        type="button"
                        className={classes.backButton}
                        variant="outline"
                        onClick={handleBackButton}>Back</Button>
                    <iframe
                        className={classes.gameIframe}
                        src={selectedGameUrl}
                        allowFullScreen />
                </div>
                ):(<>
            <section>
                <Image className={classes.uiImage} src={src} alt={alt}  />
            </section>
            <article>
                <h3>{name}</h3>
                <h4>{id === 1 ? 'About The Hub' : 'How To Play?'}</h4>
                <p>{desc}</p>
            </article>

            {id !== 1 && (
                <>
                    <div>
                        <Button
                            type="button"
                            className={classes.uiButton}
                            variant="outline"
                            onClick={() => handleRecentlyPlayedClick(id)}
                        >
                            Play
                        </Button>
                        {/* <button type="button">Play</button> */}
                    </div>
                    <section className={classes.videoContainer}>
                        <iframe
                            style={{ borderRadius: '1.5rem', width: '15vw', height: '18vh' }}
                            src={`https://6436f775d29810126eda99ce--gentle-phoenix-29fa99.netlify.app/Video/${videoSrc}`}
                            allowFullScreen
                            loading="lazy"
                        />
                    </section>
                </>
            )}
            </>)}
        </div>
    );
};

export default Sidebar;
