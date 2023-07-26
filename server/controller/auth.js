import User from "../model/user.js";

export const registration = async (req, res, next) => {
    const newUser = new User({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password,
    });
  
    await newUser.save();
    res.json(req.body);
  };

export const login = (req, res, next) => {
  res.json(req.body);
};
