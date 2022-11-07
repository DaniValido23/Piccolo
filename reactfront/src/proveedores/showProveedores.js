import axios from 'axios'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

const URI = 'http://localhost:8000/proveedor/'

const CompShowProveedor = () =>{
    
    const [proveedores,setProveedores] = useState([])

    const [data,setData] = useState([])


    const GeneratePdf=()=>{
        axios.get("http://localhost:8000/proveedor").then((response) =>{
            const data = response.data;
            setData(data);
        })
    }

    useEffect( () =>{
        getProveedor()
        GeneratePdf()
    } ,[])

    const getProveedor = async () =>{
        const res = await axios.get(URI)
        setProveedores(res.data)
        console.log(res)
    }

    const downloadPDF =(proveedor) =>{
        const pdf = new jsPDF();
        pdf.autoTable(
            {
                html:'#table',
                columns:[
                    {header:"Nombre",datakey:proveedor.Nombre_proveedor},
                    {header:"Direccion",datakey:proveedor.Direccion},
                    {header:"Telefono",datakey:proveedor.Telefono},
                    {header:"Correo",datakey:proveedor.Correo},
                    {header:"Descripcion",datakey:proveedor.Descripcion_proveedor},
                ]
                });
        pdf.save('Proveedores.pdf');
    }

    const deleteProveedor = async (id) =>{
        await axios.delete(`${URI}${id}`)
        getProveedor()
    }

    return (
        <div className='secundary-view'>
            <h1 className='titulo'>Proveedores</h1>
            
            <div className='row'>
                <div className='col table-responsive-sm'>
                    <div className='col'>
                        <Link to="/proveedor/crear" className='btn btn-outline-danger mt-2 mb-2 me-4 float-start'> Crear Proveedor<span className="pe-3"></span><i i className="fa-solid fa-plus"></i></Link>
                        <button onClick={downloadPDF} className='btn btn-outline-success mt-2 mb-2 float-start'>Exportar a PDF<span className='pe-3'></span><i className="fa-regular fa-file"></i></button>
                    </div>
                    
                    <table className='table table-hover'id='table' >
                        <thead className='table-danger'>
                            <tr>
                                <th>Nombre</th>
                                <th>Direccion</th>
                                <th>Telefono</th>
                                <th>Correo</th>
                                <th>Descripcion del proveedor</th>
                                <th className='text-buttons'>Acciones</th>
                            </tr>
                        </thead>
                        <tbody >
                            {proveedores.map((proveedor)=>(
                                <tr key={proveedor.id_prov}>
                                    <td>{proveedor.Nombre_proveedor}</td>
                                    <td>{proveedor.Direccion}</td>
                                    <td>{proveedor.Telefono}</td>
                                    <td>{proveedor.Correo}</td>
                                    <td>{proveedor.Descripcion_proveedor}</td>
                                    <td style={{width:"200px"}}>
                                        <div className='botones-vendedor'>
                                            <Link  to={`/proveedor/editar/${proveedor.id_prov}`} className="btn btn-outline-primary"><i className="fa-solid fa-pen-to-square"></i></Link>
                                            <button  onClick={()=>deleteProveedor(proveedor.id_prov)} className='ms-3 btn btn-outline-danger'><i className="fa-solid fa-trash-can"></i></button>
                                        </div>

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

export default CompShowProveedor