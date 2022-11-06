import express from 'express';
import path from 'path';
import ejs from 'ejs';

const port = 3001;
const photo = {
  id: 1,
  name: 'Photo Name',
  description: 'Photo description',
};
const app = express();

// Template engine

app.set('view engine', 'ejs');

// MIDDLEWARE

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add', (req, res) => {
  res.render('add');
});

app.listen(port, () => {
  console.log(`Server wurde http://localhost:${port} aufgeführt `);
});
