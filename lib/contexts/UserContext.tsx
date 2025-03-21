'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';


const UserContext = createContext(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('userId');
        return storedUser ? JSON.parse(storedUser) : null;
    });
    useEffect(() => {
        if (user) {
            localStorage.setItem('userId', JSON.stringify(user)); 
        } else {
            localStorage.removeItem('userId'); 
        }
    }, [user]);
};
