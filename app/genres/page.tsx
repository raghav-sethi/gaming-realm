'use client';

import React, { useEffect, useState } from 'react';
import classes from './page.module.css';
import { games, genres } from '@/lib/data/data';
import Image from 'next/image';
import { GameType } from '@/lib/types/types';
import { Card, CardContent } from '@/components/ui/card';
import { FaHeart } from "react-icons/fa";

const GenrePage = () => {
    const [genre, setGenre] = useState('Mind Games');
    const [genreRelatedGames, setGenreRelatedGames] = useState<
        GameType[] | null
    >();

    useEffect(() => {
        setGenreRelatedGames(games.filter((game) => game.category === genre));
    }, [genre]);

    function handleGenreImageClick(genreName: string) {
        setGenre(genreName);
    }

    return (
        <div className={classes.container}>
            <h2>Genres</h2>
            <div className={classes.genresContainer}>
                {genres.map((genre) => (
                    <Image
                        onClick={() => handleGenreImageClick(genre.name)}
                        className={classes.genreImage}
                        key={genre.id}
                        src={genre.src}
                        alt={genre.name}
                    />
                ))}
            </div>
            <h3>We found some games related to your chosen genre!!</h3>
            <div className={classes.genresContainer}>
                {genreRelatedGames?.map((game) => (
                    // <Image
                    //     onClick={() => handleGenreImageClick(game.name)}
                    //     className={classes.genreImage}
                    //     key={game.id}
                    //     src={game.src}
                    //     alt={game.name}
                    // />
                        <Card className="bg-transparent border-0 m-0 p-0" key={game.id}>
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
                                <FaHeart className={classes.heartIcon} />
                            </CardContent>
                        </Card>
                ))}
            </div>
        </div>
    );
};

export default GenrePage;
