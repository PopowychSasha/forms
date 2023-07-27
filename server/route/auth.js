import { Router } from "express";
import { getUserInfo, login, registration } from "../controller/auth.js";
import { passport } from "../authentication/passport.js";

const routes = Router();

routes.post("/user/registration", registration);
routes.post("/user/login", login);
routes.get(
  "/user",
  passport.authenticate("jwt", { session: false }),
  getUserInfo
);

export default routes;
