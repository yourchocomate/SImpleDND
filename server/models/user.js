'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
    static associate(models) {
      // define association here
    }

  }
  User.init({
    
    fullName: {
      type: DataTypes.STRING(64),
    },
    username: {
      type: DataTypes.STRING(64),
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
    },
    gender: {
      type: DataTypes.STRING(64)
    },
    country: {
      type: DataTypes.STRING(64)
    }
  }, {
      sequelize,
      modelName: "User",
      tableName: "users"
  });

  
  User.associate = models => {
    User.hasMany(models.UserSession, {
      foreignKey: 'userId'
    })
  }

  return User;
};