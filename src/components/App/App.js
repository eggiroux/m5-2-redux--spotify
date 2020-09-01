import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import ArtistRoute from "./ArtistRoute";
import GlobalStyles from "./GlobalStyles";

const DEFAULT_ARTIST_ID = "0U04xAocTetRnA7v3TYQ2i";

const App = () => {
  React.useEffect(() => {
    fetch("/spotify_access_token/")
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => {
        console.error(err);
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
