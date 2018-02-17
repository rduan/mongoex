'use strict'

const assert = require('assert');
const User = require('../src/user');
const expect = require('chai').expect;

describe('Delet a user', () => {

  let joe;

  beforeEach((done) => {
    joe = new User({name: 'Joe'});
    joe.save().then(()=>done());
    
  }  );

  it('model instance remove', (done) => {
    joe.remove().then(()=>{
      User.findOne({name: 'Joe'})
    }).then((user)=>{
      console.log(user);
      expect(user).to.be.undefined;
      // assert(user === undefined);
      // assert(user === null); wrong
      done();
    });
  }  );

  it('class instance remove', (done) => {
    User.remove({name: 'Joe'}).then(()=>{
      User.findOne({name: 'Joe'})
    }).then((user)=>{
      console.log(user);
      expect(user).to.be.undefined;
      // assert(user === undefined);
      // assert(user === null); wrong
      done();
    });
  }  );

  it('class instance find one AndRemove', (done) => {
    User.findOneAndRemove({name: 'Joe'}).then(()=>{
      User.findOne({name: 'Joe'})
    })
      .then((user)=>{
      console.log(user);
      expect(user).to.be.undefined;
      done();
    });
  }  );

  it('class instance find by id remove', (done) => {
    User.remove({name: 'Joe'}).then(()=>{
      User.findByIdAndRemove(joe._id)
    }).then(()=>{
      User.findOne({name: 'Joe'})
    }).then((user)=>{
      console.log(user);
      expect(user).to.be.undefined;
      // assert(user === undefined);
      // assert(user === null); wrong
      done();
    });
  }  );


  // it('class instance remove', (done) => {
    
  // }  );
  // it('class instance remove', (done) => {
    
  // }  );
});