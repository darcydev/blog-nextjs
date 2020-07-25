import styled from "styled-components";

import Layout from "../components/layout";
import Container from "../components/container";
import PageBanner from "../components/page-banner";

import { getAllPosts } from "../lib/api";

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPosts(preview);

  return {
    props: { preview, allPosts },
  };
}

export default function Blog() {
  return (
    <>
      <Layout>
        <Container>
          <PageBanner title='Blog' img='./banner--home.jpg' />
          <section>
            <div className='content'>
              <div className='col'></div>
              <div className='col'>insert search bar</div>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
}
