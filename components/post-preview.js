import Link from "next/link";
import styled from "styled-components";

export default function PostPreview({ title, coverImage, date, excerpt, author, slug }) {
  return (
    <StyledContainer>
      <Link as={`/posts/${slug}`} href='/posts/[slug]'>
        <img src={coverImage.url} alt={title} />
      </Link>
      <Link as={`/posts/${slug}`} href='/posts/[slug]'>
        <h4>{title}</h4>
      </Link>
      <Link as={`/posts/${slug}`} href='/posts/[slug]'>
        <p>{date}</p>
      </Link>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  padding: 0 20px;
  margin: 0 0 40px 0;
  flex: 0 0 32%;
  text-align: left;

  img {
    width: 100%;
    height: 450px;
    border-radius: 10px;
  }

  h4 {
    margin: 10px 0;
  }
`;
