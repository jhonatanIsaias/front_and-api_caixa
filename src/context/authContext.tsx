import React, { createContext } from "react";


interface Provider {
    token: string | null;
}

function readToken(): Provider {
    const token = localStorage.getItem('token');


    return { token };
}


const AuthProviderContext = createContext<Provider>(readToken());

export default AuthProviderContext;
