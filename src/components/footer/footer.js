// components/Footer.js
import React from 'react';
import styles from './../../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2023 Seu Site. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
