import express from "express";
import { corsMiddleware } from "./middleware/cors.js";
import { mediumRoutes } from "./routes/medium.routes.js";

const app = express();
const PORT = process.env.PORT || 4000;

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

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📝 Available endpoints:`);
  console.log(`   - GET /api/medium`);
  console.log(`   - GET /health`);
});
