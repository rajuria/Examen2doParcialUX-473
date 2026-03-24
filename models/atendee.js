'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Atendee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Atendee.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    ticketType: DataTypes.ENUM('Student', 'Professional', 'VIP')
  }, {
    sequelize,
    modelName: 'Atendee',
  });
  return Atendee;
};