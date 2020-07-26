import Link from "next/link";
import styled from "styled-components";

import { navLinks } from "../lib/constants";

export default function PageBanner({ img, title, subTitle }) {
  return (
    <StyledContainer img={img}>
      <div className='content'>
        <StyledNav>
          <div className='nav-content'>
            {navLinks.map((v) => (
              <Link href={`${v.link}`}>
                <a aria-label={v.name}>{v.name}</a>
              </Link>
            ))}
          </div>
        </StyledNav>
        <div className='title-wrp'>
          <h1>{title}</h1>
        </div>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  height: 671px;

  .content {
    height: 100%;
    background: ${({ img }) => (img ? `url(${img})` : "#00833e")};
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: top left;
    background-size: cover;
    display: flex;
    flex-direction: column;
    position: relative;

    .title-wrp {
      flex: 1;
      align-self: center;
      display: flex;
      align-items: center;

      h1 {
        text-align: center;
        color: #fff;
        font-size: 60px;
        line-height: 70px;
      }
    }
  }
`;

const StyledNav = styled.nav`
  position: absolute;
  top: 45px;
  width: 100%;

  .nav-content {
    display: flex;
    justify-content: center;

    a {
      margin: 0 10px;
      text-decoration: none;
      color: #fff;

      &:hover {
        color: #00833e;
      }
    }
  }
`;
