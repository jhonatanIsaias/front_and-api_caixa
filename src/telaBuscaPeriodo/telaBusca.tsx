import React, { useState, useEffect } from "react";
import './telaBusca.css'
import NavBar from '~/components/navBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const TelaBusca = () => {
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');
  const [somaEntrada, setSomaEntrada] = useState(0);
  const [entradas, setEntradas] = useState([]);
  const [somaSaida, setSomaSaida] = useState(0);
  const [saidas, setSaidas] = useState([]);
  
  const company_id = localStorage.getItem('company_id');
  const JWT = localStorage.getItem('token');

  useEffect(() => {
    setSomaEntrada(sumEntradas());
  }, [entradas]);
  useEffect(() => {
    setSomaSaida(sumSaidas());
  }, [saidas]);
  const sumEntradas = () => {
    let soma = 0;
    entradas.forEach(entrada => {
      soma += Number.parseInt(entrada.value);
    });
    return soma;
  }
  const sumSaidas = () => {
    let soma = 0;
    saidas.forEach(saida => {
      soma += Number.parseInt(saida.value);
    });
    return soma;
  }
 


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
      const entradas = entradasJSON.map(entrada => {

        return {
          ...entrada,
        };
      });

      setEntradas(entradas);
    


    } catch (error: any) {
      setEntradas([]);
    }
  }

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
      const saidas= saidasJSON.map(saida => {
       
        return {
          ...saida,
        };
      });

      setSaidas(saidas);
      


    } catch (error: any) {
    
      setSaidas([]);
    }
  }
  
  const gerarPlanilha = async (e: any) => {
    e.preventDefault();
    try {
      const axiosConfig = {
       headers: {
        'authorization': `Bearer ${JWT}`,
       },
       responseType: 'arraybuffer' ,
      }

     
     const response = await axios.get(`http://54.233.235.92:3333/gerar-planilha/${mes}/${ano}/${company_id}`,axiosConfig);
     const url = window.URL.createObjectURL(new Blob([response.data]), { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
     const link = document.createElement('a');
     link.href = url;
     link.setAttribute('download',`planilha${mes}-${ano}.xlsx`);
     document.body.appendChild(link);
     link.click();

    } catch (error) {
      console.error('Erro ao gerar planilha:', error.message);
    }
  };
  return (
    <div className="main-container">
      <NavBar></NavBar>
      <div className="form-container">
        <h1 className='title'>Transações</h1>
        <form className="login-form" method="GET">
          <span>Período</span>
          <label htmlFor="mês">Selecione um mês:</label>
          <input type="number" id="mes" name="mes" min="01" max="12" step="01" onChange={e => setMes(e.target.value)} />
          <label htmlFor="year">Selecione um ano:</label>
          <input type="number" id="ano" name="ano" min="2024" max="2100" step="1" onChange={e => setAno(e.target.value)} />
          <div className="container">
            <span>Quanto entrou:</span>
            <span>R$ {somaEntrada},00</span>
            <button onClick={handleEntradas}><FontAwesomeIcon icon={faArrowRight} style={{ color: "#3d5872", }} /></button>
          </div>
          <div className="container">
            <span>Quanto saiu</span>
            <span>R$ {somaSaida},00</span>
            <button onClick={handleSaidas}><FontAwesomeIcon icon={faArrowRight} style={{ color: "#3d5872", }} /></button>
          </div>
          <div>
            <button className='btn' onClick={gerarPlanilha} >Gerar Planilha</button>
          </div>
          <div className="containerTotal">
            <span>TOTAL</span>
            <span>R$ {somaEntrada - somaSaida},00</span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TelaBusca