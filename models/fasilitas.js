'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fasilitas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  fasilitas.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nama:DataTypes.STRING,
    keterangan: DataTypes.STRING,
    foto: DataTypes.STRING,
    kamar: DataTypes.STRING,
    tipe: DataTypes.ENUM('kamar','umum')
  }, {
    sequelize,
    modelName: 'fasilitas',
  });
  return fasilitas;
};