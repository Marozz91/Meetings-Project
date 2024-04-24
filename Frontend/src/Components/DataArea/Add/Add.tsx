import TeamModel from "../../../Models/TeamModel";
import MeetingModel from "../../../Models/MeetingModel";
import dataService from "../../../Services/DataService";
import notifyService from "../../../Services/NotifyService";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Add.css";

function Add(): JSX.Element {

    const [teams, setTeams] = useState<TeamModel[]>([]);
    const { register, handleSubmit, formState } = useForm<MeetingModel>();
    const navigate = useNavigate();


    useEffect(() => {
        dataService.getAllTeams()
            .then(dbTeams => setTeams(dbTeams))
            .catch(err => notifyService.error(err))
    }, []);


    const add = async (meeting: MeetingModel) => {

        if (new Date(meeting.startTime).getTime() > new Date(meeting.endTime).getTime()) {

            return notifyService.error("Start Date should be before End Date!");
        }

        try {
            await dataService.addMeeting(meeting);
            notifyService.success("Meeting has been Added Successfully!");
            navigate("/list");
        } catch (error) {
            notifyService.error(error);
        }
    }


    return (
        <div className="Add">

            <h2>Add Meeting</h2>

            <form onSubmit={handleSubmit(add)}>

                <label className="form-control">
                    <span>Select Team: </span>
                    <select {...register("teamId", MeetingModel.teamValidation)}>
                        <option value="">Please Select Team:</option>
                        {teams.map(t => <option key={t.id} value={t.id}>{t.name} </option>)}
                    </select>
                    <span className="err">{formState.errors.teamId?.message}</span>
                </label>

                <label className="form-control">
                    <span>Start Time:</span>
                    <input type="datetime-local"{...register("startTime", MeetingModel.startTimeValidation)} />
                    <span className="err">{formState.errors.startTime?.message}</span>

                </label>

                <label className="form-control">
                    <span>End Time:</span>
                    <input type="datetime-local" {...register("endTime", MeetingModel.endTimeValidation)} />
                    <span className="err">{formState.errors.endTime?.message}</span>

                </label>

                <label className="form-control">
                    <span>Description:</span>
                    <input type="text" {...register("description", MeetingModel.descriptionValidation)} />
                    <span className="err">{formState.errors.description?.message}</span>

                </label>

                <label className="form-control">
                    <span>Room:</span>
                    <input type="text" {...register("room", MeetingModel.roomValidation)} />
                    <span className="err">{formState.errors.room?.message}</span>

                </label>

                <button>Add</button>

            </form>

        </div>
    );


}

export default Add;
