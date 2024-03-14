import React from 'react'
import '~/telPesquisaSaida/telaPesquisaSaida.css'
import NavBar from "~/components/navBar";
import BarraPesquisa from "~/components/barraPesquisa";
const TelaPesquisaSaida = () => {
  return (
    <div className="main-container">
      <NavBar></NavBar>
      <div className="form-container">
        <h1 className="title">Saídas</h1>
        <form className="login-form">
          <BarraPesquisa/>
          <div className="container">
            <div className="mine-container">
              <div className="left-info">
                  <span>Nome da pessoa</span>
                  <span>Descrição</span>
              </div>
              <div className="right-info">
                <span>R$</span>
                <span>10/01</span>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="mine-container">
              <div className="left-info">
                  <span>Nome da pessoa</span>
                  <span>Descrição</span>
              </div>
              <div className="right-info">
                <span>R$</span>
                <span>10/01</span>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="mine-container">
              <div className="left-info">
                  <span>Nome da pessoa</span>
                  <span>Descrição</span>
              </div>
              <div className="right-info">
                <span>R$</span>
                <span>10/01</span>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="mine-container">
              <div className="left-info">
                  <span>Nome da pessoa</span>
                  <span>Descrição</span>
              </div>
              <div className="right-info">
                <span>R$</span>
                <span>10/01</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TelaPesquisaSaida