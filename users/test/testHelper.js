
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:37000/users_test');

mongoose.connection.once('open',() => {
  console.log('Good to go');
  
}).on('error',(error) => {
  console.log('Warning:',error);
});