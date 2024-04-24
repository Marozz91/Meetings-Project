import MeetingModel from "../../../Models/MeetingModel";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import "./MeetingCard.css";

interface MeetingCardProps {
    meeting: MeetingModel,
    deleteMeeting: (id: number) => void
}

function MeetingCard(props: MeetingCardProps): JSX.Element {

    const { meeting, deleteMeeting } = props;

    const startTime = new Date(meeting.startTime).toLocaleString();
    const endTime = new Date(meeting.endTime).toLocaleString();
    const duration = calculateDuration(meeting.startTime, meeting.endTime);

    return (

        <div className="MeetingCard word-control card5" >

            <span onClick={() => deleteMeeting(meeting.id)}><HighlightOffIcon /></span>

            <div className="card5-content">
                <p><b>Room:</b> {meeting.room}</p>
                <p><b>Description: </b> {meeting.description}</p>
                <p><b>Start time:</b> {startTime}</p>
                <p><b>End time:</b> {endTime}</p>
                <p><b>Duration:</b> {duration}</p>

            </div>

        </div >
    );
}


function calculateDuration(startTime: string, endTime: string): string {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const durationInMinutes = (end.getTime() - start.getTime()) / (1000 * 60);
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;
    return `${hours} hours ${minutes} minutes`;
}

export default MeetingCard;
