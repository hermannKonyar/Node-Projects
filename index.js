const express = require('express');
const path = require('path');
const mysql = require('mysql2');

const app = express();

const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');
const config = require('./config');

let db =mysql.createConnection(config.db);

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to the database');
});

app.set('view engine', 'ejs');

app.use('/libs',express.static(path.join(__dirname, 'node_modules')));
app.use('/static',express.static(path.join(__dirname, 'public')));

app.use(adminRoutes);
app.use(userRoutes);


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
}
);