const Vote = require('./Vote');
const User = require('./User');
const Post = require("./Post");
const Comment = require("./Comment");

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'user_id'
});

Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id'
});
Vote.belongsTo(User, {
  foreignKey: 'user_id'
});

Vote.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Vote, {
  foreignKey: 'user_id'
});

Post.hasMany(Vote, {
  foreignKey: 'post_id'
});
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Vote, Comment };

// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// // create our Post model
// class Post extends Model {
//     static upvote(body, models) {
//       return models.Vote.create({
//         user_id: body.user_id,
//         post_id: body.post_id
//       }).then(() => {
//         return Post.findOne({
//           where: {
//             id: body.post_id
//           },
//           attributes: [
//             'id',
//             'post_content',
//             'title',
//             'created_at',
//             [
//               sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'),
//               'vote_count'
//             ]
//           ]
//         });
//       });
//     }
//   }

// // create fields/columns for Post model
// Post.init(
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true
//       },
//       title: {
//         type: DataTypes.STRING,
//         allowNull: false
//       },
//       post_content: {
//         type: DataTypes.TEXT,
//         allowNull: false,
//       },
//       user_id: {
//         type: DataTypes.INTEGER,
//         references: {
//           model: 'user',
//           key: 'id'
//         }
//       }
//     },
//     {
//       sequelize,
//       freezeTableName: true,
//       underscored: true,
//       modelName: 'post'
//     }
//   );

//   module.exports = Post;