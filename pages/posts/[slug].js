import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";

import Container from "../../components/container";
import Layout from "../../components/layout";
import PostHeader from "../../components/post/post-header";
import PostBody from "../../components/post/post-body";

import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";

import { CMS_NAME } from "../../lib/constants";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <article>
            <Head>
              <title>
                {post.title} | Next.js Blog Example with {CMS_NAME}
              </title>
              <meta property='og:image' content={post.coverImage.url} />
            </Head>
            <PostHeader title={post.title} coverImage={post.coverImage} date={post.date} author={post.author} />
            <PostBody content={post.content} />
          </article>
        )}
      </Container>
    </Layout>
  );
}

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
    paths: allPosts?.map(({ slug }) => `/posts/${slug}` ?? []),
    fallback: true,
  };
}
