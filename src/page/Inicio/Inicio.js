import {useLocation} from 'wouter';
import React, {useCallback, useEffect} from 'react';
import {useGifsHome} from '../../Hook/UltimoGif';
import './Inicio.css'
import TrendingSearches from '../../components/TrendingSearches';
import Spinner from '../../components/Spinner';
import Formulario from '../../components/FormularioBusqueda/Formulario';
import Carrusel from '../../components/Carrusel/CarruselImg'
import M from 'materialize-css';
export default function Inicio(){

    const [push ,pushLocation] = useLocation();
    const {gifs, setPage, loading} = useGifsHome()

    // Evento Siguiente
    const Siguiente = useCallback(() => {
        setPage(anterior => anterior + 1)
    }, [])

    /*  UseCallback: almacena una funcion hasta q cambie una dependencia
        UseMemo: memoriza no una funcion si no q una variable o un valor.
    */
    const handleSubmit = useCallback(({palabra,limit}) => {
        // Navega a otra ruta
        pushLocation(`/gif/${palabra}/${limit}`);
    }, [pushLocation])


    useEffect(function (){
        M.AutoInit();
        var elems = document.querySelectorAll('.slider');
        var instances = M.Slider.init(elems, {});
    
        var instance = M.Carousel.init({
            fullWidth: true
        });

    }, [gifs])

    // Render
    return(
        <div>
            
            <div className="row">
                <div id='col' className="col s7">
                    <div className="slider">
                        <ul className="slides">
                            {
                                loading ? <Spinner/> :
                                gifs.map(({id, title, url}) => 
                                <Carrusel
                                    key={id} 
                                    title={title} 
                                    url={url} 
                                    id={id}
                                />)
                            }
                        </ul>
                    </div>
                </div>
                <div className="col s5">
                        <div id='card' className="card">
                            <Formulario Buscar={handleSubmit} Next={Siguiente}/>
                        </div>
                </div>
            </div>

            <div className="carousel carousel-slider" id='slider'>
                <a className="carousel-item"><img src="logo.gif"/></a>
                <a className="carousel-item"><img src="img1.jpg"/></a>
                <a className="carousel-item"><img src="img2.jpg"/></a>
                <a className="carousel-item"><img src="img3.jpg"/></a>
            </div>
            
            <TrendingSearches></TrendingSearches>
        </div>
    )

}