import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";

import Container from "../../components/container";
import Layout from "../../components/layout";
import Post from "../../components/post/post";

import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts?.map(({ slug }) => `/blog/${slug}` ?? []),
    fallback: true,
  };
}

export default function BlogPost({ post, morePosts, preview }) {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  console.log("post :>> ", post);

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <h1>Loading…</h1>
        ) : (
          <article>
            <Head>
              <title>Cattell Cooper: {post.title}</title>
              <meta property='og:image' content={post.coverImage.url} />
            </Head>
            <Post
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              content={post.content}
            />
          </article>
        )}
      </Container>
    </Layout>
  );
}
