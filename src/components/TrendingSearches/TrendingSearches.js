import React,{useState, useEffect} from 'react';//rsf
import getTrendingTerms from "services/getTrending"
import Tendencia from 'components/TrendingSearches/Tendencia/index'

export default function TrendingSearches() {

    const [trends, serTrends] = useState([])

    useEffect(function()
    {
        getTrendingTerms().then(serTrends)
    }, [])

    return (
        <div className='Contenedor-tenedencias'>
            <center>
                <h1>
                    Tendencia de Giphy
                </h1>
            </center>
            <div className='tendencia'>
                {trends.map((valor, index, array) => {
                    return <Tendencia key={index} valor={valor}/>
                })}
            </div>
        </div>
        
    );
}