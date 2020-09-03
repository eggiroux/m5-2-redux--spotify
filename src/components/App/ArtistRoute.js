import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  artistIdRequest,
  artistIdReceive,
  artistIdFailure,
} from "../../actions";

import { fetchArtistProfile } from "../../helpers/api-helpers";

const ArtistRoute = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.token);
  const { status, currentArtist } = useSelector((state) => state.artists);

  console.log(currentArtist);

  const { artistId } = useParams();

  React.useEffect(() => {
    if (!accessToken) {
      return;
    }
    dispatch(artistIdRequest());

    fetchArtistProfile(accessToken, artistId)
      .then((artist) => dispatch(artistIdReceive(artist)))
      .catch((error) => {
        dispatch(artistIdFailure(error));
      });
  }, [accessToken]);

  if (!currentArtist) {
    return <div>Loading...</div>;
  }

  return <div>{currentArtist.name}</div>;
};

export default ArtistRoute;
