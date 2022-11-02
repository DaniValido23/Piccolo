import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CompEditBlog from './clientes/EditClientes';
import CompShowCliente from './clientes/showClientes.js';
import CompCreateCliente from './clientes/CreateClientes';
import CompShowVendedor from './vendedores/showVendedores';
import CompEditVendedor from './vendedores/EditVendedores';
import CompCreateVendedor from './vendedores/CreateVendedores';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/*Clientes*/}
          <Route path="/clientes" element={<CompShowCliente></CompShowCliente>}></Route>
          <Route path="/cliente/crear" element={<CompCreateCliente></CompCreateCliente>}></Route>
          <Route path="/cliente/editar/:id" element={<CompEditBlog></CompEditBlog>}></Route>

          {/*Vendedores*/}
          <Route path="/vendedores" element={<CompShowVendedor></CompShowVendedor>}></Route>
          <Route path="/vendedor/crear" element={<CompCreateVendedor></CompCreateVendedor>}></Route>
          <Route path="/vendedor/editar/:id" element={<CompEditVendedor></CompEditVendedor>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
