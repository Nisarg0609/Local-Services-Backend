import express from 'express'
import {postCategory,getCategory} from '../controllers/categoryController.js'

const router = express.Router()

router.post('/postCategory',postCategory)
router.get('/getCategory',getCategory)

export default router