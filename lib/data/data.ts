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
import gameCardImageOne from '@/public/Gaming Realm_files/41def14aa0d96d14f8f70608394fa6aa_large.0.jpeg';
import gameCardImageTwo from '@/public/Gaming Realm_files/ROLL-THE-DICE.jpg';
import gameCardImageThree from '@/public/Gaming Realm_files/WhatsApp-Image-2021-03-25-at-5.37.10-AM.jpeg';
import gameCardImageFour from '@/public/Gaming Realm_files/FGEF6F0K1NVATVK.jpg';
import gameCardImageFive from '@/public/Gaming Realm_files/oJBRUc.png';
import gameCardImageSix from '@/public/Gaming Realm_files/tic-tac-toe-winning-vector-639732.jpg';
import gameCardImageSeven from '@/public/Gaming Realm_files/kids garden.jpg';
import gameCardImageEight from '@/public/Gaming Realm_files/scramble-words.jpg';
import gameCardImageNine from '@/public/Gaming Realm_files/storyboard.png';
import genreCardImageOne from '@/public/Gaming Realm_files/1.png';
import genreCardImageTwo from '@/public/Gaming Realm_files/2.png';
import genreCardImageThree from '@/public/Gaming Realm_files/3.png';
import genreCardImageFour from '@/public/Gaming Realm_files/4.png';
import recentGameImageOne from '@/public/dino.png';
import recentGameImageTwo from '@/public/rolldice.png';
import recentGameImageThree from '@/public/cricket.jpeg';
import recentGameImageFour from '@/public/num.jpg';
import recentGameImageFive from '@/public/sumo.png';
import recentGameImageSix from '@/public/TicTacToe.png';
import recentGameImageSeven from '@/public/kidsgarden.png';
import recentGameImageEight from '@/public/words.png';
import recentGameImageNine from '@/public/storyboard.jpg';

import {
    CarouselImageType,
    GameType,
    GenreType,
    NavLinkType,
} from '../types/types';
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

export const games: GameType[] = [
    {
        id: 2,
        name: 'Dino Run',
        src: gameCardImageOne,
        alt: 'dino-run',
        desc: 'Simply press the space bar (or up arrow) and the dino will start running. Press the up arrow to jump over the obstacles (like cacti) in your path. The longer you hold the up arrow, the higher dino will jump. If you need to duck under something, press the down arrow.',
        category: 'Single Player',
        videoSrc: 'DinoRun.webm',
        recentlyPlayedSrc: recentGameImageOne,
        gameUrl:'Dino game/one.html',
    },
    {
        id: 3,
        name: 'Roll The Dice',
        src: gameCardImageTwo,
        alt: 'roll-the-dice',
        desc: "The player has to roll the dice and the numbers appearing on each roll will be added as it's score and if in case 1 appears, you will loose that score, but you can save your score after every roll, and in both cases the turn is passed on to second player.",
        category: 'Multi Player',
        videoSrc: 'Roll A Dice.webm',
        recentlyPlayedSrc: recentGameImageTwo,
        gameUrl:'Roll The Dice/index.html'
    },
    {
        id: 4,
        name: 'Hand Cricket',
        src: gameCardImageThree,
        alt: 'hand-cricket',
        desc: 'First of all you decide to bat or bowl first. Then to score Runs, click on the Runs you wish to score and the Device will select a random number. Show of same hands results in a wicket otherwise will be added as a score. Each side has 5 wickets.',
        category: 'Single Player',
        videoSrc: 'Hand Cricket.webm',
        recentlyPlayedSrc: recentGameImageThree,
        gameUrl:'HandCricket/index.html'
    },
    {
        id: 5,
        name: 'Guess the Number',
        src: gameCardImageFour,
        alt: 'guess-the-number',
        desc: 'The device selects a number between 1-20 and the player has to guess it. With every guess the device will give uh the hints, if you are close to the number or not. With every wrong guess your score decreases. Follow the hints and Guess the Number.',
        category: 'Mind Games',
        videoSrc: 'Guess My Number.mp4',
        recentlyPlayedSrc: recentGameImageFour,
        gameUrl:'GuesstheNumber/index.html'
    },
    {
        id: 6,
        name: 'Sumo',
        src: gameCardImageFive,
        alt: 'sumo',
        desc: 'It is a Two player game in which both the players have to press the assigned keys (Player1 - S and Player2 - L) continuously. Player movement is controlled by the number of key press. Player who throws the opponant out of the ring wins!',
        category: 'Multi Player',
        videoSrc: 'sumo.webm',
        recentlyPlayedSrc: recentGameImageFive,
        gameUrl:'SumoGame/Sumo/Compete.html'
    },

    {
        id: 7,
        name: 'Tic Tac Toe',
        src: gameCardImageSix,
        alt: 'tic-tac-toe',
        desc: "The game is played on a grid that's 3 squares by 3 squares. You are X, and the computer in is O. Players take turns putting their marks in empty squares. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.",
        category: 'Mind Games',
        videoSrc: 'TicTacToe.webm',
        recentlyPlayedSrc: recentGameImageSix,
        gameUrl:'TicTacToe/index.html'
    },
    {
        id: 8,
        name: 'Kids Garden',
        src: gameCardImageSeven,
        alt: 'kids-garden',
        desc: 'One Can use this Game to teach their kids and learn at the same time using different modes in the Game like alphabets numbers colours and animals. Selet the button and it spells it out. Making it one of the most perfect ways for kids to take their first step in educaton',
        category: 'Kids Games',
        videoSrc: 'Kids Garden.webm',
        recentlyPlayedSrc: recentGameImageSeven,
        gameUrl:'Kids garden/index.html'
    },
    {
        id: 9,
        name: 'Scrambled Words',
        src: gameCardImageEight,
        alt: 'scrambled-words',
        desc: 'In this game you have to write the correct word from Scrambed words and then write it accordingly to find the right Answer from a set of jumbled words',
        category: 'Mind Games',
        videoSrc: 'Scrambled Words.webm',
        recentlyPlayedSrc: recentGameImageEight,
        gameUrl:'Word Scramble/wordScramble.html'
    },
    {
        id: 10,
        name: 'Story Board',
        src: gameCardImageNine,
        alt: 'story-board',
        desc: 'The Person using this can make his/her own decisions as a protagonist and continue in the story to find out what happens in the end. You have 2 stories to choose from and enjoy different stories',
        category: 'Kids Games',
        videoSrc: 'Story Board.webm',
        recentlyPlayedSrc: recentGameImageNine,
        gameUrl:'Story/index.html'
    },
];

export const genres: GenreType[] = [
    {
        id: 1,
        name: 'Mind Games',
        src: genreCardImageOne,
    },
    {
        id: 2,
        name: 'Kids Games',
        src: genreCardImageTwo,
    },
    {
        id: 3,
        name: 'Single Player',
        src: genreCardImageThree,
    },
    {
        id: 4,
        name: 'Multi Player',
        src: genreCardImageFour,
    },
];
