// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./Cards.module.css";

// ***********************************
// |          Import Icons           |
// ***********************************

import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";

const Cards = ({entrada,saida,total}) => {

    return (
        <div className={styles.cards}>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h3>Entradas</h3>
                    <FaRegArrowAltCircleUp />
                </div>
                <div className={styles.cardFooter}>
                    <span>R$: {entrada} </span>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h3>Saídas</h3>
                    <FaRegArrowAltCircleDown />
                </div>
                <div className={styles.cardFooter}>
                    <span>R$: {saida} </span>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h3>Total</h3>
                    <FaDollarSign />
                </div>
                <div className={styles.cardFooter}>
                    <span>R$: {total}</span>
                </div>
            </div>
        </div>
    );
};

export default Cards;
