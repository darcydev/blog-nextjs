import Link from "next/link";
import styled from "styled-components";
import dayjs from "dayjs";
import { MdAccessTime } from "react-icons/md";

export default function PostPreview({ title, coverImage, date, excerpt, author, slug }) {
  return (
    <StyledContainer>
      <Link as={`/posts/${slug}`} href='/posts/[slug]'>
        <img src={coverImage.url} alt={title} />
      </Link>
      <div className='content'>
        <div className='title-wrp'>
          <Link as={`/posts/${slug}`} href='/posts/[slug]'>
            <h2>{title}</h2>
          </Link>
        </div>
        <div className='meta-wrp'>
          <span>By {author.name}</span>
          <MdAccessTime />
          <span>{dayjs(date).format("MMMM DD, YYYY")}</span>
        </div>
        <div className='excerpt-wrp'>
          <p>{excerpt}</p>
        </div>
        <div className='btn-wrp'>
          <Link as={`/posts/${slug}`} href='/posts/[slug]'>
            <p>READ MORE</p>
          </Link>
        </div>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  padding: 30px;
  border-bottom: 1px solid #efefef;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  @media (max-width: 800px) {
    padding: 50px;
  }

  img {
    width: 430px;
    max-width: 50%;
    height: auto;

    @media (max-width: 800px) {
      width: 100%;
      max-width: 100%;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 20px 40px 0 40px;

    @media (max-width: 800px) {
      padding: 20px 0 0 0;
    }

    .title-wrp {
      h2 {
        font-size: 26px;
        font-weight: 600;
        line-height: 38px;
        color: rgba(49, 50, 51, 1);
        margin-bottom: 8px;
      }
    }

    .meta-wrp {
      display: flex;
      align-items: center;
      font-weight: 700;

      svg {
        margin: 0 5px 0 10px;
      }
    }

    .excerpt-wrp {
    }

    .btn-wrp {
      margin-top: 15px;

      p {
        margin: 0;
        font-weight: 600;
        font-style: normal;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 1px;
        line-height: 14px;
        border-bottom: 2px solid #000;
        width: 73px;
        cursor: pointer;

        &:hover {
          border-bottom: 2px solid #00833e;
        }
      }
    }
  }
`;
