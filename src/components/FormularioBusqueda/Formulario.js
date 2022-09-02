import React,{useState, useEffect}  from "react";
import M from "materialize-css";

function Formulario({Buscar, Next}){

    //const [palabra, cambiar] = useState('');
    const [palabra, cambiar] = useState({keyword: '', Limit: 10});

    // Evento
    const Submit = evt =>
    {
        evt.preventDefault()

        if (palabra.keyword.length === 0) {
            alert('Error Ingrese un texto')
            return
        }
        Buscar({palabra: palabra.keyword, limit: palabra.Limit})
    }

    const Change = evt =>{
        cambiar(actual => ({...actual, [evt.target.name]: evt.target.value}))
    }

    // hook
    useEffect(function(){
        var elems = document.querySelectorAll('.autocomplete');
        var instances = M.Autocomplete.init(elems, {});

    }, [Next])

    return(
        <div>
            
            <form onSubmit={Submit} className='Formulario'>
                <div className="row">
                    <div className="col s12">
                        <div className="input-field">
                            <i className="material-icons prefix">search</i>
                            <input type="text" id="autocomplete-input" name="keyword" onChange={event => Change(event)} className="autocomplete"/>
                            <label >Buscar</label>
                        </div>
                    </div>
                    
                    <div className="col s12">
                        <div className="input-field">
                            <i className="material-icons prefix">filter_9_plus</i>
                            <input type="text" id="autocomplete-input" name="Limit" onChange={event => Change(event)} className="autocomplete"/>
                            <label >Cantidad</label>
                        </div>
                    </div>
                    
                    <button className="btn waves-effect waves-light" type="button" name="action" onClick={Next}>Next Gifs
                    </button>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Buscar
                    </button>
                </div>
                
            </form>

        </div>
    );
}

/*  React.memo: evita que el componente se renderice nuevamente si no se cambian las prop. o su referencia
*/
export default React.memo(Formulario)

{/* <form onSubmit={Submit} className='Formulario'>
    <button>Buscar</button>
    <input type='text' placeholder='Ingrese un texto' name='palabra' onChange={Change}></input>
</form> */}