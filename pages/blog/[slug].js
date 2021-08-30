import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/api';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import PostBody from 'components/PostBody';
import { Heading, Text, Box, Spacer, Flex, Stack } from '@chakra-ui/react';
import PageViews from 'components/PageViews';
import { useEffect } from 'react';
import SEO from 'components/SEO';
import ErrorPage from 'next/error';
export default function Post({ post, morePosts, slug }) {
  useEffect(() => {
    fetch(`/api/views/${slug}`, {
      method: 'POST',
    });
  }, [slug]);
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
          <SEO
            title={post.title}
            description={post.excerpt}
            image={post.coverImage}
            type='article'
          />
          <Stack spacing={4}>
            <Heading as='h1' fontSize='5xl'>
              {post.title}
            </Heading>
            <Flex>
              <PageViews slug={slug} />
              <Spacer />
              <Text>{new Date(post.date).toDateString()}</Text>
            </Flex>
            <Text>{post.excerpt}</Text>
            <PostBody content={post.content} />
          </Stack>
          <Stack pt={8} spacing={4} as='aside'>
            <Heading>More posts</Heading>
            {morePosts.map((morePost) => (
              <Box
                as={NextLink}
                key={morePost.title}
                passHref
                href={`/blog/${morePost.slug}`}
              >
                <Box
                  border='2px solid transparent'
                  _focus={{
                    outline: 'none',
                    border: '2px solid #FC8181',
                    borderRadius: 'md',
                  }}
                  px={2}
                  as='a'
                >
                  <Heading fontSize='3xl'>{morePost.title}</Heading>
                  <Text>{morePost.excerpt}</Text>
                </Box>
              </Box>
            ))}
          </Stack>
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
      slug: data?.post.slug || null,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 60,
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
