import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { mainCarouselImages } from '@/lib/data/data';
import Image from 'next/image';
import React from 'react';
import classes from './MainCarousel.module.css'

const MainCarousel = () => {
    return (
        <Carousel>
            <CarouselContent>
                {mainCarouselImages.map((image, index) => (
                    <CarouselItem key={index}>
                        <Image
                            className={classes.carouselImage}
                            src={image.src}
                            alt={image.alt}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="absolute top-80 left-230 right-70 flex justify-end p-4">
                <CarouselPrevious />
                <CarouselNext />
            </div>
        </Carousel>
    );
};

export default MainCarousel;
