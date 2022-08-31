import React,{useState}  from "react";

function Formulario({onSubmit}){

    const [palabra, cambiar] = useState('');

    // Evento
    const Submit = evt =>
    {
        evt.preventDefault()
        
        if (palabra.length === 0) {
            alert('Error Ingrese un texto')
            return
        }

        onSubmit({palabra})
        
    }

    const Change = evt =>{
        cambiar(evt.target.value)
    }


    return(

        <form onSubmit={Submit} className='Formulario'>
            <button>Buscar</button>
            <input type='text' placeholder='Ingrese un texto' name='palabra' onChange={Change}></input>
        </form>

    );
}

/*  React.memo: evita que el componente se renderice nuevamente si no se cambian las prop. o su referencia
*/
export default React.memo(Formulario)