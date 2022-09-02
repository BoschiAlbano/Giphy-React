import './App.css'
import { Route, useLocation } from 'wouter'
import React from 'react'

import Detalle from './page/DetalleGifs/detalle'
import Imagenes from './Curso/Css/Imagenes'
import Inicio from './page/Inicio/Inicio';
import ListOfGifs from './page/ListaGifs/ListOfGifs';

import StaticContext from './Context/StaticContext';
import {GifsContextprovider} from './Context/GifsContext';

import 'materialize-css/dist/css/materialize.min.css'

function App() {

  const [path, setlocation] = useLocation()

  const home = () => {
    setlocation('http://localhost:3000/')
  }

  return (
    <StaticContext.Provider value={
      {
        name: 'valor componente con provider',
        Estado: false,
      }}>

      <div className="App">

        <section className="App-content">
          
          <div className='titulo'>
              <img className='logo' src='logo.gif' onClick={home}></img>
              <h1>App buscador de Gifs</h1>
          </div>
          <GifsContextprovider>
            <Route
                  component={Inicio}
                  path="/" 
              />

              <Route
                  component={ListOfGifs}
                  path="/gif/:keyword/:limit" 
              />

              <Route
                  component={Detalle}
                  path="/detalle/:id" 
              />

              <Route
                  component={Imagenes}
                  path="/Curso/Css/Imagenes" 
              />
              
          </GifsContextprovider>


        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;