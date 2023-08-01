// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./Cabecalho.module.css";

const Cabecalho = () => {
    return (
        <div className={styles.cabecalho}>
            <h1>Controle de Finanças</h1>
        </div>
    );
};

export default Cabecalho;
