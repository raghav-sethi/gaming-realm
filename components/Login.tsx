'use client';
import { useState } from 'react';
import classes from './Login.module.css';
import Link from 'next/link';
import APIURL from '@/app/constant';
import OtpInput from 'react-otp-input';

interface ChildProps {
    status: string;
    setStatus: (param: string) => void;
}

const Login: React.FC<ChildProps> = ({ status, setStatus }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [otp, setOtp] = useState('');

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

    const handleForgotPassword = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        try {
            const response = await fetch(`${APIURL}/auth/forgot-password`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: username }),
            });
            const result = await response.json();
            setMessage(result.message);
            setStatus('verify otp');
        } catch (err) {
            console.log(err);
            setMessage('Something went wrong');
        }
    };

    const handleVerifyOTP = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(username);

        try {
            const response = await fetch(`${APIURL}/auth/verify-otp`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: username, otp: otp }),
            });
            const result = await response.json();
            console.log(result);
            if (result.verified) {
                setMessage(
                    `${result.message}. Login using the password that is sent to you by email`
                );
            }
            setStatus('login');
            setUsername('');
            setPassword('');
        } catch (err) {
            console.log(err);
            setMessage('Something went wrong');
        }
    };

    return (
        <>
            <h1 className={classes.loginHeading}>
                {status === 'login'
                    ? 'Login to Gaming Realm'
                    : status === 'forgot password'
                    ? 'Change your Password'
                    : 'Verify your OTP'}
            </h1>
            <p className={classes.loginText}>
                {status === 'login'
                    ? ' Welcome Back! Please Login to your account to continue.'
                    : status === 'forgot password'
                    ? 'Please enter your email address to change your password.'
                    : 'Enter the 6-digit OTP sent to your Email account'}
            </p>
            <hr className={classes.hrLine} />
            <form
                action=""
                name="login"
                className={classes.loginForm}
                onSubmit={
                    status === 'login'
                        ? handleLogin
                        : status === 'forgot password'
                        ? handleForgotPassword
                        : handleVerifyOTP
                }
            >
                {status == 'verify otp' && (
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props} />}
                        containerStyle={classes.container}
                        inputStyle={classes.input}
                        skipDefaultStyles
                    />
                )}
                {status != 'verify otp' && (
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        name=""
                        placeholder="Email Address"
                        className={classes.loginInput}
                    />
                )}
                {status === 'login' && (
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name=""
                        placeholder="Enter Password"
                        className={classes.loginInput}
                    />
                )}
                <button className={classes.loginButton} type="submit">
                    {status === 'login' ? 'Login' : 'Proceed'}
                </button>
                {status != 'verify otp' && (
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
                )}
                {status === 'login' && (
                    <p className={classes.loginText}>
                        Forgot Password?{' '}
                        <Link
                            href=""
                            className={classes.linkButton}
                            onClick={() => setStatus('forgot password')}
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
