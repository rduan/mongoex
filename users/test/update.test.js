'use strict'

const User = require('../src/user');
const assert = require('assert');
const expect = require('chai').expect;

describe('Update a user', () => {

  let joe;

  beforeEach((done) => {
    joe = new User({name: 'Joe', postCount: 0});
    joe.save().then(()=>done());
    
  });

  afterEach((done) => {
    User.findOneAndRemove({name: 'Joe'}).then(()=>done());
  });

  function expectName(op,done) {
    op.then(()=> User.find({})
    .then((users)=>{
      // console.log(users);
      expect(users.length).to.be.equal(1);

      expect(users[0].name).to.be.equal('Alex');
      done();
  }));
  }

  it('instance update by set and save', (done) => {
    joe.set('name','Alex');
    
    expectName(joe.save(),done);
    
  }  );

  it(' instance update by Update', (done) => {
    expectName(joe.update({name:'Alex'}),done)
      
  }  );

  it('Update by  model class update ', (done) => {
    expectName(User.update({name:'Joe'},{name:'Alex'}),done)
      
  }  );
  
  it('Update by  model class findOneAndupdate ', (done) => {
    expectName(User.findOneAndUpdate({name:'Joe'},{name:'Alex'}),done)
      
  }  );

  it('Update by  model class update ', (done) => {
    expectName(User.findByIdAndUpdate(joe._id,{name:'Alex'}),done)
      
  }  );

  it('a user can have post count increment 1', () => {
    // joe.set('postCount', 1);
    User.update({name: 'Joe'}, {$inc: {postCount:1} })
      .then(()=> User.findOne({name: 'Joe'}))
      .then((user)=>{
        expect(user.postCount).to.equal(1);
      })
    ;
  });
});