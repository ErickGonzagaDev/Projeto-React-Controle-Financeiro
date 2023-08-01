// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./Relatorio.module.css";

import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown
} from "react-icons/fa";
import RelatorioCard from "./RelatorioCard";

const Relatorio = ({financas,handleDelete}) => {
    return (
        <div className={styles.relatorio}>  
        <h1>Relatorio:</h1>

            {financas.map((item)=> item.tipo !== "saida" ?  <RelatorioCard key={item.descricao} handleDelete={handleDelete} item={item} Logo={FaRegArrowAltCircleUp}/> : <RelatorioCard  key={item.descricao} handleDelete={handleDelete} item={item} Logo={FaRegArrowAltCircleDown}/>)} 
            
        </div>
    );
};

export default Relatorio;
