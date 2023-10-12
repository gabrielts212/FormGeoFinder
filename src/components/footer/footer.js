import React from "react";
import styles from "./../../styles/footer.module.css";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/Ai";
import { VscGithub } from "react-icons/Vsc";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2023 Gabriel Nascimento. Todos os direitos reservados.</p>
        <div className={styles.linkedinIcons}>
          <a
            href="https://github.com/gabrielts212/"
            className={styles.linkedinIcon}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size={40} color="#82c341" />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-nascimento-pereira/"
            className={styles.linkedinIcon}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={40} color="#82c341" />
          </a>
          <a
            href="https://github.com/gabrielts212/desafio-grupo-blend"
            className={styles.linkedinIcon}
            target="_blank"
            rel="noopener noreferrer"
          >
            <VscGithub size={40} color="#82c341" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
