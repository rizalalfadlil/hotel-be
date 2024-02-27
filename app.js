
const express = require("express");
const cors = require('cors');
const multer  = require('multer');
const app = express();
const port = 8000;
const path = require('path')
const router = express.Router();
app.use(cors());
app.use(express.json());

// Konfigurasi multer untuk menyimpan file di folder 'uploads'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

// Endpoint untuk upload gambar
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No files were uploaded.');
  }
  res.send('File uploaded successfully.');
});

// Endpoint untuk mendapatkan gambar
app.get('/image/:filename', (req, res) => {
  const filename = req.params.filename;
  res.sendFile(path.join(__dirname, 'uploads', filename));
});

// Import semua routers dari folder routes
const adminRouter = require("./routes/admin");
const check_inRouter = require("./routes/check_in");
const fasilitasRouter = require("./routes/fasilitas");
const kamarRouter = require("./routes/kamar");
const tamuRouter = require("./routes/tamu");
const loginRouter = require("./routes/login")

// Gunakan semua routers
app.use("/api/admin", adminRouter);
app.use("/api/check_in", check_inRouter);
app.use("/api/fasilitas", fasilitasRouter);
app.use("/api/kamar", kamarRouter);
app.use("/api/tamu", tamuRouter);
app.use("/api/login", loginRouter);

// router.post("/upload/:id", uploadController.upload);

// Listen to port
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
