import User from '../model/user.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { validationResult } from 'express-validator'

export const registration = async (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { name, surname, email, phoneNumber, password } =
    req.body

  try {
    let user = await User.findOne({ email })
    if (user) throw new Error('користувач з цим email вже зареєстрований')

    user = await User.findOne({ phoneNumber })
    if (user) throw new Error('користувач з цим телефоном вже зареєстрований')
  } catch (err) {
    return next(err)
  }
  const newUser = new User({
    name,
    surname,
    email,
    phoneNumber,
    password: await bcrypt.hash(password, 12),
  })

  await newUser.save()
  res.status(201).json({})
}

export const login = async (req, res, next) => {
  const { email, password } = req.body
  let user = undefined
  try {
    user = await User.findOne({ email })

    if (!user) {
      throw new Error('логін або пароль неправильний')
    }
    if (!(await bcrypt.compare(password, user.password))) {
      throw new Error('логін або пароль неправильний')
    }
  } catch (err) {
    return next(err)
  }

  return res.json({
    id: user._id,
    name: user.name,
    surname: user.surname,
    email: user.email,
    phoneNumber: user.phoneNumber,
    token: jwt.sign(
      {
        id: user._id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        phoneNumber: user.phoneNumber,
      },
      'Secret',
    ),
  })
}

export const getUserInfo = async (req, res, next) => {
  const user = await User.findById(req.user.id)

  return res.json({
    id: user._id,
    name: user.name,
    surname: user.surname,
    email: user.email,
    phoneNumber: user.phoneNumber,
    token: jwt.sign(
      {
        id: user._id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        phoneNumber: user.phoneNumber,
      },
      'Secret',
    ),
  })
}
