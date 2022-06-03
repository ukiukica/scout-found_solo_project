import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";

function SplashPage() {
  const sessionUser = useSelector((state) => state.session?.user);

  if (sessionUser) return <Redirect to="/filmLocations" />;

    return (
        <>
        <h2>Find your film set.</h2>
        <Link to="/filmLocations">
        <button>Browse Locations</button>
        </Link>
        </>
    )
}

export default SplashPage
