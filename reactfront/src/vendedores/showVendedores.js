import axios from 'axios'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/vendedor/'

const CompShowVendedor = () =>{
    
    const [vendedores,setVendedores] = useState([])
    useEffect( () =>{
        getVendedor()
    } ,[])

    const getVendedor = async () =>{
        const res = await axios.get(URI)
        setVendedores(res.data)
        console.log(res)
    }

    const deleteVendedor = async (id) =>{
        await axios.delete(`${URI}${id}`)
        getVendedor()
    }

    return (
        <div className='container'>
            <h1>Vendedores</h1>
            <div className='row'>
                <div className='col'>
                    <Link to="/vendedor/crear" className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido Paterno</th>
                                <th>Apellido materno</th>
                                <th>Fecha de nacimiento</th>
                                <th>Fecha de contratacion</th>
                                <th>Telefono</th>
                                <th>Direccion</th>
                                <th>Salario</th>
                                <th>Acciones</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {vendedores.map((vendedor)=>(
                                <tr key={vendedor.id_vendedor}>
                                    <td>{vendedor.Nombre}</td>
                                    <td>{vendedor.Apellido_Paterno}</td>
                                    <td>{vendedor.Apellido_Materno}</td>
                                    <td>{vendedor.Fecha_de_nacimiento}</td>
                                    <td>{vendedor.Fecha_de_contratacion}</td>
                                    <td>{vendedor.Telefono}</td>
                                    <td>{vendedor.Direccion}</td>
                                    <td>{vendedor.Salario}</td>
                                    <td>
                                        <Link to={`/vendedor/editar/${vendedor.id_vendedor}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteVendedor(vendedor.id_vendedor)} className='btn btn-danger'><i className="fa-solid fa-trash-can"></i></button>
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

export default CompShowVendedor