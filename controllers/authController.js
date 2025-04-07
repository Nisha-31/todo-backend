import { hash, compare } from 'bcryptjs';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken'; //  Fix import
import User from '../models/User.js';

const { sign } = jwt; //  Extract sign

export async function register(req, res) {
 //  Validation check
 const errors = validationResult(req);
 if (!errors.isEmpty()) {
   return res.status(400).json({ errors: errors.array() });
 }
  const { username, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    const hashedPassword = await hash(password, 10);
    user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

export async function login(req, res) {
  //  Validation check
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    
    if (!user){
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const isMatch = await compare(password, user.password);
   

    if (!isMatch){
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log(' Token created:', token);
    res.json({ token });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}
