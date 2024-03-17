import React, { useState } from 'react';
import "./formLogin.css";
import { Link } from 'react-router-dom';
const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const auth = {
    email: email,
    password: password,
}
 
  const handleForm = async (e: any) => {
    try{
      e.preventDefault();
      const response = await fetch('http://localhost:3333/login',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(auth),
      });
      const responseToken = await response.json();
      console.log(responseToken.token);
     await localStorage.setItem('token',responseToken.token);
     await localStorage.setItem('company_id',responseToken.company_id);
     await localStorage.setItem('name',responseToken.name);
     await localStorage.setItem('cnpj',responseToken.cnpj);

     window.location.reload();
 
    }catch(error: any){
      console.log(error.message);
    }
   
  }
  return (
    <div className="main-container">
    <div className="form-container">
        <h1 className='title'>Login</h1>
        <form className="login-form" onSubmit={handleForm} method='POST'>
          <label>Email:</label>
          <input type="text" name="email" placeholder="Digite seu email" onChange={event => setEmail(event.target.value)} />
          <label>Senha:</label>
          <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Senha"
              onChange={event => setPassword(event.target.value)}
            />
          <span
              className="eye-icon"
              onClick={handleTogglePassword}
            >👁️</span>
          <input type="submit" value="Login"/>
        </form>
        <div className="separator">
          <div className="line"></div>
        </div>
        <div className="forgot-pass">
          <a href="#">Esqueceu a senha?</a>
        </div>
        <div id="register-container">
        <p>Não tem uma conta?</p> <Link to='/cadastro'>Cadastre-se</Link>
      </div>
      </div>
    </div>
  );
}

export default FormLogin;
