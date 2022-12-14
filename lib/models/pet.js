'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pet.belongsTo(models.Owner, {
        foreignKey: 'ownerId',
      });
    }
  }
  Pet.init(
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      breed: DataTypes.STRING,
      ownerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Pet',
    }
  );
  return Pet;
};
