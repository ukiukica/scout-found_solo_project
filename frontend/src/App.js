import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useParams } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import FilmLocations from "./components/FilmLocations";
import CreateFilmLocation from "./components/CreateFilmLocationForm/CreateFilmLocationForm";
import { getFilmLocations } from './store/filmLocations'
import SingleFilmLocation from "./components/SingleFilmLocation/SingleFilmLocation"
import EditFilmLocation from "./components/EditFilmLocationForm/EditFilmLocation";
import { getReviews } from "./store/reviews";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
      dispatch(getFilmLocations())
  }, [dispatch])

  useEffect(() => {
    dispatch(getReviews())
  }, [dispatch])

  const filmLocations = useSelector(state => state.filmLocationsReducer)
  // console.log(filmLocations)
  const reviews = useSelector(state => state.reviewsReducer)



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
          <Route path = '/filmLocations/:filmLocationId/edit'>
            <EditFilmLocation />
          </Route>
          <Route path = '/filmLocations/:filmLocationId'>
            <SingleFilmLocation />
          </Route>
          {/* <Route>
            <CreateReview />
          </Route> */}
        </Switch>
      )}
    </>
  );
}

export default App;
