import React from 'react'
import './telaCadastroSaida.css'
import NavBar from '~/components/navBar'
const TelaCadastroSaida = () => {
  return (
    <div className="main-container">
       <NavBar></NavBar>
       <div className="form-container">
        <h2 className='title'>Cadastro de Saída</h2>    
        <form className="login-form">
        <label>Valor:</label>
          <input type="number" name="valor" placeholder="Valor R$" />
          <label>Descrição:</label>
          <textarea className='description'></textarea>
          <label>Data:</label>
          <input type="date" name="dataTransacao"/>
          <input type="submit" value="Cadastrar" />
        </form>
      </div>
      </div>
  )
}

export default TelaCadastroSaida