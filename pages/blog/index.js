import PageViews from '@/components/PageViews';
import { getAllPostsForBlog } from '@/lib/api';
import { Heading, Stack, Spacer, Text, Flex, Box } from '@chakra-ui/layout';
import NextLink from 'next/link';
import SEO from '@/components/SEO';

export default function BlogPage(props) {
  const posts = props.data;

  return (
    <Stack spacing={4}>
      <SEO title='Blog' />
      <Heading as='h1' size='2xl'>
        Blogs and snippets
      </Heading>
      <Text>
        Set of {posts.length} articles written by myself. Mostly development
        related.
      </Text>
      <Stack py={8} spacing={6}>
        {posts.map((post) => (
          <Flex
            as={NextLink}
            key={post.slug}
            passHref
            href={`/blog/${post.slug}`}
            direction='column'
          >
            <Box
              px={{ base: '2', md: '4' }}
              as='a'
              py='2'
              border='2px solid transparent'
              _focus={{
                outline: 'none',
                border: '2px solid #FC8181',
                borderRadius: 'md',
              }}
            >
              <Heading fontSize={{ base: 'lg', md: '3xl' }} key={post.title}>
                {post.title}
              </Heading>
              <Flex py='2' fontSize='sm'>
                <Text>{new Date(post.date).toDateString()}</Text>
                <Spacer />
                <PageViews slug={post.slug} />
              </Flex>
              <Text maxWidth={{ base: '90%', md: '80%' }}>{post.excerpt}</Text>
            </Box>
          </Flex>
        ))}
      </Stack>
    </Stack>
  );
}

export async function getStaticProps() {
  const data = await getAllPostsForBlog();
  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}
