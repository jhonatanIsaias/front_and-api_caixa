import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cnpj } from 'cpf-cnpj-validator';

const TelaCadastro = () => {
  const [name, setName] = useState('');
  const [cnpjClient, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorCnpj, setErrorCnpj] = useState('');
  const [errorSenha, setErrorSenha] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const validateCnpj = () => {
    if (!cnpj.isValid(cnpjClient)) {
      setErrorCnpj('CNPJ inválido!');
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if(password.length < 6){
      return false;
    }
    return true;
  }


  const handleForm = async (e) => {
    e.preventDefault();
   
    try {
      console.log(cnpj.generate());
      if (!validateCnpj()) {
        return;
      }
      if (!validatePassword()) {
        setErrorSenha('senha deve ter pelo menos 6 caracteres')
        return;
      }
      if(error){
        return
      }
  
      const formData = {
        name: name,
        cnpj: cnpjClient,
        password: password,
        email: email,
      };
  
      const response = await fetch('http://54.233.235.92:3333/companies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.status !== 201) {
        setError('cnpj ou email ja possuem usuario');
        throw new Error('Empresa não cadastrada');
       
      }
      setError('');
      // Se não houver erro, redireciona para a tela de login
      navigate('/')
      
    } catch (error) {
      setError('empresa não cadastrada');
      console.log(error);
    }
  
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <h1 className="title">Cadastro</h1>
        <form className="login-form" onSubmit={handleForm} method="POST">
          <label>Nome da empresa:</label>
          <input
            type="text"
            name="nomeEmpresa"
            placeholder="Nome da empresa"
            required
            onChange={(event) => setName(event.target.value)}
          />
          <label>CNPJ:</label>
          <input
            type="text"
            name="cnpj"
            placeholder="Digite o CNPJ"
            required
            value={cnpjClient}
            onChange={(event) => setCnpj(event.target.value)}
          />
          <div><p>{errorCnpj}</p></div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            placeholder="Digite o email"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
          <label>Senha:</label>
          <input
            type="password"
            name="password"
            placeholder="Senha"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
          {errorSenha && <p>{errorSenha}</p>}
          <input type="submit" value="Cadastrar" />
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default TelaCadastro;
