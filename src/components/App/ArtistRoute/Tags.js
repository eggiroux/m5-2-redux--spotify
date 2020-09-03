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
        {tags.map((tag) => {
          return (
            <Tag key={tag}>
              <TagText>{tag}</TagText>
            </Tag>
          );
        })}
      </TagList>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: relative;
  text-align: center;
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  background-color: rgba(75, 75, 75, 0.4);
  border-radius: 4px;
  padding: 8px 20px;
  margin: 0 5px 5px;
`;

const TagText = styled.span`
  font-size: 11px;
  width: 175px;
  color: white;
  margin: 0;
`;

export default Tags;
