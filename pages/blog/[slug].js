import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import { useRouter } from 'next/router';
import Head from 'next/head';
import NextLink from 'next/link';
import PostBody from '../../components/PostBody';
import { Heading, Box, Stack } from '@chakra-ui/react';
export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <Head>
            <title>{post.title} | Snopkowski.com</title>
          </Head>
          <Stack spacing={4} shouldWrapChildren>
            <Heading as='h1' fontSize='5xl'>
              {post.title}
            </Heading>
            <PostBody content={post.content} />
          </Stack>
          <Stack as='aside'>
            <Heading>More posts</Heading>
            {morePosts.map((morePost) => (
              <NextLink passHref href={`/blog/${morePost.slug}`}>
                {morePost.title}
              </NextLink>
            ))}
          </Stack>

          {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        </>
      )}
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}
