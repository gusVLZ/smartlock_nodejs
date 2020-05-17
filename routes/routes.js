const express = require("express");
//const cTipoGen = require("../controller/tipoGenerico");
const cDoor = require("../controller/door");

const router = express.Router();

/*router.get("/tipoGen/:id", cTipoGen.buscarUm);

router.get("/tipoGen", cTipoGen.buscarTodos);*/

router.get("/openDoor", cDoor.openDoor);
router.get("/closeDoor", cDoor.closeDoor);
router.post("/logging", cDoor.logging);

module.exports = router;