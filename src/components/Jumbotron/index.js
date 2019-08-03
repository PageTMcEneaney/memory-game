import React from "react";
import "./style.css";

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid mt-5">
            <div className="container">
                <h1 className="display-4">Bookworm!</h1>
                <p className="lead">Test your memory! Can you click all 12 books without any duplicates?</p>
            </div>
        </div>
    );
};

export default Jumbotron;