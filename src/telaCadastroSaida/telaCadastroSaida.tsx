import React, { useState } from 'react';
import './telaCadastroSaida.css'
import NavBar from '~/components/navBar'
const TelaCadastroSaida = () => {
  const [date,setDate] = useState('');
  const [value,setValue] = useState('');
  const [description,setDescription] = useState('');
  const company_id = localStorage.getItem('company_id');
  const JWT = localStorage.getItem('token');
 
  const saida = {
    date: date,
    value: value,
    description: description,
    _id:company_id
  }
  const submitSaida = async (e:any) => {
    try{
      e.preventDefault();
      const response = await fetch('http://localhost:3333/saidas',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${JWT}`,
          
        },
        body: JSON.stringify(saida),
      });
      const id = await response.json();
      console.log(id);
     
    //  window.location.reload();
 
    }catch(error: any){
      console.log(error.message);
    }
  }
  return (
    <div className="main-container">
       <NavBar></NavBar>
       <div className="form-container">
        <h2 className='title'>Cadastro de Saída</h2>    
        <form className="login-form" onSubmit={submitSaida}>
        <label>Valor:</label>
          <input type="number" name="valor" placeholder="Valor R$" onChange={e => setValue(e.target.value)}/>
          <label>Descrição:</label>
          <textarea className='description' onChange={e => setDescription(e.target.value)}></textarea>
          <label>Data:</label>
          <input type="date" name="dataTransacao" onChange={e => setDate(e.target.value)}/>
          <input type="submit" value="Cadastrar" />
        </form>
      </div>
      </div>
  )
}

export default TelaCadastroSaida