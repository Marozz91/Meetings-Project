import { OkPacket } from "mysql";
import { ResourceNotFoundError } from "../2-models/client-errors";
import MeetingModel from "../2-models/meeting-model";
import TeamModel from "../2-models/team-model";
import dal from "../4-utils/dal";


async function getAllTeams(): Promise<TeamModel[]> {
    const sql = `SELECT * FROM teams`;
    const teams = await dal.execute(sql);
    return teams;
}

async function getAllMeetingsByTeams(teamId: number): Promise<MeetingModel[]> {

    const sql = `SELECT meetings.id,
    teamId,
    DATE_FORMAT(startTime, '%Y-%m-%d %T') AS startTime,
    DATE_FORMAT(endTime, '%Y-%m-%d %T') AS endTime,
    description,
    room,
    name         
    FROM meetings 
    JOIN teams 
    ON meetings.teamId = teams.id
    WHERE meetings.teamId = ?`;

    const teams = await dal.execute(sql, [teamId]);
    return teams;
}

async function addMeeting(meeting: MeetingModel): Promise<MeetingModel> {

    meeting.validate();

    const sql = `INSERT INTO meetings VALUES(DEFAULT,?,?,?,?,?)`;
    const result: OkPacket = await dal.execute(sql, [meeting.teamId, meeting.startTime, meeting.endTime, meeting.description, meeting.room]);
    meeting.id = result.insertId;
    return meeting;
}

async function deleteMeeting(meetingId: number): Promise<void> {

    const sql = `DELETE FROM meetings WHERE id = ?`;
    const result: OkPacket = await dal.execute(sql, [meetingId]);
    if (!result.affectedRows) throw new ResourceNotFoundError(meetingId);
}

export default {
    getAllTeams,
    getAllMeetingsByTeams,
    addMeeting,
    deleteMeeting
};