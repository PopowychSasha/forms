import { Router } from "express";
import { getUserInfo, login, registration } from "../controller/auth.js";
import { passport } from "../authentication/passport.js";
import { check } from "express-validator";

const routes = Router();

routes.post(
  "/user/registration",
  [
    check("name")
      .isString()
      .isLength({ min: 3, max: 20 })
      .withMessage("must have a minimum of 3 and a maximum of 20 characters"),
    check("surname")
      .isString()
      .isLength({ min: 3, max: 20 })
      .withMessage("must have a minimum of 3 and a maximum of 20 characters"),
    check("email").isEmail().withMessage("does not match the template"),
    check("phoneNumber")
      .matches(/^(\+380|380|\b0)9\d{8}$/)
      .withMessage("Невірний формат номеру телефону"),
    check("password")
      .isLength({ min: 8 })
      .withMessage("password must be stronger"),
    check("confirmPassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("does not match the password field");
      }
      return true;
    }),
  ],
  registration
);

routes.post("/user/login", login);

routes.get(
  "/user",
  passport.authenticate("jwt", { session: false }),
  getUserInfo
);

export default routes;
