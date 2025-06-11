
import React from 'react';
import Producto from './Producto';
import './App.css'

function App() {
  return (
    <div className='"app-container'>
      <h1 className='main-title'> Actividad Desarrollo de Componentes (Sin Estado)</h1>

      <div className='card-panel' >
        <h2 className='panel-title'> Productos Favoritos</h2>
        
        <div className='productos-grid'>
          <Producto nombre="Auriculares" precio="120" categoria="Electronica" icono="headphones" />

          <Producto nombre="Botella Termica" precio="60" categoria="Hogar" icono="bottle" />

          <Producto nombre="libro de React" precio="90" categoria="Educacion" icono="book-open" />

        </div>

      </div>

    </div>
  )
}

export default App
