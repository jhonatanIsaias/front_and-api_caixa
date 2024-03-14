import React from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';
const navBar = () => {
  return (
            <nav className='navbar-container'>
                <ul className="navbar-items">
                    <li>
                        <Link to='/cadastrarentrada'>Cadastrar Entrada</Link>
                    </li>
                    <li>
                        <Link to='/cadastrarsaida'>Cadastrar Saída</Link>
                    </li>
                    <li>
                        <Link to='/pesquisarentrada'>Buscar Transação</Link>
                    </li>
                    <li>
                        <Link to='/minhaConta'>Minha Conta</Link>
                    </li>
                </ul>
            </nav>
  )
}

export default navBar