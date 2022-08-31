import React from 'react'
import luna from './luna.jpg'
import lobo from './lobo.jpg'
import './Imagenes.css'

export default function Imagenes()
{

    return(
        <div className='App'>
            <center>
                <h1>Curso de Css Imagnes</h1>
                <div className='lobo'>
                    <img src={lobo} className='imagen'></img>
                    <div className='texto_lobo'>
                        <div className='efecto'>
                            Lobo
                        </div>
                    </div>
                    <div className='texto'>
                        <p>Colmillo Blanco</p>
                    </div>
                </div>
            </center>
        </div>
    )
}