const { Post } = require('../models');

const postdata = [
  {
    title: 'Did Ruby on Rails go off the track?',
    post_content: "Three years ago this was the premier language to learn. This just shows how fast technology updates and the importance of continuing to learn throughout your career. ",
    user_id: 10
  },
  {
    title: 'Bootcamp Review',
    post_content: "Deciding whether or not taking a bootcamp is worth it?  There are a lot of factors to consider.  First and foremost; how do you handle problems and diversity.  Do you reach out for help?  Do you enjoy problem solving?  Consider how you will handle a course with little direction; for good reason.",
    user_id: 8
  },
  {
    title: 'Best Programmer Jokes',
    post_content: "Two bytes meet. The first byte asks, Are you ill? The second byte replies, No, just feeeling a big off.",
    user_id: 1
  },
  {
    title: 'Best Tech Meetups in the Northeast United States',
    post_content: 'Search for a tech meetup here https://www.meetup.com/find/us--ma--boston/technology/',
    user_id: 4
  },
  {
    title: 'Navigating Development as a Women in the Industry',
    post_content: 'Tired of being asked to take notes; or organize the files? How to own your development career journey.',
    user_id: 7
  },
  {
    title: 'Best New Technology for Developers',
    post_content: 'Setting up a new office as a developer.  Here are few must have based on experience.',
    user_id: 4
  },
  {
    title: 'What to expect during the interview process',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    user_id: 1
  },
  {
    title: 'How to Negotiate Your Salary',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    user_id: 1
  },
  {
    title: 'Example Technical Interview Questions',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    user_id: 9
  },
  {
    title: 'Tech Transfer - What it is and why Developers are needed in this realm',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    user_id: 5
  },
  {
    title: 'How to Teach Coding to Kids',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    user_id: 3
  },
  {
    title: 'Best Online Developer Forums',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    user_id: 10
  },
  {
    title: 'Starting Your Own Business',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    user_id: 8
  },
  {
    title: 'Getting Your First Role.  What to Expect.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    user_id: 3
  },
  {
    title: 'The Ethics of Development',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    user_id: 3
  },
  {
    title:
      'Best Free Online Coding Classes',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    user_id: 7
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
