import Photo from '../models/Photo.js'
import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const getAllPhotos = async (req, res) => {
        const photos = await Photo.find().sort('-dateCreated');
        res.render('index', {
          photos,
        });
}

export const getPhoto =  async (req, res) => {
        const photo = await Photo.findById(req.params.id);
        res.render('photo', { photo });
      }
export const createPhoto =  async (req, res) => {
        const uploadDir ='public/uploads'
        if (!fs.existsSync(uploadDir)) {
          fs.mkdir(uploadDir)
        }
        let uploadeImage = req.files.image;
        let uploadPath = __dirname + '/../public/uploads/' + uploadeImage.name;
        uploadeImage.mv(uploadPath, async () => {
           await Photo.create({ ...req.body, image: '/uploads/' + uploadeImage.name });
           res.redirect('/');
         });
}   
export const getEditPhoto =async (req,res)=>{
        const photo = await Photo.findOne({_id:req.params.id})
        res.render('edit',{photo})
} 

export const editPhoto = async (req, res) => {
        const photo = await Photo.findOne({ _id:req.params.id })
        photo.title = req.body.title
        photo.description=req.body.description
        photo.save()
        res.redirect(`/photos/${req.params.id}`)
      }

export const deletePhoto = async (req, res) => {
        const photo = await Photo.findOne({ _id: req.params.id });
        let deletedImage = __dirname + '/../public' + photo.image;
        fs.unlinkSync(deletedImage);
        await Photo.findByIdAndRemove(req.params.id);
        res.redirect('/');
      }      

