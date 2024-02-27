
      const db = require('../models');

      exports.create = async (req, res) => {
        try {
          const { harga, tipe, jumlah, foto } = req.body;
          const data = await db.kamar.create({ harga, tipe, jumlah, foto });
          res.status(201).json(data);
        } catch (error) {
          res.status(500).json(error);
        }
      };

      exports.getAll = async (req, res) => {
        try {
          const data = await db.kamar.findAll();
          res.status(200).json(data);
        } catch (error) {
          res.status(500).json(error);
        }
      };

      exports.getById = async (req, res) => {
        try {
          const id = req.params.id;
          const data = await db.kamar.findByPk(id);
          if (!data) {
            res.status(404).json({ message: 'Data not found' });
          } else {
            res.status(200).json(data);
          }
        } catch (error) {
          res.status(500).json(error);
        }
      };

      exports.update = async (req, res) => {
        try {
          const id = req.params.id;
          const { harga, tipe, jumlah, foto } = req.body;
          const updatedData = await db.kamar.update({ harga, tipe, jumlah, foto }, { where: { id } });
          if (updatedData[0] === 0) {
            res.status(404).json({ message: 'Data not found' });
          } else {
            res.status(200).json({ message: 'Data updated successfully' });
          }
        } catch (error) {
          res.status(500).json(error);
        }
      };

      exports.delete = async (req, res) => {
        try {
          const id = req.params.id;
          const deletedData = await db.kamar.destroy({ where: { id } });
          if (deletedData === 0) {
            res.status(404).json({ message: 'Data not found' });
          } else {
            res.status(200).json({ message: 'Data deleted successfully' });
          }
        } catch (error) {
          res.status(500).json(error);
        }
      };
      