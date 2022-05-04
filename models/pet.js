'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    static associate(models) {
    }
  }
  Pet.init({
    id: {allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.STRING},
    name: {allowNull: false, type: DataTypes.STRING},
    tag:  {allowNull: false, type: DataTypes.STRING}
  }, {
    sequelize,
    modelName: 'Pet',
  });
  return Pet;
};