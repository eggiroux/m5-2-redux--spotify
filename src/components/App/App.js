import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { useDispatch } from "react-redux";

import ArtistRoute from "./ArtistRoute";
import GlobalStyles from "./GlobalStyles";
import {
  requestAccessToken,
  receiveAccessTokenError,
  receiveAccessToken,
} from "../../actions";

const DEFAULT_ARTIST_ID = "0U04xAocTetRnA7v3TYQ2i";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(requestAccessToken());

    fetch("/spotify_access_token/")
      .then((res) => res.json())
      .then((json) => {
        dispatch(receiveAccessToken(json.access_token));
      })
      .catch((err) => {
        console.error(err);
        dispatch(receiveAccessTokenError());
      });
  }, []);

  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path={"/artists/:id"}>
          <ArtistRoute />
        </Route>
        <Route exact={true} path={"/"}>
          <Redirect to={{ pathname: `/artists/${DEFAULT_ARTIST_ID}` }} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
