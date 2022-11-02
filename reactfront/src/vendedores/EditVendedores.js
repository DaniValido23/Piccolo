import axios from 'axios'
import {useState,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom'

const URI = 'http://localhost:8000/vendedor/';

const CompEditVendedor = () =>{
    const [Nombre, setNombre] = useState("");
    const [Apellido_Paterno, setApellido_paterno] = useState("");
    const [Apellido_Materno, setApellido_materno] = useState("");
    const [Fecha_de_nacimiento, setFecha_de_nacimiento] = useState("");
    const [Fecha_de_contratacion, setFecha_de_contratacion] = useState("");
    const [Telefono, setTelefono] = useState("");
    const [Direccion, setDireccion] = useState("");
    const [Salario, setSalario] = useState("");

    const navigate = useNavigate();
    const {id} = useParams();

    const update = async (event) => {
        event.preventDefault()
        await axios.put(URI + id, {
          Nombre : Nombre,
          Apellido_Paterno : Apellido_Paterno,
          Apellido_Materno : Apellido_Materno,
          Fecha_de_nacimiento : Fecha_de_nacimiento,
          Fecha_de_contratacion : Fecha_de_contratacion,
          Telefono: Telefono,
          Direccion: Direccion,
          Salario: Salario
        });
        navigate("/vendedores")
      };

      useEffect( () =>{
        getVendedorById()
      },[])

      const getVendedorById = async () =>{
        const res = await axios.get(URI+id)
        setNombre(res.data.Nombre)
        setApellido_paterno(res.data.Apellido_Paterno)
        setApellido_materno(res.data.Apellido_Materno)
        setFecha_de_nacimiento(res.data.Fecha_de_nacimiento)
        setFecha_de_contratacion(res.data.Fecha_de_contratacion)
        setTelefono(res.data.Telefono)
        setDireccion(res.data.direccion)
        setSalario(res.data.Salario)
      }

    return (
        <div>
        <h3>Actualizar Vendedor</h3>
        <form onSubmit={update}>
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

export default CompEditVendedor;