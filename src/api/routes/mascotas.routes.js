const express = require("express");

const router = express.Router();

const {
  getAllMascotas,
  getMascotaByID,
  createMascota,
} = require("../controllers/mascotas.controller");

router.get("/", getAllMascotas);
router.get("/:id", getMascotaByID);
router.post("/", createMascota);

module.exports = router;