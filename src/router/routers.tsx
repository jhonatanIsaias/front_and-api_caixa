import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TelaCadastro from '~/telaCadastro/telaCadastro';
import FormLogin from '~/telaLogin/formLogin';
import TelaBusca from '~/telaBuscaPeriodo/telaBusca';
import TelaCadEntrada from '~/telaCadastroEntrada/telaCadEntrada';
import TelaCadastroSaida from '~/telaCadastroSaida/telaCadastroSaida';
import TelaPesEntrada from '~/telaPesquisaEntrada/telaPesEntrada';
import TelaConta from '~/telaConta/telaConta';
import AuthProviderContext from '~/context/authContext';
import TelaPesSaida from '~/telaPesquisaSaida/telaPesSaida';

const Routers = () => {
    const { token } = useContext(AuthProviderContext);
   


    return (
        <Router>
            <Routes>
                {token === null ? (
                
                    <>
                        <Route path='/' element={<FormLogin />} />
                        <Route path='/cadastro' element={<TelaCadastro />} />
                    </>
                ) : (
                    <>
                        <Route path='/' element={<TelaCadEntrada />} />
                        <Route path='/buscar' element={<TelaBusca />} />
                        <Route path='/cadastrarsaida' element={<TelaCadastroSaida />} />
                        <Route path='/pesquisarentrada' element={<TelaPesEntrada />} />
                        <Route path='/pesquisarsaida' element={<TelaPesSaida />} />
                        <Route path='/minhaConta' element={<TelaConta />} />
                    </>
                )}
            </Routes>
        </Router>
    );
};

export default Routers;
