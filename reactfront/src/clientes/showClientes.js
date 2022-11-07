import axios from 'axios'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

const URI = 'http://localhost:8000/cliente/'

const CompShowCliente = () =>{
    
    const [clientes,setClientes] = useState([])

    const [data,setData] = useState([])

    const GeneratePdf=()=>{
        axios.get("http://localhost:8000/cliente").then((response) =>{
            const data = response.data;
            setData(data);
        })
    }

    useEffect( () =>{
        getClientes()
        GeneratePdf()
    } ,[])

    const getClientes = async () => {
        const res = await axios.get(URI)
        setClientes(res.data)
        console.log(res)
    }

    const downloadPDF =(cliente) =>{
        const pdf = new jsPDF();
        pdf.autoTable(
            {
                html:'#table',
                columns:[
                    {header:"Nombre",datakey:cliente.nombre},
                    {header:"Apellido paterno",datakey:cliente.apellido_paterno},
                    {header:"Apellido materno",datakey:cliente.apellido_materno},
                    {header:"Telefono",datakey:cliente.telefono},
                    {header:"Fecha de nacimiento",datakey:cliente.fecha_nacimiento},
                    {header:"Direccion",datakey:cliente.direccion}
                ]
                });
        pdf.save('Clientes.pdf');
    }


    const deleteCliente = async (id) =>{
        await axios.delete(`${URI}${id}`)
        getClientes()
    }

    return (
        <div className='secundary-view'>
            <h1 className='titulo'>Clientes</h1>

            <div className='row'>
                <div className='col table-responsive-sm'>
                    <div className='col'>
                        <Link to="/cliente/crear" className='btn btn-outline-danger mt-2 mb-2 me-4 float-start'>Crear cliente<span className='pe-3'></span><i className="fa-solid fa-plus"></i></Link>
                        <button onClick={downloadPDF} className='btn btn-outline-success mt-2 mb-2 float-start'>Exportar a PDF<span className='pe-3'></span><i className="fa-regular fa-file"></i></button>
                    </div>
                    <table className='table table-default table-hover' id='table'>
                        <thead className='table-danger'>
                            <tr>
                                <th className='center'>Nombre</th>
                                <th className='center'>Apellido Paterno</th>
                                <th className='center'>Apellido materno</th>
                                <th className='center'>Telefono</th>
                                <th className='center'>Fecha de nacimiento</th>
                                <th className='center'>Direccion</th>
                                <th className='center'>Acciones</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((cliente)=>(
                                <tr key={cliente.id_cliente}>
                                    <td className='center'>{cliente.nombre}</td>
                                    <td className='center'>{cliente.apellido_paterno}</td>
                                    <td className='center'>{cliente.apellido_materno}</td>
                                    <td className='center'>{cliente.telefono}</td>
                                    <td className='center'>{cliente.fecha_nacimiento}</td>
                                    <td className='center'>{cliente.direccion}</td>
                                    <td className='center'>
                                        <Link to={`/cliente/editar/${cliente.id_cliente}`} className="btn btn-outline-primary"><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={()=>deleteCliente(cliente.id_cliente)} className='ms-3 btn btn-outline-danger'><i className="fa-solid fa-trash-can"></i></button>
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