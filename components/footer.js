import styled from "styled-components";

import Container from "./container";

import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <StyledContainer>
      <Container>this is the footer</Container>
    </StyledContainer>
  );
}

const StyledContainer = styled.footer`
  background: #efefef;
`;
