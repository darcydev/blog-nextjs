import styled from "styled-components";

import Layout from "../components/layout";
import Container from "../components/container";
import PageBanner from "../components/page-banner";
import Person from "../components/person";

import { getAllPeople } from "../lib/api";

export async function getStaticProps({ preview = false }) {
  const allPeople = await getAllPeople(preview);

  return {
    props: { preview, allPeople },
  };
}

export default function People({ preview, allPeople }) {
  return (
    <>
      <Layout>
        <Container>
          <PageBanner title='People' img='./banner--people.jpg' />
          <StyledSection>
            <div className='content'>
              <StyledPeopleWrapper>
                {allPeople.map((v, i) => (
                  <Person
                    key={v.name}
                    name={v.name}
                    title={v.title}
                    bio={v.bio}
                    pic={v.picture}
                    picOnRight={i % 2 === 0 ? true : false}
                  />
                ))}
              </StyledPeopleWrapper>
            </div>
          </StyledSection>
        </Container>
      </Layout>
    </>
  );
}

const StyledSection = styled.section``;

const StyledPeopleWrapper = styled.div``;
