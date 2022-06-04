const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'I have been thinking about taking one.  Any suggestions?',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Great article',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'Great article.',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: "Link didn't work for me?",
    user_id: 3,
    post_id: 5
  },
  {
    comment_text: 'Can anyone point me in the direction of more information?',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Totally disagree.',
    user_id: 1,
    post_id: 10
  },
  {
    comment_text: 'Great article',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'You should go into this further.',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'Great article',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Love the blog. Keep writing!',
    user_id: 6,
    post_id: 6
  },
  {
    comment_text: 'What do you think about Trinity?',
    user_id: 3,
    post_id: 4
  },
  {
    comment_text: 'Which sites are using this?',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Disagree.',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text:
      'Keep writing.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text: 'Great post',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Interesting blog piece.',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text:
      'Interesting blog piece',
    user_id: 2,
    post_id: 10
  },
  {
    comment_text: 'Great blog piece',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text:
      'We need more articles.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text:
      'Great blog post',
    user_id: 9,
    post_id: 10
  },
  {
    comment_text: 'Thumbs up',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'Great blog post',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'We need more blog posts. Everyone should add one.',
    user_id: 3,
    post_id: 8
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
