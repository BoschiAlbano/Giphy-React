import React, {useEffect} from 'react'
import './detalle.css'
import useGlobalGifs from '../../Hook/UseGlobalGif'
import M from 'materialize-css';
import { useLocation } from 'wouter';

export default function Detalle({params})
{
    const gifs = useGlobalGifs();
    const {id} = params
    const [path, setPatch] = useLocation();

    useEffect(function(){
        var elems = document.querySelectorAll('.materialboxed');
        var instances = M.Materialbox.init(elems, {});
    }, [id])


    const Buscar = function(){
        const keyWord = localStorage.getItem('lastKeyword')

        M.toast({html: `Buscando mas de: ${keyWord}`, completeCallback: function(){
            setPatch(`/gif/${keyWord}/${10}`)
        }})
    }

    //Buscar el gif
    const gif = gifs.find(gif => gif.id === id)
    return(
        <center className="centrar">
            <div className="card">
                    <div className="card-image">
                        <img className="materialboxed" alt={gif.title} width="500" src={gif.url}></img>
                        
                        <a className="btn-floating halfway-fab waves-effect waves-light red">
                            <i className="material-icons" onClick={Buscar}>add</i>
                        </a>
                    </div>
                    <div className="card-content">
                    <p>{gif.id}</p>
                    <p>{gif.title}</p>
                    </div>
            </div>

        </center>
    )
}

//export default React.memo(Detalle);