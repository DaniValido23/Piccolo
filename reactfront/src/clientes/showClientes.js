import axios from 'axios'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/cliente/'

const CompShowCliente = () =>{
    
    const [clientes,setClientes] = useState([])

    useEffect( () =>{
        getClientes()
    } ,[])

    const getClientes = async () => {
        const res = await axios.get(URI)
        setClientes(res.data)
        console.log(res)
    }


    const deleteCliente = async (id) =>{
        await axios.delete(`${URI}${id}`)
        getClientes()
    }

    return (
        <div className='container'>
            <h1>Clientes</h1>
            <div className='row'>
                <div className='col'>
                    <Link to="/cliente/crear" className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido Paterno</th>
                                <th>Apellido materno</th>
                                <th>Telefono</th>
                                <th>Fecha de nacimiento</th>
                                <th>Direccion</th>
                                <th>Acciones</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((cliente)=>(
                                <tr key={cliente.id_cliente}>
                                    <td>{cliente.nombre}</td>
                                    <td>{cliente.apellido_paterno}</td>
                                    <td>{cliente.apellido_materno}</td>
                                    <td>{cliente.telefono}</td>
                                    <td>{cliente.fecha_nacimiento}</td>
                                    <td>{cliente.direccion}</td>
                                    <td>
                                        <Link to={`/cliente/editar/${cliente.id_cliente}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteCliente(cliente.id_cliente)} className='btn btn-danger'><i className="fa-solid fa-trash-can"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}   

export default CompShowCliente