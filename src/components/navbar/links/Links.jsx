'use client';

import { useState } from 'react';
import styles from './links.module.css';
import NavLink from './navLink/NavLink';
import Image from 'next/image';

const links = [
  {
    title: 'Homepage',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
];

//TODO - replace with real logic
const session = true;
const isAdmin = true;

const Links = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: 'Login', path: '/login' }} />
        )}
      </div>

      <Image
        src='/menu.png'
        alt=''
        onClick={() => setIsOpen((prev) => !prev)}
        width={30}
        height={30}
        className={styles.menuButton}
      />
      {isOpen && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
