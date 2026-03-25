require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ Error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Backend + MongoDB working 🚀");
});

// Contact route
app.post("/contact", (req, res) => {
  console.log(req.body); // DEBUG

  res.status(200).json({
    message: "Message received successfully ✅"
  });
});

// PORT FIX
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});