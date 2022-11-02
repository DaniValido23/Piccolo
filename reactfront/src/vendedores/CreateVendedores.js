import axios from 'axios'
import {useState} from 'react'
import { useNavigate} from 'react-router-dom'

const URI = 'http://localhost:8000/vendedor/';

const CompCreateVendedor = () =>{
    const [Nombre, setNombre] = useState("");
    const [Apellido_Paterno, setApellido_paterno] = useState("");
    const [Apellido_Materno, setApellido_materno] = useState("");
    const [Fecha_de_nacimiento, setFecha_de_nacimiento] = useState("");
    const [Fecha_de_contratacion, setFecha_de_contratacion] = useState("");
    const [Telefono, setTelefono] = useState("");
    const [Direccion, setDireccion] = useState("");
    const [Salario, setSalario] = useState("");

    const navigate = useNavigate();

    const store = async (event) =>{
        event.preventDefault()
        await axios.post(URI,{Nombre:Nombre,Apellido_Paterno:Apellido_Paterno,Apellido_Materno:Apellido_Materno,
                            Fecha_de_nacimiento:Fecha_de_nacimiento,Fecha_de_contratacion:Fecha_de_contratacion,Telefono:Telefono,Direccion:Direccion,Salario:Salario})
        navigate("/vendedores")
    }

    return (
        <div>
        <h3>Crear Vendedor</h3>
        <form onSubmit={store}>
             <div className='mb-3'>
                 <label className='form-label'>Nombre</label>
                 <input
                     value={Nombre}
                     onChange={ (event)=> setNombre(event.target.value)} 
                     type="text"
                     className='form-control'
                 />
              </div>
    
              <div className='mb-3'>
                 <label className='form-label'>Apellido paterno</label>
                 <input
                     value={Apellido_Paterno}
                     onChange={ (event)=> setApellido_paterno(event.target.value)} 
                     type="text"
                     className='form-control'
                 />
              </div>
    
              <div className='mb-3'>
                 <label className='form-label'>Apellido materno</label>
                 <input
                     value={Apellido_Materno}
                     onChange={ (event)=> setApellido_materno(event.target.value)} 
                     type="text"
                     className='form-control'
                 />
              </div>
    
              <div className='mb-3'>
                 <label className='form-label'>Fecha de nacimiento</label>
                 <input
                     value={Fecha_de_nacimiento}
                     onChange={ (event)=> setFecha_de_nacimiento(event.target.value)} 
                     type="date"
                     className='form-control'
                 />
              </div>

              <div className='mb-3'>
                 <label className='form-label'>Fecha de contratacion</label>
                 <input
                     value={Fecha_de_contratacion}
                     onChange={ (event)=> setFecha_de_contratacion(event.target.value)} 
                     type="date"
                     className='form-control'
                 />
              </div>
    

              <div className='mb-3'>
                 <label className='form-label'>Telefono</label>
                 <input
                     value={Telefono}
                     onChange={ (event)=> setTelefono(event.target.value)} 
                     type="text"
                     className='form-control'
                 />
              </div>  
    
              <div className='mb-3'>
                 <label className='form-label'>Direccion</label>
                 <input
                     value={Direccion}
                     onChange={ (event)=> setDireccion(event.target.value)} 
                     type="text"
                     className='form-control'
                 />
              </div>

              <div className='mb-3'>
                 <label className='form-label'>Salario</label>
                 <input
                     value={Salario}
                     onChange={ (event)=> setSalario(event.target.value)} 
                     type="number"
                     className='form-control'
                 />
              </div>


              <button type='submit' className='btn btn-primary'>Guardar</button>                  
        </form>
     </div>
    )
};   

export default CompCreateVendedor;