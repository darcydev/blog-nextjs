import { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  const [clicked, setClicked] = useState(false);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <StyledContainer onClick={() => setClicked(true)} clicked={clicked}>
      <input type='text' placeholder='Search' onChange={(e) => handleInputChange(e)} />
      <AiOutlineSearch size={23} color={clicked ? "green" : "black"} />
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
  border: ${({ clicked }) => (clicked ? "1px solid #00833e" : "1px solid #efefef")};
  border-radius: 5px;
  box-shadow: 1px 1px 1px #efefef;

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
