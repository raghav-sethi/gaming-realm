'use server';

import { GameType, GenreType } from '@/lib/types/types';

export async function sendChatData(
    message: string,
    currentMenu: string,
    userId?: string
): Promise<GenreType | GameType | void> {
    try {
        const response = await fetch(
            'http://localhost:8000/api/chatbot/sendchat',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message,
                    currentMenu,
                    userId,
                }),
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const genre: GenreType = data.chatReply;

        return genre;
    } catch (err) {
        console.error('Error sending chat data:', err);
    }
}
