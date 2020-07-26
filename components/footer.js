import Link from "next/link";
import styled from "styled-components";

import { navLinks } from "../lib/constants";

export default function Footer() {
  return (
    <StyledContainer>
      <div className='content'>
        <div className='row'>
          {navLinks.map((v) => (
            <Link key={v.name} href={`${v.link}`}>
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

    .row {
      text-align: center;
      margin: 10px 0;

      a {
        text-decoration: none;
        color: #fff;
        margin: 0 20px;

        &:hover {
          color: ${({ theme }) => theme.color.primary};
        }
      }

      p {
        color: #fff;
      }
    }
  }
`;
