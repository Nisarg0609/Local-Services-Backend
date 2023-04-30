import express from 'express'
import {postService} from '../controllers/serviceController.js'

const router = express.Router()

router.post('/postService',postService)

export default router