import React, {Suspense} from 'react';//rsf
import './TreandingSearch.css'
import useNerScreen from '../../Hook/useNerScreen'
import Spinner from '../../components/Spinner/index';
import { Link } from 'wouter';

// Cargar un componente de forma dinamica solo cuando lo necesitemos en la app.
// porque sino me estria devolviendo el js de TrendingSearches cuando no lo estoy mostrando.
const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')
)

function LazyTrending()
{
    const {isNearScreen, elementRef} = useNerScreen( {distance: '100px'})

    return (
        <div className='visorTrending' ref={elementRef}>
            <Suspense fallback={<Spinner/>}>
                {isNearScreen ? <TrendingSearches/> : <Spinner/>}
            </Suspense>

            <Link id="Link" to='/Curso/Css/Imagenes'>-- Curso Css Imagenes --</Link>
        </div>
    )
}

export default React.memo(LazyTrending)