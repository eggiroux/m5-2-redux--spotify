import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from "./Header";
import Tags from "./Tags";

import {
  artistIdRequest,
  artistIdReceive,
  artistIdFailure,
} from "../../../actions";

import { fetchArtistProfile } from "../../../helpers/api-helpers";

const ArtistRoute = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.token);
  const { currentArtist } = useSelector((state) => state.artists);

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

  return (
    <Wrapper>
      <Header />
      <Tags />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 40px;
  background-color: black;
  height: 100vh;
`;

export default ArtistRoute;
