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

export type GameType = {
    id: number;
    name: string;
    src: StaticImageData;
    alt: string;
    desc: string;
};

export interface SidebarContextType {
    id: number;
    name: string;
    src: StaticImageData;
    alt: string;
    desc: string;
    updateContext: (id: number) => void;
}
