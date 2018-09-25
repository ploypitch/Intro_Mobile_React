const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Cors = require('cors');

const items = require('./routes/api/items');
const auth = require('./routes/api/auth');
// for Login-session
const session = require('express-session');

// For Upload Image from admin panal
const app = express();

//Cors Options
const corOptions = {
  credentials: true
};
// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(cookieParser());

// Database config
const db = require('./config/key').mongoURI;

// Connect Database for Items
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected...'))
  .catch(() => console.log('Cant Connect to MongoDB'));

app.use(Cors(corOptions));
app.use(express.static('./upload'));

// Use Route
app.use('/api/items', items);
app.use('/api/auth', auth);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server start on port ${port}`));
