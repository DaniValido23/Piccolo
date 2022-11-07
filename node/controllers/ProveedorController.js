import ProveedorModels from "../models/ProveedorModels.js";


//Metodos CRUD
export const getAllProveedores = async(req,res) =>{
    try {
        const proveedor = await ProveedorModels.findAll()
        res.json(proveedor)
        
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getProveedor = async(req,res) =>{
    try {
        const proveedor = await ProveedorModels.findAll({
            where:{id_prov:req.params.id}
        })
        res.json(proveedor[0])
        
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createProveedor = async(req,res) =>{
    try {
        await ProveedorModels.create(req.body)
        res.json({
            "message" : "Proveedor creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateProveedor = async (req,res)=>{
    try {
        await ProveedorModels.update(req.body,{
            where: {id_prov : req.params.id}
        })
        res.json({
            "message" : "Proveedor actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}


export const deleteProveedor = async (req,res)=>{
    try {
        await ProveedorModels.destroy({
            where: {id_prov : req.params.id}
        })
        res.json({
            "message" : "Proveedor eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}