import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

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
              <StyledPostsWrapper>
                {allPosts.map((v) => (
                  <ScrollAnimation animateIn='fadeIn' delay={100}>
                    <PostPreview
                      key={v.slug}
                      title={v.title}
                      coverImage={v.coverImage}
                      date={v.date}
                      excerpt={v.excerpt}
                      author={v.author}
                      slug={v.slug}
                    />
                  </ScrollAnimation>
                ))}
              </StyledPostsWrapper>
              <div className='search-wrp'>
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

    @media (max-width: 800px) {
      flex-direction: column;
    }

    .search-wrp {
      width: 25%;
      display: flex;
      justify-content: center;
    }
  }
`;

const StyledPostsWrapper = styled.div`
  width: 75%;

  @media (max-width: 800px) {
    flex: 0 0 99%;
    width: 100%;
  }
`;
