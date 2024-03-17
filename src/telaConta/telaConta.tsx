import React, { useState } from 'react'
import '~/telaConta/telaConta.css'
import NavBar from '~/components/navBar'
import { useNavigate } from 'react-router-dom';
const TelaConta = () => {
  const name = localStorage.getItem('name');
  const cnpj = localStorage.getItem('cnpj');
  const navigate = useNavigate();

  const sair = () => {
    navigate('/');
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div className="main-container">
        <NavBar/>
    <div className="form-container">
        <h1 className='title'>Conta</h1>
        <form className="login-form" onSubmit={sair}>
          
              <span>Empresa: {name}</span>
              <span>CNPJ: {cnpj}</span>
          
          <input type="submit" value="Sair" />
        </form>
      </div>
    </div>
  )
}

export default TelaConta