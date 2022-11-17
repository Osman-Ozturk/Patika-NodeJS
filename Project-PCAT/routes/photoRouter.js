import express from 'express'
import {getAllPhotos,getPhoto,createPhoto,getEditPhoto,editPhoto,deletePhoto} from '../controllers/photoController.js' 

const router = express.Router()


router.route('/').get(getAllPhotos)
router.route('/photos').get(getPhoto).post(createPhoto).delete(deletePhoto).put(editPhoto)
router.route('/photos/edit').get(getEditPhoto)

export default router;