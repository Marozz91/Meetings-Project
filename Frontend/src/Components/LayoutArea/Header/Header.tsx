import Menu from "../Menu/Menu";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <header className="Header">
            <h1>Meetings</h1>
            <Menu />
        </header>
    );
}

export default Header;
