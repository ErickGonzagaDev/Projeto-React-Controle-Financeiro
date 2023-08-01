// ***********************************
// |         Import Padrão           |
// ***********************************

import React, { useState } from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./Form.module.css";

const Form = ({ handleSave }) => {
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");
    const [tipo, setTipo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSave({
            descricao,
            valor,
            tipo,
        });

        setDescricao("")
        setValor("")
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formInput}>
                <label>Descrição</label>
                <input
                    onChange={(e) => setDescricao(e.target.value)}
                    value={descricao}
                    type="text"
                    placeholder="Ex: Salário"
                    required
                />
            </div>

            <div className={styles.formInput}>
                <label>Valor</label>
                <input
                    onChange={(e) => setValor(e.target.value)}
                    value={valor}
                    type="number"
                    placeholder="ex: 1500"
                    required
                />
            </div>

            <div className={styles.formInput}>
                <label>Entrada</label>
                <input
                    onChange={(e) => setTipo(e.target.value)}
                    name="tipo"
                    value="entrada"
                    type="radio"
                    required
                />
            </div>

            <div className={styles.formInput}>
                <label>Saída</label>
                <input
                    onChange={(e) => setTipo(e.target.value)}
                    name="tipo"
                    value="saida"
                    type="radio"
                    required
                />
            </div>

            <button>Adicionar</button>
        </form>
    );
};

export default Form;
