import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const registerUser= async (req, res) => {
    try {

      const {name,/*email,*/password} = req.body
      if (!name || /*!email ||*/ !password) {
        res.status(400).json({ message: "Please add all fields" });
      }
      // Check if user exists
      const userExists = await User.findOne({ email })
      if (userExists) {
        res.status(400).json({ message: "User already exists" });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)

      // Create user
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      })

      if(user) {
        res.status(201).json({
          _id: user.id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
        })
      } else {
        res.status(400).json({message:"Invalid user data"})
      }

   } catch (error) {
    //res.status(404).json({ message: error.message });
   }
 };

export const loginUser= async (req, res) => {
    try {
      const { email, password } = req.body

      // Check for user email
      const user = await User.findOne({ email })
    
      if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
          _id: user.id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
        })
      }else {
        res.status(400).json({message:"Invalid credentials"})
      }
   } catch (error) {
     //res.status(400).json({ message: error.message });
   }
 };

export const getMe= async (req, res) => {
    try {
     res.status(200).json(req.user);
   } catch (error) {
     res.status(404).json({ message: error.message });
   }
 };

 // Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}