'use client';

import React, { useContext } from 'react';
import classes from './Sidebar.module.css';
import Image from 'next/image';
import { SidebarContext } from '@/lib/contexts/SidebarContext';
import { Button } from '@/components/ui/button';

const Sidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        return null;
    }

    const { id, name, src, alt, desc, videoSrc, updateRecentlyPlayedGames } =
        context;

    const handleRecentlyPlayedClick = (id: number) => {
        updateRecentlyPlayedGames(id);
    };

    return (
        <div className={classes.sidebar}>
            <section>
                <Image className={classes.uiImage} src={src} alt={alt} />
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
                            style={{ borderRadius: '1.5rem', width: '21vw', height: '24vh' }}
                            src={`https://6436f775d29810126eda99ce--gentle-phoenix-29fa99.netlify.app/Video/${videoSrc}`}
                            allowFullScreen
                            loading="lazy"
                        />
                    </section>
                </>
            )}
        </div>
    );
};

export default Sidebar;
