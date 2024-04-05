import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import router from "./routes";

// Create Express server
const app = express(); // New express instance
const port = process.env.PORT || 3000; // Port number

// Express configuration
app.use(cors()); // Enable CORS
app.use(helmet()); // Enable Helmet
app.use(morgan("dev")); // Enable Morgan

// Define Express routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Use routes
app.use("/", router);

// Start Express server
app.listen(() => {
  console.log(`Server started at http://localhost:${port}`);
});

// Export Express app
export default app;
