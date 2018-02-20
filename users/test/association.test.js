const mongoose = require('mongoose');
const User = require('../src/user');
const BlogPost = require('../src/blogPost');
const Comment = require('../src/comment');

describe('Associations', () => {
  let joe, blogPost, comment;

  beforeEach((done) => {
    joe = new User({name: 'joe'});
    blogPost = new BlogPost({
      title: 'js is great',
      content: 'yes'
    });
    comment = new Comment({
      content: 'congrats'
    })
    
    joe.blogPost.push(blogPost);
    blogPost.comments.push(comment);
    comment.user = joe;
  });
});
