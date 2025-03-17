'use client';
import React, { useState, useEffect,useRef} from "react";
import Styles from "./ChatBot.module.css";
import { SidebarContext } from '@/lib/contexts/SidebarContext';
import { useContext } from 'react';



const ChatBot = () => {
    const [messages, setMessages] = useState([
        { text: 'Chat services are being initiated', sender: 'bot' },
        { text: '....', sender: 'bot' },
        { text: 'Hey', sender: 'bot' },
        { text: "I'm the Guide Bot", sender: 'bot' },
        { text: 'What will you like to play?', sender: 'bot' },
        { text: '1. Multi Player\n2. Kids Section\n3. Single Player\n4. Mind Games', sender: 'bot' },
    ]);
    
    const [input, setInput] = useState('');
    const [currentMenu, setCurrentMenu] = useState('main');
    const messagesEndRef: any = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView ({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleUserInput = (event:any) => {
        setInput(event.target.value);
    };

    const handleKeyPress = (event:any) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    const sendMessage = () => {
        if (!input.trim()) return;
        
        const userMessage = { text: input, sender: 'user' };
        setMessages(prevMessages => [...prevMessages, userMessage]);
        
        handleBotResponse(input.toLowerCase());
        setInput('');
    };

    const handleBotResponse = (userInput:any) => {
        if (currentMenu === 'main') {
            if (userInput.includes('1') || userInput.includes('multi')) {
                setCurrentMenu('multi');
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'Here are Some of Our Multi Player games', sender: 'bot' },
                    { text: '1. Sumo\n2. Roll A Dice\nEnter \'0\' or \'Back\' To Go back to Genre Selection', sender: 'bot' }
                ]);
            } else if (userInput.includes('2') || userInput.includes('kids')) {
                setCurrentMenu('kids');
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'Here are Some of Our Kids Section games', sender: 'bot' },
                    { text: '1. Kids Garden\n2. Kids Quiz\n3. Story Board\nEnter \'0\' or \'Back\' To Go back to Genre Selection', sender: 'bot' }
                ]);
            } else if (userInput.includes('3') || userInput.includes('single')) {
                setCurrentMenu('single');
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'Here are Some of Our Single Player games', sender: 'bot' },
                    { text: '1. Dino Game\n2. Tic Tac Toe\n3. Hand Cricket\n4. Stack A Building\nEnter \'0\' or \'Back\' To Go back to Genre Selection', sender: 'bot' }
                ]);
            } else if (userInput.includes('4') || userInput.includes('mind')) {
                setCurrentMenu('mind');
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'Here are Some of Our Mind Puzzle games', sender: 'bot' },
                    { text: '1. Guess The Number\n2. Guess The Word\nEnter \'0\' or \'Back\' To Go back to Genre Selection', sender: 'bot' }
                ]);
            } else {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: "I don't understand. Please choose from the options: \n1. Multi Player\n2. Kids Section\n3. Single Player\n4. Mind Games", sender: 'bot' }
                ]);
            }
        } 
        else if (currentMenu === 'multi') {
            if (userInput.includes('0') || userInput.includes('back')) {
                setCurrentMenu('main');
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'What will you like to play?', sender: 'bot' },
                    { text: '1. Multi Player\n2. Kids Section\n3. Single Player\n4. Mind Games', sender: 'bot' }
                ]);
            } else if (userInput.includes('1') || userInput.includes('sumo')) {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'Sumo', sender: 'bot' },
                    { text: 'It is a Two player game in which both the players have to press the assigned keys (Player1 - S and Player2 - L) continuously. Player movement is controlled by the number of key press. Player who throws the opponant out of the ring wins!', sender: 'bot' },
                    { text: 'Play', sender: 'bot-button' }
                ]);
            } else if (userInput.includes('2') || userInput.includes('roll') || userInput.includes('dice')) {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'Roll The Dice', sender: 'bot' },
                    { text: "The player has to roll the dice and the numbers appearing on each roll will be added as it's score and if in case 1 appears, you will loose that score, but you can save your score after every roll, and in both cases the turn is passed on to second player.", sender: 'bot' },
                    { text: 'Play', sender: 'bot-button' }
                ]);
            } else {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: "Please select from the available options or enter '0' or 'Back' to return to the main menu.", sender: 'bot' }
                ]);
            }
        }
        else if (currentMenu === 'kids') {
            if (userInput.includes('0') || userInput.includes('back')) {
                setCurrentMenu('main');
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'What will you like to play?', sender: 'bot' },
                    { text: '1. Multi Player\n2. Kids Section\n3. Single Player\n4. Mind Games', sender: 'bot' }
                ]);
            } else if (userInput.includes('1') || userInput.includes('choose') || userInput.includes('word')) {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'Kids Garden', sender: 'bot' },
                    { text: 'One Can use this Game to teach their kids and learn at the same time using different modes in the Game like alphabets numbers colours and animals.', sender: 'bot' },
                    { text: 'Play', sender: 'bot-button' }
                ]);
            } else if (userInput.includes('2') || userInput.includes('quiz')) {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'Kids Quiz', sender: 'bot' },
                    { text: 'Gives a Small Quiz for the Kids using the Phone So that they can enjoy and Study at the Same time with the help of animals', sender: 'bot' },
                    { text: 'Play', sender: 'bot-button' }
                ]);
            } else if (userInput.includes('3') || userInput.includes('story')) {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'Story Board', sender: 'bot' },
                    { text: 'The Person using this can make his/her own decisions as a protagonist and continue in the story to find out what happens in the end', sender: 'bot' },
                    { text: 'Play', sender: 'bot-button' }
                ]);
            } else {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: "Please select from the available options or enter '0' or 'Back' to return to the main menu.", sender: 'bot' }
                ]);
            }
        }
        else if (currentMenu === 'single') {
            if (userInput.includes('0') || userInput.includes('back')) {
                setCurrentMenu('main');
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'What will you like to play?', sender: 'bot' },
                    { text: '1. Multi Player\n2. Kids Section\n3. Single Player\n4. Mind Games', sender: 'bot' }
                ]);
            } else if (userInput.includes('1') || userInput.includes('dino')) {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'Dino Run', sender: 'bot' },
                    { text: 'Simply press the space bar (or up arrow) and the dino will start running. Press the up arrow to jump over the obstacles (like cacti) in your path. The longer you hold the up arrow, the higher dino will jump. If you need to duck under something, press the down arrow.', sender: 'bot' },
                    { text: 'Play', sender: 'bot-button' }
                ]);
            } else if (userInput.includes('2') || userInput.includes('tic')) {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'Tic Tac Toe', sender: 'bot' },
                    { text: 'First of all you decide your symbol and then mark your posistion the first one to land three symbols in one straight line wins.', sender: 'bot' },
                    { text: 'Play', sender: 'bot-button' }
                ]);
            } else if (userInput.includes('3') || userInput.includes('hand') || userInput.includes('cricket')) {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'Hand Cricket', sender: 'bot' },
                    { text: 'First of all you decide to bat or bowl first. Then to score Runs, click on the Runs you wish to score and the Device will select a random number. Show of same hands results in a wicket otherwise will be added as a score. Each side has 5 wickets.', sender: 'bot' },
                    { text: 'Play', sender: 'bot-button' }
                ]);
            } else if (userInput.includes('4') || userInput.includes('stack') || userInput.includes('building')) {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'Stack A Building', sender: 'bot' },
                    { text: 'It is a Game in which you have to stack block of building on top of each other so as to finish and complete the building. If you stack it perfectly no parts would be removed but a wrong stack will result in cutting off the extra width and when no width is left You lose the game.', sender: 'bot' },
                    { text: 'Play', sender: 'bot-button' }
                ]);
            } else {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: "Please select from the available options or enter '0' or 'Back' to return to the main menu.", sender: 'bot' }
                ]);
            }
        }
        else if (currentMenu === 'mind') {
            if (userInput.includes('0') || userInput.includes('back')) {
                setCurrentMenu('main');
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'What will you like to play?', sender: 'bot' },
                    { text: '1. Multi Player\n2. Kids Section\n3. Single Player\n4. Mind Games', sender: 'bot' }
                ]);
            } else if (userInput.includes('1') || userInput.includes('guess') && userInput.includes('number')) {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'Guess the Number', sender: 'bot' },
                    { text: 'The device selects a number between 1-20 and the player has to guess it. With every guess the device will give uh the hints, if you are close to the number or not. With every wrong guess your score decreases. Follow the hints and Guess the Number.', sender: 'bot' },
                    { text: 'Play', sender: 'bot-button' }
                ]);
            } else if (userInput.includes('2') || userInput.includes('guess') && userInput.includes('word')) {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: 'Scrambled Words', sender: 'bot' },
                    { text: 'Presents you some words in scrambled posistions and then asks you to unscramble it and Guess the word If you Guess it correctly you win the game but when you cross a limit of turns you lose the game.', sender: 'bot' },
                    { text: 'Play', sender: 'bot-button' }
                ]);
            } else {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: "Please select from the available options or enter '0' or 'Back' to return to the main menu.", sender: 'bot' }
                ]);
            }
        }
    };

    // -----------------------------------------------
     const context = useContext(SidebarContext);
        if (!context) {
            return null;
        }
    
        const { updateContext } = context;
    const handleGameClick = (id: number) => {
        updateContext(id);
        // alert(id);
    };

    const nameToId = (game: string) => {
        const gameTitle = messages[messages.length - 3]?.text || '';
        console.log('Game Title: ', gameTitle);
        const gameRoutes: Record<string, number> = {
            'Sumo': 6,
            'Roll The Dice': 3,
            'Dino Run': 2,
            'Tic Tac Toe': 7,
            'Hand Cricket': 4,
            'Stack A Building': 11,
            'Kids Quiz': 12,
            'Story Board': 10,
            'Guess The Number': 5,
            'Scrambled Words': 9,
            'Kids Garden': 8,
        };
        console.log(gameRoutes[gameTitle]);
        return handleGameClick(gameRoutes[gameTitle]);
    }

    return (
            <div className={Styles.cont}>
                <div className={`${Styles.chatscreen} ${Styles.col} ${Styles.border}`}>
                    <div className={`${Styles.chattopic} ${Styles.row} ${Styles.border}`}></div>
                    <div className={Styles.chatwindow}>
                        <h1 style={{fontSize:'30px', marginTop:'1rem', marginLeft:'1rem'}}>Chat Bot</h1>
                        {messages.map((msg, index) => (
                            <div 
                                key={index} 
                                className={msg.sender === 'user' ? Styles.user : 
                                           msg.sender === 'bot-button' ? Styles.botButton : Styles.bot}
                                onClick={msg.sender === 'bot-button' ? () => nameToId(msg.text) : undefined}
                            >
                                {msg.text.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        {i !== msg.text.split('\n').length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className={`${Styles.chatinput} ${Styles.row} ${Styles.border}`}>
                        <input 
                            className={Styles.inner} 
                            type="text" 
                            placeholder="Enter your message" 
                            value={input} 
                            onChange={handleUserInput}
                            onKeyPress={handleKeyPress}
                        />
                        <button onClick={sendMessage} className={Styles.sendbtn}>Send</button>
                    </div>
                </div>
            </div>
    );
};

export default ChatBot;