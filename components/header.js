import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledContainer>
      <div className='content'>
        <Link href='/'>
          <a>Cattell Cooper</a>
        </Link>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.header`
  background: #00833e;
  height: 65px;

  .content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      font-size: 30px;
      text-decoration: none;
      color: #fff;
      font-weight: 700;
    }
  }
`;
