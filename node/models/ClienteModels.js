import db from "../database/db.js";
import {DataTypes} from 'sequelize'

const ClienteModel = db.define('cliente',{
    id_cliente: {type: DataTypes.INTEGER,primaryKey: true},
    nombre: {type: DataTypes.STRING},
    apellido_paterno: {type: DataTypes.STRING},
    apellido_materno: {type: DataTypes.STRING},
    telefono: {type: DataTypes.INTEGER},
    fecha_nacimiento: {type: DataTypes.DATE},
    direccion: {type: DataTypes.STRING},
})

export default ClienteModel;