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
        <div className="secundary-view">
        <form className="formulario" onSubmit={store}>
          <h2 className="titulo">Nuevo vendedor</h2>
  
          <div className="form-item">
            <input
              placeholder="Nombre"
              value={Nombre}
              onChange={(event) => setNombre(event.target.value)}
              required
            />
            <br></br>
          </div>

          <div className="form-item">
            <input
              placeholder="Apellido paterno"
              value={Apellido_Paterno}
              onChange={(event) => setApellido_paterno(event.target.value)}
              required
            />
          </div>
  
          <div className="form-item">
            <input
              placeholder="Apellido materno"
              value={Apellido_Materno}
              onChange={(event) => setApellido_materno(event.target.value)}
              required
            />
          </div>

  


          <div className="form-item">
            <input
              placeholder="Fecha de nacimiento"
              value={Fecha_de_nacimiento}
              type="date"
              onChange={(event) => setFecha_de_nacimiento(event.target.value)}
              required
            />
            <label className='ms-2'>Fecha de nacimiento</label>
          </div>


          <div className="form-item">
            <input
              placeholder="Fecha de contratación"
              value={Fecha_de_contratacion}
              type="date"
              onChange={(event) => setFecha_de_contratacion(event.target.value)}
              required
            />
            <label className='ms-2'>Fecha de contratacion</label>
          </div>
  
          <div className="form-item">
            <input
              placeholder="Telefono"
              type="number"
              value={Telefono}
              onChange={(event) => setTelefono(event.target.value)}
              required
            />
            <br></br>
          </div>
  

  
          <div className="form-item">
            <input
              placeholder="Direccion"
              value={Direccion}
              onChange={(event) => setDireccion(event.target.value)}
            />
            <br></br>
          </div>


          <div className="form-item">
            <input
              placeholder="Salario"
              value={Salario}
              onChange={(event) => setSalario(event.target.value)}
            />
            <br></br>
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

export default CompCreateVendedor;