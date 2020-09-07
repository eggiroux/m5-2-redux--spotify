import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Tags = () => {
  const currentArtist = useSelector((state) => state.artists.currentArtist);
  const tags = currentArtist.genres;

  //console.log("from tags", tags);
  return (
    <Wrapper>
      <h3>tags</h3>
      <TagList>
        {tags.map((tag, index) => {
          if (index <= 1) {
            return (
              <Tag key={tag}>
                <TagText>{tag}</TagText>
              </Tag>
            );
          }
        })}
      </TagList>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  text-align: center;
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
`;

const Tag = styled.div`
  position: relative;
  background-color: rgba(75, 75, 75, 0.4);
  border-radius: 4px;
  padding: 8px 20px 11px;
  margin: 0 5px 10px;
  overflow: hidden;

  & :before {
    content: "";
    position: absolute;
    left: -2px;
    top: -2px;
    border: 6px rgba(75, 75, 75, 0.4) solid;
    border-top-color: #0b0f14;
    border-left-color: #0b0f14;
    border-radius: 3px;
    box-shadow: 4px -4px 5px rgba(0, 0, 0, 0.15);
    z-index: 2;
  }
`;

const TagText = styled.span`
  font-size: 11px;
  width: 175px;
  color: white;
  margin: 0;
`;

export default Tags;
