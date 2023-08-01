// ***********************************
// |         Import Padrão           |
// ***********************************

import React, { useEffect, useState } from "react";

// ***********************************
// |       Import Componentes        |
// ***********************************
import Cabecalho from "./componentes/Cabecalho";
import Cards from "./componentes/Cards";
import Form from "./componentes/Form";
import Relatorio from "./componentes/Relatorio";
import Footer from "./componentes/Footer";

function App() {
    const [financas, setFinancas] = useState([]);

    const handleSave = (valor) => {
        setFinancas([...financas, valor]);
    };

    const handleDelete = (item) => {
        setFinancas(financas.filter((financa) => financa.descricao !== item));
    };

    const [entrada, setEntrada] = useState(0);
    const [saida, setSaida] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const listaEntradas = financas
            .filter((item) => item.tipo !== "saida")
            .map((item) => Number(item.valor));
        const listaSaidas = financas
            .filter((item) => item.tipo !== "entrada")
            .map((item) => Number(item.valor));

        const somaEntradas = listaEntradas
            .reduce((acc, cur) => acc + cur, 0)
            .toFixed(2);
        const somaSaidas = listaSaidas
            .reduce((acc, cur) => acc + cur, 0)
            .toFixed(2);
        const somaTotal = Math.abs(somaEntradas - somaSaidas).toFixed(2);

        setEntrada(somaEntradas);
        setSaida(somaSaidas);
        console.log(`ENTRADAS ${somaEntradas}
        Saidas ${somaSaidas}`)
        setTotal(
            Number(somaSaidas) > Number(somaEntradas) ? `- ${somaTotal}` : `  ${somaTotal}`
        );
    }, [financas]);

    return (
        <div className="App">
            <Cabecalho />
            <Cards entrada={entrada} saida={saida} total={total} />
            <Form handleSave={handleSave} />
            <Relatorio handleDelete={handleDelete} financas={financas} />
            <Footer/>
        </div>
    );
}

export default App;
