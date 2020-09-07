import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import ArtistLink from "./ArtistLink";

const RelatedArtists = () => {
  const { relatedArtists } = useSelector((state) => state.artists);

  return (
    <Wrapper>
      <h3>related artists</h3>
      <ArtistList>
        {relatedArtists.map((artist, index) => {
          //console.log(artist.images);
          return (
            <li key={`${artist.name}-${index}`}>
              <ArtistLink
                avatarSrc={artist.images[artist.images.length - 2].url}
                name={artist.name}
                artistId={artist.id}
              />
            </li>
          );
        })}
      </ArtistList>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  margin-top: 50px;
`;

const ArtistList = styled.ul`
  display: flex;
  align-items: start;
  justify-content: start;
  overflow: scroll;
  margin: 0;
  scroll-snap-type: x mandatory;

  & li {
    padding: 15px;
    list-style-type: none;
    scroll-snap-align: start;
  }
`;

export default RelatedArtists;
