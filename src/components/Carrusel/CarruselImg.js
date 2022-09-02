import React from 'react';
import {useLocation} from 'wouter';

function Carrusel({title, id, url}){

    const [path, pushLocation] = useLocation();

    const detalle = () => 
    {
        pushLocation(`/detalle/${id}`);
    }

    return(
        <li>
            <img src={url} onClick={detalle}/>
            <div className="caption center-align">
            <h3>{id}</h3>
            <h5 className="light grey-text text-lighten-3">{title}</h5>
            </div>
        </li>
    )
}
export default React.memo(Carrusel);