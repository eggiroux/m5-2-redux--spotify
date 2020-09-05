import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { shortNumber } from "../../../helpers/utils";

const Header = () => {
  const currentArtist = useSelector((state) => state.artists.currentArtist);

  const avatarSrc = currentArtist.images[1].url;
  const artistName = currentArtist.name;
  const followers = currentArtist.followers.total;

  shortNumber(followers);

  return (
    <Wrapper>
      <Avatar src={avatarSrc} />
      <ArtistName>{artistName}</ArtistName>
      <Followers>
        {shortNumber(followers)} <span>followers</span>
      </Followers>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  position: relative;
`;

const Avatar = styled.img`
  height: 175px;
  width: 175px;
  border-radius: 190.5px;
`;

const ArtistName = styled.h2`
  position: relative;
  top: -50px;
  margin: 0;

  font-size: 48px;
  line-height: 59px;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.75), 0px 4px 4px rgba(0, 0, 0, 0.5),
    4px 8px 25px #000000;
  color: white;
`;

const Followers = styled.p`
  position: relative;
  top: -30px;
  margin: 0;

  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #ff4fd8;

  & span {
    color: white;
  }
`;

export default Header;
