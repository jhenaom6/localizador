const mongoose = require('mongoose');
const { Schema } = mongoose;

const RutaSchema = new Schema({
  nombre: {type: String, required: true},

  puntos: [{
  	lat: String,
    lng: String
  }]
});

module.exports = mongoose.model('Ruta', RutaSchema);
