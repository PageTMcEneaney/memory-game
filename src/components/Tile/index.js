import React from "react";
import "./style.css";


function Tile(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} className="bookImg" />
            </div>
        {/* <span onClick={() => props.removeTile(props.id)} className="remove">𝘅</span> */}
        </div>
    );
};

export default Tile;