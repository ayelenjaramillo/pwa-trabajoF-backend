const express = require("express");
const router = express.Router();

const proyectoController = require("../controllers/proyecto/proyectoController");
const upload = require("../middlewares/multerUpload"); 

router.get("/", proyectoController.todos);
router.get("/nuevo", proyectoController.formNuevo)
router.get("/:id", proyectoController.detalleProyecto);
router.get("/:id/editar", proyectoController.editar)

router.post( "/", upload.array("imagenes", 5),  proyectoController.crearNuevo);
router.post("/:id/editar", upload.array("imagenes", 5), proyectoController.update)
router.post("/:id/eliminar", proyectoController.eliminarProyecto); 
router.post("/:proyectoId/imagenes/:imagenId/eliminar", proyectoController.eliminarImagen)


module.exports = router;