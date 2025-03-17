import inactiveHomeIcon from '@/public/open.png';
import inactiveGenreIcon from '@/public/bookmark.png';
import inactiveChatIcon from '@/public/Untitled design.png';
import inactiveProfileIcon from '@/public/Untitled design (1).png';
import inactiveSettingIcon from '@/public/setting.png';
import homeIcon from '@/public/open1.png';
import genreIcon from '@/public/Untitled design (7).png';
import chaticon from '@/public/Untitled design (6).png';
import profileIcon from '@/public/Untitled design (3).png';
import settingIcon from '@/public/setting1.png';
import carouselImageOne from '@/public/Gaming Realm_files/header.jpg';
import carouselImageTwo from '@/public/Gaming Realm_files/H2x1_WiiUDS_HollowKnight_image1600w.jpg';
import carouselImageThree from '@/public/Gaming Realm_files/oJBRUc.png';
import carouselImageFour from '@/public/Gaming Realm_files/jnghfc.png';
import carouselImageFive from '@/public/Gaming Realm_files/590x300.png';
import kidGame from '@/public/Gaming Realm_files/2.png';
import singlePlayer from '@/public/Gaming Realm_files/3.png';
import multiPlayer from '@/public/Gaming Realm_files/4.png';
import mindGame from '@/public/Gaming Realm_files/1.png';

import { CarouselImageType, NavLinkType } from '../types/types';

export const links: NavLinkType[] = [
    {
        href: '/',
        activeSrc: homeIcon,
        src: inactiveHomeIcon,
        alt: 'home-icon',
    },
    {
        href: '/genres',
        activeSrc: genreIcon,
        src: inactiveGenreIcon,
        alt: 'genre-icon',
    },
    {
        href: '/chat',
        activeSrc: chaticon,
        src: inactiveChatIcon,
        alt: 'chat-icon',
    },
    {
        href: '/profile',
        activeSrc: profileIcon,
        src: inactiveProfileIcon,
        alt: 'profile-icon',
    },
    {
        href: '/settings',
        activeSrc: settingIcon,
        src: inactiveSettingIcon,
        alt: 'setting-icon',
    },
];

export const mainCarouselImages: CarouselImageType[] = [
    {
        src: carouselImageOne,
        alt: 'carousel1',
    },
    {
        src: carouselImageTwo,
        alt: 'carousel2',
    },
    {
        src: carouselImageThree,
        alt: 'carousel3',
    },
    {
        src: carouselImageFour,
        alt: 'carousel4',
    },
    {
        src: carouselImageFive,
        alt: 'carousel5',
    },
];
