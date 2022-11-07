import db from "../database/db.js";
import {DataTypes} from 'sequelize'

const ProveedorModel = db.define('proveedores',{
    id_prov: {type: DataTypes.INTEGER,primaryKey: true},
    Nombre_proveedor: {type: DataTypes.STRING},
    Direccion: {type: DataTypes.STRING},
    Telefono: {type: DataTypes.INTEGER},
    Correo: {type: DataTypes.STRING},
    Descripcion_proveedor: {type: DataTypes.STRING},
})

export default ProveedorModel;