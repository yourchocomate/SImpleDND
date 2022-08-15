'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserSession extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserSession.init({
    user_id: DataTypes.INTEGER,
    country: DataTypes.STRING(64),
    gender: DataTypes.STRING(64),
    device: DataTypes.STRING(64)
  }, {
    sequelize,
    modelName: 'UserSession',
    tableName: "user_session"
  });

  UserSession.associate = models => {
    UserSession.belongsTo(models.User, {
      foreignKey: { name: 'userId', allowNull: true },
      onDelete: 'CASCADE',
    })
  }

  return UserSession;
};