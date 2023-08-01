// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./Footer.module.css"


const Footer = ()=>{
    return(
        <div className={styles.footer}>
        <p>Projeto desenvolvido por Erick Gonzaga</p>
        <p>Projeto pessoal</p>
        </div>
    )
}

export default Footer