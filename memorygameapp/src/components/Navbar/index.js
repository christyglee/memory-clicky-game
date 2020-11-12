import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <span class="navbar-brand h1">{props.title}</span>
                <span class="navbar-brand h1">{props.message}</span>
                <span class="navbar-brand h1">Score: {props.score} Top Score: {props.bestScore}</span>

  </div>
</nav >
    );
}

export default Navbar;