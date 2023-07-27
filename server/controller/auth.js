import User from "../model/user.js";
import jwt from "jsonwebtoken";

export const registration = async (req, res, next) => {
  const { name, surname, email, phoneNumber, password, confirmPassword } =
    req.body;

  const newUser = new User({
    name,
    surname,
    email,
    phoneNumber,
    password,
  });

  await newUser.save();
  res.json(req.body);
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email)
  const user = await User.findOne({ email, password });
  console.log(user)
  if (!user) {
    return res.json({ message: "логін або пароль неправильний" });
  }
  return res.json({
    name: user.name,
    surname: user.surname,
    email: user.email,
    phoneNumber: user.phoneNumber,
    token: jwt.sign(
      {
        name: user.name,
        surname: user.surname,
        email: user.email,
        phoneNumber: user.phoneNumber,
      },
      "Secret"
    ),
  });
};
