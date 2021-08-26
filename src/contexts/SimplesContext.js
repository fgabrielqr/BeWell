import React, {useState, createContext} from 'react'; 

const SimplesContext = createContext({}); 

export function SimplesProvider ({ children }){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState(''); 
    const [senha, setSenha] = useState('');


    return (
        <SimplesContext.Provider value={{
            nome, setNome, email, setEmail, 
        }}> 
            { children }
        </SimplesContext.Provider>
    );
};

export default SimplesContext;