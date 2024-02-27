'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fasilitas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      keterangan: {
        type: Sequelize.STRING
      },
      nama:{
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.STRING
      },
      kamar : {
        type: Sequelize.STRING
      },
      tipe: {
        type: Sequelize.ENUM('kamar','umum')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('fasilitas');
  }
};