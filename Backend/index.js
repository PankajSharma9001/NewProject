const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // To parse JSON bodies

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/admissionDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected successfully");
})
.catch((err) => {
  console.log("Error connecting to MongoDB:", err);
});

// Define Schema and Model for Admission
const admissionSchema = new mongoose.Schema({
  name: String,
  phone: String,
  class: String,
  age: Number,
});

const Admission = mongoose.model('Admission', admissionSchema);

// Define Schema and Model for Contact Messages
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);

// Route to check if phone number exists in the admission database
app.get('/api/check-phone/:phone', async (req, res) => {
  const phone = req.params.phone;

  try {
    // Check if the phone number exists in the database
    const existingRecord = await Admission.findOne({ phone: phone });

    if (existingRecord) {
      return res.status(400).json({ message: "This phone number is already registered." });
    } else {
      return res.status(200).json({ message: "Phone number is available." });
    }
  } catch (err) {
    console.error("Error checking phone number:", err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Route to submit the admission application
app.post('/api/submit-application', async (req, res) => {
  const { name, phone, class: className, age } = req.body;

  try {
    const existingRecord = await Admission.findOne({ phone });

    if (existingRecord) {
      return res.status(400).json({ message: "This phone number is already registered." });
    }

    // Create a new admission record
    const newAdmission = new Admission({
      name,
      phone,
      class: className,
      age,
    });

    await newAdmission.save();
    res.status(200).send("Application submitted successfully.");
  } catch (err) {
    console.error("Error saving application:", err);
    res.status(500).json({ message: "Error submitting application", error: err.message });
  }
});

// Route to submit a contact message
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a new contact record
    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();
    res.status(200).send("Message sent successfully.");
  } catch (err) {
    console.error("Error saving contact message:", err);
    res.status(500).json({ message: "Error sending message", error: err.message });
  }
});

// Route to get all contact messages
app.get('/api/contacts', async (req, res) => {
  try {
    const allContacts = await Contact.find(); // Get all contact records from the database
    res.status(200).json(allContacts); // Send all contacts as a response
  } catch (err) {
    console.error("Error fetching contact messages:", err);
    res.status(500).json({ message: "Error fetching contact messages", error: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
