import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import './SplashPage.css'

function SplashPage() {
  const sessionUser = useSelector((state) => state.session?.user);

  if (sessionUser) return <Redirect to="/filmLocations" />;

    return (
      <div id='splash-body'>
        <img id='splash-img' src='/images/projection_studio.jpg' />
        <div id='text-and-button'>
          <h2 id='splash-logline'>Find your film set.</h2>
          <Link to="/filmLocations">
          <button className='user-button' >Browse Locations</button>
          </Link>
        </div>
      </div>
    )
}

export default SplashPage
