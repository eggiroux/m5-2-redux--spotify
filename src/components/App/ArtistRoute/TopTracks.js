import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import PlayButton from "react-play-button";

const TopTracks = () => {
  const { topTracks } = useSelector((state) => state.artists);

  const [currentlyPlaying, setCurrentlyPlaying] = React.useState(null);

  // console.log("currentlyPlaying", currentlyPlaying);
  return (
    <Wrapper>
      <h3>top tracks</h3>
      <TrackList>
        {topTracks.map((track, index) => {
          if (index <= 2) {
            return (
              <li key={`${track.name}-${index}`}>
                <PlayButton
                  active={currentlyPlaying === index}
                  url={track.preview_url}
                  playIconColor="white"
                  stopIconColor="white"
                  idleBackgroundColor={"rgba(75, 75, 75, 0.4)"}
                  progressCircleColor={"#ff4fd8"}
                  progressCiricleWidth={"4"}
                  play={() => {
                    setCurrentlyPlaying(index);
                  }}
                  stop={() => {
                    setCurrentlyPlaying(null);
                  }}
                />
              </li>
            );
          }
        })}
      </TrackList>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  margin-top: 50px;
`;

const TrackList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  & li {
    margin: 0 15px;
    list-style-type: none;
  }
`;

export default TopTracks;
