import "./RouteNotFound.css";
import pageNotFound from "../../../Assets/Images/404-status-code.png"

function RouteNotFound(): JSX.Element {
    return (
        <div className="RouteNotFound">

            <img src={pageNotFound} alt="" />
        </div>
    );
}

export default RouteNotFound;
