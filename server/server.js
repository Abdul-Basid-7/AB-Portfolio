import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import projectRoutes from "./routes/projectRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import githubRoutes from "./routes/githubRoutes.js";

dotenv.config();

connectDB();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  process.env.CLIENT_URL,
];

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.CLIENT_URL,
    ],

    credentials: true,
  })
);


app.use(express.json({
  limit: "10mb",
}));

app.use(express.urlencoded({
  extended: true,
  limit: "10mb",
}));

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/github", githubRoutes);
app.get("/", (req, res) => {
  res.send("Portfolio API Running");
});

const PORT = process.env.PORT || 5000;

// GLOBAL ERROR HANDLER
app.use(
  (err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
      message:
        err.message ||
        "Internal Server Error",
    });
  }
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});