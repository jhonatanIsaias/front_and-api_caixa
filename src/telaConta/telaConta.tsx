import React from 'react'
import '~/telaConta/telaConta.css'
import NavBar from '~/components/navBar'
const TelaConta = () => {
  return (
    <div className="main-container">
        <NavBar/>
    <div className="form-container">
        <h1 className='title'>Conta</h1>
        <form className="login-form">
          
              <span>Nome da empresa</span>
              <span>CNPJ</span>
          
          <input type="submit" value="Sair" />
        </form>
      </div>
    </div>
  )
}

export default TelaConta