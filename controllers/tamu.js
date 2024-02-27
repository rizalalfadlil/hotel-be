
      const db = require('../models');

      exports.create = async (req, res) => {
        try {
          const { nama_pemesan, nama_tamu, email, no_telp } = req.body;
          const data = await db.tamu.create({ nama_pemesan, nama_tamu, email, no_telp });
          res.status(201).json(data);
        } catch (error) {
          res.status(500).json(error);
        }
      };

      exports.getAll = async (req, res) => {
        try {
          const data = await db.tamu.findAll();
          res.status(200).json(data);
        } catch (error) {
          res.status(500).json(error);
        }
      };

      exports.getById = async (req, res) => {
        try {
          const id = req.params.id;
          const data = await db.tamu.findByPk(id);
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
          const { nama_pemesan, nama_tamu, email, no_telp } = req.body;
          const updatedData = await db.tamu.update({ nama_pemesan, nama_tamu, email, no_telp }, { where: { id } });
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
          const deletedData = await db.tamu.destroy({ where: { id } });
          if (deletedData === 0) {
            res.status(404).json({ message: 'Data not found' });
          } else {
            res.status(200).json({ message: 'Data deleted successfully' });
          }
        } catch (error) {
          res.status(500).json(error);
        }
      };
      