import React from 'react';
import {useLocation} from 'wouter';
import './index.css'
const Index = ({valor}) => {

    const [path, pushLocation] = useLocation();

    const boton = () => 
    {
        pushLocation(`/gif/:${valor}`);
    }

    return (
        <div className='palabras'>
            <a onClick={event => boton()}>{valor}</a>
        </div>
    );
};

export default Index;