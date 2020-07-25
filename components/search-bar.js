import { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  const [input, setInput] = useState("");

  return (
    <StyledContainer>
      <input type='text' placeholder='Search' />
      <AiOutlineSearch size={23} />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 145px;
  height: 54px;
  background: #efefef;
  display: flex;
  align-items: center;
  padding: 0 10px;

  input {
    border: none;
    background: inherit;
    width: 100%;
    height: 90%;
    outline: none;
  }

  svg {
  }
`;
