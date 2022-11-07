import axios from 'axios'
import {useState,useEffect} from 'react'
import { useNavigate, useParams} from 'react-router-dom'

const URI = 'http://localhost:8000/proveedor/';

const CompEditProveedor = () =>{
    const [Nombre_proveedor, setNombre_proveedor] = useState("");
    const [Direccion, setDireccion] = useState("");
    const [Telefono, setTelefono] = useState("");
    const [Correo, setCorreo] = useState("");
    const [Descripcion_proveedor, setDescripcion_proveedor] = useState("");

    const navigate = useNavigate();
    const {id} = useParams();

    const update = async (event) =>{
        event.preventDefault()
        await axios.put(URI + id, {
            Nombre_proveedor : Nombre_proveedor,
            Direccion : Direccion,
            Telefono : Telefono,
            Correo : Correo,
            Descripcion_proveedor : Descripcion_proveedor,
          });
        navigate("/proveedores")
    }

    useEffect( () =>{
        getProveedorById()
      },[])


      const getProveedorById = async () =>{
        const res = await axios.get(URI+id)
        setNombre_proveedor(res.data.Nombre_proveedor)
        setDireccion(res.data.Direccion)
        setTelefono(res.data.Telefono)
        setCorreo(res.data.Correo)
        setDescripcion_proveedor(res.data.Descripcion_proveedor)
      }

    return (
        <div className="secundary-view">
        <form className="formulario" onSubmit={update}>
          <h2 className="titulo">Actualizar proveedor</h2>
  
          <div className="form-item">
            <input
              placeholder="Nombre"
              value={Nombre_proveedor}
              onChange={(event) => setNombre_proveedor(event.target.value)}
              required
            />
            <br></br>
          </div>

          <div className="form-item">
            <input
              placeholder="Direccion"
              type="text"
              value={Direccion}
              onChange={(event) => setDireccion(event.target.value)}
              required
            />
          </div>

          <div className="form-item">
            <input
              placeholder="Correo"
              type="email"
              value={Correo}
              onChange={(event) => setCorreo(event.target.value)}
            />
            <br></br>
          </div>
  
          <div className="form-item">
            <input
              placeholder="Telefono"
              type="number"
              value={Telefono}
              onChange={(event) => setTelefono(event.target.value)}
              required
            />
          </div>

  
          <div className="form-item">
            <input
              placeholder="Descripcion"
              value={Descripcion_proveedor}
              type="text"
              onChange={(event) => setDescripcion_proveedor(event.target.value)}
              required
            />
          </div>

          <input
            type="submit"
            className="mb-3 mt-3 guardar btn btn-outline-primary"
            value="Guardar"
          ></input>
        </form>
      </div>
    );
};   

export default CompEditProveedor;