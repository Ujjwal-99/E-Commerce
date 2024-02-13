import express from "express";
import {
  deleteUsers,
  getAllUsers,
  getUsers,
  newUser,
} from "../controllers/user";
import { adminOnly } from "../middlewares/auth";

const app = express.Router();

app.post("/new", newUser);

app.get("/all", adminOnly, getAllUsers);

app.route("/:id").get(getUsers).delete(adminOnly, deleteUsers);

export default app;
