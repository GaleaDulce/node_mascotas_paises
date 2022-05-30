const Pais = require("../models/paises.model");


const getAllPaises = async (req, res, next) => {
  try {
    const allPais = await Pais.find();
    return res.json({
      status: 200,
      message: "Paises OK",
      pais: allPais,
    });
  } catch (error) {
    return next(error);
  }
};


const getPaisByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const paisByID = await Pais.findById(id);
    return res.json({
      status: 200,
      message: "Pais OK",
      pais: paisByID,
    });
  } catch (error) {
    return next(error);
  }
};


const createPais= async (req, res, next) => {
  try {
    const newPais = new Pais(req.body);
    const createdPais = await newPais.save();
    return res.json({
      status: 201,
      message: "Pais created",
      pais: createdPais,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { getAllPaises, getPaisByID, createPais };