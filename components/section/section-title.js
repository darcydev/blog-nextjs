import Link from "next/link";
import styled from "styled-components";

export default function SectionTitle({ title, subtitle }) {
  return (
    <StyledContainer>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </StyledContainer>
  );
}

const StyledContainer = styled.header`
  text-align: center;
  margin: 0 0 40px 0;

  h2 {
    margin: 0 0 10px 0;
  }

  p {
    margin: 0;
  }
`;
