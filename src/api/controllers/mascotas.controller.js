const Mascota = require("../models/mascotas.model");

const getAllMascotas = async (req, res, next) => {
  try {
    
    const allMascotas = await Mascota.find().populate("paises");
    return res.json({
      status: 200,
      message: "Mascotas OK",
      mascotas: allMascotas,
    });
  } catch (error) {
    return next(error);
  }
};

const getMascotaByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const mascotaByID = await Mascota.findById(id);
    return res.json({
      status: 200,
      message: "Mascota OK",
      mascotas: mascotaByID,
    });
  } catch (error) {
    return next(error);
  }
};

const createMascota = async (req, res, next) => {
  try {
    const newMascota = new Mascota(req.body);
    const createdMascota = await newMascota.save();
    return res.json({
      status: 201,
      message: "Mascota created",
      mascota: createdMascota,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { getAllMascotas, getMascotaByID, createMascota };