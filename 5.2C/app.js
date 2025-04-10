// app.js

const express = require('express');
const app = express(); // ← This line was missing in your original file
const studentController = require('./controllers/studentController');

const port = 3000;

app.get('/students', studentController.getStudents);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


