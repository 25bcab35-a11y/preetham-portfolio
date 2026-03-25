require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// ✅ IMPORT MODEL
const Contact = require("./models/Contact");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection (IMPROVED)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.log("❌ MongoDB Connection Error:");
    console.log(err.message);
  });

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend + MongoDB working 🚀");
});

// ✅ SAVE CONTACT DATA (FINAL FIXED)
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log("📩 Data received:", req.body);

    // 🔥 Validation (important)
    if (!name || !email || !message) {
      return res.status(400).json({
        message: "All fields are required ❌"
      });
    }

    // 🔥 Create & Save
    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();

    console.log("✅ Data saved to MongoDB");

    res.status(200).json({
      message: "Message saved successfully ✅"
    });

  } catch (err) {
    console.log("❌ Error saving:", err.message);

    res.status(500).json({
      message: "Server error ❌"
    });
  }
});

// ✅ Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});