const router = require('express').Router();
const passport = require('passport');

//Models
const User = require('../models/User');


router.get('/user/signin', (req, res) => {
  res.render('user/signin');
});

router.post('/user/signin', passport.authenticate('local', {
	successRedirect: '/rutas',
	failureRedirect: '/user/signin',
	failureFlash: true
}));

router.get('/user/signup', (req, res) => {
  res.render('user/signup');
});

router.post('/user/signup', async(req, res) => {
  const { nombre, email, contrasena, confirmar_contrasena } = req.body;
  const errors = [];
  if(!nombre || !email || !contrasena){
  	errors.push({text: 'Por favor llenar todos los campos.'});
  }
  if(contrasena != confirmar_contrasena) {
    errors.push({text: 'Las contraseñas no coinciden.'});
  }
  if (errors.length > 0) {
    res.render('user/signup', {errors, nombre, email});
  }else{
  	const nvoUser = new User({nombre, email, contrasena});
  	nvoUser.contrasena = await nvoUser.encryptPassword(contrasena);
  	await nvoUser.save();
  	res.redirect('/user/signin');
  }
});

router.get('/user/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;