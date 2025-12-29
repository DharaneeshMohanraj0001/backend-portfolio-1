const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./db");
const contactRoutes = require("./contactRoutes");
;

const app = express();
const PORT = process.env.PORT || 5000;


// connect database
connectDB();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api", contactRoutes);

app.get("/", (req, res) => {
  res.send("Backend started successfully 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


