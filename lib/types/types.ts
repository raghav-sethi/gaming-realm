import { StaticImageData } from 'next/image';

export type NavLinkType = {
    href: string;
    activeSrc: StaticImageData;
    src: StaticImageData;
    alt: string;
};

export type CarouselImageType = {
    src: StaticImageData;
    alt: string;
};
