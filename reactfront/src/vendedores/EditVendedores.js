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
        <div className="secundary-view">
        <form className="formulario" onSubmit={update}>
          <h2 className="titulo">Nuevo cliente</h2>
  
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
          </div>


          <div className="form-item">
            <input
              placeholder="Fecha de contratación"
              value={Fecha_de_contratacion}
              type="date"
              onChange={(event) => setFecha_de_contratacion(event.target.value)}
              required
            />
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

export default CompEditVendedor;