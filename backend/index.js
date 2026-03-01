const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/book',(req,res)=>{
    const userData = req.body;

console.log('New Booking Received:', userData);

res.status(200).json({message: 'Appointment booked successfully'});
});

app.get('/', (req, res) => {
  res.send('Hostel Glow Backend is Running!');
});

app.listen(PORT, () => {
  console.log(`Server is moving at http://localhost:${PORT}`);
});