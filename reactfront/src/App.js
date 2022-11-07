import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CompEditBlog from './clientes/EditClientes';
import CompShowCliente from './clientes/showClientes.js';
import CompCreateCliente from './clientes/CreateClientes';
import CompShowVendedor from './vendedores/showVendedores';
import CompEditVendedor from './vendedores/EditVendedores';
import CompCreateVendedor from './vendedores/CreateVendedores';
import CompShowProveedor from './proveedores/showProveedores.js';
import CompCreateProveedor from './proveedores/CreateProveedores';
import CompEditProveedor from './proveedores/EditProveedores';
import Sidebar from './sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='AppGlass'>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Sidebar/>}></Route>
                    {/*Clientes*/}
          <Route path="/clientes" element={[<Sidebar/>,<CompShowCliente/>]}></Route>
          <Route path="/cliente/crear" element={[<Sidebar/>,<CompCreateCliente/>]}></Route>
          <Route path="/cliente/editar/:id" element={[<Sidebar/>,<CompEditBlog/>]}></Route>

          {/*Vendedores*/}
          <Route path="/vendedores" element={[<Sidebar></Sidebar>,<CompShowVendedor/>]}></Route>
          <Route path="/vendedor/crear" element={[<Sidebar></Sidebar>,<CompCreateVendedor/>]}></Route>
          <Route path="/vendedor/editar/:id" element={[<Sidebar></Sidebar>,<CompEditVendedor/>]}></Route>

          {/*Proveedores*/}
          <Route path="/proveedores" element={[<Sidebar></Sidebar>,<CompShowProveedor/>]}></Route>
          <Route path="/proveedor/crear" element={[<Sidebar></Sidebar>,<CompCreateProveedor/>]}></Route>
          <Route path="/proveedor/editar/:id" element={[<Sidebar></Sidebar>,<CompEditProveedor/>]}></Route>

        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;


{/*      SELECT * FROM stock_tienda where Incidencia = 1 or  1=1 -- -     */ }