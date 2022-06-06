import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import './About.css'

function About() {
    return (
        <div id='about-div'>
            <Link id='about-link' to='/filmLocations'>
            <button className='user-button about-page'>Back to Browsing</button>
            </Link>
            <h1 id='about-h1'>About Developer</h1>
            <div id='img-bio-div'>
                <img id='dev-pic' src='/images/ukiweb1.jpg' />
                <p id='about-p'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices, nulla quis facilisis volutpat, velit quam pharetra urna, at tempus purus ante quis lacus. Nam egestas metus mi, non posuere justo iaculis quis. Integer varius accumsan fringilla. Etiam at ante erat. Morbi dignissim tempus tincidunt. Aliquam erat volutpat. Praesent sodales sit amet ante nec pulvinar."</p>
            </div>
            <h3 id='about-h3'>Find Uki on</h3>
            <div id='social-links'>
                <a href='https://github.com/ukiukica'>
                    <img id='github-logo' src='/images/GitHub-Emblem.png' />
                </a>
                <a href='https://www.linkedin.com/in/ukipavlovic/'>
                    <img id='linkedin-logo' src='/images/LinkedIn_logo_initials.png' />
                </a>
            </div>
        </div>
    )
}

export default About
