import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:8000/cliente/";

const CompEditCliente = () => {
  const [nombre, setNombre] = useState("");
  const [apellido_paterno, setApellido_paterno] = useState("");
  const [apellido_materno, setApellido_materno] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha_nacimiento, setFecha_nacimiento] = useState("");
  const [direccion, setDireccion] = useState("");

  const navigate = useNavigate();
  const {id} = useParams();

  const update = async (event) => {
    event.preventDefault()
    await axios.put(URI + id, {
      nombre: nombre,
      apellido_paterno: apellido_paterno,
      apellido_materno: apellido_materno,
      telefono: telefono,
      fecha_nacimiento: fecha_nacimiento,
      direccion: direccion,
    });
    navigate("/clientes")
  };

  useEffect( () =>{
    getClienteById()
  },[])

  const getClienteById = async () =>{
    const res = await axios.get(URI+id)
    setNombre(res.data.nombre)
    setApellido_paterno(res.data.apellido_paterno)
    setApellido_materno(res.data.apellido_materno)
    setTelefono(res.data.telefono)
    setFecha_nacimiento(res.data.fecha_nacimiento)
    setDireccion(res.data.direccion)
  }

  return(
    <div>
    <h3>Actualizar Cliente</h3>
    <form onSubmit={update}>
         <div className='mb-3'>
             <label className='form-label'>Nombre</label>
             <input
                 value={nombre}
                 onChange={ (event)=> setNombre(event.target.value)} 
                 type="text"
                 className='form-control'
             />
          </div>

          <div className='mb-3'>
             <label className='form-label'>Apellido paterno</label>
             <input
                 value={apellido_paterno}
                 onChange={ (event)=> setApellido_paterno(event.target.value)} 
                 type="text"
                 className='form-control'
             />
          </div>

          <div className='mb-3'>
             <label className='form-label'>Apellido materno</label>
             <input
                 value={apellido_materno}
                 onChange={ (event)=> setApellido_materno(event.target.value)} 
                 type="text"
                 className='form-control'
             />
          </div>

          <div className='mb-3'>
             <label className='form-label'>Telefono</label>
             <input
                 value={telefono}
                 onChange={ (event)=> setTelefono(event.target.value)} 
                 type="text"
                 className='form-control'
             />
          </div>

          <div className='mb-3'>
             <label className='form-label'>Fecha de nacimiento</label>
             <input
                 value={fecha_nacimiento}
                 onChange={ (event)=> setFecha_nacimiento(event.target.value)} 
                 type="date"
                 className='form-control'
             />
          </div>

          <div className='mb-3'>
             <label className='form-label'>Direccion</label>
             <input
                 value={direccion}
                 onChange={ (event)=> setDireccion(event.target.value)} 
                 type="text"
                 className='form-control'
             />
          </div>  
          <button type='submit' className='btn btn-primary'>Guardar</button>                  
    </form>
 </div>
  )

};

export default CompEditCliente;
