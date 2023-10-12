// components/Header.js
import React from 'react';
import styles from './../../styles/header.module.css';
import Link from 'next/link';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
        <Link href="/">
      
          <img src="/logo.png" alt="Logo da empresa" />
        </Link>
        </div>
     
      </div>
    </header>
  );
};

export default Header;
