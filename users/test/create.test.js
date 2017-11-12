const User = require('../src/user');
const assert = require('assert');
const expect = require('chai').expect;

describe('Create user', () => {
  it('save a user', (done)=>{
    const joe = new User({name: 'Joe'});

    joe.save().then(()=>{
      console.log(joe.isNew);
      expect(joe.isNew).to.be.false;
      // assert(joe.isNew);
      done();

    }).catch((e)=>{
      // console.log("save error: ",e);
      done();
    });
      
    
    
    // expect()
  });
  
})