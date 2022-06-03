import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function SplashPage() {
  const sessionUser = useSelector((state) => state.session?.user);

  if (sessionUser) return <Redirect to="/filmLocations" />;

    return (
        <h1>WELCOME</h1>
    )
}

export default SplashPage
