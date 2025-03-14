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
    const { id, name, src, alt, desc } = context;

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
                <div>
                    <Button type="button" className={classes.uiButton} variant="outline">Play</Button>
                    {/* <button type="button">Play</button> */}
                </div>
            )}
        </div>
    );
};

export default Sidebar;
