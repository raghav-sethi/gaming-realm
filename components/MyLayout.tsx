import React from 'react';
import Navbar from './Navbar';
import classes from './MyLayout.module.css';
import Sidebar from './Sidebar';

interface MyLayoutProps {
    children: React.ReactNode;
}

const MyLayout: React.FC<MyLayoutProps> = ({ children }) => {
    return (
        <main className={classes.overlay}>
            <Navbar />
            <div className={classes.mainContent}>{children}</div>
            <Sidebar />
        </main>
    );
};

export default MyLayout;
