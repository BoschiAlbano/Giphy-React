import {useLocation} from 'wouter';
import React, {useCallback} from 'react';
import Gif from "components/Gif/Gif"
import {useGifs} from 'Hook/UltimoGif';
import './Inicio.css'
import TrendingSearches from 'components/TrendingSearches';
import Spinner from 'components/Spinner';
import Formulario from 'components/FormularioBusqueda/Formulario';

export default function Inicio(){

    const [push ,pushLocation] = useLocation();
    const {gifs, setPage, loading} = useGifs()

    // Evento Siguiente
    const Siguiente = () => {
        setPage(anterior => anterior + 1)
    }

    /*  UseCallback: almacena una funcion hasta q cambie una dependencia
        UseMemo: memoriza no una funcion si no q una variable o un valor.
    */
   
    const handleSubmit = useCallback(({palabra}) => {
        // Navega a otra ruta
        pushLocation(`/gif/${palabra}`);
    }, [pushLocation])


    
    // Render
    return(
        <div>
            <h1>Buscador de Gifs</h1>

            <Formulario onSubmit={handleSubmit}/>

            <h5>Ultima Busqueda usando CustomHook y localStorage</h5>

            
            <div className='UltimaBusqueda'>
                {
                    gifs.map(({id, title, url}) => 
                    <Gif
                        key={id} 
                        title={title} 
                        url={url} 
                        id={id}/>)
                }
            </div>

            {loading ? <Spinner/> : <div className='spinnerSpace'/>}

            <button id='siguiente' onClick={Siguiente}>Siguiente</button>

            <TrendingSearches></TrendingSearches>
            
        </div>
    )

}