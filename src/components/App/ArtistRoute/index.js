import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from "./Header";
import Tags from "./Tags";
import TopTracks from "./TopTracks";
import FullScreenSpinner from "../FullScreenSpinner";

import {
  artistAllInfoReceive,
  requestAllArtistInfo,
  receiveAllArtistInfoFailure,
} from "../../../actions";

import {
  fetchArtistProfile,
  fetchArtistTopTracks,
} from "../../../helpers/api-helpers";

const ArtistRoute = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.token);
  const { status } = useSelector((state) => state.artists);

  const { artistId } = useParams();

  React.useEffect(() => {
    if (!accessToken) {
      return;
    }

    dispatch(requestAllArtistInfo());

    const fetchArtist = fetchArtistProfile(accessToken, artistId);
    const fetchTopTracks = fetchArtistTopTracks(accessToken, artistId);

    Promise.all([fetchArtist, fetchTopTracks])
      .then(([artist, topTracks]) => {
        dispatch(artistAllInfoReceive(artist, topTracks));

        //console.log(artist, topTracks);
      })
      .catch((error) => {
        dispatch(receiveAllArtistInfoFailure(error));
      });
  }, [accessToken]);
  console.log(status);
  if (status === "loading") {
    return <FullScreenSpinner />;
  }

  return (
    <Wrapper>
      <Header />
      <Tags />
      <TopTracks />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 40px;
  background-color: black;
  height: 100vh;
`;

export default ArtistRoute;
