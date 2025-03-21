import Link from 'next/link';
import React from 'react';
import classes from './Register.module.css';
import { API_URLSS } from '@/app/constant';

interface ChildProps {
    status: string;
    setStatus: (param: string) => void;
}

const Register: React.FC<ChildProps> = ({ setStatus }) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Stated to send to backend');
        console.log(name, email, username, password, confirmPassword);

        if (name === '' || email === '' || username === '' || password === '' || confirmPassword === '') {
            setMessage('All fields are required');
            return;
        }

        if (password !== confirmPassword) {
            setMessage('Password and Confirm Password should be the same');
            return;
        }

        try {
            const response = await fetch(`${API_URLSS}/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, username, password }),
            });
            const result = await response.json();
            console.log(result);
            setMessage(result.message);
            if (result.message === 'User created successfully') {
                setStatus('login');
            }
        } catch (err) {
            console.log(err);
            setMessage('Something went wrong');
        }
    };

    return (
        <>
            <h1 className={classes.registerHeading}>Sign Up</h1>
            <p className={classes.registerText}>
                Welcome to Gaming Realm! Many new games are waiting to be played.
            </p>
            <hr className={classes.hrLine} />
            <form action="" name="register" className={classes.registerForm} onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Name"
                    className={classes.loginInput}
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />


                <input
                    type="text"
                    placeholder="Username"
                    className={classes.loginInput}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Email"
                    className={classes.loginInput}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className={classes.loginInput}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />


                <input
                    type="password"
                    placeholder="Confirm Password"
                    className={classes.loginInput}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button className={classes.loginButton}>Sign-Up</button>
            </form>

            <p className={classes.registerText}>
                Already have an account?{' '}
                <Link
                    href=""
                    className={classes.linkButton}
                    onClick={() => setStatus('login')}
                >
                    Login
                </Link>
            </p>
            <p>{message}</p>
        </>
    );
};

export default Register;
