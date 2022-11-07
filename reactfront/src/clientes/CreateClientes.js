import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const URI = "http://localhost:8000/cliente/";

const CompCreateCliente = () => {
  const [nombre, setNombre] = useState("");
  const [apellido_paterno, setApellido_paterno] = useState("");
  const [apellido_materno, setApellido_materno] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha_nacimiento, setFecha_nacimiento] = useState("");
  const [direccion, setDireccion] = useState("");

  const navigate = useNavigate();
  const store = async (event) => {
    event.preventDefault();
    await axios.post(URI, {
      nombre: nombre,
      apellido_paterno: apellido_paterno,
      apellido_materno: apellido_materno,
      telefono: telefono,
      fecha_nacimiento: fecha_nacimiento,
      direccion: direccion,
    });
    navigate("/clientes");
  };
  return (
    <div className="secundary-view">
      <form className="formulario" onSubmit={store}>
        <h2 className="titulo">Nuevo cliente</h2>

        <div className="form-item">
          <input
            placeholder="Nombre"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
            required
          />
          <br></br>
        </div>

        <div className="form-item">
          <input
            placeholder="Apellido paterno"
            value={apellido_paterno}
            onChange={(event) => setApellido_paterno(event.target.value)}
            required
          />
        </div>

        <div className="form-item">
          <input
            placeholder="Apellido materno"
            value={apellido_materno}
            onChange={(event) => setApellido_materno(event.target.value)}
            required
          />
        </div>

        <div className="form-item">
          <input
            placeholder="Telefono"
            type="number"
            value={telefono}
            onChange={(event) => setTelefono(event.target.value)}
            required
          />
          <br></br>
        </div>

        <div className="form-item">
          <input
            placeholder="Fecha de nacimiento"
            value={fecha_nacimiento}
            type="date"
            onChange={(event) => setFecha_nacimiento(event.target.value)}
            required
          />
        </div>

        <div className="form-item">
          <input
            placeholder="Direccion"
            value={direccion}
            onChange={(event) => setDireccion(event.target.value)}
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

export default CompCreateCliente;
