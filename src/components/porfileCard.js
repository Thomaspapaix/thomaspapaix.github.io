import React, { useEffect, useRef } from 'react';
import "../css/profileCard.css";
import Profile from '../images/Profile.png';
import Star from '../images/star.svg';

const ProfileCard = () => {
    const stars = [
        <img className='Star' src={Star} alt={""}/>,
        <img className='Star' src={Star} alt={""}/>,
        <img className='Star' src={Star} alt={""}/>,
        <img className='Star' src={Star} alt={""}/>,
        <img className='Star' src={Star} alt={""}/>,
    ];

    const cardRef = useRef(null);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const rotationAngle = scrollY * -0.008; // 3 degrés par unité de défilement
        cardRef.current.style.transform = `rotate(${rotationAngle}deg)`;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="Card" ref={cardRef}>
            <div className="ProfileElipse"/>
            <img className="ProfileImage" src={Profile} alt={""}/>
            <div className="ProfileName">
                <h3>Thomas PAPAIX</h3>
                <p>Etudiant 3eme anée Epitech</p>
                {stars}
            </div>
            <div className="ProfileText">
                <p>Je suis étudiant à Epitech Toulouse. J'aime voyager, je pratique le Muay Thai, et je m'intéresse aussi au domaine de la technologie.</p>
            </div>
        </div>
    );
}

export default ProfileCard;
