import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar fixed-top">
            <div className="container">
                <span class="navbar-brand mb-0 h1">{props.title}</span>
                <span class="navbar-brand mb-0 h1">{props.message}</span>
                <span class="navbar-brand mb-0 h1">Score: {props.score} Best Score: {props.bestScore}</span>

  </div>
</nav >
    );
}

export default Navbar;