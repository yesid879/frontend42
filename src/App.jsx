
import './App.css'

// importamos los componentes
import CompMostrarClientes from './Componentes/CompMostrarclientes';
import CompCrearClientes from './Componentes/CompCrearClientes';
import CompEditarClientes from './Componentes/CompEditarClientes';
import CompFooter from "./Componentes/Footer"


// Importamos Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {  

  return (
  <div className='App'>
    <header className='container'>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a href="/Login" className="navbar-brand">LOGIN</a>

    <button
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className="navbar-toggler"
      data-bs-target="#navbarNav"
      data-bs-toggle="collapse"
      type="button"
    >
      <span className="navbar-toggler-icon" />
    </button>   

    
    <div className="collapse navbar-collapse"  id="navbarNav" >
       <ul className="navbar-nav">
        <li className="nav-item" ><a href="/" className="nav-link">INICIO</a></li>
        <li className="nav-item"><a  href="/clientes" className="nav-link"> CLIENTES </a></li>
        <li className="nav-item"><a  href="/productos" className="nav-link"> PRODUCTOS</a></li>
        <li className="nav-item"><a href="/proveedores" className="nav-link">PROVEEDORES</a></li>
      </ul>
    </div>
  </div>
</nav>

    </header>  

    <BrowserRouter>
    <Routes>
      
   <Route path='/clientes' element={<CompMostrarClientes />}/> 
   <Route path='/clientes/agregar' element={<CompCrearClientes />}/> 
   <Route path='/clientes/editar/:id' element={<CompEditarClientes />}/> 
   
   </Routes>
   
   </BrowserRouter>
   <CompFooter /> 

  </div>
  )
}

export default App
