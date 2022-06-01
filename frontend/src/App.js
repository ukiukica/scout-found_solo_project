import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import FilmLocations from "./components/FilmLocations";
import CreateFilmLocation from "./components/CreateFilmLocationForm/CreateFilmLocationForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path = '/filmLocations'>
            <FilmLocations />
          </Route>
          <Route exact path = '/filmLocations/new'>
            <CreateFilmLocation />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
