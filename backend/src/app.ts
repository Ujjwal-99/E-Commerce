import express from "express";

// importing routes
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";

const port = 4000;

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api working with /api/v1");
});

// using Routes
app.use("/api/v1/user", userRoute);

app.use((error, req, res, next) => {});

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});
