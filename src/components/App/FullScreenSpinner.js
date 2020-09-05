import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

const FullScreenSpinner = () => {
  return (
    <Wrapper>
      <Loader color={"#ff4fd8"} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
`;

export default FullScreenSpinner;
