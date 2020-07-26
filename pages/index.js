import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

import Layout from "../components/layout";
import Container from "../components/container";
import PageBanner from "../components/page-banner";
import PostTile from "../components/post/post-preview";

import { getAllPostsForHome } from "../lib/api";

const skillIcons = [
  { icon: "house", title: "Strategic city planning" },
  { icon: "house", title: "Transport policy and planning" },
  { icon: "house", title: "Strategic city planning" },
  { icon: "house", title: "Strategic city planning" },
  { icon: "house", title: "Strategic city planning" },
  { icon: "house", title: "Strategic city planning" },
  { icon: "house", title: "Strategic city planning" },
];

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { preview, allPosts },
  };
}

export default function Index({ preview, allPosts }) {
  return (
    <>
      <Layout preview={preview}>
        <Container>
          <PageBanner title='Creating Cities for a Sustainable Future' img='./banner--home.jpg' />
          <StyledSection>
            <div className='content'>
              <div className='col'>
                <img src='./logo--color.jpg' alt='Cattell Cooper' />
              </div>
              <div className='col'>
                <h2>Bespoke consultancy services</h2>
                <p>
                  Cattell Cooper offers bespoke consultancy services in urban transport policy and planning and related
                  project advisory. Every project is different, and each requires a unique, focused response. Cattell
                  Cooper brings the skills and experience together to deliver great outcomes.
                </p>
                <p>
                  Bryony Cooper founded Cattell Cooper in 2010 to provide bespoke transport planning consultancy to
                  public and private sector clients. Since then the company offer has expanded to include urban policy,
                  advisory and project development, and stakeholder communication and consultation.
                </p>
                <p>
                  Cattell Cooper is wholly focused on improving urban outcomes; promoting environmental, economic and
                  social sustainability within an equitable city.
                </p>
                <p>
                  Cattell Cooper believes in working closely with clients and their stakeholders to find strategies and
                  solutions that work to fix the problem or issue; we know each problem is unique and requires a
                  carefully considered and tailored response.
                </p>
                <p>
                  Bryony is a passionate advocate of UN Habitat’s Sustainable Development Goals and the New Urban Agenda
                  and an Associate with Urban Synergies Group.
                </p>
                <button>ABOUT US</button>
              </div>
            </div>
          </StyledSection>
          <StyledBanner />
          <StyledSection>
            <div className='content'>
              <div className='col single-col'>
                <h3>Skills</h3>
                <p>We have extensive experience in:</p>
                <div className='icons-wrp'>
                  {skillIcons.map((v) => {
                    return (
                      <ScrollAnimation animateIn='fadeIn' delay={20} animateOnce={true}>
                        <div className='icon-wrp'>
                          <img src={`./icons/${v.icon}.svg`} alt={v.title} />
                          <p>{v.title}</p>
                        </div>
                      </ScrollAnimation>
                    );
                  })}
                </div>
              </div>
            </div>
          </StyledSection>
          <StyledBanner />
          <div>INSERT TESTIMONAL SECTION</div>
          <StyledBlogsSection>
            <div className='content'>
              <div className='col'>
                <h3>Blog</h3>
                <p>Our latest news:</p>
                <StyledPostsWrapper>
                  {allPosts.map((v) => (
                    <ScrollAnimation animateIn='fadeIn' delay={100} animateOnce={true}>
                      <PostTile
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
              </div>
            </div>
          </StyledBlogsSection>
        </Container>
      </Layout>
    </>
  );
}

const StyledSection = styled.section`
  .content {
    display: flex;

    .col {
      img {
        width: 434px;
        height: auto;
        margin: 50px 60px 0 0;
      }
    }

    .single-col {
      margin: 0 auto;
      text-align: center;

      h3 {
        margin-bottom: 20px;
      }

      .icons-wrp {
        display: flex;
        flex-wrap: wrap;
        margin: 40px 0 0 0;
        justify-content: center;

        .icon-wrp {
          flex: 0 0 23%;
          margin: 10px;

          img {
            width: 64px;
            height: 64px;
            margin: 0;
          }
        }
      }
    }
  }
`;

const StyledBlogsSection = styled.section`
  .content {
    display: flex;

    .col {
      margin: 0 auto;
      text-align: center;
    }
  }
`;

const StyledPostsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledBanner = styled.div`
  height: 495px;
  background: url("./banner--bikes.jpg") no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
`;
