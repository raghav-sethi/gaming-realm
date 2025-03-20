'use client';
import { useState } from 'react';
import classes from './Login.module.css';
import Link from 'next/link';
import APIURL from '@/app/constant';

interface ChildProps {
    status: string;
    setStatus: (param: string) => void;
}

const Login: React.FC<ChildProps> = ({ status, setStatus }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleOtpPasswordLogin = () => {
        // Call OTP API here
        console.log('OTP sent to user');
        setStatus('forgot password');
    };

    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('Stated to send to backend');
        console.log(username, password);
        try {
            const response = await fetch(`${APIURL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: username, password }),
            });

            const result = await response.json();
            console.log(result);
            setMessage(result.message);
            if (result.message === 'Login Successful') {
                localStorage.setItem('token', result.token);
                localStorage.setItem('user', JSON.stringify(result.user));
                window.location.href = '/';
            }
        } catch (err) {
            console.log(err);
            setMessage('Something went wrong');
        }
    }

    return (
        <>
            <h1 className={classes.loginHeading}>
                {status === 'login'
                    ? 'Login to Gaming Realm'
                    : 'Change your Password'}
            </h1>
            <p className={classes.loginText}>
                {status === 'login'
                    ? ' Welcome Back! Please Login to your account to continue.'
                    : 'Please enter your email address to change your password.'}
            </p>
            <hr className={classes.hrLine} />
            <form
                action=""
                name="login"
                className={classes.loginForm}
                onSubmit={handleLogin}
            >
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    name=""
                    id=""
                    placeholder="Email Address"
                    className={classes.loginInput}
                />
                {status === 'login' && (
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name=""
                        id=""
                        placeholder="Enter Password"
                        className={classes.loginInput}
                    />
                )}
                <button className={classes.loginButton} type="submit">
                    {status === 'login' ? 'Login' : 'Proceed'}
                </button>
                <p className={classes.loginText}>
                    Don&apos;t have Account?{' '}
                    <Link
                        href=""
                        className={classes.linkButton}
                        onClick={() => setStatus('register')}
                    >
                        Register
                    </Link>
                </p>
                {status === 'login' && (
                    <p className={classes.loginText}>
                        Forgot Password?{' '}
                        <Link
                            href=""
                            className={classes.linkButton}
                            onClick={handleOtpPasswordLogin}
                        >
                            Change Password
                        </Link>
                    </p>
                )}
                {status === 'forgot password' && (
                    <p className={classes.loginText}>
                        Already have an account?{' '}
                        <Link
                            href=""
                            className={classes.linkButton}
                            onClick={() => setStatus('login')}
                        >
                            Login
                        </Link>
                    </p>
                )}
                <p>{message}</p>
            </form>
        </>
    );
};

export default Login;
