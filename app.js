
const express = require("express");
const cors = require('cors');
const app = express();
const port = 8000;
const router = express.Router();

app.use(cors());
app.use(express.json());

// Import semua routers dari folder routes
const adminRouter = require("./routes/admin");
const check_inRouter = require("./routes/check_in");
const fasilitasRouter = require("./routes/fasilitas");
const kamarRouter = require("./routes/kamar");
const tamuRouter = require("./routes/tamu");

// Gunakan semua routers
app.use("/api/admin", adminRouter);
app.use("/api/check_in", check_inRouter);
app.use("/api/fasilitas", fasilitasRouter);
app.use("/api/kamar", kamarRouter);
app.use("/api/tamu", tamuRouter);

// router.post("/upload/:id", uploadController.upload);

// Listen to port
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
