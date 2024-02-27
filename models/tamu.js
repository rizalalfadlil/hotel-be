'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tamu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tamu.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nama_pemesan: DataTypes.STRING,
    nama_tamu: DataTypes.STRING,
    email: DataTypes.STRING,
    no_telp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tamu',
  });
  return tamu;
};