import React from "react";

import Link from "next/link";
// import styles from "./CustomLink.module.css"; // Importe o arquivo CSS
const CustomLink = ({ to, children, ...rest }) => {
    return (
      <Link href={to}>
        <a  {...rest}>
          {children}
        </a>
      </Link>
    );
  };
  
  export default CustomLink;