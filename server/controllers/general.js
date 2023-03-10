import User from "../models/User.js";

export const getUser= async (req, res) => {
   try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postUser= async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      city: req.body.city,
      phoneNumber: req.body.phoneNumber,
      rents: req.body.rents,
      credit: req.body.credit,
    })
    res.status(200).json(user);
 }catch (error) {
   res.status(404).json({ message: error.message });
 }
};

export const putUser= async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const updatedUser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,})
    res.status(200).json(updatedUser);
 } catch (error) {
   res.status(404).json({ message: error.message });
 }
};

export const deleteUser= async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    res.status(200).json({id: req.params.id});
 } catch (error) {
   res.status(404).json({ message: error.message });
 }
};