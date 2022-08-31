import './App.css'
import { Route } from 'wouter'
import React from 'react'

import Detalle from 'page/DetalleGifs/detalle'
import Imagenes from './Curso/Css/Imagenes'
import Inicio from './page/Inicio/Inicio';
import ListOfGifs from './page/ListaGifs/ListOfGifs';

import StaticContext from './Context/StaticContext';
import {GifsContextprovider} from './Context/GifsContext';

function App() {
  return (
    <StaticContext.Provider value={
      {
        name: 'valor componente con provider',
        Estado: false,
      }}>

      <div className="App">

        <section className="App-content">

          <GifsContextprovider>
            <Route
                  component={Inicio}
                  path="/" 
              />

              <Route
                  component={ListOfGifs}
                  path="/gif/:keyword" 
              />

              <Route
                  component={Detalle}
                  path="/gif/detalle/:id" 
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