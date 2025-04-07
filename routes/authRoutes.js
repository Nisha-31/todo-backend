// routes/authRoutes.js
import { body } from 'express-validator';
import { Router } from 'express';
const router = Router();
import { register, login } from '../controllers/authController.js';

// Registration route: POST /api/register
//Registration validation
router.post('/register' ,[
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], register);

// Login route: POST /api/login
// Login validation
router.post('/login', [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ], login);

export default router;
