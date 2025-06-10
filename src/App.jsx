import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import cr7 from './assets/cr7.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Galeria />
    <Contactenos />
     
    </>
  )
}
function Header() {
  return(
    <header className='header'>
      <div className='logo'>
      <img src={viteLogo} alt='vite logo' />
      <img src={reactLogo} alt='React logo' />
      <h1>Vite + React</h1>
      </div>
      <nav>
        <ul>
          <li><a href='#'>HOME</a></li>
          <li><a href='#'>SERVICIOS</a></li>
          <li><a href='#' >NOSOTROS</a></li>
          <li><a href='#'>CONTACTENOS</a></li>
        </ul>
      </nav>

    </header>

   
  )
}

function Galeria(){
  return(
    <div className='galeria'>
      <img src={cr7} alt='imagen' className='imagen' />
      <br />
    </div>
  )
}

function Contactenos(){
  return (
    <div className="Map">
      <iframe width="200%" height="400"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&height=400&hl=en&q=sena%20soacha&t=k&z=11&ie=UTF8&iwloc=B&output=embed"></iframe>
      <h1>CONTACTENOS
      <p>Correo electronico: FabianMantilla1622@gmail.com</p>
      <p>Telefono: 3202541222</p>
      <p>Redes sociales: @Elmejordelmundo</p>
      </h1>
    </div>

  )
}

export default App
