'use client';

import React, { useContext } from 'react';
import classes from './GamesListCarousel.module.css';
import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { games } from '@/lib/data/data';
import Image from 'next/image';
import { SidebarContext } from '@/lib/contexts/SidebarContext';

const GamesListCarousel = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        return null;
    }

    const { updateContext } = context;

    const handleGameClick = (id: number) => {
        updateContext(id);
        // alert(id);
    };

    return (
        <Carousel
            opts={{
                align: 'start',
            }}
            className={`w-full pt-25 ${classes.container}`}
        >
            <CarouselContent>
                {games.map((game, index) => (
                    <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/3"
                        onClick={() => handleGameClick(game.id)}
                    >
                        <div className="p-1">
                            <Card className="bg-transparent border-0 ">
                                <CardContent
                                    className={`flex flex-col aspect-square items-center justify-center pb-6 m-0 px-0 ${classes.cardContainer}`}
                                >
                                    <Image
                                        className={classes.gameImage}
                                        src={game.src}
                                        alt={game.alt}
                                    />
                                    <span className="text-3xl font-semibold mt-3 text-white">
                                        {game.name}
                                    </span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default GamesListCarousel;
