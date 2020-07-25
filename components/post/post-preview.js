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
  padding: 30px 0;
  border-bottom: 1px solid #efefef;

  img {
    width: 430px;
    height: 550px;
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 20px 40px 0 40px;

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
