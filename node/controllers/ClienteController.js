//Importamos modelo
import ClienteModel from "../models/ClienteModels.js";

//Metodos CRUD

//Todos los clientes
export const getAllClientes = async(req,res) =>{
    try {
        //const cliente2 = await ClienteModel.sequelize.query("SELECT * FROM cliente")
        const cliente = await ClienteModel.findAll()
        res.json(cliente)
        
    } catch (error) {
        res.json({message: error.message})
    }
}

//Algun cliente
export const getCliente = async(req,res) =>{
    try {
        const cliente = await ClienteModel.findAll({
            where:{id_Cliente:req.params.id}
        })
        res.json(cliente[0])
        
    } catch (error) {
        res.json({message: error.message})
    }
}

//Crear cliente
export const createCliente = async(req,res) =>{
    try {
        await ClienteModel.create(req.body)
        res.json({
            "message" : "Cliente creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//Actualizar un Cliente
export const updateCliente = async (req,res)=>{
    try {
        await ClienteModel.update(req.body,{
            where: {id_Cliente : req.params.id}
            
        })
        res.json({
            "message" : "Cliente actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

//Borrar un cliente

export const deleteCliente = async (req,res)=>{
    try {
        await ClienteModel.destroy({
            where: {id_Cliente : req.params.id}
        })
        res.json({
            "message" : "Cliente eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}