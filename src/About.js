import * as React from "react";

import "./About.css";
import "./App.css";
import logo from "./logo.svg";

function About() {
    return (
        <div className="About">
            <header className="About-header">
                <h2>
                    About us
                    <img src={logo} className="About-logo" alt="logo"></img>
                    <button
                    type="button"
                    className="App-socials Twitter"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href="/";
                    }}
                    >Home</button>
                    <hr className="App-divider"></hr>
                </h2>
                <br />
                <div className="About-something">
                    <p className="About-title">
                        Who are we?
                    </p>
                    <p>
                        We're a socialistic party, with the focus of making the rich richer, and the poor poorer. 
                    </p>
                    <p className="About-title">
                        Why choose us?
                    </p>
                    <p>
                        With highly complex tools we've found a way to filter out the worst of the worst criminals.
                        It builds upon a trust system, and advanced tools to detect acts of criminal behavior.
                        <br/>
                        With your help <i>we</i> can make this a better place for everyone.
                    </p>
                </div>
            </header>
        </div>
    );
};

export default About;