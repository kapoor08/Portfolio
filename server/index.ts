import express from "express";
import { corsMiddleware } from "./middleware/cors.js";
import { mediumRoutes } from "./routes/medium.routes.js";

const app = express();

// Middleware
app.use(corsMiddleware);
app.use(express.json());

// Routes
app.use("/api", mediumRoutes);

// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    service: "Medium RSS API",
  });
});

// For Vercel deployment
if (process.env.NODE_ENV === "development") {
  // Start server locally
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

// Export the Express app for Vercel or other platforms
export default app;
