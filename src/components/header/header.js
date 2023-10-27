import React from "react";
import styles from "./../../styles/header.module.css";
import CustomLink from "../link/link";

const Header = ({ title, backgroundColor }) => {
  const headerStyle = {
    backgroundColor: backgroundColor || " #6d98fd",
  };

  return (
    <header className={styles.header} style={headerStyle}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>{title}</h1>
          <CustomLink href="/">
            <img src="/logo.png" alt="Logo da empresa" />
          </CustomLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
