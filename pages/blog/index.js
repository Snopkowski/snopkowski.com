import PageViews from '@/components/PageViews';
import { getAllPostsForHome } from '@/lib/api';
import {
  Heading,
  Stack,
  Spacer,
  Text,
  Flex,
  Link,
  Box,
} from '@chakra-ui/layout';
import NextLink from 'next/link';
import Post from './[slug]';
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ipsam
        mollitia doloremque.
      </Text>
      <Stack py={8} spacing={6}>
        {posts.map((post) => (
          <Flex
            as={NextLink}
            key={post.slug}
            passHref
            href={`blog/${post.slug}`}
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
              <Flex py='1'>
                <PageViews slug={post.slug} />
                <Spacer />
                <Text>{post.date}</Text>
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
  const data = await getAllPostsForHome();
  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}
