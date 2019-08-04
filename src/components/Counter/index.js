import React from "react";
import "./style.css";


function Counter(props) {
    return(
        <nav className="navbar fixed-top navbar-light bg-light">
            <div className="container">
                <div className="float-left">
                    <h2>Bookworm</h2>
                </div>
                <div className="float-right">
                    <h3>Score: {props.current} | High Score: {props.high}</h3>
                </div>
            </div>
        </nav>
        )
    }


export default Counter;