import Joi from "joi";
import { ValidationError } from "./client-errors";


class MeetingModel {
    public id: number;
    public teamId: number;
    public startTime: string;
    public endTime: string;
    public description: string;
    public room: string;

    public constructor(meeting: MeetingModel) {
        this.id = meeting.id;
        this.teamId = meeting.teamId;
        this.startTime = meeting.startTime;
        this.endTime = meeting.endTime;
        this.description = meeting.description;
        this.room = meeting.room;
    }

    // Validation function:
    public validate(): void {
        const result = MeetingModel.ValidationSchema.validate(this);
        if (result.error) throw new ValidationError(result.error.message);
    }

    // Validation Schema:
    public static ValidationSchema = Joi.object({
        id: Joi.number().integer().positive().optional(),
        teamId: Joi.number().integer().positive().required(),
        startTime: Joi.date().required(),
        endTime: Joi.date().required(),
        description: Joi.string().min(2).max(150).required(),
        room: Joi.string().required(),
    });


}

export default MeetingModel;