import styled from "styled-components";

import Layout from "../components/layout";
import Container from "../components/container";
import PageBanner from "../components/page-banner";
import PostPreview from "../components/post/post-preview";
import SearchBar from "../components/search-bar";

import { getAllPosts } from "../lib/api";

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPosts(preview);

  return {
    props: { preview, allPosts },
  };
}

export default function Blog({ preview, allPosts }) {
  return (
    <>
      <Layout>
        <Container>
          <PageBanner title='Blog' img='./banner--home.jpg' />
          <StyledSection>
            <div className='content'>
              <StyledPostsWrapper className='col'>
                {allPosts.map((v) => (
                  <PostPreview
                    key={v.slug}
                    title={v.title}
                    coverImage={v.coverImage}
                    date={v.date}
                    excerpt={v.excerpt}
                    author={v.author}
                    slug={v.slug}
                  />
                ))}
              </StyledPostsWrapper>
              <div className='col'>
                <SearchBar />
              </div>
            </div>
          </StyledSection>
        </Container>
      </Layout>
    </>
  );
}

const StyledSection = styled.section`
  .content {
    display: flex;
  }
`;

const StyledPostsWrapper = styled.div`
  width: 75%;
`;
