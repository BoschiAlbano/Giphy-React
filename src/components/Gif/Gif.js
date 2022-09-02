import react from 'react'
import './Gif.css'

function Gif ({title, id, url})
{
    return(
        <div className='Gif' >        
            <div className='detalle'>detalle</div>
            <img alt={title} src={url}/>
            <div className='Titulo'>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default react.memo(Gif,(prevProps, nextProps) => {
    return prevProps.id == nextProps.id;
});
/*
    react renderiza los componentes que no existen en el dom de la pagina y a los que ya existe no los toca. pero internamente el calculo del dom virtual de react es lo q hay q evitar que se renderice.
*/