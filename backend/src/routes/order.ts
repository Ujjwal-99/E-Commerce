import express from "express";
import { adminOnly } from "../middlewares/auth";
import { newOrder } from "../controllers/order";

const app = express.Router();

app.post("/new", newOrder);

export default app;
