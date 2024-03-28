import React, { useState } from "react";
import "~/telaPesquisaEntrada/telaPesEntrada.css";
import NavBar from "~/components/navBar";

const TelaPesEntrada = () => {
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');
  const [entradas, setEntradas] = useState([]);
   const [error, setError] = useState('');
  const company_id = localStorage.getItem('company_id');
  const JWT = localStorage.getItem('token');
  const handleEntradas = async (e: any) => {
    try {
      e.preventDefault();
      
      const response = await fetch(`http://54.233.235.92:3333/entradas/${mes}/${ano}/${company_id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${JWT}`,
        }
      });
      const entradasJSON = await response.json();
      const entradasComDatasFormatadas = entradasJSON.map(entrada => {
        const data = new Date(entrada.date);
        const formattedData = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
      
        return {
          ...entrada,
          date: formattedData
        };
      });

      setEntradas(entradasComDatasFormatadas);
      setError('');

      //window.location.reload();

    } catch (error: any) {
      setError('nenhuma entrada encontrada');
      setEntradas([]);
    }
  }
  return (
    <div className="main-container">
      <NavBar></NavBar>
      <div className="form-container">
        <h1 className="title">Entradas</h1>
        <form className="login-form" onSubmit={handleEntradas} method="GET">
          <label htmlFor="mês">Selecione um mês:</label>
          <input type="number" id="mes" name="mes" min="01" max="12" step="01" onChange={e => setMes(e.target.value)} />
          <label htmlFor="year">Selecione um ano:</label>
          <input type="number" id="ano" name="ano" min="2024" max="2100" step="1" onChange={e => setAno(e.target.value)} />
          {
            error && <p>{error}</p>
          }
          {

            entradas.map((entrada, index) => (

              <div className="container" key={index}>
                <div className="mine-container">
                  <div className="left-info">
                    <span>entrada</span>
                    <p>{entrada.description}</p>
                  </div>
                  <div className="right-info">
                    <span>R$ {entrada.value}</span>
                    <p>{entrada.date}</p>
                  </div>
                </div>
              </div>
            ))}

          <input type="submit" value="Pesquisar" />
        </form>
      </div>
    </div>
  );
};

export default TelaPesEntrada;
