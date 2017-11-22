const User = require('../src/user');
const assert = require('assert');
const expect = require('chai').expect;

describe('Read user', () => {

  let joe;

  beforeEach((done) => {
    joe = new User({name: 'Joeh'});
    joe.save().then(()=>done());
    
  } );

  it('find all users with a name of joe', (done)=>{
    User.find({name:'Joeh'}).then((users)=>{
      console.log(users);
      expect(users[0].name).to.be.equals('Joeh');
      assert(users[0]._id.toString() == joe._id.toString());
      done();
    })
    .catch((e)=>{
      // console.log("find error",e);
      done();
    });

  });

  it('find user with specific name', (done) => {
    User.findOne({_id: joe._id}).then((user) => {
      expect(user.name).to.be.equals('Joeh');
      done();
    } )
   
  })
})