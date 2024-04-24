import { ChangeEvent, useEffect, useState } from "react";
import TeamModel from "../../../Models/TeamModel";
import notifyService from "../../../Services/NotifyService";
import MeetingModel from "../../../Models/MeetingModel";
import dataService from "../../../Services/DataService";
import MeetingCard from "../MeetingCard/MeetingCard";
import "./List.css";

function List(): JSX.Element {

    const [teams, setTeams] = useState<TeamModel[]>([]);
    const [meetings, setMeetings] = useState<MeetingModel[]>([]);


    useEffect(() => {

        dataService.getAllTeams()
            .then(dbTeams => setTeams(dbTeams))
            .catch(err => notifyService.error(err));
    }, []);


    const loadMeetings = async (e: ChangeEvent<HTMLSelectElement>) => {

        const id = +e.target.value;

        try {
            const dbMeetings = await dataService.getAllMeetingsByTeams(id);
            setMeetings(dbMeetings);

        } catch (error) {
            notifyService.error(error);
        }

    }


    const deleteMeeting = async (meetingId: number) => {

        try {

            await dataService.deleteMeeting(meetingId);
            setMeetings(meetings => meetings.filter(m => m.id !== meetingId));
            notifyService.success("Meeting has been deleted successfully");

        } catch (error) {
            notifyService.error(error);
        }
    }


    return (
        <div className="List">

            <div className="select-wrap">

                <select onChange={loadMeetings}>
                    <option value="">Please Select Team: </option>
                    {teams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}

                </select>
            </div>

            <div className="divCard">
                {meetings.map(m => <MeetingCard key={m.id} meeting={m} deleteMeeting={deleteMeeting} />)}
            </div>

        </div>
    );


}

export default List;
