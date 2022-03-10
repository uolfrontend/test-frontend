import { createContext, useEffect, useState } from 'react'
import data  from '../data';

export const ClientContext = createContext()

export const ClientContextProvider = ({children}) => {
    var newDatas = localStorage.getItem('clients')
    var List = JSON.parse(newDatas)
    const [isOpen, setIsOpen] = useState(false);
    const [isAdd, setIsAdd] = useState(false);
    const [clientEdit, setClientEdit] = useState({});
    const [client, setClient] = useState(List);

    localStorage.setItem('clients', JSON.stringify(data.customers))

    const handleState = () =>{
        setIsOpen(!isOpen)
    }
    
    return(
        <ClientContext.Provider value={{isOpen, setIsOpen, handleState, newDatas, clientEdit, setClientEdit, List, setIsAdd, isAdd, client, setClient}}>
            {children}
        </ClientContext.Provider>
    );
}