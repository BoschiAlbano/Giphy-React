import React, {useEffect} from 'react'
import './detalle.css'
import M from 'materialize-css';
import { useLocation } from 'wouter';
import useSingleGif from '../../Hook/useSingleGif';
import Spinner from '../../components/Spinner/index';

function Detalle({params})
{
    const {id} = params
    const [path, setPatch] = useLocation();
    const {gif,isloading} = useSingleGif({id});
    
    
    useEffect(function(){
        var elems = document.querySelectorAll('.materialboxed');
        var instances = M.Materialbox.init(elems, {});
    }, [isloading])

    const Buscar = function(){
        const keyWord = localStorage.getItem('lastKeyword')

        M.toast({html: `Buscando mas de: ${keyWord}`, completeCallback: function(){
            setPatch(`/gif/${keyWord}/${10}`)
        }})
    }


    
    return(
        <center className="centrar">
            {isloading 
            ? <Spinner/>
            : <div className="card">
                    <div className="card-image">
                        <img className="materialboxed" alt={gif.titulo} width="500" src={gif.url}></img>
                        
                        <a className="btn-floating halfway-fab waves-effect waves-light red">
                            <i className="material-icons" onClick={Buscar}>add</i>
                        </a>
                    </div>
                    <div className="card-content">
                        <p>{gif.id}</p>
                        <p>{gif.titulo}</p>
                    </div>
                </div>}

        </center>
        
    )
}

export default React.memo(Detalle);