import React from 'react'
import './telaBusca.css'
import NavBar from '~/components/navBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";
const TelaBusca = () => {
  return (
    <div className="main-container">
       <NavBar></NavBar>
       <div className="form-container">
        <h1 className='title'>Transações</h1>
        <form className="login-form">
            <span>Período</span>
            <select>
              <option value="marco2024">Março/2024</option>
              <option value="abril2024">Abril/2024</option>
              <option value="maio2024">Maio/2024</option>
              <option value="junho2024">Junho/2024</option>
              <option value="julho2024">Julho/2024</option>
              <option value="agosto2024">Agosto/2024</option>
              <option value="setembro2024">Setembro/2024</option>
              <option value="outubro2024">Outubro/2024</option>
              <option value="novembro2024">Novembro/2024</option>
              <option value="dezembro2024">Dezembro/2024</option>
              <option value="janeiro2025">Janeiro/2025</option>
              <option value="fevereiro2025">Fevereiro/2025</option>
            </select>
          <div className="container">
              <span>Quanto entrou</span>
              <span>R$ 0,00</span>
              <button><FontAwesomeIcon icon={faArrowRight} style={{color: "#3d5872",}} /></button>
          </div>
          <div className="container">
              <span>Quanto saiu</span>
              <span>R$ 0,00</span>
              <button><FontAwesomeIcon icon={faArrowRight} style={{color: "#3d5872",}} /></button>
          </div>
          <div>
            <button className='btn'>Gerar Planilha</button>
          </div>
          <div className="containerTotal">
              <span>TOTAL</span>
              <span>R$ 0,00</span>
          </div>
        </form>
      </div>
      </div>
  )
}

export default TelaBusca