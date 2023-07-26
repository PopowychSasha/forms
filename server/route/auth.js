import { Router } from "express";
import { login, registration } from "../controller/auth.js";

const routes = Router();

routes.post("/user/registration", registration);
routes.post("/user/login", login);

export default routes;
/* user xlmNgnAQ9svaU03X */