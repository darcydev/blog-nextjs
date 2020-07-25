import Layout from "../components/layout";
import Container from "../components/container";
import MoreStories from "../components/more-stories";

import { getAllPostsForHome } from "../lib/api";

export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0];
  const otherPosts = allPosts.slice(1);

  return (
    <>
      <Layout preview={preview}>
        <Container>
          {heroPost && <div>{heroPost.slug}</div>}
          {otherPosts && <MoreStories posts={otherPosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { preview, allPosts },
  };
}
