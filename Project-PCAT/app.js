import express from 'express';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import path from 'path';
import ejs from 'ejs';
import fs from 'fs';
import methodOverride from 'method-override'
import Photo from './models/Photo.js';
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
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
  const photos = await Photo.find().sort('-dateCreated');
  res.render('index', {
    photos,
  });
});
app.get('/photos/:id', async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  res.render('photo', { photo });
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add', (req, res) => {
  res.render('add');
});
app.post('/photos', async (req, res) => {
  const uploadDir ='public/uploads'
  if (!fs.existsSync(uploadDir)) {
    fs.mkdir(uploadDir)
  }
  let uploadeImage = req.files.image;
  let uploadPath = __dirname + '/public/uploads/' + uploadeImage.name;
  uploadeImage.mv(uploadPath, async () => {
     await Photo.create({ ...req.body, image: '/uploads/' + uploadeImage.name });
     res.redirect('/');
   });
});
app.get('/photos/edit/:id',async (req,res)=>{
  const photo = await Photo.findOne({_id:req.params.id})
  res.render('edit',{photo})
})
app.put('/photos/:id',async (req, res) => {
  const photo = await Photo.findOne({ _id:req.params.id })
  photo.title = req.body.title
  photo.description=req.body.description
  photo.save()
  res.redirect(`/photos/${req.params.id}`)
});






app.listen(port, () => {
  console.log(`Server wurde http://localhost:${port} aufgeführt `);
});
