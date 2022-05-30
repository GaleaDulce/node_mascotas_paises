const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MascotaSchema = new Schema(
  {
    raza: { type: String, required: true },
    vida:{ type: String, required: true },
    imagen: { type: String, required: true },
    paises: [{ type: Schema.Types.ObjectId, ref: "mascotas", required: false }],
  },
  { timestamps: true }
);

const Mascota = mongoose.model("mascotas", MascotaSchema);

module.exports = Mascota;