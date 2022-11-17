import express from 'express';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import path from 'path';
import ejs from 'ejs';
import fs from 'fs';
//import photoRouter from './routes/photoRouter.js'
import {getAllPhotos,getPhoto,createPhoto,getEditPhoto,editPhoto,deletePhoto} from './controllers/photoController.js' 

import methodOverride from 'method-override'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = 3001;
const photo = {
  id: 1,
  name: 'Photo Name',
  description: 'Photo description',
};
const app = express();

// connect DB
mongoose.connect('mongodb://localhost/pcat-test-db');

// Template engine

app.set('view engine', 'ejs');

// MIDDLEWARE

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(methodOverride('_method',{
  methods:['POST','GET']
}))

app.get('/',getAllPhotos);
app.get('/photos/:id',getPhoto);
app.post('/photos',createPhoto );
app.get('/photos/edit/:id',getEditPhoto)
app.put('/photos/:id',editPhoto);
app.delete('/photos/:id', deletePhoto);

//app.use('/',photoRouter)


app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add', (req, res) => {
  res.render('add');
});







app.listen(port, () => {
  console.log(`Server wurde http://localhost:${port} aufgeführt `);
});
