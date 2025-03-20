'use client';
import React, { useState, useEffect, useRef } from 'react';
import Styles from './ChatBot.module.css';
import { SidebarContext } from '@/lib/contexts/SidebarContext';
import { useContext } from 'react';
import { sendChatData } from '@/actions/chatActions';
import { GameType, GenreType } from '@/lib/types/types';

const ChatBot = () => {
    const [messages, setMessages] = useState<
        { text: string; sender: string; id?: number }[]
    >([
        { text: 'Chat services are being initiated', sender: 'bot' },
        { text: '....', sender: 'bot' },
        { text: 'Hey', sender: 'bot' },
        { text: "I'm the Guide Bot", sender: 'bot' },
        { text: 'What will you like to play?', sender: 'bot' },
        {
            text: '1. Multi Player\n2. Kids Section\n3. Single Player\n4. Mind Games',
            sender: 'bot',
        },
    ]);

    const [input, setInput] = useState('');
    const [currentMenu, setCurrentMenu] = useState('main');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    const sendMessage = () => {
        if (!input.trim()) return;

        const userMessage = { text: input, sender: 'user' };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        handleBotResponse(input.toLowerCase());
        setInput('');
    };

    const handleBotResponse = async (userInput: string) => {
        const result = await sendChatData(userInput, currentMenu);
        if (!result) {
            console.error('No chat data');
            return;
        }
        if (currentMenu === 'main') {
            const filteredGenre: GenreType | GameType = result;

            setCurrentMenu(filteredGenre?.name);

            const filteredGames = filteredGenre?.games;

            setMessages((prevMessages: { text: string; sender: string }[]) => [
                ...prevMessages,
                {
                    text:
                        'Here are Some of Our ' +
                        (filteredGenre as GenreType)?.name +
                        ' games',
                    sender: 'bot',
                },
                {
                    text: (filteredGames as GameType[])
                        .map(
                            (game: GameType, index: number) =>
                                index + 1 + '. ' + game.name
                        )
                        .join('\n'),
                    sender: 'bot',
                },
            ]);
        } else if (
            currentMenu === 'Mind Games' ||
            'Kids Games' ||
            'Multi Player' ||
            'Single Player'
        ) {
            const chosenGame: GenreType | GameType = result;

            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    text: 'You have chosen ' + chosenGame?.name,
                    sender: 'bot',
                },
                { text: 'Play', id: chosenGame?.id, sender: 'bot-button' },
            ]);
        }
    };

    const context = useContext(SidebarContext);
    if (!context) {
        return null;
    }

    const { updateContext } = context;

    return (
        <div className={Styles.cont}>
            <div
                className={`${Styles.chatscreen} ${Styles.col} ${Styles.border}`}
            >
                <div
                    className={`${Styles.chattopic} ${Styles.row} ${Styles.border}`}
                ></div>
                <div className={Styles.chatwindow}>
                    <h1
                        style={{
                            fontSize: '30px',
                            marginTop: '1rem',
                            marginLeft: '1rem',
                        }}
                    >
                        Chat Bot
                    </h1>
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={
                                msg.sender === 'user'
                                    ? Styles.user
                                    : msg.sender === 'bot-button'
                                    ? Styles.botButton
                                    : Styles.bot
                            }
                            onClick={
                                // msg.sender === 'bot-button'
                                //     ? () => nameToId()
                                //     : undefined
                                () =>
                                    msg.id !== undefined &&
                                    updateContext(msg.id)
                            }
                        >
                            {msg.text.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}
                                    {i !== msg.text.split('\n').length - 1 && (
                                        <br />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <div
                    className={`${Styles.chatinput} ${Styles.row} ${Styles.border}`}
                >
                    <input
                        className={Styles.inner}
                        type="text"
                        placeholder="Enter your message"
                        value={input}
                        onChange={handleUserInput}
                        onKeyPress={handleKeyPress}
                    />
                    <button onClick={sendMessage} className={Styles.sendbtn}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatBot;
