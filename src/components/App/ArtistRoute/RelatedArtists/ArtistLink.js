import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ArtistLink = ({ avatarSrc, name, artistId }) => {
  return (
    <Wrapper to={`/artists/${artistId}`}>
      <Avatar src={avatarSrc} alt="band icon" />
      <ArtistName>{name}</ArtistName>
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  text-decoration: none;
  padding: 0;
`;

const Avatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 100%;
`;

const ArtistName = styled.p`
  margin-top: -10px;
  font-weight: 600;
  font-size: 16px;
`;

export default ArtistLink;
