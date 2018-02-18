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
    User.findOneAndRemove({name: 'Joe'})
    .then(() => done());
  });

  it('can create a subdocument', (done) => {
    joe.posts.push(
      {title: 'post title'}
    );
    joe.save()
      .then(()=> User.findOne({ name: 'Joe'})
      .then((user) => {
        assert(user.posts[0].title === 'post title');
        done(); 
      }));
    
  });

  it('add post to exist document', (done) => {
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
        // console.log('+++++++++++++++++', user);
        assert(user.posts[0].title === 'New Post');
        // why need done() ? to make sure aftereach run correctly ?
        done();
      })
    
  });

  it('can remove sub document', (done) => {
    joe.posts.push(
      {title: 'post title'}
    );
    joe.postCount++;
    
    joe.save()
      .then(() => User.findOne({name: 'Joe'}))
      .then((user) => {
        const post = user.posts[0];
        //
        post.remove();
        return user.save();
      })
      .then(()=> User.findOne({ name: 'Joe'}))
      .then((user) => {
        assert(user.posts.length === 0);
        done();
      });
  });
  
});
