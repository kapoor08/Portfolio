import { VercelRequest, VercelResponse } from "@vercel/node";
import { MediumService } from "../server/services/medium.service";

// Enable CORS
const cors = (req: VercelRequest, res: VercelResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return true;
  }
  return false;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (cors(req, res)) return;

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const mediumService = new MediumService();
    const result = await mediumService.fetchMediumPosts();
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching Medium feed:", error);
    res.status(500).json({
      statusCode: 500,
      status: "error",
      message: "Failed to fetch Medium articles",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
