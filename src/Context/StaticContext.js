import React from "react";

const Contexto = React.createContext(
    {
        name: 'Valor por defecto si el componente no esta contenido en el provider',
        Estado: true,
    });

export default Contexto;