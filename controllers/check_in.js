
      const db = require('../models');

      exports.create = async (req, res) => {
        try {
          const { check_in, check_out, id_kamar, id_resepsionis, id_tamu, harga } = req.body;
          const data = await db.check_in.create({ check_in, check_out, id_kamar, id_resepsionis, id_tamu, harga });
          res.status(201).json(data);
        } catch (error) {
          res.status(500).json(error);
        }
      };

      exports.getAll = async (req, res) => {
        try {
          const data = await db.check_in.findAll();
          res.status(200).json(data);
        } catch (error) {
          res.status(500).json(error);
        }
      };

      exports.getById = async (req, res) => {
        try {
          const id = req.params.id;
          const data = await db.check_in.findByPk(id);
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
          const { check_in, check_out, id_kamar, id_resepsionis, id_tamu, harga } = req.body;
          const updatedData = await db.check_in.update({ check_in, check_out, id_kamar, id_resepsionis, id_tamu, harga }, { where: { id } });
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
          const deletedData = await db.check_in.destroy({ where: { id } });
          if (deletedData === 0) {
            res.status(404).json({ message: 'Data not found' });
          } else {
            res.status(200).json({ message: 'Data deleted successfully' });
          }
        } catch (error) {
          res.status(500).json(error);
        }
      };
      