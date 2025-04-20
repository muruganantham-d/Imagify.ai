import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

const PORT = process.env.PORT || 4000;
const app = express();

const corsOptions = {
  origin: "https://imagify-frontend-five.vercel.app", // Replace with your frontend URL
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));
await connectDB();

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);
app.get("/", (req, res) => res.send("API Working"));

app.listen(PORT, () => console.log("Server running on port " + PORT));

// To start the server : npm run start
// To start the server automatically when any changes are made  "server": "nodemon server.js" : npm run server
