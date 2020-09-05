import React from "react";
import styled from "styled-components";
import PlayButton from "react-play-button";

const TopTracks = ({ topTracks }) => {
  const [currentlyPlaying, setCurrentlyPlaying] = React.useState(null);

  const stopTrack = () => {
    setCurrentlyPlaying(null);
  };
  console.log("currentlyPlaying", currentlyPlaying);
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
                  progressCircleColor={"#3354FF"}
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

const Wrapper = styled.div`
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
