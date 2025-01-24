import express from 'express';
import { registerUser } from '../controllers/registerController';
import { loginUser } from '../controllers/loginController';

const router = express.Router();

// Rekisteröinti
router.post('/register', registerUser);

// Kirjautuminen
router.post('/login', loginUser);

export default router;
