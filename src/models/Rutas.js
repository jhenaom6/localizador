const mongoose = require('mongoose');
const { Schema } = mongoose;

const RutaSchema = new Schema({
  nombre: {type: String, required: true},

  //distancia: {type: Float, required: true},

  //tiempo: {type: Time,  require: true},

  //id-persona: {
  //  type: Date,  default: Date.now
  //},
});

module.exports = mongoose.model('Ruta', RutaSchema);
