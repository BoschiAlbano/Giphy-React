import React from 'react'
import './detalle.css'
import useGlobalGifs from 'Hook/UseGlobalGif'
import Gif from 'components/Gif/Gif'


export default function Detalle({params})
{
    const gifs = useGlobalGifs();
    const {id} = params

    //Buscar el gif
    const gif = gifs.find(gif => gif.id === id)

    console.log(gif);
    return(
        <center>
                <div className='card'>
                    <Gif
                    key={gif.id} 
                    title={gif.title} 
                    url={gif.url} 
                    id={gif.id}/>
                </div>

        </center>


    )
}

//export default React.memo(Detalle);