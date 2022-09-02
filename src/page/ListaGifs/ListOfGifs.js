import React, {useEffect, useCallback} from 'react'
import useNerScreen from '../../Hook/useNerScreen';
import debounce from 'just-debounce-it'
import { useLocation } from 'wouter';
import Gif from "../../components/Gif/Gif"
import "./ListOfGifs.css"

import { useGifs } from '../../Hook/UltimoGif'
import Spinner from '../../components/Spinner/index';

export default function ListOfGifs({params}){
    const [path, pushLocation] = useLocation();
    const {keyword, limit} = params
    // Usando customHook
    const {gifs, setPage, loading} = useGifs({keyword},{limit})

    // hook
    const {isNearScreen, elementRef} = useNerScreen({distance: '10px', once: false})

    // useCallback y debounce
    // debounce: Devolver una función rebotada
    // useCallback: guarda una funcion entre diferentes renderizados.
    const debounceHandle = useCallback(debounce(
        () => setPage(AddPage => AddPage + 1), 200
    ), [setPage]);

    // useeffect
    useEffect(function (){
        if(isNearScreen) debounceHandle();
    }, [debounceHandle, isNearScreen])

    const detalle = (id) => 
    {
        //console.log(id)
        pushLocation(`/detalle/${id}`);
    }

    return (
        <div>
            <div className='Contenedor'>
                {
                    gifs.map(({id, title, url}) => 
                        <div className='divGif' key={id} onClick={() => detalle(id)}>
                            <Gif
                            key={id} 
                            title={title} 
                            url={url} 
                            id={id}/>
                        </div>
                        )
                    }
            </div>
            <div ref={elementRef}>
                {loading ? <Spinner/> : <div id='visor'></div>}
            </div>
            
            
        </div>
        
    )
}
