import React,{useState} from "react";

const Context = React.createContext({})

export function GifsContextprovider({children})
{
    const [gifs, setgifs] = useState([])


    return <Context.Provider value={{gifs,setgifs}}>
        {children}
    </Context.Provider>

}

export default Context