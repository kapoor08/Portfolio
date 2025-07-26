import cors from "cors";

export const corsMiddleware = cors({
  origin:
    process.env.NODE_ENV === "production"
      ? ["https://yourdomain.com"]
      : ["http://localhost:3000", "http://localhost:5173"],
  credentials: true,
});
