import React, { useState } from "react";
import "~/telaPesquisaSaida/telaPesSaida.css";
import NavBar from "~/components/navBar";

const TelaPesSaida = () => {
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');
  const [saidas, setSaidas] = useState([]);
   const [error, setError] = useState('');
  const company_id = localStorage.getItem('company_id');
  const JWT = localStorage.getItem('token');
  const handleSaidas = async (e: any) => {
    try {
      e.preventDefault();
      
      const response = await fetch(`http://54.233.235.92:3333/saidas/${mes}/${ano}/${company_id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${JWT}`,
        }
      });
      const saidasJSON = await response.json();
      const saidasComDatasFormatadas = saidasJSON.map(saida => {
        const data = new Date(saida.date);
        const formattedData = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
     
        return {
          ...saida,
          date: formattedData
        };
      });

      setSaidas(saidasComDatasFormatadas);
      setError('');

      //window.location.reload();

    } catch (error: any) {
      setError('nenhuma saida encontrada');
      setSaidas([]);
    }
  }
  return (
    <div className="main-container">
      <NavBar></NavBar>
      <div className="form-container">
        <h1 className="title">Saidas</h1>
        <form className="login-form" onSubmit={handleSaidas} method="GET">
          <label htmlFor="mês">Selecione um mês:</label>
          <input type="number" id="mes" name="mes" min="01" max="12" step="01" onChange={e => setMes(e.target.value)} />
          <label htmlFor="year">Selecione um ano:</label>
          <input type="number" id="ano" name="ano" min="2024" max="2100" step="1" onChange={e => setAno(e.target.value)} />
          {
            error && <p>{error}</p>
          }
          {

            saidas.map((saida, index) => (

              <div className="container" key={index}>
                <div className="mine-container">
                  <div className="left-info">
                    <span>saida</span>
                    <p>{saida.description}</p>
                  </div>
                  <div className="right-info">
                    <span>R$ {saida.value}</span>
                    <p>{saida.date}</p>
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

export default TelaPesSaida;
