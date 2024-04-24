import "./Home.css";
import teamMeeting from "../../../Assets/Images/team-meeting.jpg"

function Home(): JSX.Element {
    return (
        <div className="Home">
            <p> Welcome to our meeting schedules! </p>
            <img src={teamMeeting} />
        </div>
    );
}

export default Home;
