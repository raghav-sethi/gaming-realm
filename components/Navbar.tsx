'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import classes from './Navbar.module.css';
import { links } from '@/lib/data/data';
import logoIcon from '@/public/logo.png';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className={classes.navbar}>
            <Link href="/">
                <Image
                    src={logoIcon}
                    alt="logo"
                    className={`${classes.navIcon} ${classes.logo}`}
                    priority
                />
            </Link>

            <ul className={classes.navLinksList}>
                {links.map((link) => (
                    <li className={classes.navIcon} key={link.alt}>
                        <Link href={link.href}>
                            <Image src={pathname === link.href ? link.activeSrc : link.src} alt={link.alt} priority />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
