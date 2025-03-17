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
    category: string;
    videoSrc: string;
    recentlyPlayedSrc: StaticImageData;
};

export interface SidebarContextType {
    id: number;
    name: string;
    src: StaticImageData;
    alt: string;
    desc: string;
    videoSrc: string | null;
    recentlyPlayedGames: GameType[];
    updateContext: (id: number) => void;
    updateRecentlyPlayedGames: (id: number) => void;
}

export interface GenreType {
    id: number;
    name: string;
    src: StaticImageData;
}

export interface QueueType<Type> {
    enqueue(dataItem: Type): void;
    dequeue(): Type | undefined;
    isFull(): boolean;
    isEmpty(): boolean;
    getData(): Type[];
}
