'use strict'

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before((done)=>{
  mongoose.connect('mongodb://localhost:28017/users_test');
  
  mongoose.connection.once('open',() => {
    console.log('Good to go');
    done();
  }).on('error',(error) => {
    console.log('Warning:',error);
    done();
  });

  // mongoose.connection.collections.users.drop(() => {
  //   done();
  // }
  // );
});


beforeEach((done)=>{
  mongoose.connection.collections.users.drop(() => {
    done();
  }
  );
});