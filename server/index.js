import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import authRoutes from "./route/auth.js";
import { passport } from "./authentication/passport.js";
import "./db-connector.js";

const app = express();

app.use(express.json());
app.use(cors({ credentials: true }));
app.use(passport.initialize());

app.use("/api", authRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is started on PORT ${process.env.APP_PORT}`);
});
