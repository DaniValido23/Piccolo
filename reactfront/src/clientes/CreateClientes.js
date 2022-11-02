import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const URI = 'http://localhost:8000/cliente/'

const CompCreateCliente = () =>{
    const [nombre,setNombre] = useState('')
    const [apellido_paterno,setApellido_paterno] = useState('')
    const [apellido_materno,setApellido_materno] = useState('')
    const [telefono,setTelefono] = useState('')
    const [fecha_nacimiento,setFecha_nacimiento] = useState('')
    const [direccion,setDireccion] = useState('')

    const  navigate = useNavigate()
    const store = async (event) =>{
        event.preventDefault()
        await axios.post(URI,{nombre:nombre,apellido_paterno:apellido_materno,apellido_materno:apellido_materno,
                            telefono:telefono,fecha_nacimiento:fecha_nacimiento,direccion:direccion})
        navigate("/clientes")
    }
    return(
        <div>
           <h3>Crear Cliente</h3>
           <form onSubmit={store}>
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
}


export default CompCreateCliente