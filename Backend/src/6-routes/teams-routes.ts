import express, { Request, Response, NextFunction } from "express";
import dataService from "../5-services/data-service";

const router = express.Router();

// GET http://localhost:4000/api/teams
router.get("/teams", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const teams = await dataService.getAllTeams();
        response.json(teams);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;

