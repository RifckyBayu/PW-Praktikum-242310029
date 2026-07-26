require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./models");

const bookRoutes = require("./routes/book");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);

// Test Database
db.sequelize
  .authenticate()
  .then(() => {
    console.log("✓ Koneksi ke database MySQL berhasil!");
  })
  .catch((err) => {
    console.error("✗ Koneksi ke database gagal!");
    console.error(err);
    process.exit(1);
  });

// Home
app.get("/", (req, res) => {
  res.json({
    message: "Server berjalan dengan baik",
    status: "active",
    timestamp: new Date(),
  });
});

// API Info
app.get("/api/info", (req, res) => {
  res.json({
    message: "API MERN Stack Build by Express JS",
    version: "1.0.0",
    status: "active",
    database: "Connected",
  });
});

// 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: err.message,
  });
});

const PORT = process.env.API_PORT || 3001;

app.listen(PORT, () => {
  console.log(`✓ Server running on port ${PORT}`);
  console.log(`✓ API available at http://localhost:${PORT}`);
});