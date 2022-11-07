import axios from 'axios'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

const URI = 'http://localhost:8000/vendedor/'

const CompShowVendedor = () =>{
    
    const [vendedores,setVendedores] = useState([])

    const [data,setData] = useState([])


    const GeneratePdf=()=>{
        axios.get("http://localhost:8000/vendedor").then((response) =>{
            const data = response.data;
            setData(data);
        })
    }

    useEffect( () =>{
        getVendedor()
        GeneratePdf()
    } ,[])

    const getVendedor = async () =>{
        const res = await axios.get(URI)
        setVendedores(res.data)
        console.log(res)
    }

    const downloadPDF =(vendedor) =>{
        const pdf = new jsPDF();
        pdf.autoTable(
            {
                html:'#table',
                columns:[
                    {header:"Nombre",datakey:vendedor.Nombre},
                    {header:"Apellido paterno",datakey:vendedor.Apellido_Paterno},
                    {header:"Apellido materno",datakey:vendedor.Apellido_Materno},
                    {header:"Telefono",datakey:vendedor.Fecha_de_nacimiento},
                    {header:"Fecha de nacimiento",datakey:vendedor.Fecha_de_contratacion},
                    {header:"Direccion",datakey:vendedor.Telefono},
                    {header:"Direccion",datakey:vendedor.Direccion},
                    {header:"Direccion",datakey:vendedor.Salario}
                    
                ]
                });
        pdf.save('Vendedores.pdf');
    }

    const deleteVendedor = async (id) =>{
        await axios.delete(`${URI}${id}`)
        getVendedor()
    }

    return (
        <div className='secundary-view'>
            <h1 className='titulo'>Vendedores</h1>
            
            <div className='row'>
                <div className='col table-responsive-sm'>
                    <div className='col'>
                        <Link to="/vendedor/crear" className='btn btn-outline-danger mt-2 mb-2 me-4 float-start'> Crear Vendedor<span className="pe-3"></span><i i className="fa-solid fa-plus"></i></Link>
                        <button onClick={downloadPDF} className='btn btn-outline-success mt-2 mb-2 float-start'>Exportar a PDF<span className='pe-3'></span><i className="fa-regular fa-file"></i></button>
                    </div>
                    
                    <table className='table table-hover'id='table' >
                        <thead className='table-danger'>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido Paterno</th>
                                <th>Apellido materno</th>
                                <th>Fecha de nacimiento</th>
                                <th>Fecha de contratacion</th>
                                <th>Telefono</th>
                                <th>Direccion</th>
                                <th>Salario</th>
                                <th className='text-buttons'>Acciones</th>
                                
                            </tr>
                        </thead>
                        <tbody >
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
                                    <td style={{width:"200px"}}>
                                        <div className='botones-vendedor'>
                                            <Link  to={`/vendedor/editar/${vendedor.id_vendedor}`} className="btn btn-outline-primary"><i className="fa-solid fa-pen-to-square"></i></Link>
                                            <button  onClick={()=>deleteVendedor(vendedor.id_vendedor)} className='ms-3 btn btn-outline-danger'><i className="fa-solid fa-trash-can"></i></button>
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

export default CompShowVendedor