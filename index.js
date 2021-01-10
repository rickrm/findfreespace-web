const express = require('express')
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const buildingRoutes = require('./routes/buildings');
const cameraRoutes = require('./routes/cameras');
const bodyParser = require('body-parser');

require('dotenv/config');


// MIDDLEWARE
app.use(bodyParser.json());
app.use('/buildings', buildingRoutes);
app.use('/rooms', cameraRoutes);

app.get('/', (req, res) => {
  res.send('Poggers!')
})

mongoose.connect(process.env.DB_KEY, () => { console.log('Database is connected!')});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});