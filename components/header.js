import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledContainer>
      <div className='content'>
        <Link href='/'>
          <a>Blog</a>
        </Link>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.header`
  background: #efefef;
  height: 70px;

  .content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      font-size: 30px;
      text-decoration: none;
      color: #000;

      &:hover {
        color: purple;
      }
    }
  }
`;
