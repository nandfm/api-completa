import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import routes
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";

app.use("/", indexRouter);
app.use("/api/users", usersRouter);

//404
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

//Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status ?? 500).json({
    error: err.status ? err.message : "Internal Server Error",
  });
});

export default app;
