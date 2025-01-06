import express from 'express';
import { fetch, create, update, deleteuser, findById } from '../controller/userController.js';

const router = express.Router();

// Routes
router.get('/fetch', fetch); // Fetch all users
router.post('/create', create); // Create a user
router.put('/update/:email', update); // Update a user
router.delete('/delete/:email', deleteuser); // Delete a user
router.get('/find/:email', findById); // Find a user by ID

export default router;
