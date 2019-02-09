const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs'); 

const UserSchema = new Schema({
  
  nombre: {type: String, required: true},
  email: {type: String, required: true},
  contrasena: {type: String,  require: true},
  rutas:[{
  	type: mongoose.Schema.Types.ObjectId,
  	ref: "Ruta"
  }]

});

UserSchema.methods.encryptPassword = async(contrasena) =>{
	const salt = await bcrypt.genSalt(10);
	const hash = bcrypt.hash(contrasena,salt);
	return hash;
};

UserSchema.methods.matchPassword = async function (contrasena){
	return await bcrypt.compare(contrasena, this.contrasena);
};

module.exports = mongoose.model('User', UserSchema);