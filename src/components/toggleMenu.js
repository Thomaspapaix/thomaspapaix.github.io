import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import '../css/toggleMenu.css';

function MenuDeroulant() {
    const [menuOuvert, setMenuOuvert] = useState(false);
    const [fermerMenu, setFermerMenu] = useState(false);

    const optionsMenu = [
        "Projects",
        "Expereince",
        "Contact",
    ];

    const toggleMenu = () => {
        if (menuOuvert) {
            setFermerMenu(true);
            setTimeout(() => {
                setMenuOuvert(false);
                setFermerMenu(false);
            }, 500);
        } else {
            setMenuOuvert(true);
        }
    };

    return (
        <div className="Toggle">
            <button onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} color={"#f9f4da"}/>
            </button>
            {menuOuvert && (
                <div className="MenuNav">
                    <ul className={fermerMenu ? "fadeOut" : "fadeIn"}>
                        {optionsMenu.map((option, index) => (
                            <li key={index}>{option}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default MenuDeroulant;
