import VendedorModels from "../models/VendedorModels.js";


//Metodos CRUD
export const getAllVendedores = async(req,res) =>{
    try {
        const vendedor = await VendedorModels.findAll()
        res.json(vendedor)
        
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getVendedor = async(req,res) =>{
    try {
        const vendedor = await VendedorModels.findAll({
            where:{id_vendedor:req.params.id}
        })
        res.json(vendedor[0])
        
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createVendedor = async(req,res) =>{
    try {
        await VendedorModels.create(req.body)
        res.json({
            "message" : "Vendedor creado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateVendedor = async (req,res)=>{
    try {
        await VendedorModels.update(req.body,{
            where: {id_vendedor : req.params.id}
        })
        res.json({
            "message" : "Vendedor actualizado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}


export const deleteVendedor = async (req,res)=>{
    try {
        await VendedorModels.destroy({
            where: {id_vendedor : req.params.id}
        })
        res.json({
            "message" : "Vendedor eliminado correctamente"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}