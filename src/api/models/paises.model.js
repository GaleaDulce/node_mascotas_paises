const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PaisSchema = new Schema(
  {
    pais: { type: String, required: true },
    bandera: { type: String, required: true },
   
  },
  { timestamps: true }
);

const Pais = mongoose.model("paises", PaisSchema);

module.exports = Pais;