const assert = require('assert');
const User = require('../src/user');

describe('Subdocuments', () => {
  let joe;
  // const joe = new User({
  //   name: 'Joe', 
  //   posts: [],
  //   postCount: 0
  // });
  beforeEach(() => {
    joe = new User({
      name: 'Joe', 
      posts: [],
      postCount: 0
    });
  });

  afterEach((done) => {
    User.findOneAndRemove({name: 'Joe'}).then(() => done());
  });

  it('can create a subdocument', () => {
    joe.posts.push(
      {title: 'post title'}
    );
    joe.save()
      .then(()=> User.findOne({ name: 'Joe'})
      .then((user) => {
        assert(user.posts[0].title === 'post title');
        // done(); 
      }));
    
  });

  it('add post to exist document', () => {
    joe.save()
      .then(() => User.findOne({name: 'Joe'}))
      .then((user) => {
        user.posts.push({title: 'New Post'});
        user.postCount++;
        return user.save();
      })
      .catch(err => console.log('---------',err))
      .then(()=> User.findOne({ name: 'Joe'}))
      .then((user) => {
        console.log('+++++++++++++++++', user);
        assert(user.posts[0].title === 'New Post');
        // why need done() ???
        // done();
      })
    
  });
  
});
