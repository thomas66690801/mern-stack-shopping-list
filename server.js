const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const items = require('./routes/api/items');

const app = express();

//bodyParser Middleware---changed to express.json()
app.use(express.json());

//DB config -- pointint to the keys in config folder
const db = require('./config/keys').mongoURI;


//connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

//Use Routes
app.use('/api/items', items);


  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`server started on port ${port}`));
