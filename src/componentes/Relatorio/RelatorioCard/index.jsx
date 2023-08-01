// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./RelatorioCard.module.css"

import {MdDelete} from "react-icons/md"

const RelatorioCard = ({handleDelete,item,Logo})=>{
    return(
        <div className={styles.relatorioCard}>
        <h1>{item.descricao}</h1>
        <p>R$: {item.valor}</p>
        <span><Logo size={25}/></span>
        <span><MdDelete size={25} onClick={()=> handleDelete(item.descricao)}/></span>

    </div>
    )
}

export default RelatorioCard