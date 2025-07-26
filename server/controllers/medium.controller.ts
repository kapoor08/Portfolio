import { Request, Response } from "express";
import { MediumService } from "../services/medium.service.js";
import { ErrorResponse } from "../types/medium.types.js";

export class MediumController {
  private mediumService: MediumService;

  constructor() {
    this.mediumService = new MediumService();
  }

  async getMediumPosts(req: Request, res: Response): Promise<void> {
    try {
      const result = await this.mediumService.fetchMediumPosts();
      res.json(result);
    } catch (error) {
      console.error("Error fetching Medium feed:", error);

      const errorResponse: ErrorResponse = {
        statusCode: 500,
        status: "error",
        message: "Failed to fetch Medium articles",
        error: error instanceof Error ? error.message : "Unknown error",
      };

      res.status(500).json(errorResponse);
    }
  }
}
