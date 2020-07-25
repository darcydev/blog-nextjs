import Link from "next/link";
import styled from "styled-components";

import { navLinks } from "../lib/constants";

export default function PageBanner({ img, title, subTitle }) {
  return (
    <StyledContainer img={img}>
      <div className='content'>
        <div className='navbar-wrp'>
          {navLinks.map((v) => (
            <Link href={`${v.link}`}>
              <a aria-label={v.name}>{v.name}</a>
            </Link>
          ))}
        </div>
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

    .navbar-wrp {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 25px 0;

      a {
        margin: 0 10px;
        text-decoration: none;
        color: #fff;

        &:hover {
          color: #00833e;
        }
      }
    }

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
