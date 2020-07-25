import Link from "next/link";
import styled from "styled-components";

import { navLinks } from "../lib/constants";

export default function Footer() {
  return (
    <StyledContainer>
      <div className='content'>
        <div className='row'>
          {navLinks.map((v) => (
            <Link href={`${v.link}`}>
              <a aria-label={v.name}>{v.name}</a>
            </Link>
          ))}
        </div>
        <div className='row'>
          <p>Copyright 2019 All right reserved.</p>
        </div>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.footer`
  height: 341px;
  background: url("./banner--home.jpg") no-repeat;
  background-attachment: scroll;
  background-position: top left;
  background-size: cover;

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    color: #fff;
  }
`;
