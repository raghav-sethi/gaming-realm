import Link from 'next/link';
import React from 'react';
import classes from './Register.module.css';

interface ChildProps {
    status: string;
    setStatus: (param: string) => void;
}

const Register: React.FC<ChildProps> = ({ setStatus }) => {
    return (
        <>
            <h1 className={classes.registerHeading}>Sign Up</h1>
            <p className={classes.registerText}>
                Welcome to Gaming Realm! Many new games waiting to be played.
            </p>
            <hr className={classes.hrLine} />
            <form action="" name="register" className={classes.registerForm}>
                <input
                    type="text"
                    placeholder="Name"
                    className={classes.loginInput}
                />
                <input
                    type="text"
                    placeholder="Username"
                    className={classes.loginInput}
                />
                <input
                    type="text"
                    placeholder="Email"
                    className={classes.loginInput}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className={classes.loginInput}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className={classes.loginInput}
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
        </>
    );
};

export default Register;
