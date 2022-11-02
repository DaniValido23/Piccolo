import db from "../database/db.js";
import {DataTypes} from 'sequelize'

const VendedorModel = db.define('vendedor',{
    id_vendedor: {type: DataTypes.INTEGER,primaryKey: true},
    Nombre: {type: DataTypes.STRING},
    Apellido_Paterno: {type: DataTypes.STRING},
    Apellido_Materno: {type: DataTypes.STRING},
    Fecha_de_nacimiento: {type: DataTypes.DATE},
    Fecha_de_contratacion: {type: DataTypes.DATE},
    Telefono: {type: DataTypes.INTEGER},
    Direccion: {type: DataTypes.STRING},
    Salario: {type: DataTypes.INTEGER},
})

export default VendedorModel;