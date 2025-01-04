import express from 'express'
import { fetch } from '../controller/userController.js'

const router=express.Router();

router.get('/fetch',fetch);

export default router;