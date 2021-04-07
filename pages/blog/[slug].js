import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import { useRouter } from 'next/router';
import Head from 'next/head';
import PostBody from '../../components/PostBody';
import { Heading, Stack } from '@chakra-ui/react';
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
          <Stack as='article' spacing={20}>
            <Head>
              <title>{post.title} | Snopkowski.com</title>
            </Head>
            <main>
              <Heading as='h1'>{post.title}</Heading>
              <PostBody content={post.content} />
            </main>
            <aside>
              {morePosts.map((morePost) => (
                <div>{morePost.title}</div>
              ))}
            </aside>
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
