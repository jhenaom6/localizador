const router = require('express').Router();

//Models
const Ruta = require('../models/Rutas');

router.get('/rutas/nueva-ruta', (req, res) => {
  res.render('rutas/nuevaRuta');
});


router.post('/rutas/nueva-ruta',  async(req, res) => {
  const { nombre } = req.body;
  const errors = [];
  if (!nombre) {
    errors.push({text: 'Por favor ingrese el nombre de una ruta.'});
  } 
  if (errors.length > 0) {
    res.render('rutas/nuevaRuta', {errors, nombre });
  } else {
  	const nvaRuta = new Ruta({nombre});
  	await nvaRuta.save();
    res.redirect('/rutas');
    //newNote.user = req.user.id;    
    //req.flash('success_msg', 'Note Added Successfully');
    }
});

router.get('/rutas', async(req, res) => {
  const rutasdb = await Ruta.find()
  res.render('rutas/misRutas', { rutasdb });
});

router.get('/rutas/editarRutas/:id', async (req, res) => {
  const ruta = await Ruta.findById(req.params.id);
  res.render('rutas/editarRutas', { ruta });
});

router.put('/rutas/editarRutas/:id', async (req, res) => {
  const { nombre } = req.body;
  await Ruta.findByIdAndUpdate(req.params.id, {nombre});
  res.redirect('/rutas');
});

router.delete('/rutas/eliminar/:id', async (req, res) => {
  await Ruta.findByIdAndDelete(req.params.id);
  res.redirect('/rutas');
});

module.exports = router;