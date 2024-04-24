
import express, { Request, Response, NextFunction } from "express";
import MeetingModel from "../2-models/meeting-model";
import dataService from "../5-services/data-service";


const router = express.Router();

// GET http://localhost:4000/api/meetings-by-team/:teamId
router.get("/meetings-by-team/:teamId([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const teamId = +request.params.teamId;
        const data = await dataService.getAllMeetingsByTeams(teamId);
        response.json(data);
    }
    catch (err: any) {
        next(err);
    }
});

// POST http://localhost:4000/api/meetings
router.post("/meetings", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const meeting = new MeetingModel(request.body);
        const addedMeeting = await dataService.addMeeting(meeting);
        response.status(201).json(addedMeeting);
    }
    catch (err: any) {
        next(err);
    }
});

// DELETE http://localhost:4000/api/meetings/:id
router.delete("/meetings/:id([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const id = +request.params.id;
        await dataService.deleteMeeting(id);
        response.sendStatus(204);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;