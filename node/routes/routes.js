import {
  getAllClientes,
  getCliente,
  createCliente,
  updateCliente,
  deleteCliente,
} from "../controllers/ClienteController.js";

import {
  getAllVendedores,
  getVendedor,
  createVendedor,
  updateVendedor,
  deleteVendedor,
} from "../controllers/VendedorController.js";

import{
  getAllProveedores,
  getProveedor,
  createProveedor,
  updateProveedor,
  deleteProveedor
} from "../controllers/ProveedorController.js"



import express from "express";

const routerClientes = express.Router();

const routerVendedores = express.Router();

const routerProveedores = express.Router();

//Clientes
routerClientes.get("/", getAllClientes);
routerClientes.get("/:id", getCliente);
routerClientes.post("/", createCliente);
routerClientes.put("/:id", updateCliente);
routerClientes.delete("/:id", deleteCliente);

//Vendedores
routerVendedores.get("/",getAllVendedores);
routerVendedores.get("/:id",getVendedor);
routerVendedores.post("/",createVendedor);
routerVendedores.put("/:id",updateVendedor);
routerVendedores.delete("/:id",deleteVendedor);

//Proveedores
routerProveedores.get("/",getAllProveedores);
routerProveedores.get("/:id",getProveedor);
routerProveedores.post("/",createProveedor);
routerProveedores.put("/:id",updateProveedor);
routerProveedores.delete("/:id",deleteProveedor);

export {routerClientes,routerVendedores,routerProveedores}
