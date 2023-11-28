import "../css/header.css";
import ToggleMenu from "./toggleMenu";
const Header = () => {
    return (
        <div className="Top">
            <header>TP</header>
            <div className="Burger">
                <ToggleMenu />
            </div>
        </div>
    );
}

export default Header;