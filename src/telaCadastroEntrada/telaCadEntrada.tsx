import React, { useState } from 'react';
import "./telaCadEntrada.css"
import NavBar from '../components/navBar';
const TelaCadEntrada = () => {
  const [date,setDate] = useState('');
  const [value,setValue] = useState('');
  const [status, setStatus] = useState('');
  const [description,setDescription] = useState('');
  const company_id = localStorage.getItem('company_id');
  const JWT = localStorage.getItem('token');

  const entrada = {
    date: date,
    value: value,
    description: description,
    _id:company_id
  }

  const submitEntrada = async (e:any) => {
    try{
    
      e.preventDefault();
      const response = await fetch('http://localhost:3333/entradas',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${JWT}`,
          
        },
        body: JSON.stringify(entrada),
      });
      const id = await response.json();
     
      setValue('');
      setDescription('');
      setStatus('entrada enviada com sucesso');
 
    }catch(error: any){
      setStatus(error.message);
    }
  }
  return (
    <div className="main-container">
        <NavBar></NavBar>
       <div className="form-container">
        <h2 className='title'>Cadastro de Entrada</h2>    
        <form className="login-form" onSubmit={submitEntrada} method='POST'>
        <label>Valor:</label>
          <input type="number" name="valor" value={value} placeholder="Valor R$" onChange={e => setValue(e.target.value)} />
          <label>Descrição:</label>
          <textarea className='description' value={description} onChange={e => setDescription(e.target.value)}></textarea>
          <label>Data:</label>
          <input type="date" name="dataTransacao" onChange={e => setDate(e.target.value)}/>
          <input type="submit" value="Cadastrar" />
          <div>{status}</div>
        </form>
      </div>
      </div>
  )
}

export default TelaCadEntrada