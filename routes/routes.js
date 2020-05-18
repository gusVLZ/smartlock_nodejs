const express = require("express");
const cDoor = require("../controller/door");
const user = require("../controller/user");

const router = express.Router();

/*router.get("/tipoGen/:id", cTipoGen.buscarUm);

router.get("/tipoGen", cTipoGen.buscarTodos);*/

//Auth
router.post("/login", user.login)
router.post("/cadastrar", user.cadastrar)

//Ações
router.get("/openDoor", cDoor.openDoor);
router.get("/closeDoor", cDoor.closeDoor);
router.post("/logging", cDoor.logging);

module.exports = router;