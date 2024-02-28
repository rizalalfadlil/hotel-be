
      const db = require('../models');

      exports.create = async (req, res) => {
        try {
          const { nama, tipe, password } = req.body;
          const data = await db.admin.create({ nama, tipe, password });
          res.status(201).json(data);
        } catch (error) {
          res.status(500).json(error);
        }
      };
      exports.login = async (req, res) => {
        try {
          const { username, password } = req.body; // Get username and password from request body
          const user = await db.admin.findOne({ where: { nama:username} }); // Find user 
          if (user) {
            // If user is found
            if(user.password === password){
              res.json({ message: "Login berhasil sebagai user", data: user }); // Send success message and user data
            }else{
              res.status(401).send("password salah"); // Send error message
            }
            
          }else {
            // If neither user nor staff is found
            res.status(401).send("username tidak ditemukan"); // Send error message
          }
        } catch (err) {
          console.error(err);
          res.status(500).send("Internal server error");
        }
      };

      exports.getAll = async (req, res) => {
        try {
          const data = await db.admin.findAll();
          res.status(200).json(data);
        } catch (error) {
          res.status(500).json(error);
        }
      };

      exports.getById = async (req, res) => {
        try {
          const id = req.params.id;
          const data = await db.admin.findByPk(id);
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
          const { nama, tipe, password } = req.body;
          const updatedData = await db.admin.update({ nama, tipe, password }, { where: { id } });
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
          const deletedData = await db.admin.destroy({ where: { id } });
          if (deletedData === 0) {
            res.status(404).json({ message: 'Data not found' });
          } else {
            res.status(200).json({ message: 'Data deleted successfully' });
          }
        } catch (error) {
          res.status(500).json(error);
        }
      };
      