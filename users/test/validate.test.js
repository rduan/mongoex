

const expect = require('chai').expect;
const User = require('../src/user');

describe('Validating records', () => {
  it('require a user name', () => {
    let user = new User({name: undefined});
    let validateResult= user.validateSync();
    console.log('vali',validateResult);
    const {message} = validateResult.errors.name;
    expect(message).to.eql('name schema required');
  });

  it('name more 3', () => {
    const user = new User({name: 'AI'});
    const validateResult= user.validateSync();
    const {message} = validateResult.errors.name;
    expect(message).to.be.eql('Name longer than 3');
  });

  it('disallow to save invalid record', (done) => {
    const user = new User({name: 'AI'});
    user.save().catch((validateResult)=>{
      const {message} = validateResult.errors.name;
      expect(message).to.be.eql('Name longer than 3');
      done();
    })
  });

})
