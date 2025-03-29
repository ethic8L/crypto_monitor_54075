import express from 'express';
import createUser from '../controllers/signup.js';

const router = express.Router();

router.post('/register', createUser.createUser);

export default router;