const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const BasicEmployeeDetail = require('./models/basicEmployeeDetail');

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// POST request to add a new record
app.post('/records', async (req, res) => {
  try {
    const { first_name, last_name, email, position } = req.body;
    const record = await BasicEmployeeDetail.create({ first_name, last_name, email, position });
    res.status(201).json(record);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET request to fetch all records
app.get('/records', async (req, res) => {
  try {
    console.log('GET /records endpoint hit'); // Debug log
    const records = await BasicEmployeeDetail.findAll();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});