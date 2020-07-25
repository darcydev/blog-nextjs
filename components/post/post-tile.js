import Link from "next/link";
import styled from "styled-components";
import dayjs from "dayjs";
import { MdAccessTime } from "react-icons/md";

export default function PostTile({ title, coverImage, date, excerpt, author, slug }) {
  return (
    <StyledContainer>
      <Link as={`/posts/${slug}`} href='/posts/[slug]'>
        <img src={coverImage.url} alt={title} />
      </Link>
      <Link as={`/posts/${slug}`} href='/posts/[slug]'>
        <h4>{title}</h4>
      </Link>
      <div className='date-wrp'>
        <MdAccessTime />
        <span>{dayjs(date).format("MMMM DD, YYYY")}</span>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  padding: 0 20px;
  margin: 0 0 40px 0;
  flex: 0 0 30%;
  text-align: left;

  img {
    width: 100%;
    height: 450px;
    border-radius: 10px;
    cursor: pointer;
  }

  h4 {
    margin: 20px 0 40px 0;
    cursor: pointer;
  }

  .date-wrp {
    display: flex;
    align-items: center;
    height: 30px;

    svg {
      margin-right: 7px;
    }
  }
`;
