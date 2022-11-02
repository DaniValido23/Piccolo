import express from "express"
import cors from "cors"
import db from "./database/db.js"
import {routerClientes,routerVendedores} from './routes/routes.js'

const app = express();

app.use(cors())

app.use(express.json())

app.use('/cliente',routerClientes)
app.use('/vendedor',routerVendedores)

try {
    db.authenticate()
    console.log("Conexion exitosa");
} catch (error) {
    console.log(`Error: ${error}`);
}

app.get('/',(req,res) => {
    res.send("Hola Mundo")
})

app.listen(8000,()=>{
    console.log('Server up running in http://localhost:8000/')
})