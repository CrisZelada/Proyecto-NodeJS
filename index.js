//RUTAS GLOBALES

const { Router } = require("express");
const router = Router();

const compraProducto = require("./compraProducto.js");
router.use("/", compraProducto);

const cliente = require("./cliente.js");
router.use("/", cliente);

const precioVenta = require("./precioventa.js");
router.use("/", precioVenta);

const proveedor = require("./proveedor.js");
router.use("/", proveedor);

const producto = require("./producto.js");
router.use("/", producto);

const usuario = require("./usuario.js");
router.use("/", usuario);

const ventaProducto = require("./ventaProducto.js");
router.use("/", ventaProducto);

module.exports = router;
