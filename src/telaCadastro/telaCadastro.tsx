import React from 'react'
import { useState } from 'react'
import '~/telaCadastro/telaCadastro.css'
import { useNavigate } from 'react-router-dom'
const TelaCadastro = () => {
  const [name,setname] = useState('');
  const [cnpj,setCnpj] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const navigate = useNavigate();

  const formData = {
    name: name,
    cnpj: cnpj,
    password: password,
    email: email,
  }
 
  const handleForm = async (e: any) => {
    try{
      e.preventDefault();
      const response = await fetch('http://localhost:3333/companies',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      const json = await response.json();
      navigate('/login');
    }catch(error: any){
      console.log(error.message);
    }
   
  }
  return (
    <div className="main-container">
    <div className="form-container">
        <h1 className='title'>Cadastro</h1>
        <form className="login-form" onSubmit={handleForm} method='POST'>
        <label>Nome da empresa:</label>
          <input type="text" name="nomeEmpresa" placeholder="Nome da empresa" required onChange={event => setname(event.target.value)}/>
          <label>CNPJ:</label>
          <input type="text" name="cnpj" placeholder="Digite o CNPJ" required onChange={event => setCnpj(event.target.value)} />
          <label>Email:</label>
          <input type="text" name="email" placeholder="Digite o email" required onChange={event => setEmail(event.target.value)} />
          <label>Senha:</label>
          <input
              type="password"
              name="password"
              placeholder="Senha"
              required
              onChange={event => setPassword(event.target.value)}
            />
            <label>Confirme a Senha:</label>
            <input
              type="password"
              name="password"
              placeholder="Confirme a Senha"
            />
          <input type="submit" value="Cadastrar" />
        </form>
      </div>
    </div>
  )
}

export default TelaCadastro