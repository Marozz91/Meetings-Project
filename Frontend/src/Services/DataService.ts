import axios from "axios";
import appConfig from "../Utils/Config";
import MeetingModel from "../Models/MeetingModel";
import TeamModel from "../Models/TeamModel";

class DataService {

    // Get all Teams:
    public async getAllTeams(): Promise<TeamModel[]> {

        const response = await axios.get<TeamModel[]>(appConfig.teamsUrl);
        const teams = response.data;
        return teams;

    }

    // Get Meetings By Team:
    public async getAllMeetingsByTeams(teamId: number): Promise<MeetingModel[]> {

        const response = await axios.get<MeetingModel[]>(appConfig.meetingsByTeamUrl + teamId);
        const meetings = response.data;
        return meetings;

    }

    // Add Meeting:
    public async addMeeting(meeting: MeetingModel): Promise<MeetingModel> {

        const response = await axios.post<MeetingModel>(appConfig.meetingsUrl, meeting);
        const addedMeeting = response.data;
        return addedMeeting;

    }


    // Delete Meeting
    public async deleteMeeting(id: number): Promise<void> {

        await axios.delete<void>(appConfig.meetingsUrl + id);
    }

}

const dataService = new DataService();
export default dataService;