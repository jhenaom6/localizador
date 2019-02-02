const mongoose = require('mongoose');

mongoose.connect('mongo://localhost/localizacionesbd', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));
