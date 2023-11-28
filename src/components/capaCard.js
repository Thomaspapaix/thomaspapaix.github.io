import "../css/capaCard.css"

const CapaCard= ({color, titles, content, logo}) => {
    return (
        <div className="Squarre" style={{backgroundColor: color}}>
            <img src={logo} alt={""} className="Logo"/>
            <div className="CapaName">
                <p style={{color: 'black', fontSize: "1rem", textAlign: "left", paddingLeft: "1rem"}}>{titles}</p>
            </div>
            <div className="CapaContent">
                <p style={{color: 'black', fontSize: "1rem", textAlign: "left", paddingLeft: "1rem"}}>{content}</p>
            </div>
        </div>
    );
}

export default CapaCard;